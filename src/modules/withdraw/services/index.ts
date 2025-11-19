import { Request } from "express";
import { getManager, getRepository } from "typeorm";
import { config } from "../../../config";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { BaseOrderByInput, EDeposit, EUserType } from "../../../utils/base/baseType";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import { ETransactionHistoryIdentifier, ETransactionStatus, TransactionHistory } from "../../transactionHistory";
import { Wallet } from "../../wallet";
import { Withdraw } from "../entity";
import { ApproveWithdrawInput, CreateWithdrawInput, RejectWithdrawInput, UpdateWithdrawInput, WithdrawWhereInput } from "../types";

export class WithdrawService {
  static async createWithdraw({
    data,
    req,
  }: {
    data: CreateWithdrawInput;
    req: Request;
  }): Promise<Response<Withdraw | null>> {
    const withdrawRepository = getRepository(Withdraw);
    const transactionRepository = getRepository(TransactionHistory);
    const walletRepository = getRepository(Wallet);

    try {
      // Try to get customer or shop token
      let createdBy: string | undefined;
      let userType: EUserType | undefined;

      try {
        const customerData = new AuthMiddlewareService().verifyCustomerToken(req);
        console.log(customerData);

        createdBy = customerData?.id;
        userType = customerData?.type as EUserType ?? EUserType.CUSTOMER;
      } catch {
        try {
          const shopData = new AuthMiddlewareService().verifyShopToken(req);
          createdBy = shopData?.id;
          userType = shopData?.type as EUserType ?? EUserType.SHOP;
        } catch {
          handleError(config.message.invalid_token, 401, null);
        }
      }

      if (!createdBy) {
        return handleError(config.message.invalid_token, 401, null);
      }

      // Validation
      if (!data.amount || data.amount <= 0) {
        return handleError("Amount must be greater than 0", 400, null);
      }

      if (!data.accountName || !data.accountNumber) {
        return handleError("Account name and account number are required", 400, null);
      }

      if (!data.coin_type) {
        return handleError("Coin type is required", 400, null);
      }

      if (!data.wallet_id) {
        return handleError("Wallet ID is required", 400, null);
      }

      // Verify wallet exists
      const wallet = await walletRepository.findOne({
        where: { id: data.wallet_id },
      });

      if (!wallet) {
        return handleError("Wallet not found", 404, null);
      }


      // Check if wallet has sufficient balance
      if (wallet.total_balance < data.amount) {
        return handleError("Insufficient wallet balance", 400, null);
      }

      return await getManager().transaction(async (manager) => {
        // CREATE Withdraw
        const withdraw = withdrawRepository.create({
          amount: data.amount,
          coin_type: data.coin_type,
          accountName: data.accountName,
          accountNumber: data.accountNumber,
          note: data.note,
          status: EDeposit.PENDING,
          created_by: createdBy,
          type: userType,
          customer_id: userType === EUserType.CUSTOMER ? createdBy : undefined,
          shop_id: userType === EUserType.SHOP ? createdBy : undefined,
        });

        const savedWithdraw = await manager.save(withdraw);

        // CREATE TransactionHistory
        const transaction = transactionRepository.create({
          identifier: ETransactionHistoryIdentifier.WITHDRAW,
          amount: data.amount,
          coin_type: data.coin_type,
          wallet_id: data.wallet_id,
          account_number: data.accountNumber,
          customer_id: userType === EUserType.CUSTOMER ? createdBy : undefined,
          shop_id: userType === EUserType.SHOP ? createdBy : undefined,
          status: ETransactionStatus.PENDING,
          created_by: createdBy,
          withdraw: savedWithdraw,
        });

        const savedTransaction = await manager.save(transaction);

        // Link withdraw to transaction (owner side)
        savedWithdraw.transaction = savedTransaction;

        const finalWithdraw = await manager.save(savedWithdraw);

        return handleSuccess(finalWithdraw);
      });

    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateWithdraw({
    data,
    req,
  }: {
    data: UpdateWithdrawInput;
    req: Request;
  }): Promise<Response<Withdraw | null>> {
    const withdrawRepository = getRepository(Withdraw);
    const transactionRepository = getRepository(TransactionHistory);
    const walletRepository = getRepository(Wallet);

    try {
      // Try to get user token (staff, shop, or customer)
      let updatedBy: string | undefined;
      let isStaff = false;
      let userType = null;

      try {
        const staffData = new AuthMiddlewareService().verifyStaffToken(req);
        updatedBy = staffData?.id;
        isStaff = true;
        userType = staffData?.type;
      } catch {
        try {
          const customerData = new AuthMiddlewareService().verifyCustomerToken(req);
          updatedBy = customerData?.id;
          userType = customerData?.type;
        } catch {
          const shopData = new AuthMiddlewareService().verifyShopToken(req);
          updatedBy = shopData?.id;
          userType = shopData?.type;
        }
      }

      if (!updatedBy) {
        return handleError(config.message.invalid_token, 401, null);
      }

      const withdraw = await withdrawRepository.findOne({
        where: { id: data.id },
      });

      const olderAmount = withdraw?.amount;
      const withdrawStatus = withdraw?.status == EDeposit.PENDING;

      if (!withdraw) {
        return handleError("Withdraw not found", 404, null);
      }

      if (!withdrawStatus) {
        return handleError("Withdraw already processed", 409, null);
      }

      // Only staff can approve/reject withdrawals
      if (!userType && !isStaff) {
        return handleError("Only staff can approve or reject withdrawals", 403, null);
      }

      // Update fields
      withdraw.updated_by = updatedBy;
      Object.assign(withdraw, data);
      const updatedWithdraw = await withdrawRepository.save(withdraw);

      const amount = data.amount;

      // Handle transaction creation/update if amount changed
      if (amount && amount !== olderAmount) {
        let transaction = await transactionRepository.findOne({
          where: { id: withdraw.transaction_id },
          relations: ["withdraw"],
        });

        if (!transaction) {
          transaction = transactionRepository.create({
            identifier: ETransactionHistoryIdentifier.WITHDRAW,
            amount: data.amount,
            coin_type: updatedWithdraw.coin_type,
            account_number: updatedWithdraw.accountNumber,
            customer_id: withdraw.customer_id,
            shop_id: withdraw.shop_id,
            status: ETransactionStatus.PENDING,
            created_by: withdraw.created_by,
            withdraw: updatedWithdraw,
          });

          await transactionRepository.save(transaction);
        } else {
          transaction.amount = amount;
          await transactionRepository.save(transaction);
        }
      }

      return handleSuccess(updatedWithdraw);
    } catch (error: any) {
      console.log(error);

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async approveWithdraw({
    data,
    req,
  }: {
    data: ApproveWithdrawInput;
    req: Request;
  }): Promise<Response<Withdraw | null>> {
    const withdrawRepository = getRepository(Withdraw);
    const transactionRepository = getRepository(TransactionHistory);
    const walletRepository = getRepository(Wallet);

    try {
      // Try to get user token (staff only)
      let updatedBy: string | undefined;
      let isStaff = false;
      let userType = null;

      try {
        const staffData = new AuthMiddlewareService().verifyStaffToken(req);
        updatedBy = staffData?.id;
        isStaff = true;
        userType = staffData?.type;
      } catch {
        try {
          const customerData = new AuthMiddlewareService().verifyCustomerToken(req);
          updatedBy = customerData?.id;
          userType = customerData?.type;
        } catch {
          return handleError(config.message.invalid_token, 404, null);
        }
      }

      if (!updatedBy) {
        return handleError("Permissin denied", 401, null);
      }

      const withdraw = await withdrawRepository.findOne({
        where: { id: data.id },
      });

      const withdrawStatus = withdraw?.status == EDeposit.PENDING;

      if (!withdraw) {
        return handleError("Withdraw not found", 404, null);
      }

      if (!withdrawStatus) {
        return handleError("Withdraw already processed", 409, null);
      }

      // Only staff can approve/reject withdrawals
      if (!isStaff) {
        return handleError("Only staff can approve or reject withdrawals", 403, null);
      }

      // Update fields
      withdraw.updated_by = updatedBy;
      withdraw.approved_at = new Date();
      withdraw.approved_by = updatedBy;
      withdraw.status = EDeposit.COMPLETED;

      const updatedWithdraw = await withdrawRepository.save(withdraw);

      // Deduct from wallet balance
      if (withdraw.type == EUserType.CUSTOMER) {
        const checkWallet = await walletRepository.findOne({
          where: { customer_id: withdraw.created_by },
        });

        if (!checkWallet) {
          return handleError("Wallet not found", 404, null);
        }

        // Check if wallet has sufficient balance
        if (checkWallet.total_balance < withdraw.amount) {
          return handleError("Insufficient wallet balance", 400, null);
        }

        checkWallet.total_balance -= withdraw.amount;
        await walletRepository.save(checkWallet);
      } else if (withdraw.type == EUserType.SHOP) {
        const checkWallet = await walletRepository.findOne({
          where: { shop_id: withdraw.created_by },
        });

        if (!checkWallet) {
          return handleError("Wallet not found", 404, null);
        }

        // Check if wallet has sufficient balance
        if (checkWallet.total_balance < withdraw.amount) {
          return handleError("Insufficient wallet balance", 400, null);
        }

        checkWallet.total_balance -= withdraw.amount;
        await walletRepository.save(checkWallet);
      }

      // Update transaction status
      const transaction = await transactionRepository.findOne({
        where: { id: withdraw.transaction_id },
      });

      if (transaction) {
        transaction.amount = withdraw.amount;
        transaction.status = ETransactionStatus.APPROVED;
        await transactionRepository.save(transaction);
      }

      return handleSuccess(updatedWithdraw);
    } catch (error: any) {
      console.log(error);

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async rejectWithdraw({
    data,
    req,
  }: {
    data: RejectWithdrawInput;
    req: Request;
  }): Promise<Response<Withdraw | null>> {
    const withdrawRepository = getRepository(Withdraw);
    const transactionRepository = getRepository(TransactionHistory);

    try {
      // Try to get user token (staff only)
      let updatedBy: string | undefined;
      let isStaff = false;

      try {
        const staffData = new AuthMiddlewareService().verifyStaffToken(req);
        updatedBy = staffData?.id;
        isStaff = true;
      } catch {
        return handleError(config.message.invalid_token, 401, null);
      }

      if (!updatedBy || !isStaff) {
        return handleError("Only staff can reject withdrawals", 403, null);
      }

      if (!data.rejection_reason || data.rejection_reason.trim() === "") {
        return handleError("Rejection reason is required", 400, null);
      }

      const withdraw = await withdrawRepository.findOne({
        where: { id: data.id },
      });

      if (!withdraw) {
        return handleError("Withdraw not found", 404, null);
      }

      const withdrawStatus = withdraw?.status == EDeposit.PENDING;

      if (!withdrawStatus) {
        return handleError("Withdraw already processed", 409, null);
      }

      // Update fields - set status to DELETED for rejection
      withdraw.updated_by = updatedBy;
      withdraw.status = EDeposit.REJECTED;
      withdraw.rejection_reason = data.rejection_reason;

      const updatedWithdraw = await withdrawRepository.save(withdraw);

      // Update transaction status to REJECTED
      const transaction = await transactionRepository.findOne({
        where: { id: withdraw.transaction_id },
      });

      if (transaction) {
        transaction.status = ETransactionStatus.REJECTED;
        transaction.rejected_by = updatedBy;
        await transactionRepository.save(transaction);
      }

      return handleSuccess(updatedWithdraw);
    } catch (error: any) {
      console.log(error);

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async deleteWithdraw({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Withdraw | null>> {
    const withdrawRepository = getRepository(Withdraw);

    try {
      let userId: string | undefined;

      // Try to get user token (staff, shop, or customer)
      try {
        const staffData = new AuthMiddlewareService().verifyStaffToken(req);
        userId = staffData?.id;
      } catch {
        try {
          const customerData = new AuthMiddlewareService().verifyCustomerToken(req);
          userId = customerData?.id;
        } catch {
          const shopData = new AuthMiddlewareService().verifyShopToken(req);
          userId = shopData?.id;
        }
      }

      if (!userId) {
        return handleError(config.message.invalid_token, 401, null);
      }

      const withdraw = await withdrawRepository.findOne({
        where: { id, is_active: true },
      });

      if (!withdraw) {
        return handleError("Withdraw not found", 404, null);
      }

      // Soft delete: update status to DELETED
      withdraw.status = EDeposit.DELETED;
      withdraw.updated_by = userId;

      const deletedWithdraw = await withdrawRepository.save(withdraw);

      return handleSuccess(deletedWithdraw as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getWithdraws({
    where,
    page,
    limit,
    sortedBy,
    req,
  }: {
    where: Partial<WithdrawWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
  }): Promise<Response<Withdraw[] | null>> {
    const withdrawRepository = getRepository(Withdraw);

    try {
      let userId: string | undefined;
      let userType: EUserType

      // Determine user type and ID
      try {
        const staffData = new AuthMiddlewareService().verifyStaffToken(req);
        userId = staffData?.id;
        userType = staffData?.type as EUserType ?? EUserType.STAFF;
      } catch {
        try {
          const customerData = new AuthMiddlewareService().verifyCustomerToken(req);
          userId = customerData?.id;
          userType = customerData?.type as EUserType ?? EUserType.CUSTOMER;
        } catch {
          const shopData = new AuthMiddlewareService().verifyShopToken(req);
          userId = shopData?.id;
          userType = shopData?.type as EUserType ?? EUserType.SHOP;
        }
      }

      if (!userId) {
        return handleError(config.message.invalid_token, 401, null);
      }

      const order = this.order(sortedBy);

      const queryBuilder = withdrawRepository
        .createQueryBuilder("withdraw")
        .leftJoinAndSelect("withdraw.customer", "customer")
        .leftJoinAndSelect("withdraw.shop", "shop")
        .leftJoinAndSelect("withdraw.transaction", "transaction")
        .where("withdraw.is_active = :isActive", { isActive: true });

      // Filter by user type (non-staff users can only see their own withdrawals)
      if (userType === EUserType.CUSTOMER) {
        queryBuilder.andWhere("withdraw.customer_id = :customerId", {
          customerId: userId,
        });
      } else if (userType === EUserType.SHOP) {
        queryBuilder.andWhere("withdraw.shop_id = :shopId", {
          shopId: userId,
        });
      }
      // Staff can see all withdrawals

      // Apply filters
      if (where?.customer_id) {
        queryBuilder.andWhere("withdraw.customer_id = :customerId", {
          customerId: where.customer_id,
        });
      }

      if (where?.shop_id) {
        queryBuilder.andWhere("withdraw.shop_id = :shopId", {
          shopId: where.shop_id,
        });
      }

      if (where?.status) {
        queryBuilder.andWhere("withdraw.status = :status", {
          status: where.status,
        });
      }

      if (where?.type) {
        queryBuilder.andWhere("withdraw.type = :type", {
          type: where.type,
        });
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(withdraw.created_at) BETWEEN :startDate AND :endDate",
          {
            startDate: where.createdAtBetween.startDate,
            endDate: where.createdAtBetween.endDate,
          }
        );
      }

      // Pagination and sorting
      queryBuilder
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy(order as any);

      const [withdrawals, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(withdrawals, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getWithdraw({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Withdraw | null>> {
    const withdrawRepository = getRepository(Withdraw);

    try {
      let userId: string | undefined;
      let userType: EUserType

      // Determine user type and ID
      try {
        const staffData = new AuthMiddlewareService().verifyStaffToken(req);
        userId = staffData?.id;
        userType = staffData?.type as EUserType ?? EUserType.STAFF;
      } catch {
        try {
          const customerData = new AuthMiddlewareService().verifyCustomerToken(req);
          userId = customerData?.id;
          userType = customerData?.type as EUserType ?? EUserType.CUSTOMER;
        } catch {
          const shopData = new AuthMiddlewareService().verifyShopToken(req);
          userId = shopData?.id;
          userType = shopData?.type as EUserType ?? EUserType.SHOP;

        }
      }

      if (!userId) {
        return handleError(config.message.invalid_token, 401, null);
      }

      const queryBuilder = withdrawRepository
        .createQueryBuilder("withdraw")
        .leftJoinAndSelect("withdraw.customer", "customer")
        .leftJoinAndSelect("withdraw.shop", "shop")
        .leftJoinAndSelect("withdraw.transaction", "transaction")
        .where("withdraw.id = :id", { id })
        .andWhere("withdraw.is_active = :isActive", { isActive: true });

      // Non-staff users can only see their own withdrawals
      if (userType === EUserType.CUSTOMER) {
        queryBuilder.andWhere("withdraw.customer_id = :customerId", {
          customerId: userId,
        });
      } else if (userType === EUserType.SHOP) {
        queryBuilder.andWhere("withdraw.shop_id = :shopId", {
          shopId: userId,
        });
      }

      const withdraw = await queryBuilder.getOne();

      if (!withdraw) {
        return handleError("Withdraw not found", 404, null);
      }

      return handleSuccess(withdraw);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  // Map `sortedBy` enum to TypeORM order format
  static order(sortedBy: BaseOrderByInput) {
    switch (sortedBy) {
      case BaseOrderByInput.created_at_ASC:
        return { "withdraw.created_at": "ASC" };
      case BaseOrderByInput.created_at_DESC:
        return { "withdraw.created_at": "DESC" };
      case BaseOrderByInput.updated_at_ASC:
        return { "withdraw.updated_at": "ASC" };
      case BaseOrderByInput.updated_at_DESC:
        return { "withdraw.updated_at": "DESC" };
      default:
        return { "withdraw.created_at": "DESC" }; // Default order
    }
  }
}

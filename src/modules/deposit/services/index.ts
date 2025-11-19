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
import { Customer } from "../../customer";
import { Shop } from "../../shop";
import { ETransactionHistoryIdentifier, ETransactionStatus, TransactionHistory } from "../../transactionHistory";
import { Wallet } from "../../wallet";
import { Deposit } from "../entity";
import { ApprovDepositInput, CreateDepositInput, DepositWhereInput, UpdateDepositInput } from "../types";
import { RejectWithdrawInput } from "../../withdraw";

export class DepositService {
  static async createDeposit({
    data,
    req,
  }: {
    data: CreateDepositInput;
    req: Request;
  }): Promise<Response<Deposit | null>> {
    const depositRepository = getRepository(Deposit);
    const transactionRepository = getRepository(TransactionHistory);
    const walletRepository = getRepository(Wallet);

    try {
      // Try to get customer or shop token
      let createdBy: string | undefined;
      let userType: EUserType | undefined;

      try {
        const customerData = new AuthMiddlewareService().verifyCustomerToken(req);
        createdBy = customerData?.id;
        userType = EUserType.CUSTOMER;
      } catch {
        try {
          const shopData = new AuthMiddlewareService().verifyShopToken(req);
          createdBy = shopData?.id;
          userType = EUserType.SHOP;
        } catch {
          const staffData = new AuthMiddlewareService().verifyStaffToken(req);
          createdBy = staffData?.id;
          userType = EUserType.STAFF;
        }
      }

      if (!createdBy) {
        return handleError(config.message.invalid_token, 401, null);
      }

      // Validation
      if (!data.amount || data.amount <= 0) {
        return handleError("Amount must be greater than 0", 400, null);
      }

      if (!data.payment_slip) {
        return handleError("Deposit slip image is required", 400, null);
      }

      if (!data.coin_type) {
        return handleError("Coin type is required", 400, null);
      }

      if (!data.walled_id) {
        return handleError("Wallet ID is required", 400, null);
      }

      // Verify wallet exists
      const wallet = await walletRepository.findOne({
        where: { id: data.walled_id },
      });

      if (!wallet) {
        return handleError("Wallet not found", 404, null);
      }

      return await getManager().transaction(async (manager) => {

        // CREATE Deposit
        const deposit = depositRepository.create({
          amount: data.amount,
          coin_type: data.coin_type,
          payment_slip: data.payment_slip,
          note: data.note,
          status: EDeposit.PENDING,
          created_by: createdBy,
          type: userType,
          customer_id: userType === EUserType.CUSTOMER ? createdBy : undefined,
          shop_id: userType === EUserType.SHOP ? createdBy : undefined,
        });

        const savedDeposit = await manager.save(deposit);

        // CREATE TransactionHistory
        const transaction = transactionRepository.create({
          identifier: ETransactionHistoryIdentifier.DEPOSIT,
          amount: data.amount,
          coin_type: data.coin_type,
          wallet_id: data.walled_id,
          payment_slip: data.payment_slip,
          customer_id: userType === EUserType.CUSTOMER ? createdBy : undefined,
          shop_id: userType === EUserType.SHOP ? createdBy : undefined,
          status: ETransactionStatus.PENDING,
          created_by: createdBy,
          deposit: savedDeposit,
        });

        const savedTransaction = await manager.save(transaction);

        // Link deposit to transaction (owner side)
        savedDeposit.transaction = savedTransaction;

        const finalDeposit = await manager.save(savedDeposit);

        return handleSuccess(finalDeposit);
      });

    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateDeposit({
    data,
    req,
  }: {
    data: UpdateDepositInput;
    req: Request;
  }): Promise<Response<Deposit | null>> {
    const depositRepository = getRepository(Deposit);
    const cusomterRepository = getRepository(Customer);
    const transactionRepository = getRepository(TransactionHistory);
    const walletRepository = getRepository(Wallet);
    const shopRepository = getRepository(Shop);
    try {
      // Try to get user token (staff, shop, or customer)
      let updatedBy: string | undefined;
      let isStaff = false;
      let userType = null

      try {
        const staffData = new AuthMiddlewareService().verifyStaffToken(req);
        updatedBy = staffData?.id;
        isStaff = true;
        userType = staffData?.type

      } catch {
        try {
          const customerData = new AuthMiddlewareService().verifyCustomerToken(req);
          updatedBy = customerData?.id;
          userType = customerData?.type

        } catch {
          const shopData = new AuthMiddlewareService().verifyShopToken(req);
          updatedBy = shopData?.id;
          userType = shopData?.type

        }
      }

      if (!updatedBy) {
        return handleError(config.message.invalid_token, 401, null);
      }

      const deposit = await depositRepository.findOne({
        where: { id: data.id },
      });
      const olderAmount = deposit?.amount
      const depositStatus = deposit?.status == EDeposit.PENDING
      if (!deposit) {
        return handleError("Deposit not found", 404, null);
      }


      if (!depositStatus) {
        return handleError("Deposit already approved", 409, null);
      }

      // Only staff can approve/reject deposits
      if (!userType && !isStaff) {
        return handleError("Only staff can approve or reject deposits", 403, null);
      }

      // Update fields
      deposit.updated_by = updatedBy;
      Object.assign(deposit, data);
      const updatedDeposit = await depositRepository.save(deposit);

      if (deposit.type == EUserType.CUSTOMER) {
        const checkWallet = await walletRepository.findOne({ where: { customer_id: deposit.created_by } })

        if (!checkWallet) {
          return handleError("Wallet not found", 404, null);
        }

        await walletRepository.save(checkWallet);


      } else if (deposit.type == EUserType.SHOP) {
        const checkWallet = await walletRepository.findOne({ where: { shop_id: deposit.created_by } })

        if (!checkWallet) {
          return handleError("Wallet not found", 404, null);
        }

        await walletRepository.save(checkWallet);
      }
      const amount = data.amount

      if (amount && amount !== olderAmount) {
        let transaction = await transactionRepository.findOne({
          where: { id: deposit.transaction_id },
          relations: ["deposit"],
        });

        if (!transaction) {
          transaction = transactionRepository.create({
            identifier: ETransactionHistoryIdentifier.DEPOSIT,
            amount: data.amount,
            coin_type: updatedDeposit.coin_type,
            payment_slip: updatedDeposit.payment_slip,
            customer_id:
              userType === EUserType.CUSTOMER ? updatedDeposit.created_by : undefined,
            shop_id:
              userType === EUserType.SHOP ? updatedDeposit.created_by : undefined,
            status: ETransactionStatus.PENDING,
            created_by: updatedDeposit.created_by,
            deposit: updatedDeposit,
          });

          await transactionRepository.save(transaction);
        } else {
          transaction.amount = amount
          await transactionRepository.save(transaction);
        }
      }

      return handleSuccess(updatedDeposit);
    } catch (error: any) {
      console.log(error);

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async approval({
    data,
    req,
  }: {
    data: ApprovDepositInput;
    req: Request;
  }): Promise<Response<Deposit | null>> {
    const depositRepository = getRepository(Deposit);
    const cusomterRepository = getRepository(Customer);
    const transactionRepository = getRepository(TransactionHistory);
    const walletRepository = getRepository(Wallet);
    const shopRepository = getRepository(Shop);
    try {
      // Try to get user token (staff, shop, or customer)
      let updatedBy: string | undefined;
      let isStaff = false;
      let userType = null
      try {
        const staffData = new AuthMiddlewareService().verifyStaffToken(req);
        updatedBy = staffData?.id;
        isStaff = true;
        userType = staffData?.type

      } catch {
        try {
          const customerData = new AuthMiddlewareService().verifyCustomerToken(req);
          updatedBy = customerData?.id;
          userType = customerData?.type

        } catch {
          const shopData = new AuthMiddlewareService().verifyShopToken(req);
          updatedBy = shopData?.id;
          userType = shopData?.type

        }
      }

      if (!updatedBy) {
        return handleError(config.message.invalid_token, 401, null);
      }

      const deposit = await depositRepository.findOne({
        where: { id: data.id },
      });
      const depositStatus = deposit?.status == EDeposit.PENDING
      if (!deposit) {
        return handleError("Deposit not found", 404, null);
      }


      if (!depositStatus) {
        return handleError("Deposit already approved", 409, null);
      }

      // Only staff can approve/reject deposits
      if (!isStaff) {
        return handleError("Only staff can approve or reject deposits", 403, null);
      }

      // Update fields
      deposit.updated_by = updatedBy;

      // If staff is approving, set approval fields
      deposit.approved_at = new Date();
      deposit.status = EDeposit.COMPLETED
      depositRepository.merge(deposit, data as any);

      const updatedDeposit = await depositRepository.save(deposit);

      if (deposit.type == EUserType.CUSTOMER) {
        const checkWallet = await walletRepository.findOne({ where: { customer_id: deposit.created_by } })
        if (!checkWallet) {
          return handleError("Wallet not found", 404, null);
        }

        checkWallet.total_balance += deposit.amount;
        await walletRepository.save(checkWallet);

      } else if (deposit.type == EUserType.SHOP) {
        const checkWallet = await walletRepository.findOne({ where: { shop_id: deposit.created_by } })

        if (!checkWallet) {
          return handleError("Wallet not found", 404, null);
        }

        checkWallet.total_balance += deposit.amount;
        await walletRepository.save(checkWallet);

      }

      const transaction = await transactionRepository.findOne({ where: { id: deposit.transaction_id } })
      if (transaction) {
        transaction.amount = deposit.amount
        transaction.status = ETransactionStatus.APPROVED
        await transactionRepository.save(transaction)
      }
      return handleSuccess(updatedDeposit);
    } catch (error: any) {
      console.log(error);

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }


  static async reject({
    data,
    req,
  }: {
    data: RejectWithdrawInput;
    req: Request;
  }): Promise<Response<Deposit | null>> {
    const depositRepository = getRepository(Deposit);
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

      const deposit = await depositRepository.findOne({
        where: { id: data.id },
      });

      if (!deposit) {
        return handleError("Deposit not found", 404, null);
      }

      const withdrawStatus = deposit?.status == EDeposit.PENDING;

      if (!withdrawStatus) {
        return handleError("Withdraw already processed", 409, null);
      }

      // Update fields - set status to DELETED for rejection
      deposit.updated_by = updatedBy;
      deposit.status = EDeposit.REJECTED;
      deposit.rejection_reason = data.rejection_reason;

      const updatedWithdraw = await depositRepository.save(deposit);

      // Update transaction status to REJECTED
      const transaction = await transactionRepository.findOne({
        where: { id: deposit.transaction_id },
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
  static async deleteDeposit({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Deposit | null>> {
    const depositRepository = getRepository(Deposit);

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

      const deposit = await depositRepository.findOne({
        where: { id, is_active: true },
      });

      if (!deposit) {
        return handleError("Deposit not found", 404, null);
      }

      // Soft delete: update status to DELETED
      deposit.status = EDeposit.DELETED;
      deposit.updated_by = userId;

      const deletedDeposit = await depositRepository.save(deposit);

      return handleSuccess(deletedDeposit as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getDeposits({
    where,
    page,
    limit,
    sortedBy,
    req,
  }: {
    where: Partial<DepositWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
  }): Promise<Response<Deposit[] | null>> {
    const depositRepository = getRepository(Deposit);

    try {
      let userId: string | undefined;
      let userType: "staff" | "customer" | "shop" | undefined;

      // Determine user type and ID
      try {
        const staffData = new AuthMiddlewareService().verifyStaffToken(req);
        userId = staffData?.id;
        userType = "staff";
      } catch {
        try {
          const customerData = new AuthMiddlewareService().verifyCustomerToken(req);
          userId = customerData?.id;
          userType = "customer";
        } catch {
          const shopData = new AuthMiddlewareService().verifyShopToken(req);
          userId = shopData?.id;
          userType = "shop";
        }
      }

      if (!userId) {
        return handleError(config.message.invalid_token, 401, null);
      }

      const order = this.order(sortedBy);

      const queryBuilder = depositRepository
        .createQueryBuilder("deposit")
        .leftJoinAndSelect("deposit.customer", "customer")
        .leftJoinAndSelect("deposit.shop", "shop")
        .leftJoinAndSelect("deposit.transaction", "transaction")
        .where("deposit.is_active = :isActive", { isActive: true });

      // Filter by user type (non-staff users can only see their own deposits)
      if (userType === "customer") {
        queryBuilder.andWhere("deposit.customer_id = :customerId", {
          customerId: userId,
        });
      } else if (userType === "shop") {
        queryBuilder.andWhere("deposit.shop_id = :shopId", {
          shopId: userId,
        });
      }
      // Staff can see all deposits

      // Apply filters
      if (where?.customer_id) {
        queryBuilder.andWhere("deposit.customer_id = :customerId", {
          customerId: where.customer_id,
        });
      }

      if (where?.shop_id) {
        queryBuilder.andWhere("deposit.shop_id = :shopId", {
          shopId: where.shop_id,
        });
      }

      if (where?.status) {
        queryBuilder.andWhere("deposit.status = :status", {
          status: where.status,
        });
      }
      if (where?.type) {
        queryBuilder.andWhere("deposit.type = :type", {
          type: where.type,
        });
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(deposit.created_at) BETWEEN :startDate AND :endDate",
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

      const [deposits, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(deposits, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getDeposit({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Deposit | null>> {
    const depositRepository = getRepository(Deposit);

    try {
      let userId: string | undefined;
      let userType: "staff" | "customer" | "shop" | undefined;

      // Determine user type and ID
      try {
        const staffData = new AuthMiddlewareService().verifyStaffToken(req);
        userId = staffData?.id;
        userType = "staff";
      } catch {
        try {
          const customerData = new AuthMiddlewareService().verifyCustomerToken(req);
          userId = customerData?.id;
          userType = "customer";
        } catch {
          const shopData = new AuthMiddlewareService().verifyShopToken(req);
          userId = shopData?.id;
          userType = "shop";
        }
      }

      if (!userId) {
        return handleError(config.message.invalid_token, 401, null);
      }

      const queryBuilder = depositRepository
        .createQueryBuilder("deposit")
        .leftJoinAndSelect("deposit.customer", "customer")
        .leftJoinAndSelect("deposit.shop", "shop")
        .leftJoinAndSelect("deposit.transaction", "transaction")
        .where("deposit.id = :id", { id })
        .andWhere("deposit.is_active = :isActive", { isActive: true });

      // Non-staff users can only see their own deposits
      if (userType === "customer") {
        queryBuilder.andWhere("deposit.customer_id = :customerId", {
          customerId: userId,
        });
      } else if (userType === "shop") {
        queryBuilder.andWhere("deposit.shop_id = :shopId", {
          shopId: userId,
        });
      }

      const deposit = await queryBuilder.getOne();

      if (!deposit) {
        return handleError("Deposit not found", 404, null);
      }

      return handleSuccess(deposit);
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
        return { "deposit.created_at": "ASC" };
      case BaseOrderByInput.created_at_DESC:
        return { "deposit.created_at": "DESC" };
      case BaseOrderByInput.updated_at_ASC:
        return { "deposit.updated_at": "ASC" };
      case BaseOrderByInput.updated_at_DESC:
        return { "deposit.updated_at": "DESC" };
      default:
        return { "deposit.created_at": "DESC" }; // Default order
    }
  }
}

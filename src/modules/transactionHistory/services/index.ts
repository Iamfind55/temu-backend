import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import { Brackets, getManager, getRepository } from "typeorm";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { TransactionHistory } from "../entity";
import {
  ETransactionHistoryIdentifier,
  ETransactionStatus,
  TransactionHistoryWhereInput,
} from "../types";
import { Wallet } from "../../wallet";
import { Order } from "../../order";
import { OrderDetail } from "../../orderDetail";

export class TransactionHistoryService {
  static async adminGetTransactionHistories({
    where,
    page,
    limit,
    sortedBy,
    req,
  }: {
    where: Partial<TransactionHistoryWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
  }): Promise<Response<TransactionHistory[] | null>> {
    const transactionHistoryRepository = getRepository(TransactionHistory);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const order = this.order(sortedBy);

      const queryBuilder = transactionHistoryRepository
        .createQueryBuilder("transaction_history")
        .leftJoinAndSelect("transaction_history.customer", "customer")
        .leftJoinAndSelect("transaction_history.shop", "shop")
        .where("transaction_history.is_active = :isActive", { isActive: true });

      if (where?.coin_type) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("transaction_history.coin_type = :coin_type", {
              coin_type: `${where.coin_type}`,
            });
          })
        );
      }

      // Only filter by identifier if provided, otherwise return all
      if (where?.identifier) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("transaction_history.identifier = :identifier", {
              identifier: where.identifier,
            });
          })
        );
      }
      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(transaction_history.created_at) BETWEEN :startDate AND :endDate",
          {
            startDate: where.createdAtBetween.startDate,
            endDate: where?.createdAtBetween?.endDate,
          }
        );
      }

      // Pagination and sorting
      queryBuilder
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy(order as any);

      const [data, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(data, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getTransactionHistories({
    where,
    page,
    limit,
    sortedBy,
  }: {
    where: Partial<TransactionHistoryWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
  }): Promise<{
    message: string;
    code: number;
    data?: { data: Object; total: number };
  }> {
    const transactionHistoryRepository = getRepository(TransactionHistory);

    try {
      if (!where?.shop_id && !where?.customer_id) {
        return {
          message:
            "Validation Error: Either shop_id or customer_id must be provided.",
          code: 400,
        };
      }

      const userIdField =
        where.shop_id !== undefined
          ? { shop_id: where.shop_id }
          : { customer_id: where.customer_id };

      const order = this.order(sortedBy);

      const queryBuilder = transactionHistoryRepository
        .createQueryBuilder("transaction_history")
        .where({ is_active: true })
        .andWhere(userIdField);

      if (where?.coin_type) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("transaction_history.coin_type = :coin_type", {
              coin_type: `${where.coin_type}`,
            });
          })
        );
      }
      if (where?.identifier) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("transaction_history.identifier = :identifier", {
              identifier: `${where.identifier}`,
            });
          })
        );
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(transaction_history.created_at) BETWEEN :startDate AND :endDate",
          {
            startDate: where.createdAtBetween.startDate,
            endDate: where?.createdAtBetween?.endDate,
          }
        );
      }

      // Pagination and sorting
      queryBuilder
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy(order as any);

      const [data, total] = await queryBuilder.getManyAndCount();

      return {
        data: { data, total },
        code: 200,
        message: config.message.success,
      };
    } catch (error: any) {
      return {
        message: config.message.internal_server_error,
        code: 500,
      };
    }
  }

  static async shopCustomerGetTransactionHistories({
    where,
    page,
    limit,
    sortedBy,
    req,
  }: {
    where: Partial<TransactionHistoryWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
  }): Promise<Response<TransactionHistory[] | null>> {
    try {
      let shopDataFromToken = new AuthMiddlewareService().verifyShopToken(req);
      if (!shopDataFromToken) {
        shopDataFromToken = new AuthMiddlewareService().verifyCustomerToken(
          req
        );
      }

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const userIdField: {
        shop_id: string | undefined;
        customer_id: string | undefined;
      } =
        shopDataFromToken?.type === "SHOP"
          ? { shop_id: shopDataFromToken.id, customer_id: undefined }
          : { customer_id: shopDataFromToken.id, shop_id: undefined };

      const resultTransactionHistory: any = await this.getTransactionHistories({
        where: { ...where, ...userIdField },
        page,
        limit,
        sortedBy,
      });

      if (resultTransactionHistory?.code != 200) {
        return handleError(
          resultTransactionHistory?.message,
          resultTransactionHistory?.code,
          null
        );
      }

      return handleSuccessWithTotalData(
        resultTransactionHistory?.data?.data,
        resultTransactionHistory?.data?.total
      );
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopGetTransactionHistory({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<TransactionHistory | null>> {
    const transactionHistoryRepository = getRepository(TransactionHistory);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );
      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const transactionHistory = await transactionHistoryRepository.findOne({
        where: {
          id: id,
          shop_id: shopDataFromToken?.id,
          is_active: true,
        } as any,
      });

      if (!transactionHistory) {
        return handleError("Transaction history not found", 404, null);
      }

      return handleSuccess(transactionHistory);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminGetTransactionHistory({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<TransactionHistory | null>> {
    const transactionHistoryRepository = getRepository(TransactionHistory);

    try {
      const orderDetailMutationRepository = getRepository(Order);
      const orderMutationRepository = getRepository(OrderDetail);
      const orders = await orderDetailMutationRepository.findBy({});
      orders.forEach(async (order) => {
        const orderDetail = await orderMutationRepository.findOneBy({
          order_no: order.order_no,
        });

        // Update order
        orderDetailMutationRepository.merge(order, {
          shop_id: orderDetail?.shop_id,
        });

        await orderDetailMutationRepository.save(order);
      });

      const shopDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const transactionHistory = await transactionHistoryRepository
        .createQueryBuilder("transaction_history")
        .leftJoinAndSelect("transaction_history.customer", "customer")
        .leftJoinAndSelect("transaction_history.shop", "shop")
        .where("transaction_history.is_active = :isActive", { isActive: true })
        .andWhere("transaction_history.id = :id", { id })
        .getOne();

      if (!transactionHistory) {
        return handleError("Transaction history not found", 404, null);
      }

      return handleSuccess(transactionHistory);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async customerGetTransactionHistory({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<TransactionHistory | null>> {
    const transactionHistoryRepository = getRepository(TransactionHistory);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyCustomerToken(
        req
      );
      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const transactionHistory = await transactionHistoryRepository.findOne({
        where: {
          id: id,
          customer_id: shopDataFromToken?.id,
          is_active: true,
        } as any,
      });

      if (!transactionHistory) {
        return handleError("Transaction history not found", 404, null);
      }

      return handleSuccess(transactionHistory);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminApproveRechargeTransactionHistory({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<TransactionHistory | null>> {
    // Use a transactional entity manager
    const entityManager = getManager();
    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const result: Response<TransactionHistory | null> =
        await entityManager.transaction(async (transactionalEntityManager) => {
          const transactionHistory = await transactionalEntityManager.findOne(
            TransactionHistory,
            {
              where: {
                id: id,
                is_active: true,
                status: ETransactionStatus.PENDING,
                // identifier: ETransactionHistoryIdentifier.RECHARGE,
              } as any,
            }
          );

          if (!transactionHistory) {
            return handleError("Transaction not found.", 404, null);
          }

          // Update the transaction status
          transactionHistory.status = ETransactionStatus.APPROVED;
          transactionHistory.approved_by = staffDataFromToken.id;
          const updatedTransactionHistory =
            await transactionalEntityManager.save(
              TransactionHistory,
              transactionHistory
            );

          // Fetch the associated wallet
          const existingWallet = await transactionalEntityManager.findOne(
            Wallet,
            {
              where: { id: transactionHistory.wallet_id, is_active: true },
            }
          );

          if (!existingWallet) {
            return handleError(config.message.wallet_not_found, 404, null);
          }

          // console.log({ existingWallet });

          // Update wallet balance
          if (
            transactionHistory.identifier ===
            ETransactionHistoryIdentifier.WITHDRAW
          ) {
            existingWallet.total_withdraw += transactionHistory.amount;
            existingWallet.total_withdraw_able_balance -=
              transactionHistory.amount;
            // existingWallet.total_balance -= transactionHistory.amount;
          } else if (
            transactionHistory.identifier ===
            ETransactionHistoryIdentifier.RECHARGE
          ) {
            existingWallet.total_balance += transactionHistory.amount;
            existingWallet.total_withdraw_able_balance +=
              transactionHistory.amount;
            existingWallet.total_recharged += transactionHistory.amount;
          }

          await transactionalEntityManager.save(Wallet, existingWallet);

          return handleSuccess(updatedTransactionHistory);
        });

      return result;
    } catch (error: any) {
      console.log(error);

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminApproveWithdrawTransactionHistory({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<TransactionHistory | null>> {
    // Use a transactional entity manager
    const entityManager = getManager();

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const result = await entityManager.transaction(
        async (transactionalEntityManager) => {
          const transactionHistory = await transactionalEntityManager.findOne(
            TransactionHistory,
            {
              where: {
                id: id,
                is_active: true,
                status: ETransactionStatus.PENDING,
                identifier: ETransactionHistoryIdentifier.WITHDRAW,
              } as any,
            }
          );

          if (!transactionHistory) {
            throw new Error("Transaction not found");
          }

          // Update the transaction status
          transactionHistory.status = ETransactionStatus.APPROVED;
          transactionHistory.approved_by = staffDataFromToken.id;
          const updatedTransactionHistory =
            await transactionalEntityManager.save(
              TransactionHistory,
              transactionHistory
            );

          // Fetch the associated wallet
          const existingWallet = await transactionalEntityManager.findOne(
            Wallet,
            {
              where: { id: transactionHistory.wallet_id, is_active: true },
            }
          );

          if (!existingWallet) {
            throw new Error(`Wallet not found for the provided ID.`);
          }

          // Update wallet balance
          existingWallet.total_withdraw += transactionHistory.amount;
          existingWallet.total_withdraw_able_balance -=
            transactionHistory.amount;

          await transactionalEntityManager.save(Wallet, existingWallet);

          return updatedTransactionHistory;
        }
      );

      return handleSuccess(result);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminRejectTransactionHistory({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<TransactionHistory | null>> {
    // Use a transactional entity manager
    const entityManager = getManager();

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const result = await entityManager.transaction(
        async (transactionalEntityManager) => {
          const transactionHistory = await transactionalEntityManager.findOne(
            TransactionHistory,
            {
              where: {
                id: id,
                is_active: true,
                status: ETransactionStatus.PENDING,
              } as any,
            }
          );

          if (!transactionHistory) {
            throw new Error("Transaction not found");
          }

          // Update the transaction status
          transactionHistory.status = ETransactionStatus.REJECTED;
          transactionHistory.rejected_by = staffDataFromToken.id;
          const updatedTransactionHistory =
            await transactionalEntityManager.save(
              TransactionHistory,
              transactionHistory
            );

          return updatedTransactionHistory;
        }
      );

      return handleSuccess(result);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async countNewTransaction({
    req,
    identifier,
  }: {
    req: Request;
    identifier: ETransactionHistoryIdentifier;
  }): Promise<Response<Order | null>> {
    try {
      const transactionHistoryRepository = getRepository(TransactionHistory);

      const queryBuilder =
        transactionHistoryRepository.createQueryBuilder("transactionHistory");

      queryBuilder.where(
        "transactionHistory.status = :transactionHistory",
        {
          transactionHistory: ETransactionStatus.PENDING,
        }
      );

      if (
        [
          ETransactionHistoryIdentifier.RECHARGE,
          ETransactionHistoryIdentifier.WITHDRAW,
        ].includes(identifier)
      ) {
        queryBuilder.andWhere("transactionHistory.identifier = :identifier", {
          identifier: identifier,
        });
      }

      let shopDataFromToken = new AuthMiddlewareService().verifyShopToken(req);
      if (shopDataFromToken?.id) {
        queryBuilder.andWhere("transactionHistory.shop_id = :shopId", {
          shopId: shopDataFromToken?.id,
        });
      } else {
        const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
          req
        );
        if (!staffDataFromToken)
          return handleError(config.message.invalid_token, 404, null);
      }

      const total = await queryBuilder.getCount();

      return handleSuccessWithTotalData(null, total);
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
        return { "transaction_history.created_at": "ASC" };
      case BaseOrderByInput.created_at_DESC:
        return { "transaction_history.created_at": "DESC" };
      case BaseOrderByInput.updated_at_ASC:
        return { "transaction_history.updated_at": "ASC" };
      case BaseOrderByInput.updated_at_DESC:
        return { "transaction_history.updated_at": "DESC" };
      default:
        return { created_at: "DESC" }; // Default order
    }
  }
}

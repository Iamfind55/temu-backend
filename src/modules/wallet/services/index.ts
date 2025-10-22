import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import {
  EWalletOwnerType,
  ShopRechargeBallance,
  ShopWithdrawBallance,
  WalletModel,
  WalletWhereInput,
} from "../types";
import { Brackets, getManager, getRepository } from "typeorm";
import { Wallet } from "../entity";
import { BaseOrderByInput, BaseStatus } from "../../../utils/base/baseType";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import {
  ETransactionHistoryIdentifier,
  TransactionHistory,
} from "../../transactionHistory";
import { INotificationType, NotificationService } from "../../notification";
import { Customer } from "../../customer";
import { Shop } from "../../shop";

export class WalletService {
  static async createWallet(data: Wallet) {
    const walletRepository = getRepository(Wallet);

    try {
      if (!data?.shop_id && !data?.customer_id) {
        return handleError("Validation Error", 400, null);
      }

      const userIdField = data?.shop_id
        ? { shop_id: data?.shop_id }
        : { customer_id: data?.customer_id };

      const existShopWallet = await walletRepository.findOne({
        where: { ...userIdField, is_active: true },
      });

      if (existShopWallet) return existShopWallet;

      const newWallet = walletRepository.create({
        ...data,
        created_by: data?.shop_id || data?.customer_id,
        status: data.status || BaseStatus.ACTIVE,
      });

      const savedWallet = await walletRepository.save(newWallet);

      return savedWallet;
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async rechargeBalance(
    data: ShopRechargeBallance
  ): Promise<TransactionHistory | any> {
    const transactionRepository = getRepository(TransactionHistory);

    try {
      if (!data?.shop_id && !data?.customer_id) {
        return {
          message:
            "Validation Error: Either shop_id or customer_id must be provided.",
          code: 400,
        };
      }

      const userIdField = data.shop_id
        ? { shop_id: data.shop_id }
        : { customer_id: data.customer_id };

      const rechargeAmount = data.amount_recharged ?? 0;
      if (rechargeAmount <= 0) {
        return {
          message:
            "Validation Error: Recharge amount must be greater than zero.",
          code: 400,
        };
      }

      return await getManager().transaction(
        async (transactionEntityManager) => {
          // Fetch the active wallet inside the transaction
          const existingWallet = await transactionEntityManager.findOne(
            Wallet,
            {
              where: { ...userIdField, is_active: true },
            }
          );

          if (!existingWallet) {
            throw new Error(`Wallet not found for the provided.`);
          }

          // // Update wallet balance
          // const updatedTotalRecharged =
          //   (existingWallet.total_recharged || 0) + rechargeAmount;
          // existingWallet.total_recharged = updatedTotalRecharged;

          // await transactionEntityManager.save(Wallet, existingWallet);

          // Create and save a new transaction record
          const newTransaction = transactionRepository.create({
            identifier: ETransactionHistoryIdentifier.RECHARGE,
            amount: rechargeAmount,
            coin_type: data.coin_type,
            wallet_id: existingWallet.id,
            payment_slip: data.payment_slip,
            account_number: data.account_number,
            ...userIdField,
          });

          const saveNewTransaction = await transactionEntityManager.save(
            TransactionHistory,
            newTransaction
          );

          try {
            if (data.shop_id) {
              const details = {
                id: saveNewTransaction.id,
                shop_id: data.shop_id,
                wallet_id: existingWallet.id,
                amount: rechargeAmount,
                account_number: data.account_number,
                coin_type: data.coin_type,
              };

              const _data = {
                title: "New recharge",
                description: `You have recharged balance to your wallet success.`,
                shop_id: data.shop_id,
                reference_id: saveNewTransaction.id,
                data: details,
                notification_type: INotificationType.RECHARGE,
              } as any;
              await NotificationService.createNotification({ data: _data });
            }
          } catch (error) {
            console.log("Error while create notification::", { error });
          }

          // Return the updated wallet
          return { code: 200, data: saveNewTransaction };
        }
      );
    } catch (error: any) {
      console.error("Error in rechargeBalance:", error.message);
      return {
        message: error.message,
        code: 500,
      };
    }
  }

  static async withdrawBalance(
    data: ShopWithdrawBallance
  ): Promise<Wallet | any> {
    const transactionRepository = getRepository(TransactionHistory);

    try {
      if (!data?.shop_id && !data?.customer_id) {
        return {
          message:
            "Validation Error: Either shop_id or customer_id must be provided.",
          code: 400,
        };
      }

      const userIdField = data.shop_id
        ? { shop_id: data.shop_id }
        : { customer_id: data.customer_id };

      const rechargeAmount = data.amount_withdraw ?? 0;
      if (rechargeAmount <= 0) {
        return {
          message:
            "Validation Error: Recharge amount must be greater than zero.",
          code: 400,
        };
      }

      return await getManager().transaction(
        async (transactionEntityManager) => {
          // Fetch the active wallet inside the transaction
          const existingWallet = await transactionEntityManager.findOne(
            Wallet,
            {
              where: { ...userIdField, is_active: true },
            }
          );

          if (!existingWallet) {
            throw new Error(`Wallet not found for the provided.`);
          }

          // Update wallet balance
          // const updatedTotalRecharged =
          //   (existingWallet.total_withdraw_able_balance || 0) + rechargeAmount;
          // existingWallet.total_withdraw_able_balance = updatedTotalRecharged;

          // await transactionEntityManager.save(Wallet, existingWallet);

          // Create and save a new transaction record
          const newTransaction = transactionRepository.create({
            identifier: ETransactionHistoryIdentifier.WITHDRAW,
            amount: rechargeAmount,
            coin_type: data.coin_type,
            wallet_id: existingWallet.id,
            payment_slip: data.payment_slip,
            account_number: data.account_number,
            ...userIdField,
          });

          await transactionEntityManager.save(
            TransactionHistory,
            newTransaction
          );

          try {
            if (data.shop_id) {
              const details = {
                id: newTransaction.id,
                shop_id: data.shop_id,
                wallet_id: existingWallet.id,
                amount: rechargeAmount,
                account_number: data.account_number,
                coin_type: data.coin_type,
              };

              const _data = {
                title: "New withdraw",
                description: `You have withdraw balance to your wallet success.`,
                shop_id: data.shop_id,
                reference_id: newTransaction.id,
                data: details,
                notification_type: INotificationType.WITHDRAWAL,
              } as any;
              await NotificationService.createNotification({ data: _data });
            }
          } catch (error) {
            console.log("Error while create notification::", { error });
          }

          // Return the updated wallet
          return { code: 200, data: existingWallet };
        }
      );
    } catch (error: any) {
      console.error("Error in rechargeBalance:", error.message);
      return {
        message: config.message.internal_server_error,
        code: 500,
      };
    }
  }

  static async createShopCustomerWallet({
    req,
  }: {
    req: Request;
  }): Promise<Response<Wallet | null>> {
    try {
      // Verify the token
      let shopDataFromToken: any = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken || shopDataFromToken?.type !== "SHOP") {
        shopDataFromToken = new AuthMiddlewareService().verifyCustomerToken(
          req
        );

        if (!shopDataFromToken) {
          return handleError(
            config.message.invalid_token,
            404,
            shopDataFromToken
          );
        }
      }

      const userIdField =
        shopDataFromToken?.type === "SHOP"
          ? { shop_id: shopDataFromToken?.id, customer_id: null }
          : { customer_id: shopDataFromToken?.id, shop_id: null };

      const shopWallet = await this.createWallet({
        ...userIdField,
      } as any);
      return handleSuccess(shopWallet as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopCustomerRechargeBalance({
    data,
    req,
  }: {
    data: ShopRechargeBallance;
    req: Request;
  }): Promise<Response<Wallet | null>> {
    try {
      // Verify the token
      let shopDataFromToken: any = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken || shopDataFromToken?.type !== "SHOP") {
        shopDataFromToken = new AuthMiddlewareService().verifyCustomerToken(
          req
        );

        if (!shopDataFromToken) {
          return handleError(
            config.message.invalid_token,
            404,
            shopDataFromToken
          );
        }
      }

      // Determine the appropriate user ID field based on token type
      const userIdField =
        shopDataFromToken?.type === "SHOP"
          ? { shop_id: shopDataFromToken.id, customer_id: undefined }
          : { customer_id: shopDataFromToken.id, shop_id: undefined };

      // Recharge the balance using the rechargeBalance method
      const wallet = await this.rechargeBalance({
        ...data,
        ...userIdField,
        payment_slip: data?.image,
      } as any);
      if (wallet?.code != 200) {
        return handleError(wallet?.message, wallet?.code, null);
      }

      // Return success with the provided data
      return handleSuccess(wallet?.data as any);
    } catch (error: any) {
      console.error("Error in shopCustomerRechargeBalance:", error.message);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }
  static async shopRechargeBalanceWithInactiveStatus({
    data,
    req,
  }: {
    data: ShopRechargeBallance;
    req: Request;
  }): Promise<Response<Wallet | null>> {
    try {
      const shopRepository = getRepository(Shop);

      // Verify the token
      const existShop = await shopRepository
        .createQueryBuilder("shop")
        .where("shop.status = :status", { status: BaseStatus.INACTIVE })
        .andWhere(
          new Brackets((qb) => {
            qb.where("shop.username = :username", {
              username: data.email,
            }).orWhere("shop.email = :email", { email: data.email });
          })
        )
        .getOne();

      if (!existShop) {
        return handleError(config.message.shop_not_found, 404, null);
      }

      if (!existShop) {
        return handleError(config.message.shop_not_found, 404, null);
      }

      // Determine the appropriate user ID field based on token type
      const userIdField = {
        shop_id: existShop.id,
        customer_id: undefined,
      };

      // Recharge the balance using the rechargeBalance method
      const wallet = await this.rechargeBalance({
        ...data,
        ...userIdField,
        payment_slip: data?.image
      } as any);
      if (wallet?.code != 200) {
        return handleError(wallet?.message, wallet?.code, null);
      }

      // Return success with the provided data
      return handleSuccess(wallet?.data as any);
    } catch (error: any) {
      console.error("Error in shopCustomerRechargeBalance:", error.message);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopCustomerWithdrawBalance({
    data,
    req,
  }: {
    data: ShopWithdrawBallance;
    req: Request;
  }): Promise<Response<Wallet | null>> {
    try {
      // Verify the token
      let shopDataFromToken: any = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken || shopDataFromToken?.type !== "SHOP") {
        shopDataFromToken = new AuthMiddlewareService().verifyCustomerToken(
          req
        );

        if (!shopDataFromToken) {
          return handleError(
            config.message.invalid_token,
            404,
            shopDataFromToken
          );
        }
      }

      // Determine the appropriate user ID field based on token type
      const userIdField =
        shopDataFromToken?.type === "SHOP"
          ? { shop_id: shopDataFromToken.id, customer_id: undefined }
          : { customer_id: shopDataFromToken.id, shop_id: undefined };

      // Recharge the balance using the rechargeBalance method
      const wallet = await this.withdrawBalance({
        ...data,
        ...userIdField,
      } as any);
      if (wallet?.code != 200) {
        return handleError(wallet?.message, wallet?.code, null);
      }

      // Return success with the provided data
      return handleSuccess(wallet?.data as any);
    } catch (error: any) {
      console.error("Error in shopCustomerRechargeBalance:", error.message);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateWallet({
    data,
    req,
  }: {
    data: WalletModel;
    req: Request;
  }): Promise<Response<Wallet | null>> {
    const walletRepository = getRepository(Wallet);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const wallet = await walletRepository.findOneById(data.id);

      if (!wallet) {
        return handleError("Wallet not found", 404, null);
      }

      wallet.updated_by = staffDataFromToken?.id;

      walletRepository.merge(wallet, data as any);

      const updatedWallet = await walletRepository.save(wallet);

      return handleSuccess(updatedWallet);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async deleteWallet({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<null>> {
    const walletRepository = getRepository(Wallet);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const wallet = await walletRepository.findOneById(id);

      if (!wallet) {
        return handleError("Wallet not found", 404, null);
      }

      await walletRepository.remove(wallet);

      return handleSuccess(wallet as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminGetWallets({
    where,
    page,
    limit,
    sortedBy,
    req,
  }: {
    where: Partial<WalletWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
  }): Promise<Response<Wallet[] | null>> {
    const walletRepository = getRepository(Wallet);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const order = this.order(sortedBy);

      const queryBuilder = walletRepository
        .createQueryBuilder("wallet")
        .leftJoinAndSelect("wallet.customer", "customer")
        .leftJoinAndSelect("wallet.shop", "shop")
        .where("wallet.is_active = :isActive", { isActive: true })
        .andWhere(
          "(wallet.shop_id IS NOT NULL OR wallet.customer_id IS NOT NULL)"
        );

      if (where?.owner_type === EWalletOwnerType.CUSTOMER) {
        queryBuilder.andWhere("wallet.customer_id IS NOT NULL");
      } else if (where?.owner_type === EWalletOwnerType.SHOP) {
        queryBuilder.andWhere("wallet.shop_id IS NOT NULL");
      }

      if (where?.keyword) {
        // Search in wallet name, customer name, or shop name
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("wallet.name = :name", {
              name: `${where.keyword}`,
            })
              .orWhere("customer.firstName = :name", {
                name: `${where.keyword}`,
              })
              .orWhere("shop.store_name ILIKE :name", {
                name: `%${where.keyword}%`,
              })
              .orWhere("shop.phone_number = :name", {
                name: `${where.keyword}`,
              })
              .orWhere("customer.phone_number = :name", {
                name: `${where.keyword}`,
              });
          })
        );
      }

      if (where?.status) {
        queryBuilder.andWhere("wallet.status = :status", {
          status: where?.status,
        });
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(wallet.created_at) BETWEEN :startDate AND :endDate",
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

      const [wallets, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(wallets, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getShopWallet({
    req,
  }: {
    req: Request;
  }): Promise<Response<Wallet | null>> {
    const walletRepository = getRepository(Wallet);

    try {
      // Verify the token
      let shopDataFromToken: any = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken || shopDataFromToken?.type !== "SHOP") {
        shopDataFromToken = new AuthMiddlewareService().verifyCustomerToken(
          req
        );

        if (!shopDataFromToken) {
          return handleError(
            config.message.invalid_token,
            404,
            shopDataFromToken
          );
        }
      }

      const userId = shopDataFromToken.id;
      const userIdField =
        shopDataFromToken?.type === "SHOP"
          ? { shop_id: userId }
          : { customer_id: userId };

      const wallet = await walletRepository.findOne({
        where: { ...userIdField, is_active: true } as any,
      });

      if (!wallet) {
        const newShopWallet = await this.createWallet({
          ...userIdField,
        } as any);

        return handleSuccess(newShopWallet as any);
      }

      if (!wallet) {
        return handleError("Wallet not found", 404, null);
      }

      return handleSuccess(wallet);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminGetWallet({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Wallet | null>> {
    const walletRepository = getRepository(Wallet);
    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      // const wallet = await walletRepository.findOne({
      //   where: { id, is_active: true },
      // });

      const queryBuilder = walletRepository
        .createQueryBuilder("wallet")
        .leftJoinAndSelect("wallet.customer", "customer")
        .leftJoinAndSelect("wallet.shop", "shop")
        .where("wallet.is_active = :isActive", { isActive: true })
        .andWhere(
          "(wallet.shop_id IS NOT NULL OR wallet.customer_id IS NOT NULL)"
        )
        .andWhere((qb) => {
          qb.where("wallet.id = :id", { id }).orWhere(
            "wallet.shop_id = :shopId",
            {
              shopId: id,
            }
          );
        });

      const wallet = await queryBuilder.getOne();

      if (!wallet) {
        return handleError("Wallet not found", 404, null);
      }

      return handleSuccess(wallet);
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
        return { "wallet.created_at": "ASC" };
      case BaseOrderByInput.created_at_DESC:
        return { "wallet.created_at": "DESC" };
      case BaseOrderByInput.updated_at_ASC:
        return { "wallet.updated_at": "ASC" };
      case BaseOrderByInput.updated_at_DESC:
        return { "wallet.updated_at": "DESC" };
      default:
        return { "wallet.created_at": "DESC" }; // Default order
    }
  }
}

import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import {
  PaymentMethod,
  ShopLoginResponse,
  ShopRequestVIPData,
  ShopRequestStatus,
  ShopResetPassword,
  ShopStatus,
  ShopWhereInput,
  ShopWhereLoginInput,
} from "../types";
import { Brackets, getManager, getRepository } from "typeorm";
import { Shop } from "../entity";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { comparePassword, hashPassword } from "../../../utils/helper";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { getRequestedFields } from "../../../utils/graphqlUtils";
import { GraphQLResolveInfo } from "graphql";
import { Wallet, WalletService } from "../../wallet";
import { Staff } from "../../staff";
import { INotificationType, NotificationService } from "../../notification";
const nodemailer = require("nodemailer");

export class ShopService {
  static async createShop({
    data,
    req,
  }: {
    data: Shop;
    req: Request;
  }): Promise<Response<Shop | null>> {
    const shopRepository = getRepository(Shop);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      // Validation
      if (!data?.username || !data?.password) {
        return handleError("Validation Error", 400, null);
      }

      if (data.email) data.email = data.email.replace(" ", "");

      const existShop = await this.existShopUnique(data);
      if (existShop)
        return handleError(
          "Username or Email already exist in system.",
          400,
          null
        );

      // Hash the password
      if (data?.password) data.password = await hashPassword(data?.password);

      data.created_by = staffDataFromToken?.id;

      // Create and save shop
      const newShop = shopRepository.create(data as any);
      const savedShop = await shopRepository.save(newShop);

      return handleSuccess(savedShop as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopRegister({
    data,
    req,
  }: {
    data: Shop;
    req: Request;
  }): Promise<Response<ShopLoginResponse | null>> {
    const shopRepository = getRepository(Shop);

    try {
      // Validation
      if (!data?.username || !data?.password) {
        return handleError("Validation Error", 400, null);
      }

      if (data.email) data.email = data.email.replace(" ", "");

      // Validate exist shop
      const existShop = await this.existShopUnique(data);
      if (existShop)
        return handleError(
          "Username or Email already exist in system.",
          400,
          null
        );

      // Hash the password
      if (data?.password) data.password = await hashPassword(data?.password);

      // Create and save shop
      const newShop = shopRepository.create(data);
      const savedShop: any = await shopRepository.save(newShop);

      // Generate JWT token
      // const token = new AuthMiddlewareService().genShopToken(savedShop);

      try {
        await WalletService.createWallet({
          shop_id: savedShop?.id,
          name: savedShop?.fullname,
        } as any);
      } catch (error) {}

      return handleSuccess({ token: "", data: savedShop });
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminUpdateShop({
    data,
    req,
  }: {
    data: Shop;
    req: Request;
  }): Promise<Response<Shop | null>> {
    const shopRepository = getRepository(Shop);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shop = await shopRepository.findOneBy({
        id: data.id,
        is_active: true,
      });

      if (!shop) {
        return handleError("Shop not found", 404, null);
      }

      if (data.email) data.email = data.email.split(" ").join("");

      const existShop = await this.existShopUnique(data);
      if (existShop)
        return handleError(
          "Username or Email already exist in system.",
          400,
          null
        );

      // Hash the password
      if (data?.password) data.password = await hashPassword(data?.password);

      // Handle payment method updates
      if (data.payment_method && Array.isArray(data.payment_method)) {
        // Assign the updated payment methods back to the shop entity
        const updatePaymentMethodData = this.updateShopMethodMapingData(
          data,
          shop
        );

        data.payment_method = updatePaymentMethodData as any;
      }

      shopRepository.merge(shop, data);

      const updatedShop = await shopRepository.save(shop);

      return handleSuccess(updatedShop);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminApproveShop({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Shop | null>> {
    const shopRepository = getRepository(Shop);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shop = await shopRepository.findOneBy({ id, is_active: true });

      if (!shop) {
        return handleError("Shop not found", 404, null);
      }

      shopRepository.merge(shop, { status: ShopStatus.ACTIVE });

      const updatedShop = await shopRepository.save(shop);

      return handleSuccess(updatedShop);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateShopInformation({
    data,
    req,
  }: {
    data: Shop;
    req: Request;
  }): Promise<Response<Shop | null>> {
    const shopRepository = getRepository(Shop);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shop = await shopRepository.findOne({
        where: { id: shopDataFromToken?.id, is_active: true },
      });

      if (!shop) {
        return handleError("Shop not found", 404, null);
      }

      const existShop = await this.existShopUnique({
        ...data,
        id: shopDataFromToken?.id,
      });
      if (existShop)
        return handleError(
          "Username or Email already exist in system.",
          400,
          null
        );

      // Hash the password
      if (data?.password) {
        data.password = await hashPassword(data.password);
      } else {
        delete data.password; // TypeScript-safe way to "remove" the property
      }

      // Handle payment method updates
      if (data.payment_method && Array.isArray(data.payment_method)) {
        // Assign the updated payment methods back to the shop entity
        const updatePaymentMethodData = this.updateShopMethodMapingData(
          data as any,
          shop
        );

        data.payment_method = updatePaymentMethodData as any;
      }

      // Merge and save the shop data
      shopRepository.merge(shop, data as any);
      const updatedShop = await shopRepository.save(shop);

      return handleSuccess(updatedShop);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static updateShopMethodMapingData(data: Shop, shop: Shop) {
    const existingPaymentMethods: PaymentMethod[] = shop.payment_method || [];
    const updatedPaymentMethods: PaymentMethod[] = data.payment_method;

    // Update existing methods or add new ones
    const updatePaymentMethodData = existingPaymentMethods.map((method) => {
      const existPaymentMethodUpdate = updatedPaymentMethods.find(
        (paymentMethod) =>
          paymentMethod?.id === method?.id && paymentMethod?.id != null
      );

      if (existPaymentMethodUpdate) {
        return { ...method, ...existPaymentMethodUpdate };
      }

      return method;
    });

    return updatePaymentMethodData;
  }

  static async deleteShop({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<null>> {
    const shopRepository = getRepository(Shop);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shop = await shopRepository.findOneBy({ id, is_active: true });

      if (!shop) {
        return handleError("Shop not found", 404, null);
      }

      // await shopRepository.remove(shop);
      await shopRepository.update({ id: id }, { is_active: false });

      return handleSuccess(shop as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getShops(
    {
      where,
      page,
      limit,
      sortedBy,
      req,
    }: {
      where: Partial<ShopWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
      req: Request;
    },
    info: GraphQLResolveInfo
  ): Promise<Response<Shop[] | null>> {
    const shopRepository = getRepository(Shop);

    try {
      const order = this.order(sortedBy);

      const queryBuilder = shopRepository
        .createQueryBuilder("shop")
        .where("shop.is_active = :isActive", { isActive: true });

      // Apply field selection
      // Extract requested fields dynamically
      const selectFields = getRequestedFields(info, "getShops.data");
      if (selectFields?.length) {
        const fields = selectFields.map((field) => `shop.${field}`);
        queryBuilder.select(fields);
      }

      if (where?.keyword) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("shop.fullname ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            })
              .orWhere("shop.username ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              })
              .orWhere("shop.email ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              })
              .orWhere("shop.phone_number ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              });
          })
        );
      }

      if (where?.status) {
        queryBuilder.andWhere("shop.status = :status", {
          status: where.status,
        });
      }

      if (where?.shop_vip) {
        queryBuilder.andWhere("shop.shop_vip = :shop_vip", {
          shop_vip: where.shop_vip,
        });
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(shop.created_at) BETWEEN :startDate AND :endDate",
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

      if (selectFields?.length <= 0) {
        const _total = await queryBuilder.getCount();
        return handleSuccessWithTotalData([], _total);
      }

      const [shops, total] = await queryBuilder.getManyAndCount();
      const resultShops = shops?.map((shop: any) => {
        if (shop?.payment_method) delete shop.payment_method;
        return shop;
      });

      return handleSuccessWithTotalData(resultShops, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminGetShops(
    {
      where,
      page,
      limit,
      sortedBy,
      req,
    }: {
      where: Partial<ShopWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
      req: Request;
    },
    info: GraphQLResolveInfo
  ): Promise<Response<Shop[] | null>> {
    const shopRepository = getRepository(Shop);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const order = this.order(sortedBy);

      const queryBuilder = shopRepository
        .createQueryBuilder("shop")
        .where("shop.is_active = :isActive", { isActive: true });

      // Apply field selection
      // Extract requested fields dynamically
      const selectFields = getRequestedFields(info, "getShops.data");
      if (selectFields?.length) {
        const fields = selectFields.map((field) => `shop.${field}`);
        queryBuilder.select(fields);
      }

      if (where?.keyword) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("shop.store_name ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            })
              .orWhere("shop.email ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              })
              .orWhere("shop.phone_number ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              });
          })
        );
      }

      if (where?.status) {
        queryBuilder.andWhere("shop.status = :status", {
          status: where.status,
        });
      }

      if (where?.shop_vip) {
        queryBuilder.andWhere("shop.shop_vip = :shop_vip", {
          shop_vip: where.shop_vip,
        });
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(shop.created_at) BETWEEN :startDate AND :endDate",
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

      if (selectFields?.length <= 0) {
        const _total = await queryBuilder.getCount();
        return handleSuccessWithTotalData([], _total);
      }

      const [shops, total] = await queryBuilder.getManyAndCount();
      const resultShops = shops?.map((shop: any) => {
        if (shop?.payment_method) delete shop.payment_method;
        return shop;
      });

      return handleSuccessWithTotalData(resultShops, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopLogin({
    where,
  }: {
    where: ShopWhereLoginInput;
  }): Promise<Response<ShopLoginResponse | null>> {
    const shopRepository = getRepository(Shop);

    try {
      const { username, password } = where;
      // Validate input
      if (!username || !password) {
        return handleError("Username and password are required.", 400, null);
      }

      const queryBuilder = shopRepository.createQueryBuilder("shop");

      // Fetch user from database
      const shop = await queryBuilder
        .where("shop.is_active = :isActive", { isActive: true }) // Ensure only active shops
        .andWhere(
          new Brackets((db) => {
            // Use Brackets to ensure correct grouping
            db.where("shop.username = :username", { username }).orWhere(
              "shop.email = :email",
              { email: username }
            );
          })
        )
        .getOne();

      if (!shop) {
        return handleError("Invalid username or password", 400, null);
      }

      // Compare passwords
      const isPasswordValid = await comparePassword(
        password,
        shop?.password || ""
      );
      if (!isPasswordValid) {
        return handleError("Invalid username or password.", 404, null);
      }

      if (shop.status !== ShopStatus.ACTIVE)
        return handleError(
          "Your shop is not active now. Please contact the admin to check the details.",
          404,
          { status: shop.status }
        );

      // Generate JWT token
      const token = new AuthMiddlewareService().genShopToken(shop);

      return handleSuccess({ token, data: shop } as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getShop({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Shop | null>> {
    const shopRepository = getRepository(Shop);

    try {
      const shop: any = await shopRepository.findOneBy({ id, is_active: true });

      if (!shop) {
        return handleError("Shop not found", 404, null);
      }
      // Safely delete the `payment_method` property if it exists
      if (shop.payment_method) {
        delete shop.payment_method;
      }

      return handleSuccess(shop);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminGetShop({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Shop | null>> {
    const shopRepository = getRepository(Shop);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shop = await shopRepository.findOneBy({ id, is_active: true });

      if (!shop) {
        return handleError("Shop not found", 404, null);
      }

      return handleSuccess(shop);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getShopInformation({
    req,
  }: {
    req: Request;
  }): Promise<Response<Shop | null>> {
    const shopRepository = getRepository(Shop);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shop = await shopRepository.findOneById(shopDataFromToken?.id);

      if (!shop) {
        return handleError("Shop not found", 404, null);
      }

      return handleSuccess(shop);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopForgotPassword({
    email,
  }: {
    email: string;
  }): Promise<Response<{ success: boolean; error: any } | null>> {
    try {
      const shopRepository = getRepository(Shop);

      // Check if the email exists
      const existEmail = await shopRepository.findOneBy({ email });

      if (!existEmail) {
        return handleError(
          "Email not found",
          404,
          "Email not found in database"
        );
      }

      // Generate JWT token with expiration
      const token = new AuthMiddlewareService().genShopForgotPasswordToken(
        existEmail
      );

      // Generate a reset password link
      const resetLink = `${config.client_url}/reset-password?token=${token}`;

      // Send mail with reset password link
      await this.sendResetPasswordEmail(email, resetLink);

      return handleSuccess(null);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopResetPassword({
    data,
    req,
  }: {
    data: ShopResetPassword;
    req: Request;
  }): Promise<Response<Shop | null>> {
    const shopRepository = getRepository(Shop);

    try {
      const shopDataFromToken =
        new AuthMiddlewareService().verifyShopForgotPasswordToken(data.token);

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shop = await shopRepository.findOneById(shopDataFromToken.id);

      if (!shop) {
        return handleError("Shop not found", 404, null);
      }

      // Hash the password
      const newPass = await hashPassword(data?.new_password);

      shopRepository.merge(shop, { password: newPass });

      const updatedShop = await shopRepository.save(shop);

      return handleSuccess(updatedShop);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async sendResetPasswordEmail(email: string, resetLink: string) {
    try {
      console.log("Sending mail forgot password...");

      // Create a transporter
      const transporter = nodemailer.createTransport({
        host: config.smtp.host,
        port: config.smtp.port,
        secure: config.smtp.secure, // true for 465, false for other ports
        auth: {
          user: config.smtp.user, // SMTP username
          pass: config.smtp.pass, // SMTP password
        },
      });

      // host: 'mail.yourdomain.com', // Replace with your domain's mail server
      // port: 465, // Port for SSL
      // secure: true, // Use SSL
      // auth: {
      //   user: 'your-email@yourdomain.com', // Your full email address
      //   pass: 'your-email-password', // Your email account password
      // },

      // Email options
      const mailOptions = {
        from: `"TIKTOK SHOP" <${config.smtp.user}>`, // sender address
        to: email, // recipient email
        subject: `Reset Your Password ${Date.now().toString()}`, // Subject line
        text: `You requested a password reset. Click the link below to reset your password: ${resetLink}`,
        html: `<p>You requested a password reset.</p>
             <p>Click the link below to reset your password:</p>
             <a href="${resetLink}" target="_blank">${resetLink}</a>`,
      };

      // Send the email
      transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
          console.error("Error sending email:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  static async existShopUnique(data: Shop): Promise<boolean> {
    try {
      const shopRepository = getRepository(Shop);

      const existShop = await shopRepository
        .createQueryBuilder("shop")
        .where("shop.is_active = :isActive", { isActive: true })
        .andWhere(
          new Brackets((qb) => {
            qb.where("shop.email = :email", { email: data?.email }).orWhere(
              "shop.username = :username",
              { username: data?.username }
            );
          })
        )
        .getOne();

      if (!existShop) return false; // No existing shop found

      if (!data?.id) {
        // If no ID provided, check if email or username exists
        return (
          existShop.email === data.email || existShop.username === data.username
        );
      }

      // If ID is provided, check if the found shop is different from the current one
      return existShop.id !== data.id;
    } catch (error) {
      console.error("Error checking shop uniqueness:", error);
      return false;
    }
  }

  static async shopRequestVIP({
    data,
    req,
  }: {
    data: ShopRequestVIPData;
    req: Request;
  }): Promise<Response<ShopRequestVIPData | null>> {
    try {
      const shopRepository = getRepository(Shop);
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);
      const id = shopDataFromToken?.id;

      if (!["1", "2", "3", "4", "5"].includes(data.request_vip)) {
        {
          return handleError(
            `Not allow you apply VIP ${data.request_vip}`,
            404,
            null
          );
        }
      }

      const shop = await shopRepository.findOneBy({
        id: id,
        is_active: true,
      });

      if (!shop) {
        return handleError("Shop not found", 404, null);
      }
      if (
        shop?.request_vip_data?.request_vip === data.request_vip &&
        shop?.request_vip_data?.request_status === ShopRequestStatus.APPROVED
      ) {
        return handleError(
          "You have already in current VIP that you will apply.",
          404,
          null
        );
      }

      if (
        shop?.request_vip_data?.request_status === ShopRequestStatus.APPROVED &&
        Number(5) === Number(shop?.request_vip_data?.request_vip)
      ) {
        return handleError(
          "You cannot request VIP because you are at the end of your VIP period.",
          404,
          null
        );
      }

      if (
        shop?.request_vip_data?.request_vip > data.request_vip &&
        shop?.request_vip_data?.request_status === ShopRequestStatus.APPROVED
      ) {
        return handleError(
          "You cannot request a lower VIP level than your current VIP.",
          404,
          null
        );
      }
      // vip 1: 15000, percent: 25
      // vip 2: 30000, percent: 30
      // vip 3: 45000, percent: 35
      // vip 4: 60000, percent: 40
      // vip 5: 75000, percent: 45

      const existingWallet = await WalletService.getShopWallet({ req });
      const balance =
        data.request_vip === "1"
          ? 15000
          : data.request_vip === "2"
          ? 30000
          : data.request_vip === "3"
          ? 45000
          : data.request_vip === "4"
          ? 60000
          : data.request_vip === "5"
          ? 75000
          : 1500;
      const addBalanceAmount =
        data.request_vip === "1"
          ? 1500
          : data.request_vip === "2"
          ? 3000
          : data.request_vip === "3"
          ? 4500
          : data.request_vip === "4"
          ? 6000
          : data.request_vip === "5"
          ? 7500
          : 15000;
      const profit =
        data.request_vip === "1"
          ? 25
          : data.request_vip === "2"
          ? 30
          : data.request_vip === "3"
          ? 35
          : data.request_vip === "4"
          ? 40
          : data.request_vip === "5"
          ? 45
          : 25;

      if (!existingWallet) return handleError("Wallet not found", 404, null);
      if (
        (Number(existingWallet.data?.total_recharged) < balance &&
          data.request_vip === "1") ||
        (Number(existingWallet.data?.total_recharged) < balance &&
          data.request_vip === "2") ||
        (Number(existingWallet.data?.total_recharged) < balance &&
          data.request_vip === "3") ||
        (Number(existingWallet.data?.total_recharged) < balance &&
          data.request_vip === "4") ||
        (Number(existingWallet.data?.total_recharged) < balance &&
          data.request_vip === "5")
      ) {
        return handleError(
          `Your balance not enough to apply VIP ${data.request_vip}`,
          404,
          null
        );
      }
      const requestData: any = {
        request_vip: data.request_vip,
        profit: profit,
        balance: balance,
        add_balance_amount: addBalanceAmount,
        request_status: ShopRequestStatus.PENDING,
        requested_at: new Date(),
      };
      await shopRepository.update(
        { id: id },
        { request_vip_data: requestData }
      );

      try {
        const details = {
          ...requestData,
        };

        const _data = {
          title: "Request VIP",
          description: `You have reqeusted VIP to your shop's account success.`,
          shop_id: id,
          reference_id: id,
          data: details,
          notification_type: INotificationType.SHOP_REQUEST_VIP,
        } as any;
        await NotificationService.createNotification({ data: _data });
      } catch (error) {
        console.error("Error while create notification", { error });
      }

      return handleSuccess(requestData);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async countShopRequestVIP({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopRequestVIPData | null>> {
    try {
      const shopRepository = getRepository(Shop);
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const total = await shopRepository
        .createQueryBuilder("shop")
        .where(
          "shop.request_vip_data IS NOT NULL AND shop.request_vip_data ->> 'request_status' = :requestStatus",
          {
            requestStatus: ShopRequestStatus.PENDING,
          }
        )
        .getCount();

      return handleSuccessWithTotalData(null, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  // static async adminApproveShopRequestVIP({
  //   id,
  //   req,
  // }: {
  //   id: string;
  //   req: Request;
  // }): Promise<Response<ShopRequestVIPData | null>> {
  //   try {
  //     const shopRepository = getRepository(Shop);
  //     const walletRepository = getRepository(Wallet);
  //     const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
  //       req
  //     );

  //     if (!staffDataFromToken)
  //       return handleError(config.message.invalid_token, 404, null);

  //     const shop = await shopRepository
  //       .createQueryBuilder("shop")
  //       .where("shop.is_active = :isActive", { isActive: true })
  //       .andWhere(
  //         "(shop.request_vip_data IS NOT NULL AND shop.request_vip_data -> 'request_status' = :requestStatus)",
  //         { requestStatus: ShopRequestStatus.PENDING }
  //       )
  //       .andWhere("shop.id = :shopId", { shopId: id })
  //       .getOne();

  //     if (!shop) {
  //       return handleError("Shop not found", 404, null);
  //     }

  //     const existingWallet = await WalletService.adminGetWallet({
  //       id: shop.id,
  //       req,
  //     });
  //     const balance = shop?.request_vip_data.balance;
  //     const profit = shop?.request_vip_data.profit;

  //     if (!existingWallet) return handleError("Wallet not found", 404, null);
  //     if (
  //       (Number(existingWallet.data?.total_balance) < balance &&
  //         shop?.request_vip_data.request_vip === "1") ||
  //       (Number(existingWallet.data?.total_balance) < balance &&
  //         shop?.request_vip_data.request_vip === "2") ||
  //       (Number(existingWallet.data?.total_balance) < balance &&
  //         shop?.request_vip_data.request_vip === "3") ||
  //       (Number(existingWallet.data?.total_balance) < balance &&
  //         shop?.request_vip_data.request_vip === "4") ||
  //       (Number(existingWallet.data?.total_balance) < balance &&
  //         shop?.request_vip_data.request_vip === "5")
  //     ) {
  //       return handleError(
  //         `Shop's balance not enough to apply VIP ${shop?.request_vip_data?.request_vip}`,
  //         404,
  //         null
  //       );
  //     }
  //     const requestData: any = {
  //       request_status: ShopRequestStatus.APPROVED,
  //     };
  //     await shopRepository.update(
  //       { id: id },
  //       {
  //         request_vip_data: requestData,
  //         shop_vip: Number(shop.request_vip_data.request_vip),
  //         profit: Number(profit),
  //       }
  //     );

  //     await walletRepository
  //       .createQueryBuilder()
  //       .update(Wallet)
  //       .set({
  //         total_balance: () => "total_balance - :total_balance",
  //         total_withdraw_able_balance: () =>
  //           "total_withdraw_able_balance - :total_withdraw_able_balance",
  //       })
  //       .where("shop_id = :shop_id", {
  //         shop_id: shop.id,
  //         total_balance: balance,
  //         total_withdraw_able_balance: balance,
  //       })
  //       .execute();

  //     return handleSuccess(requestData);
  //   } catch (error: any) {
  //     return handleError(
  //       config.message.internal_server_error,
  //       500,
  //       error.message
  //     );
  //   }
  // }

  // Map `sortedBy` enum to TypeORM order format
  static async adminApproveShopRequestVIP({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<ShopRequestVIPData | null>> {
    // Start a transaction
    const entityManager = getManager();

    try {
      const shopRepository = getRepository(Shop);
      const walletRepository = getRepository(Wallet);
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken) {
        return handleError(config.message.invalid_token, 404, null);
      }

      // Find the shop within the transaction
      const shop = await shopRepository
        .createQueryBuilder("shop")
        .where("shop.is_active = :isActive", { isActive: true })
        .andWhere(
          "(shop.request_vip_data IS NOT NULL AND shop.request_vip_data ->> 'request_status' = :requestStatus)",
          { requestStatus: ShopRequestStatus.PENDING }
        )
        .andWhere("shop.id = :shopId", { shopId: id })
        .getOne();

      if (!shop) {
        return handleError("Shop not found", 404, null);
      }

      const existingWallet = await WalletService.adminGetWallet({
        id: id,
        req,
      });
      const balance = shop?.request_vip_data.balance || 15000;
      const addBalanceAmount =
        shop?.request_vip_data.add_balance_amount || 1500;
      const profit = shop?.request_vip_data.profit;

      if (!existingWallet) {
        return handleError("Wallet not found", 404, null);
      }

      if (
        (Number(existingWallet.data?.total_recharged) < balance &&
          shop?.request_vip_data.request_vip === "1") ||
        (Number(existingWallet.data?.total_recharged) < balance &&
          shop?.request_vip_data.request_vip === "2") ||
        (Number(existingWallet.data?.total_recharged) < balance &&
          shop?.request_vip_data.request_vip === "3") ||
        (Number(existingWallet.data?.total_recharged) < balance &&
          shop?.request_vip_data.request_vip === "4") ||
        (Number(existingWallet.data?.total_recharged) < balance &&
          shop?.request_vip_data.request_vip === "5")
      ) {
        return handleError(
          `Shop's balance not enough to apply VIP ${shop?.request_vip_data?.request_vip}`,
          404,
          null
        );
      }

      // Start the transaction
      await entityManager.transaction(async (transactionalEntityManager) => {
        const requestData = {
          ...shop.request_vip_data,
          request_status: ShopRequestStatus.APPROVED,
        };

        // Update the shop within the transaction
        await transactionalEntityManager.update(
          Shop,
          { id: id },
          {
            request_vip_data: requestData,
            shop_vip: Number(shop.request_vip_data.request_vip),
            profit: Number(profit),
          }
        );

        // Update the wallet within the transaction
        await transactionalEntityManager
          .createQueryBuilder()
          .update(Wallet)
          .set({
            total_balance: () => "total_balance + :total_balance",
            total_withdraw_able_balance: () =>
              "total_withdraw_able_balance + :total_withdraw_able_balance",
          })
          .where("shop_id = :shop_id", {
            shop_id: shop.id,
          })
          .setParameters({
            total_balance: Number(addBalanceAmount),
            total_withdraw_able_balance: Number(addBalanceAmount),
          })
          .execute();
      });

      // If everything succeeds, commit the transaction
      return handleSuccess(shop.request_vip_data);
    } catch (error: any) {
      console.log({ error });
      // If any error occurs, the transaction will be rolled back automatically
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }
  static order(sortedBy: BaseOrderByInput) {
    switch (sortedBy) {
      case BaseOrderByInput.created_at_ASC:
        return { created_at: "ASC" };
      case BaseOrderByInput.created_at_DESC:
        return { created_at: "DESC" };
      case BaseOrderByInput.updated_at_ASC:
        return { updated_at: "ASC" };
      case BaseOrderByInput.updated_at_DESC:
        return { updated_at: "DESC" };
      default:
        return { created_at: "DESC" }; // Default order
    }
  }
}

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
  ShopVerifyOTPInput,
  EProfitVIP,
  EShopRechargeBalance,
  EShopAmountBalance,
} from "../types";
import { Brackets, getManager, getRepository } from "typeorm";
import { Shop } from "../entity";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import {
  comparePassword,
  hashPassword,
  isEmail,
  validateStrongPassword,
} from "../../../utils/helper";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { getRequestedFields } from "../../../utils/graphqlUtils";
import { GraphQLResolveInfo } from "graphql";
import { Wallet, WalletService } from "../../wallet";
import { Staff } from "../../staff";
import { INotificationType, NotificationService } from "../../notification";
import { OtpService } from "../utils/helpers";
import { addMinutes } from "date-fns";
import { ResendOtpCustomerInput } from "../../customer";
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

      const validateEmail = await isEmail(data.email);

      if (!validateEmail) {
        return handleError("Email is invalid please try again.", 400, null);
      }

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
      if (!data?.email || !data?.password) {
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
      const otpExpires = addMinutes(new Date(), 5);
      const otp = OtpService.generateOtp();
      data.status == ShopStatus.PENDING;
      data.otp = otp;
      data.otpExpire_at = otpExpires;
      const newShop = shopRepository.create(data);
      const savedShop: any = await shopRepository.save(newShop);

      // Generate JWT token
      // const token = new AuthMiddlewareService().genShopToken(savedShop);

      try {
        await WalletService.createWallet({
          shop_id: savedShop?.id,
          name: savedShop?.fullname,
        } as any);
      } catch (error) { }

      const email = savedShop.email;
      this.sendOtpEmail(email, otp, savedShop);
      return handleSuccess({ token: "", data: savedShop });
    } catch (error: any) {
      console.log(error);

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopVerifyOTP({
    data,
    req,
  }: {
    data: ShopVerifyOTPInput;
    req: Request;
  }): Promise<Response<Shop | null>> {
    try {
      const shopRepository = getRepository(Shop);
      const { email, otp } = data;
      const shop = await shopRepository.findOne({ where: { email } });
      if (!shop) {
        return handleError("Accont not found please try again", 400, null);
      }
      if (shop.isVerified) {
        return handleError("Account is already verified", 400, null);
      }
      if (!shop.otp || shop.otp !== otp) {
        return handleError("Invalid OTP, please try again", 400, null);
      }
      if (!shop.otpExpire_at || shop.otpExpire_at <= new Date()) {
        return handleError("You OTP expires", 400, null);
      }

      shop.isOtpEnable = true;
      shop.isVerified = true;
      await shopRepository.save(shop);

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
      if (data.payment_method && typeof data.payment_method === 'object') {
        // Assign the updated payment method back to the shop entity
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

      shopRepository.merge(shop, { status: ShopStatus.APPROVED });


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
      }

      // Handle payment method updates
      if (data.payment_method) {
        // Assign the updated payment methods back to the shop entity
        const updatePaymentMethodData = this.updateShopMethodMapingData(
          data as any,
          shop
        );

        data.payment_method = updatePaymentMethodData as any;
      }


      // Merge and save the shop data
      shopRepository.merge(shop, data as any);
      // if (shop.status === ShopStatus.PENDING) {
      //   shop.status = ShopStatus.ACTIVE;
      // }
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
    const existingPaymentMethod: PaymentMethod = shop.payment_method || {} as PaymentMethod;
    const updatedPaymentMethod: PaymentMethod = data.payment_method || {} as PaymentMethod;

    // Merge existing payment method with updated values
    const updatePaymentMethodData = {
      ...existingPaymentMethod,
      ...updatedPaymentMethod,
    };

    return updatePaymentMethodData;
  }
  static async shopRendOTP({
    data,
    req,
  }: {
    data: Shop;
    req: Request;
  }): Promise<Response<Shop | null>> {
    const customerRepository = getRepository(Shop);
    try {
      const { email } = data;

      // Validation
      if (!email) {
        return handleError("Validation Error", 400, null);
      }

      const shop = await customerRepository.findOneBy({
        email: email,
      });

      if (!shop) {
        return handleError(config.message.user_not_found, 404, null);
      }

      const otpExpires = addMinutes(new Date(), 5);
      const newOTP = OtpService.generateOtp();
      shop.otp = newOTP;
      shop.otpExpire_at = otpExpires;
      shop.isVerified = false;

      const savedShop = await customerRepository.save(shop);
      await ShopService.sendOtpEmail(email, newOTP, savedShop);

      return handleSuccess({ token: null, data: savedShop } as any);
    } catch (error: any) {
      console.log(error);

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
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
      const { email, password } = where;
      // Validate input
      if (!email || !password) {
        return handleError("Email and password are required.", 400, null);
      }

      const queryBuilder = shopRepository.createQueryBuilder("shop");

      // Fetch user from database by email
      const shop = await queryBuilder
        .where("shop.is_active = :isActive", { isActive: true }) // Ensure only active shops
        .andWhere("shop.email = :email", { email })
        .getOne();

      if (!shop) {
        return handleError("Invalid email or password", 400, null);
      }

      // Compare passwords
      const isPasswordValid = await comparePassword(
        password,
        shop?.password || ""
      );
      if (!isPasswordValid) {
        return handleError("Invalid email or password.", 404, null);
      }

      if (
        shop.status !== ShopStatus.PENDING &&
        shop.status !== ShopStatus.ACTIVE &&
        shop.status !== ShopStatus.APPROVED
      ) {
        return handleError(
          "Your shop is not active now. Please contact the admin to check the details.",
          404,
          { status: shop.status }
        );
      }


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
      const shop = await shopRepository
        .createQueryBuilder("shop")
        .addSelect((subQuery) => {
          return subQuery
            .select("COUNT(*)")
            .from("shop_product", "product")
            .where("product.shop_id::uuid = shop.id");
        }, "product_count")
        .addSelect((subQuery) => {
          return subQuery
            .select("COUNT(*)")
            .from("shop_follower", "follower")
            .where("follower.shop_id::uuid = shop.id");
        }, "follower_count")
        .where("shop.id = :id AND shop.is_active = true", { id })
        .getRawOne();

      // const shop: any = await shopRepository.findOneBy({ id, is_active: true });

      if (!shop) {
        return handleError("Shop not found", 404, null);
      }
      // Safely delete the `payment_method` property if it exists
      if (shop.payment_method) {
        delete shop.payment_method;
      }
      const result = {
        id: shop.shop_id,
        is_active: shop.shop_is_active,
        created_at: shop.shop_created_at,
        updated_at: shop.shop_updated_at,
        created_by: shop.shop_created_by,
        updated_by: shop.shop_updated_by,
        fullname: shop.shop_fullname,
        store_name: shop.shop_store_name,
        username: shop.shop_username,
        email: shop.shop_email,
        phone_number: shop.shop_phone_number,
        shop_star: shop.shop_shop_star,
        shop_vip: shop.shop_shop_vip,
        profit: shop.shop_profit,
        otp: shop.shop_otp,
        otpExpire_at: shop.shop_otpExpire_at,
        isOtpEnable: shop.shop_isOtpEnable,
        dob: shop.shop_dob,
        image: shop.shop_image,
        totalFollower: parseInt(shop.follower_count, 10),
        totalProduct: parseInt(shop.product_count, 10),
        id_card_info: shop.shop_id_card_info,
        remark: shop.shop_remark,
        shop_address: shop.shop_shop_address,
        status: shop.shop_status,
        request_vip_data: shop.shop_request_vip_data,
      };
      console.log(result);

      return handleSuccess(result as any);
    } catch (error: any) {
      console.log(error);

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
      // const token = new AuthMiddlewareService().genShopForgotPasswordToken(
      //   existEmail
      // );

      // // Generate a reset password link
      // const resetLink = `${config.client_url}/reset-password?token=${token}`;

      // // Send mail with reset password link
      // await this.sendResetPasswordEmail(email, resetLink);

      const otpExpires = addMinutes(new Date(), 5);
      const newOTP = OtpService.generateOtp();
      existEmail.otp = newOTP;
      existEmail.otpExpire_at = otpExpires;
      existEmail.isVerified = false;
      const savedCustomer = await shopRepository.save(existEmail);

      await ShopService.sendOtpEmail(email, newOTP, savedCustomer);
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
      // const shopDataFromToken =
      //   new AuthMiddlewareService().verifyShopForgotPasswordToken(data.token);

      if (!data.email || !data.new_password || !data.otp) {
        return handleError(config.message.invalid_token, 404, null);
      }
      const validatePassStrong = validateStrongPassword(data.new_password);
      if (!validatePassStrong) {
        return handleError(
          "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
          400,
          null
        );
      }
      const shop = await shopRepository.findOne({
        where: { email: data.email, is_active: true },
      });

      if (!shop) {
        return handleError("Shop not found", 404, null);
      }

      const { otp, isVerified } = shop;

      if (!isVerified) {
        return handleError("Please verify your OTP code", 404, null);
      }
      if (otp != data.otp) {
        return handleError("The OTP is invalid", 404, null);
      }
      // Hash the password
      const newPass = await hashPassword(data?.new_password);
      shop.isVerified = false;
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

  static async sendOtpEmail(email: string, otp: string, customer: any) {
    try {
      console.log(" Sending OTP email...", customer.email);

      // Create transporter
      const transporter = nodemailer.createTransport({
        host: config.smtp.host,
        port: config.smtp.port,
        secure: config.smtp.secure, // true for 465 (SSL), false for 587 (TLS)
        auth: {
          user: config.smtp.user,
          pass: config.smtp.pass,
        },
      });

      // Build email HTML
      const htmlContent = `
      <body style="margin:0; padding:0; background-color:#f6f6f6; font-family:Arial, sans-serif;">
        <div style="width:100%; background-color:#f6f6f6; padding:30px 0;">
          <div style="max-width:600px; width:90%; margin:0 auto; background-color:#ffffff; padding:20px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">

            <div style="display:flex; align-items:center; justify-content:center; margin-bottom:20px;">
              <img 
                src="https://res.cloudinary.com/dwzjfryoh/image/upload/v1760459478/Temu_logo_icon_h3c98r.png" 
                alt="Temu Logo" 
                width="80" 
                style="display:block;"
              />
            </div>
            <div>
              <p style="font-size:16px;">Hi, ${customer?.fullname ||
        customer?.username ||
        customer?.store_name ||
        customer?.email
        }</p>
              <p>Please verify your email address using the following verification code:</p>
              <h1 style="letter-spacing:5px; color:#007bff; font-size:32px; margin:10px 0;">${otp}</h1>
              <p style="font-size:14px; color:#555;">This code will expire in <strong>5 minutes</strong>.</p>

              <p style="margin-top:10px;">Thank you！</p>
        
            </div>

            <hr style="margin:30px 0; border:none; border-top:1px solid #ddd;" />

            <p style="font-size:12px; color:#888; text-align:center;">
              Temu Team
            </p>
            <p style="font-size:12px; color:#888; text-align:center;">
            Please contact customer service if you have any questions.
            </p>
            <div style="font-size:12px; color:#888; text-align:center;">
              <a href="google.com/url?q=https://app.temu.com/cmsg_transit.html?_cmsg_biz%3D9005%26_cmsg_channel%3Dmail%26region_id%3D197%26_cmsg_locale%3D197~en~THB%26locale_override%3D197~en~THB&source=gmail&ust=1761404349697000&usg=AOvVaw2iH95Jns_R_KRcYo9NVfcV">Privacy & Cookie Policy</a>  |  <a href="https://www.temu.com/privacy-and-cookie-policy.html?refer_page_name=bgp-privacy-policy-and-setting&refer_page_id=10181_1761319263695_rb8cr8lnhv&refer_page_sn=10181&_x_sessn_id=e3cg4fwwak">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </body>
      `;

      //  Setup mail options
      const mailOptions = {
        from: `"Temu" <${config.smtp.user}>`,
        to: email,
        subject: `${otp} is your verification code`,
        text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
        html: htmlContent,
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", customer.email);
      return true;
    } catch (error: any) {
      console.error("Error sending OTP email:", error.message);
      return false;
    }
  }

  static async sendResetPasswordEmail(email: string, otp: string) {
    try {
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

      // Email options
      const mailOptions = {
        from: `"Temu" <${config.smtp.user}>`, // sender address
        to: email, // recipient email
        subject: `Reset Your Password ${Date.now().toString()}`, // Subject line
        text: `You requested a password reset. Please copy the otp below to reset password`,
        // html: `<p>You requested a password reset.</p>
        //      <p>Click the link below to reset your password:</p>
        //      <a href="${resetLink}" target="_blank">${resetLink}</a>`,
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #444;">Password Reset Request</h2>
          <p>You requested a password reset. Click the button below to reset your password:</p>
          <div"
            style="
              display: inline-block;
              background-color: #ff6600;
              color: white;
              padding: 12px 20px;
              text-decoration: none;
              border-radius: 6px;
              font-weight: bold;
            ">
           Your otp code: ${otp}
          </div>
         
          <p>If you didn’t request this, please ignore this email.</p>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="font-size: 12px; color: #888;">© ${new Date().getFullYear()} Temu. All rights reserved.</p>
        </div>`,
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
        Number(3) === Number(shop?.request_vip_data?.request_vip)
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
          ? EShopRechargeBalance.VIP1
          : data.request_vip === "2"
            ? EShopRechargeBalance.VIP2
            : data.request_vip === "3"
              ? EShopRechargeBalance.VIP3
              : EShopRechargeBalance.NORMOL;
      const addBalanceAmount =
        data.request_vip === "1"
          ? EShopAmountBalance.VIP1
          : data.request_vip === "2"
            ? EShopAmountBalance.VIP2
            : data.request_vip === "3"
              ? EShopAmountBalance.VIP3
              : EShopAmountBalance.NORMOL;
      const profit =
        data.request_vip === "1"
          ? EProfitVIP.VIP1
          : data.request_vip === "2"
            ? EProfitVIP.VIP2
            : data.request_vip === "3"
              ? EProfitVIP.VIP3
              : EProfitVIP.NORMOL;

      if (!existingWallet) return handleError("Wallet not found", 404, null);
      if (
        (Number(existingWallet.data?.total_recharged) < balance &&
          data.request_vip === "1") ||
        (Number(existingWallet.data?.total_recharged) < balance &&
          data.request_vip === "2") ||
        (Number(existingWallet.data?.total_recharged) < balance &&
          data.request_vip === "3")
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

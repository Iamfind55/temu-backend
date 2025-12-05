import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import {
  CreatePasswordCustomerInput,
  CustomerLoginResponse,
  CustomerModel,
  CustomerType,
  CustomerWhereInput,
  CustomerWhereLoginInput,
  RegisterCustomerInput,
  ResendOtpCustomerInput,
  VerifyOtpCustomerInput,
} from "../types";
import { Brackets, getRepository, Like, Not } from "typeorm";
import { Customer } from "../entity";
import { BaseOrderByInput, BaseStatus } from "../../../utils/base/baseType";
import {
  comparePassword,
  hashPassword,
  validateStrongPassword,
} from "../../../utils/helper";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { GraphQLResolveInfo } from "graphql";
import { getRequestedFields } from "../../../utils/graphqlUtils";
import {
  PaymentMethod,
  Shop,
  ShopResetPassword,
  ShopService,
} from "../../shop";
import { WalletService } from "../../wallet";
import { addMinutes } from "date-fns";
import { OtpService } from "../../shop/utils/helpers";

export class CustomerService {
  // static async customerRegister({
  //   data,
  //   req,
  // }: {
  //   data: RegisterCustomerInput;
  //   req: Request;
  // }): Promise<Response<CustomerLoginResponse | null>> {
  //   const customerRepository = getRepository(Customer);

  //   try {
  //     // Validation
  //     if (!data?.email) {
  //       return handleError("Validation Error", 400, null);
  //     }

  //     const existCustomer = await customerRepository.findOneBy({
  //       username: data?.email,
  //       is_active: true,
  //     });
  //     if (existCustomer) {
  //       return handleError(config.message.username_already_exist, 404, null);
  //     }

  //     // Hash the password
  //     if (data?.password) data.password = await hashPassword(data?.password);

  //     // Create and save customere
  //     const newCustomer = customerRepository.create({
  //       ...data,
  //       customer_type: CustomerType?.REAL,
  //     });
  //     const savedCustomer = await customerRepository.save(newCustomer);

  //     // Generate JWT token
  //     const token = new AuthMiddlewareService().genCustomerToken(savedCustomer);

  //     try {
  //       await WalletService.createWallet({
  //         customer_id: savedCustomer?.id,
  //         name: savedCustomer?.firstName,
  //       } as any);
  //     } catch (error) {}

  //     return handleSuccess({ token, data: savedCustomer });
  //   } catch (error: any) {
  //     return handleError(
  //       config.message.internal_server_error,
  //       500,
  //       error.message
  //     );
  //   }
  // }

  static async customerRegister({
    data,
    req,
  }: {
    data: RegisterCustomerInput;
    req: Request;
  }): Promise<Response<CustomerLoginResponse | null>> {
    const customerRepository = getRepository(Customer);
    try {
      const { email } = data;

      // Validation
      if (!email) {
        return handleError("Validation Error", 400, null);
      }

      const existCustomer = await customerRepository.findOneBy({
        email: email,
      });

      if (existCustomer) {
        return handleError(config.message.username_already_exist, 404, null);
      }

      // Create and save customere
      const newCustomer = customerRepository.create(data);
      const otpExpires = addMinutes(new Date(), 5);
      const otp = OtpService.generateOtp();
      newCustomer.otp = otp;
      newCustomer.otpExpire_at = otpExpires;
      newCustomer.isVerified = false;
      const savedCustomer = await customerRepository.save(newCustomer);

      await ShopService.sendOtpEmail(email, otp, savedCustomer);

      return handleSuccess({ token: null, data: savedCustomer } as any);
    } catch (error: any) {
      console.log(error);

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }
  static async customerVerifyOtp({
    data,
    req,
  }: {
    data: VerifyOtpCustomerInput;
    req: Request;
  }): Promise<Response<CustomerLoginResponse | null>> {
    const customerRepository = getRepository(Customer);
    try {
      const { otp, email } = data;

      // Validation
      if (!email || !otp) {
        return handleError("Validation Error", 400, null);
      }

      const customer = await customerRepository.findOneBy({
        email: email,
      });

      if (!customer) {
        return handleError(config.message.user_not_found, 404, null);
      }
      const { otp: customerOtp, isVerified, otpExpire_at } = customer;

      if (isVerified) {
        return handleError("The OTP is expires", 404, null);
      }
      if (customerOtp != otp) {
        return handleError("The OTP is invalid", 404, null);
      }
      if (!otpExpire_at || otpExpire_at <= new Date()) {
        return handleError("You OTP expires", 400, null);
      }
      customer.status = BaseStatus.ACTIVE;
      customer.isOtpEnable = true;
      customer.isVerified = true;
      const savedCustomer = await customerRepository.save(customer);
      return handleSuccess({ token: null, data: savedCustomer } as any);
    } catch (error: any) {
      console.log(error);

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async customerCreatePassoword({
    data,
    req,
  }: {
    data: CreatePasswordCustomerInput;
    req: Request;
  }): Promise<Response<CustomerLoginResponse | null>> {
    const customerRepository = getRepository(Customer);
    try {
      const { password, email } = data;

      // Validation
      if (!email || !password) {
        return handleError("Validation Error", 400, null);
      }
      const validatePassStrong = validateStrongPassword(password);
      if (!validatePassStrong) {
        return handleError(
          "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
          400,
          null
        );
      }
      const customer = await customerRepository.findOneBy({
        email: email,
        is_active: true,
      });

      if (!customer) {
        return handleError(config.message.user_not_found, 404, null);
      }
      if (customer.password) {
        return handleError("You already have a password", 404, null);
      }
      if (data?.password) data.password = await hashPassword(data?.password);
      customer.password = data.password;

      const savedCustomer = await customerRepository.save(customer);

      // Generate JWT token
      const token = new AuthMiddlewareService().genCustomerToken(savedCustomer);

      try {
        await WalletService.createWallet({
          customer_id: savedCustomer?.id,
          name: savedCustomer?.firstName,
        } as any);
      } catch (error) {}

      return handleSuccess({ token, data: savedCustomer } as any);
    } catch (error: any) {
      console.log(error);

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async customerRendOTP({
    data,
    req,
  }: {
    data: ResendOtpCustomerInput;
    req: Request;
  }): Promise<Response<CustomerLoginResponse | null>> {
    const customerRepository = getRepository(Customer);
    try {
      const { email } = data;

      // Validation
      if (!email) {
        return handleError("Validation Error", 400, null);
      }

      const customer = await customerRepository.findOneBy({
        email: email,
      });

      if (!customer) {
        return handleError(config.message.user_not_found, 404, null);
      }

      const otpExpires = addMinutes(new Date(), 5);
      const newOTP = OtpService.generateOtp();
      customer.otp = newOTP;
      customer.otpExpire_at = otpExpires;
      customer.isVerified = false;
      const savedCustomer = await customerRepository.save(customer);
      await ShopService.sendOtpEmail(email, newOTP, savedCustomer);

      return handleSuccess({ token: null, data: savedCustomer } as any);
    } catch (error: any) {
      console.log(error);

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }
  static async createCustomer({
    data,
    req,
  }: {
    data: CustomerModel;
    req: Request;
  }): Promise<Response<Customer | null>> {
    const customerRepository = getRepository(Customer);

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

      const existCustomer = await customerRepository.findOneBy({
        username: data?.username,
        is_active: true,
      });
      if (existCustomer) {
        return handleError(config.message.username_already_exist, 404, null);
      }

      if (data?.password)
        // Hash the password
        data.password = await hashPassword(data?.password);

      data.created_by = staffDataFromToken?.id;

      // Create and save Customer
      const newCustomer = customerRepository.create(data as any);
      const savedCustomer = await customerRepository.save(newCustomer);

      return handleSuccess(savedCustomer as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateCustomer({
    data,
    req,
  }: {
    data: CustomerModel;
    req: Request;
  }): Promise<Response<Customer | null>> {
    const customerRepository = getRepository(Customer);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const customer = await customerRepository.findOne({
        where: { id: data.id },
      });

      if (!customer) {
        return handleError("Customer not found", 404, null);
      }
      if (data?.username) {
        const existCustomer = await customerRepository.findOne({
          where: {
            username: data?.username,
            is_active: true,
            id: Not(data?.id),
          },
        });

        if (existCustomer) {
          return handleError(config.message.username_already_exist, 404, null);
        }
      }

      // Hash the password
      if (data?.password) data.password = await hashPassword(data?.password);

      customerRepository.merge(customer, data);

      const updatedCustomer = await customerRepository.save(customer);

      return handleSuccess(updatedCustomer);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateCustomerInformation({
    data,
    req,
  }: {
    data: CustomerModel;
    req: Request;
  }): Promise<Response<Customer | null>> {
    const customerRepository = getRepository(Customer);

    try {
      const customerDataFromToken =
        new AuthMiddlewareService().verifyCustomerToken(req);

      if (!customerDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shop: any = await customerRepository.findOne({
        where: { id: customerDataFromToken?.id, is_active: true },
      });

      if (!shop) {
        return handleError("Shop not found", 404, null);
      }

      // Hash the password
      if (data?.password) {
        data.password = await hashPassword(data.password);
      }

      // Handle payment method updates
      if (data.payment_method && typeof data.payment_method === 'object') {
        // Merge the updated payment method with existing payment method
        const updatePaymentMethodData = this.updateCustomerMethodMapingData(
          data as any,
          shop
        );

        data.payment_method = updatePaymentMethodData as any;
      }

      // Merge and save the shop data
      customerRepository.merge(shop, data as any);
      const updatedShop = await customerRepository.save(shop);

      return handleSuccess(updatedShop);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static updateCustomerMethodMapingData(data: Customer, shop: Customer) {
    const existingPaymentMethod: PaymentMethod | undefined = shop.payment_method;
    const updatedPaymentMethod: PaymentMethod | undefined = data?.payment_method;

    // If no updated payment method is provided, return the existing one
    if (!updatedPaymentMethod) {
      return existingPaymentMethod;
    }

    // If there's no existing payment method, return the updated one
    if (!existingPaymentMethod) {
      return updatedPaymentMethod;
    }

    // Merge existing and updated payment method
    const updatePaymentMethodData = {
      ...existingPaymentMethod,
      ...updatedPaymentMethod,
    };

    return updatePaymentMethodData;
  }

  static async deleteCustomer({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<null>> {
    const customerRepository = getRepository(Customer);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const customer = await customerRepository.findOneById(id);

      if (!customer) {
        return handleError("Customer not found", 404, null);
      }

      customerRepository.merge(customer, { is_active: false });

      await customerRepository.save(customer);

      // await customerRepository.remove(customer);

      return handleSuccess(Customer as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getCustomers(
    {
      where,
      page,
      limit,
      sortedBy,
      req,
    }: {
      where: Partial<CustomerWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
      req: Request;
    },
    info: GraphQLResolveInfo
  ): Promise<Response<Customer[] | null>> {
    const customerRepository = getRepository(Customer);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const order = this.order(sortedBy);

      const queryBuilder = customerRepository
        .createQueryBuilder("customer")
        .where("customer.is_active = :isActive", { isActive: true });

      // Apply field selection
      // Extract requested fields dynamically
      const selectFields = getRequestedFields(info, "getProducts.data");
      if (selectFields?.length) {
        const fields = selectFields.map((field) => `customer.${field}`);
        queryBuilder.select(fields);
      }

      if (where?.keyword) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("customer.firstName ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            })
              .orWhere("customer.lastName ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              })
              .orWhere("customer.username ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              })
              .orWhere("customer.email ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              });
          })
        );
      }

      if (where?.status) {
        queryBuilder.andWhere("customer.status = :status", {
          status: where.status,
        });
      }

      if (where?.customer_type) {
        queryBuilder.andWhere("customer.customer_type = :customer_type", {
          customer_type: where.customer_type,
        });
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(customer.created_at) BETWEEN :startDate AND :endDate",
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

      const [customers, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(customers, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async customerLogin({
    where,
  }: {
    where: CustomerWhereLoginInput;
  }): Promise<Response<CustomerLoginResponse | null>> {
    const customerRepository = getRepository(Customer);

    try {
      const { email, password } = where;
      // Validate input
      if (!email || !password) {
        return handleError("Email and password are required.", 400, null);
      }

      // Fetch user from database
      const customer = await customerRepository.findOne({
        where: { email, is_active: true },
      });

      if (!customer) {
        return handleError("Invalid email or password.", 404, null);
      }

      if (customer.status !== BaseStatus.ACTIVE)
        return handleError(
          "Your account is not active now. Please contact the admin to check the details.",
          404,
          null
        );
      let isPasswordValid;
      if (customer.password) {
        isPasswordValid = await comparePassword(password, customer?.password);
      }
      // Compare passwords

      if (!isPasswordValid) {
        return handleError("Invalid username or password.", 404, null);
      }

      // Generate JWT token
      const token = new AuthMiddlewareService().genCustomerToken(customer);
      return handleSuccess({ token, data: customer } as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getCustomer({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Customer | null>> {
    const customerRepository = getRepository(Customer);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const Customer = await customerRepository.findOne({
        where: { id, is_active: true },
      });

      if (!Customer) {
        return handleError("Customer not found", 404, null);
      }

      return handleSuccess(Customer);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async customerForgotPassword({
    email,
  }: {
    email: string;
  }): Promise<Response<{ success: boolean; error: any } | null>> {
    try {
      const customerRepository = getRepository(Customer);

      // Check if the email exists
      const customer = await customerRepository.findOneBy({
        email,
        is_active: true,
      });

      if (!customer) {
        return handleError(
          "Email not found",
          404,
          "Email not found in database"
        );
      }

      // Generate JWT token with expiration
      const token = new AuthMiddlewareService().genShopForgotPasswordToken(
        customer as any
      );

      const otpExpires = addMinutes(new Date(), 5);
      const newOTP = OtpService.generateOtp();
      customer.otp = newOTP;
      customer.otpExpire_at = otpExpires;
      customer.isVerified = false;
      const savedCustomer = await customerRepository.save(customer);
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

  static async customerResetPassword({
    data,
    req,
  }: {
    data: ShopResetPassword;
    req: Request;
  }): Promise<Response<Customer | null>> {
    const customerRepository = getRepository(Customer);

    try {
      // const customerDataFromToken =
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

      const customer = await customerRepository.findOne({
        where: { email: data.email, is_active: true },
      });

      if (!customer) {
        return handleError("customer not found", 404, null);
      }

      const { otp, isVerified } = customer;

      if (!isVerified) {
        return handleError("Please verify your OTP code", 404, null);
      }

      if (otp != data.otp) {
        return handleError("The OTP is invalid", 404, null);
      }

      // Hash the password
      const newPass = await hashPassword(data?.new_password);

      customerRepository.merge(customer, { password: newPass });
      customer.isVerified = false;
      const updatedShop = await customerRepository.save(customer);

      return handleSuccess(updatedShop);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getCustomerInformation({
    req,
  }: {
    req: Request;
  }): Promise<Response<Customer | null>> {
    const customerRepository = getRepository(Customer);

    try {
      const customerDataFromToken =
        new AuthMiddlewareService().verifyCustomerToken(req);

      if (!customerDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      console.log({ customerDataFromToken });
      const customer = await customerRepository.findOne({
        where: { id: customerDataFromToken?.id, is_active: true },
      });

      if (!customer) {
        return handleError("Customer not found", 404, null);
      }

      return handleSuccess(customer);
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

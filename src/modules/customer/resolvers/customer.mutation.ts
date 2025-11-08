import {
  CreatePasswordCustomerInput,
  CustomerWhereLoginInput,
  RegisterCustomerInput,
  ResendOtpCustomerInput,
  VerifyOtpCustomerInput,
} from "../types/index";
import { Request, Response } from "express";
import { CustomerService } from "../services";
import { CustomerModel } from "../types";
import { ShopResetPassword } from "../../shop";

export const customerMutation = {
  createCustomer: async (
    _: any,
    { data }: { data: CustomerModel },
    { req }: { req: Request }
  ) => CustomerService.createCustomer({ data: data, req }),
  customerRegister: async (
    _: any,
    { data }: { data: RegisterCustomerInput },
    { req }: { req: Request }
  ) => CustomerService.customerRegister({ data: data, req }),

  customerVerifyOtp: async (
    _: any,
    { data }: { data: VerifyOtpCustomerInput },
    { req }: { req: Request }
  ) => CustomerService.customerVerifyOtp({ data: data, req }),
  customerCreatePassword: async (
    _: any,
    { data }: { data: CreatePasswordCustomerInput },
    { req }: { req: Request }
  ) => CustomerService.customerCreatePassoword({ data: data, req }),

  customerResendOTP: async (
    _: any,
    { data }: { data: ResendOtpCustomerInput },
    { req }: { req: Request }
  ) => CustomerService.customerRendOTP({ data: data, req }),

  updateCustomer: async (
    _: any,
    { data }: { data: CustomerModel },
    { req }: { req: Request }
  ) => CustomerService.updateCustomer({ data: data, req }),

  deleteCustomer: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => CustomerService.deleteCustomer({ id, req }),

  customerLogin: async (
    _: any,
    { where }: { where: CustomerWhereLoginInput },
    { req }: { req: Request }
  ) => CustomerService.customerLogin({ where }),

  customerForgotPassword: async (
    _: any,
    { email }: { email: string },
    { req }: { req: Request }
  ) => CustomerService.customerForgotPassword({ email }),

  customerResetPassword: async (
    _: any,
    { data }: { data: ShopResetPassword },
    { req }: { req: Request }
  ) => CustomerService.customerResetPassword({ data: data, req }),

  updateCustomerInformation: async (
    _: any,
    { data }: { data: CustomerModel },
    { req }: { req: Request }
  ) => CustomerService.updateCustomerInformation({ data: data, req }),
};

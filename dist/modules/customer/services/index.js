"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const baseType_1 = require("../../../utils/base/baseType");
const helper_1 = require("../../../utils/helper");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const graphqlUtils_1 = require("../../../utils/graphqlUtils");
const shop_1 = require("../../shop");
const wallet_1 = require("../../wallet");
const date_fns_1 = require("date-fns");
const helpers_1 = require("../../shop/utils/helpers");
class CustomerService {
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
    static customerRegister(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const customerRepository = (0, typeorm_1.getRepository)(entity_1.Customer);
            try {
                const { email } = data;
                // Validation
                if (!email) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                const existCustomer = yield customerRepository.findOneBy({
                    email: email,
                });
                if (existCustomer) {
                    return (0, error_handler_1.handleError)(config_1.config.message.username_already_exist, 404, null);
                }
                // Create and save customere
                const newCustomer = customerRepository.create(data);
                const otpExpires = (0, date_fns_1.addMinutes)(new Date(), 5);
                const otp = helpers_1.OtpService.generateOtp();
                newCustomer.otp = otp;
                newCustomer.otpExpire_at = otpExpires;
                newCustomer.isVerified = false;
                const savedCustomer = yield customerRepository.save(newCustomer);
                yield shop_1.ShopService.sendOtpEmail(email, otp, savedCustomer);
                return (0, success_handler_1.handleSuccess)({ token: null, data: savedCustomer });
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static customerVerifyOtp(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const customerRepository = (0, typeorm_1.getRepository)(entity_1.Customer);
            try {
                const { otp, email } = data;
                // Validation
                if (!email || !otp) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                const customer = yield customerRepository.findOneBy({
                    email: email,
                });
                if (!customer) {
                    return (0, error_handler_1.handleError)(config_1.config.message.user_not_found, 404, null);
                }
                const { otp: customerOtp, isVerified, otpExpire_at } = customer;
                console.log(isVerified);
                if (isVerified) {
                    return (0, error_handler_1.handleError)("The OTP is expires", 404, null);
                }
                if (customerOtp != otp) {
                    return (0, error_handler_1.handleError)("The OTP is invalid", 404, null);
                }
                if (!otpExpire_at || otpExpire_at <= new Date()) {
                    return (0, error_handler_1.handleError)("You OTP expires", 400, null);
                }
                customer.status = baseType_1.BaseStatus.ACTIVE;
                customer.isOtpEnable = true;
                customer.isVerified = true;
                const savedCustomer = yield customerRepository.save(customer);
                return (0, success_handler_1.handleSuccess)({ token: null, data: savedCustomer });
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static customerCreatePassoword(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const customerRepository = (0, typeorm_1.getRepository)(entity_1.Customer);
            try {
                const { password, email } = data;
                // Validation
                if (!email || !password) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                const validatePassStrong = (0, helper_1.validateStrongPassword)(password);
                if (!validatePassStrong) {
                    return (0, error_handler_1.handleError)("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.", 400, null);
                }
                const customer = yield customerRepository.findOneBy({
                    email: email,
                    is_active: true,
                });
                if (!customer) {
                    return (0, error_handler_1.handleError)(config_1.config.message.user_not_found, 404, null);
                }
                if (customer.password) {
                    return (0, error_handler_1.handleError)("You already have a password", 404, null);
                }
                if (data === null || data === void 0 ? void 0 : data.password)
                    data.password = yield (0, helper_1.hashPassword)(data === null || data === void 0 ? void 0 : data.password);
                customer.password = data.password;
                const savedCustomer = yield customerRepository.save(customer);
                // Generate JWT token
                const token = new auth_middleware_1.AuthMiddlewareService().genCustomerToken(savedCustomer);
                try {
                    yield wallet_1.WalletService.createWallet({
                        customer_id: savedCustomer === null || savedCustomer === void 0 ? void 0 : savedCustomer.id,
                        name: savedCustomer === null || savedCustomer === void 0 ? void 0 : savedCustomer.firstName,
                    });
                }
                catch (error) { }
                return (0, success_handler_1.handleSuccess)({ token, data: savedCustomer });
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static customerRendOTP(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const customerRepository = (0, typeorm_1.getRepository)(entity_1.Customer);
            try {
                const { email } = data;
                // Validation
                if (!email) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                const customer = yield customerRepository.findOneBy({
                    email: email,
                });
                if (!customer) {
                    return (0, error_handler_1.handleError)(config_1.config.message.user_not_found, 404, null);
                }
                const otpExpires = (0, date_fns_1.addMinutes)(new Date(), 5);
                const newOTP = helpers_1.OtpService.generateOtp();
                customer.otp = newOTP;
                customer.otpExpire_at = otpExpires;
                customer.isVerified = false;
                const savedCustomer = yield customerRepository.save(customer);
                yield shop_1.ShopService.sendOtpEmail(email, newOTP, savedCustomer);
                return (0, success_handler_1.handleSuccess)({ token: null, data: savedCustomer });
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static createCustomer(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const customerRepository = (0, typeorm_1.getRepository)(entity_1.Customer);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                // Validation
                if (!(data === null || data === void 0 ? void 0 : data.username) || !(data === null || data === void 0 ? void 0 : data.password)) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                const existCustomer = yield customerRepository.findOneBy({
                    username: data === null || data === void 0 ? void 0 : data.username,
                    is_active: true,
                });
                if (existCustomer) {
                    return (0, error_handler_1.handleError)(config_1.config.message.username_already_exist, 404, null);
                }
                if (data === null || data === void 0 ? void 0 : data.password)
                    // Hash the password
                    data.password = yield (0, helper_1.hashPassword)(data === null || data === void 0 ? void 0 : data.password);
                data.created_by = staffDataFromToken === null || staffDataFromToken === void 0 ? void 0 : staffDataFromToken.id;
                // Create and save Customer
                const newCustomer = customerRepository.create(data);
                const savedCustomer = yield customerRepository.save(newCustomer);
                return (0, success_handler_1.handleSuccess)(savedCustomer);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateCustomer(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const customerRepository = (0, typeorm_1.getRepository)(entity_1.Customer);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const customer = yield customerRepository.findOne({
                    where: { id: data.id },
                });
                if (!customer) {
                    return (0, error_handler_1.handleError)("Customer not found", 404, null);
                }
                if (data === null || data === void 0 ? void 0 : data.username) {
                    const existCustomer = yield customerRepository.findOne({
                        where: {
                            username: data === null || data === void 0 ? void 0 : data.username,
                            is_active: true,
                            id: (0, typeorm_1.Not)(data === null || data === void 0 ? void 0 : data.id),
                        },
                    });
                    if (existCustomer) {
                        return (0, error_handler_1.handleError)(config_1.config.message.username_already_exist, 404, null);
                    }
                }
                // Hash the password
                if (data === null || data === void 0 ? void 0 : data.password)
                    data.password = yield (0, helper_1.hashPassword)(data === null || data === void 0 ? void 0 : data.password);
                customerRepository.merge(customer, data);
                const updatedCustomer = yield customerRepository.save(customer);
                return (0, success_handler_1.handleSuccess)(updatedCustomer);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateCustomerInformation(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const customerRepository = (0, typeorm_1.getRepository)(entity_1.Customer);
            try {
                const customerDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                if (!customerDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shop = yield customerRepository.findOne({
                    where: { id: customerDataFromToken === null || customerDataFromToken === void 0 ? void 0 : customerDataFromToken.id, is_active: true },
                });
                if (!shop) {
                    return (0, error_handler_1.handleError)("Shop not found", 404, null);
                }
                // Hash the password
                if (data === null || data === void 0 ? void 0 : data.password) {
                    data.password = yield (0, helper_1.hashPassword)(data.password);
                }
                // Handle payment method updates
                if (data.payment_method && Array.isArray(data.payment_method)) {
                    // Assign the updated payment methods back to the shop entity
                    const updatePaymentMethodData = this.updateCustomerMethodMapingData(data, shop);
                    data.payment_method = updatePaymentMethodData;
                }
                // Merge and save the shop data
                customerRepository.merge(shop, data);
                const updatedShop = yield customerRepository.save(shop);
                return (0, success_handler_1.handleSuccess)(updatedShop);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateCustomerMethodMapingData(data, shop) {
        const existingPaymentMethods = shop.payment_method || [];
        const updatedPaymentMethods = (data === null || data === void 0 ? void 0 : data.payment_method) || [];
        // Update existing methods or add new ones
        const updatePaymentMethodData = existingPaymentMethods.map((method) => {
            const existPaymentMethodUpdate = updatedPaymentMethods.find((paymentMethod) => (paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.id) === (method === null || method === void 0 ? void 0 : method.id) && (paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.id) != null);
            if (existPaymentMethodUpdate) {
                return Object.assign(Object.assign({}, method), existPaymentMethodUpdate);
            }
            return method;
        });
        return updatePaymentMethodData;
    }
    static deleteCustomer(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const customerRepository = (0, typeorm_1.getRepository)(entity_1.Customer);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const customer = yield customerRepository.findOneById(id);
                if (!customer) {
                    return (0, error_handler_1.handleError)("Customer not found", 404, null);
                }
                customerRepository.merge(customer, { is_active: false });
                yield customerRepository.save(customer);
                // await customerRepository.remove(customer);
                return (0, success_handler_1.handleSuccess)(entity_1.Customer);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getCustomers(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, }, info) {
            var _b, _c, _d;
            const customerRepository = (0, typeorm_1.getRepository)(entity_1.Customer);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const order = this.order(sortedBy);
                const queryBuilder = customerRepository
                    .createQueryBuilder("customer")
                    .where("customer.is_active = :isActive", { isActive: true });
                // Apply field selection
                // Extract requested fields dynamically
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getProducts.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields.map((field) => `customer.${field}`);
                    queryBuilder.select(fields);
                }
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
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
                    }));
                }
                if (where === null || where === void 0 ? void 0 : where.status) {
                    queryBuilder.andWhere("customer.status = :status", {
                        status: where.status,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.customer_type) {
                    queryBuilder.andWhere("customer.customer_type = :customer_type", {
                        customer_type: where.customer_type,
                    });
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(customer.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: (_d = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _d === void 0 ? void 0 : _d.endDate,
                    });
                }
                // Pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                const [customers, total] = yield queryBuilder.getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(customers, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static customerLogin(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, }) {
            const customerRepository = (0, typeorm_1.getRepository)(entity_1.Customer);
            try {
                const { email, password } = where;
                // Validate input
                if (!email || !password) {
                    return (0, error_handler_1.handleError)("Email and password are required.", 400, null);
                }
                // Fetch user from database
                const customer = yield customerRepository.findOne({
                    where: { email, is_active: true },
                });
                if (!customer) {
                    return (0, error_handler_1.handleError)("Invalid email or password.", 404, null);
                }
                if (customer.status !== baseType_1.BaseStatus.ACTIVE)
                    return (0, error_handler_1.handleError)("Your account is not active now. Please contact the admin to check the details.", 404, null);
                let isPasswordValid;
                if (customer.password) {
                    isPasswordValid = yield (0, helper_1.comparePassword)(password, customer === null || customer === void 0 ? void 0 : customer.password);
                }
                // Compare passwords
                if (!isPasswordValid) {
                    return (0, error_handler_1.handleError)("Invalid username or password.", 404, null);
                }
                // Generate JWT token
                const token = new auth_middleware_1.AuthMiddlewareService().genCustomerToken(customer);
                return (0, success_handler_1.handleSuccess)({ token, data: customer });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getCustomer(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const customerRepository = (0, typeorm_1.getRepository)(entity_1.Customer);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const Customer = yield customerRepository.findOne({
                    where: { id, is_active: true },
                });
                if (!Customer) {
                    return (0, error_handler_1.handleError)("Customer not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(Customer);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static customerForgotPassword(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, }) {
            try {
                const customerRepository = (0, typeorm_1.getRepository)(entity_1.Customer);
                // Check if the email exists
                const customer = yield customerRepository.findOneBy({
                    email,
                    is_active: true,
                });
                if (!customer) {
                    return (0, error_handler_1.handleError)("Email not found", 404, "Email not found in database");
                }
                // Generate JWT token with expiration
                const token = new auth_middleware_1.AuthMiddlewareService().genShopForgotPasswordToken(customer);
                const otpExpires = (0, date_fns_1.addMinutes)(new Date(), 5);
                const newOTP = helpers_1.OtpService.generateOtp();
                customer.otp = newOTP;
                customer.otpExpire_at = otpExpires;
                customer.isVerified = false;
                const savedCustomer = yield customerRepository.save(customer);
                yield shop_1.ShopService.sendOtpEmail(email, newOTP, savedCustomer);
                return (0, success_handler_1.handleSuccess)(null);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static customerResetPassword(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const customerRepository = (0, typeorm_1.getRepository)(entity_1.Customer);
            try {
                // const customerDataFromToken =
                //   new AuthMiddlewareService().verifyShopForgotPasswordToken(data.token);
                if (!data.email || !data.new_password || !data.otp) {
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                const validatePassStrong = (0, helper_1.validateStrongPassword)(data.new_password);
                if (!validatePassStrong) {
                    return (0, error_handler_1.handleError)("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.", 400, null);
                }
                const customer = yield customerRepository.findOne({
                    where: { email: data.email, is_active: true },
                });
                if (!customer) {
                    return (0, error_handler_1.handleError)("customer not found", 404, null);
                }
                const { otp, isVerified } = customer;
                if (!isVerified) {
                    return (0, error_handler_1.handleError)("Please verify your OTP code", 404, null);
                }
                if (otp != data.otp) {
                    return (0, error_handler_1.handleError)("The OTP is invalid", 404, null);
                }
                // Hash the password
                const newPass = yield (0, helper_1.hashPassword)(data === null || data === void 0 ? void 0 : data.new_password);
                customerRepository.merge(customer, { password: newPass });
                customer.isVerified = false;
                const updatedShop = yield customerRepository.save(customer);
                return (0, success_handler_1.handleSuccess)(updatedShop);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getCustomerInformation(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const customerRepository = (0, typeorm_1.getRepository)(entity_1.Customer);
            try {
                const customerDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                if (!customerDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                console.log({ customerDataFromToken });
                const customer = yield customerRepository.findOne({
                    where: { id: customerDataFromToken === null || customerDataFromToken === void 0 ? void 0 : customerDataFromToken.id, is_active: true },
                });
                if (!customer) {
                    return (0, error_handler_1.handleError)("Customer not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(customer);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    // Map `sortedBy` enum to TypeORM order format
    static order(sortedBy) {
        switch (sortedBy) {
            case baseType_1.BaseOrderByInput.created_at_ASC:
                return { created_at: "ASC" };
            case baseType_1.BaseOrderByInput.created_at_DESC:
                return { created_at: "DESC" };
            case baseType_1.BaseOrderByInput.updated_at_ASC:
                return { updated_at: "ASC" };
            case baseType_1.BaseOrderByInput.updated_at_DESC:
                return { updated_at: "DESC" };
            default:
                return { created_at: "DESC" }; // Default order
        }
    }
}
exports.CustomerService = CustomerService;

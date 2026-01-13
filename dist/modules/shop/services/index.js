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
exports.ShopService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const types_1 = require("../types");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const baseType_1 = require("../../../utils/base/baseType");
const helper_1 = require("../../../utils/helper");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const graphqlUtils_1 = require("../../../utils/graphqlUtils");
const wallet_1 = require("../../wallet");
const notification_1 = require("../../notification");
const helpers_1 = require("../utils/helpers");
const date_fns_1 = require("date-fns");
const nodemailer = require("nodemailer");
class ShopService {
    static createShop(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                // Validation
                if (!(data === null || data === void 0 ? void 0 : data.username) || !(data === null || data === void 0 ? void 0 : data.password)) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                const validateEmail = yield (0, helper_1.isEmail)(data.email);
                if (!validateEmail) {
                    return (0, error_handler_1.handleError)("Email is invalid please try again.", 400, null);
                }
                const existShop = yield this.existShopUnique(data);
                if (existShop)
                    return (0, error_handler_1.handleError)("Username or Email already exist in system.", 400, null);
                // Hash the password
                if (data === null || data === void 0 ? void 0 : data.password)
                    data.password = yield (0, helper_1.hashPassword)(data === null || data === void 0 ? void 0 : data.password);
                data.created_by = staffDataFromToken === null || staffDataFromToken === void 0 ? void 0 : staffDataFromToken.id;
                // Create and save shop
                const newShop = shopRepository.create(data);
                const savedShop = yield shopRepository.save(newShop);
                return (0, success_handler_1.handleSuccess)(savedShop);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopRegister(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
            try {
                // Validation
                if (!(data === null || data === void 0 ? void 0 : data.email) || !(data === null || data === void 0 ? void 0 : data.password)) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                if (data.email)
                    data.email = data.email.replace(" ", "");
                // Validate exist shop
                const existShop = yield this.existShopUnique(data);
                if (existShop)
                    return (0, error_handler_1.handleError)("Username or Email already exist in system.", 400, null);
                // Hash the password
                if (data === null || data === void 0 ? void 0 : data.password)
                    data.password = yield (0, helper_1.hashPassword)(data === null || data === void 0 ? void 0 : data.password);
                // Create and save shop
                const otpExpires = (0, date_fns_1.addMinutes)(new Date(), 5);
                const otp = helpers_1.OtpService.generateOtp();
                data.status == types_1.ShopStatus.PENDING;
                data.otp = otp;
                data.otpExpire_at = otpExpires;
                const newShop = shopRepository.create(data);
                const savedShop = yield shopRepository.save(newShop);
                // Generate JWT token
                // const token = new AuthMiddlewareService().genShopToken(savedShop);
                try {
                    yield wallet_1.WalletService.createWallet({
                        shop_id: savedShop === null || savedShop === void 0 ? void 0 : savedShop.id,
                        name: savedShop === null || savedShop === void 0 ? void 0 : savedShop.fullname,
                    });
                }
                catch (error) { }
                const email = savedShop.email;
                this.sendOtpEmail(email, otp, savedShop);
                return (0, success_handler_1.handleSuccess)({ token: "", data: savedShop });
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopVerifyOTP(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            try {
                const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
                const { email, otp } = data;
                const shop = yield shopRepository.findOne({ where: { email } });
                if (!shop) {
                    return (0, error_handler_1.handleError)("Accont not found please try again", 400, null);
                }
                if (shop.isVerified) {
                    return (0, error_handler_1.handleError)("Account is already verified", 400, null);
                }
                if (!shop.otp || shop.otp !== otp) {
                    return (0, error_handler_1.handleError)("Invalid OTP, please try again", 400, null);
                }
                if (!shop.otpExpire_at || shop.otpExpire_at <= new Date()) {
                    return (0, error_handler_1.handleError)("You OTP expires", 400, null);
                }
                shop.status = types_1.ShopStatus.ACTIVE;
                shop.isOtpEnable = true;
                shop.isVerified = true;
                yield shopRepository.save(shop);
                const token = new auth_middleware_1.AuthMiddlewareService().genShopToken(shop);
                return (0, success_handler_1.handleSuccess)({ token, data: shop });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminUpdateShop(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shop = yield shopRepository.findOneBy({
                    id: data.id,
                    is_active: true,
                });
                if (!shop) {
                    return (0, error_handler_1.handleError)("Shop not found", 404, null);
                }
                if (data.email)
                    data.email = data.email.split(" ").join("");
                const existShop = yield this.existShopUnique(data);
                if (existShop)
                    return (0, error_handler_1.handleError)("Username or Email already exist in system.", 400, null);
                // Hash the password
                if (data === null || data === void 0 ? void 0 : data.password)
                    data.password = yield (0, helper_1.hashPassword)(data === null || data === void 0 ? void 0 : data.password);
                // Handle payment method updates
                if (data.payment_method && typeof data.payment_method === 'object') {
                    // Assign the updated payment method back to the shop entity
                    const updatePaymentMethodData = this.updateShopMethodMapingData(data, shop);
                    data.payment_method = updatePaymentMethodData;
                }
                shopRepository.merge(shop, data);
                const updatedShop = yield shopRepository.save(shop);
                return (0, success_handler_1.handleSuccess)(updatedShop);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminApproveShop(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shop = yield shopRepository.findOneBy({ id, is_active: true });
                if (!shop) {
                    return (0, error_handler_1.handleError)("Shop not found", 404, null);
                }
                shopRepository.merge(shop, { status: types_1.ShopStatus.APPROVED });
                const updatedShop = yield shopRepository.save(shop);
                return (0, success_handler_1.handleSuccess)(updatedShop);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateShopInformation(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shop = yield shopRepository.findOne({
                    where: { id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id, is_active: true },
                });
                if (!shop) {
                    return (0, error_handler_1.handleError)("Shop not found", 404, null);
                }
                const existShop = yield this.existShopUnique(Object.assign(Object.assign({}, data), { id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id }));
                if (existShop)
                    return (0, error_handler_1.handleError)("Username or Email already exist in system.", 400, null);
                // Hash the password
                if (data === null || data === void 0 ? void 0 : data.password) {
                    data.password = yield (0, helper_1.hashPassword)(data.password);
                }
                // Handle payment method updates
                if (data.payment_method) {
                    // Assign the updated payment methods back to the shop entity
                    const updatePaymentMethodData = this.updateShopMethodMapingData(data, shop);
                    data.payment_method = updatePaymentMethodData;
                }
                // Merge and save the shop data
                shopRepository.merge(shop, data);
                if (shop.status === types_1.ShopStatus.PENDING) {
                    shop.status = types_1.ShopStatus.ACTIVE;
                }
                const updatedShop = yield shopRepository.save(shop);
                return (0, success_handler_1.handleSuccess)(updatedShop);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateShopMethodMapingData(data, shop) {
        const existingPaymentMethod = shop.payment_method || {};
        const updatedPaymentMethod = data.payment_method || {};
        // Merge existing payment method with updated values
        const updatePaymentMethodData = Object.assign(Object.assign({}, existingPaymentMethod), updatedPaymentMethod);
        return updatePaymentMethodData;
    }
    static shopRendOTP(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const customerRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
            try {
                const { email } = data;
                // Validation
                if (!email) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                const shop = yield customerRepository.findOneBy({
                    email: email,
                });
                if (!shop) {
                    return (0, error_handler_1.handleError)(config_1.config.message.user_not_found, 404, null);
                }
                const otpExpires = (0, date_fns_1.addMinutes)(new Date(), 5);
                const newOTP = helpers_1.OtpService.generateOtp();
                shop.otp = newOTP;
                shop.otpExpire_at = otpExpires;
                shop.isVerified = false;
                const savedShop = yield customerRepository.save(shop);
                yield ShopService.sendOtpEmail(email, newOTP, savedShop);
                return (0, success_handler_1.handleSuccess)({ token: null, data: savedShop });
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static deleteShop(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shop = yield shopRepository.findOneBy({ id, is_active: true });
                if (!shop) {
                    return (0, error_handler_1.handleError)("Shop not found", 404, null);
                }
                // await shopRepository.remove(shop);
                yield shopRepository.update({ id: id }, { is_active: false });
                return (0, success_handler_1.handleSuccess)(shop);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getShops(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, }, info) {
            var _b, _c, _d;
            const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
            try {
                const order = this.order(sortedBy);
                const queryBuilder = shopRepository
                    .createQueryBuilder("shop")
                    .where("shop.is_active = :isActive", { isActive: true });
                // Apply field selection
                // Extract requested fields dynamically
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getShops.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields.map((field) => `shop.${field}`);
                    queryBuilder.select(fields);
                }
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
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
                    }));
                }
                if (where === null || where === void 0 ? void 0 : where.status) {
                    queryBuilder.andWhere("shop.status = :status", {
                        status: where.status,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.shop_vip) {
                    queryBuilder.andWhere("shop.shop_vip = :shop_vip", {
                        shop_vip: where.shop_vip,
                    });
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(shop.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: (_d = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _d === void 0 ? void 0 : _d.endDate,
                    });
                }
                // Pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                if ((selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) <= 0) {
                    const _total = yield queryBuilder.getCount();
                    return (0, success_handler_1.handleSuccessWithTotalData)([], _total);
                }
                const [shops, total] = yield queryBuilder.getManyAndCount();
                const resultShops = shops === null || shops === void 0 ? void 0 : shops.map((shop) => {
                    if (shop === null || shop === void 0 ? void 0 : shop.payment_method)
                        delete shop.payment_method;
                    return shop;
                });
                return (0, success_handler_1.handleSuccessWithTotalData)(resultShops, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminGetShops(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, }, info) {
            var _b, _c, _d;
            const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const order = this.order(sortedBy);
                const queryBuilder = shopRepository
                    .createQueryBuilder("shop")
                    .where("shop.is_active = :isActive", { isActive: true });
                // Apply field selection
                // Extract requested fields dynamically
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getShops.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields.map((field) => `shop.${field}`);
                    queryBuilder.select(fields);
                }
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("shop.store_name ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        })
                            .orWhere("shop.email ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        })
                            .orWhere("shop.phone_number ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        });
                    }));
                }
                if (where === null || where === void 0 ? void 0 : where.status) {
                    queryBuilder.andWhere("shop.status = :status", {
                        status: where.status,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.shop_vip) {
                    queryBuilder.andWhere("shop.shop_vip = :shop_vip", {
                        shop_vip: where.shop_vip,
                    });
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(shop.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: (_d = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _d === void 0 ? void 0 : _d.endDate,
                    });
                }
                // Pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                if ((selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) <= 0) {
                    const _total = yield queryBuilder.getCount();
                    return (0, success_handler_1.handleSuccessWithTotalData)([], _total);
                }
                const [shops, total] = yield queryBuilder.getManyAndCount();
                const resultShops = shops === null || shops === void 0 ? void 0 : shops.map((shop) => {
                    if (shop === null || shop === void 0 ? void 0 : shop.payment_method)
                        delete shop.payment_method;
                    return shop;
                });
                return (0, success_handler_1.handleSuccessWithTotalData)(resultShops, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopLogin(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, }) {
            const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
            try {
                const { email, password } = where;
                // Validate input
                if (!email || !password) {
                    return (0, error_handler_1.handleError)("Email and password are required.", 400, null);
                }
                const queryBuilder = shopRepository.createQueryBuilder("shop");
                // Fetch user from database by email
                const shop = yield queryBuilder
                    .where("shop.is_active = :isActive", { isActive: true }) // Ensure only active shops
                    .andWhere("shop.email = :email", { email })
                    .getOne();
                if (!shop) {
                    return (0, error_handler_1.handleError)("Invalid email or password", 400, null);
                }
                // Compare passwords
                const isPasswordValid = yield (0, helper_1.comparePassword)(password, (shop === null || shop === void 0 ? void 0 : shop.password) || "");
                if (!isPasswordValid) {
                    return (0, error_handler_1.handleError)("Invalid email or password.", 404, null);
                }
                // if (shop.status !== ShopStatus.ACTIVE)
                //   return handleError(
                //     "Your shop is not active now. Please contact the admin to check the details.",
                //     404,
                //     { status: shop.status }
                //   );
                // Generate JWT token
                const token = new auth_middleware_1.AuthMiddlewareService().genShopToken(shop);
                return (0, success_handler_1.handleSuccess)({ token, data: shop });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getShop(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
            try {
                const shop = yield shopRepository
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
                    return (0, error_handler_1.handleError)("Shop not found", 404, null);
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
                return (0, success_handler_1.handleSuccess)(result);
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminGetShop(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shop = yield shopRepository.findOneBy({ id, is_active: true });
                if (!shop) {
                    return (0, error_handler_1.handleError)("Shop not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(shop);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getShopInformation(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shop = yield shopRepository.findOneById(shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id);
                if (!shop) {
                    return (0, error_handler_1.handleError)("Shop not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(shop);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopForgotPassword(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, }) {
            try {
                const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
                // Check if the email exists
                const existEmail = yield shopRepository.findOneBy({ email });
                if (!existEmail) {
                    return (0, error_handler_1.handleError)("Email not found", 404, "Email not found in database");
                }
                // Generate JWT token with expiration
                // const token = new AuthMiddlewareService().genShopForgotPasswordToken(
                //   existEmail
                // );
                // // Generate a reset password link
                // const resetLink = `${config.client_url}/reset-password?token=${token}`;
                // // Send mail with reset password link
                // await this.sendResetPasswordEmail(email, resetLink);
                const otpExpires = (0, date_fns_1.addMinutes)(new Date(), 5);
                const newOTP = helpers_1.OtpService.generateOtp();
                existEmail.otp = newOTP;
                existEmail.otpExpire_at = otpExpires;
                existEmail.isVerified = false;
                const savedCustomer = yield shopRepository.save(existEmail);
                yield ShopService.sendOtpEmail(email, newOTP, savedCustomer);
                return (0, success_handler_1.handleSuccess)(null);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopResetPassword(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
            try {
                // const shopDataFromToken =
                //   new AuthMiddlewareService().verifyShopForgotPasswordToken(data.token);
                if (!data.email || !data.new_password || !data.otp) {
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                const validatePassStrong = (0, helper_1.validateStrongPassword)(data.new_password);
                if (!validatePassStrong) {
                    return (0, error_handler_1.handleError)("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.", 400, null);
                }
                const shop = yield shopRepository.findOne({
                    where: { email: data.email, is_active: true },
                });
                if (!shop) {
                    return (0, error_handler_1.handleError)("Shop not found", 404, null);
                }
                const { otp, isVerified } = shop;
                if (!isVerified) {
                    return (0, error_handler_1.handleError)("Please verify your OTP code", 404, null);
                }
                if (otp != data.otp) {
                    return (0, error_handler_1.handleError)("The OTP is invalid", 404, null);
                }
                // Hash the password
                const newPass = yield (0, helper_1.hashPassword)(data === null || data === void 0 ? void 0 : data.new_password);
                shop.isVerified = false;
                shopRepository.merge(shop, { password: newPass });
                const updatedShop = yield shopRepository.save(shop);
                return (0, success_handler_1.handleSuccess)(updatedShop);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static sendOtpEmail(email, otp, customer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(" Sending OTP email...", customer.email);
                // Create transporter
                const transporter = nodemailer.createTransport({
                    host: config_1.config.smtp.host,
                    port: config_1.config.smtp.port,
                    secure: config_1.config.smtp.secure, // true for 465 (SSL), false for 587 (TLS)
                    auth: {
                        user: config_1.config.smtp.user,
                        pass: config_1.config.smtp.pass,
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
              <p style="font-size:16px;">Hi, ${(customer === null || customer === void 0 ? void 0 : customer.fullname) ||
                    (customer === null || customer === void 0 ? void 0 : customer.username) ||
                    (customer === null || customer === void 0 ? void 0 : customer.store_name) ||
                    (customer === null || customer === void 0 ? void 0 : customer.email)}</p>
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
                    from: `"Temu" <${config_1.config.smtp.user}>`,
                    to: email,
                    subject: `${otp} is your verification code`,
                    text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
                    html: htmlContent,
                };
                // Send the email
                const info = yield transporter.sendMail(mailOptions);
                console.log("Email sent:", customer.email);
                return true;
            }
            catch (error) {
                console.error("Error sending OTP email:", error.message);
                return false;
            }
        });
    }
    static sendResetPasswordEmail(email, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Create a transporter
                const transporter = nodemailer.createTransport({
                    host: config_1.config.smtp.host,
                    port: config_1.config.smtp.port,
                    secure: config_1.config.smtp.secure, // true for 465, false for other ports
                    auth: {
                        user: config_1.config.smtp.user, // SMTP username
                        pass: config_1.config.smtp.pass, // SMTP password
                    },
                });
                // Email options
                const mailOptions = {
                    from: `"Temu" <${config_1.config.smtp.user}>`, // sender address
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
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.error("Error sending email:", error);
                    }
                    else {
                        console.log("Email sent:", info.response);
                    }
                });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    static existShopUnique(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
                const existShop = yield shopRepository
                    .createQueryBuilder("shop")
                    .where("shop.is_active = :isActive", { isActive: true })
                    .andWhere(new typeorm_1.Brackets((qb) => {
                    qb.where("shop.email = :email", { email: data === null || data === void 0 ? void 0 : data.email }).orWhere("shop.username = :username", { username: data === null || data === void 0 ? void 0 : data.username });
                }))
                    .getOne();
                if (!existShop)
                    return false; // No existing shop found
                if (!(data === null || data === void 0 ? void 0 : data.id)) {
                    // If no ID provided, check if email or username exists
                    return (existShop.email === data.email || existShop.username === data.username);
                }
                // If ID is provided, check if the found shop is different from the current one
                return existShop.id !== data.id;
            }
            catch (error) {
                console.error("Error checking shop uniqueness:", error);
                return false;
            }
        });
    }
    static shopRequestVIP(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            var _b, _c, _d, _e, _f, _g, _h, _j, _k;
            try {
                const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const id = shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id;
                if (!["1", "2", "3", "4", "5"].includes(data.request_vip)) {
                    {
                        return (0, error_handler_1.handleError)(`Not allow you apply VIP ${data.request_vip}`, 404, null);
                    }
                }
                const shop = yield shopRepository.findOneBy({
                    id: id,
                    is_active: true,
                });
                if (!shop) {
                    return (0, error_handler_1.handleError)("Shop not found", 404, null);
                }
                if (((_b = shop === null || shop === void 0 ? void 0 : shop.request_vip_data) === null || _b === void 0 ? void 0 : _b.request_vip) === data.request_vip &&
                    ((_c = shop === null || shop === void 0 ? void 0 : shop.request_vip_data) === null || _c === void 0 ? void 0 : _c.request_status) === types_1.ShopRequestStatus.APPROVED) {
                    return (0, error_handler_1.handleError)("You have already in current VIP that you will apply.", 404, null);
                }
                if (((_d = shop === null || shop === void 0 ? void 0 : shop.request_vip_data) === null || _d === void 0 ? void 0 : _d.request_status) === types_1.ShopRequestStatus.APPROVED &&
                    Number(3) === Number((_e = shop === null || shop === void 0 ? void 0 : shop.request_vip_data) === null || _e === void 0 ? void 0 : _e.request_vip)) {
                    return (0, error_handler_1.handleError)("You cannot request VIP because you are at the end of your VIP period.", 404, null);
                }
                if (((_f = shop === null || shop === void 0 ? void 0 : shop.request_vip_data) === null || _f === void 0 ? void 0 : _f.request_vip) > data.request_vip &&
                    ((_g = shop === null || shop === void 0 ? void 0 : shop.request_vip_data) === null || _g === void 0 ? void 0 : _g.request_status) === types_1.ShopRequestStatus.APPROVED) {
                    return (0, error_handler_1.handleError)("You cannot request a lower VIP level than your current VIP.", 404, null);
                }
                // vip 1: 15000, percent: 25
                // vip 2: 30000, percent: 30
                // vip 3: 45000, percent: 35
                // vip 4: 60000, percent: 40
                // vip 5: 75000, percent: 45
                const existingWallet = yield wallet_1.WalletService.getShopWallet({ req });
                const balance = data.request_vip === "1"
                    ? types_1.EShopRechargeBalance.VIP1
                    : data.request_vip === "2"
                        ? types_1.EShopRechargeBalance.VIP2
                        : data.request_vip === "3"
                            ? types_1.EShopRechargeBalance.VIP3
                            : types_1.EShopRechargeBalance.NORMOL;
                const addBalanceAmount = data.request_vip === "1"
                    ? types_1.EShopAmountBalance.VIP1
                    : data.request_vip === "2"
                        ? types_1.EShopAmountBalance.VIP2
                        : data.request_vip === "3"
                            ? types_1.EShopAmountBalance.VIP3
                            : types_1.EShopAmountBalance.NORMOL;
                const profit = data.request_vip === "1"
                    ? types_1.EProfitVIP.VIP1
                    : data.request_vip === "2"
                        ? types_1.EProfitVIP.VIP2
                        : data.request_vip === "3"
                            ? types_1.EProfitVIP.VIP3
                            : types_1.EProfitVIP.NORMOL;
                if (!existingWallet)
                    return (0, error_handler_1.handleError)("Wallet not found", 404, null);
                if ((Number((_h = existingWallet.data) === null || _h === void 0 ? void 0 : _h.total_recharged) < balance &&
                    data.request_vip === "1") ||
                    (Number((_j = existingWallet.data) === null || _j === void 0 ? void 0 : _j.total_recharged) < balance &&
                        data.request_vip === "2") ||
                    (Number((_k = existingWallet.data) === null || _k === void 0 ? void 0 : _k.total_recharged) < balance &&
                        data.request_vip === "3")) {
                    return (0, error_handler_1.handleError)(`Your balance not enough to apply VIP ${data.request_vip}`, 404, null);
                }
                const requestData = {
                    request_vip: data.request_vip,
                    profit: profit,
                    balance: balance,
                    add_balance_amount: addBalanceAmount,
                    request_status: types_1.ShopRequestStatus.PENDING,
                    requested_at: new Date(),
                };
                yield shopRepository.update({ id: id }, { request_vip_data: requestData });
                try {
                    const details = Object.assign({}, requestData);
                    const _data = {
                        title: "Request VIP",
                        description: `You have reqeusted VIP to your shop's account success.`,
                        shop_id: id,
                        reference_id: id,
                        data: details,
                        notification_type: notification_1.INotificationType.SHOP_REQUEST_VIP,
                    };
                    yield notification_1.NotificationService.createNotification({ data: _data });
                }
                catch (error) {
                    console.error("Error while create notification", { error });
                }
                return (0, success_handler_1.handleSuccess)(requestData);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static countShopRequestVIP(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            try {
                const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const total = yield shopRepository
                    .createQueryBuilder("shop")
                    .where("shop.request_vip_data IS NOT NULL AND shop.request_vip_data ->> 'request_status' = :requestStatus", {
                    requestStatus: types_1.ShopRequestStatus.PENDING,
                })
                    .getCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(null, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
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
    static adminApproveShopRequestVIP(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            var _b, _c, _d, _e, _f, _g;
            // Start a transaction
            const entityManager = (0, typeorm_1.getManager)();
            try {
                const shopRepository = (0, typeorm_1.getRepository)(entity_1.Shop);
                const walletRepository = (0, typeorm_1.getRepository)(wallet_1.Wallet);
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken) {
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                // Find the shop within the transaction
                const shop = yield shopRepository
                    .createQueryBuilder("shop")
                    .where("shop.is_active = :isActive", { isActive: true })
                    .andWhere("(shop.request_vip_data IS NOT NULL AND shop.request_vip_data ->> 'request_status' = :requestStatus)", { requestStatus: types_1.ShopRequestStatus.PENDING })
                    .andWhere("shop.id = :shopId", { shopId: id })
                    .getOne();
                if (!shop) {
                    return (0, error_handler_1.handleError)("Shop not found", 404, null);
                }
                const existingWallet = yield wallet_1.WalletService.adminGetWallet({
                    id: id,
                    req,
                });
                const balance = (shop === null || shop === void 0 ? void 0 : shop.request_vip_data.balance) || 15000;
                const addBalanceAmount = (shop === null || shop === void 0 ? void 0 : shop.request_vip_data.add_balance_amount) || 1500;
                const profit = shop === null || shop === void 0 ? void 0 : shop.request_vip_data.profit;
                if (!existingWallet) {
                    return (0, error_handler_1.handleError)("Wallet not found", 404, null);
                }
                if ((Number((_b = existingWallet.data) === null || _b === void 0 ? void 0 : _b.total_recharged) < balance &&
                    (shop === null || shop === void 0 ? void 0 : shop.request_vip_data.request_vip) === "1") ||
                    (Number((_c = existingWallet.data) === null || _c === void 0 ? void 0 : _c.total_recharged) < balance &&
                        (shop === null || shop === void 0 ? void 0 : shop.request_vip_data.request_vip) === "2") ||
                    (Number((_d = existingWallet.data) === null || _d === void 0 ? void 0 : _d.total_recharged) < balance &&
                        (shop === null || shop === void 0 ? void 0 : shop.request_vip_data.request_vip) === "3") ||
                    (Number((_e = existingWallet.data) === null || _e === void 0 ? void 0 : _e.total_recharged) < balance &&
                        (shop === null || shop === void 0 ? void 0 : shop.request_vip_data.request_vip) === "4") ||
                    (Number((_f = existingWallet.data) === null || _f === void 0 ? void 0 : _f.total_recharged) < balance &&
                        (shop === null || shop === void 0 ? void 0 : shop.request_vip_data.request_vip) === "5")) {
                    return (0, error_handler_1.handleError)(`Shop's balance not enough to apply VIP ${(_g = shop === null || shop === void 0 ? void 0 : shop.request_vip_data) === null || _g === void 0 ? void 0 : _g.request_vip}`, 404, null);
                }
                // Start the transaction
                yield entityManager.transaction((transactionalEntityManager) => __awaiter(this, void 0, void 0, function* () {
                    const requestData = Object.assign(Object.assign({}, shop.request_vip_data), { request_status: types_1.ShopRequestStatus.APPROVED });
                    // Update the shop within the transaction
                    yield transactionalEntityManager.update(entity_1.Shop, { id: id }, {
                        request_vip_data: requestData,
                        shop_vip: Number(shop.request_vip_data.request_vip),
                        profit: Number(profit),
                    });
                    // Update the wallet within the transaction
                    yield transactionalEntityManager
                        .createQueryBuilder()
                        .update(wallet_1.Wallet)
                        .set({
                        total_balance: () => "total_balance + :total_balance",
                        total_withdraw_able_balance: () => "total_withdraw_able_balance + :total_withdraw_able_balance",
                    })
                        .where("shop_id = :shop_id", {
                        shop_id: shop.id,
                    })
                        .setParameters({
                        total_balance: Number(addBalanceAmount),
                        total_withdraw_able_balance: Number(addBalanceAmount),
                    })
                        .execute();
                }));
                // If everything succeeds, commit the transaction
                return (0, success_handler_1.handleSuccess)(shop.request_vip_data);
            }
            catch (error) {
                console.log({ error });
                // If any error occurs, the transaction will be rolled back automatically
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
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
exports.ShopService = ShopService;

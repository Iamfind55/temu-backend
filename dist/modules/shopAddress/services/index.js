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
exports.ShopAddressService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const baseType_1 = require("../../../utils/base/baseType");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const helper_1 = require("../../../data/helper");
class ShopAddressService {
    static createShopAddress(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopAddressRepository = (0, typeorm_1.getRepository)(entity_1.ShopAddress);
            try {
                let shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                let newShopAddress = null;
                if (!shopDataFromToken || (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) !== "SHOP") {
                    shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                    if (!shopDataFromToken)
                        return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, shopDataFromToken);
                    newShopAddress = shopAddressRepository.create(Object.assign(Object.assign({}, data), { created_by: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id, customer_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id }));
                }
                else {
                    newShopAddress = shopAddressRepository.create(Object.assign(Object.assign({}, data), { created_by: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id, shop_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id }));
                }
                const savedShopAddress = yield shopAddressRepository.save(newShopAddress);
                return (0, success_handler_1.handleSuccess)(savedShopAddress);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateShopAddress(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopAddressRepository = (0, typeorm_1.getRepository)(entity_1.ShopAddress);
            try {
                // Verify the token
                let shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken || (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) !== "SHOP") {
                    shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                    if (!shopDataFromToken) {
                        return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, shopDataFromToken);
                    }
                }
                const userIdField = (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) === "SHOP" ? "shop_id" : "customer_id";
                const userId = shopDataFromToken.id;
                // Query to find the specific shop address
                const shopAddress = yield shopAddressRepository
                    .createQueryBuilder("shopAddress")
                    .where(`shopAddress.${userIdField} = :userId`, { userId })
                    .andWhere("shopAddress.id = :id", { id: data.id })
                    .getOne();
                if (!shopAddress) {
                    return (0, error_handler_1.handleError)("Address not found", 404, null);
                }
                shopAddress.updated_by = shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id;
                shopAddressRepository.merge(shopAddress, data);
                const updatedShopAddress = yield shopAddressRepository.save(shopAddress);
                return (0, success_handler_1.handleSuccess)(updatedShopAddress);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static deleteShopAddress(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const shopAddressRepository = (0, typeorm_1.getRepository)(entity_1.ShopAddress);
            try {
                // Verify the token
                let shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken || (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) !== "SHOP") {
                    shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                    if (!shopDataFromToken) {
                        return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, shopDataFromToken);
                    }
                }
                const userIdField = (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) === "SHOP" ? "shop_id" : "customer_id";
                const userId = shopDataFromToken.id;
                // Query to find the specific shop address
                const shopAddress = yield shopAddressRepository
                    .createQueryBuilder("shopAddress")
                    .where(`shopAddress.${userIdField} = :userId`, { userId })
                    .andWhere("shopAddress.id = :id", { id })
                    .getOne();
                console.log({ shopAddress });
                if (!shopAddress) {
                    return (0, error_handler_1.handleError)("Address not found", 404, null);
                }
                yield shopAddressRepository.remove(shopAddress);
                return (0, success_handler_1.handleSuccess)(shopAddress);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getShopAddresses(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }) {
            var _b, _c, _d;
            const shopAddressRepository = (0, typeorm_1.getRepository)(entity_1.ShopAddress);
            try {
                const order = this.order(sortedBy);
                const queryBuilder = shopAddressRepository
                    .createQueryBuilder("shopAddress")
                    .where("shopAddress.is_active", { is_active: true });
                if (where === null || where === void 0 ? void 0 : where.customer_id) {
                    queryBuilder.andWhere("shopAddress.customer_id = :customer_id", {
                        customer_id: where === null || where === void 0 ? void 0 : where.customer_id,
                    });
                }
                else {
                    queryBuilder.andWhere("shopAddress.shop_id = :shop_id", {
                        shop_id: where === null || where === void 0 ? void 0 : where.shop_id,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("shopAddress.country -> 'country' ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        })
                            .orWhere("shopAddress.state -> 'state' ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        })
                            .orWhere("shopAddress.city -> 'city' ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        })
                            .orWhere("shopAddress.email LIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        })
                            .orWhere("shopAddress.post_code LIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        })
                            .orWhere("shopAddress.phone_number = :keyword", {
                            keyword: `%${where.keyword}%`,
                        });
                    }));
                }
                if (where === null || where === void 0 ? void 0 : where.status) {
                    queryBuilder.andWhere("shopAddress.status = :status", {
                        status: where.status,
                    });
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(shopAddress.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: (_d = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _d === void 0 ? void 0 : _d.endDate,
                    });
                }
                // Pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                const [shopAddresss, total] = yield queryBuilder.getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(shopAddresss, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getShopAddress(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, }) {
            const shopAddressRepository = (0, typeorm_1.getRepository)(entity_1.ShopAddress);
            try {
                const shopSocila = yield shopAddressRepository.findOneById(id);
                if (!shopSocila) {
                    return (0, error_handler_1.handleError)("Address not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(shopSocila);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = (0, helper_1.loadAddressData)();
                // Return only country-level information
                const countries = data.map((country) => {
                    var _a;
                    const isState = (_a = country === null || country === void 0 ? void 0 : country.states) === null || _a === void 0 ? void 0 : _a.length;
                    return {
                        id: country.id,
                        country: country.country,
                        cn_country: country.cn_country,
                        isState: isState || false,
                    };
                });
                return (0, success_handler_1.handleSuccessWithTotalData)(countries, data.length);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getStates(_a) {
        return __awaiter(this, arguments, void 0, function* ({ countryId, }) {
            var _b;
            try {
                const data = (0, helper_1.loadAddressData)();
                // Return only country-level information
                const country = data.find((item) => item.id == countryId);
                if (!((_b = country === null || country === void 0 ? void 0 : country.states) === null || _b === void 0 ? void 0 : _b.length)) {
                    return (0, success_handler_1.handleSuccessWithTotalData)(null, 0);
                }
                return (0, success_handler_1.handleSuccessWithTotalData)(country === null || country === void 0 ? void 0 : country.states, country === null || country === void 0 ? void 0 : country.states.length);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getCities(_a) {
        return __awaiter(this, arguments, void 0, function* ({ countryId, stateId, }) {
            var _b, _c;
            try {
                const data = (0, helper_1.loadAddressData)();
                const country = data.find((item) => item.id == countryId);
                // If stateId is provided, find cities in that state
                if (stateId) {
                    const state = (_b = country === null || country === void 0 ? void 0 : country.states) === null || _b === void 0 ? void 0 : _b.find((s) => s.id == stateId);
                    if (!((_c = state === null || state === void 0 ? void 0 : state.cities) === null || _c === void 0 ? void 0 : _c.length)) {
                        // Otherwise, return country-level cities
                        return (0, success_handler_1.handleSuccessWithTotalData)(country === null || country === void 0 ? void 0 : country.cities, country === null || country === void 0 ? void 0 : country.cities.length);
                    }
                    return (0, success_handler_1.handleSuccessWithTotalData)(state === null || state === void 0 ? void 0 : state.cities, state === null || state === void 0 ? void 0 : state.cities.length);
                }
                // Otherwise, return country-level cities
                return (0, success_handler_1.handleSuccessWithTotalData)(country === null || country === void 0 ? void 0 : country.cities, country === null || country === void 0 ? void 0 : country.cities.length);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static setShopAddressDefaultToUse(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const shopAddressRepository = (0, typeorm_1.getRepository)(entity_1.ShopAddress);
            try {
                // Verify the token
                let shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken || (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) !== "SHOP") {
                    shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                    if (!shopDataFromToken) {
                        return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, shopDataFromToken);
                    }
                }
                const userIdField = (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) === "SHOP" ? "shop_id" : "customer_id";
                const userId = shopDataFromToken.id;
                // Query to find the specific shop address
                const shopAddress = yield shopAddressRepository
                    .createQueryBuilder("shopAddress")
                    .where(`shopAddress.${userIdField} = :userId`, { userId })
                    .andWhere("shopAddress.id = :id", { id })
                    .getOne();
                if (!shopAddress) {
                    return (0, error_handler_1.handleError)("Address not found", 404, null);
                }
                // Update `updated_by` field
                shopAddress.updated_by = shopDataFromToken.id;
                // Set all shop addresses `is_used` to false for the specific user ID
                yield shopAddressRepository
                    .createQueryBuilder()
                    .update(entity_1.ShopAddress)
                    .set({ is_used: false })
                    .where(`${userIdField} = :userId`, { userId })
                    .execute();
                // Mark the selected address as the default (`is_used = true`)
                shopAddress.is_used = true;
                const updatedShopAddress = yield shopAddressRepository.save(shopAddress);
                return (0, success_handler_1.handleSuccess)(updatedShopAddress);
            }
            catch (error) {
                console.error("Error setting default shop address:", error.message);
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
exports.ShopAddressService = ShopAddressService;

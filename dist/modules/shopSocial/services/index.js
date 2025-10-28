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
exports.ShopSocialService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const baseType_1 = require("../../../utils/base/baseType");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
class ShopSocialService {
    static createShopSocial(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopSocialRepository = (0, typeorm_1.getRepository)(entity_1.ShopSocial);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                if (!data.link) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                const newShopSocial = shopSocialRepository.create(Object.assign(Object.assign({}, data), { created_by: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id, shop_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id }));
                const savedShopSocial = yield shopSocialRepository.save(newShopSocial);
                return (0, success_handler_1.handleSuccess)(savedShopSocial);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateShopSocial(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopSocialRepository = (0, typeorm_1.getRepository)(entity_1.ShopSocial);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopSocial = yield shopSocialRepository.findOne({
                    where: { id: data.id, shop_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id },
                });
                if (!shopSocial) {
                    return (0, error_handler_1.handleError)("Link not found", 404, null);
                }
                shopSocial.updated_by = shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id;
                shopSocialRepository.merge(shopSocial, data);
                const updatedShopSocial = yield shopSocialRepository.save(shopSocial);
                return (0, success_handler_1.handleSuccess)(updatedShopSocial);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static deleteShopSocial(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const shopSocialRepository = (0, typeorm_1.getRepository)(entity_1.ShopSocial);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopSocial = yield shopSocialRepository.findOne({
                    where: { id: id, shop_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id },
                });
                if (!shopSocial) {
                    return (0, error_handler_1.handleError)("Link not found", 404, null);
                }
                yield shopSocialRepository.remove(shopSocial);
                return (0, success_handler_1.handleSuccess)(shopSocial);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getShopSocials(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, }) {
            var _b, _c, _d;
            const shopSocialRepository = (0, typeorm_1.getRepository)(entity_1.ShopSocial);
            try {
                const order = this.order(sortedBy);
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                const queryBuilder = shopSocialRepository.createQueryBuilder("shopSocial");
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.where(new typeorm_1.Brackets((qb) => {
                        qb.where("shopSocial.name ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        }).orWhere("shopSocial.link ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        });
                    }));
                }
                if (where === null || where === void 0 ? void 0 : where.status) {
                    queryBuilder.andWhere("shopSocial.status = :status", {
                        status: where.status,
                    });
                }
                if (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id) {
                    queryBuilder.andWhere("shopSocial.shop_id = :shopId", {
                        shopId: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id,
                    });
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(shopSocial.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: (_d = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _d === void 0 ? void 0 : _d.endDate,
                    });
                }
                // Pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                const [shopSocials, total] = yield queryBuilder.getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(shopSocials, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getShopSocial(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, }) {
            const shopSocialRepository = (0, typeorm_1.getRepository)(entity_1.ShopSocial);
            try {
                const shopSocila = yield shopSocialRepository.findOneById(id);
                if (!shopSocila) {
                    return (0, error_handler_1.handleError)("Link not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(shopSocila);
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
exports.ShopSocialService = ShopSocialService;

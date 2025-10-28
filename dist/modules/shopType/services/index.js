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
exports.ShopTypeService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const baseType_1 = require("../../../utils/base/baseType");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
class ShopTypeService {
    static createShopType(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopTypeRepository = (0, typeorm_1.getRepository)(entity_1.ShopType);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                if (!data.name || !data.image) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                const newShopType = shopTypeRepository.create({
                    name: data.name,
                    image: data.image,
                    status: data.status || baseType_1.BaseStatus.ACTIVE,
                    created_by: staffDataFromToken === null || staffDataFromToken === void 0 ? void 0 : staffDataFromToken.id,
                });
                const savedShopType = yield shopTypeRepository.save(newShopType);
                return (0, success_handler_1.handleSuccess)(savedShopType);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateShopType(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopTypeRepository = (0, typeorm_1.getRepository)(entity_1.ShopType);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopType = yield shopTypeRepository.findOneById(data.id);
                if (!shopType) {
                    return (0, error_handler_1.handleError)("Shop type not found", 404, null);
                }
                shopType.updated_by = staffDataFromToken === null || staffDataFromToken === void 0 ? void 0 : staffDataFromToken.id;
                shopTypeRepository.merge(shopType, data);
                const updatedShopType = yield shopTypeRepository.save(shopType);
                return (0, success_handler_1.handleSuccess)(updatedShopType);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static deleteShopType(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const shopTypeRepository = (0, typeorm_1.getRepository)(entity_1.ShopType);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopType = yield shopTypeRepository.findOneById(id);
                if (!shopType) {
                    return (0, error_handler_1.handleError)("Shop type not found", 404, null);
                }
                yield shopTypeRepository.remove(shopType);
                return (0, success_handler_1.handleSuccess)(shopType);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getShopTypes(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }) {
            var _b, _c, _d;
            const shopTypeRepository = (0, typeorm_1.getRepository)(entity_1.ShopType);
            try {
                const order = this.order(sortedBy);
                const queryBuilder = shopTypeRepository
                    .createQueryBuilder("shopType")
                    .where({ is_active: true });
                if (where === null || where === void 0 ? void 0 : where.name) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("shopType.name ILIKE :name", {
                            name: `%${where.name}%`,
                        });
                    }));
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(shopType.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: (_d = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _d === void 0 ? void 0 : _d.endDate,
                    });
                }
                // Pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                const [shopTypes, total] = yield queryBuilder.getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(shopTypes, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getShopType(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, }) {
            const shopTypeRepository = (0, typeorm_1.getRepository)(entity_1.ShopType);
            try {
                const shopType = yield shopTypeRepository.findOneById(id);
                if (!shopType) {
                    return (0, error_handler_1.handleError)("Shop type not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(shopType);
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
exports.ShopTypeService = ShopTypeService;

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
exports.BrandingService = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../../../config");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const baseType_1 = require("../../../utils/base/baseType");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const entity_1 = require("../entity");
class BrandingService {
    static createBranding(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const brandingRepository = (0, typeorm_1.getRepository)(entity_1.Branding);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                if (!(data === null || data === void 0 ? void 0 : data.name)) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                // Check if brand with the same name already exists
                const existingBrand = yield brandingRepository
                    .createQueryBuilder("branding")
                    .andWhere("branding.is_active = :isActive", { isActive: true })
                    .andWhere("branding.name = :name", { name: data.name })
                    .getOne();
                if (existingBrand) {
                    return (0, error_handler_1.handleError)("Brand with the same name already exists", 400, null);
                }
                const newBranding = brandingRepository.create(Object.assign(Object.assign({}, data), { created_by: staffDataFromToken === null || staffDataFromToken === void 0 ? void 0 : staffDataFromToken.id }));
                const savedBranding = yield brandingRepository.save(newBranding);
                return (0, success_handler_1.handleSuccess)(savedBranding);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateBranding(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const brandingRepository = (0, typeorm_1.getRepository)(entity_1.Branding);
            console.log(req.headers);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                console.log(staffDataFromToken);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const branding = yield brandingRepository.findOneById(data.id);
                if (!branding) {
                    return (0, error_handler_1.handleError)("Branding not found", 404, null);
                }
                // Check if another brand already has the same name
                if (data.name) {
                    // Check if another brand has the same name_en (or another relevant language field)
                    const existingBranding = yield brandingRepository
                        .createQueryBuilder("branding")
                        .where("branding.id != :id", { id: data.id })
                        .andWhere("branding.is_active = :isActive", { isActive: true })
                        .andWhere("branding.name = :name", {
                        name: data.name,
                    })
                        .getOne();
                    if (existingBranding) {
                        return (0, error_handler_1.handleError)("Brand with the same name already exists", 400, null);
                    }
                }
                branding.updated_by = staffDataFromToken === null || staffDataFromToken === void 0 ? void 0 : staffDataFromToken.id;
                brandingRepository.merge(branding, data);
                const updatedBranding = yield brandingRepository.save(branding);
                return (0, success_handler_1.handleSuccess)(updatedBranding);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static deleteBranding(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const brandingRepository = (0, typeorm_1.getRepository)(entity_1.Branding);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const branding = yield brandingRepository.findOneById(id);
                if (!branding) {
                    return (0, error_handler_1.handleError)("Branding not found", 404, null);
                }
                // await brandingRepository.remove(branding);
                brandingRepository.merge(branding, { is_active: false });
                yield brandingRepository.save(branding);
                return (0, success_handler_1.handleSuccess)(branding);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getBrandings(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }) {
            var _b, _c, _d;
            const brandingRepository = (0, typeorm_1.getRepository)(entity_1.Branding);
            try {
                const order = this.order(sortedBy);
                const queryBuilder = brandingRepository
                    .createQueryBuilder("branding")
                    .where({ is_active: true });
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("branding.name ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        });
                    }));
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(branding.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: (_d = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _d === void 0 ? void 0 : _d.endDate,
                    });
                }
                // Pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                const [brandings, total] = yield queryBuilder.getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(brandings, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getBranding(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, }) {
            const brandingRepository = (0, typeorm_1.getRepository)(entity_1.Branding);
            try {
                const branding = yield brandingRepository.findOne({
                    where: { id, is_active: true },
                });
                if (!branding) {
                    return (0, error_handler_1.handleError)("Branding not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(branding);
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
exports.BrandingService = BrandingService;

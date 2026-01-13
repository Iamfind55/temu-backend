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
exports.LogisticsService = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../../../config");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const entity_1 = require("../entity");
class LogisticsService {
    static create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const logisticRepository = (0, typeorm_1.getRepository)(entity_1.Logistics);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken) {
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                if (!data.company_name) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                // Check if logistics with the same name already exists
                const existing = yield logisticRepository.findOne({
                    where: { company_name: data.company_name, is_active: true },
                });
                if (existing) {
                    return (0, error_handler_1.handleError)("Logistics already exists", 400, "Error");
                }
                const newLogistic = logisticRepository.create(Object.assign(Object.assign({}, data), { created_by: staffDataFromToken.id }));
                const savedLogistic = yield logisticRepository.save(newLogistic);
                return (0, success_handler_1.handleSuccess)(savedLogistic);
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static update(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, data, req, }) {
            const logisticRepository = (0, typeorm_1.getRepository)(entity_1.Logistics);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                if (!id) {
                    return (0, error_handler_1.handleError)("Logistic ID required", 404, null);
                }
                const logistic = yield logisticRepository.findOne({
                    where: { id: id },
                });
                if (!logistic) {
                    return (0, error_handler_1.handleError)("Logistic not found", 404, null);
                }
                // Check if another logistic already has the same name
                if (data.company_name) {
                    // Check if another catelogisticgory has the same name_en (or another relevant language field)
                    const existing = yield logisticRepository.findOne({
                        where: { company_name: data.company_name, is_active: true },
                    });
                    if (existing) {
                        return (0, error_handler_1.handleError)("Logistics with the same name already exists", 400, null);
                    }
                }
                logistic.updated_by = staffDataFromToken.id;
                logisticRepository.merge(logistic, data);
                const updatedlogistic = yield logisticRepository.save(logistic);
                return (0, success_handler_1.handleSuccess)(updatedlogistic);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static delete(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const logisticRepository = (0, typeorm_1.getRepository)(entity_1.Logistics);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const logistic = yield logisticRepository.findOne({
                    where: { id: id },
                });
                if (!logistic) {
                    return (0, error_handler_1.handleError)("logistic not found", 404, null);
                }
                // Soft delete: set is_active to false instead of removing
                logisticRepository.merge(logistic, { is_active: false });
                yield logisticRepository.save(logistic);
                return (0, success_handler_1.handleSuccess)(logistic);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static findAll(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }) {
            const logisticRepository = (0, typeorm_1.getRepository)(entity_1.Logistics);
            try {
                const query = logisticRepository
                    .createQueryBuilder("logistics")
                    .where("logistics.is_active = :isActive", { isActive: true });
                // Filtering
                if (where) {
                    if (where.keyword) {
                        query.andWhere("logistics.company_name ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        });
                    }
                    if (where.status) {
                        query.andWhere("logistics.status = :status", {
                            status: where.status,
                        });
                    }
                    if (where.id) {
                        query.andWhere("logistics.id = :id", { id: where.id });
                    }
                }
                // Sorting
                if (sortedBy) {
                    const lastUnderscore = sortedBy.lastIndexOf("_");
                    const field = sortedBy.substring(0, lastUnderscore);
                    const rawOrder = sortedBy.substring(lastUnderscore + 1);
                    const order = rawOrder.toUpperCase() === "DESC" ? "DESC" : "ASC";
                    if (field) {
                        query.orderBy(`logistics.${field}`, order);
                    }
                }
                else {
                    query.orderBy("logistics.created_at", "DESC");
                }
                // Pagination
                const [items, total] = yield query
                    .skip((page - 1) * limit)
                    .take(limit)
                    .getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(items, total);
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static findOne(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, }) {
            const logisticRepository = (0, typeorm_1.getRepository)(entity_1.Logistics);
            try {
                const logistic = yield logisticRepository.findOne({
                    where: { id, is_active: true },
                });
                if (!logistic) {
                    return (0, error_handler_1.handleError)("Logistics not found", 404);
                }
                return (0, success_handler_1.handleSuccess)(logistic);
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
}
exports.LogisticsService = LogisticsService;

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
exports.StaffService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const baseType_1 = require("../../../utils/base/baseType");
const helper_1 = require("../../../utils/helper");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const graphqlUtils_1 = require("../../../utils/graphqlUtils");
class StaffService {
    static createStaff(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const staffRepository = (0, typeorm_1.getRepository)(entity_1.Staff);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                // Validation
                if (!(data === null || data === void 0 ? void 0 : data.username) || !(data === null || data === void 0 ? void 0 : data.password)) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                const existStaff = yield staffRepository.findOne({
                    where: { username: data === null || data === void 0 ? void 0 : data.username, is_active: true },
                });
                if (existStaff) {
                    return (0, error_handler_1.handleError)(config_1.config.message.username_already_exist, 404, null);
                }
                // Hash the password
                if (data === null || data === void 0 ? void 0 : data.password)
                    data.password = yield (0, helper_1.hashPassword)(data === null || data === void 0 ? void 0 : data.password);
                data.created_by = staffDataFromToken === null || staffDataFromToken === void 0 ? void 0 : staffDataFromToken.id;
                // Create and save staff
                const newStaff = staffRepository.create(data);
                const savedStaff = yield staffRepository.save(newStaff);
                return (0, success_handler_1.handleSuccess)(savedStaff);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateStaff(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const staffRepository = (0, typeorm_1.getRepository)(entity_1.Staff);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const staff = yield staffRepository.findOne({
                    where: { id: data.id, is_active: true },
                });
                if (!staff) {
                    return (0, error_handler_1.handleError)("Staff not found", 404, null);
                }
                const existStaff = yield staffRepository.findOne({
                    where: {
                        username: data === null || data === void 0 ? void 0 : data.username,
                        is_active: true,
                        id: (0, typeorm_1.Not)(data === null || data === void 0 ? void 0 : data.id),
                    },
                });
                if (existStaff) {
                    return (0, error_handler_1.handleError)(config_1.config.message.username_already_exist, 404, null);
                }
                // Hash the password
                if (data === null || data === void 0 ? void 0 : data.password)
                    data.password = yield (0, helper_1.hashPassword)(data === null || data === void 0 ? void 0 : data.password);
                staffRepository.merge(staff, data);
                const updatedStaff = yield staffRepository.save(staff);
                return (0, success_handler_1.handleSuccess)(updatedStaff);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static deleteStaff(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const staffRepository = (0, typeorm_1.getRepository)(entity_1.Staff);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const staff = yield staffRepository.findOne({
                    where: { id, is_active: true },
                });
                if (!staff) {
                    return (0, error_handler_1.handleError)("Staff not found", 404, null);
                }
                staffRepository.merge(staff, { is_active: false });
                yield staffRepository.save(staff);
                // await staffRepository.remove(staff);
                return (0, success_handler_1.handleSuccess)(staff);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getStaffs(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, }, info) {
            var _b, _c, _d;
            const staffRepository = (0, typeorm_1.getRepository)(entity_1.Staff);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const order = this.order(sortedBy);
                const queryBuilder = staffRepository
                    .createQueryBuilder("staff")
                    .where("staff.is_active = :isActive", { isActive: true });
                // Apply field selection
                // Extract requested fields dynamically
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getProducts.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields.map((field) => `staff.${field}`);
                    queryBuilder.select(fields);
                }
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("staff.firstName ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        })
                            .orWhere("staff.lastName ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        })
                            .orWhere("staff.username ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        })
                            .orWhere("staff.email ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        });
                    }));
                }
                if (where === null || where === void 0 ? void 0 : where.status) {
                    queryBuilder.andWhere("staff.status = :status", {
                        status: where.status,
                    });
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(staff.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: (_d = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _d === void 0 ? void 0 : _d.endDate,
                    });
                }
                // Pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                const [staffs, total] = yield queryBuilder.getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(staffs, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static staffLogin(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, }) {
            const staffRepository = (0, typeorm_1.getRepository)(entity_1.Staff);
            try {
                const { username, password } = where;
                // Validate input
                if (!username || !password) {
                    return (0, error_handler_1.handleError)("Username and password are required.", 400, null);
                }
                // Fetch user from database
                const staff = yield staffRepository.findOne({
                    where: { username, is_active: true },
                });
                if (!staff) {
                    return (0, error_handler_1.handleError)("Invalid username or password.", 404, null);
                }
                // Compare passwords
                const isPasswordValid = yield (0, helper_1.comparePassword)(password, staff === null || staff === void 0 ? void 0 : staff.password);
                if (!isPasswordValid) {
                    return (0, error_handler_1.handleError)("Invalid username or password.", 404, null);
                }
                // Generate JWT token
                const token = new auth_middleware_1.AuthMiddlewareService().genStaffToken(staff);
                return (0, success_handler_1.handleSuccess)({ token, data: staff });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getStaff(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const staffRepository = (0, typeorm_1.getRepository)(entity_1.Staff);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const staff = yield staffRepository.findOne({
                    where: { id, is_active: true },
                });
                if (!staff) {
                    return (0, error_handler_1.handleError)("Staff not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(staff);
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
exports.StaffService = StaffService;

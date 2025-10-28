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
exports.AttributeService = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../../../config");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const entity_1 = require("../../attributeValue/entity");
const entity_2 = require("../entity");
class AttributeService {
    static create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const attributeRepository = (0, typeorm_1.getRepository)(entity_2.Attribute);
            const attributeValueRepository = (0, typeorm_1.getRepository)(entity_1.AttributeValue);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken) {
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                if (!data.name) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                // Create Attribute
                const attribute = new entity_2.Attribute();
                attribute.name = data.name;
                attribute.description = data.description;
                yield attributeRepository.save(attribute);
                // Create Attribute Values if provided
                if (data.values && data.values.length > 0) {
                    for (const val of data.values) {
                        const attributeValue = new entity_1.AttributeValue();
                        attributeValue.value = val;
                        attributeValue.attribute = attribute;
                        yield attributeValueRepository.save(attributeValue);
                    }
                }
                return (0, success_handler_1.handleSuccess)(attribute);
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static update(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, data, req, }) {
            var _b;
            const attributeRepository = (0, typeorm_1.getRepository)(entity_2.Attribute);
            const attributeValueRepository = (0, typeorm_1.getRepository)(entity_1.AttributeValue);
            try {
                // Verify staff token
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken) {
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                // Find existing attribute
                const attribute = yield attributeRepository.findOne({
                    where: { id },
                    relations: ["values"],
                });
                if (!attribute) {
                    return (0, error_handler_1.handleError)("Attribute not found", 404, null);
                }
                console.log(attribute);
                // Update attribute fields
                if (data.name)
                    attribute.name = data.name;
                attribute.description = (_b = data.description) !== null && _b !== void 0 ? _b : undefined;
                yield attributeRepository.save(attribute);
                // Update AttributeValues if provided
                if (data.values) {
                    const existingValues = attribute.values.map((v) => v.value);
                    const toDelete = attribute.values.filter((v) => !data.values.includes(v.value));
                    if (toDelete.length > 0) {
                        yield attributeValueRepository.remove(toDelete);
                    }
                    // Add new values that don’t exist yet
                    const toAdd = data.values.filter((val) => !existingValues.includes(val));
                    const newValues = [];
                    for (const val of toAdd) {
                        const attributeValue = new entity_1.AttributeValue();
                        attributeValue.value = val;
                        attributeValue.attribute = attribute;
                        newValues.push(attributeValue);
                    }
                    if (newValues.length > 0) {
                        yield attributeValueRepository.save(newValues);
                    }
                }
                return (0, success_handler_1.handleSuccess)(attribute);
            }
            catch (error) {
                console.error(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static delete(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const attributeRepository = (0, typeorm_1.getRepository)(entity_2.Attribute);
            const attributeValueRepository = (0, typeorm_1.getRepository)(entity_1.AttributeValue);
            try {
                // Verify staff token
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken) {
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                // Find the attribute with its values
                const attribute = yield attributeRepository.findOne({
                    where: { id },
                    relations: ["values"],
                });
                if (!attribute) {
                    return (0, error_handler_1.handleError)("Attribute not found", 404, null);
                }
                // Delete related AttributeValues first (if cascade is not enabled)
                if (attribute.values && attribute.values.length > 0) {
                    yield attributeValueRepository.remove(attribute.values);
                }
                // Delete the Attribute
                yield attributeRepository.remove(attribute);
                return (0, success_handler_1.handleSuccess)(null, "Attribute deleted successfully");
            }
            catch (error) {
                console.error(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static findAll(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }) {
            const attributeRepository = (0, typeorm_1.getRepository)(entity_2.Attribute);
            const attributeValueRepository = (0, typeorm_1.getRepository)(entity_1.AttributeValue);
            try {
                const queryBuilder = attributeRepository
                    .createQueryBuilder("attribute")
                    .leftJoinAndSelect("attribute.values", "attributeValue");
                // Filtering
                if (where) {
                    if (where.keyword) {
                        queryBuilder.andWhere("attribute.name ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        });
                    }
                    if (where.id) {
                        queryBuilder.andWhere("attribute.id = :id", { id: where.id });
                    }
                }
                // Sorting
                if (sortedBy) {
                    const lastUnderscore = sortedBy.lastIndexOf("_");
                    const field = sortedBy.substring(0, lastUnderscore);
                    const rawOrder = sortedBy.substring(lastUnderscore + 1);
                    const order = rawOrder.toUpperCase() === "DESC" ? "DESC" : "ASC";
                    if (field) {
                        queryBuilder.orderBy(`attribute.${field}`, order);
                    }
                }
                else {
                    queryBuilder.orderBy("attribute.created_at", "DESC");
                }
                // Pagination
                const [items, total] = yield queryBuilder
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
            const attributeRepository = (0, typeorm_1.getRepository)(entity_2.Attribute);
            try {
                const attribute = yield attributeRepository.findOne({
                    where: { id, is_active: true },
                    relations: ["values"],
                });
                if (!attribute) {
                    return (0, error_handler_1.handleError)("Attribute not found", 404);
                }
                return (0, success_handler_1.handleSuccess)(attribute);
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
}
exports.AttributeService = AttributeService;

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
exports.CategoryService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const baseType_1 = require("../../../utils/base/baseType");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const graphqlUtils_1 = require("../../../utils/graphqlUtils");
const categoryAttribute_1 = require("../../categoryAttribute");
class CategoryService {
    // User only clone data from dhlshopping api
    static createLoopCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = {
                method: "POST",
                redirect: "follow",
            };
            try {
                const response = yield fetch("https://dhlshopping.com/api/customer/index/get-all-category", requestOptions);
                const result = yield response.json();
                if (result.code !== 200 || !(result === null || result === void 0 ? void 0 : result.data)) {
                    console.error("Unexpected response:", result);
                    return;
                }
                // Helper function to map category data
                const mapCategoryData = (category, parentId = null) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h;
                    return ({
                        image: category.image
                            ? `https://227_cdn.pionexprocoin.cc${category.image}`
                            : "",
                        name: {
                            name_vi: ((_a = category === null || category === void 0 ? void 0 : category.name) === null || _a === void 0 ? void 0 : _a.name_vi) || "",
                            name_en: ((_b = category === null || category === void 0 ? void 0 : category.name) === null || _b === void 0 ? void 0 : _b.name_en) || "",
                            name_ms: ((_c = category === null || category === void 0 ? void 0 : category.name) === null || _c === void 0 ? void 0 : _c.name_ms) || "",
                            name_th: ((_d = category === null || category === void 0 ? void 0 : category.name) === null || _d === void 0 ? void 0 : _d.name_th) || "",
                            name_es: ((_e = category === null || category === void 0 ? void 0 : category.name) === null || _e === void 0 ? void 0 : _e.name_es) || "",
                            name_jp: ((_f = category === null || category === void 0 ? void 0 : category.name) === null || _f === void 0 ? void 0 : _f.name_jp) || "",
                            name_zh: ((_g = category === null || category === void 0 ? void 0 : category.name) === null || _g === void 0 ? void 0 : _g.name_zh) || "",
                            name_zh_tw: ((_h = category === null || category === void 0 ? void 0 : category.name) === null || _h === void 0 ? void 0 : _h["name_zh-tw"]) || "",
                        },
                        parent_id: parentId,
                    });
                };
                // Recursive function to create categories
                const processCategory = (category_1, ...args_1) => __awaiter(this, [category_1, ...args_1], void 0, function* (category, parentId = null) {
                    var _a, _b, _c;
                    const data = mapCategoryData(category, parentId);
                    const parentCategory = yield this.createCategory({ data });
                    console.log("Created category:", (_a = parentCategory === null || parentCategory === void 0 ? void 0 : parentCategory.data) === null || _a === void 0 ? void 0 : _a.id);
                    if (((_b = category === null || category === void 0 ? void 0 : category.child) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                        for (const childCategory of category.child) {
                            yield processCategory(childCategory, (_c = parentCategory === null || parentCategory === void 0 ? void 0 : parentCategory.data) === null || _c === void 0 ? void 0 : _c.id);
                        }
                    }
                });
                for (const category of result.data) {
                    yield processCategory(category);
                }
                console.log("All categories processed successfully.");
            }
            catch (error) {
                console.error("Error processing categories:", error);
            }
        });
    }
    static createCategory(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            var _b, _c;
            const categoryRepository = (0, typeorm_1.getRepository)(entity_1.Category);
            const categoryAttributeRepository = (0, typeorm_1.getRepository)(categoryAttribute_1.CategoryAttribute);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                if (!((_b = data.name) === null || _b === void 0 ? void 0 : _b.name_en)) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                // Check if category with the same name already exists
                const existingCategory = yield categoryRepository
                    .createQueryBuilder("category")
                    .andWhere("category.is_active = :isActive", { isActive: true })
                    .andWhere("category.name->>'name_en' = :name_en", {
                    name_en: data.name.name_en,
                })
                    .getOne();
                if (existingCategory) {
                    return (0, error_handler_1.handleError)("Category with the same name already exists", 400, null);
                }
                const newCategory = categoryRepository.create(Object.assign(Object.assign({}, data), { created_by: staffDataFromToken.id }));
                const savedCategory = yield categoryRepository.save(newCategory);
                if (savedCategory && (data === null || data === void 0 ? void 0 : data.attributes) && ((_c = data === null || data === void 0 ? void 0 : data.attributes) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                    const categoryAttributes = data.attributes.map((attributeId) => {
                        const ca = new categoryAttribute_1.CategoryAttribute();
                        ca.category = { id: savedCategory.id };
                        ca.attribute = { id: attributeId };
                        return ca;
                    });
                    yield categoryAttributeRepository.save(categoryAttributes);
                }
                return (0, success_handler_1.handleSuccess)(savedCategory);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateCategory(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            var _b;
            const categoryRepository = (0, typeorm_1.getRepository)(entity_1.Category);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const category = yield categoryRepository.findOne({
                    where: { id: data.id },
                });
                if (!category) {
                    return (0, error_handler_1.handleError)("Category not found", 404, null);
                }
                // Check if another category already has the same name
                if ((_b = data.name) === null || _b === void 0 ? void 0 : _b.name_en) {
                    // Check if another category has the same name_en (or another relevant language field)
                    const existingCategory = yield categoryRepository
                        .createQueryBuilder("category")
                        .where("category.id != :id", { id: data.id })
                        .andWhere("category.is_active = :isActive", { isActive: true })
                        .andWhere("category.name->>'name_en' = :name_en", {
                        name_en: data.name.name_en,
                    })
                        .getOne();
                    if (existingCategory) {
                        return (0, error_handler_1.handleError)("Category with the same name already exists", 400, null);
                    }
                }
                category.updated_by = staffDataFromToken.id;
                categoryRepository.merge(category, data);
                const updatedCategory = yield categoryRepository.save(category);
                return (0, success_handler_1.handleSuccess)(updatedCategory);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static deleteCategory(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const categoryRepository = (0, typeorm_1.getRepository)(entity_1.Category);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const category = yield categoryRepository.findOne({
                    where: { id: id },
                });
                if (!category) {
                    return (0, error_handler_1.handleError)("Category not found", 404, null);
                }
                // await categoryRepository.remove(category);
                categoryRepository.merge(category, { is_active: false });
                yield categoryRepository.save(category);
                return (0, success_handler_1.handleSuccess)(category);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getCategories(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }, info) {
            var _b, _c, _d;
            const categoryRepository = (0, typeorm_1.getRepository)(entity_1.Category);
            try {
                const order = this.order(sortedBy);
                const queryBuilder = categoryRepository
                    .createQueryBuilder("category")
                    .where({ is_active: true });
                // Apply field selection
                // Extract requested fields dynamically
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getCategories.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields
                        .filter((field) => field !== "subcategories")
                        .filter((field) => field !== "parent_data")
                        .map((field) => `category.${field}`);
                    queryBuilder.select(fields);
                }
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("category.name ->> 'name_en' ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        });
                    }));
                }
                if (where === null || where === void 0 ? void 0 : where.parent_id) {
                    queryBuilder.andWhere("category.parent_id = :parent_id", {
                        parent_id: where.parent_id,
                    });
                }
                else {
                    queryBuilder.andWhere("category.parent_id IS NULL");
                }
                if (where === null || where === void 0 ? void 0 : where.status) {
                    queryBuilder.andWhere("category.status = :status", {
                        status: where.status,
                    });
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(category.created_at) BETWEEN :startDate AND :endDate", {
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
                const [categories, total] = yield queryBuilder.getManyAndCount();
                if (!(selectFields === null || selectFields === void 0 ? void 0 : selectFields.includes("subcategories"))) {
                    return (0, success_handler_1.handleSuccessWithTotalData)(categories, total);
                }
                // Fetch subcategories for each category
                const categoriesWithSubcategories = yield Promise.all(categories.map((category) => __awaiter(this, void 0, void 0, function* () {
                    const subcategories = yield this.getCategoryHierarchy(category.id);
                    return {
                        id: category.id,
                        name: category.name,
                        image: category.image,
                        status: category.status,
                        recommended: category.recommended,
                        parent_id: category.parent_id,
                        subcategories, // Nested subcategories
                    };
                })));
                return (0, success_handler_1.handleSuccessWithTotalData)(categoriesWithSubcategories, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminGetCategories(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }, info) {
            var _b, _c, _d;
            const categoryRepository = (0, typeorm_1.getRepository)(entity_1.Category);
            try {
                const order = this.order(sortedBy);
                const queryBuilder = categoryRepository
                    .createQueryBuilder("category")
                    .where({ is_active: true });
                // Apply field selection
                // Extract requested fields dynamically
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getCategories.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields
                        .filter((field) => field !== "subcategories")
                        .filter((field) => field !== "parent_data")
                        .map((field) => `category.${field}`);
                    queryBuilder.select(fields);
                }
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("category.name ->> 'name_en' ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        });
                    }));
                }
                if (where === null || where === void 0 ? void 0 : where.parent_id) {
                    queryBuilder.andWhere("category.parent_id = :parent_id", {
                        parent_id: where.parent_id,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.status) {
                    queryBuilder.andWhere("category.status = :status", {
                        status: where.status,
                    });
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(category.created_at) BETWEEN :startDate AND :endDate", {
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
                const [categories, total] = yield queryBuilder.getManyAndCount();
                if (!(selectFields === null || selectFields === void 0 ? void 0 : selectFields.includes("parent_data"))) {
                    return (0, success_handler_1.handleSuccessWithTotalData)(categories, total);
                }
                // Fetch subcategories for each category
                const categoriesWithParent = yield Promise.all(categories.map((category) => __awaiter(this, void 0, void 0, function* () {
                    if (!category.parent_id)
                        return category;
                    const parentCategory = yield categoryRepository.findOneBy({
                        id: category === null || category === void 0 ? void 0 : category.parent_id,
                        is_active: true,
                    });
                    if (parentCategory) {
                        return {
                            id: category.id,
                            name: category.name,
                            image: category.image,
                            status: category.status,
                            recommended: category.recommended,
                            parent_id: category.parent_id,
                            parent_data: parentCategory, // Nested subcategories
                        };
                    }
                    return category;
                })));
                return (0, success_handler_1.handleSuccessWithTotalData)(categoriesWithParent, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getAllCategories(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }, info) {
            const categoryRepository = (0, typeorm_1.getRepository)(entity_1.Category);
            try {
                const order = this.order(sortedBy);
                const queryBuilder = categoryRepository
                    .createQueryBuilder("category")
                    .where({ is_active: true });
                // Apply field selection
                // Extract requested fields dynamically
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getCategories.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields
                        .filter((field) => field !== "subcategories")
                        .filter((field) => field !== "parent_data")
                        .map((field) => `category.${field}`);
                    queryBuilder.select(fields);
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
                const [categories, total] = yield queryBuilder.getManyAndCount();
                if (!(selectFields === null || selectFields === void 0 ? void 0 : selectFields.includes("subcategories"))) {
                    return (0, success_handler_1.handleSuccessWithTotalData)(categories, total);
                }
                // Fetch subcategories for each category
                const categoriesWithSubcategories = yield Promise.all(categories.map((category) => __awaiter(this, void 0, void 0, function* () {
                    const subcategories = yield this.getCategoryHierarchy(category.id);
                    return {
                        id: category.id,
                        name: category.name,
                        image: category.image,
                        status: category.status,
                        recommended: category.recommended,
                        parent_id: category.parent_id,
                        subcategories, // Nested subcategories
                    };
                })));
                return (0, success_handler_1.handleSuccessWithTotalData)(categoriesWithSubcategories, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getCategory(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, }) {
            const categoryRepository = (0, typeorm_1.getRepository)(entity_1.Category);
            try {
                const category = yield categoryRepository.findOne({
                    where: { id, is_active: true },
                });
                if (!category) {
                    return (0, error_handler_1.handleError)("Category not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(category);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getCategoriesWithSubcategories() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hierarchy = yield this.getCategoryHierarchy(null); // Fetch the entire hierarchy starting from the root
                return (0, success_handler_1.handleSuccess)(hierarchy);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getCategoryHierarchy() {
        return __awaiter(this, arguments, void 0, function* (parentId = null) {
            const categoryRepository = (0, typeorm_1.getRepository)(entity_1.Category);
            // Fetch categories with the given parent ID
            const categories = yield categoryRepository.find({
                where: { parent_id: parentId },
            });
            // Recursively fetch subcategories
            const result = yield Promise.all(categories.map((category) => __awaiter(this, void 0, void 0, function* () {
                const subcategories = yield this.getCategoryHierarchy(category.id); // Recursive call
                1;
                return {
                    id: category.id,
                    name: category.name,
                    image: category.image,
                    status: category.status,
                    recommended: category.recommended,
                    parent_id: category.parent_id,
                    subcategories, // Nested subcategories
                };
            })));
            return result;
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
exports.CategoryService = CategoryService;

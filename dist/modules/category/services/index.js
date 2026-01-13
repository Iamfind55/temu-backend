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
                const mapCategoryData = (category, parentId = null) => ({
                    image: category.image
                        ? `https://227_cdn.pionexprocoin.cc${category.image}`
                        : "",
                    parent_id: parentId,
                });
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
            var _b;
            const categoryRepository = (0, typeorm_1.getRepository)(entity_1.Category);
            const categoryAttributeRepository = (0, typeorm_1.getRepository)(categoryAttribute_1.CategoryAttribute);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                if (!data.name) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                // Check if category with the same name already exists
                const existingCategory = yield categoryRepository
                    .createQueryBuilder("category")
                    .andWhere("category.is_active = :isActive", { isActive: true })
                    .andWhere("category.name = :name", { name: data.name })
                    .getOne();
                if (existingCategory) {
                    return (0, error_handler_1.handleError)("Category with the same name already exists", 400, null);
                }
                const newCategory = categoryRepository.create(Object.assign(Object.assign({}, data), { created_by: staffDataFromToken.id }));
                const savedCategory = yield categoryRepository.save(newCategory);
                if (savedCategory && (data === null || data === void 0 ? void 0 : data.attributes) && ((_b = data === null || data === void 0 ? void 0 : data.attributes) === null || _b === void 0 ? void 0 : _b.length) > 0) {
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
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateCategory(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const categoryRepository = (0, typeorm_1.getRepository)(entity_1.Category);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const category = yield categoryRepository.findOne({
                    where: { id: data.id, is_active: true },
                });
                if (!category) {
                    return (0, error_handler_1.handleError)("Category not found", 404, null);
                }
                // Check if another category already has the same name
                if (data.name) {
                    // Check if another category has the same (or another relevant language field)
                    const existingCategory = yield categoryRepository
                        .createQueryBuilder("category")
                        .where("category.id != :id", { id: data.id })
                        .andWhere("category.is_active = :isActive", { isActive: true })
                        .andWhere("category.name = :name", {
                        name: data.name,
                    })
                        .getOne();
                    if (existingCategory) {
                        return (0, error_handler_1.handleError)("Category with the same name already exists", 400, null);
                    }
                }
                // Check if parent_id is being changed
                if (data.parent_id && data.parent_id !== category.parent_id) {
                    // Get the old parent category
                    const subLevelOlder = yield categoryRepository.findOne({
                        where: { id: category.parent_id, is_active: true },
                    });
                    // Get all subcategories of the NEW parent (data.parent_id)
                    const subLevelNew = yield categoryRepository.find({
                        where: { parent_id: data.parent_id, is_active: true },
                    });
                    // Check if any subcategory has the same name as the old parent
                    if (subLevelOlder && subLevelNew.length > 0) {
                        const hasNameConflict = subLevelNew.find((item) => item.name === subLevelOlder.name);
                        if (hasNameConflict) {
                            data.parent_id = hasNameConflict.id;
                        }
                        if (!hasNameConflict && subLevelNew[0]) {
                            data.parent_id = subLevelNew[0].id;
                        }
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
    // static async getCategories(
    //   {
    //     where,
    //     page,
    //     limit,
    //     sortedBy,
    //   }: {
    //     where: Partial<CategoryWhereInput>;
    //     page: number;
    //     limit: number;
    //     sortedBy: BaseOrderByInput;
    //   },
    //   info: GraphQLResolveInfo
    // ): Promise<Response<Category[] | null>> {
    //   const categoryRepository = getRepository(Category);
    //   try {
    //     const order = this.order(sortedBy);
    //     const queryBuilder = categoryRepository
    //       .createQueryBuilder("category")
    //       .where("category.is_active = true");
    //     // --- Field selection ---
    //     const selectFields = getRequestedFields(info, "getCategories.data");
    //     if (selectFields?.length) {
    //       const fields = selectFields
    //         .filter((f) => f !== "subcategories" && f !== "parent_data")
    //         .map((f) => `category.${f}`);
    //       queryBuilder.select(fields);
    //     }
    //     // --- Filtering ---
    //     if (where?.keyword) {
    //       queryBuilder.andWhere("category.name ILIKE :keyword", {
    //         keyword: `%${where.keyword}%`,
    //       });
    //     }
    //     if (where?.parent_id) {
    //       queryBuilder.andWhere("category.parent_id = :parent_id", {
    //         parent_id: where.parent_id,
    //       });
    //     } else {
    //       queryBuilder.andWhere("category.parent_id IS NULL");
    //     }
    //     if (where?.status) {
    //       queryBuilder.andWhere("category.status = :status", {
    //         status: where.status,
    //       });
    //     }
    //     if (
    //       where?.createdAtBetween?.startDate &&
    //       where?.createdAtBetween?.endDate
    //     ) {
    //       queryBuilder.andWhere(
    //         "DATE(category.created_at) BETWEEN :startDate AND :endDate",
    //         {
    //           startDate: where.createdAtBetween.startDate,
    //           endDate: where.createdAtBetween.endDate,
    //         }
    //       );
    //     }
    //     // --- Pagination & Sorting ---
    //     queryBuilder
    //       .skip((page - 1) * limit)
    //       .take(limit)
    //       .orderBy(order as any);
    //     const [categories, total] = await queryBuilder.getManyAndCount();
    //     if (!selectFields?.includes("subcategories")) {
    //       return handleSuccessWithTotalData(categories, total);
    //     }
    //     // ----------------------------
    //     //   Fetch up to 3 levels deep
    //     // ----------------------------
    //     const parentIds = categories.map((c) => c.id);
    //     // Level 1
    //     const level1 = await categoryRepository.find({
    //       where: { parent_id: In(parentIds), is_active: true },
    //     });
    //     // Level 2
    //     const level1Ids = level1.map((c) => c.id);
    //     const level2 = level1Ids.length
    //       ? await categoryRepository.find({
    //           where: { parent_id: In(level1Ids), is_active: true },
    //         })
    //       : [];
    //     // Level 3
    //     const level2Ids = level2.map((c) => c.id);
    //     const level3 = level2Ids.length
    //       ? await categoryRepository.find({
    //           where: { parent_id: In(level2Ids), is_active: true },
    //         })
    //       : [];
    //     // --- Group all by parent_id ---
    //     const grouped = [...level1, ...level2, ...level3].reduce((acc, c) => {
    //       if (!acc[c.parent_id]) acc[c.parent_id] = [];
    //       acc[c.parent_id].push(c);
    //       return acc;
    //     }, {} as Record<string, Category[]>);
    //     // --- Recursive builder (limited to 3 levels) ---
    //     const buildHierarchy = (category: Category, level = 1): any => {
    //       if (level > 3) return category;
    //       const subs = grouped[category.id] || [];
    //       return {
    //         ...category,
    //         subcategories: subs.map((sub) => buildHierarchy(sub, level + 1)),
    //       };
    //     };
    //     const result = categories.map((cat) => buildHierarchy(cat));
    //     return handleSuccessWithTotalData(result, total);
    //   } catch (error: any) {
    //     return handleError(
    //       config.message.internal_server_error,
    //       500,
    //       error.message
    //     );
    //   }
    // }
    static getCategories(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }, info) {
            var _b, _c;
            const categoryRepository = (0, typeorm_1.getRepository)(entity_1.Category);
            try {
                const order = this.order(sortedBy);
                const queryBuilder = categoryRepository
                    .createQueryBuilder("category")
                    .where("category.is_active = true");
                // --- Field selection ---
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getCategories.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields
                        .filter((f) => f !== "subcategories" && f !== "parent_data")
                        .map((f) => `category.${f}`);
                    queryBuilder.select(fields);
                }
                // --- Filtering ---
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere("category.name ILIKE :keyword", {
                        keyword: `%${where.keyword}%`,
                    });
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
                        endDate: where.createdAtBetween.endDate,
                    });
                }
                // --- Pagination & Sorting ---
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                const [categories, total] = yield queryBuilder.getManyAndCount();
                if (!(selectFields === null || selectFields === void 0 ? void 0 : selectFields.includes("subcategories"))) {
                    return (0, success_handler_1.handleSuccessWithTotalData)(categories, total);
                }
                // ----------------------------
                //   Fetch up to 3 levels deep
                // ----------------------------
                const parentIds = categories.map((c) => c.id);
                // Level 1
                const level1 = yield categoryRepository.find({
                    where: { parent_id: (0, typeorm_1.In)(parentIds), is_active: true },
                });
                // Level 2
                const level1Ids = level1.map((c) => c.id);
                const level2 = level1Ids.length
                    ? yield categoryRepository.find({
                        where: { parent_id: (0, typeorm_1.In)(level1Ids), is_active: true },
                    })
                    : [];
                // Level 3
                const level2Ids = level2.map((c) => c.id);
                const level3 = level2Ids.length
                    ? yield categoryRepository.find({
                        where: { parent_id: (0, typeorm_1.In)(level2Ids), is_active: true },
                    })
                    : [];
                // --- Group all by parent_id ---
                const grouped = [...level1, ...level2, ...level3].reduce((acc, c) => {
                    if (!acc[c.parent_id])
                        acc[c.parent_id] = [];
                    acc[c.parent_id].push(c);
                    return acc;
                }, {});
                // -----------------------------------
                // Fetch parent_data for all categories
                // -----------------------------------
                const allCategoryIds = [
                    ...parentIds,
                    ...level1.map((c) => c.id),
                    ...level2.map((c) => c.id),
                    ...level3.map((c) => c.id),
                ];
                const allCategoriesMap = new Map((yield categoryRepository.find({
                    where: { id: (0, typeorm_1.In)(allCategoryIds) },
                    select: ["id", "name", "parent_id"],
                })).map((c) => [c.id, c]));
                // --- Recursive builder including parent_data ---
                const buildHierarchy = (category, level = 1) => {
                    if (level > 3)
                        return category;
                    const parent = category.parent_id
                        ? allCategoriesMap.get(category.parent_id)
                        : null;
                    const subs = grouped[category.id] || [];
                    return Object.assign(Object.assign({}, category), { parent_data: parent ? { id: parent.id, name: parent.name } : null, subcategories: subs.map((sub) => buildHierarchy(sub, level + 1)) });
                };
                const result = categories.map((cat) => buildHierarchy(cat));
                return (0, success_handler_1.handleSuccessWithTotalData)(result, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getMainCategories(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }, info) {
            var _b, _c;
            const categoryRepository = (0, typeorm_1.getRepository)(entity_1.Category);
            try {
                const order = this.order(sortedBy);
                const queryBuilder = categoryRepository
                    .createQueryBuilder("category")
                    .where("category.is_active = true")
                    .andWhere("category.parent_id IS NULL");
                // --- Field selection ---
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getMainCategories.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields
                        .filter((f) => f !== "subcategories" && f !== "parent_data")
                        .map((f) => `category.${f}`);
                    queryBuilder.select(fields);
                }
                // --- Filtering ---
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere("category.name ILIKE :keyword", {
                        keyword: `%${where.keyword}%`,
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
                        endDate: where.createdAtBetween.endDate,
                    });
                }
                // --- Pagination & Sorting ---
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                const [categories, total] = yield queryBuilder.getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(categories, total);
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getSubCategories(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }, info) {
            var _b, _c;
            const categoryRepository = (0, typeorm_1.getRepository)(entity_1.Category);
            try {
                const order = this.order(sortedBy);
                // First, find all level 3 categories using raw SQL join
                // Level 3 = categories whose parent has a parent
                const queryBuilder = categoryRepository
                    .createQueryBuilder("category")
                    .innerJoin(entity_1.Category, "level2Parent", '"category"."parent_id"::uuid = "level2Parent"."id" AND "level2Parent"."is_active" = true')
                    .innerJoin(entity_1.Category, "level1Parent", '"level2Parent"."parent_id"::uuid = "level1Parent"."id" AND "level1Parent"."is_active" = true')
                    .where("category.is_active = true");
                // --- Field selection ---
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getSubCategories.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields
                        .filter((f) => f !== "subcategories" && f !== "parent_data")
                        .map((f) => `category.${f}`);
                    queryBuilder.select(fields);
                }
                // --- Filtering ---
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere("category.name ILIKE :keyword", {
                        keyword: `%${where.keyword}%`,
                    });
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
                        endDate: where.createdAtBetween.endDate,
                    });
                }
                // --- Pagination & Sorting ---
                // Prefix order columns with "category." to avoid ambiguity
                const prefixedOrder = {};
                for (const [key, value] of Object.entries(order)) {
                    prefixedOrder[`category.${key}`] = value;
                }
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(prefixedOrder);
                const [categories, total] = yield queryBuilder.getManyAndCount();
                // If parent_data is not requested, return categories as-is
                if (!(selectFields === null || selectFields === void 0 ? void 0 : selectFields.includes("parent_data"))) {
                    return (0, success_handler_1.handleSuccessWithTotalData)(categories, total);
                }
                // Get level 1 (root) parent for each level 3 category
                // For level 3: category -> level 2 parent -> level 1 parent (root)
                const result = yield Promise.all(categories.map((category) => __awaiter(this, void 0, void 0, function* () {
                    // Get level 2 parent (direct parent)
                    const level2Parent = yield categoryRepository.findOne({
                        where: { id: category.parent_id, is_active: true },
                        select: ["id", "name", "parent_id"],
                    });
                    if (!level2Parent) {
                        return Object.assign(Object.assign({}, category), { parent_data: null });
                    }
                    // Get level 1 parent (root parent)
                    const level1Parent = level2Parent.parent_id
                        ? yield categoryRepository.findOne({
                            where: { id: level2Parent.parent_id, is_active: true },
                            select: ["id", "name", "parent_id"],
                        })
                        : null;
                    return Object.assign(Object.assign({}, category), { parent_data: level1Parent
                            ? { id: level1Parent.id, name: level1Parent.name }
                            : null });
                })));
                return (0, success_handler_1.handleSuccessWithTotalData)(result, total);
            }
            catch (error) {
                console.log(error);
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
                        qb.where("category.name ILIKE :keyword", {
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
    // static async getCategory({
    //   id,
    // }: {
    //   id: string;
    // }): Promise<Response<Category | null>> {
    //   const categoryRepository = getRepository(Category);
    //   try {
    //     // Find the base category
    //     const category = await categoryRepository.findOne({
    //       where: { id, is_active: true },
    //     });
    //     if (!category) {
    //       return handleError("Category not found", 404, null);
    //     }
    //     // --- Fetch up to 3 levels of subcategories ---
    //     const level1 = await categoryRepository.find({
    //       where: { parent_id: category.id, is_active: true },
    //     });
    //     const level1Ids = level1.map((c) => c.id);
    //     const level2 =
    //       level1Ids.length > 0
    //         ? await categoryRepository.find({
    //             where: { parent_id: In(level1Ids), is_active: true },
    //           })
    //         : [];
    //     const level2Ids = level2.map((c) => c.id);
    //     const level3 =
    //       level2Ids.length > 0
    //         ? await categoryRepository.find({
    //             where: { parent_id: In(level2Ids), is_active: true },
    //           })
    //         : [];
    //     // --- Group by parent_id ---
    //     const grouped = [...level1, ...level2, ...level3].reduce((acc, c) => {
    //       if (!acc[c.parent_id]) acc[c.parent_id] = [];
    //       acc[c.parent_id].push(c);
    //       return acc;
    //     }, {} as Record<string, Category[]>);
    //     // --- Recursive builder up to level 3 ---
    //     const buildHierarchy = (cat: Category, level = 1): any => {
    //       if (level > 3) return cat;
    //       const subs = grouped[cat.id] || [];
    //       return {
    //         ...cat,
    //         subcategories: subs.map((sub) => buildHierarchy(sub, level + 1)),
    //       };
    //     };
    //     const result = buildHierarchy(category);
    //     return handleSuccess(result);
    //   } catch (error: any) {
    //     return handleError(
    //       config.message.internal_server_error,
    //       500,
    //       error.message
    //     );
    //   }
    // }
    static getCategory(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, }) {
            const categoryRepository = (0, typeorm_1.getRepository)(entity_1.Category);
            try {
                // --------- Base Category ---------
                const category = yield categoryRepository.findOne({
                    where: { id, is_active: true },
                });
                if (!category) {
                    return (0, error_handler_1.handleError)("Category not found", 404, null);
                }
                // ---------------------------------------------------
                //                BUILD PARENT CHAIN
                // ---------------------------------------------------
                const buildParentChain = (parentId) => __awaiter(this, void 0, void 0, function* () {
                    if (!parentId)
                        return null;
                    const parent = yield categoryRepository.findOne({
                        where: { id: parentId, is_active: true },
                        select: ["id", "name", "parent_id"],
                    });
                    if (!parent)
                        return null;
                    return {
                        id: parent.id,
                        name: parent.name,
                        parent_data: yield buildParentChain(parent.parent_id),
                    };
                });
                const parent_data = yield buildParentChain(category.parent_id);
                // ---------------------------------------------------
                //                FETCH SUBCATEGORIES (3 levels)
                // ---------------------------------------------------
                const level1 = yield categoryRepository.find({
                    where: { parent_id: category.id, is_active: true },
                });
                const level1Ids = level1.map((c) => c.id);
                const level2 = level1Ids.length > 0
                    ? yield categoryRepository.find({
                        where: { parent_id: (0, typeorm_1.In)(level1Ids), is_active: true },
                    })
                    : [];
                const level2Ids = level2.map((c) => c.id);
                const level3 = level2Ids.length > 0
                    ? yield categoryRepository.find({
                        where: { parent_id: (0, typeorm_1.In)(level2Ids), is_active: true },
                    })
                    : [];
                // ---------- Group subcategories ----------
                const grouped = [...level1, ...level2, ...level3].reduce((acc, c) => {
                    if (!acc[c.parent_id])
                        acc[c.parent_id] = [];
                    acc[c.parent_id].push(c);
                    return acc;
                }, {});
                // ---------- Recursive subcategory builder ----------
                const buildSubs = (cat, level = 1) => {
                    if (level > 3)
                        return [];
                    const subs = grouped[cat.id] || [];
                    return subs.map((sub) => (Object.assign(Object.assign({}, sub), { subcategories: buildSubs(sub, level + 1) })));
                };
                // ---------------------------------------------------
                //                COMBINE RESULT
                // ---------------------------------------------------
                const result = Object.assign(Object.assign({}, category), { parent_data, subcategories: buildSubs(category) });
                return (0, success_handler_1.handleSuccess)(result);
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

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
exports.ProductService = void 0;
const config_1 = require("../../../config");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const baseType_1 = require("../../../utils/base/baseType");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const category_1 = require("../../category");
const graphqlUtils_1 = require("../../../utils/graphqlUtils");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
class ProductService {
    // User only clone data from dhlshopping api
    static createLoopCategoryAndProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            const baseCategoryUrl = "https://dhlshopping.com/api/customer/index/get-all-category";
            const categoryDetailsUrl = (id) => `https://dhlshopping.com/api/category/${id}/shop?page=1&pagesize=500&sort=new&brand=&min_price=1&max_price=99990`;
            const productDetailsUrl = (id) => `https://dhlshopping.com/api/product/${id}/a`;
            const cdnUrl = "https://227_cdn.pionexprocoin.cc";
            const fetchJson = (url, options) => __awaiter(this, void 0, void 0, function* () {
                const response = yield fetch(url, options);
                return response.json();
            });
            const mapCategoryData = (category, parentId = null) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                return ({
                    image: category.image ? `${cdnUrl}${category.image}` : "",
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
            const mapProductData = (product, categoryId) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
                return ({
                    name: {
                        name_en: ((_a = product === null || product === void 0 ? void 0 : product.name) === null || _a === void 0 ? void 0 : _a.name_en) || "",
                        name_es: ((_b = product === null || product === void 0 ? void 0 : product.name) === null || _b === void 0 ? void 0 : _b.name_es) || "",
                        name_jp: ((_c = product === null || product === void 0 ? void 0 : product.name) === null || _c === void 0 ? void 0 : _c.name_jp) || "",
                        name_ms: ((_d = product === null || product === void 0 ? void 0 : product.name) === null || _d === void 0 ? void 0 : _d.name_ms) || "",
                        name_th: ((_e = product === null || product === void 0 ? void 0 : product.name) === null || _e === void 0 ? void 0 : _e.name_th) || "",
                        name_vi: ((_f = product === null || product === void 0 ? void 0 : product.name) === null || _f === void 0 ? void 0 : _f.name_vi) || "",
                        name_zh: ((_g = product === null || product === void 0 ? void 0 : product.name) === null || _g === void 0 ? void 0 : _g.name_zh) || "",
                        name_zh_tw: ((_h = product === null || product === void 0 ? void 0 : product.name) === null || _h === void 0 ? void 0 : _h["name_zh-tw"]) || "",
                    },
                    description: {
                        name_vi: ((_j = product === null || product === void 0 ? void 0 : product.description) === null || _j === void 0 ? void 0 : _j.description_vi) || "",
                        name_en: ((_k = product === null || product === void 0 ? void 0 : product.description) === null || _k === void 0 ? void 0 : _k.description_en) || "",
                        name_ms: ((_l = product === null || product === void 0 ? void 0 : product.description) === null || _l === void 0 ? void 0 : _l.description_ms) || "",
                        name_th: ((_m = product === null || product === void 0 ? void 0 : product.description) === null || _m === void 0 ? void 0 : _m.description_th) || "",
                        name_es: ((_o = product === null || product === void 0 ? void 0 : product.description) === null || _o === void 0 ? void 0 : _o.description_es) || "",
                        name_jp: ((_p = product === null || product === void 0 ? void 0 : product.description) === null || _p === void 0 ? void 0 : _p.description_jp) || "",
                        name_zh: ((_q = product === null || product === void 0 ? void 0 : product.description) === null || _q === void 0 ? void 0 : _q.description_zh) || "",
                        name_zh_tw: ((_r = product === null || product === void 0 ? void 0 : product.description) === null || _r === void 0 ? void 0 : _r["description_zh-tw"]) || "",
                    },
                    cover_image: `${cdnUrl}${(_t = (_s = product === null || product === void 0 ? void 0 : product.image) === null || _s === void 0 ? void 0 : _s.main) === null || _t === void 0 ? void 0 : _t.image}`,
                    images: (_v = (_u = product === null || product === void 0 ? void 0 : product.image) === null || _u === void 0 ? void 0 : _u.gallery) === null || _v === void 0 ? void 0 : _v.map((image) => image === null || image === void 0 ? void 0 : image.image),
                    category_id: categoryId,
                    total_star: parseFloat(product === null || product === void 0 ? void 0 : product.score) || 5.0,
                    price: parseFloat(product === null || product === void 0 ? void 0 : product.price) || 34.99,
                    quantity: parseFloat(product === null || product === void 0 ? void 0 : product.qty) || 2837,
                });
            };
            const processCategory = (category_2, ...args_1) => __awaiter(this, [category_2, ...args_1], void 0, function* (category, parentId = null) {
                var _a, _b, _c, _d, _e;
                const categoryData = mapCategoryData(category, parentId);
                const parentCategory = yield category_1.CategoryService.createCategory({
                    data: categoryData,
                });
                const categoryId = (_a = parentCategory === null || parentCategory === void 0 ? void 0 : parentCategory.data) === null || _a === void 0 ? void 0 : _a.id;
                if (!categoryId) {
                    console.error("Failed to create category:", parentCategory);
                    return;
                }
                console.log("Created category:", categoryId);
                try {
                    const categoryProducts = yield fetchJson(categoryDetailsUrl(category.id), { method: "GET", redirect: "follow" });
                    if (categoryProducts.code === 200 && ((_b = categoryProducts === null || categoryProducts === void 0 ? void 0 : categoryProducts.data) === null || _b === void 0 ? void 0 : _b.list)) {
                        // Utility function for delay
                        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                        for (const product of categoryProducts.data.list) {
                            try {
                                const productDetails = yield fetchJson(productDetailsUrl(product.id), { method: "GET", redirect: "follow" });
                                const productData = mapProductData((_c = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _c === void 0 ? void 0 : _c.product, categoryId);
                                const createProduct = yield this.createProduct({
                                    data: productData,
                                });
                                console.log("Created product:", (_d = createProduct === null || createProduct === void 0 ? void 0 : createProduct.data) === null || _d === void 0 ? void 0 : _d.id);
                                // Delay for 2 seconds before proceeding to the next product
                                yield delay(2000);
                            }
                            catch (productError) {
                                console.error("Error creating product:", productError);
                            }
                        }
                    }
                }
                catch (categoryError) {
                    console.error("Error fetching category products:", categoryError);
                }
                if (((_e = category === null || category === void 0 ? void 0 : category.child) === null || _e === void 0 ? void 0 : _e.length) > 0) {
                    for (const childCategory of category.child) {
                        yield processCategory(childCategory, categoryId);
                    }
                }
            });
            try {
                const categories = yield fetchJson(baseCategoryUrl, {
                    method: "POST",
                    redirect: "follow",
                });
                if (categories.code !== 200 || !(categories === null || categories === void 0 ? void 0 : categories.data)) {
                    console.error("Unexpected response for categories:", categories);
                    return;
                }
                for (const category of categories.data) {
                    yield processCategory(category);
                }
                console.log("All categories and products processed successfully.");
            }
            catch (error) {
                console.error("Error processing categories and products:", error);
            }
        });
    }
    static createProduct(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            var _b;
            try {
                const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                if (!((_b = data === null || data === void 0 ? void 0 : data.name) === null || _b === void 0 ? void 0 : _b.name_en) || !(data === null || data === void 0 ? void 0 : data.cover_image)) {
                    return (0, error_handler_1.handleError)("Validation Error: Missing required fields", 400, null);
                }
                const categoryIds = (data === null || data === void 0 ? void 0 : data.category_id)
                    ? yield this.findCategoryParents(data.category_id)
                    : [];
                const newProduct = productRepository.create(Object.assign(Object.assign({}, data), { category_ids: categoryIds, status: data.status || baseType_1.BaseStatus.ACTIVE, created_by: staffDataFromToken.id }));
                const savedProduct = yield productRepository.save(newProduct);
                return (0, success_handler_1.handleSuccess)(savedProduct);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateProduct(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            try {
                const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const product = yield productRepository.findOneById(data.id);
                if (!product)
                    return (0, error_handler_1.handleError)("Product not found", 404, null);
                const categoryIds = (data === null || data === void 0 ? void 0 : data.category_id)
                    ? yield this.findCategoryParents(data.category_id)
                    : [];
                productRepository.merge(product, Object.assign(Object.assign({}, data), { category_ids: categoryIds, updated_by: staffDataFromToken.id }));
                const updatedProduct = yield productRepository.save(product);
                return (0, success_handler_1.handleSuccess)(updatedProduct);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static deleteProduct(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req }) {
            try {
                const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const product = yield productRepository.findOneById(id);
                if (!product)
                    return (0, error_handler_1.handleError)("Product not found", 404, null);
                yield productRepository.remove(product);
                return (0, success_handler_1.handleSuccess)(null);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getProducts(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ req, where, page, limit, sortedBy, }, info) {
            return this.buildProductQuery({ req, where, page, limit, sortedBy }, info, false);
        });
    }
    static adminGetProducts(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ req, where, page, limit, sortedBy, }, info) {
            return this.buildProductQuery({ req, where, page, limit, sortedBy }, info, true);
        });
    }
    static getBestSellingProducts(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ req, where, page, limit, sortedBy, }, info) {
            const queryBuilder = this.buildBaseQuery({ req, where, page, limit, sortedBy }, info);
            queryBuilder.orderBy({ sell_count: "DESC" });
            return this.executeQuery(queryBuilder, info);
        });
    }
    static getSimilarProducts(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ req, where, page, limit, }, info) {
            var _b;
            const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
            const queryBuilder = this.buildBaseQuery({ req, where, page, limit, sortedBy: baseType_1.BaseOrderByInput.created_at_DESC }, info);
            if (where === null || where === void 0 ? void 0 : where.product_id) {
                const product = yield productRepository.findOne({
                    where: { id: where.product_id },
                    select: ["category_ids"],
                });
                if ((_b = product === null || product === void 0 ? void 0 : product.category_ids) === null || _b === void 0 ? void 0 : _b.length) {
                    queryBuilder.andWhere("product.category_ids::jsonb @> :category_ids", {
                        category_ids: JSON.stringify(product.category_ids),
                    });
                }
            }
            queryBuilder.addOrderBy("RANDOM()").take(limit);
            return this.executeQuery(queryBuilder, info);
        });
    }
    static searchProducts(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }) {
            const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
            const queryBuilder = productRepository.createQueryBuilder("product");
            if (where === null || where === void 0 ? void 0 : where.keyword) {
                queryBuilder.where("product.name ->> 'name_en' ILIKE :keyword", {
                    keyword: `%${where.keyword}%`,
                });
            }
            queryBuilder
                .select([
                "product.id",
                "product.name",
                "product.price",
                "product.status",
                "product.cover_image",
                "product.description",
            ])
                .skip((page - 1) * limit)
                .take(limit)
                .orderBy(this.order(sortedBy));
            const [products, total] = yield queryBuilder.getManyAndCount();
            return (0, success_handler_1.handleSuccessWithTotalData)(products, total);
        });
    }
    static getProduct(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            var _b;
            try {
                const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
                const categoryRepository = (0, typeorm_1.getRepository)(category_1.Category);
                const product = yield productRepository.findOne({ where: { id } });
                if (!product)
                    return (0, error_handler_1.handleError)("Product not found", 404, null);
                if ((_b = product === null || product === void 0 ? void 0 : product.category_ids) === null || _b === void 0 ? void 0 : _b.length) {
                    const categories = yield categoryRepository.findByIds(product.category_ids);
                    product.categories = product.category_ids.map((id) => categories.find((category) => category.id === id));
                }
                return (0, success_handler_1.handleSuccess)(product);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static buildProductQuery({ req, where, page, limit, sortedBy, }, info, isAdmin) {
        const queryBuilder = this.buildBaseQuery({ req, where, page, limit, sortedBy }, info, isAdmin);
        if (isAdmin) {
            queryBuilder
                .leftJoinAndSelect("product.categoryData", "category")
                .leftJoinAndSelect("product.brandData", "brand");
        }
        return this.executeQuery(queryBuilder, info);
    }
    static buildBaseQuery({ req, where, page, limit, sortedBy, }, info, isAdmin = false) {
        const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
        const queryBuilder = productRepository.createQueryBuilder("product");
        const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getProducts.data");
        if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
            const fields = selectFields
                .filter((field) => field !== "shopProductStatus")
                .map((field) => `product.${field}`);
            queryBuilder.select(fields);
        }
        if (!isAdmin) {
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id) {
                    queryBuilder.leftJoinAndSelect("product.shopProducts", "shopProduct", "shopProduct.shop_id = :shopId", { shopId: shopDataFromToken.id });
                }
            }
            catch (error) { }
        }
        if (where === null || where === void 0 ? void 0 : where.keyword) {
            queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                qb.where("product.name ->> 'name_en' ILIKE :keyword", {
                    keyword: `%${where.keyword}%`,
                }).orWhere("product.description ->> 'name_en' ILIKE :keyword", {
                    keyword: `%${where.keyword}%`,
                });
            }));
        }
        if (where === null || where === void 0 ? void 0 : where.status)
            queryBuilder.andWhere("product.status = :status", {
                status: where.status,
            });
        if (where === null || where === void 0 ? void 0 : where.category_id)
            queryBuilder.andWhere("product.category_ids::jsonb @> :category_id", {
                category_id: JSON.stringify([where.category_id]),
            });
        if (where === null || where === void 0 ? void 0 : where.brand_id)
            queryBuilder.andWhere("product.brand_id = :brand_id", {
                brand_id: where.brand_id,
            });
        if (where === null || where === void 0 ? void 0 : where.product_top)
            queryBuilder.andWhere("product.product_top = :product_top", {
                product_top: where.product_top,
            });
        if (where === null || where === void 0 ? void 0 : where.product_vip)
            queryBuilder.andWhere("product.product_vip = :product_vip", {
                product_vip: where.product_vip,
            });
        if (where === null || where === void 0 ? void 0 : where.price_between) {
            queryBuilder
                .andWhere("product.price >= :minPrice", {
                minPrice: where.price_between[0],
            })
                .andWhere("product.price <= :maxPrice", {
                maxPrice: where.price_between[1],
            });
        }
        if ((where === null || where === void 0 ? void 0 : where.quantity) !== undefined) {
            queryBuilder.andWhere(`product.quantity ${where.quantity > 0 ? ">=" : "<="} :quantity`, { quantity: where.quantity > 0 ? 1 : 0 });
        }
        queryBuilder
            .skip((page - 1) * limit)
            .take(limit)
            .orderBy(this.order(sortedBy, where === null || where === void 0 ? void 0 : where.price_between));
        return queryBuilder;
    }
    static executeQuery(queryBuilder, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getProducts.data");
            if ((selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) <= 0) {
                const total = yield queryBuilder.getCount();
                return (0, success_handler_1.handleSuccessWithTotalData)([], total);
            }
            const [products, total] = yield queryBuilder.getManyAndCount();
            products.forEach((product) => {
                var _a, _b;
                product.shopProductStatus =
                    ((_b = (_a = product.shopProducts) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.shopProductStatus) || null;
            });
            return (0, success_handler_1.handleSuccessWithTotalData)(products, total);
        });
    }
    static order(sortedBy, price = [0]) {
        switch (sortedBy) {
            case baseType_1.BaseOrderByInput.created_at_ASC:
                return { "product.created_at": "ASC" };
            case baseType_1.BaseOrderByInput.created_at_DESC:
                return { "product.created_at": "DESC" };
            case baseType_1.BaseOrderByInput.updated_at_ASC:
                return { "product.updated_at": "ASC" };
            case baseType_1.BaseOrderByInput.updated_at_DESC:
                return { "product.updated_at": "DESC" };
            case baseType_1.BaseOrderByInput.sell_count_ASC:
                return { "product.sell_count": "ASC" };
            case baseType_1.BaseOrderByInput.sell_count_DESC:
                return { "product.sell_count": "DESC" };
            case baseType_1.BaseOrderByInput.price_ASC:
                return { "product.price": "ASC" };
            case baseType_1.BaseOrderByInput.price_DESC:
                return { "product.price": "DESC" };
            default:
                return { "product.created_at": "DESC" };
        }
    }
    static findCategoryParents(categoryId_1) {
        return __awaiter(this, arguments, void 0, function* (categoryId, categoryIds = []) {
            try {
                const categoryRepository = (0, typeorm_1.getRepository)(category_1.Category);
                const category = yield categoryRepository.findOne({
                    where: { id: categoryId },
                });
                if (category) {
                    categoryIds.push(category.id);
                    if (category.parent_id)
                        yield this.findCategoryParents(category.parent_id, categoryIds);
                }
                return categoryIds;
            }
            catch (error) {
                console.error("Error finding parent categories:", error);
                return categoryIds;
            }
        });
    }
}
exports.ProductService = ProductService;

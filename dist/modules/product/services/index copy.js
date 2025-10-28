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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const baseType_1 = require("../../../utils/base/baseType");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const category_1 = require("../../category");
const graphqlUtils_1 = require("../../../utils/graphqlUtils");
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
                var _b, _c, _d, _e, _f, _g, _h, _j;
                return ({
                    image: category.image ? `${cdnUrl}${category.image}` : "",
                    name: {
                        name_vi: ((_b = category === null || category === void 0 ? void 0 : category.name) === null || _b === void 0 ? void 0 : _b.name_vi) || "",
                        name_en: ((_c = category === null || category === void 0 ? void 0 : category.name) === null || _c === void 0 ? void 0 : _c.name_en) || "",
                        name_ms: ((_d = category === null || category === void 0 ? void 0 : category.name) === null || _d === void 0 ? void 0 : _d.name_ms) || "",
                        name_th: ((_e = category === null || category === void 0 ? void 0 : category.name) === null || _e === void 0 ? void 0 : _e.name_th) || "",
                        name_es: ((_f = category === null || category === void 0 ? void 0 : category.name) === null || _f === void 0 ? void 0 : _f.name_es) || "",
                        name_jp: ((_g = category === null || category === void 0 ? void 0 : category.name) === null || _g === void 0 ? void 0 : _g.name_jp) || "",
                        name_zh: ((_h = category === null || category === void 0 ? void 0 : category.name) === null || _h === void 0 ? void 0 : _h.name_zh) || "",
                        name_zh_tw: ((_j = category === null || category === void 0 ? void 0 : category.name) === null || _j === void 0 ? void 0 : _j["name_zh-tw"]) || "",
                    },
                    parent_id: parentId,
                });
            };
            const mapProductData = (product, categoryId) => {
                var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
                return ({
                    name: {
                        name_en: ((_b = product === null || product === void 0 ? void 0 : product.name) === null || _b === void 0 ? void 0 : _b.name_en) || "",
                        name_es: ((_c = product === null || product === void 0 ? void 0 : product.name) === null || _c === void 0 ? void 0 : _c.name_es) || "",
                        name_jp: ((_d = product === null || product === void 0 ? void 0 : product.name) === null || _d === void 0 ? void 0 : _d.name_jp) || "",
                        name_ms: ((_e = product === null || product === void 0 ? void 0 : product.name) === null || _e === void 0 ? void 0 : _e.name_ms) || "",
                        name_th: ((_f = product === null || product === void 0 ? void 0 : product.name) === null || _f === void 0 ? void 0 : _f.name_th) || "",
                        name_vi: ((_g = product === null || product === void 0 ? void 0 : product.name) === null || _g === void 0 ? void 0 : _g.name_vi) || "",
                        name_zh: ((_h = product === null || product === void 0 ? void 0 : product.name) === null || _h === void 0 ? void 0 : _h.name_zh) || "",
                        name_zh_tw: ((_j = product === null || product === void 0 ? void 0 : product.name) === null || _j === void 0 ? void 0 : _j["name_zh-tw"]) || "",
                    },
                    description: {
                        name_vi: ((_k = product === null || product === void 0 ? void 0 : product.description) === null || _k === void 0 ? void 0 : _k.description_vi) || "",
                        name_en: ((_l = product === null || product === void 0 ? void 0 : product.description) === null || _l === void 0 ? void 0 : _l.description_en) || "",
                        name_ms: ((_m = product === null || product === void 0 ? void 0 : product.description) === null || _m === void 0 ? void 0 : _m.description_ms) || "",
                        name_th: ((_o = product === null || product === void 0 ? void 0 : product.description) === null || _o === void 0 ? void 0 : _o.description_th) || "",
                        name_es: ((_p = product === null || product === void 0 ? void 0 : product.description) === null || _p === void 0 ? void 0 : _p.description_es) || "",
                        name_jp: ((_q = product === null || product === void 0 ? void 0 : product.description) === null || _q === void 0 ? void 0 : _q.description_jp) || "",
                        name_zh: ((_r = product === null || product === void 0 ? void 0 : product.description) === null || _r === void 0 ? void 0 : _r.description_zh) || "",
                        name_zh_tw: ((_s = product === null || product === void 0 ? void 0 : product.description) === null || _s === void 0 ? void 0 : _s["description_zh-tw"]) || "",
                    },
                    cover_image: `${cdnUrl}${(_u = (_t = product === null || product === void 0 ? void 0 : product.image) === null || _t === void 0 ? void 0 : _t.main) === null || _u === void 0 ? void 0 : _u.image}`,
                    images: (_w = (_v = product === null || product === void 0 ? void 0 : product.image) === null || _v === void 0 ? void 0 : _v.gallery) === null || _w === void 0 ? void 0 : _w.map((image) => image === null || image === void 0 ? void 0 : image.image),
                    category_id: categoryId,
                    total_star: parseFloat(product === null || product === void 0 ? void 0 : product.score) || 5.0,
                    price: parseFloat(product === null || product === void 0 ? void 0 : product.price) || 34.99,
                    quantity: parseFloat(product === null || product === void 0 ? void 0 : product.qty) || 2837,
                });
            };
            const processCategory = (category_2, ...args_1) => __awaiter(this, [category_2, ...args_1], void 0, function* (category, parentId = null) {
                var _b, _c, _d, _e, _f;
                const categoryData = mapCategoryData(category, parentId);
                const parentCategory = yield category_1.CategoryService.createCategory({
                    data: categoryData,
                });
                const categoryId = (_b = parentCategory === null || parentCategory === void 0 ? void 0 : parentCategory.data) === null || _b === void 0 ? void 0 : _b.id;
                if (!categoryId) {
                    console.error("Failed to create category:", parentCategory);
                    return;
                }
                console.log("Created category:", categoryId);
                try {
                    const categoryProducts = yield fetchJson(categoryDetailsUrl(category.id), { method: "GET", redirect: "follow" });
                    if (categoryProducts.code === 200 && ((_c = categoryProducts === null || categoryProducts === void 0 ? void 0 : categoryProducts.data) === null || _c === void 0 ? void 0 : _c.list)) {
                        // Utility function for delay
                        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                        for (const product of categoryProducts.data.list) {
                            try {
                                const productDetails = yield fetchJson(productDetailsUrl(product.id), { method: "GET", redirect: "follow" });
                                const productData = mapProductData((_d = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _d === void 0 ? void 0 : _d.product, categoryId);
                                const createProduct = yield this.createProduct({
                                    data: productData,
                                });
                                console.log("Created product:", (_e = createProduct === null || createProduct === void 0 ? void 0 : createProduct.data) === null || _e === void 0 ? void 0 : _e.id);
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
                if (((_f = category === null || category === void 0 ? void 0 : category.child) === null || _f === void 0 ? void 0 : _f.length) > 0) {
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
    static createProduct(_b) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            var _c;
            const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
            try {
                // Verify the staff token
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken) {
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                // Validate required fields
                if (!((_c = data === null || data === void 0 ? void 0 : data.name) === null || _c === void 0 ? void 0 : _c.name_en) || !(data === null || data === void 0 ? void 0 : data.cover_image)) {
                    return (0, error_handler_1.handleError)("Validation Error: Missing required fields", 400, null);
                }
                // Collect category IDs, including parent categories
                let categoryIds = [];
                if (data === null || data === void 0 ? void 0 : data.category_id) {
                    categoryIds = yield this.findCategoryParents(data.category_id);
                }
                // return handleError(categoryIds.toString(), 500, categoryIds);
                // Create a new product instance
                const newProduct = productRepository.create(Object.assign(Object.assign({}, data), { category_ids: categoryIds, status: data.status || baseType_1.BaseStatus.ACTIVE, created_by: staffDataFromToken.id }));
                // Save the product to the database
                const savedProduct = yield productRepository.save(newProduct);
                return (0, success_handler_1.handleSuccess)(savedProduct);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateProduct(_b) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const product = yield productRepository.findOneById(data.id);
                if (!product) {
                    return (0, error_handler_1.handleError)("Product not found", 404, null);
                }
                product.updated_by = staffDataFromToken === null || staffDataFromToken === void 0 ? void 0 : staffDataFromToken.id;
                // Collect category IDs, including parent categories
                let categoryIds = [];
                if (data === null || data === void 0 ? void 0 : data.category_id) {
                    categoryIds = yield this.findCategoryParents(data.category_id);
                }
                productRepository.merge(product, Object.assign(Object.assign({}, data), { category_ids: categoryIds }));
                const updatedProduct = yield productRepository.save(product);
                return (0, success_handler_1.handleSuccess)(updatedProduct);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static deleteProduct(_b) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const product = yield productRepository.findOneById(id);
                if (!product) {
                    return (0, error_handler_1.handleError)("Product not found", 404, null);
                }
                productRepository.merge(product, {
                    isActive: false,
                });
                yield productRepository.remove(product);
                return (0, success_handler_1.handleSuccess)(product);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getProducts(_b, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ req, where, page, limit, sortedBy, }, info) {
            const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
            try {
                const order = this.order(sortedBy, where === null || where === void 0 ? void 0 : where.price_between);
                const queryBuilder = productRepository.createQueryBuilder("product");
                // Dynamically select fields requested in GraphQL query
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getProducts.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields
                        .filter((field) => field !== "shopProductStatus")
                        .map((field) => `product.${field}`);
                    queryBuilder.select(fields);
                }
                // Apply shop-specific logic if a shop token exists
                try {
                    const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                    const shopId = shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id; // Extract shop ID if token is valid
                    if (shopId) {
                        queryBuilder.leftJoinAndSelect("product.shopProducts", "shopProduct", "shopProduct.shop_id = :shopId", { shopId: shopId });
                    }
                }
                catch (error) { }
                // Apply filters
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("product.name ->> 'name_en' ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        }).orWhere("product.description ->> 'name_en' ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        });
                    }));
                }
                if (where === null || where === void 0 ? void 0 : where.status) {
                    queryBuilder.andWhere("product.status = :status", {
                        status: where.status,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.category_id) {
                    queryBuilder.andWhere("product.category_ids::jsonb @> :category_id", {
                        category_id: JSON.stringify([where.category_id]),
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.brand_id) {
                    queryBuilder.andWhere("product.brand_id = :brand_id", {
                        brand_id: where.brand_id,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.product_top) {
                    queryBuilder.andWhere("product.product_top = :product_top", {
                        product_top: where.product_top,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.product_vip) {
                    queryBuilder.andWhere("product.product_vip = :product_vip", {
                        product_vip: where.product_vip,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.price_between) {
                    queryBuilder
                        .andWhere("product.price >= :minPrice", {
                        minPrice: where.price_between[0],
                    })
                        .andWhere("product.price <= :maxPrice", {
                        maxPrice: where.price_between[1],
                    });
                }
                if ((where === null || where === void 0 ? void 0 : where.quantity) && where.quantity > 0) {
                    queryBuilder.andWhere("product.quantity >= :quantity", { quantity: 1 });
                }
                else if ((where === null || where === void 0 ? void 0 : where.quantity) === 0) {
                    queryBuilder.andWhere("product.quantity <= :quantity", { quantity: 0 });
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
                // console.log({ sql: queryBuilder.getSql() });
                // const _products = await queryBuilder.getMany();
                const [products, total] = yield queryBuilder.getManyAndCount();
                products.forEach((product) => {
                    if (product.shopProducts && product.shopProducts.length > 0) {
                        product.shopProductStatus = product.shopProducts[0].shopProductStatus;
                    }
                    else {
                        product.shopProductStatus = null;
                    }
                });
                return (0, success_handler_1.handleSuccessWithTotalData)(products, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminGetProducts(_b, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, }, info // Pass the GraphQL `info` object
        ) {
            var _c, _d;
            const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
            try {
                // Verify the staff token
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken) {
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                const order = this.order(sortedBy, where === null || where === void 0 ? void 0 : where.price_between);
                const queryBuilder = productRepository.createQueryBuilder("product");
                // Add LEFT JOIN with Category
                queryBuilder.leftJoinAndSelect("product.categoryData", "category");
                queryBuilder.leftJoinAndSelect("product.brandData", "brand");
                // Apply field selection
                // Extract requested fields dynamically
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getProducts.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields
                        .filter((field) => field !== "shopProductStatus")
                        .map((field) => `product.${field}`);
                    queryBuilder.select([
                        ...fields,
                        "category.id",
                        "category.name",
                        "brand.id",
                        "brand.name",
                    ]);
                }
                // Group `OR` conditions for keyword search
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.orWhere("product.name ->> 'name_en' ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        })
                            .orWhere("product.description ->> 'name_en' ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        })
                            .orWhere("category.name ->> 'name_en' ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        });
                    }));
                }
                // Additional conditions with `AND` logic
                if (where === null || where === void 0 ? void 0 : where.status) {
                    queryBuilder.andWhere("product.status = :status", {
                        status: where.status,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.category_id) {
                    queryBuilder.andWhere("product.category_ids::jsonb @> :category_id", {
                        category_id: JSON.stringify([where.category_id]),
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.brand_id) {
                    queryBuilder.andWhere("product.brand_id = :brand_id", {
                        brand_id: where.brand_id,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.product_top) {
                    queryBuilder.andWhere("product.product_top = :product_top", {
                        product_top: where.product_top,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.product_vip) {
                    queryBuilder.andWhere("product.product_vip = :product_vip", {
                        product_vip: where.product_vip,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.price_between) {
                    console.log("object", where.price_between[0], where.price_between[1]);
                    queryBuilder
                        .andWhere("product.price >= :minPrice", {
                        minPrice: where.price_between[0],
                    })
                        .andWhere("product.price <= :maxPrice", {
                        maxPrice: where.price_between[1],
                    });
                }
                if ((where === null || where === void 0 ? void 0 : where.quantity) && (where === null || where === void 0 ? void 0 : where.quantity) > 0) {
                    queryBuilder.andWhere("product.quantity >= :quantity", {
                        quantity: 1,
                    });
                }
                else if ((where === null || where === void 0 ? void 0 : where.quantity) == 0) {
                    queryBuilder.andWhere("product.quantity <= :quantity", {
                        quantity: 0,
                    });
                }
                if (((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.startDate) &&
                    ((_d = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _d === void 0 ? void 0 : _d.endDate)) {
                    queryBuilder.andWhere("DATE(product.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: where.createdAtBetween.endDate,
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
                const [products, total] = yield queryBuilder.getManyAndCount();
                console.log({ products });
                return (0, success_handler_1.handleSuccessWithTotalData)(products, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getBestSellingProducts(_b, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, }, info // Pass the GraphQL `info` object
        ) {
            const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
            try {
                const queryBuilder = productRepository.createQueryBuilder("product");
                // Apply field selection
                // Extract requested fields dynamically
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getProducts.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields
                        .filter((field) => field !== "shopProductStatus")
                        .map((field) => `product.${field}`);
                    queryBuilder.select(fields);
                }
                // Pagination and sorting
                queryBuilder.take(limit).orderBy({ sell_count: "DESC" });
                if ((selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) <= 0) {
                    const _total = yield queryBuilder.getCount();
                    return (0, success_handler_1.handleSuccessWithTotalData)([], _total);
                }
                // Apply shop-specific logic if a shop token exists
                try {
                    const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                    const shopId = shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id; // Extract shop ID if token is valid
                    if (shopId) {
                        queryBuilder.leftJoinAndSelect("product.shopProducts", "shopProduct", "shopProduct.shop_id = :shopId", { shopId: shopId });
                    }
                }
                catch (error) { }
                const [products, total] = yield queryBuilder.getManyAndCount();
                products.forEach((product) => {
                    if (product.shopProducts && product.shopProducts.length > 0) {
                        product.shopProductStatus = product.shopProducts[0].shopProductStatus;
                    }
                    else {
                        product.shopProductStatus = null;
                    }
                });
                return (0, success_handler_1.handleSuccessWithTotalData)(products, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getSimilarProducts(_b, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, req, }, info // Pass the GraphQL `info` object
        ) {
            var _c;
            const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
            try {
                const queryBuilder = productRepository.createQueryBuilder("product");
                // Apply field selection
                // Extract requested fields dynamically
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getProducts.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields
                        .filter((field) => field !== "shopProductStatus")
                        .map((field) => `product.${field}`);
                    queryBuilder.select(fields);
                }
                // Apply shop-specific logic if a shop token exists
                try {
                    const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                    const shopId = shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id; // Extract shop ID if token is valid
                    if (shopId) {
                        queryBuilder.leftJoinAndSelect("product.shopProducts", "shopProduct", "shopProduct.shop_id = :shopId", { shopId: shopId });
                    }
                }
                catch (error) { }
                if (where === null || where === void 0 ? void 0 : where.product_id) {
                    const _queryBuilder = productRepository.createQueryBuilder("product");
                    const product = yield _queryBuilder
                        .select(["product.category_ids"])
                        .where("product.id = :productId", { productId: where === null || where === void 0 ? void 0 : where.product_id })
                        .getOne();
                    if (product && !((_c = product === null || product === void 0 ? void 0 : product.category_ids) === null || _c === void 0 ? void 0 : _c.length)) {
                        return (0, success_handler_1.handleSuccessWithTotalData)([], 0);
                    }
                    queryBuilder.andWhere("product.category_ids::jsonb @> :category_ids", {
                        category_ids: JSON.stringify((product === null || product === void 0 ? void 0 : product.category_ids) || []),
                    });
                    for (const categoryId of (product === null || product === void 0 ? void 0 : product.category_ids) || []) {
                        queryBuilder.andWhere((qb) => {
                            qb.where("product.category_ids::jsonb @> :category_id", {
                                category_id: JSON.stringify(categoryId),
                            });
                        });
                    }
                }
                // Pagination and sorting
                queryBuilder
                    .addOrderBy("RANDOM()")
                    // .skip((page - 1) * limit)
                    .take(limit);
                if ((selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) <= 0) {
                    const _total = yield queryBuilder.getCount();
                    return (0, success_handler_1.handleSuccessWithTotalData)([], _total);
                }
                const [products, total] = yield queryBuilder.getManyAndCount();
                products.forEach((product) => {
                    if (product.shopProducts && product.shopProducts.length > 0) {
                        product.shopProductStatus = product.shopProducts[0].shopProductStatus;
                    }
                    else {
                        product.shopProductStatus = null;
                    }
                });
                return (0, success_handler_1.handleSuccessWithTotalData)(products, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static searchProducts(_b) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }) {
            const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
            try {
                const order = this.order(sortedBy);
                const queryBuilder = productRepository.createQueryBuilder("product");
                queryBuilder.select("product.id", "product.name");
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.where(new typeorm_1.Brackets((qb) => {
                        qb.where("product.name ->> 'name_en' ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        });
                    }));
                }
                // Pagination and sorting
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
                    .orderBy(order);
                const [products, total] = yield queryBuilder.getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(products, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getProduct(_b) {
        return __awaiter(this, arguments, void 0, function* ({ id, }) {
            var _c;
            const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
            try {
                // Fetch product with category_ids
                let product = yield productRepository.findOne({ where: { id } });
                if (!product) {
                    return (0, error_handler_1.handleError)("Product not found", 404, null);
                }
                if ((_c = product === null || product === void 0 ? void 0 : product.category_ids) === null || _c === void 0 ? void 0 : _c.length) {
                    // Use QueryBuilder to fetch related categories
                    const categories = yield (0, typeorm_1.getRepository)(category_1.Category)
                        .createQueryBuilder("category")
                        .where("category.id IN (:...ids)", { ids: product.category_ids })
                        .getMany();
                    // Sort categories to match the order of `category_ids`
                    const sortedCategories = product.category_ids.map((id) => categories.find((category) => category.id === id));
                    product = Object.assign(Object.assign({}, product), { categories: sortedCategories });
                }
                return (0, success_handler_1.handleSuccess)(product);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    // Map `sortedBy` enum to TypeORM order format
    static order(sortedBy, price = [0]) {
        // if (price.length > 1) {
        //   return { "product.price": "DESC" };
        // }
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
                return { "product.created_at": "DESC" }; // Default order
        }
    }
}
exports.ProductService = ProductService;
_a = ProductService;
ProductService.findCategoryParents = (categoryId_1, ...args_1) => __awaiter(void 0, [categoryId_1, ...args_1], void 0, function* (categoryId, categoryIds = [] // Pass an accumulator array
) {
    try {
        const categoryRepository = (0, typeorm_1.getRepository)(category_1.Category);
        const category = yield categoryRepository.findOne({
            where: { id: categoryId },
        });
        if (category) {
            categoryIds.push(category.id); // Add the current category ID
            if (category.parent_id) {
                // Recursive call with the accumulator array
                yield _a.findCategoryParents(category.parent_id, categoryIds);
            }
        }
        return categoryIds; // Return the accumulated array
    }
    catch (error) {
        console.error("Error finding parent categories:", error);
        return categoryIds; // Return whatever is accumulated so far
    }
});

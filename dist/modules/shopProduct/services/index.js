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
exports.ShopProductService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const types_1 = require("../types");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const baseType_1 = require("../../../utils/base/baseType");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const product_1 = require("../../product");
const category_1 = require("../../category");
const entity_2 = require("../../shop/entity");
class ShopProductService {
    static createShopProduct(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopProductRepository = (0, typeorm_1.getRepository)(entity_1.ShopProduct);
            const productRepository = (0, typeorm_1.getRepository)(product_1.Product);
            const shopRepository = (0, typeorm_1.getRepository)(entity_2.Shop);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                if (!data.quantity || !data.product_id) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                const product = yield productRepository.findOne({
                    where: { id: data.product_id },
                });
                if (!product) {
                    return (0, error_handler_1.handleError)("Product not found.", 404, null);
                }
                const shop = yield shopRepository.findOne({
                    where: { id: shopDataFromToken.id },
                });
                if (!shop)
                    return (0, error_handler_1.handleError)("Shop not found.", 404, null);
                if ((shop === null || shop === void 0 ? void 0 : shop.shop_vip) && shop.shop_vip < product.product_vip)
                    return (0, error_handler_1.handleError)(`You cannot apply this product VIP [${product.product_vip}] because you are in [${shop.shop_vip}].`, 404, null);
                const existShopProduct = yield shopProductRepository.findOne({
                    where: {
                        product_id: data.product_id,
                        shop_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id,
                    },
                });
                if (existShopProduct) {
                    if ((existShopProduct === null || existShopProduct === void 0 ? void 0 : existShopProduct.shopProductStatus) === (types_1.ShopProductStatus === null || types_1.ShopProductStatus === void 0 ? void 0 : types_1.ShopProductStatus.ON_SHELF))
                        return (0, error_handler_1.handleError)("This product already in your shop.", 402, null);
                    shopProductRepository.merge(existShopProduct, Object.assign(Object.assign({}, data), { shop_id: shopDataFromToken.id, shopProductStatus: types_1.ShopProductStatus === null || types_1.ShopProductStatus === void 0 ? void 0 : types_1.ShopProductStatus.ON_SHELF }));
                    const updatedShopProduct = yield shopProductRepository.save(existShopProduct);
                    return (0, success_handler_1.handleSuccess)(updatedShopProduct);
                }
                const newShopProduct = shopProductRepository.create(Object.assign(Object.assign({}, data), { created_by: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id, shop_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id }));
                const savedShopProduct = yield shopProductRepository.save(newShopProduct);
                return (0, success_handler_1.handleSuccess)(savedShopProduct);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static createShopProducts(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopProductRepository = (0, typeorm_1.getRepository)(entity_1.ShopProduct);
            const productRepository = (0, typeorm_1.getRepository)(product_1.Product);
            const shopRepository = (0, typeorm_1.getRepository)(entity_2.Shop);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shop = yield shopRepository.findOne({
                    where: { id: shopDataFromToken.id },
                });
                if (!shop)
                    return (0, error_handler_1.handleError)("Shop not found.", 404, null);
                // Get shop and products in parallel
                const [products] = yield Promise.all([
                    productRepository.find({
                        where: {
                            id: (0, typeorm_1.In)(data.map((item) => item.product_id)),
                        },
                    }),
                ]);
                const productsAvailability = products.filter((item) => {
                    return (shop === null || shop === void 0 ? void 0 : shop.shop_vip) && shop.shop_vip >= item.product_vip;
                });
                if (productsAvailability.length === 0) {
                    return (0, error_handler_1.handleError)("No products were added - some may already exist in your shop.", 402, null);
                }
                // Check for existing shop products
                const existingShopProducts = yield shopProductRepository.find({
                    where: {
                        product_id: (0, typeorm_1.In)(productsAvailability.map((item) => item.id)),
                        shop_id: shopDataFromToken.id,
                    },
                });
                const existingProductMap = new Map(existingShopProducts.map((ep) => [ep.product_id, ep]));
                // Process all items in parallel
                const results = yield Promise.all(productsAvailability.map((item) => __awaiter(this, void 0, void 0, function* () {
                    const existingShopProduct = existingProductMap.get(item.id);
                    if (existingShopProduct) {
                        if (existingShopProduct.shopProductStatus ===
                            types_1.ShopProductStatus.ON_SHELF) {
                            return null; // Skip existing products
                        }
                        shopProductRepository.merge(existingShopProduct, {
                            product_id: item.id,
                            quantity: item.quantity || 0,
                            shop_id: shopDataFromToken.id,
                            shopProductStatus: types_1.ShopProductStatus.ON_SHELF,
                        });
                        return yield shopProductRepository.save(existingShopProduct);
                    }
                    else {
                        const newShopProduct = shopProductRepository.create({
                            product_id: item.id,
                            quantity: item.quantity || 0,
                            created_by: shopDataFromToken.id,
                            shop_id: shopDataFromToken.id,
                            shopProductStatus: types_1.ShopProductStatus.ON_SHELF,
                        });
                        return yield shopProductRepository.save(newShopProduct);
                    }
                })));
                // Filter out null values (skipped products)
                const successfulResults = results.filter(Boolean);
                if (successfulResults.length === 0) {
                    return (0, error_handler_1.handleError)("No products were added - some may already exist in your shop.", 402, null);
                }
                return (0, success_handler_1.handleSuccessWithTotalData)([], successfulResults.length);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static createShopProductsWithCategory(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopProductRepository = (0, typeorm_1.getRepository)(entity_1.ShopProduct);
            const productRepository = (0, typeorm_1.getRepository)(product_1.Product);
            const shopRepository = (0, typeorm_1.getRepository)(entity_2.Shop);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shop = yield shopRepository.findOne({
                    where: { id: shopDataFromToken.id },
                });
                if (!shop)
                    return (0, error_handler_1.handleError)("Shop not found.", 404, null);
                let results = [];
                let continues = true;
                const pageSize = 1000;
                let page = 1;
                while (continues) {
                    // Get shop and products in parallel
                    const [products] = yield Promise.all([
                        productRepository
                            .createQueryBuilder("product")
                            .where("product.category_ids::jsonb @> :category_id", {
                            category_id: JSON.stringify([data.category_id]),
                        })
                            .orderBy("product.created_at", "ASC")
                            .skip((page - 1) * pageSize)
                            .take(pageSize)
                            .getMany(),
                    ]);
                    if (products.length === 0) {
                        continues = false;
                        break;
                    }
                    const productsAvailability = products.filter((item) => {
                        if (item && (shop === null || shop === void 0 ? void 0 : shop.shop_vip) && shop.shop_vip >= item.product_vip) {
                            return item;
                        }
                    });
                    // Check for existing shop products
                    const existingShopProducts = yield shopProductRepository.find({
                        where: {
                            product_id: (0, typeorm_1.In)(productsAvailability.map((item) => item.id)),
                            shop_id: shopDataFromToken.id,
                        },
                    });
                    const existingProductMap = new Map(existingShopProducts.map((ep) => [ep.product_id, ep]));
                    // Process all items in parallel
                    const _results = yield Promise.all(productsAvailability.map((item) => __awaiter(this, void 0, void 0, function* () {
                        const existingShopProduct = existingProductMap.get(item.id);
                        if (existingShopProduct) {
                            if (existingShopProduct.shopProductStatus ===
                                types_1.ShopProductStatus.ON_SHELF) {
                                return null; // Skip existing products
                            }
                            shopProductRepository.merge(existingShopProduct, {
                                product_id: item.id,
                                quantity: item.quantity || 0,
                                shop_id: shopDataFromToken.id,
                                shopProductStatus: types_1.ShopProductStatus.ON_SHELF,
                            });
                            return yield shopProductRepository.save(existingShopProduct);
                        }
                        else {
                            const newShopProduct = shopProductRepository.create({
                                product_id: item.id,
                                quantity: item.quantity || 0,
                                created_by: shopDataFromToken.id,
                                shop_id: shopDataFromToken.id,
                                shopProductStatus: types_1.ShopProductStatus.ON_SHELF,
                            });
                            return yield shopProductRepository.save(newShopProduct);
                        }
                    })));
                    results.push(..._results);
                    page++;
                }
                // Filter out null values (skipped products)
                const successfulResults = results.filter(Boolean);
                if (successfulResults.length === 0) {
                    return (0, error_handler_1.handleError)("No products were added - some may already exist in your shop.", 402, null);
                }
                return (0, success_handler_1.handleSuccessWithTotalData)([], successfulResults.length);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static createShopProductsWithVIPLevel(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopProductRepository = (0, typeorm_1.getRepository)(entity_1.ShopProduct);
            const productRepository = (0, typeorm_1.getRepository)(product_1.Product);
            const shopRepository = (0, typeorm_1.getRepository)(entity_2.Shop);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shop = yield shopRepository.findOne({
                    where: { id: shopDataFromToken.id },
                });
                if (!shop)
                    return (0, error_handler_1.handleError)("Shop not found.", 404, null);
                if (!shop)
                    return (0, error_handler_1.handleError)("Shop not found.", 404, null);
                if ((shop === null || shop === void 0 ? void 0 : shop.shop_vip) && (shop === null || shop === void 0 ? void 0 : shop.shop_vip) < data.vip)
                    return (0, error_handler_1.handleError)(`You cannot apply these product VIP [${data.vip}] because you are in [${shop.shop_vip}].`, 404, null);
                let results = [];
                let continues = true;
                const pageSize = 1000;
                let page = 1;
                while (continues) {
                    // Get shop and products in parallel
                    const [products] = yield Promise.all([
                        productRepository
                            .createQueryBuilder("product")
                            .where("product.product_vip = :vip", {
                            vip: data.vip,
                        })
                            .orderBy("product.created_at", "ASC")
                            .skip((page - 1) * pageSize)
                            .take(pageSize)
                            .getMany(),
                    ]);
                    if (products.length === 0) {
                        continues = false;
                        break;
                    }
                    const productsAvailability = products.filter((item) => {
                        if (item && (shop === null || shop === void 0 ? void 0 : shop.shop_vip) && shop.shop_vip >= item.product_vip) {
                            return item;
                        }
                    });
                    // Check for existing shop products
                    const existingShopProducts = yield shopProductRepository.find({
                        where: {
                            product_id: (0, typeorm_1.In)(productsAvailability.map((item) => item.id)),
                            shop_id: shopDataFromToken.id,
                        },
                    });
                    const existingProductMap = new Map(existingShopProducts.map((ep) => [ep.product_id, ep]));
                    // Process all items in parallel
                    const _results = yield Promise.all(productsAvailability.map((item) => __awaiter(this, void 0, void 0, function* () {
                        const existingShopProduct = existingProductMap.get(item.id);
                        if (existingShopProduct) {
                            if (existingShopProduct.shopProductStatus ===
                                types_1.ShopProductStatus.ON_SHELF) {
                                return null; // Skip existing products
                            }
                            shopProductRepository.merge(existingShopProduct, {
                                product_id: item.id,
                                quantity: item.quantity || 0,
                                shop_id: shopDataFromToken.id,
                                shopProductStatus: types_1.ShopProductStatus.ON_SHELF,
                            });
                            return yield shopProductRepository.save(existingShopProduct);
                        }
                        else {
                            const newShopProduct = shopProductRepository.create({
                                product_id: item.id,
                                quantity: item.quantity || 0,
                                created_by: shopDataFromToken.id,
                                shop_id: shopDataFromToken.id,
                                shopProductStatus: types_1.ShopProductStatus.ON_SHELF,
                            });
                            return yield shopProductRepository.save(newShopProduct);
                        }
                    })));
                    results.push(..._results);
                    page++;
                }
                // Filter out null values (skipped products)
                const successfulResults = results.filter(Boolean);
                if (successfulResults.length === 0) {
                    return (0, error_handler_1.handleError)("No products were added - some may already exist in your shop.", 402, null);
                }
                return (0, success_handler_1.handleSuccessWithTotalData)([], successfulResults.length);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateShopProduct(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const shopProductRepository = (0, typeorm_1.getRepository)(entity_1.ShopProduct);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopProduct = yield shopProductRepository.findOne({
                    where: { id: data.id, shop_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id },
                });
                if (!shopProduct) {
                    return (0, error_handler_1.handleError)("Product not found", 404, null);
                }
                shopProduct.updated_by = shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id;
                shopProductRepository.merge(shopProduct, data);
                const updatedShopProduct = yield shopProductRepository.save(shopProduct);
                return (0, success_handler_1.handleSuccess)(updatedShopProduct);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static deleteShopProduct(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const shopProductRepository = (0, typeorm_1.getRepository)(entity_1.ShopProduct);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopProduct = yield shopProductRepository.findOne({
                    where: { id: id, shop_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id },
                });
                if (!shopProduct) {
                    return (0, error_handler_1.handleError)("Product not found", 404, null);
                }
                shopProductRepository.merge(shopProduct, {
                    shopProductStatus: types_1.ShopProductStatus === null || types_1.ShopProductStatus === void 0 ? void 0 : types_1.ShopProductStatus.UN_SHELF,
                });
                const updatedShopProduct = yield shopProductRepository.save(shopProduct);
                // await shopProductRepository.remove(shopProduct);
                return (0, success_handler_1.handleSuccess)(updatedShopProduct);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getShopProducts(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }, info) {
            var _b, _c;
            const shopProductRepository = (0, typeorm_1.getRepository)(entity_1.ShopProduct);
            try {
                const order = this.order(sortedBy);
                const queryBuilder = shopProductRepository.createQueryBuilder("shopProduct");
                // Add LEFT JOIN with Product
                queryBuilder.leftJoinAndSelect("shopProduct.productData", "product");
                queryBuilder.leftJoinAndSelect("product.productTag", "productTag");
                // Select specific fields for both shopProduct and product
                queryBuilder.select([
                    // Fields from shopProduct
                    "shopProduct.id",
                    "shopProduct.quantity",
                    "shopProduct.status",
                    "shopProduct.created_at",
                    "shopProduct.product_id",
                    "shopProduct.sell_count",
                    "shopProduct.shopProductStatus",
                    // Specific fields from product
                    "product.id",
                    "product.name",
                    "product.price",
                    "product.cover_image",
                    "product.images",
                    "product.total_star",
                    "product.product_vip",
                    "product.product_top",
                    "productTag.id",
                    "productTag.text_rich",
                    "productTag.local_title",
                    "productTag.text_rich",
                    "productTag.local_title",
                    "productTag.content",
                    "productTag.prompt_tag_text",
                    "productTag.footer_text",
                    "productTag.header_text",
                ]);
                // Add keyword filter
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("product.name ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        })
                            .orWhere("product.name ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        })
                            .orWhere("product.description ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        });
                    }));
                }
                queryBuilder.andWhere("shopProduct.shop_id = :shopId", {
                    shopId: where.shop_id,
                });
                // Add status filter
                if (where === null || where === void 0 ? void 0 : where.shopProductStatus) {
                    queryBuilder.andWhere("shopProduct.shopProductStatus = :shopProductStatus", {
                        shopProductStatus: where.shopProductStatus,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.status) {
                    queryBuilder.andWhere("shopProduct.status = :status", {
                        status: where.status,
                    });
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("shopProduct.created_at BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: where.createdAtBetween.endDate,
                    });
                }
                if ((where === null || where === void 0 ? void 0 : where.quantity) && (where === null || where === void 0 ? void 0 : where.quantity) > 0) {
                    queryBuilder.andWhere("shopProduct.quantity >= :quantity", {
                        quantity: 1,
                    });
                }
                else if ((where === null || where === void 0 ? void 0 : where.quantity) == 0) {
                    queryBuilder.andWhere("shopProduct.quantity <= :quantity", {
                        quantity: 0,
                    });
                }
                // Pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                const [shopProducts, total] = yield queryBuilder.getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(shopProducts, total);
            }
            catch (error) {
                console.log({ error });
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getShopProduct(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, }) {
            var _b, _c, _d, _e;
            const shopProductRepository = (0, typeorm_1.getRepository)(entity_1.ShopProduct);
            try {
                const queryBuilder = shopProductRepository
                    .createQueryBuilder("shopProduct")
                    .leftJoinAndSelect("shopProduct.productData", "product")
                    .leftJoinAndSelect("product.productTag", "productTag");
                queryBuilder.andWhere("shopProduct.id = :shopProductId", {
                    shopProductId: id,
                });
                let shopProduct = yield queryBuilder.getOne();
                if (!shopProduct) {
                    return (0, error_handler_1.handleError)("Product not found", 404, null);
                }
                if ((_c = (_b = shopProduct === null || shopProduct === void 0 ? void 0 : shopProduct.productData) === null || _b === void 0 ? void 0 : _b.category_ids) === null || _c === void 0 ? void 0 : _c.length) {
                    // Use QueryBuilder to fetch related categories
                    const categories = yield (0, typeorm_1.getRepository)(category_1.Category)
                        .createQueryBuilder("category")
                        .where("category.id IN (:...ids)", {
                        ids: (_d = shopProduct === null || shopProduct === void 0 ? void 0 : shopProduct.productData) === null || _d === void 0 ? void 0 : _d.category_ids,
                    })
                        .getMany();
                    // Sort categories to match the order of `category_ids`
                    const sortedCategories = (_e = shopProduct === null || shopProduct === void 0 ? void 0 : shopProduct.productData) === null || _e === void 0 ? void 0 : _e.category_ids.map((id) => categories.find((category) => category.id === id));
                    shopProduct = Object.assign(Object.assign({}, shopProduct), { productData: Object.assign(Object.assign({}, shopProduct === null || shopProduct === void 0 ? void 0 : shopProduct.productData), { categories: sortedCategories }) });
                }
                return (0, success_handler_1.handleSuccess)(shopProduct);
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    // Map `sortedBy` enum to TypeORM order format
    static order(sortedBy) {
        switch (sortedBy) {
            case baseType_1.BaseOrderByInput.created_at_ASC:
                return { "shopProduct.created_at": "ASC" };
            case baseType_1.BaseOrderByInput.created_at_DESC:
                return { "shopProduct.created_at": "DESC" };
            case baseType_1.BaseOrderByInput.updated_at_ASC:
                return { "shopProduct.updated_at": "ASC" };
            case baseType_1.BaseOrderByInput.updated_at_DESC:
                return { "shopProduct.updated_at": "DESC" };
            case baseType_1.BaseOrderByInput.sell_count_ASC:
                return { "shopProduct.sell_count": "ASC" };
            case baseType_1.BaseOrderByInput.sell_count_DESC:
                return { "shopProduct.sell_count": "DESC" };
            default:
                return { "shopProduct.created_at": "DESC" }; // Default order
        }
    }
}
exports.ShopProductService = ShopProductService;

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
exports.OrderService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const baseType_1 = require("../../../utils/base/baseType");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const entity_2 = require("../../order/entity");
const logistics_1 = require("../../logistics");
const entity_3 = require("../../product/entity");
const branding_1 = require("../../branding");
class OrderService {
    static getOrderDetails(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }) {
            var _b, _c, _d;
            const orderDetailRepository = (0, typeorm_1.getRepository)(entity_1.OrderDetail);
            try {
                const order = this.order(sortedBy);
                const queryBuilder = orderDetailRepository
                    .createQueryBuilder("order_detail")
                    .where({ is_active: true, order_no: where === null || where === void 0 ? void 0 : where.order_no });
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(order.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: (_d = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _d === void 0 ? void 0 : _d.endDate,
                    });
                }
                // Pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                const [orders, total] = yield queryBuilder.getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(orders, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static buildOrderDetailQuery(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, userType, }) {
            var _b, _c;
            const orderRepository = (0, typeorm_1.getRepository)(entity_1.OrderDetail);
            try {
                // Verify token based on user type
                let userDataFromToken;
                switch (userType) {
                    case "shop":
                        userDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                        break;
                    case "customer":
                        userDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                        break;
                    case "admin":
                        userDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                        break;
                    default:
                        return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                if (!userDataFromToken) {
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                // Build the base query
                // const queryBuilder = orderRepository
                //   .createQueryBuilder("order_detail")
                //   .leftJoinAndSelect("order_detail.customerData", "customerData")
                //   .leftJoinAndSelect("order_detail.shop", "shop")
                //   .leftJoinAndSelect("order.logistics", "logistics")
                //   .where({ is_active: true });
                const queryBuilder = orderRepository
                    .createQueryBuilder("order_detail")
                    .leftJoinAndMapOne("order_detail.order", entity_2.Order, // entity class
                "order", "order_detail.order_id::uuid = order.id")
                    .leftJoinAndMapOne("order_detail.logistics", logistics_1.Logistics, "logistics", "order.logistics_id = logistics.id")
                    .leftJoinAndMapOne("order_detail.product", entity_3.Product, "product", "order_detail.product_id::uuid = product.id")
                    .leftJoinAndSelect("order_detail.customerData", "customerData")
                    .leftJoinAndSelect("order_detail.shop", "shop")
                    .where("order_detail.is_active = :active", { active: true });
                // Add brand join for admin
                if (userType === "admin") {
                    queryBuilder.leftJoinAndMapOne("order_detail.brand", branding_1.Branding, "brand", "product.brand_id::uuid = brand.id");
                }
                // Add specific field selection for admin
                if (userType === "admin") {
                    queryBuilder.select([
                        // Order detail fields
                        "order_detail.id",
                        "order_detail.created_at",
                        "order_detail.updated_at",
                        "order_detail.order_no",
                        "order_detail.product_name",
                        "order_detail.product_cover_image",
                        "order_detail.sku",
                        "order_detail.spu",
                        "order_detail.quantity",
                        "order_detail.price",
                        "order_detail.discount",
                        "order_detail.profit",
                        "order_detail.shop_id",
                        "order_detail.product_id",
                        "order_detail.category_id",
                        "order_detail.order_id",
                        "order_detail.customer_id",
                        "order_detail.address_id",
                        "order_detail.status",
                        "order_detail.payment_status",
                        "order_detail.order_status",
                        "order_detail.inventory",
                        "order_detail.delivery_type",
                        "order_detail.sign_in_status",
                        "order_detail.canelled_by_shop",
                        "order_detail.updated_by_admin",
                        "order_detail.canelled_by_customer",
                        // Order fields
                        "order.id",
                        "order.order_no",
                        "order.total_quantity",
                        "order.total_products",
                        "order.total_price",
                        "order.total_discount",
                        "order.profit",
                        "order.expected_revenue",
                        "order.shop_id",
                        "order.customer_id",
                        "order.address_id",
                        "order.payment_slip",
                        "order.status",
                        "order.payment_status",
                        "order.order_status",
                        "order.delivery_type",
                        "order.sign_in_status",
                        "order.logistics_id",
                        "order.created_at",
                        "order.updated_at",
                        // Logistics fields
                        "logistics.id",
                        "logistics.company_name",
                        "logistics.logo",
                        "logistics.cost",
                        "logistics.transport_modes",
                        // Product fields
                        "product.id",
                        "product.name",
                        "product.description",
                        "product.image_url",
                        "product.images",
                        "product.origin_image_url",
                        "product.cover_image",
                        "product.price",
                        "product.market_price",
                        "product.discount",
                        "product.quantity",
                        "product.sku",
                        "product.spu",
                        "product.sell_count",
                        "product.total_star",
                        "product.total_comment",
                        // Brand fields
                        "brand.id",
                        "brand.name",
                        "brand.image",
                        // Customer fields
                        "customerData.id",
                        "customerData.firstName",
                        "customerData.lastName",
                        "customerData.phone_number",
                        "customerData.email",
                        // Shop fields
                        "shop.id",
                        "shop.store_name",
                        "shop.fullname",
                        "shop.phone_number",
                        "shop.email",
                    ]);
                }
                // Add user-specific conditions
                if (userType === "shop") {
                    queryBuilder.andWhere({ shop_id: userDataFromToken.id });
                }
                else if (userType === "customer") {
                    queryBuilder.andWhere({ customer_id: userDataFromToken.id });
                }
                // Add filters
                if (where === null || where === void 0 ? void 0 : where.order_no) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("order_detail.order_no = :order_no", {
                            order_no: `${where.order_no}`,
                        });
                    }));
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(order_detail.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: where.createdAtBetween.endDate,
                    });
                }
                // Add pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(this.order(sortedBy));
                // Execute the query
                const [orders, total] = yield queryBuilder.getManyAndCount();
                console.log("orders", orders);
                return (0, success_handler_1.handleSuccessWithTotalData)(orders, total);
            }
            catch (error) {
                console.error(`Error in ${userType}GetOrderDetails:`, error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    // Shop-specific orders
    static shopGetOrderDetails(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, }) {
            return this.buildOrderDetailQuery({
                where,
                page,
                limit,
                sortedBy,
                req,
                userType: "shop",
            });
        });
    }
    // Customer-specific orders
    static customerGetOrderDetails(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, }) {
            return this.buildOrderDetailQuery({
                where,
                page,
                limit,
                sortedBy,
                req,
                userType: "customer",
            });
        });
    }
    // Admin-specific orders
    static adminGetOrderDetails(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, }) {
            return this.buildOrderDetailQuery({
                where,
                page,
                limit,
                sortedBy,
                req,
                userType: "admin",
            });
        });
    }
    // Map `sortedBy` enum to TypeORM order format
    static order(sortedBy) {
        switch (sortedBy) {
            case baseType_1.BaseOrderByInput.created_at_ASC:
                return { "order_detail.created_at": "ASC" };
            case baseType_1.BaseOrderByInput.created_at_DESC:
                return { "order_detail.created_at": "DESC" };
            case baseType_1.BaseOrderByInput.updated_at_ASC:
                return { "order_detail.updated_at": "ASC" };
            case baseType_1.BaseOrderByInput.updated_at_DESC:
                return { "order_detail.updated_at": "DESC" };
            default:
                return { "order_detail.created_at": "DESC" }; // Default order
        }
    }
}
exports.OrderService = OrderService;

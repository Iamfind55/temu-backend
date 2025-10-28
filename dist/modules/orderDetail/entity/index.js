"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetail = void 0;
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../../utils/base/baseEntity");
const baseType_1 = require("../../../utils/base/baseType");
const types_1 = require("../../order/types");
const baseEnum_1 = require("../../../utils/base/baseEnum");
const customer_1 = require("../../customer");
const shop_1 = require("../../shop");
let OrderDetail = class OrderDetail extends baseEntity_1.BaseEntity {
};
exports.OrderDetail = OrderDetail;
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], OrderDetail.prototype, "order_no", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderDetail.prototype, "product_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderDetail.prototype, "product_cover_image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderDetail.prototype, "sku", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderDetail.prototype, "spu", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0.0 }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0.0 }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0.0 }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "profit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid", nullable: true }),
    __metadata("design:type", String)
], OrderDetail.prototype, "shop_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], OrderDetail.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderDetail.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], OrderDetail.prototype, "order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid", nullable: true }),
    __metadata("design:type", String)
], OrderDetail.prototype, "customer_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderDetail.prototype, "address_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: baseType_1.BaseStatus,
        default: baseType_1.BaseStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], OrderDetail.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.PaymentStatus,
        default: types_1.PaymentStatus.COMPLETED,
    }),
    __metadata("design:type", String)
], OrderDetail.prototype, "payment_status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.OrderStatus,
        default: types_1.OrderStatus.NO_PICKUP,
    }),
    __metadata("design:type", String)
], OrderDetail.prototype, "order_status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "json",
        nullable: true,
        default: {
            total_inventory: 0,
            my_inventory: 0,
        },
    }),
    __metadata("design:type", Object)
], OrderDetail.prototype, "inventory", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: baseEnum_1.EDeliveryType,
        default: baseEnum_1.EDeliveryType.DOOR_TO_DOOR,
    }),
    __metadata("design:type", String)
], OrderDetail.prototype, "delivery_type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.SignInStatus,
        default: types_1.SignInStatus.NOT_DELIVERY,
    }),
    __metadata("design:type", String)
], OrderDetail.prototype, "sign_in_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderDetail.prototype, "canelled_by_shop", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderDetail.prototype, "updated_by_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderDetail.prototype, "canelled_by_customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_1.Customer, (customer) => customer.order_details) // Define ManyToOne relationship
    ,
    (0, typeorm_1.JoinColumn)({ name: "customer_id" }) // Specify the join column
    ,
    __metadata("design:type", customer_1.Customer)
], OrderDetail.prototype, "customerData", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shop_1.Shop, (shop) => shop.order_details) // Define ManyToOne relationship
    ,
    (0, typeorm_1.JoinColumn)({ name: "shop_id" }) // Specify the join column
    ,
    __metadata("design:type", shop_1.Shop)
], OrderDetail.prototype, "shop", void 0);
exports.OrderDetail = OrderDetail = __decorate([
    (0, typeorm_1.Entity)()
], OrderDetail);

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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../../utils/base/baseEntity");
const baseType_1 = require("../../../utils/base/baseType");
const types_1 = require("../types");
const baseEnum_1 = require("../../../utils/base/baseEnum");
const customer_1 = require("../../customer");
const shop_1 = require("../../shop");
const logistics_1 = require("../../logistics");
let Order = class Order extends baseEntity_1.BaseEntity {
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Order.prototype, "order_no", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Order.prototype, "total_quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "total_products", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0.0 }),
    __metadata("design:type", Number)
], Order.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0.0 }),
    __metadata("design:type", Number)
], Order.prototype, "total_discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0.0 }),
    __metadata("design:type", Number)
], Order.prototype, "profit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0.0 }),
    __metadata("design:type", Number)
], Order.prototype, "expected_revenue", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "shop_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "customer_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "address_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "payment_slip", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: baseType_1.BaseStatus,
        default: baseType_1.BaseStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.PaymentStatus,
        default: types_1.PaymentStatus.COMPLETED,
    }),
    __metadata("design:type", String)
], Order.prototype, "payment_status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.OrderStatus,
        default: types_1.OrderStatus.NO_PICKUP,
    }),
    __metadata("design:type", String)
], Order.prototype, "order_status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: baseEnum_1.EDeliveryType,
        default: baseEnum_1.EDeliveryType.DOOR_TO_DOOR,
    }),
    __metadata("design:type", String)
], Order.prototype, "delivery_type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.SignInStatus,
        default: types_1.SignInStatus.NOT_DELIVERY,
    }),
    __metadata("design:type", String)
], Order.prototype, "sign_in_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "canelled_by_shop", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "updated_by_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "canelled_by_customer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid", nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "logistics_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_1.Customer, (customer) => customer.orders) // Define ManyToOne relationship
    ,
    (0, typeorm_1.JoinColumn)({ name: "customer_id" }) // Specify the join column
    ,
    __metadata("design:type", customer_1.Customer)
], Order.prototype, "customerData", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shop_1.Shop, (customer) => customer.orders) // Define ManyToOne relationship
    ,
    (0, typeorm_1.JoinColumn)({ name: "shop_id" }) // Specify the join column
    ,
    __metadata("design:type", shop_1.Shop)
], Order.prototype, "shop", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => logistics_1.Logistics, (logistics) => logistics.orders, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "logistics_id" }),
    __metadata("design:type", logistics_1.Logistics)
], Order.prototype, "logistics", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)()
], Order);

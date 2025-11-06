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
exports.Customer = void 0;
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../../utils/base/baseEntity");
const baseType_1 = require("../../../utils/base/baseType");
const uuid_1 = require("uuid");
const order_1 = require("../../order");
const wallet_1 = require("../../wallet");
const transactionHistory_1 = require("../../transactionHistory");
const orderDetail_1 = require("../../orderDetail");
const types_1 = require("../types");
const shopFollower_1 = require("../../shopFollower");
let Customer = class Customer extends baseEntity_1.BaseEntity {
};
exports.Customer = Customer;
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Customer.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: false }),
    __metadata("design:type", String)
], Customer.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Customer.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Customer.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "customer_address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: baseType_1.BaseStatus,
        default: baseType_1.BaseStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], Customer.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.CustomerType,
        default: types_1.CustomerType.FAKE,
    }),
    __metadata("design:type", String)
], Customer.prototype, "customer_type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "json",
        nullable: true,
        default: [
            {
                id: (0, uuid_1.v4)(),
                code: "USDT",
                bank_name: "",
                bank_account_name: "",
                bank_account_number: "",
                is_enable: true,
            },
            {
                id: (0, uuid_1.v4)(),
                code: "BANK",
                bank_name: "",
                bank_account_name: "",
                bank_account_number: "",
                is_enable: true,
            },
        ],
    }),
    __metadata("design:type", Array)
], Customer.prototype, "payment_method", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_1.Order, (order) => order.customerData) // Define OneToMany relationship
    ,
    __metadata("design:type", Array)
], Customer.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orderDetail_1.OrderDetail, (order_detail) => order_detail.customerData) // Define OneToMany relationship
    ,
    __metadata("design:type", Array)
], Customer.prototype, "order_details", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => wallet_1.Wallet, (wallet) => wallet.customer),
    __metadata("design:type", wallet_1.Wallet)
], Customer.prototype, "wallet", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transactionHistory_1.TransactionHistory, (transactionHistory) => transactionHistory.customer, { nullable: true }) // Define OneToMany relationship
    ,
    __metadata("design:type", Array)
], Customer.prototype, "transaction_histories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shopFollower_1.ShopFollower, (follower) => follower.customer),
    __metadata("design:type", Array)
], Customer.prototype, "followedShops", void 0);
exports.Customer = Customer = __decorate([
    (0, typeorm_1.Entity)()
], Customer);

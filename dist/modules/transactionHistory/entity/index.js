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
exports.TransactionHistory = void 0;
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../../utils/base/baseEntity");
const baseType_1 = require("../../../utils/base/baseType");
const types_1 = require("../types");
const customer_1 = require("../../customer");
const shop_1 = require("../../shop");
let TransactionHistory = class TransactionHistory extends baseEntity_1.BaseEntity {
};
exports.TransactionHistory = TransactionHistory;
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: types_1.ETransactionHistoryIdentifier.RECHARGE }),
    __metadata("design:type", String)
], TransactionHistory.prototype, "identifier", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0.0 }),
    __metadata("design:type", Number)
], TransactionHistory.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: types_1.ECoinType.BTC }),
    __metadata("design:type", String)
], TransactionHistory.prototype, "coin_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TransactionHistory.prototype, "shop_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TransactionHistory.prototype, "customer_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TransactionHistory.prototype, "wallet_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TransactionHistory.prototype, "payment_slip", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TransactionHistory.prototype, "account_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TransactionHistory.prototype, "rejected_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TransactionHistory.prototype, "approved_by", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: baseType_1.BaseStatus,
        default: baseType_1.BaseStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], TransactionHistory.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.ETransactionStatus,
        default: types_1.ETransactionStatus.PENDING,
    }),
    __metadata("design:type", String)
], TransactionHistory.prototype, "transaction_status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_1.Customer, (customer) => customer.transaction_histories, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: "customer_id" }),
    __metadata("design:type", customer_1.Customer)
], TransactionHistory.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shop_1.Shop, (shop) => shop.transaction_histories, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: "shop_id" }),
    __metadata("design:type", shop_1.Shop)
], TransactionHistory.prototype, "shop", void 0);
exports.TransactionHistory = TransactionHistory = __decorate([
    (0, typeorm_1.Entity)()
], TransactionHistory);

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
exports.Wallet = void 0;
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../../utils/base/baseEntity");
const baseType_1 = require("../../../utils/base/baseType");
const shop_1 = require("../../shop");
const customer_1 = require("../../customer");
let Wallet = class Wallet extends baseEntity_1.BaseEntity {
};
exports.Wallet = Wallet;
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Wallet.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0.0 }),
    __metadata("design:type", Number)
], Wallet.prototype, "total_balance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0.0 }),
    __metadata("design:type", Number)
], Wallet.prototype, "total_withdraw", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0.0 }),
    __metadata("design:type", Number)
], Wallet.prototype, "total_recharged", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0.0 }),
    __metadata("design:type", Number)
], Wallet.prototype, "total_frozen_balance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0.0 }),
    __metadata("design:type", Number)
], Wallet.prototype, "total_withdraw_able_balance", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Wallet.prototype, "shop_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Wallet.prototype, "customer_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: baseType_1.BaseStatus,
        default: baseType_1.BaseStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], Wallet.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => shop_1.Shop, (shop) => shop.wallet, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "shop_id" }),
    __metadata("design:type", shop_1.Shop)
], Wallet.prototype, "shop", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => customer_1.Customer, (customer) => customer.wallet, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "customer_id" }),
    __metadata("design:type", customer_1.Customer)
], Wallet.prototype, "customer", void 0);
exports.Wallet = Wallet = __decorate([
    (0, typeorm_1.Entity)()
], Wallet);

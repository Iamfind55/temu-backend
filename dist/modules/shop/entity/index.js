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
exports.Shop = void 0;
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../../utils/base/baseEntity");
const types_1 = require("../types");
const uuid_1 = require("uuid");
const wallet_1 = require("../../wallet");
const transactionHistory_1 = require("../../transactionHistory");
const order_1 = require("../../order");
const orderDetail_1 = require("../../orderDetail");
const shopFollower_1 = require("../../shopFollower");
let Shop = class Shop extends baseEntity_1.BaseEntity {
};
exports.Shop = Shop;
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Shop.prototype, "fullname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Shop.prototype, "store_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Shop.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Shop.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Shop.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false }),
    __metadata("design:type", String)
], Shop.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false, default: 0 }),
    __metadata("design:type", Number)
], Shop.prototype, "shop_star", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: false, default: 0 }),
    __metadata("design:type", Number)
], Shop.prototype, "shop_vip", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 20.0 }),
    __metadata("design:type", Number)
], Shop.prototype, "profit", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Shop.prototype, "otp", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Shop.prototype, "otpExpire_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Shop.prototype, "isOtpEnable", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Shop.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "json", // JSON column for complex objects
        nullable: true,
        default: {
            logo: "",
            cover: "",
        },
    }),
    __metadata("design:type", Object)
], Shop.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "json",
        nullable: true,
        default: {
            id_card_number: "",
            id_card_image_front: "",
            id_card_image_back: "",
            id_card_image: "",
        },
    }),
    __metadata("design:type", Object)
], Shop.prototype, "id_card_info", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }) // Allows long text and makes it optional
    ,
    __metadata("design:type", String)
], Shop.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }) // Allows long text and makes it optional
    ,
    __metadata("design:type", String)
], Shop.prototype, "shop_address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.ShopStatus,
        default: types_1.ShopStatus.PENDING,
    }),
    __metadata("design:type", String)
], Shop.prototype, "status", void 0);
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
], Shop.prototype, "payment_method", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => wallet_1.Wallet, (wallet) => wallet.shop),
    __metadata("design:type", wallet_1.Wallet)
], Shop.prototype, "wallet", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transactionHistory_1.TransactionHistory, (transactionHistory) => transactionHistory.shop, { nullable: true }) // Define OneToMany relationship
    ,
    __metadata("design:type", Array)
], Shop.prototype, "transaction_histories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_1.Order, (order) => order.shop) // Define OneToMany relationship
    ,
    __metadata("design:type", Array)
], Shop.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orderDetail_1.OrderDetail, (order_detail) => order_detail.shop) // Define OneToMany relationship
    ,
    __metadata("design:type", Array)
], Shop.prototype, "order_details", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "json",
        nullable: true,
        default: null,
    }),
    __metadata("design:type", Object)
], Shop.prototype, "request_vip_data", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shopFollower_1.ShopFollower, (follower) => follower.shop),
    __metadata("design:type", Array)
], Shop.prototype, "followers", void 0);
exports.Shop = Shop = __decorate([
    (0, typeorm_1.Entity)()
], Shop);

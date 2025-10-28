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
exports.ShopAddress = void 0;
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../../utils/base/baseEntity");
const baseType_1 = require("../../../utils/base/baseType");
let ShopAddress = class ShopAddress extends baseEntity_1.BaseEntity {
};
exports.ShopAddress = ShopAddress;
__decorate([
    (0, typeorm_1.Column)({
        type: "json", // JSON column for complex objects
        nullable: false,
        default: {
            id: 0,
            country: "",
            cn_country: "",
        },
    }),
    __metadata("design:type", Object)
], ShopAddress.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "json", // JSON column for complex objects
        nullable: true,
        default: {
            id: 0,
            state: "",
            cn_state: "",
        },
    }),
    __metadata("design:type", Object)
], ShopAddress.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "json", // JSON column for complex objects
        nullable: true,
        default: {
            id: 0,
            city: "",
            cn_city: "",
        },
    }),
    __metadata("design:type", Object)
], ShopAddress.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ShopAddress.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ShopAddress.prototype, "postal_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ShopAddress.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ShopAddress.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ShopAddress.prototype, "shop_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ShopAddress.prototype, "customer_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: baseType_1.BaseStatus,
        default: baseType_1.BaseStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], ShopAddress.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], ShopAddress.prototype, "is_used", void 0);
exports.ShopAddress = ShopAddress = __decorate([
    (0, typeorm_1.Entity)()
], ShopAddress);

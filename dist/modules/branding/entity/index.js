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
exports.Branding = void 0;
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../../utils/base/baseEntity");
const baseType_1 = require("../../../utils/base/baseType");
const product_1 = require("../../product");
let Branding = class Branding extends baseEntity_1.BaseEntity {
};
exports.Branding = Branding;
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: false,
    }),
    __metadata("design:type", String)
], Branding.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Branding.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: baseType_1.BaseStatus,
        default: baseType_1.BaseStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], Branding.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_1.Product, (product) => product.brandData),
    __metadata("design:type", Array)
], Branding.prototype, "products", void 0);
exports.Branding = Branding = __decorate([
    (0, typeorm_1.Entity)()
], Branding);

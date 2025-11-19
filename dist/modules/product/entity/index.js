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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../../utils/base/baseEntity");
const baseType_1 = require("../../../utils/base/baseType");
const branding_1 = require("../../branding");
const category_1 = require("../../category");
const productTag_1 = require("../../productTag");
const shopProduct_1 = require("../../shopProduct");
let Product = class Product extends baseEntity_1.BaseEntity {
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "opt_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "list_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "good_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "json",
        nullable: true,
    }),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: true,
    }),
    __metadata("design:type", String)
], Product.prototype, "origin_image_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "cover_image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", nullable: true, default: 0.0 }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", nullable: true, default: 0.0 }),
    __metadata("design:type", Number)
], Product.prototype, "market_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "price_str", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "show_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", nullable: true, default: 0.0 }),
    __metadata("design:type", Number)
], Product.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], Product.prototype, "discount_end", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 300 }),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "sku", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "spu", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "origin_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", nullable: false, default: 0.0 }),
    __metadata("design:type", Number)
], Product.prototype, "total_star", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "total_comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "product_vip", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "sell_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "star_store", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "json",
        nullable: true,
    }),
    __metadata("design:type", Array)
], Product.prototype, "category_ids", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "json",
        nullable: true,
    }),
    __metadata("design:type", Array)
], Product.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "brand_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => branding_1.Branding, (brand) => brand.products),
    (0, typeorm_1.JoinColumn)({ name: "brand_id" }) // Specify the join column
    ,
    __metadata("design:type", branding_1.Branding)
], Product.prototype, "brandData", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_1.Category, (category) => category.products),
    (0, typeorm_1.JoinColumn)({ name: "category_id" }) // Specify the join column
    ,
    __metadata("design:type", category_1.Category)
], Product.prototype, "categoryData", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: baseType_1.BaseStatus,
        default: baseType_1.BaseStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], Product.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: true }),
    __metadata("design:type", Boolean)
], Product.prototype, "recommended", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "product_top", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shopProduct_1.ShopProduct, (shopProduct) => shopProduct.productData) // Define OneToMany relationship
    ,
    __metadata("design:type", Array)
], Product.prototype, "shopProducts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => productTag_1.ProductTag, (productTag) => productTag.productData, {
        onDelete: "CASCADE",
        eager: true,
    }),
    __metadata("design:type", Array)
], Product.prototype, "productTag", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)()
], Product);

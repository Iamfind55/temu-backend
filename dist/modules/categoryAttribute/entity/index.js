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
exports.CategoryAttribute = void 0;
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../../utils/base/baseEntity");
const attribute_1 = require("../../attribute");
const entity_1 = require("../../category/entity");
let CategoryAttribute = class CategoryAttribute extends baseEntity_1.BaseEntity {
};
exports.CategoryAttribute = CategoryAttribute;
__decorate([
    (0, typeorm_1.ManyToOne)(() => attribute_1.Attribute, (attribute) => attribute.categoryAttributes, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "attribute_id" }),
    __metadata("design:type", attribute_1.Attribute)
], CategoryAttribute.prototype, "attribute", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entity_1.Category, (category) => category.categoryAttributes, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "category_id" }),
    __metadata("design:type", entity_1.Category)
], CategoryAttribute.prototype, "category", void 0);
exports.CategoryAttribute = CategoryAttribute = __decorate([
    (0, typeorm_1.Entity)()
], CategoryAttribute);

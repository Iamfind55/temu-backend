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
exports.Attribute = void 0;
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../../utils/base/baseEntity");
const entity_1 = require("../../attributeValue/entity");
const entity_2 = require("../../categoryAttribute/entity");
let Attribute = class Attribute extends baseEntity_1.BaseEntity {
};
exports.Attribute = Attribute;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attribute.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Attribute.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entity_1.AttributeValue, (value) => value.attribute),
    __metadata("design:type", Array)
], Attribute.prototype, "values", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entity_2.CategoryAttribute, (ca) => ca.attribute),
    __metadata("design:type", Array)
], Attribute.prototype, "categoryAttributes", void 0);
exports.Attribute = Attribute = __decorate([
    (0, typeorm_1.Entity)()
], Attribute);

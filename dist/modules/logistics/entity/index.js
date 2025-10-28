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
exports.Logistics = void 0;
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../../utils/base/baseEntity");
const baseEnum_1 = require("../../../utils/base/baseEnum");
const order_1 = require("../../order");
const baseType_1 = require("../../../utils/base/baseType");
let Logistics = class Logistics extends baseEntity_1.BaseEntity {
};
exports.Logistics = Logistics;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Logistics.prototype, "company_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Logistics.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0.0, nullable: true }),
    __metadata("design:type", Number)
], Logistics.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: baseType_1.BaseStatus,
        default: baseType_1.BaseStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], Logistics.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: baseEnum_1.ETransportMode,
        array: true,
        nullable: true,
    }),
    __metadata("design:type", Array)
], Logistics.prototype, "transport_modes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_1.Order, (order) => order.logistics),
    __metadata("design:type", order_1.Order)
], Logistics.prototype, "orders", void 0);
exports.Logistics = Logistics = __decorate([
    (0, typeorm_1.Entity)("logistics")
], Logistics);

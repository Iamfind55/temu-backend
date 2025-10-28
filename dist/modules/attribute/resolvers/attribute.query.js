"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attributeQuery = void 0;
const baseType_1 = require("../../../utils/base/baseType");
const services_1 = require("../services");
exports.attributeQuery = {
    getAttributes: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { where, page = 1, limit = 10, sortedBy = baseType_1.BaseOrderByInput.created_at_DESC, }) { return services_1.AttributeService.findAll({ where, page, limit, sortedBy }); }),
    getAttribute: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) { return services_1.AttributeService.findOne({ id }); }),
};

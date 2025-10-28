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
exports.customerMutation = void 0;
const services_1 = require("../services");
exports.customerMutation = {
    createCustomer: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.CustomerService.createCustomer({ data: data, req }); }),
    customerRegister: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.CustomerService.customerRegister({ data: data, req }); }),
    updateCustomer: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.CustomerService.updateCustomer({ data: data, req }); }),
    deleteCustomer: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { id }, { req }) { return services_1.CustomerService.deleteCustomer({ id, req }); }),
    customerLogin: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { where }, { req }) { return services_1.CustomerService.customerLogin({ where }); }),
    customerForgotPassword: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { email }, { req }) { return services_1.CustomerService.customerForgotPassword({ email }); }),
    customerResetPassword: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.CustomerService.customerResetPassword({ data: data, req }); }),
    updateCustomerInformation: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.CustomerService.updateCustomerInformation({ data: data, req }); }),
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddlewareService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
class AuthMiddlewareService {
    verifyStaffToken(req) {
        var _a;
        try {
            const token = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
            if (!token) {
                return null;
            }
            const decoded = jsonwebtoken_1.default.verify(token, config_1.config.staff_jwt_secret_key);
            return decoded;
        }
        catch (error) {
            console.error("Token verification failed:", error.message);
            throw new Error(error);
        }
    }
    verifyCustomerToken(req) {
        var _a;
        try {
            const token = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
            const decoded = jsonwebtoken_1.default.verify(token, config_1.config.customer_jwt_secret_key);
            return decoded;
        }
        catch (error) {
            console.error("Token verification failed:", error.message);
            throw new Error(error);
        }
    }
    verifyShopToken(req) {
        var _a;
        try {
            const token = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
            const decoded = jsonwebtoken_1.default.verify(token, config_1.config.shop_jwt_secret_key);
            return decoded;
        }
        catch (error) {
            console.error("Token verification failed:", error.message);
            return null;
            // throw new Error(error);
        }
    }
    verifyShopForgotPasswordToken(token) {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, config_1.config.shop_forgot_password_jwt_secret_key);
            return decoded;
        }
        catch (error) {
            console.error("Token verification failed:", error.message);
            throw new Error(error);
        }
    }
    genStaffToken(data) {
        try {
            // Generate JWT token
            const token = jsonwebtoken_1.default.sign({ id: data.id, role: data.role }, config_1.config.staff_jwt_secret_key, {
                expiresIn: "15d", // Token expiration time
            });
            return token;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    genShopToken(data) {
        try {
            // Generate JWT token
            const token = jsonwebtoken_1.default.sign({ id: data.id, status: data.status, type: "SHOP" }, config_1.config.shop_jwt_secret_key, {
                expiresIn: "15d", // Token expiration time
            });
            return token;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    genCustomerToken(data) {
        try {
            // Generate JWT token
            const token = jsonwebtoken_1.default.sign({ id: data.id, status: data.status, type: "CUSTOMER" }, config_1.config.customer_jwt_secret_key, {
                expiresIn: "15d", // Token expiration time
            });
            return token;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    genShopForgotPasswordToken(data) {
        try {
            // Generate JWT token
            const token = jsonwebtoken_1.default.sign({ id: data.id, status: data.status }, config_1.config.shop_forgot_password_jwt_secret_key, {
                expiresIn: "10m", // Token expiration time
            });
            return token;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.AuthMiddlewareService = AuthMiddlewareService;

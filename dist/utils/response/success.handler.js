"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSuccessWithTotalData = exports.handleSuccess = void 0;
const handleSuccess = (data, message) => {
    return {
        success: true,
        data,
        message: message,
        error: null,
    };
};
exports.handleSuccess = handleSuccess;
const handleSuccessWithTotalData = (data, total) => {
    return {
        success: true,
        total,
        data,
        error: null,
    };
};
exports.handleSuccessWithTotalData = handleSuccessWithTotalData;

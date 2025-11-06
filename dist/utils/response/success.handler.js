"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSuccessWithTotalData = exports.handleSuccess = exports.handleBoleanSuccess = void 0;
const handleBoleanSuccess = ({ data, message, }) => {
    return {
        success: true,
        data,
        message,
        error: null,
    };
};
exports.handleBoleanSuccess = handleBoleanSuccess;
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

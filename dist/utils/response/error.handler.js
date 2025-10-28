"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (message, code, details) => {
    return {
        success: false,
        error: {
            message,
            code,
            details,
        },
        data: null,
    };
};
exports.handleError = handleError;

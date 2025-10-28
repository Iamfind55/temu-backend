"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAddressData = void 0;
const loadAddressData = () => {
    try {
        const addressData = require("./addresses.json");
        return addressData;
    }
    catch (error) {
        console.error("Failed to load address data:", error.message);
        throw new Error("Unable to load address data.");
    }
};
exports.loadAddressData = loadAddressData;

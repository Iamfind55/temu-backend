"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopRequestStatus = exports.ShopStatus = exports.ShopRole = void 0;
var ShopRole;
(function (ShopRole) {
    ShopRole["Shop"] = "Shop";
    ShopRole["ADMIN"] = "ADMIN";
})(ShopRole || (exports.ShopRole = ShopRole = {}));
var ShopStatus;
(function (ShopStatus) {
    ShopStatus["PENDING"] = "PENDING";
    ShopStatus["ACTIVE"] = "ACTIVE";
    ShopStatus["FROZEN"] = "FROZEN";
    ShopStatus["INACTIVE"] = "INACTIVE";
})(ShopStatus || (exports.ShopStatus = ShopStatus = {}));
var ShopRequestStatus;
(function (ShopRequestStatus) {
    ShopRequestStatus["PENDING"] = "PENDING";
    ShopRequestStatus["APPROVED"] = "APPROVED";
    ShopRequestStatus["REJECTED"] = "REJECTED";
    ShopRequestStatus["FAILED"] = "FAILED";
})(ShopRequestStatus || (exports.ShopRequestStatus = ShopRequestStatus = {}));

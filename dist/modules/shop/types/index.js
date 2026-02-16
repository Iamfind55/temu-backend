"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopRequestStatus = exports.EShopAmountBalance = exports.EShopRechargeBalance = exports.EProfitVIP = exports.ShopStatus = exports.ShopRole = void 0;
var ShopRole;
(function (ShopRole) {
    ShopRole["Shop"] = "Shop";
    ShopRole["ADMIN"] = "ADMIN";
})(ShopRole || (exports.ShopRole = ShopRole = {}));
var ShopStatus;
(function (ShopStatus) {
    ShopStatus["PENDING"] = "PENDING";
    ShopStatus["ACTIVE"] = "ACTIVE";
    ShopStatus["APPROVED"] = "APPROVED";
    ShopStatus["FROZEN"] = "FROZEN";
    ShopStatus["INACTIVE"] = "INACTIVE";
})(ShopStatus || (exports.ShopStatus = ShopStatus = {}));
var EProfitVIP;
(function (EProfitVIP) {
    EProfitVIP[EProfitVIP["NORMOL"] = 25] = "NORMOL";
    EProfitVIP[EProfitVIP["VIP1"] = 35] = "VIP1";
    EProfitVIP[EProfitVIP["VIP2"] = 40] = "VIP2";
    EProfitVIP[EProfitVIP["VIP3"] = 45] = "VIP3";
})(EProfitVIP || (exports.EProfitVIP = EProfitVIP = {}));
var EShopRechargeBalance;
(function (EShopRechargeBalance) {
    EShopRechargeBalance[EShopRechargeBalance["NORMOL"] = 0] = "NORMOL";
    EShopRechargeBalance[EShopRechargeBalance["VIP1"] = 15000] = "VIP1";
    EShopRechargeBalance[EShopRechargeBalance["VIP2"] = 30000] = "VIP2";
    EShopRechargeBalance[EShopRechargeBalance["VIP3"] = 45000] = "VIP3";
})(EShopRechargeBalance || (exports.EShopRechargeBalance = EShopRechargeBalance = {}));
var EShopAmountBalance;
(function (EShopAmountBalance) {
    EShopAmountBalance[EShopAmountBalance["NORMOL"] = 0] = "NORMOL";
    EShopAmountBalance[EShopAmountBalance["VIP1"] = 1500] = "VIP1";
    EShopAmountBalance[EShopAmountBalance["VIP2"] = 3000] = "VIP2";
    EShopAmountBalance[EShopAmountBalance["VIP3"] = 4500] = "VIP3";
})(EShopAmountBalance || (exports.EShopAmountBalance = EShopAmountBalance = {}));
var ShopRequestStatus;
(function (ShopRequestStatus) {
    ShopRequestStatus["PENDING"] = "PENDING";
    ShopRequestStatus["APPROVED"] = "APPROVED";
    ShopRequestStatus["REJECTED"] = "REJECTED";
    ShopRequestStatus["FAILED"] = "FAILED";
})(ShopRequestStatus || (exports.ShopRequestStatus = ShopRequestStatus = {}));

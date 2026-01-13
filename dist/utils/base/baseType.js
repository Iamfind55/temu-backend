"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERolesStaff = exports.EUserType = exports.EDeposit = exports.BaseStatus = exports.BaseOrderByInput = void 0;
var BaseOrderByInput;
(function (BaseOrderByInput) {
    BaseOrderByInput["created_at_ASC"] = "created_at_ASC";
    BaseOrderByInput["created_at_DESC"] = "created_at_DESC";
    BaseOrderByInput["updated_at_ASC"] = "updated_at_ASC";
    BaseOrderByInput["updated_at_DESC"] = "updated_at_DESC";
    BaseOrderByInput["sell_count_DESC"] = "sell_count_DESC";
    BaseOrderByInput["sell_count_ASC"] = "sell_count_ASC";
    BaseOrderByInput["price_DESC"] = "price_DESC";
    BaseOrderByInput["price_ASC"] = "price_ASC";
    BaseOrderByInput["position_DESC"] = "position_DESC";
    BaseOrderByInput["position_ASC"] = "position_ASC";
})(BaseOrderByInput || (exports.BaseOrderByInput = BaseOrderByInput = {}));
var BaseStatus;
(function (BaseStatus) {
    BaseStatus["ACTIVE"] = "ACTIVE";
    BaseStatus["INACTIVE"] = "INACTIVE";
})(BaseStatus || (exports.BaseStatus = BaseStatus = {}));
var EDeposit;
(function (EDeposit) {
    EDeposit["PENDING"] = "pending";
    EDeposit["DRAFF"] = "draff";
    EDeposit["COMPLETED"] = "completed";
    EDeposit["DELETED"] = "deleted";
    EDeposit["REJECTED"] = "rejected";
})(EDeposit || (exports.EDeposit = EDeposit = {}));
var EUserType;
(function (EUserType) {
    EUserType["STAFF"] = "STAFF";
    EUserType["CUSTOMER"] = "CUSTOMER";
    EUserType["SHOP"] = "SHOP";
})(EUserType || (exports.EUserType = EUserType = {}));
var ERolesStaff;
(function (ERolesStaff) {
    ERolesStaff["ADMIN"] = "admin";
    ERolesStaff["SUPER_ADMIN"] = "supper admin";
    ERolesStaff["STAFF"] = "staff";
})(ERolesStaff || (exports.ERolesStaff = ERolesStaff = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETransactionStatus = exports.ECoinType = exports.ETransactionHistoryIdentifier = void 0;
var ETransactionHistoryIdentifier;
(function (ETransactionHistoryIdentifier) {
    ETransactionHistoryIdentifier["RECHARGE"] = "RECHARGE";
    ETransactionHistoryIdentifier["WITHDRAW"] = "WITHDRAW";
})(ETransactionHistoryIdentifier || (exports.ETransactionHistoryIdentifier = ETransactionHistoryIdentifier = {}));
var ECoinType;
(function (ECoinType) {
    ECoinType["ERC20"] = "ERC20";
    ECoinType["TRC20"] = "TRC20";
    ECoinType["BTC"] = "BTC";
})(ECoinType || (exports.ECoinType = ECoinType = {}));
var ETransactionStatus;
(function (ETransactionStatus) {
    ETransactionStatus["FAILED"] = "FAILED";
    ETransactionStatus["PENDING"] = "PENDING";
    ETransactionStatus["APPROVED"] = "APPROVED";
    ETransactionStatus["REJECTED"] = "REJECTED";
})(ETransactionStatus || (exports.ETransactionStatus = ETransactionStatus = {}));

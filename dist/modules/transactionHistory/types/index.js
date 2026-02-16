"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETransactionStatus = exports.ECoinType = exports.ETransactionHistoryIdentifier = void 0;
var ETransactionHistoryIdentifier;
(function (ETransactionHistoryIdentifier) {
    ETransactionHistoryIdentifier["RECHARGE"] = "RECHARGE";
    ETransactionHistoryIdentifier["WITHDRAW"] = "WITHDRAW";
    ETransactionHistoryIdentifier["DEPOSIT"] = "DEPOSIT";
})(ETransactionHistoryIdentifier || (exports.ETransactionHistoryIdentifier = ETransactionHistoryIdentifier = {}));
var ECoinType;
(function (ECoinType) {
    ECoinType["ETH"] = "ETH";
    ECoinType["TRX_USDT"] = "TRX/USDT";
    ECoinType["BTC"] = "BTC";
})(ECoinType || (exports.ECoinType = ECoinType = {}));
var ETransactionStatus;
(function (ETransactionStatus) {
    ETransactionStatus["FAILED"] = "FAILED";
    ETransactionStatus["PENDING"] = "PENDING";
    ETransactionStatus["APPROVED"] = "APPROVED";
    ETransactionStatus["REJECTED"] = "REJECTED";
})(ETransactionStatus || (exports.ETransactionStatus = ETransactionStatus = {}));

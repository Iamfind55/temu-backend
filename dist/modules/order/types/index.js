"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatus = exports.SignInStatus = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["NO_PICKUP"] = "NO_PICKUP";
    OrderStatus["PROCESSING"] = "PROCESSING";
    OrderStatus["PACKING"] = "PACKING";
    OrderStatus["SHIPPING"] = "SHIPPING";
    OrderStatus["CANCELLED"] = "CANCELLED";
    OrderStatus["SUCCESS"] = "SUCCESS";
    OrderStatus["FAILED"] = "FAILED";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var SignInStatus;
(function (SignInStatus) {
    SignInStatus["NOT_DELIVERY"] = "NOT_DELIVERY";
    SignInStatus["PACKING"] = "PACKING";
    SignInStatus["ON_THE_WAY"] = "ON_THE_WAY";
    SignInStatus["CANCELLED"] = "CANCELLED";
    SignInStatus["SUCCESS"] = "SUCCESS";
    SignInStatus["FAILED"] = "FAILED";
})(SignInStatus || (exports.SignInStatus = SignInStatus = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["FAILED"] = "FAILED";
    PaymentStatus["PROCESSING"] = "PROCESSING";
    PaymentStatus["COMPLETED"] = "COMPLETED";
    PaymentStatus["CANCELLED"] = "CANCELLED";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETransportMode = exports.EDeliveryType = void 0;
var EDeliveryType;
(function (EDeliveryType) {
    EDeliveryType["STANDARD"] = "STANDARD";
    EDeliveryType["EXPRESS"] = "EXPRESS";
    EDeliveryType["SAME_DAY"] = "SAME_DAY";
    EDeliveryType["NEXT_DAY"] = "NEXT_DAY";
    EDeliveryType["PICKUP"] = "PICKUP";
    EDeliveryType["DIGITAL"] = "DIGITAL";
    EDeliveryType["INTERNATIONAL"] = "INTERNATIONAL";
    EDeliveryType["FREE"] = "FREE";
    EDeliveryType["DOOR_TO_DOOR"] = "DOOR_TO_DOOR";
})(EDeliveryType || (exports.EDeliveryType = EDeliveryType = {}));
var ETransportMode;
(function (ETransportMode) {
    ETransportMode["AIR"] = "air";
    ETransportMode["SEA"] = "sea";
    ETransportMode["ROAD"] = "road";
    ETransportMode["RAIL"] = "rail";
    ETransportMode["WAREHOUSE"] = "warehouse";
    ETransportMode["PICKUP"] = "pickup";
})(ETransportMode || (exports.ETransportMode = ETransportMode = {}));

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const typeorm_1 = require("typeorm");
const baseType_1 = require("../../../utils/base/baseType");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const entity_1 = require("../entity");
const types_1 = require("../types");
const graphqlUtils_1 = require("../../../utils/graphqlUtils");
const pubsub_1 = __importDefault(require("../../../utils/pubsub"));
class NotificationService {
    static createNotification(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, }) {
            const notificationRepository = (0, typeorm_1.getRepository)(entity_1.Notification);
            try {
                const newNotification = notificationRepository.create(Object.assign({}, data));
                const savedNotification = yield notificationRepository.save(newNotification);
                if (data.notification_type === types_1.INotificationType.ORDER) {
                    // Publish to:
                    // 1. Shop-specific channel
                    pubsub_1.default.publish(`NEW_ORDER_SUBSCRIBE_${data.shop_id}`, {
                        subscribeNewOrder: data,
                    });
                    // 2. Global channel (optional, for admin dashboards)
                    pubsub_1.default.publish("NEW_ORDER_SUBSCRIBE", {
                        subscribeNewOrder: data,
                    });
                }
                else if ([types_1.INotificationType.RECHARGE, types_1.INotificationType === null || types_1.INotificationType === void 0 ? void 0 : types_1.INotificationType.WITHDRAWAL].includes(data.notification_type)) {
                    // 2. Global channel (optional, for admin dashboards)
                    pubsub_1.default.publish("NEW_TRANSACTION_SUBSCRIBE", {
                        transactionSubscribe: data,
                    });
                }
                else if ((data === null || data === void 0 ? void 0 : data.notification_type) === types_1.INotificationType.SHOP_REQUEST_VIP) {
                    // 2. Global channel (optional, for admin dashboards)
                    pubsub_1.default.publish("NEW_SHOP_REQUEST_VIP_SUBSCRIBE", {
                        subscribeNewRequestVIP: data,
                    });
                }
                return (0, success_handler_1.handleSuccess)(savedNotification);
            }
            catch (error) {
                console.log({ error });
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopReadNotification(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, id, }) {
            const notificationRepository = (0, typeorm_1.getRepository)(entity_1.Notification);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                const existNotification = yield notificationRepository.findOne({
                    where: { id, shop_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id },
                });
                if (!existNotification)
                    return (0, error_handler_1.handleError)("Notification not found", 404, null);
                if (existNotification.is_read)
                    return (0, success_handler_1.handleSuccess)(existNotification);
                notificationRepository.merge(existNotification, { is_read: true });
                const updatedNotification = yield notificationRepository.save(existNotification);
                return (0, success_handler_1.handleSuccess)(updatedNotification);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetNotifications(_a, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ req, where, page, limit, sortedBy, }, info) {
            var _b, _c, _d;
            const notificationRepository = (0, typeorm_1.getRepository)(entity_1.Notification);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                const order = this.order(sortedBy);
                const queryBuilder = notificationRepository
                    .createQueryBuilder("notification")
                    .where({ is_active: true, shop_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id });
                // Apply field selection
                // Extract requested fields dynamically
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "notifications.data");
                if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                    const fields = selectFields.map((field) => `notification.${field}`);
                    queryBuilder.select(fields);
                }
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("notification.title ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        }).orWhere("notification.description ILIKE :keyword", {
                            keyword: `%${where.keyword}%`,
                        });
                    }));
                }
                if (where.is_read != null)
                    queryBuilder.andWhere("notification.is_read = :is_read", {
                        is_read: where.is_read,
                    });
                if (where === null || where === void 0 ? void 0 : where.notification_type) {
                    queryBuilder.andWhere("notification.notification_type = :notification_type", {
                        notification_type: where.notification_type,
                    });
                }
                if (where === null || where === void 0 ? void 0 : where.status) {
                    queryBuilder.andWhere("notification.status = :status", {
                        status: where.status,
                    });
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(notification.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: (_d = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _d === void 0 ? void 0 : _d.endDate,
                    });
                }
                // Pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                if ((selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) <= 0) {
                    const _total = yield queryBuilder.getCount();
                    return (0, success_handler_1.handleSuccessWithTotalData)([], _total);
                }
                const [notifications, total] = yield queryBuilder.getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(notifications, total);
            }
            catch (error) {
                console.error({ error });
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    // Map `sortedBy` enum to TypeORM order format
    static order(sortedBy) {
        switch (sortedBy) {
            case baseType_1.BaseOrderByInput.created_at_ASC:
                return { "notification.created_at": "ASC" };
            case baseType_1.BaseOrderByInput.created_at_DESC:
                return { "notification.created_at": "DESC" };
            case baseType_1.BaseOrderByInput.updated_at_ASC:
                return { "notification.updated_at": "ASC" };
            case baseType_1.BaseOrderByInput.updated_at_DESC:
                return { "notification.updated_at": "DESC" };
            default:
                return { "notification.created_at": "DESC" }; // Default order
        }
    }
}
exports.NotificationService = NotificationService;

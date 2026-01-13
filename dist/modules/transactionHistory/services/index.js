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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHistoryService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const typeorm_1 = require("typeorm");
const baseType_1 = require("../../../utils/base/baseType");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const entity_1 = require("../entity");
const types_1 = require("../types");
const wallet_1 = require("../../wallet");
const order_1 = require("../../order");
const orderDetail_1 = require("../../orderDetail");
class TransactionHistoryService {
    static adminGetTransactionHistories(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, }) {
            var _b, _c, _d;
            const transactionHistoryRepository = (0, typeorm_1.getRepository)(entity_1.TransactionHistory);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const order = this.order(sortedBy);
                const queryBuilder = transactionHistoryRepository
                    .createQueryBuilder("transaction_history")
                    .leftJoinAndSelect("transaction_history.customer", "customer")
                    .leftJoinAndSelect("transaction_history.shop", "shop")
                    .where("transaction_history.is_active = :isActive", { isActive: true });
                if (where === null || where === void 0 ? void 0 : where.coin_type) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("transaction_history.coin_type = :coin_type", {
                            coin_type: `${where.coin_type}`,
                        });
                    }));
                }
                // Only filter by identifier if provided, otherwise return all
                if (where === null || where === void 0 ? void 0 : where.identifier) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("transaction_history.identifier = :identifier", {
                            identifier: where.identifier,
                        });
                    }));
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(transaction_history.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: (_d = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _d === void 0 ? void 0 : _d.endDate,
                    });
                }
                // Pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                const [data, total] = yield queryBuilder.getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(data, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getTransactionHistories(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }) {
            var _b, _c, _d;
            const transactionHistoryRepository = (0, typeorm_1.getRepository)(entity_1.TransactionHistory);
            try {
                if (!(where === null || where === void 0 ? void 0 : where.shop_id) && !(where === null || where === void 0 ? void 0 : where.customer_id)) {
                    return {
                        message: "Validation Error: Either shop_id or customer_id must be provided.",
                        code: 400,
                    };
                }
                const userIdField = where.shop_id !== undefined
                    ? { shop_id: where.shop_id }
                    : { customer_id: where.customer_id };
                const order = this.order(sortedBy);
                const queryBuilder = transactionHistoryRepository
                    .createQueryBuilder("transaction_history")
                    .where({ is_active: true })
                    .andWhere(userIdField);
                if (where === null || where === void 0 ? void 0 : where.coin_type) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("transaction_history.coin_type = :coin_type", {
                            coin_type: `${where.coin_type}`,
                        });
                    }));
                }
                if (where === null || where === void 0 ? void 0 : where.identifier) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("transaction_history.identifier = :identifier", {
                            identifier: `${where.identifier}`,
                        });
                    }));
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(transaction_history.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: (_d = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _d === void 0 ? void 0 : _d.endDate,
                    });
                }
                // Pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                const [data, total] = yield queryBuilder.getManyAndCount();
                return {
                    data: { data, total },
                    code: 200,
                    message: config_1.config.message.success,
                };
            }
            catch (error) {
                return {
                    message: config_1.config.message.internal_server_error,
                    code: 500,
                };
            }
        });
    }
    static shopCustomerGetTransactionHistories(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, }) {
            var _b, _c;
            try {
                let shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken) {
                    shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                }
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const userIdField = (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) === "SHOP"
                    ? { shop_id: shopDataFromToken.id, customer_id: undefined }
                    : { customer_id: shopDataFromToken.id, shop_id: undefined };
                const resultTransactionHistory = yield this.getTransactionHistories({
                    where: Object.assign(Object.assign({}, where), userIdField),
                    page,
                    limit,
                    sortedBy,
                });
                if ((resultTransactionHistory === null || resultTransactionHistory === void 0 ? void 0 : resultTransactionHistory.code) != 200) {
                    return (0, error_handler_1.handleError)(resultTransactionHistory === null || resultTransactionHistory === void 0 ? void 0 : resultTransactionHistory.message, resultTransactionHistory === null || resultTransactionHistory === void 0 ? void 0 : resultTransactionHistory.code, null);
                }
                return (0, success_handler_1.handleSuccessWithTotalData)((_b = resultTransactionHistory === null || resultTransactionHistory === void 0 ? void 0 : resultTransactionHistory.data) === null || _b === void 0 ? void 0 : _b.data, (_c = resultTransactionHistory === null || resultTransactionHistory === void 0 ? void 0 : resultTransactionHistory.data) === null || _c === void 0 ? void 0 : _c.total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetTransactionHistory(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const transactionHistoryRepository = (0, typeorm_1.getRepository)(entity_1.TransactionHistory);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const transactionHistory = yield transactionHistoryRepository.findOne({
                    where: {
                        id: id,
                        shop_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id,
                        is_active: true,
                    },
                });
                if (!transactionHistory) {
                    return (0, error_handler_1.handleError)("Transaction history not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(transactionHistory);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminGetTransactionHistory(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const transactionHistoryRepository = (0, typeorm_1.getRepository)(entity_1.TransactionHistory);
            try {
                const orderDetailMutationRepository = (0, typeorm_1.getRepository)(order_1.Order);
                const orderMutationRepository = (0, typeorm_1.getRepository)(orderDetail_1.OrderDetail);
                const orders = yield orderDetailMutationRepository.findBy({});
                orders.forEach((order) => __awaiter(this, void 0, void 0, function* () {
                    const orderDetail = yield orderMutationRepository.findOneBy({
                        order_no: order.order_no,
                    });
                    // Update order
                    orderDetailMutationRepository.merge(order, {
                        shop_id: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.shop_id,
                    });
                    yield orderDetailMutationRepository.save(order);
                }));
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const transactionHistory = yield transactionHistoryRepository
                    .createQueryBuilder("transaction_history")
                    .leftJoinAndSelect("transaction_history.customer", "customer")
                    .leftJoinAndSelect("transaction_history.shop", "shop")
                    .where("transaction_history.is_active = :isActive", { isActive: true })
                    .andWhere("transaction_history.id = :id", { id })
                    .getOne();
                if (!transactionHistory) {
                    return (0, error_handler_1.handleError)("Transaction history not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(transactionHistory);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static customerGetTransactionHistory(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const transactionHistoryRepository = (0, typeorm_1.getRepository)(entity_1.TransactionHistory);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const transactionHistory = yield transactionHistoryRepository.findOne({
                    where: {
                        id: id,
                        customer_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id,
                        is_active: true,
                    },
                });
                if (!transactionHistory) {
                    return (0, error_handler_1.handleError)("Transaction history not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(transactionHistory);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminApproveRechargeTransactionHistory(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            // Use a transactional entity manager
            const entityManager = (0, typeorm_1.getManager)();
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const result = yield entityManager.transaction((transactionalEntityManager) => __awaiter(this, void 0, void 0, function* () {
                    const transactionHistory = yield transactionalEntityManager.findOne(entity_1.TransactionHistory, {
                        where: {
                            id: id,
                            is_active: true,
                            status: types_1.ETransactionStatus.PENDING,
                            // identifier: ETransactionHistoryIdentifier.RECHARGE,
                        },
                    });
                    if (!transactionHistory) {
                        return (0, error_handler_1.handleError)("Transaction not found.", 404, null);
                    }
                    // Update the transaction status
                    transactionHistory.status = types_1.ETransactionStatus.APPROVED;
                    transactionHistory.approved_by = staffDataFromToken.id;
                    const updatedTransactionHistory = yield transactionalEntityManager.save(entity_1.TransactionHistory, transactionHistory);
                    // Fetch the associated wallet
                    const existingWallet = yield transactionalEntityManager.findOne(wallet_1.Wallet, {
                        where: { id: transactionHistory.wallet_id, is_active: true },
                    });
                    if (!existingWallet) {
                        return (0, error_handler_1.handleError)(config_1.config.message.wallet_not_found, 404, null);
                    }
                    // console.log({ existingWallet });
                    // Update wallet balance
                    if (transactionHistory.identifier ===
                        types_1.ETransactionHistoryIdentifier.WITHDRAW) {
                        existingWallet.total_withdraw += transactionHistory.amount;
                        existingWallet.total_withdraw_able_balance -=
                            transactionHistory.amount;
                        // existingWallet.total_balance -= transactionHistory.amount;
                    }
                    else if (transactionHistory.identifier ===
                        types_1.ETransactionHistoryIdentifier.RECHARGE) {
                        existingWallet.total_balance += transactionHistory.amount;
                        existingWallet.total_withdraw_able_balance +=
                            transactionHistory.amount;
                        existingWallet.total_recharged += transactionHistory.amount;
                    }
                    yield transactionalEntityManager.save(wallet_1.Wallet, existingWallet);
                    return (0, success_handler_1.handleSuccess)(updatedTransactionHistory);
                }));
                return result;
            }
            catch (error) {
                console.log(error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminApproveWithdrawTransactionHistory(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            // Use a transactional entity manager
            const entityManager = (0, typeorm_1.getManager)();
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const result = yield entityManager.transaction((transactionalEntityManager) => __awaiter(this, void 0, void 0, function* () {
                    const transactionHistory = yield transactionalEntityManager.findOne(entity_1.TransactionHistory, {
                        where: {
                            id: id,
                            is_active: true,
                            status: types_1.ETransactionStatus.PENDING,
                            identifier: types_1.ETransactionHistoryIdentifier.WITHDRAW,
                        },
                    });
                    if (!transactionHistory) {
                        throw new Error("Transaction not found");
                    }
                    // Update the transaction status
                    transactionHistory.status = types_1.ETransactionStatus.APPROVED;
                    transactionHistory.approved_by = staffDataFromToken.id;
                    const updatedTransactionHistory = yield transactionalEntityManager.save(entity_1.TransactionHistory, transactionHistory);
                    // Fetch the associated wallet
                    const existingWallet = yield transactionalEntityManager.findOne(wallet_1.Wallet, {
                        where: { id: transactionHistory.wallet_id, is_active: true },
                    });
                    if (!existingWallet) {
                        throw new Error(`Wallet not found for the provided ID.`);
                    }
                    // Update wallet balance
                    existingWallet.total_withdraw += transactionHistory.amount;
                    existingWallet.total_withdraw_able_balance -=
                        transactionHistory.amount;
                    yield transactionalEntityManager.save(wallet_1.Wallet, existingWallet);
                    return updatedTransactionHistory;
                }));
                return (0, success_handler_1.handleSuccess)(result);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminRejectTransactionHistory(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            // Use a transactional entity manager
            const entityManager = (0, typeorm_1.getManager)();
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const result = yield entityManager.transaction((transactionalEntityManager) => __awaiter(this, void 0, void 0, function* () {
                    const transactionHistory = yield transactionalEntityManager.findOne(entity_1.TransactionHistory, {
                        where: {
                            id: id,
                            is_active: true,
                            status: types_1.ETransactionStatus.PENDING,
                        },
                    });
                    if (!transactionHistory) {
                        throw new Error("Transaction not found");
                    }
                    // Update the transaction status
                    transactionHistory.status = types_1.ETransactionStatus.REJECTED;
                    transactionHistory.rejected_by = staffDataFromToken.id;
                    const updatedTransactionHistory = yield transactionalEntityManager.save(entity_1.TransactionHistory, transactionHistory);
                    return updatedTransactionHistory;
                }));
                return (0, success_handler_1.handleSuccess)(result);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static countNewTransaction(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, identifier, }) {
            try {
                const transactionHistoryRepository = (0, typeorm_1.getRepository)(entity_1.TransactionHistory);
                const queryBuilder = transactionHistoryRepository.createQueryBuilder("transactionHistory");
                queryBuilder.where("transactionHistory.status = :transactionHistory", {
                    transactionHistory: types_1.ETransactionStatus.PENDING,
                });
                if ([
                    types_1.ETransactionHistoryIdentifier.RECHARGE,
                    types_1.ETransactionHistoryIdentifier.WITHDRAW,
                ].includes(identifier)) {
                    queryBuilder.andWhere("transactionHistory.identifier = :identifier", {
                        identifier: identifier,
                    });
                }
                let shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id) {
                    queryBuilder.andWhere("transactionHistory.shop_id = :shopId", {
                        shopId: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id,
                    });
                }
                else {
                    const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                    if (!staffDataFromToken)
                        return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                const total = yield queryBuilder.getCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(null, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    // Map `sortedBy` enum to TypeORM order format
    static order(sortedBy) {
        switch (sortedBy) {
            case baseType_1.BaseOrderByInput.created_at_ASC:
                return { "transaction_history.created_at": "ASC" };
            case baseType_1.BaseOrderByInput.created_at_DESC:
                return { "transaction_history.created_at": "DESC" };
            case baseType_1.BaseOrderByInput.updated_at_ASC:
                return { "transaction_history.updated_at": "ASC" };
            case baseType_1.BaseOrderByInput.updated_at_DESC:
                return { "transaction_history.updated_at": "DESC" };
            default:
                return { created_at: "DESC" }; // Default order
        }
    }
}
exports.TransactionHistoryService = TransactionHistoryService;

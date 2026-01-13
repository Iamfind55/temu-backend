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
exports.WalletService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const types_1 = require("../types");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const baseType_1 = require("../../../utils/base/baseType");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const transactionHistory_1 = require("../../transactionHistory");
const notification_1 = require("../../notification");
const shop_1 = require("../../shop");
class WalletService {
    static createWallet(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const walletRepository = (0, typeorm_1.getRepository)(entity_1.Wallet);
            try {
                if (!(data === null || data === void 0 ? void 0 : data.shop_id) && !(data === null || data === void 0 ? void 0 : data.customer_id)) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                const userIdField = (data === null || data === void 0 ? void 0 : data.shop_id)
                    ? { shop_id: data === null || data === void 0 ? void 0 : data.shop_id }
                    : { customer_id: data === null || data === void 0 ? void 0 : data.customer_id };
                const existShopWallet = yield walletRepository.findOne({
                    where: Object.assign(Object.assign({}, userIdField), { is_active: true }),
                });
                if (existShopWallet)
                    return existShopWallet;
                const newWallet = walletRepository.create(Object.assign(Object.assign({}, data), { created_by: (data === null || data === void 0 ? void 0 : data.shop_id) || (data === null || data === void 0 ? void 0 : data.customer_id), status: data.status || baseType_1.BaseStatus.ACTIVE }));
                const savedWallet = yield walletRepository.save(newWallet);
                return savedWallet;
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static rechargeBalance(data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const transactionRepository = (0, typeorm_1.getRepository)(transactionHistory_1.TransactionHistory);
            try {
                if (!(data === null || data === void 0 ? void 0 : data.shop_id) && !(data === null || data === void 0 ? void 0 : data.customer_id)) {
                    return {
                        message: "Validation Error: Either shop_id or customer_id must be provided.",
                        code: 400,
                    };
                }
                const userIdField = data.shop_id
                    ? { shop_id: data.shop_id }
                    : { customer_id: data.customer_id };
                const rechargeAmount = (_a = data.amount_recharged) !== null && _a !== void 0 ? _a : 0;
                if (rechargeAmount <= 0) {
                    return {
                        message: "Validation Error: Recharge amount must be greater than zero.",
                        code: 400,
                    };
                }
                return yield (0, typeorm_1.getManager)().transaction((transactionEntityManager) => __awaiter(this, void 0, void 0, function* () {
                    // Fetch the active wallet inside the transaction
                    const existingWallet = yield transactionEntityManager.findOne(entity_1.Wallet, {
                        where: Object.assign(Object.assign({}, userIdField), { is_active: true }),
                    });
                    if (!existingWallet) {
                        throw new Error(`Wallet not found for the provided.`);
                    }
                    // // Update wallet balance
                    // const updatedTotalRecharged =
                    //   (existingWallet.total_recharged || 0) + rechargeAmount;
                    // existingWallet.total_recharged = updatedTotalRecharged;
                    // await transactionEntityManager.save(Wallet, existingWallet);
                    // Create and save a new transaction record
                    const newTransaction = transactionRepository.create(Object.assign({ identifier: transactionHistory_1.ETransactionHistoryIdentifier.RECHARGE, amount: rechargeAmount, coin_type: data.coin_type, wallet_id: existingWallet.id, payment_slip: data.payment_slip, account_number: data.account_number }, userIdField));
                    const saveNewTransaction = yield transactionEntityManager.save(transactionHistory_1.TransactionHistory, newTransaction);
                    try {
                        if (data.shop_id) {
                            const details = {
                                id: saveNewTransaction.id,
                                shop_id: data.shop_id,
                                wallet_id: existingWallet.id,
                                amount: rechargeAmount,
                                account_number: data.account_number,
                                coin_type: data.coin_type,
                            };
                            const _data = {
                                title: "New recharge",
                                description: `You have recharged balance to your wallet success.`,
                                shop_id: data.shop_id,
                                reference_id: saveNewTransaction.id,
                                data: details,
                                notification_type: notification_1.INotificationType.RECHARGE,
                            };
                            yield notification_1.NotificationService.createNotification({ data: _data });
                        }
                    }
                    catch (error) {
                        console.log("Error while create notification::", { error });
                    }
                    // Return the updated wallet
                    return { code: 200, data: saveNewTransaction };
                }));
            }
            catch (error) {
                console.error("Error in rechargeBalance:", error.message);
                return {
                    message: error.message,
                    code: 500,
                };
            }
        });
    }
    static withdrawBalance(data) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const transactionRepository = (0, typeorm_1.getRepository)(transactionHistory_1.TransactionHistory);
            try {
                if (!(data === null || data === void 0 ? void 0 : data.shop_id) && !(data === null || data === void 0 ? void 0 : data.customer_id)) {
                    return {
                        message: "Validation Error: Either shop_id or customer_id must be provided.",
                        code: 400,
                    };
                }
                const userIdField = data.shop_id
                    ? { shop_id: data.shop_id }
                    : { customer_id: data.customer_id };
                const rechargeAmount = (_a = data.amount_withdraw) !== null && _a !== void 0 ? _a : 0;
                if (rechargeAmount <= 0) {
                    return {
                        message: "Validation Error: Recharge amount must be greater than zero.",
                        code: 400,
                    };
                }
                const { coin_type } = data;
                if (!Object.values(transactionHistory_1.ECoinType).includes(coin_type)) {
                    return (0, error_handler_1.handleError)("Type of coin incorrect", 400);
                }
                return yield (0, typeorm_1.getManager)().transaction((transactionEntityManager) => __awaiter(this, void 0, void 0, function* () {
                    // Fetch the active wallet inside the transaction
                    const existingWallet = yield transactionEntityManager.findOne(entity_1.Wallet, {
                        where: Object.assign(Object.assign({}, userIdField), { is_active: true }),
                    });
                    if (!existingWallet) {
                        throw new Error(`Wallet not found for the provided.`);
                    }
                    // Update wallet balance
                    // const updatedTotalRecharged =
                    //   (existingWallet.total_withdraw_able_balance || 0) + rechargeAmount;
                    // existingWallet.total_withdraw_able_balance = updatedTotalRecharged;
                    // await transactionEntityManager.save(Wallet, existingWallet);
                    // Create and save a new transaction record
                    const newTransaction = transactionRepository.create(Object.assign({ identifier: transactionHistory_1.ETransactionHistoryIdentifier.WITHDRAW, amount: rechargeAmount, coin_type: data.coin_type, wallet_id: existingWallet.id, payment_slip: data.payment_slip, account_number: data.account_number }, userIdField));
                    yield transactionEntityManager.save(transactionHistory_1.TransactionHistory, newTransaction);
                    try {
                        if (data.shop_id) {
                            const details = {
                                id: newTransaction.id,
                                shop_id: data.shop_id,
                                wallet_id: existingWallet.id,
                                amount: rechargeAmount,
                                account_number: data.account_number,
                                coin_type: data.coin_type,
                            };
                            const _data = {
                                title: "New withdraw",
                                description: `You have withdraw balance to your wallet success.`,
                                shop_id: data.shop_id,
                                reference_id: newTransaction.id,
                                data: details,
                                notification_type: notification_1.INotificationType.WITHDRAWAL,
                            };
                            yield notification_1.NotificationService.createNotification({ data: _data });
                        }
                    }
                    catch (error) {
                        console.log("Error while create notification::", { error });
                    }
                    // Return the updated wallet
                    return { code: 200, data: existingWallet };
                }));
            }
            catch (error) {
                console.error("Error in rechargeBalance:", error.message);
                return {
                    message: config_1.config.message.internal_server_error,
                    code: 500,
                };
            }
        });
    }
    static createShopCustomerWallet(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            try {
                // Verify the token
                let shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken || (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) !== "SHOP") {
                    shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                    if (!shopDataFromToken) {
                        return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, shopDataFromToken);
                    }
                }
                const userIdField = (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) === "SHOP"
                    ? { shop_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id, customer_id: null }
                    : { customer_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id, shop_id: null };
                const shopWallet = yield this.createWallet(Object.assign({}, userIdField));
                return (0, success_handler_1.handleSuccess)(shopWallet);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopCustomerRechargeBalance(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            try {
                // Verify the token
                let shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken || (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) !== "SHOP") {
                    shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                    if (!shopDataFromToken) {
                        return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, shopDataFromToken);
                    }
                }
                const { coin_type } = data;
                if (!Object.values(transactionHistory_1.ECoinType).includes(coin_type)) {
                    return (0, error_handler_1.handleError)("Type of coin incorrect", 400, shopDataFromToken);
                }
                // Determine the appropriate user ID field based on token type
                const userIdField = (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) === "SHOP"
                    ? { shop_id: shopDataFromToken.id, customer_id: undefined }
                    : { customer_id: shopDataFromToken.id, shop_id: undefined };
                // Recharge the balance using the rechargeBalance method
                const wallet = yield this.rechargeBalance(Object.assign(Object.assign(Object.assign({}, data), userIdField), { payment_slip: data === null || data === void 0 ? void 0 : data.image }));
                if ((wallet === null || wallet === void 0 ? void 0 : wallet.code) != 200) {
                    return (0, error_handler_1.handleError)(wallet === null || wallet === void 0 ? void 0 : wallet.message, wallet === null || wallet === void 0 ? void 0 : wallet.code, null);
                }
                // Return success with the provided data
                return (0, success_handler_1.handleSuccess)(wallet === null || wallet === void 0 ? void 0 : wallet.data);
            }
            catch (error) {
                console.error("Error in shopCustomerRechargeBalance:", error.message);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopRechargeBalanceWithInactiveStatus(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            try {
                const shopRepository = (0, typeorm_1.getRepository)(shop_1.Shop);
                // Verify the token
                const existShop = yield shopRepository
                    .createQueryBuilder("shop")
                    .where("shop.status = :status", { status: baseType_1.BaseStatus.INACTIVE })
                    .andWhere(new typeorm_1.Brackets((qb) => {
                    qb.where("shop.username = :username", {
                        username: data.email,
                    }).orWhere("shop.email = :email", { email: data.email });
                }))
                    .getOne();
                if (!existShop) {
                    return (0, error_handler_1.handleError)(config_1.config.message.shop_not_found, 404, null);
                }
                if (!existShop) {
                    return (0, error_handler_1.handleError)(config_1.config.message.shop_not_found, 404, null);
                }
                // Determine the appropriate user ID field based on token type
                const userIdField = {
                    shop_id: existShop.id,
                    customer_id: undefined,
                };
                const { coin_type } = data;
                if (!Object.values(transactionHistory_1.ECoinType).includes(coin_type)) {
                    return (0, error_handler_1.handleError)("Type of coin incorrect", 400);
                }
                // Recharge the balance using the rechargeBalance method
                const wallet = yield this.rechargeBalance(Object.assign(Object.assign(Object.assign({}, data), userIdField), { payment_slip: data === null || data === void 0 ? void 0 : data.image }));
                if ((wallet === null || wallet === void 0 ? void 0 : wallet.code) != 200) {
                    return (0, error_handler_1.handleError)(wallet === null || wallet === void 0 ? void 0 : wallet.message, wallet === null || wallet === void 0 ? void 0 : wallet.code, null);
                }
                // Return success with the provided data
                return (0, success_handler_1.handleSuccess)(wallet === null || wallet === void 0 ? void 0 : wallet.data);
            }
            catch (error) {
                console.error("Error in shopCustomerRechargeBalance:", error.message);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopCustomerWithdrawBalance(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            try {
                // Verify the token
                let shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken || (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) !== "SHOP") {
                    shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                    if (!shopDataFromToken) {
                        return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, shopDataFromToken);
                    }
                }
                const { coin_type } = data;
                if (!Object.values(transactionHistory_1.ECoinType).includes(coin_type)) {
                    return (0, error_handler_1.handleError)("Type of coin incorrect", 400);
                }
                // Determine the appropriate user ID field based on token type
                const userIdField = (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) === "SHOP"
                    ? { shop_id: shopDataFromToken.id, customer_id: undefined }
                    : { customer_id: shopDataFromToken.id, shop_id: undefined };
                // Recharge the balance using the rechargeBalance method
                const wallet = yield this.withdrawBalance(Object.assign(Object.assign({}, data), userIdField));
                if ((wallet === null || wallet === void 0 ? void 0 : wallet.code) != 200) {
                    return (0, error_handler_1.handleError)(wallet === null || wallet === void 0 ? void 0 : wallet.message, wallet === null || wallet === void 0 ? void 0 : wallet.code, null);
                }
                // Return success with the provided data
                return (0, success_handler_1.handleSuccess)(wallet === null || wallet === void 0 ? void 0 : wallet.data);
            }
            catch (error) {
                console.error("Error in shopCustomerRechargeBalance:", error.message);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateWallet(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const walletRepository = (0, typeorm_1.getRepository)(entity_1.Wallet);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const wallet = yield walletRepository.findOneById(data.id);
                if (!wallet) {
                    return (0, error_handler_1.handleError)("Wallet not found", 404, null);
                }
                wallet.updated_by = staffDataFromToken === null || staffDataFromToken === void 0 ? void 0 : staffDataFromToken.id;
                walletRepository.merge(wallet, data);
                const updatedWallet = yield walletRepository.save(wallet);
                return (0, success_handler_1.handleSuccess)(updatedWallet);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static deleteWallet(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const walletRepository = (0, typeorm_1.getRepository)(entity_1.Wallet);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const wallet = yield walletRepository.findOneById(id);
                if (!wallet) {
                    return (0, error_handler_1.handleError)("Wallet not found", 404, null);
                }
                yield walletRepository.remove(wallet);
                return (0, success_handler_1.handleSuccess)(wallet);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminGetWallets(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, }) {
            var _b, _c;
            const walletRepository = (0, typeorm_1.getRepository)(entity_1.Wallet);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const order = this.order(sortedBy);
                const queryBuilder = walletRepository
                    .createQueryBuilder("wallet")
                    .leftJoinAndSelect("wallet.customer", "customer")
                    .leftJoinAndSelect("wallet.shop", "shop")
                    .where("wallet.is_active = :isActive", { isActive: true })
                    .andWhere("(wallet.shop_id IS NOT NULL OR wallet.customer_id IS NOT NULL)");
                if ((where === null || where === void 0 ? void 0 : where.owner_type) === types_1.EWalletOwnerType.CUSTOMER) {
                    queryBuilder.andWhere("wallet.customer_id IS NOT NULL");
                }
                else if ((where === null || where === void 0 ? void 0 : where.owner_type) === types_1.EWalletOwnerType.SHOP) {
                    queryBuilder.andWhere("wallet.shop_id IS NOT NULL");
                }
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    // Search in wallet name, customer name, or shop name
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("wallet.name = :name", {
                            name: `${where.keyword}`,
                        })
                            .orWhere("customer.firstName = :name", {
                            name: `${where.keyword}`,
                        })
                            .orWhere("shop.store_name ILIKE :name", {
                            name: `%${where.keyword}%`,
                        })
                            .orWhere("shop.phone_number = :name", {
                            name: `${where.keyword}`,
                        })
                            .orWhere("customer.phone_number = :name", {
                            name: `${where.keyword}`,
                        });
                    }));
                }
                if (where === null || where === void 0 ? void 0 : where.status) {
                    queryBuilder.andWhere("wallet.status = :status", {
                        status: where === null || where === void 0 ? void 0 : where.status,
                    });
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(wallet.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: where.createdAtBetween.endDate,
                    });
                }
                // Pagination and sorting
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(order);
                const [wallets, total] = yield queryBuilder.getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(wallets, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getShopWallet(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const walletRepository = (0, typeorm_1.getRepository)(entity_1.Wallet);
            try {
                // Verify the token
                let shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken || (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) !== "SHOP") {
                    shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                    if (!shopDataFromToken) {
                        return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, shopDataFromToken);
                    }
                }
                const userId = shopDataFromToken.id;
                const userIdField = (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.type) === "SHOP"
                    ? { shop_id: userId }
                    : { customer_id: userId };
                const wallet = yield walletRepository.findOne({
                    where: Object.assign(Object.assign({}, userIdField), { is_active: true }),
                });
                if (!wallet) {
                    const newShopWallet = yield this.createWallet(Object.assign({}, userIdField));
                    return (0, success_handler_1.handleSuccess)(newShopWallet);
                }
                if (!wallet) {
                    return (0, error_handler_1.handleError)("Wallet not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(wallet);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminGetWallet(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const walletRepository = (0, typeorm_1.getRepository)(entity_1.Wallet);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                // const wallet = await walletRepository.findOne({
                //   where: { id, is_active: true },
                // });
                const queryBuilder = walletRepository
                    .createQueryBuilder("wallet")
                    .leftJoinAndSelect("wallet.customer", "customer")
                    .leftJoinAndSelect("wallet.shop", "shop")
                    .where("wallet.is_active = :isActive", { isActive: true })
                    .andWhere("(wallet.shop_id IS NOT NULL OR wallet.customer_id IS NOT NULL)")
                    .andWhere((qb) => {
                    qb.where("wallet.id = :id", { id }).orWhere("wallet.shop_id = :shopId", {
                        shopId: id,
                    });
                });
                const wallet = yield queryBuilder.getOne();
                if (!wallet) {
                    return (0, error_handler_1.handleError)("Wallet not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(wallet);
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
                return { "wallet.created_at": "ASC" };
            case baseType_1.BaseOrderByInput.created_at_DESC:
                return { "wallet.created_at": "DESC" };
            case baseType_1.BaseOrderByInput.updated_at_ASC:
                return { "wallet.updated_at": "ASC" };
            case baseType_1.BaseOrderByInput.updated_at_DESC:
                return { "wallet.updated_at": "DESC" };
            default:
                return { "wallet.created_at": "DESC" }; // Default order
        }
    }
}
exports.WalletService = WalletService;

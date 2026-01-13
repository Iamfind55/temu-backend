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
exports.connectDB = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../config");
const banner_1 = require("../modules/banner");
const branding_1 = require("../modules/branding");
const category_1 = require("../modules/category");
const staff_1 = require("../modules/staff");
const shop_1 = require("../modules/shop");
const shopType_1 = require("../modules/shopType");
const shopSocial_1 = require("../modules/shopSocial");
const shopAddress_1 = require("../modules/shopAddress");
const product_1 = require("../modules/product");
const productComment_1 = require("../modules/productComment");
const shopProduct_1 = require("../modules/shopProduct");
const aboutUs_1 = require("../modules/aboutUs");
const customer_1 = require("../modules/customer");
const wallet_1 = require("../modules/wallet");
const transactionHistory_1 = require("../modules/transactionHistory");
const order_1 = require("../modules/order");
const orderDetail_1 = require("../modules/orderDetail");
const notification_1 = require("../modules/notification");
const logistics_1 = require("../modules/logistics");
const attribute_1 = require("../modules/attribute");
const entity_1 = require("../modules/attributeValue/entity");
const categoryAttribute_1 = require("../modules/categoryAttribute");
const shopFollower_1 = require("../modules/shopFollower");
const productTag_1 = require("../modules/productTag");
const deposit_1 = require("../modules/deposit");
const withdraw_1 = require("../modules/withdraw");
const conversation_1 = require("../modules/conversation");
const message_1 = require("../modules/message");
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, typeorm_1.createConnection)({
            type: "postgres",
            host: config_1.config.db_host, // Replace with your PostgreSQL host
            port: parseInt(config_1.config.db_port), // Replace with your PostgreSQL port
            username: config_1.config.db_username, // Replace with your PostgreSQL username
            password: config_1.config.db_password, // Replace with your PostgreSQL password
            database: config_1.config.db_name, // Replace with your PostgreSQL database name
            synchronize: true,
            logging: false,
            entities: [
                banner_1.Banner,
                branding_1.Branding,
                category_1.Category,
                staff_1.Staff,
                shop_1.Shop,
                shopType_1.ShopType,
                shopSocial_1.ShopSocial,
                shopAddress_1.ShopAddress,
                product_1.Product,
                productComment_1.ProductComment,
                shopProduct_1.ShopProduct,
                aboutUs_1.AboutUs,
                customer_1.Customer,
                wallet_1.Wallet,
                transactionHistory_1.TransactionHistory,
                order_1.Order,
                orderDetail_1.OrderDetail,
                notification_1.Notification,
                logistics_1.Logistics,
                attribute_1.Attribute,
                entity_1.AttributeValue,
                categoryAttribute_1.CategoryAttribute,
                shopFollower_1.ShopFollower,
                productTag_1.ProductTag,
                deposit_1.Deposit,
                withdraw_1.Withdraw,
                conversation_1.Conversation,
                message_1.Message,
            ],
            migrations: ["migrations/*.ts"],
        })
            .then(() => __awaiter(void 0, void 0, void 0, function* () {
            console.log("Database connected");
            // Fetch the active wallet
            const walletRepository = (0, typeorm_1.getRepository)(wallet_1.Wallet);
            const existingSystemWallet = yield walletRepository
                .createQueryBuilder("wallet")
                .where("wallet.shop_id IS NULL")
                .andWhere("wallet.customer_id IS NULL")
                .andWhere("is_active = true")
                .getOne();
            if (!existingSystemWallet) {
                yield walletRepository.save({});
            }
        }))
            .catch((error) => console.error("Error connecting to the database:", error));
    }
    catch (error) { }
});
exports.connectDB = connectDB;

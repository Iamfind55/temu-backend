"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("./config");
const aboutUs_1 = require("./modules/aboutUs");
const attribute_1 = require("./modules/attribute");
const entity_1 = require("./modules/attributeValue/entity");
const banner_1 = require("./modules/banner");
const branding_1 = require("./modules/branding");
const category_1 = require("./modules/category");
const categoryAttribute_1 = require("./modules/categoryAttribute");
const conversation_1 = require("./modules/conversation");
const customer_1 = require("./modules/customer");
const deposit_1 = require("./modules/deposit");
const logistics_1 = require("./modules/logistics");
const message_1 = require("./modules/message");
const notification_1 = require("./modules/notification");
const order_1 = require("./modules/order");
const orderDetail_1 = require("./modules/orderDetail");
const product_1 = require("./modules/product");
const productComment_1 = require("./modules/productComment");
const productTag_1 = require("./modules/productTag");
const shop_1 = require("./modules/shop");
const shopAddress_1 = require("./modules/shopAddress");
const shopFollower_1 = require("./modules/shopFollower");
const shopProduct_1 = require("./modules/shopProduct");
const shopSocial_1 = require("./modules/shopSocial");
const shopType_1 = require("./modules/shopType");
const staff_1 = require("./modules/staff");
const transactionHistory_1 = require("./modules/transactionHistory");
const wallet_1 = require("./modules/wallet");
const withdraw_1 = require("./modules/withdraw");
const AppDataSource = new typeorm_1.DataSource({
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
        transactionHistory_1.TransactionHistory,
        order_1.Order,
        wallet_1.Wallet,
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
    subscribers: [],
});
module.exports = { AppDataSource };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const aboutUs_1 = require("./aboutUs");
const banner_1 = require("./banner");
const branding_1 = require("./branding");
const category_1 = require("./category");
const product_1 = require("./product");
const productComment_1 = require("./productComment");
const shop_1 = require("./shop");
const shopAddress_1 = require("./shopAddress");
const shopProduct_1 = require("./shopProduct");
const shopSocial_1 = require("./shopSocial");
const shopType_1 = require("./shopType");
const staff_1 = require("./staff");
const customer_1 = require("./customer");
const wallet_1 = require("./wallet");
const transactionHistory_1 = require("./transactionHistory");
const order_1 = require("./order");
const orderDetail_1 = require("./orderDetail");
const dashboard_1 = require("./dashboard");
const notification_1 = require("./notification");
const logistics_1 = require("./logistics");
const attribute_1 = require("./attribute");
const shopFollower_1 = require("./shopFollower");
const deposit_1 = require("./deposit");
const { GraphQLUpload } = require("graphql-upload");
exports.resolvers = [
    { Upload: GraphQLUpload },
    banner_1.bannerResolvers,
    branding_1.brandingResolvers,
    category_1.categoryResolvers,
    staff_1.staffResolvers,
    shop_1.shopResolvers,
    shopType_1.shopTypeResolvers,
    shopSocial_1.shopSocialResolvers,
    shopAddress_1.shopAddressResolvers,
    product_1.productResolvers,
    productComment_1.productCommentResolvers,
    shopProduct_1.shopProductResolvers,
    aboutUs_1.aboutUsResolvers,
    customer_1.customerResolvers,
    wallet_1.walletResolvers,
    transactionHistory_1.transactionHistoryResolvers,
    order_1.orderResolvers,
    orderDetail_1.orderDetailResolvers,
    dashboard_1.dashboardResolvers,
    notification_1.notificationResolvers,
    logistics_1.logisticsResolvers,
    attribute_1.attributeResolvers,
    shopFollower_1.shopFollowerResulvers,
    deposit_1.depositResolvers
];

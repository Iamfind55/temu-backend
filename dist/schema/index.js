"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const schemas_1 = require("../modules/aboutUs/schemas");
const schemas_2 = require("../modules/attribute/schemas");
const schemas_3 = require("../modules/banner/schemas");
const schemas_4 = require("../modules/branding/schemas");
const schemas_5 = require("../modules/category/schemas");
const schemas_6 = require("../modules/customer/schemas");
const schemas_7 = require("../modules/dashboard/schemas");
const schemas_8 = require("../modules/logistics/schemas");
const schemas_9 = require("../modules/notification/schemas");
const schemas_10 = require("../modules/order/schemas");
const schemas_11 = require("../modules/orderDetail/schemas");
const schemas_12 = require("../modules/product/schemas");
const schemas_13 = require("../modules/productComment/schemas");
const schemas_14 = require("../modules/shop/schemas");
const schemas_15 = require("../modules/shopAddress/schemas");
const schemas_16 = require("../modules/shopProduct/schemas");
const schemas_17 = require("../modules/shopSocial/schemas");
const schemas_18 = require("../modules/shopType/schemas");
const schemas_19 = require("../modules/staff/schemas");
const schemas_20 = require("../modules/transactionHistory/schemas");
const schemas_21 = require("../modules/wallet/schemas");
const schema_1 = require("../modules/shopFollower/schema");
const schema_2 = require("../modules/deposit/schema");
const schema_3 = require("../modules/withdraw/schema");
const schemas_22 = require("../modules/message/schemas");
const schemas_23 = require("../modules/conversation/schemas");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  scalar Upload
  scalar JSON
  scalar DateTime
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }

  type Error {
    message: String!
    code: String!
    details: JSON
  }

  interface Response {
    success: Boolean!
    error: Error
  }

  enum BaseStatus {
    ACTIVE
    INACTIVE
  }

  enum BaseOrderByInput {
    created_at_ASC
    created_at_DESC
    updated_at_ASC
    updated_at_DESC
    sell_count_DESC
    sell_count_ASC
    price_DESC
    price_ASC
    position_DESC
    position_ASC
  }

  input NameTranslateBaseInput {
    name_en: String
    name_es: String
    name_ms: String
    name_jp: String
    name_th: String
    name_vi: String
    name_zh: String
    name_zh_tw: String
  }

  type NameTranslateBaseType {
    name_en: String
    name_es: String
    name_ms: String
    name_jp: String
    name_th: String
    name_vi: String
    name_zh: String
    name_zh_tw: String
  }

  input DateBetweenInput {
    startDate: String
    endDate: String
  }

  enum DeliveryTypeEnum {
    STANDARD
    EXPRESS
    SAME_DAY
    NEXT_DAY
    PICKUP
    DIGITAL
    INTERNATIONAL
    FREE
    DOOR_TO_DOOR
  }

  ${schemas_3.bannerSchema}
  ${schemas_4.brandingSchema}
  ${schemas_5.categorySchema}
  ${schemas_19.staffSchema}
  ${schemas_14.shopSchema}
  ${schemas_18.shopTypeSchema}
  ${schemas_17.shopSocialSchema}
  ${schemas_15.shopAddressSchema}
  ${schemas_12.productSchema}
  ${schemas_13.productCommentSchema}
  ${schemas_16.shopProductSchema}
  ${schemas_1.aboutUsSchema}
  ${schemas_6.customerSchema}
  ${schemas_21.walletSchema}
  ${schemas_20.transactionHistorySchema}
  ${schemas_10.orderSchema}
  ${schemas_11.orderDetailSchema}
  ${schemas_7.dashboardSchema}
  ${schemas_9.notificationSchema}
  ${schemas_8.logisticSchema}
  ${schemas_2.attributeSchema}
  ${schema_1.shopFollowerSchemas}
  ${schema_2.depositSchema}
  ${schema_3.withdrawSchema}
  ${schemas_22.messageSchema}
  ${schemas_23.conversationSchema}
`;

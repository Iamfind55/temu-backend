import { gql } from "apollo-server-express";
import { bannerSchema } from "../modules/banner/schemas";
import { brandingSchema } from "../modules/branding/schemas";
import { categorySchema } from "../modules/category/schemas";
import { staffSchema } from "../modules/staff/schemas";
import { shopSchema } from "../modules/shop/schemas";
import { shopTypeSchema } from "../modules/shopType/schemas";
import { shopAddressSchema } from "../modules/shopAddress/schemas";
import { productSchema } from "../modules/product/schemas";
import { shopSocialSchema } from "../modules/shopSocial/schemas";
import { productCommentSchema } from "../modules/productComment/schemas";
import { shopProductSchema } from "../modules/shopProduct/schemas";
import { aboutUsSchema } from "../modules/aboutUs/schemas";
import { customerSchema } from "../modules/customer/schemas";
import { walletSchema } from "../modules/wallet/schemas";
import { transactionHistorySchema } from "../modules/transactionHistory/schemas";
import { orderSchema } from "../modules/order/schemas";
import { orderDetailSchema } from "../modules/orderDetail/schemas";
import { dashboardSchema } from "../modules/dashboard/schemas";
import { notificationSchema } from "../modules/notification/schemas";
import { logisticSchema } from "../modules/logistics/schemas";

export const typeDefs = gql`
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

  ${bannerSchema}
  ${brandingSchema}
  ${categorySchema}
  ${staffSchema}
  ${shopSchema}
  ${shopTypeSchema}
  ${shopSocialSchema}
  ${shopAddressSchema}
  ${productSchema}
  ${productCommentSchema}
  ${shopProductSchema}
  ${aboutUsSchema}
  ${customerSchema}
  ${walletSchema}
  ${transactionHistorySchema}
  ${orderSchema}
  ${orderDetailSchema}
  ${dashboardSchema}
  ${notificationSchema}
  ${logisticSchema}
`;

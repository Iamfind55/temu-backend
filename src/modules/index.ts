import { aboutUsResolvers } from "./aboutUs";
import { bannerResolvers } from "./banner";
import { brandingResolvers } from "./branding";
import { categoryResolvers } from "./category";
import { productResolvers } from "./product";
import { productCommentResolvers } from "./productComment";
import { shopResolvers } from "./shop";
import { shopAddressResolvers } from "./shopAddress";
import { shopProductResolvers } from "./shopProduct";
import { shopSocialResolvers } from "./shopSocial";
import { shopTypeResolvers } from "./shopType";
import { staffResolvers } from "./staff";
import { customerResolvers } from "./customer";
import { walletResolvers } from "./wallet";
import { transactionHistoryResolvers } from "./transactionHistory";
import { orderResolvers } from "./order";
import { orderDetailResolvers } from "./orderDetail";
import { dashboardResolvers } from "./dashboard";
import { notificationResolvers } from "./notification";
import { logisticsResolvers } from "./logistics";
import { attributeResolvers } from "./attribute";
const { GraphQLUpload } = require("graphql-upload");

export const resolvers = [
  { Upload: GraphQLUpload },
  bannerResolvers,
  brandingResolvers,
  categoryResolvers,
  staffResolvers,
  shopResolvers,
  shopTypeResolvers,
  shopSocialResolvers,
  shopAddressResolvers,
  productResolvers,
  productCommentResolvers,
  shopProductResolvers,
  aboutUsResolvers,
  customerResolvers,
  walletResolvers,
  transactionHistoryResolvers,
  orderResolvers,
  orderDetailResolvers,
  dashboardResolvers,
  notificationResolvers,
  logisticsResolvers,
  attributeResolvers
];

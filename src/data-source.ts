import { DataSource } from "typeorm";
import { config } from "./config";
import { AboutUs } from "./modules/aboutUs";
import { Attribute } from "./modules/attribute";
import { AttributeValue } from "./modules/attributeValue/entity";
import { Banner } from "./modules/banner";
import { Branding } from "./modules/branding";
import { Category } from "./modules/category";
import { CategoryAttribute } from "./modules/categoryAttribute";
import { Conversation } from "./modules/conversation";
import { Customer } from "./modules/customer";
import { Deposit } from "./modules/deposit";
import { Logistics } from "./modules/logistics";
import { Message } from "./modules/message";
import { Notification } from "./modules/notification";
import { Order } from "./modules/order";
import { OrderDetail } from "./modules/orderDetail";
import { Product } from "./modules/product";
import { ProductComment } from "./modules/productComment";
import { ProductTag } from "./modules/productTag";
import { Shop } from "./modules/shop";
import { ShopAddress } from "./modules/shopAddress";
import { ShopFollower } from "./modules/shopFollower";
import { ShopProduct } from "./modules/shopProduct";
import { ShopSocial } from "./modules/shopSocial";
import { ShopType } from "./modules/shopType";
import { Staff } from "./modules/staff";
import { TransactionHistory } from "./modules/transactionHistory";
import { Wallet } from "./modules/wallet";
import { Withdraw } from "./modules/withdraw";
const AppDataSource = new DataSource({
  type: "postgres",
  host: config.db_host, // Replace with your PostgreSQL host
  port: parseInt(config.db_port), // Replace with your PostgreSQL port
  username: config.db_username, // Replace with your PostgreSQL username
  password: config.db_password, // Replace with your PostgreSQL password
  database: config.db_name, // Replace with your PostgreSQL database name
  synchronize: true,
  logging: false,
  extra: {
    timezone: "America/New_York", // USA Eastern Time
  },
  entities: [
    Banner,
    Branding,
    Category,
    Staff,
    Shop,
    ShopType,
    ShopSocial,
    ShopAddress,
    Product,
    ProductComment,
    ShopProduct,
    AboutUs,
    Customer,
    TransactionHistory,
    Order,
    Wallet,
    OrderDetail,
    Notification,
    Logistics,
    Attribute,
    AttributeValue,
    CategoryAttribute,
    ShopFollower,
    ProductTag,
    Deposit,
    Withdraw,
    Conversation,
    Message,
  ],
  migrations: ["migrations/*.ts"],
  subscribers: [],
});

module.exports = { AppDataSource };

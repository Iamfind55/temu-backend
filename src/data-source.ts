import { DataSource } from "typeorm";
import { TransactionHistory } from "./modules/transactionHistory";
import { Customer } from "./modules/customer";
import { Shop } from "./modules/shop";
import { config } from "./config";
import { Banner } from "./modules/banner";
import { Branding } from "./modules/branding";
import { Category } from "./modules/category";
import { Staff } from "./modules/staff";
import { ShopType } from "./modules/shopType";
import { ShopSocial } from "./modules/shopSocial";
import { ShopAddress } from "./modules/shopAddress";
import { Product } from "./modules/product";
import { ProductComment } from "./modules/productComment";
import { ShopProduct } from "./modules/shopProduct";
import { AboutUs } from "./modules/aboutUs";
import { Wallet } from "./modules/wallet";
import { Order } from "./modules/order";
import { OrderDetail } from "./modules/orderDetail";
import { Notification } from "./modules/notification";
import { Logistics } from "./modules/logistics";
import { Attribute } from "./modules/attribute";
import { AttributeValue } from "./modules/attributeValue/entity";
import { CategoryAttribute } from "./modules/categoryAttribute";
const AppDataSource = new DataSource({
  type: "postgres",
  host: config.db_host, // Replace with your PostgreSQL host
  port: parseInt(config.db_port), // Replace with your PostgreSQL port
  username: config.db_username, // Replace with your PostgreSQL username
  password: config.db_password, // Replace with your PostgreSQL password
  database: config.db_name, // Replace with your PostgreSQL database name
  synchronize: true,
  logging: false,
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
    CategoryAttribute
  ],
  migrations: ["migrations/*.ts"],
  subscribers: [],
});

module.exports = { AppDataSource };

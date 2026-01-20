import { createConnection, getRepository } from "typeorm";
import { config } from "../config";
import { Banner } from "../modules/banner";
import { Branding } from "../modules/branding";
import { Category } from "../modules/category";
import { Staff } from "../modules/staff";
import { Shop } from "../modules/shop";
import { ShopType } from "../modules/shopType";
import { ShopSocial } from "../modules/shopSocial";
import { ShopAddress } from "../modules/shopAddress";
import { Product } from "../modules/product";
import { ProductComment } from "../modules/productComment";
import { ShopProduct } from "../modules/shopProduct";
import { AboutUs } from "../modules/aboutUs";
import { Customer } from "../modules/customer";
import { Wallet } from "../modules/wallet";
import { TransactionHistory } from "../modules/transactionHistory";
import { Order } from "../modules/order";
import { OrderDetail } from "../modules/orderDetail";
import { Notification } from "../modules/notification";
import { Logistics } from "../modules/logistics";
import { Attribute } from "../modules/attribute";
import { AttributeValue } from "../modules/attributeValue/entity";
import { CategoryAttribute } from "../modules/categoryAttribute";
import { ShopFollower } from "../modules/shopFollower";
import { ProductTag } from "../modules/productTag";
import { Deposit } from "../modules/deposit";
import { Withdraw } from "../modules/withdraw";
import { Conversation } from "../modules/conversation";
import { Message } from "../modules/message";

export const connectDB = async () => {
  try {
    await createConnection({
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
        Wallet,
        TransactionHistory,
        Order,
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
    })
      .then(async () => {
        console.log("Database connected");
        // Fetch the active wallet
        const walletRepository = getRepository(Wallet);
        const existingSystemWallet = await walletRepository
          .createQueryBuilder("wallet")
          .where("wallet.shop_id IS NULL")
          .andWhere("wallet.customer_id IS NULL")
          .andWhere("is_active = true")
          .getOne();

        if (!existingSystemWallet) {
          await walletRepository.save({});
        }
      })
      .catch((error) =>
        console.error("Error connecting to the database:", error)
      );
  } catch (error) { }
};

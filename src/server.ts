import { getRepository } from "typeorm";
import { useServer } from "graphql-ws/lib/use/ws";
import express, { Response, Request } from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema";
import { resolvers } from "./modules";
import { config } from "./config";
import { connectDB } from "./utils/db";
import cors from "cors";
import http from "http";
import { makeExecutableSchema } from "@graphql-tools/schema";
import pubsub from "./utils/pubsub";
import { Product, ProductService } from "./modules/product";
import { Category } from "./modules/category";
import { Branding } from "./modules/branding";
import { Order } from "./modules/order";
import { OrderDetail } from "./modules/orderDetail";
import { Notification } from "./modules/notification";
import { Shop } from "./modules/shop";
import { ShopAddress } from "./modules/shopAddress";
import { ShopProduct } from "./modules/shopProduct";
import { Wallet } from "./modules/wallet";
import { Banner } from "./modules/banner";
import { TransactionHistory } from "./modules/transactionHistory";
import { ShopSocial } from "./modules/shopSocial";
import { createDefaultStaff } from "./utils/defaultStaff";
const { WebSocketServer } = require("ws");

const app = express();

const startApp = async () => {
  // deleteFileFromCloudinary("https://res.cloudinary.com/dxqvafipl/image/upload/v1741793500/i3xqtksopa4cyp4ej6rk.jpg");
  console.log("node_env:::", process.env.NODE_ENV);
  await connectDB();
  await createDefaultStaff()
  const httpServer = http.createServer(app);

  const node = config.node;

  // Set timezone
  process.env.TZ = "Asia/Bangkok";

  // Health check route
  app.get("/graphql/check-healthy", (req: Request, res: Response) => {
    res.send(`server is running on ${node}`);
  });

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  /*** Set up WebSocket Server for GraphQL Subscriptions ***/
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
  });

  useServer(
    {
      schema,
      context: async () => ({ pubsub }),
    },
    wsServer
  );

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res, pubsub }), // Ensure pubsub is available in the context
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await wsServer.close(); // Ensure WebSocket server closes properly on shutdown
            },
          };
        },
      },
    ],
  });

  // Middleware
  // Allow server to receive 100MB JSON payloads
  app.use(express.json({ limit: "100mb" }));
  app.use(cors());

  // Start Apollo Server
  await server.start();

  server.applyMiddleware({ app: app as any, path: "/graphql" });

  // Start HTTP server
  const PORT = config.port;
  httpServer.listen(PORT, () => {
    console.log(
      `Server is running on ${node} at http://localhost:${PORT}/graphql`
    );
    console.log(`WebSocket server running at ws://localhost:${PORT}/graphql`);
  });

  // ProductService.createLoopCategoryAndProduct();
  // ProductService.createBanner()
  // ProductService.createProductWithoutImage();

  const clearAllData = async () => {
    const productRepository = getRepository(Product);
    const categoryRepository = getRepository(Category);
    const brandRepository = getRepository(Branding);
    const orderRepository = getRepository(Order);
    const orderDetailRepository = getRepository(OrderDetail);
    const noticRepository = getRepository(Notification);
    const shopRepository = getRepository(Shop);
    const shopAddressRepository = getRepository(ShopAddress);
    const shopProductRepository = getRepository(ShopProduct);
    const shopSocialRepository = getRepository(ShopSocial);
    const transactionRepository = getRepository(TransactionHistory);
    const walletepository = getRepository(Wallet);
    const bannerepository = getRepository(Banner);

    await orderDetailRepository.delete({});
    await orderRepository.delete({});
    await noticRepository.delete({});
    await walletepository.delete({});
    await bannerepository.delete({});
    await transactionRepository.delete({});
    await shopSocialRepository.delete({});
    await shopProductRepository.delete({});
    await shopAddressRepository.delete({});
    await shopRepository.delete({});
    await productRepository.delete({});
    await categoryRepository.delete({});
    await brandRepository.delete({});
  };
  // clearAllData();

  const deleteSameProductName = async () => {
    const productRepository = getRepository(Product);
    let continues = true;
    let page = 1;
    const pageSize = 40000;

    while (continues) {
      // Fetch products in batches
      const products = await productRepository
        .createQueryBuilder("product")
        .where({})
        .skip((page - 1) * pageSize)
        .take(pageSize)
        .orderBy("product.created_at", "ASC")
        .getMany();

      if (products.length <= 0) {
        continues = false;
        break;
      }

      // Group products by name_en (or any other field in the JSON name object)
      const productMap = new Map();

      for (const product of products) {
        const productNameKey = product.name.name_en; // Use name_en as the key
        if (!productMap.has(productNameKey)) {
          productMap.set(productNameKey, []);
        }
        productMap.get(productNameKey).push(product);
      }

      // Identify duplicates and delete older ones
      for (const [nameKey, productList] of productMap.entries()) {
        if (productList.length > 1) {
          // console.log({ productList });
          // Sort products by created_at (ascending order)
          productList.sort((a: any, b: any) => a.created_at - b.created_at);

          // Keep the latest product (last in the sorted array)
          const latestProduct = productList.pop();
          // console.log({ latestProduct });

          // Delete the rest
          for (const product of productList) {
            try {
              await productRepository.remove(product);
            } catch (error) {
              // console.log({ error });
              console.log({ productId: product.id });
            }
            console.log(
              `Deleted product with ID: ${product.id}, Name (en): ${product.name.name_en}`
            );
          }
        }
      }

      page++;
    }
  };
  // deleteSameProductName();
};

startApp();


// Dev test auto deploy
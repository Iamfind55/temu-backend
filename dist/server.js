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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@graphql-tools/schema");
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const ws_1 = require("graphql-ws/lib/use/ws");
const http_1 = __importDefault(require("http"));
const typeorm_1 = require("typeorm");
const config_1 = require("./config");
const modules_1 = require("./modules");
const banner_1 = require("./modules/banner");
const branding_1 = require("./modules/branding");
const category_1 = require("./modules/category");
const notification_1 = require("./modules/notification");
const order_1 = require("./modules/order");
const orderDetail_1 = require("./modules/orderDetail");
const product_1 = require("./modules/product");
const shop_1 = require("./modules/shop");
const shopAddress_1 = require("./modules/shopAddress");
const shopProduct_1 = require("./modules/shopProduct");
const shopSocial_1 = require("./modules/shopSocial");
const transactionHistory_1 = require("./modules/transactionHistory");
const wallet_1 = require("./modules/wallet");
const schema_2 = require("./schema");
const db_1 = require("./utils/db");
const pubsub_1 = __importDefault(require("./utils/pubsub"));
const apollo_server_core_1 = require("apollo-server-core");
const { WebSocketServer } = require("ws");
const app = (0, express_1.default)();
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    // deleteFileFromCloudinary("https://res.cloudinary.com/dxqvafipl/image/upload/v1741793500/i3xqtksopa4cyp4ej6rk.jpg");
    console.log("node_env:::", process.env.NODE_ENV);
    yield (0, db_1.connectDB)();
    // await createDefaultStaff()
    const httpServer = http_1.default.createServer(app);
    const node = config_1.config.node;
    // Set timezone
    process.env.TZ = "Asia/Bangkok";
    // Health check route
    app.get("/graphql/check-healthy", (req, res) => {
        res.send(`server is running on ${node}`);
    });
    const schema = (0, schema_1.makeExecutableSchema)({
        typeDefs: schema_2.typeDefs,
        resolvers: modules_1.resolvers,
    });
    /*** Set up WebSocket Server for GraphQL Subscriptions ***/
    const wsServer = new WebSocketServer({
        server: httpServer,
        path: "/graphql",
    });
    (0, ws_1.useServer)({
        schema,
        context: () => __awaiter(void 0, void 0, void 0, function* () { return ({ pubsub: pubsub_1.default }); }),
    }, wsServer);
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        context: ({ req, res }) => ({ req, res, pubsub: pubsub_1.default }), // Ensure pubsub is available in the context
        plugins: [
            (0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)({ footer: false }),
            {
                serverWillStart() {
                    return __awaiter(this, void 0, void 0, function* () {
                        return {
                            drainServer() {
                                return __awaiter(this, void 0, void 0, function* () {
                                    yield wsServer.close(); // Ensure WebSocket server closes properly on shutdown
                                });
                            },
                        };
                    });
                },
            },
        ],
    });
    // Middleware
    // Allow server to receive 100MB JSON payloads
    app.use(express_1.default.json({ limit: "100mb" }));
    app.use((0, cors_1.default)());
    // Start Apollo Server
    yield server.start();
    server.applyMiddleware({ app: app, path: "/graphql" });
    // Start HTTP server
    const PORT = config_1.config.port;
    httpServer.listen(PORT, () => {
        console.log(`Server is running on ${node} at http://localhost:${PORT}/graphql`);
        console.log(`WebSocket server running at ws://localhost:${PORT}/graphql`);
    });
    // ProductService.createLoopCategoryAndProduct();
    // ProductService.createBanner()
    // ProductService.createProductWithoutImage();
    // ProductService.fetchTemuCategoryOptList();
    // ProductService.uploadCategoryToStorage();
    const clearAllData = () => __awaiter(void 0, void 0, void 0, function* () {
        const productRepository = (0, typeorm_1.getRepository)(product_1.Product);
        const categoryRepository = (0, typeorm_1.getRepository)(category_1.Category);
        const brandRepository = (0, typeorm_1.getRepository)(branding_1.Branding);
        const orderRepository = (0, typeorm_1.getRepository)(order_1.Order);
        const orderDetailRepository = (0, typeorm_1.getRepository)(orderDetail_1.OrderDetail);
        const noticRepository = (0, typeorm_1.getRepository)(notification_1.Notification);
        const shopRepository = (0, typeorm_1.getRepository)(shop_1.Shop);
        const shopAddressRepository = (0, typeorm_1.getRepository)(shopAddress_1.ShopAddress);
        const shopProductRepository = (0, typeorm_1.getRepository)(shopProduct_1.ShopProduct);
        const shopSocialRepository = (0, typeorm_1.getRepository)(shopSocial_1.ShopSocial);
        const transactionRepository = (0, typeorm_1.getRepository)(transactionHistory_1.TransactionHistory);
        const walletepository = (0, typeorm_1.getRepository)(wallet_1.Wallet);
        const bannerepository = (0, typeorm_1.getRepository)(banner_1.Banner);
        yield orderDetailRepository.delete({});
        yield orderRepository.delete({});
        yield noticRepository.delete({});
        yield walletepository.delete({});
        yield bannerepository.delete({});
        yield transactionRepository.delete({});
        yield shopSocialRepository.delete({});
        yield shopProductRepository.delete({});
        yield shopAddressRepository.delete({});
        yield shopRepository.delete({});
        yield productRepository.delete({});
        yield categoryRepository.delete({});
        yield brandRepository.delete({});
    });
    // clearAllData();
    const deleteSameProductName = () => __awaiter(void 0, void 0, void 0, function* () {
        const productRepository = (0, typeorm_1.getRepository)(product_1.Product);
        let continues = true;
        let page = 1;
        const pageSize = 40000;
        while (continues) {
            // Fetch products in batches
            const products = yield productRepository
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
                const productNameKey = product.name; // Use name_en as the key
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
                    productList.sort((a, b) => a.created_at - b.created_at);
                    // Keep the latest product (last in the sorted array)
                    const latestProduct = productList.pop();
                    // console.log({ latestProduct });
                    // Delete the rest
                    for (const product of productList) {
                        try {
                            yield productRepository.remove(product);
                        }
                        catch (error) {
                            // console.log({ error });
                            console.log({ productId: product.id });
                        }
                        console.log(`Deleted product with ID: ${product.id}, Name (en): ${product.name}`);
                    }
                }
            }
            page++;
        }
    });
    // deleteSameProductName();
});
startApp();
// Dev test auto deploy

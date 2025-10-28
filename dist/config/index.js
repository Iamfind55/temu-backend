"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    node: process.env.NODE_ENV,
    client_url: process.env.CLIENT_URL,
    db_host: process.env.POSTGRES_HOST,
    db_port: process.env.POSTGRES_PORT || "5432",
    db_username: process.env.POSTGRES_USER, // Replace with your PostgreSQL username
    db_password: process.env.POSTGRES_PASSWORD, // Replace with your PostgreSQL password
    db_name: process.env.POSTGRES_DB,
    port: process.env.PORT || 5000,
    feed_api_url: process.env.FEED_API_URL,
    storage_api_url: process.env.STORAGE_API_URL,
    encode_token: process.env.ENCODE_TOKEN,
    encrypt_parameter_key: process.env.ENCRYPT_PARAMETER_KEY,
    preview_video_resource_url: process.env.PREVIEW_TIKTOK_RESOURCE_URL,
    preview_local_resource_url: process.env.PREVIEW_LOCAL_RESOURCE_URL,
    api_url: process.env.API_URL,
    staff_jwt_secret_key: process.env.STAFF_JWT_SECRET_KEY || "",
    shop_jwt_secret_key: process.env.SHOP_JWT_SECRET_KEY || "",
    customer_jwt_secret_key: process.env.CUSTOMER_JWT_SECRET_KEY || "",
    shop_forgot_password_jwt_secret_key: process.env.SHOP_FORGOT_PASSWORD_JWT_SECRET_KEY || "",
    message: {
        internal_server_error: "INTERNAL_SERVER_ERROR",
        unauthorized: "UNAUTHORIZED",
        invalid_token: "INVALID_TOKEN",
        success: "SUCCESS",
        secret_key_messing: "SECRET_KEY_MESSING",
        invalid_encrypted_data_format: "INVALID_ENCRYPTED_DATA_FORMAT",
        no_data_found: "NO_DATA_FOUND",
        balance_not_enough: "BALANCE_NOT_ENOUGH",
        something_when_wrong: "SOMETHING_WHEN_WRONG",
        incorrect_data: "INCORRECT_DATA",
        invalid_data: "INVALID_DATA",
        wallet_not_found: "WALLET_NOT_FOUND",
        shop_not_found: "SHOP_NOT_FOUND",
        username_already_exist: "USERNAME_ALREADY_EXIST",
    },
    smtp: {
        host: process.env.MAIL_HOST, // e.g., 'smtp.gmail.com' for Gmail
        port: parseInt(process.env.MAIL_PORT), // or 465 for secure connections
        secure: process.env.MAIL_SECURE == "false" ? false : true, // true if port is 465
        user: process.env.MAIL_USER, // your email
        pass: process.env.MAIL_PASS, // your email password or app-specific password
    },
};

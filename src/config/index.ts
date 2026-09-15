import dotenv from "dotenv";

dotenv.config();

// Mail settings moved from MAIL_* to SMTP_*; the old names stay as a fallback
// so already-deployed .env files keep working.
const smtpHost = process.env.SMTP_HOST || process.env.MAIL_HOST;
const smtpUser = process.env.SMTP_USER || process.env.MAIL_USER;
const smtpPass = (process.env.SMTP_PASS || process.env.MAIL_PASS || "").replace(
  /\s/g,
  "" // Gmail shows app passwords in groups of four; the spaces are decorative.
);
const smtpPort = parseInt(
  (process.env.SMTP_PORT || process.env.MAIL_PORT) as string
);
const smtpSecureVar = process.env.SMTP_SECURE ?? process.env.MAIL_SECURE;
const smtpSecure =
  smtpSecureVar !== undefined ? smtpSecureVar === "true" : smtpPort === 465;

export const config = {
  node: process.env.NODE_ENV,
  client_url: process.env.CLIENT_URL,
  db_host: process.env.POSTGRES_HOST,
  db_port: process.env.POSTGRES_PORT || "5432",
  db_username: process.env.POSTGRES_USER, // Replace with your PostgreSQL username
  db_password: process.env.POSTGRES_PASSWORD, // Replace with your PostgreSQL password
  db_name: process.env.POSTGRES_DB,
  port: process.env.PORT || 5000,
  // "redis-server" is the docker-compose service name; override with REDIS_HOST
  // (e.g. 127.0.0.1) when running the server outside Docker.
  redis_host:
    process.env.REDIS_HOST ||
    (process.env.NODE_ENV === "LOCAL" ? "127.0.0.1" : "redis-server"),
  redis_port: Number(process.env.REDIS_PORT) || 6379,
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
  shop_forgot_password_jwt_secret_key:
    process.env.SHOP_FORGOT_PASSWORD_JWT_SECRET_KEY || "",
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
    user_not_found: "USER_NOT_FOUND",
    shop_not_found: "SHOP_NOT_FOUND",
    username_already_exist: "USERNAME_ALREADY_EXIST",
  },
  smtp: {
    host: smtpHost,
    port: smtpPort,
    // 465 = implicit TLS, 587 = STARTTLS. An explicit *_SECURE var still wins.
    secure: smtpSecure,
    user: smtpUser,
    pass: smtpPass,
    from: process.env.MAIL_FROM || process.env.SMTP_FROM || smtpUser,
  },
};

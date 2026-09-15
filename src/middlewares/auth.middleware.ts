import jwt from "jsonwebtoken";
import { config } from "../config";
import { Customer } from "../modules/customer";
import { Shop } from "../modules/shop";
import { Staff } from "../modules/staff";
import { ShopTokenScope, TokenData } from "../utils/base/baseType";

export class AuthMiddlewareService {
  verifyStaffToken(req: any): TokenData | null {
    try {
      const token = req?.headers?.authorization;

      if (!token) {
        return null;
      }
      const decoded: any = jwt.verify(token, config.staff_jwt_secret_key);

      return decoded as TokenData;
    } catch (error: any) {
      console.error("Token verification failed:", error.message);
      return null;
    }
  }
  verifyCustomerToken(req: any): TokenData {

    try {
      
      const token = req?.headers?.authorization;
      const decoded: any = jwt.verify(token, config.customer_jwt_secret_key);
      return decoded as TokenData;
    } catch (error: any) {
      console.error("Token verification failed:", error.message);
      throw new Error(error);
    }
  }

  /**
   * Verifies a shop token. Tokens issued at registration are limited to the
   * APPLICATION scope so a shop that has not been approved yet can only submit
   * its application; every other endpoint requires a FULL token from login.
   * Tokens issued before scopes existed carry no scope and count as FULL.
   */
  verifyShopToken(
    req: any,
    { allowScopes = ["FULL"] }: { allowScopes?: ShopTokenScope[] } = {}
  ): TokenData | null {
    try {

      const token = req?.headers?.authorization;
      const decoded: any = jwt.verify(token, config.shop_jwt_secret_key);
      const scope: ShopTokenScope = decoded?.scope ?? "FULL";
      if (!allowScopes.includes(scope)) {
        console.error(
          `Token verification failed: ${scope} token is not allowed here`
        );
        return null;
      }
      return decoded as TokenData;
    } catch (error: any) {
      console.error("Token verification failed:", error.message);
      return null;
      // throw new Error(error);
    }
  }

  verifyShopForgotPasswordToken(token: string): TokenData {
    try {
      const decoded: any = jwt.verify(
        token,
        config.shop_forgot_password_jwt_secret_key
      );
      return decoded;
    } catch (error: any) {
      console.error("Token verification failed:", error.message);
      throw new Error(error);
    }
  }

  genStaffToken(data: Staff): string {
    try {
      // Generate JWT token
      const token = jwt.sign(
        { id: data.id, role: data.role, type: "STAFF" },
        config.staff_jwt_secret_key,
        {
          expiresIn: "15d", // Token expiration time
        }
      );

      return token;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  genShopToken(data: Shop, scope: ShopTokenScope = "FULL"): string {
    try {
      // Generate JWT token
      const token = jwt.sign(
        { id: data.id, status: data.status, type: "SHOP", scope },
        config.shop_jwt_secret_key,
        {
          expiresIn: "15d", // Token expiration time
        }
      );

      return token;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  genCustomerToken(data: Customer): string {
    try {
      // Generate JWT token
      const token = jwt.sign(
        { id: data.id, status: data.status, type: "CUSTOMER" },
        config.customer_jwt_secret_key,
        {
          expiresIn: "15d", // Token expiration time
        }
      );

      return token;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  genShopForgotPasswordToken(data: Shop): string {
    try {
      // Generate JWT token
      const token = jwt.sign(
        { id: data.id, status: data.status },
        config.shop_forgot_password_jwt_secret_key,
        {
          expiresIn: "10m", // Token expiration time
        }
      );

      return token;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

import { Request } from "express";
import { getRepository } from "typeorm";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { handleError } from "../../../utils/response/error.handler";
import {
  handleBoleanSuccess,
  handleSuccess,
} from "../../../utils/response/success.handler";
import { ShopFollower } from "../entity";
import { Shop } from "../../shop/entity";
import { Customer } from "../../customer";
import { config } from "../../../config";
import { Response } from "../../../utils/response/response.types";

export class ShopFollowerService {
  static async follower({
    shop_id,
    req,
  }: {
    shop_id: string;
    req: Request;
  }): Promise<Response<ShopFollower | null>> {
    const shopFollowerRepository = getRepository(ShopFollower);
    const shopRepository = getRepository(Shop);
    const customerRepository = getRepository(Customer);

    try {
      if (!shop_id) {
        return handleError("Invalid shop id", 404, null);
      }

      const userRequest = new AuthMiddlewareService().verifyCustomerToken(req);
      if (!userRequest) {
        return handleError(config.message.invalid_token, 404, null);
      }

      const shop = await shopRepository.findOne({ where: { id: shop_id } });
      if (!shop) {
        return handleError(config.message.shop_not_found, 404, null);
      }

      const customer = await customerRepository.findOne({
        where: { id: userRequest.id },
      });
      if (!customer) {
        return handleError(config.message.username_already_exist, 404, null);
      }

      const existing = await shopFollowerRepository.findOne({
        where: { shop: { id: shop.id }, customer: { id: customer.id } },
      });

      if (existing) {
        // Already following → unfollow (delete the record)
        await shopFollowerRepository.remove(existing);
        return handleBoleanSuccess({
          data: "",
          message: "Unfollower successfully",
        } as any);
      }
 

      // Not following → create new follow
      const newFollow = shopFollowerRepository.create({ shop, customer });
      await shopFollowerRepository.save(newFollow);

      return handleBoleanSuccess({
        data: "",
        message: "Follower successfully",
      } as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }
}

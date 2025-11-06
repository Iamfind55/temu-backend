import { Request } from "express";
import { ShopFollowerService } from "../services";

export const shopFollowerMutation = {
  follower: async (
    _: any,
    { shop_id }: { shop_id: string },
    { req }: { req: Request }
  ) => ShopFollowerService.follower({ shop_id: shop_id, req }),
  
};

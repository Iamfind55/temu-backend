import { Request, Response } from "express";
import { BannerService } from "../services";
import { BannerModel } from "../types";

export const bannerMutation = {
  createBanner: async (
    _: any,
    { data }: { data: BannerModel },
    { req }: { req: Request }
  ) => BannerService.createBanner({ data: data, req }),

  updateBanner: async (
    _: any,
    { data }: { data: BannerModel },
    { req }: { req: Request }
  ) => BannerService.updateBanner({ data: data, req }),

  deleteBanner: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => BannerService.deleteBanner({ id, req }),
};

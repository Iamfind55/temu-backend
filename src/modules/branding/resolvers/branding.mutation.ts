import { Request, Response } from "express";
import { BrandingService } from "../services";
import { BrandingModel } from "../types";

export const brandingMutation = {
  createBranding: async (
    _: any,
    { data }: { data: BrandingModel },
    { req }: { req: Request }
  ) => BrandingService.createBranding({ data: data, req }),

  updateBranding: async (
    _: any,
    { data }: { data: BrandingModel },
    { req }: { req: Request }
  ) => BrandingService.updateBranding({ data: data, req }),

  deleteBranding: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => BrandingService.deleteBranding({ id, req }),
};

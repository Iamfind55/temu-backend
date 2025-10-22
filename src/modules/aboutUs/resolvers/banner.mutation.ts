import { Request } from "express";
import { AboutUsService } from "../services";
import { AboutUsModel } from "../types";

export const aboutUsMutation = {
  updateAboutUs: async (
    _: any,
    { data }: { data: AboutUsModel },
    { req }: { req: Request }
  ) => AboutUsService.updateAboutUs({ data: data, req }),
};

import { AboutUsService } from "../services";

export const aboutUsQuery = {
  getAboutUs: async (_: any, { id }: { id: string }) =>
    AboutUsService.getAboutUs({ id }),
};

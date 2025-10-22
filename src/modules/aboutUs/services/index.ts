import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import { handleSuccess } from "../../../utils/response/success.handler";
import { AboutUsModel } from "../types";
import { getRepository } from "typeorm";
import { AboutUs } from "../entity";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";

export class AboutUsService {
  static async createAboutUs({
    data,
    req,
  }: {
    data: AboutUsModel;
    req: Request;
  }): Promise<Response<AboutUs | null>> {
    const AboutUsRepository = getRepository(AboutUs);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      if (!data.data) {
        return handleError("Validation Error", 400, null);
      }

      const newAboutUs = AboutUsRepository.create({
        data: data.data,
        created_by: staffDataFromToken?.id,
      });

      const savedAboutUs = await AboutUsRepository.save(newAboutUs);

      return handleSuccess(savedAboutUs);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateAboutUs({
    data,
    req,
  }: {
    data: AboutUsModel;
    req: Request;
  }): Promise<Response<AboutUs | null>> {
    const AboutUsRepository = getRepository(AboutUs);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );

      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const aboutUs = await AboutUsRepository.find();
      if (aboutUs?.length <= 0) {
        return await this.createAboutUs({ data, req });
      }

      aboutUs[0].updated_by = staffDataFromToken?.id;

      AboutUsRepository.merge(aboutUs[0], data as any);

      const updatedAboutUs = await AboutUsRepository.save(aboutUs);

      return handleSuccess(updatedAboutUs as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getAboutUs({
    id,
  }: {
    id: string;
  }): Promise<Response<AboutUs | null>> {
    const AboutUsRepository = getRepository(AboutUs);

    try {
      const aboutUs = await AboutUsRepository.find();

      if (aboutUs.length <= 0) {
        return handleError("AboutUs not found", 404, null);
      }

      return handleSuccess(aboutUs[0]);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }
}

import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import {
  Country,
  ShopAddressModel,
  ShopAddressWhereInput,
  State,
} from "../types";
import { Brackets, getRepository } from "typeorm";
import { ShopAddress } from "../entity";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { loadAddressData } from "../../../data/helper";

export class ShopAddressService {
  static async createShopAddress({
    data,
    req,
  }: {
    data: ShopAddressModel;
    req: Request;
  }): Promise<Response<ShopAddress | null>> {
    const shopAddressRepository = getRepository(ShopAddress);

    try {
      let shopDataFromToken: any = new AuthMiddlewareService().verifyShopToken(
        req
      );
      let newShopAddress = null;
      if (!shopDataFromToken || shopDataFromToken?.type !== "SHOP") {
        shopDataFromToken = new AuthMiddlewareService().verifyCustomerToken(
          req
        );

        if (!shopDataFromToken)
          return handleError(config.message.invalid_token, 404, shopDataFromToken);

        newShopAddress = shopAddressRepository.create({
          ...data,
          created_by: shopDataFromToken?.id,
          customer_id: shopDataFromToken?.id,
        } as any);
      } else {
        newShopAddress = shopAddressRepository.create({
          ...data,
          created_by: shopDataFromToken?.id,
          shop_id: shopDataFromToken?.id,
        } as any);
      }

      const savedShopAddress = await shopAddressRepository.save(newShopAddress);

      return handleSuccess(savedShopAddress as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateShopAddress({
    data,
    req,
  }: {
    data: ShopAddressModel;
    req: Request;
  }): Promise<Response<ShopAddress | null>> {
    const shopAddressRepository = getRepository(ShopAddress);

    try {
      // Verify the token
      let shopDataFromToken: any = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken || shopDataFromToken?.type !== "SHOP") {
        shopDataFromToken = new AuthMiddlewareService().verifyCustomerToken(
          req
        );

        if (!shopDataFromToken) {
          return handleError(config.message.invalid_token, 404, shopDataFromToken);
        }
      }

      const userIdField =
        shopDataFromToken?.type === "SHOP" ? "shop_id" : "customer_id";

      const userId = shopDataFromToken.id;

      // Query to find the specific shop address
      const shopAddress = await shopAddressRepository
        .createQueryBuilder("shopAddress")
        .where(`shopAddress.${userIdField} = :userId`, { userId })
        .andWhere("shopAddress.id = :id", { id: data.id })
        .getOne();

      if (!shopAddress) {
        return handleError("Address not found", 404, null);
      }

      shopAddress.updated_by = shopDataFromToken?.id;

      shopAddressRepository.merge(shopAddress, data as any);

      const updatedShopAddress = await shopAddressRepository.save(shopAddress);

      return handleSuccess(updatedShopAddress);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async deleteShopAddress({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<ShopAddress | null>> {
    const shopAddressRepository = getRepository(ShopAddress);

    try {
      // Verify the token
      let shopDataFromToken: any = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken || shopDataFromToken?.type !== "SHOP") {
        shopDataFromToken = new AuthMiddlewareService().verifyCustomerToken(
          req
        );

        if (!shopDataFromToken) {
          return handleError(config.message.invalid_token, 404, shopDataFromToken);
        }
      }

      const userIdField =
        shopDataFromToken?.type === "SHOP" ? "shop_id" : "customer_id";

      const userId = shopDataFromToken.id;

      // Query to find the specific shop address
      const shopAddress = await shopAddressRepository
        .createQueryBuilder("shopAddress")
        .where(`shopAddress.${userIdField} = :userId`, { userId })
        .andWhere("shopAddress.id = :id", { id })
        .getOne();

      console.log({ shopAddress });

      if (!shopAddress) {
        return handleError("Address not found", 404, null);
      }
      await shopAddressRepository.remove(shopAddress);

      return handleSuccess(shopAddress as any);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getShopAddresses({
    where,
    page,
    limit,
    sortedBy,
  }: {
    where: Partial<ShopAddressWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
  }): Promise<Response<ShopAddress[] | null>> {
    const shopAddressRepository = getRepository(ShopAddress);

    try {
      const order = this.order(sortedBy);

      const queryBuilder = shopAddressRepository
        .createQueryBuilder("shopAddress")
        .where("shopAddress.is_active", { is_active: true });

      if (where?.customer_id) {
        queryBuilder.andWhere("shopAddress.customer_id = :customer_id", {
          customer_id: where?.customer_id,
        });
      } else {
        queryBuilder.andWhere("shopAddress.shop_id = :shop_id", {
          shop_id: where?.shop_id,
        });
      }

      if (where?.keyword) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("shopAddress.country -> 'country' ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            })
              .orWhere("shopAddress.state -> 'state' ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              })
              .orWhere("shopAddress.city -> 'city' ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              })
              .orWhere("shopAddress.email LIKE :keyword", {
                keyword: `%${where.keyword}%`,
              })
              .orWhere("shopAddress.post_code LIKE :keyword", {
                keyword: `%${where.keyword}%`,
              })
              .orWhere("shopAddress.phone_number = :keyword", {
                keyword: `%${where.keyword}%`,
              });
          })
        );
      }

      if (where?.status) {
        queryBuilder.andWhere("shopAddress.status = :status", {
          status: where.status,
        });
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(shopAddress.created_at) BETWEEN :startDate AND :endDate",
          {
            startDate: where.createdAtBetween.startDate,
            endDate: where?.createdAtBetween?.endDate,
          }
        );
      }

      // Pagination and sorting
      queryBuilder
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy(order as any);

      const [shopAddresss, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(shopAddresss, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getShopAddress({
    id,
  }: {
    id: string;
  }): Promise<Response<ShopAddress | null>> {
    const shopAddressRepository = getRepository(ShopAddress);

    try {
      const shopSocila = await shopAddressRepository.findOneById(id);

      if (!shopSocila) {
        return handleError("Address not found", 404, null);
      }

      return handleSuccess(shopSocila);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getCountries(): Promise<Response<Country | null>> {
    try {
      const data = loadAddressData();
      // Return only country-level information
      const countries = data.map((country: Country) => {
        const isState = country?.states?.length;
        return {
          id: country.id,
          country: country.country,
          cn_country: country.cn_country,
          isState: isState || false,
        };
      });

      return handleSuccessWithTotalData(countries, data.length);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getStates({
    countryId,
  }: {
    countryId: number;
  }): Promise<Response<State | null>> {
    try {
      const data = loadAddressData();
      // Return only country-level information
      const country = data.find((item: Country) => item.id == countryId);

      if (!country?.states?.length) {
        return handleSuccessWithTotalData(null, 0);
      }

      return handleSuccessWithTotalData(
        country?.states,
        country?.states.length
      );
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getCities({
    countryId,
    stateId,
  }: {
    countryId: number;
    stateId?: number;
  }): Promise<Response<State | null>> {
    try {
      const data = loadAddressData();
      const country = data.find((item: State) => item.id == countryId);

      // If stateId is provided, find cities in that state
      if (stateId) {
        const state = country?.states?.find((s: State) => s.id == stateId);
        if (!state?.cities?.length) {
          // Otherwise, return country-level cities
          return handleSuccessWithTotalData(
            country?.cities,
            country?.cities.length
          );
        }
        return handleSuccessWithTotalData(state?.cities, state?.cities.length);
      }

      // Otherwise, return country-level cities
      return handleSuccessWithTotalData(
        country?.cities,
        country?.cities.length
      );
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async setShopAddressDefaultToUse({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<ShopAddress | null>> {
    const shopAddressRepository = getRepository(ShopAddress);

    try {
      // Verify the token
      let shopDataFromToken: any = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken || shopDataFromToken?.type !== "SHOP") {
        shopDataFromToken = new AuthMiddlewareService().verifyCustomerToken(
          req
        );

        if (!shopDataFromToken) {
          return handleError(config.message.invalid_token, 404, shopDataFromToken);
        }
      }

      const userIdField =
        shopDataFromToken?.type === "SHOP" ? "shop_id" : "customer_id";

      const userId = shopDataFromToken.id;

      // Query to find the specific shop address
      const shopAddress = await shopAddressRepository
        .createQueryBuilder("shopAddress")
        .where(`shopAddress.${userIdField} = :userId`, { userId })
        .andWhere("shopAddress.id = :id", { id })
        .getOne();

      if (!shopAddress) {
        return handleError("Address not found", 404, null);
      }

      // Update `updated_by` field
      shopAddress.updated_by = shopDataFromToken.id;

      // Set all shop addresses `is_used` to false for the specific user ID
      await shopAddressRepository
        .createQueryBuilder()
        .update(ShopAddress)
        .set({ is_used: false })
        .where(`${userIdField} = :userId`, { userId })
        .execute();

      // Mark the selected address as the default (`is_used = true`)
      shopAddress.is_used = true;

      const updatedShopAddress = await shopAddressRepository.save(shopAddress);

      return handleSuccess(updatedShopAddress);
    } catch (error: any) {
      console.error("Error setting default shop address:", error.message);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  // Map `sortedBy` enum to TypeORM order format
  static order(sortedBy: BaseOrderByInput) {
    switch (sortedBy) {
      case BaseOrderByInput.created_at_ASC:
        return { created_at: "ASC" };
      case BaseOrderByInput.created_at_DESC:
        return { created_at: "DESC" };
      case BaseOrderByInput.updated_at_ASC:
        return { updated_at: "ASC" };
      case BaseOrderByInput.updated_at_DESC:
        return { updated_at: "DESC" };
      default:
        return { created_at: "DESC" }; // Default order
    }
  }
}

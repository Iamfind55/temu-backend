import { BaseOrderByInput } from "../../../utils/base/baseType";
import { ShopAddressService } from "../services";
import { ShopAddressWhereInput } from "../types";

export const shopAddressQuery = {
  getShopAddresses: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ShopAddressWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    }
  ) => ShopAddressService.getShopAddresses({ where, page, limit, sortedBy }),
  getCustomerAddresses: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ShopAddressWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    }
  ) => ShopAddressService.getShopAddresses({ where, page, limit, sortedBy }),

  getShopAddress: async (_: any, { id }: { id: string }) =>
    ShopAddressService.getShopAddress({ id }),

  getCustomerAddress: async (_: any, { id }: { id: string }) =>
    ShopAddressService.getShopAddress({ id }),

  getCountries: () => ShopAddressService.getCountries(),

  getStates: (_: any, { countryId }: { countryId: number }) =>
    ShopAddressService.getStates({ countryId }),

  getCities: (
    _: any,
    { countryId, stateId }: { countryId: number; stateId?: number }
  ) => ShopAddressService.getCities({ countryId, stateId }),
};

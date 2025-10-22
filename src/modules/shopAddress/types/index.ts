import { BaseStatus, BaseType } from "../../../utils/base/baseType";
import { DateBetween } from "../../shopProduct";

export interface ShopAddressModel extends BaseType {
  country: Country;
  state: State;
  city: City;
  address: string;
  postal_code: string;
  email: string;
  phone_number: string;
  shop_id: string;
  status: BaseStatus;
  is_used: boolean;
}

export interface ShopAddressWhereInput {
  shop_id: string;
  customer_id: string;
  keyword: string;
  status: BaseStatus;
  createdAtBetween: DateBetween;
}

export interface Country {
  id: number;
  country: string;
  cn_country: string;
  states: [State];
}

export interface State {
  id: number;
  state: string;
  cn_state: string;
  cities: [City];
}

export interface City {
  id: number;
  city: string;
  cn_city: string;
}

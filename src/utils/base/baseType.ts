export interface BaseType {
  id: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  created_by: string;
  updated_by: string;
}

export enum BaseOrderByInput {
  created_at_ASC = "created_at_ASC",
  created_at_DESC = "created_at_DESC",
  updated_at_ASC = "updated_at_ASC",
  updated_at_DESC = "updated_at_DESC",
  sell_count_DESC = "sell_count_DESC",
  sell_count_ASC = "sell_count_ASC",
  price_DESC = "price_DESC",
  price_ASC = "price_ASC",
  position_DESC = "position_DESC",
  position_ASC = "position_ASC",
}

export enum BaseStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum ERolesStaff {
  ADMIN = "admin",
  SUPER_ADMIN = "supper admin",
  STAFF="staff"
}

export interface TokenData {
  id: string;
  username: string;
  type?: string;
}

export interface NameTranslateBase {
  name_en: string;
  name_es: string;
  name_ms: string;
  name_jp: string;
  name_th: string;
  name_vi: string;
  name_zh: string;
  name_zh_tw: string;
}

import { BaseType } from "../../../utils/base/baseType";

export interface EAttribute extends BaseType {
  name: string;
  description?: string;
  values?: string[];
}

export interface AttributeWhereInput {
  keyword?: string;
  id?: string;
}

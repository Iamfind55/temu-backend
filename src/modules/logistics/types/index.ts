import { ETransportMode } from "../../../utils/base/baseEnum";
import {
    BaseStatus,
    BaseType
} from "../../../utils/base/baseType";

export interface ELogistics extends BaseType {
  company_name: string;
  logo?: string;
  cost:number;
  transport_modes: ETransportMode[]
}

export interface LogisticsWhereInput {
  keyword?: string;
  status?: BaseStatus;
  id?: string;
}

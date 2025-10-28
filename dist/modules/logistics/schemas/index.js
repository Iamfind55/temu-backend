"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logisticSchema = void 0;
exports.logisticSchema = `
   enum ETransportMode {
    air
    sea
    road
    rail
    warehouse
    pickup
  }

  enum BaseStatus {
    ACTIVE
    INACTIVE
    DELETED
  }


  type Logistics {
    id: ID
    company_name: String
    logo: String
    cost: Float
    transport_modes: [ETransportMode]
    status: BaseStatus
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  }

  input CreateLogisticsInput {
    company_name: String!
    logo: String
    cost: Float
    transport_modes: [ETransportMode]
    status: BaseStatus = ACTIVE
  }

  input UpdateLogisticsInput {
    company_name: String!
    logo: String
    cost: Float
    transport_modes: [ETransportMode]
    status: BaseStatus
  }
  input LogisticsWhereInput {
    keyword: String
    status: BaseStatus
    id: ID
  }
  type SuccessLogisticResponseOne {
    success: Boolean!
    data: Logistics
    error: Error
  }

  type SuccessLogisticResponseMany {
    success: Boolean!
    total: Int
    data: [Logistics]
    error: Error
  }  

  type Query {
    getLogistics(where: LogisticsWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessLogisticResponseMany!
    getLogistic(id: ID!): SuccessLogisticResponseOne!
  }

  type Mutation {
    createLogistics(data: CreateLogisticsInput!): SuccessLogisticResponseOne!
    updateLogictics(id: ID!, data: UpdateLogisticsInput!): SuccessLogisticResponseOne
    deletLogictics(id: ID!): SuccessLogisticResponseOne
  }
`;

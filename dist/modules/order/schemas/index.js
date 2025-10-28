"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
exports.orderSchema = `
  type Order {
    id: ID
    order_no: String
    total_quantity: Int
    total_products: Int
    total_price: Float
    total_discount: Float
    expected_revenue: Float
    profit: Float
    status: BaseStatus
    order_status: OrderStatus
    payment_status: PaymentStatus
    sign_in_status: SignInStatus
    shop_id: String
    shop: Shop
    customer_id: String
    customerData: Customer
    payment_slip: String
    order_details: [OrderDetail]
    delivery_type: DeliveryTypeEnum
    logistics: Logistics
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  } 

  enum OrderStatus {
    NO_PICKUP  
    PROCESSING
    PACKING  
    SHIPPING
    CANCELLED 
    SUCCESS 
    FAILED
  }

  enum UpdateOrderStatus {
    PACKING  
    SHIPPING
    SUCCESS
  }

  enum PaymentStatus {
    FAILED  
    PROCESSING  
    COMPLETED 
    CANCELLED 
  }
  enum SignInStatus {
    NOT_DELIVERY
    PACKING
    ON_THE_WAY
    CANCELLED
    SUCCESS
    FAILED
  }
  enum UpdateSignInStatus {
    PACKING
    ON_THE_WAY
    SUCCESS
  }

  input CreateOrderInput {
    total_quantity: Int
    total_price: Float
    total_discount: Float
    expected_revenue: Float
    order_details: [CreateOrderDetailInput]
    payment_slip: String
    address_id: ID
    delivery_type: DeliveryTypeEnum
    logistics_id: ID
  }

  input AdminUpdateOrderByStatusInput {
    ids: [ID!]!
    order_status: UpdateOrderStatus
    sign_in_status: UpdateSignInStatus
    # delivery_type: DeliveryTypeEnum
    # payment_status: PaymentStatus
  }

  input OrderWhereInput {
    order_no: String
    keyword: String
    order_status: OrderStatus
    createdAtBetween: DateBetweenInput
  }

  type SuccessOrderResponseOne {
    success: Boolean!
    data: Order
    message: String
    error: Error
  }
  type SuccessUpdateOrderSubscribeResponseOne {
    success: Boolean!
    message: String
    data: Order
    error: Error
  }
  type SuccessCreateOrderResponseMany {
    success: Boolean!
    data: [Order]
    message: String
    error: Error
  }

  type SuccessOrderResponseMany {
    success: Boolean!
    total: Int
    data: [Order]
    error: Error
  }

  type Query { 
    shopGetOrders(where: OrderWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessOrderResponseMany!
    customerGetOrders(where: OrderWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessOrderResponseMany!
    adminGetOrders(where: OrderWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessOrderResponseMany!
    shopGetOrder(id: ID!): SuccessOrderResponseOne!
    customerGetOrder(id: ID!): SuccessOrderResponseOne!
    adminGetOrder(id: ID!): SuccessOrderResponseOne!
    countNewOrder(order_status: OrderStatus!): SuccessCountResponseOne!
  }

 type Mutation {
   createOrder(data: CreateOrderInput!): SuccessCreateOrderResponseMany!
   adminCreateOrderForCustomer(customer_id: ID!, data: CreateOrderInput!): SuccessCreateOrderResponseMany!
   payOrderFailed(id: ID!): SuccessOrderResponseOne!
   cancelOrderFailed(id: ID!): SuccessOrderResponseOne!
   shopConfirmOrder(id: ID!): SuccessOrderResponseOne!
   shopCancelOrder(id: ID!): SuccessOrderResponseOne!
   adminUpdateOrderWithStatus(data: AdminUpdateOrderByStatusInput!): SuccessOrderResponseMany!
   # deleteOrder(id: ID!): SuccessOrderResponseOne!
 }

  type Subscription {
    subscribeNewOrder(shopId: ID): Notification!
    subscribeUpdateOrderStatus(shopId: ID): SuccessUpdateOrderSubscribeResponseOne!
  }
`;

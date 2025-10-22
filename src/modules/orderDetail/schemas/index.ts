export const orderDetailSchema = `
  type OrderDetail {
    id: ID
    order_no: String
    product_name: String
    product_cover_image: String
    sku: String
    spu: String
    quantity: Int
    price: Float
    discount: Float
    profit: Float
    product_id: String
    order_id: String
    category_id: String
    status: BaseStatus
    payment_status: PaymentStatus
    sign_in_status: SignInStatus
    order_status: OrderStatus
    inventory: InventoryType
    shop_id: String
    shop: Shop
    delivery_type: DeliveryTypeEnum
    customer_id: String
    customerData: Customer
    logistics: Logistics
    order: Order
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  } 

  input InventoryInput {
    my_inventory: Float
    total_inventory: Float
  }
  type InventoryType {
    my_inventory: Float
    total_inventory: Float
  }

  input CreateOrderDetailInput {
    quantity: Int
    price: Float
    discount: Float
    product_id: String
    inventory: InventoryInput
  }

  input UpdateOrderDetailInput {
    quantity: Int
    price: Float
    discount: Float
    product_id: String
    inventory: InventoryInput
  }

  input OrderDetailWhereInput {
    order_no: String!
    order_status: OrderStatus
    createdAtBetween: DateBetweenInput
  }

  type SuccessOrderDetailResponseOne {
    success: Boolean!
    data: Order
    error: Error
  }

  type SuccessOrderDetailResponseMany {
    success: Boolean!
    total: Int
    data: [OrderDetail]
    error: Error
  } 

   type Query {
     shopGetOrderDetails(where: OrderDetailWhereInput!, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessOrderDetailResponseMany!
     customerGetOrderDetails(where: OrderDetailWhereInput!, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessOrderDetailResponseMany!
     adminGetOrderDetails(where: OrderDetailWhereInput!, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessOrderDetailResponseMany!
   }

 # type Mutation {
 #   createOrderDetail(data: CreateOrderDetailInput!): SuccessOrderDetailResponseOne! 
 # }
`;

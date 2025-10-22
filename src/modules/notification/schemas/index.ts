export const notificationSchema = `
  type Notification {
    id: ID
    title: String
    description: String
    customer_id: String
    reference_id: String
    is_read: Boolean
    data: JSON
    notification_type: NotificationType
    shop_id: String
    status: BaseStatus
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  } 

  enum NotificationType {
    DEALER_APPLICATION
    PRODUCT_APPLICATION
    WITHDRAWAL
    RECHARGE
    ORDER
    INVENTORY_SHIPMENT
    FUND_PUNISH
    SHOP_REQUEST_VIP
  }

  input NotificationWhereInput {
    keyword: String
    status: BaseStatus
    notification_type: NotificationType
    shop_id: String
    is_read: Boolean
    createdAtBetween: DateBetweenInput
  }

  type SuccessNotificationResponseOne {
    success: Boolean!
    data: Notification
    error: Error
  }

  type SuccessNotificationResponseMany {
    success: Boolean!
    total: Int
    data: [Notification]
    error: Error
  } 

  type Query {
    shopGetNotifications(where: NotificationWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessNotificationResponseMany!
  }

   type Mutation {
     shopReadNotification(id: ID!): SuccessNotificationResponseOne
   }
`;

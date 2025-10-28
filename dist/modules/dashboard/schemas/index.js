"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardSchema = void 0;
exports.dashboardSchema = `
  type CustomerDasboard {
    total_order: String
    order_status: String
  }

  type ShopDashboard {
    total: String
    increase: String
  }

  type AdminDashboard {
    total: String
    increase: String
  }

  input WhereOrderDasboardInput {
    order_status: OrderStatus = "SUCCESS"
  } 
 

  type SuccessCustomerDasboardResponse {
    success: Boolean!
    data: CustomerDasboard
    error: Error
  } 

  type SuccessShopDashboardResponse {
    success: Boolean!
    data: ShopDashboard
    error: Error
  } 

  type SuccessAdminDashboardResponse {
    success: Boolean!
    data: AdminDashboard
    error: Error
  } 

   type Query {
    customerGetOrderDashboard(where: WhereOrderDasboardInput!): SuccessCustomerDasboardResponse
    
    shopGetProductDashboard: SuccessShopDashboardResponse
    shopGetUnreadMessageDashboard: SuccessShopDashboardResponse
    shopGetTotalIncomeDashboard: SuccessShopDashboardResponse
    shopGetTotalExpenseDashboard: SuccessShopDashboardResponse
    shopGetTotalOrderDashboard: SuccessShopDashboardResponse
    shopGetTotalNewOrderDashboard: SuccessShopDashboardResponse
    shopGetTotalCanceledOrderDashboard: SuccessShopDashboardResponse
    shopGetIllegalOperationDashboard: SuccessShopDashboardResponse
    shopGetTotalTodayIncomeDashboard: SuccessShopDashboardResponse
    shopGetTotalTodayProfitDashboard: SuccessShopDashboardResponse
    
    # Admin dashboard
    adminGetProductDashboard: SuccessAdminDashboardResponse
    # adminGetUnreadMessageDashboard: SuccessAdminDashboardResponse
    adminGetTotalIncomeDashboard: SuccessAdminDashboardResponse
    # adminGetTotalExpenseDashboard: SuccessAdminDashboardResponse
    adminGetTotalOrderDashboard: SuccessAdminDashboardResponse
    adminGetTotalNewOrderDashboard: SuccessAdminDashboardResponse
    adminGetTotalCanceledOrderDashboard: SuccessAdminDashboardResponse
    adminGetIllegalOperationDashboard: SuccessAdminDashboardResponse
    adminGetTotalTodayIncomeDashboard: SuccessAdminDashboardResponse
    # adminGetTotalTodayProfitDashboard: SuccessAdminDashboardResponse
   } 
`;

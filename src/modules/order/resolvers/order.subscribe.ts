import pubsub from "../../../utils/pubsub";

export const orderSubscribe = {
  subscribeNewOrder: {
    subscribe: (_: any, { shopId }: { shopId: string }) => {
      if (shopId) return pubsub.asyncIterator(`NEW_ORDER_SUBSCRIBE_${shopId}`);
      // Shop-specific channel
      else return pubsub.asyncIterator(`NEW_ORDER_SUBSCRIBE`); // Global new order
    },
  },
  subscribeUpdateOrderStatus: {
    subscribe: (_: any, { shopId }: { shopId: string }) => {
      if (shopId)
        return pubsub.asyncIterator(`UPDATE_ORDER_STATUS_SBUSCRIBE_${shopId}`);
      // Shop-specific channel
      else return pubsub.asyncIterator(`UPDATE_ORDER_STATUS_SBUSCRIBE`); // Global new order
    },
  },
};

import pubsub from "../../../utils/pubsub";

export const shopSubscribe = {
  subscribeNewRequestVIP: {
    subscribe: (_: any) => {
      return pubsub.asyncIterator(`NEW_SHOP_REQUEST_VIP_SUBSCRIBE`); // Global new order
    },
  },
};

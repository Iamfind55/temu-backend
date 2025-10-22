export enum EDeliveryType {
  STANDARD = "STANDARD", // Standard delivery (e.g., 3-5 business days)
  EXPRESS = "EXPRESS", // Express delivery (e.g., 1-2 business days)
  SAME_DAY = "SAME_DAY", // Same-day delivery
  NEXT_DAY = "NEXT_DAY", // Next-day delivery
  PICKUP = "PICKUP", // Customer picks up the order
  DIGITAL = "DIGITAL", // Digital delivery (e.g., for downloadable products)
  INTERNATIONAL = "INTERNATIONAL", // International delivery
  FREE = "FREE", // Free delivery
  DOOR_TO_DOOR = "DOOR_TO_DOOR",
}

export enum ETransportMode {
  AIR = "air",
  SEA = "sea",
  ROAD = "road",
  RAIL = "rail",
  WAREHOUSE = "warehouse",
  PICKUP = "pickup",
}


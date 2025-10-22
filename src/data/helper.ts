export const loadAddressData = () => {
  try {
    const addressData = require("./addresses.json");
    return addressData;
  } catch (error: any) {
    console.error("Failed to load address data:", error.message);
    throw new Error("Unable to load address data.");
  }
};

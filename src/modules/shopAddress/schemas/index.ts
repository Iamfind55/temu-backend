export const shopAddressSchema = `
input CountryInput {
  id: Int
  country: String
  cn_country: String
}

input StateInput {
  id: Int
  state: String
  cn_state: String
}

input CityInput {
  id: Int
  city: String
  cn_city: String
}
  
type CountryType {
  id: Int
  country: String
  cn_country: String
  isState: Boolean
}

type StateType {
  id: Int
  state: String
  cn_state: String
}

type CityType {
  id: Int
  city: String
  cn_city: String
}

type ShopAddress {
    id: ID
    country: CountryType
    state: StateType
    city: CityType
    address: String
    postal_code: String
    email: String
    phone_number: String
    is_used: Boolean
    shop_id: String
    customer_id: String
    status: BaseStatus
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  } 

  input CreateShopAddressInput {
    country: CountryInput
    state: StateInput
    city: CityInput
    address: String
    postal_code: String
    email: String
    phone_number: String
    shop_id: String
    status: BaseStatus = ACTIVE
  }

  input UpdateShopAddressInput {
    id: ID!
    country: CountryInput
    state: StateInput
    city: CityInput
    address: String
    postal_code: String
    email: String
    phone_number: String
    shop_id: String
    status: BaseStatus
  }

  input ShopAddressWhereInput {
    shop_id: String
    customer_id: String
    keyword: String
    status: BaseStatus
    createdAtBetween: DateBetweenInput
  }

  type SuccessShopAddressResponseOne {
    success: Boolean!
    data: ShopAddress
    error: Error
  }

  type SuccessShopAddressResponseMany {
    success: Boolean!
    total: Int
    data: [ShopAddress]
    error: Error
  } 
  type SuccessCountryResponseMany {
    success: Boolean!
    total: Int
    data: [CountryType]
    error: Error
  } 
  type SuccessStateResponseMany {
    success: Boolean!
    total: Int
    data: [StateType]
    error: Error
  } 
  type SuccessCityResponseMany {
    success: Boolean!
    total: Int
    data: [CityType]
    error: Error
  } 

  type Query {
    getShopAddresses(where: ShopAddressWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessShopAddressResponseMany!
    getShopAddress(id: ID!): SuccessShopAddressResponseOne!
    getCustomerAddresses(where: ShopAddressWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessShopAddressResponseMany!
    getCustomerAddress(id: ID!): SuccessShopAddressResponseOne!

    getCountries: SuccessCountryResponseMany
    getStates(countryId: ID!): SuccessStateResponseMany
    getCities(countryId: ID!, stateId: ID): SuccessCityResponseMany
  }

  type Mutation {
    createShopAddress(data: CreateShopAddressInput!): SuccessShopAddressResponseOne!
    updateShopAddress(data: UpdateShopAddressInput!): SuccessShopAddressResponseOne!
    setShopAddressDefaultToUse(id: ID!): SuccessShopAddressResponseOne!
    deleteShopAddress(id: ID!): SuccessShopAddressResponseOne!

    createCustomerAddress(data: CreateShopAddressInput!): SuccessShopAddressResponseOne!
    updateCustomerAddress(data: UpdateShopAddressInput!): SuccessShopAddressResponseOne!
    setCustomerAddressDefaultToUse(id: ID!): SuccessShopAddressResponseOne!
    deleteCustomerAddress(id: ID!): SuccessShopAddressResponseOne!
  }
`;

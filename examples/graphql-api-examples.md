# Temu API GraphQL Examples

This document shows how to use the Temu API endpoints via GraphQL with all necessary headers from curl commands.

## Table of Contents
1. [Get Product Reviews](#get-product-reviews)
2. [Generic API Call](#generic-api-call)
3. [Complete Example with Headers](#complete-example-with-headers)

---

## 1. Get Product Reviews

Fetch product reviews using the `/api/bg/engels/reviews/list` endpoint.

### Query

```graphql
query GetTemuReviews(
  $goodsId: String!
  $page: Int
  $size: Int
  $cookies: String
  $antiContent: String
  $verifyAuthToken: String
  $xPhanData: String
  $referer: String
) {
  getTemuReviews(
    goodsId: $goodsId
    page: $page
    size: $size
    cookies: $cookies
    antiContent: $antiContent
    verifyAuthToken: $verifyAuthToken
    xPhanData: $xPhanData
    referer: $referer
  ) {
    success
    status
    data
    error {
      message
      code
    }
  }
}
```

### Variables

```json
{
  "goodsId": "601099931631019",
  "page": 1,
  "size": 10,
  "cookies": "api_uid=Cm14BWjej0xSFQBlXwsmAg==; timezone=Asia%2FVientiane; AccessToken=TLQ6UKXL3CJ5FOMJ4XIK5TGHC3XEGFSKAG6JRJ72EE7QD4MSCZEA0110d3008b73; isLogin=1762886037002",
  "antiContent": "0GVNPEVJqdLWJWHeg58pjqYPS3KPK4P6v3cpOwO878lc3joR5xWhSbqWIUbxkBd4pM8pVZnHdncRXh9-RxnlhczYqj3wQSvee-5H9oTW4povILOoacHB1AdzOoScu4SKgpKgEOM0zH5GvpIdYa_DuYaYLN37WvYmCEzYLMU_4xtHm4AYMHhFcPDuNG6S1_bQFldmoRyEVmwbYl13eHki2QerAs6bMiRdFpMDllwM2EzHmm5ECSn8hs3ANCZY3WigWT8engG-pq8tLzJlLN35opyaIZrRZkRD5rric6s3e7DrVvRFmUsHeUC9amYV4GnpcLByYdxoBxGye73VpQWBBGAMZ52UTEtNO6mILecmOviQIMr07pGJK80tZ3Rnv6iaF1d1vcQsxjHaVMH--TjfPWiRmX90La8VVaaeyVV7LqapW5NChEv6cX1swc7nnWhlwWcPUQTUggUY0rH-BjsAKe4h764Our9ApRaKWvzGbSdo5fooVV37DXxpEG7xwobCJQzZD7JE1VCXqwQW8DIeR3FCK1ebIKxRFkFu-KeUD7QnNBm-heB-SaDOa8uEQOSfNJy7Lijmwo_CeLT9uA3sM5851kjvJngnzOkxBGmEFnVOvOqxG62Iz6IzYPMb8ZEx72dRnF7qHVBVXPhXyZBV621q-EvV2cPCaq_36fXw3iiDr_K_p1i_JPFqGzxmbbEQNMPc1VER-8j4inAhb7uajs8s4luEIQfCd_8GnguCCFp1rDB-WhBcbFWvcAYAN-8YO9SyhoD0bZ703Ztj_-CyCBiiCHBOckk9CTfLJXg",
  "verifyAuthToken": "XRGJjTHeGn8CsGiO0cNmXwe810f9fd39a7f2c98",
  "xPhanData": "0aeJx7xMxiYPiIWS7a0NzM2MDEAkyZxwIASSYFqw",
  "referer": "https://www.temu.com/-16-inch-brushless-chainsaw-36v-compatible-with--battery-brushless-motor-8000rpm-chains-brake-auto-lubrication--ideal-for---cutting-and-pruning--tool-without-battery-g-601099931631019.html"
}
```

### Expected Response

```json
{
  "data": {
    "getTemuReviews": {
      "success": true,
      "status": 200,
      "data": {
        "result": {
          "reviews": [
            {
              "review_id": "...",
              "comment": "...",
              "rating": 5,
              "images": [...],
              "user": {...}
            }
          ],
          "total": 100
        }
      },
      "error": null
    }
  }
}
```

---

## 2. Generic API Call

Use the generic `callTemuAPI` for any Temu API endpoint.

### Query

```graphql
query CallTemuAPI(
  $endpoint: String!
  $method: String
  $queryParams: String
  $body: String
  $cookies: String
  $antiContent: String
  $verifyAuthToken: String
  $xPhanData: String
  $referer: String
) {
  callTemuAPI(
    endpoint: $endpoint
    method: $method
    queryParams: $queryParams
    body: $body
    cookies: $cookies
    antiContent: $antiContent
    verifyAuthToken: $verifyAuthToken
    xPhanData: $xPhanData
    referer: $referer
  ) {
    success
    status
    data
    error {
      message
      code
    }
  }
}
```

### Variables for Reviews

```json
{
  "endpoint": "/api/bg/engels/reviews/list",
  "method": "GET",
  "queryParams": "{\"goods_id\":\"601099931631019\",\"page\":\"1\",\"size\":\"10\"}",
  "cookies": "api_uid=Cm14BWjej0xSFQBlXwsmAg==; AccessToken=TLQ6UKXL3CJ5FOMJ4XIK5TGHC3XEGFSKAG6JRJ72EE7QD4MSCZEA0110d3008b73",
  "antiContent": "YOUR_ANTI_CONTENT_TOKEN",
  "verifyAuthToken": "YOUR_VERIFY_AUTH_TOKEN",
  "xPhanData": "YOUR_X_PHAN_DATA",
  "referer": "https://www.temu.com/product-url"
}
```

---

## 3. Complete Example with Headers

### How to Get Required Headers

The headers come from your curl command. Here's how to extract them:

#### From curl command:

```bash
curl 'https://www.temu.com/api/bg/engels/reviews/list?goods_id=601099931631019&page=1&size=10' \
  -H 'anti-content: 0GVNPEVJqdLWJW...' \
  -b 'api_uid=Cm14BWjej0xSFQBlXwsmAg==; AccessToken=TLQ6UKXL3CJ5FO...' \
  -H 'verifyauthtoken: XRGJjTHeGn8CsGiO0cNmXwe810f9fd39a7f2c98' \
  -H 'x-phan-data: 0aeJx7xMxiYPiIWS7a0NzM2MDEAkyZxwIASSYFqw'
```

#### Map to GraphQL Variables:

- `-b` (cookie header) → `cookies`
- `-H 'anti-content: ...'` → `antiContent`
- `-H 'verifyauthtoken: ...'` → `verifyAuthToken`
- `-H 'x-phan-data: ...'` → `xPhanData`
- `-H 'referer: ...'` → `referer`

### GraphQL Playground Example

```graphql
# Query
query GetReviews {
  getTemuReviews(
    goodsId: "601099931631019"
    page: 1
    size: 10
    cookies: "api_uid=Cm14BWjej0xSFQBlXwsmAg==; timezone=Asia%2FVientiane; img_sup=avif%2Cwebp; _bee=bqcwasrUCxFpOrX3cd6r56wDeumPZanl; AccessToken=TLQ6UKXL3CJ5FOMJ4XIK5TGHC3XEGFSKAG6JRJ72EE7QD4MSCZEA0110d3008b73; isLogin=1762886037002"
    antiContent: "0GVNPEVJqdLWJWHeg58pjqYPS3KPK4P6v3cpOwO878lc3joR5xWhSbqWIUbxkBd4pM8pVZnHdncRXh9-RxnlhczYqj3wQSvee-5H9oTW4povILOoacHB1AdzOoScu4SKgpKgEOM0zH5GvpIdYa_DuYaYLN37WvYmCEzYLMU_4xtHm4AYMHhFcPDuNG6S1_bQFldmoRyEVmwbYl13eHki2QerAs6bMiRdFpMDllwM2EzHmm5ECSn8hs3ANCZY3WigWT8engG-pq8tLzJlLN35opyaIZrRZkRD5rric6s3e7DrVvRFmUsHeUC9amYV4GnpcLByYdxoBxGye73VpQWBBGAMZ52UTEtNO6mILecmOviQIMr07pGJK80tZ3Rnv6iaF1d1vcQsxjHaVMH--TjfPWiRmX90La8VVaaeyVV7LqapW5NChEv6cX1swc7nnWhlwWcPUQTUggUY0rH-BjsAKe4h764Our9ApRaKWvzGbSdo5fooVV37DXxpEG7xwobCJQzZD7JE1VCXqwQW8DIeR3FCK1ebIKxRFkFu-KeUD7QnNBm-heB-SaDOa8uEQOSfNJy7Lijmwo_CeLT9uA3sM5851kjvJngnzOkxBGmEFnVOvOqxG62Iz6IzYPMb8ZEx72dRnF7qHVBVXPhXyZBV621q-EvV2cPCaq_36fXw3iiDr_K_p1i_JPFqGzxmbbEQNMPc1VER-8j4inAhb7uajs8s4luEIQfCd_8GnguCCFp1rDB-WhBcbFWvcAYAN-8YO9SyhoD0bZ703Ztj_-CyCBiiCHBOckk9CTfLJXg"
    verifyAuthToken: "XRGJjTHeGn8CsGiO0cNmXwe810f9fd39a7f2c98"
    xPhanData: "0aeJx7xMxiYPiIWS7a0NzM2MDEAkyZxwIASSYFqw"
    referer: "https://www.temu.com/-16-inch-brushless-chainsaw-36v-compatible-with--battery-brushless-motor-8000rpm-chains-brake-auto-lubrication--ideal-for---cutting-and-pruning--tool-without-battery-g-601099931631019.html"
  ) {
    success
    status
    data
    error {
      message
      code
    }
  }
}
```

---

## 4. Other API Endpoints

You can use `callTemuAPI` for any Temu endpoint:

### Example: Get Product Details

```graphql
query GetProductDetails {
  callTemuAPI(
    endpoint: "/api/bg/engels/goods/detail"
    queryParams: "{\"goods_id\":\"601099931631019\"}"
    cookies: "YOUR_COOKIES"
    antiContent: "YOUR_ANTI_CONTENT"
    verifyAuthToken: "YOUR_VERIFY_TOKEN"
  ) {
    success
    data
  }
}
```

### Example: Get Categories

```graphql
query GetCategories {
  callTemuAPI(
    endpoint: "/api/bg/engels/category/list"
    cookies: "YOUR_COOKIES"
  ) {
    success
    data
  }
}
```

---

## 5. Important Notes

### Authentication Headers

1. **cookies**: Required for authenticated requests. Contains session tokens.
2. **antiContent**: Anti-bot protection token. Changes frequently.
3. **verifyAuthToken**: Verification token for API requests.
4. **xPhanData**: Additional tracking/security data.
5. **referer**: Product page URL for context.

### Token Lifecycle

- **cookies**: Valid for 7-30 days
- **antiContent**: Valid for ~5-15 minutes
- **verifyAuthToken**: Valid for ~1 hour
- **xPhanData**: Valid for current session

### Getting Fresh Tokens

To get fresh tokens, use browser DevTools:

1. Open browser DevTools (F12)
2. Go to Network tab
3. Visit Temu product page
4. Click "Reviews" or trigger API call
5. Find the `/api/bg/engels/reviews/list` request
6. Copy headers from Request Headers

### Simplified Query (May Fail Without Auth)

```graphql
query SimpleReviews {
  getTemuReviews(goodsId: "601099931631019") {
    success
    data
  }
}
```

This will work if the API doesn't require authentication, but most Temu APIs do require it.

---

## 6. TypeScript/JavaScript Usage

```typescript
import { ApolloClient, gql } from '@apollo/client';

const GET_REVIEWS = gql`
  query GetTemuReviews($goodsId: String!, $cookies: String!) {
    getTemuReviews(
      goodsId: $goodsId
      cookies: $cookies
      page: 1
      size: 10
    ) {
      success
      data
      error {
        message
      }
    }
  }
`;

const result = await client.query({
  query: GET_REVIEWS,
  variables: {
    goodsId: '601099931631019',
    cookies: 'api_uid=...; AccessToken=...',
  },
});

console.log(result.data.getTemuReviews.data);
```

---

## 7. Testing in GraphQL Playground

1. Start your server: `npm run dev`
2. Open GraphQL Playground: `http://localhost:4000/graphql`
3. Copy one of the queries above
4. Fill in variables with your tokens
5. Click "Play" button
6. View results

---

## Troubleshooting

### Error: "Authentication required"
- Check if cookies are valid
- Ensure AccessToken is present in cookies
- Check if tokens haven't expired

### Error: "Anti-content validation failed"
- antiContent token has expired
- Get fresh token from browser DevTools

### Error: 403 Forbidden
- Verify all headers are correct
- Check if account is logged in
- Try refreshing all tokens

### No data returned
- Check if goodsId is correct
- Verify product exists on Temu
- Ensure cookies are from same region/language as product

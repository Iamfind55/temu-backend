# Temu "System busy!" Error - Complete Solution

## Problem

When calling Temu's API, you get this error on the second request:
```json
{
  "error_msg": "System busy!"
}
```

**Root Cause:** The `anti-content` header token is **SINGLE-USE ONLY**. After one request, it's invalid.

---

## Solutions

### ✅ Solution 1: Automatic Token Extraction (RECOMMENDED)

Use the new `getTemuReviewsAuto` query that automatically extracts fresh tokens using Puppeteer.

#### GraphQL Query:

```graphql
query GetReviewsAuto {
  getTemuReviewsAuto(
    productUrl: "https://www.temu.com/-16-inch-brushless-chainsaw-36v-compatible-with--battery-brushless-motor-8000rpm-chains-brake-auto-lubrication--ideal-for---cutting-and-pruning--tool-without-battery-g-601099931631019.html"
    goodsId: "601099931631019"
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

**How it works:**
1. Opens Puppeteer browser
2. Navigates to product page
3. Intercepts API network requests
4. Extracts fresh `anti-content`, `verifyauthtoken`, and `x-phan-data` tokens
5. Uses those tokens immediately to fetch reviews
6. Returns the data

**Pros:**
- ✅ No manual token management
- ✅ Always uses fresh tokens
- ✅ Works every time

**Cons:**
- ⚠️ Slower (needs to open browser)
- ⚠️ Higher resource usage

---

### ✅ Solution 2: Manual Fresh Tokens

Get fresh tokens from browser DevTools before each request.

#### Step 1: Get Fresh Tokens

1. Open Chrome DevTools (F12)
2. Go to **Network** tab
3. Visit a Temu product page
4. Scroll down to load reviews (or click Reviews section)
5. Find the request: `/api/bg/engels/reviews/list`
6. Click on it → **Headers** tab → **Request Headers**
7. Copy these values:

```
anti-content: 0GVNPEVJqdLWJW... [LONG STRING]
verifyauthtoken: XRGJjTHeGn8CsGiO0cNm...
x-phan-data: 0aeJx7xMxiYPiIWS7a0NzM...
cookie: api_uid=...; AccessToken=...; isLogin=...
```

#### Step 2: Use in GraphQL

```graphql
query GetReviews {
  getTemuReviews(
    goodsId: "601099931631019"
    page: 1
    size: 10
    cookies: "api_uid=Cm14BWjej0xSFQBlXwsmAg==; AccessToken=TLQ6UKXL3CJ5FOMJ4XIK5TGHC3XEGFSKAG6JRJ72EE7QD4MSCZEA0110d3008b73; isLogin=1762886037002"
    antiContent: "0GVNPEVJqdLWJWHeg58pjqYPS3KPK4P6v3cpOwO878lc3joR5xWhSbqWIUbxkBd4pM8pVZnHdncRXh9-RxnlhczYqj3wQSvee-5H9oTW4povILOoacHB1AdzOoScu4SKgpKgEOM0zH5GvpIdYa_DuYaYLN37WvYmCEzYLMU_4xtHm4AYMHhFcPDuNG6S1_bQFldmoRyEVmwbYl13eHki2QerAs6bMiRdFpMDllwM2EzHmm5ECSn8hs3ANCZY3WigWT8engG-pq8tLzJlLN35opyaIZrRZkRD5rric6s3e7DrVvRFmUsHeUC9amYV4GnpcLByYdxoBxGye73VpQWBBGAMZ52UTEtNO6mILecmOviQIMr07pGJK80tZ3Rnv6iaF1d1vcQsxjHaVMH--TjfPWiRmX90La8VVaaeyVV7LqapW5NChEv6cX1swc7nnWhlwWcPUQTUggUY0rH-BjsAKe4h764Our9ApRaKWvzGbSdo5fooVV37DXxpEG7xwobCJQzZD7JE1VCXqwQW8DIeR3FCK1ebIKxRFkFu-KeUD7QnNBm-heB-SaDOa8uEQOSfNJy7Lijmwo_CeLT9uA3sM5851kjvJngnzOkxBGmEFnVOvOqxG62Iz6IzYPMb8ZEx72dRnF7qHVBVXPhXyZBV621q-EvV2cPCaq_36fXw3iiDr_K_p1i_JPFqGzxmbbEQNMPc1VER-8j4inAhb7uajs8s4luEIQfCd_8GnguCCFp1rDB-WhBcbFWvcAYAN-8YO9SyhoD0bZ703Ztj_-CyCBiiCHBOckk9CTfLJXg"
    verifyAuthToken: "XRGJjTHeGn8CsGiO0cNmXwe810f9fd39a7f2c98"
    xPhanData: "0aeJx7xMxiYPiIWS7a0NzM2MDEAkyZxwIASSYFqw"
    referer: "https://www.temu.com/-16-inch-brushless-chainsaw-36v-compatible-with--battery-brushless-motor-8000rpm-chains-brake-auto-lubrication--ideal-for---cutting-and-pruning--tool-without-battery-g-601099931631019.html"
  ) {
    success
    status
    data
  }
}
```

**Pros:**
- ✅ Fast (no browser needed)
- ✅ Low resource usage

**Cons:**
- ⚠️ Manual work required
- ⚠️ Tokens expire after 1 use
- ⚠️ Need to get fresh tokens for each request

---

### ✅ Solution 3: Response Caching

Cache API responses to avoid repeated calls.

```typescript
// Pseudo-code
const cache = new Map();

async function getCachedReviews(goodsId: string) {
  const cacheKey = `reviews-${goodsId}`;
  const cached = cache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < 3600000) {
    // Return cached data if less than 1 hour old
    return cached.data;
  }

  // Fetch fresh data
  const data = await fetchReviews(goodsId);
  cache.set(cacheKey, { data, timestamp: Date.now() });
  return data;
}
```

---

## Token Lifecycle

| Token | Lifetime | Use Limit |
|-------|----------|-----------|
| `cookies` | 7-30 days | Unlimited |
| `anti-content` | ~5-15 minutes | **1 USE ONLY** ⚠️ |
| `verifyauthtoken` | ~1 hour | Multiple |
| `x-phan-data` | Current session | Multiple |

---

## Available Queries

### 1. `getTemuReviewsAuto` (Automatic)

```graphql
query {
  getTemuReviewsAuto(
    productUrl: "https://www.temu.com/product-url"
    goodsId: "601099931631019"
  ) {
    success
    data
  }
}
```

### 2. `getTemuReviews` (Manual Tokens)

```graphql
query {
  getTemuReviews(
    goodsId: "601099931631019"
    cookies: "..."
    antiContent: "..."
    verifyAuthToken: "..."
    xPhanData: "..."
  ) {
    success
    data
  }
}
```

### 3. `callTemuAPI` (Generic API)

```graphql
query {
  callTemuAPI(
    endpoint: "/api/bg/engels/reviews/list"
    queryParams: "{\"goods_id\":\"601099931631019\"}"
    cookies: "..."
    antiContent: "..."
  ) {
    success
    data
  }
}
```

---

## Best Practices

### ✅ DO:
- Use `getTemuReviewsAuto` for development/testing
- Cache responses when possible
- Get fresh tokens from DevTools for production
- Handle "System busy!" errors gracefully
- Implement retry logic with fresh tokens

### ❌ DON'T:
- Reuse `anti-content` tokens
- Make rapid successive requests
- Hardcode tokens in code
- Ignore rate limiting

---

## Error Handling Example

```typescript
async function fetchReviewsSafely(goodsId: string) {
  try {
    // Try with auto token extraction
    const result = await getTemuReviewsAuto(productUrl, goodsId);

    if (result.success) {
      return result.data;
    }

    // If failed with "System busy!", get fresh tokens
    if (result.data?.error_msg === "System busy!") {
      console.log("Token expired, getting fresh tokens...");
      // Retry with fresh tokens
      return await getTemuReviewsAuto(productUrl, goodsId);
    }

    throw new Error(result.error);
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return null;
  }
}
```

---

## Files Created

1. **`src/utils/temuTokenManager.ts`** - Token lifecycle management
2. **`src/utils/temuTokenExtractor.ts`** - Automatic token extraction
3. **GraphQL Resolver:** `getTemuReviewsAuto` - Auto-fetch with fresh tokens

---

## Quick Reference

### Get Fresh Tokens (Chrome DevTools):
```
F12 → Network → Visit product page → Find /reviews/list request → Copy headers
```

### Use Auto Query:
```graphql
query {
  getTemuReviewsAuto(
    productUrl: "https://www.temu.com/..."
    goodsId: "601099931631019"
  ) { success data }
}
```

### Token Expiry?
```
anti-content: ⚠️ SINGLE USE
cookies: ✅ Days/weeks
verifyauthtoken: ✅ Hours
x-phan-data: ✅ Session
```

---

## Support

If you encounter "System busy!" error:
1. Get fresh tokens from browser DevTools
2. Use `getTemuReviewsAuto` instead
3. Check token expiry
4. Implement response caching
5. Add retry logic with exponential backoff

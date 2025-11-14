# Fetch Reviews for All Products in Database

This guide shows how to automatically fetch reviews for all products in your database.

## 🎯 Overview

The `fetchAllProductReviews` function:
- Fetches products from your database (paginated)
- Loops through each product
- Fetches reviews from Temu API for each product
- Saves reviews to `ProductComment` table
- Creates or finds customers for each review
- Prevents duplicate reviews
- Returns summary of operation

---

## 🚀 Usage via GraphQL

### Query

```graphql
query FetchAllReviews {
  fetchAllProductReviews(
    page: 1
    limit: 10
    cookies: "api_uid=Cm14BWjej0xSFQBlXwsmAg==; AccessToken=TLQ6UKXL3CJ5FOMJ4XIK5TGHC3XEGFSKAG6JRJ72EE7QD4MSCZEA0110d3008b73; isLogin=1762886037002"
    antiContent: "YOUR_ANTI_CONTENT_TOKEN"
    verifyAuthToken: "YOUR_VERIFY_TOKEN"
    xPhanData: "YOUR_X_PHAN_DATA"
    referer: "https://www.temu.com/"
  ) {
    success
    totalProducts
    totalReviewsFetched
    errors
  }
}
```

### Variables

```json
{
  "page": 1,
  "limit": 10,
  "cookies": "api_uid=Cm14BWjej0xSFQBlXwsmAg==; timezone=Asia%2FVientiane; AccessToken=TLQ6UKXL3CJ5FOMJ4XIK5TGHC3XEGFSKAG6JRJ72EE7QD4MSCZEA0110d3008b73; isLogin=1762886037002; __cf_bm=dQjVn3caeWozR8PCrgdN4SzlwHuObOyl8ekKvnBiAC8-1763051216-1.0.1.1-Rvhn7CkxOWhtXUovg5IMQeWbc9wDeHLrXCbua.aogtbyXD0vjog2C5pM50IlKU.jHEwAKtQTdRRHppHwe6HBW6B0VdV2OZ3vc93vk1LCSwo"
}
```

### Response

```json
{
  "data": {
    "fetchAllProductReviews": {
      "success": true,
      "totalProducts": 10,
      "totalReviewsFetched": 87,
      "errors": []
    }
  }
}
```

---

## 📊 What Happens

### 1. Fetch Products
```sql
SELECT * FROM products
ORDER BY created_at DESC
LIMIT 10 OFFSET 0
```

### 2. For Each Product
- Check if `good_id` exists
- Fetch reviews from Temu API
- Parse review data
- Save to database

### 3. Save Reviews
For each review:
- Find or create customer
- Check if review already exists (prevents duplicates)
- Create ProductComment entry
- Link to product and customer

### 4. Rate Limiting
- 2 second delay between products
- Prevents "System busy!" errors

---

## 🔧 Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `page` | Int | No | 1 | Page number for products |
| `limit` | Int | No | 10 | Products per page |
| `cookies` | String | Yes | - | Authentication cookies |
| `antiContent` | String | No | - | Anti-bot token |
| `verifyAuthToken` | String | No | - | Verification token |
| `xPhanData` | String | No | - | Tracking data |
| `referer` | String | No | - | Referer URL |

---

## ⚠️ Important Notes

### Token Expiry Issue
The `anti-content` token is **SINGLE-USE**. This means:
- ✅ First product: Works
- ❌ Second product: "System busy!" error

### Solutions:

#### Option 1: Use without anti-content (may work)
```graphql
mutation {
  fetchAllProductReviews(
    cookies: "YOUR_COOKIES"
  ) {
    success
    totalReviewsFetched
  }
}
```

#### Option 2: Fetch one product at a time with fresh tokens
```graphql
# Fetch page 1 (products 1-10)
fetchAllProductReviews(page: 1, limit: 1, antiContent: "FRESH_TOKEN_1")

# Get fresh token, then fetch page 2
fetchAllProductReviews(page: 2, limit: 1, antiContent: "FRESH_TOKEN_2")
```

#### Option 3: Increase delay and retry logic
The function already has:
- 2 second delay between products
- Error handling (continues on failure)
- Logs errors in response

---

## 📝 Database Schema

### ProductComment Table
```typescript
{
  id: string
  goods_id: string        // From Temu
  comment: string
  score: number           // 1-5 rating
  time_ms: Date          // Review date
  pictures: string       // Comma-separated URLs
  customer_id: string    // Foreign key
  product_id: string     // Foreign key
  created_at: Date
  updated_at: Date
}
```

### Customer Table
```typescript
{
  id: string
  firstName: string      // Reviewer name
  email: string         // Generated: name@temu.com
  image: string         // Avatar URL
  created_at: Date
  updated_at: Date
}
```

---

## 🔍 Example Flow

### Step 1: Products in Database
```
Product 1: good_id = "601099931631019"
Product 2: good_id = "602234567890123"
Product 3: good_id = "603345678901234"
```

### Step 2: Fetch Reviews

**Product 1:**
```
✅ Found 10 reviews
✅ Created 3 new customers
✅ Saved 10 comments
⏭️  2 comments already existed (skipped)
```

**Product 2:**
```
❌ Failed: System busy! (anti-content expired)
```

**Product 3:**
```
⏭️  Skipped (previous error)
```

### Step 3: Result
```json
{
  "success": true,
  "totalProducts": 3,
  "totalReviewsFetched": 10,
  "errors": [
    "Product 602234567890123: System busy!",
    "Product 603345678901234: System busy!"
  ]
}
```

---

## 💡 Best Practices

### 1. Batch Processing
Process products in small batches:
```graphql
# Batch 1 (10 products)
fetchAllProductReviews(page: 1, limit: 10)

# Wait, get fresh tokens

# Batch 2 (next 10 products)
fetchAllProductReviews(page: 2, limit: 10)
```

### 2. Monitor Logs
Watch console output:
```
📦 Found 10 products to fetch reviews for

🔄 Fetching reviews for product: 601099931631019
✅ Found 10 reviews for 601099931631019
✅ Saved 10 reviews for product 601099931631019

🔄 Fetching reviews for product: 602234567890123
❌ Failed to fetch reviews for 602234567890123
```

### 3. Handle Errors
Check the `errors` array in response:
```typescript
const result = await fetchAllProductReviews();

if (result.errors.length > 0) {
  console.log('Failed products:', result.errors);
  // Retry or log for manual review
}
```

### 4. Prevent Duplicates
The function automatically checks if a review already exists:
```typescript
const existingComment = await productCommentRepository.findOne({
  where: {
    goods_id: product.good_id,
    customer_id: customer.id,
    comment: review.comment,
  },
});

if (existingComment) {
  console.log('⏭️  Comment already exists, skipping...');
  continue;
}
```

---

## 🛠️ TypeScript Usage

```typescript
import { fetchAllProductReviews } from './utils/fetchProductAPI';

async function fetchReviews() {
  const result = await fetchAllProductReviews({
    page: 1,
    limit: 10,
    cookies: 'YOUR_COOKIES',
    antiContent: 'YOUR_TOKEN',
  });

  console.log(`✅ Fetched ${result.totalReviewsFetched} reviews`);
  console.log(`📦 From ${result.totalProducts} products`);

  if (result.errors.length > 0) {
    console.log('⚠️  Errors:', result.errors);
  }
}
```

---

## 🔄 Pagination Example

Fetch all products (100 total):

```typescript
async function fetchAllReviewsForAllProducts() {
  const totalPages = 10; // 100 products / 10 per page

  for (let page = 1; page <= totalPages; page++) {
    console.log(`Processing page ${page}/${totalPages}`);

    const result = await fetchAllProductReviews({
      page,
      limit: 10,
      cookies: 'YOUR_COOKIES',
    });

    console.log(`Page ${page}: ${result.totalReviewsFetched} reviews fetched`);

    // Wait before next batch
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}
```

---

## 📈 Performance

- **Speed**: ~2-3 seconds per product (with 2s delay)
- **10 products**: ~20-30 seconds
- **100 products**: ~3-5 minutes
- **Bottleneck**: API rate limiting + token expiry

---

## ⚡ Quick Reference

### Fetch 10 products (simple):
```graphql
query {
  fetchAllProductReviews(cookies: "YOUR_COOKIES") {
    success
    totalReviewsFetched
    errors
  }
}
```

### Check what will be fetched:
```sql
SELECT id, good_id, name FROM products
ORDER BY created_at DESC
LIMIT 10;
```

### View saved reviews:
```sql
SELECT pc.*, p.name as product_name, c.firstName as customer_name
FROM product_comments pc
JOIN products p ON pc.product_id = p.id
JOIN customers c ON pc.customer_id = c.id
ORDER BY pc.created_at DESC
LIMIT 20;
```

---

## 🆘 Troubleshooting

### Error: "System busy!"
- **Cause**: anti-content token expired/used
- **Solution**: Get fresh token or fetch without it

### Error: "No good_id"
- **Cause**: Product missing `good_id` field
- **Solution**: Update product with Temu good_id

### No reviews saved
- **Cause**: Reviews already exist in database
- **Solution**: Check logs for "Comment already exists"

### Slow performance
- **Cause**: 2 second delay between products
- **Solution**: This is intentional to avoid rate limiting

---

## 📚 Related

- [TEMU-TOKEN-SOLUTION.md](TEMU-TOKEN-SOLUTION.md) - Token management guide
- [graphql-api-examples.md](examples/graphql-api-examples.md) - GraphQL examples
- [fetchProductAPI.ts](src/utils/fetchProductAPI.ts) - Source code

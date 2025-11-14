/**
 * Temu Token Manager
 * Handles the anti-content token which is single-use and expires quickly
 */

interface TokenCache {
  antiContent: string | null;
  verifyAuthToken: string | null;
  xPhanData: string | null;
  lastUsed: number;
  usageCount: number;
}

class TemuTokenManager {
  private tokenCache: TokenCache = {
    antiContent: null,
    verifyAuthToken: null,
    xPhanData: null,
    lastUsed: 0,
    usageCount: 0,
  };

  // Token expires after 1 use or 5 minutes
  private readonly TOKEN_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes
  private readonly MAX_USAGE_COUNT = 1; // Single use

  /**
   * Check if tokens are expired or used up
   */
  isExpired(): boolean {
    const now = Date.now();
    const timeSinceLastUse = now - this.tokenCache.lastUsed;

    // Token is expired if:
    // 1. It's been used before (single use)
    // 2. More than 5 minutes have passed
    return (
      this.tokenCache.usageCount >= this.MAX_USAGE_COUNT ||
      timeSinceLastUse > this.TOKEN_EXPIRY_MS
    );
  }

  /**
   * Set new tokens
   */
  setTokens(tokens: {
    antiContent?: string;
    verifyAuthToken?: string;
    xPhanData?: string;
  }) {
    this.tokenCache = {
      antiContent: tokens.antiContent || null,
      verifyAuthToken: tokens.verifyAuthToken || null,
      xPhanData: tokens.xPhanData || null,
      lastUsed: Date.now(),
      usageCount: 0,
    };
  }

  /**
   * Get current tokens (marks them as used)
   */
  getTokens(): {
    antiContent: string | null;
    verifyAuthToken: string | null;
    xPhanData: string | null;
  } {
    if (this.isExpired()) {
      console.warn("⚠️  Tokens are expired or already used!");
    }

    this.tokenCache.usageCount++;
    this.tokenCache.lastUsed = Date.now();

    return {
      antiContent: this.tokenCache.antiContent,
      verifyAuthToken: this.tokenCache.verifyAuthToken,
      xPhanData: this.tokenCache.xPhanData,
    };
  }

  /**
   * Clear all tokens
   */
  clearTokens() {
    this.tokenCache = {
      antiContent: null,
      verifyAuthToken: null,
      xPhanData: null,
      lastUsed: 0,
      usageCount: 0,
    };
  }

  /**
   * Get token status
   */
  getStatus() {
    return {
      hasTokens: !!this.tokenCache.antiContent,
      isExpired: this.isExpired(),
      usageCount: this.tokenCache.usageCount,
      timeSinceLastUse: Date.now() - this.tokenCache.lastUsed,
    };
  }
}

// Singleton instance
export const tokenManager = new TemuTokenManager();

/**
 * Helper to extract tokens from browser DevTools
 * Instructions:
 * 1. Open DevTools Network tab
 * 2. Navigate to Temu product page
 * 3. Find API request
 * 4. Copy request headers
 */
export function extractTokensFromHeaders(headers: Record<string, string>): {
  antiContent?: string;
  verifyAuthToken?: string;
  xPhanData?: string;
} {
  return {
    antiContent: headers["anti-content"] || headers["Anti-Content"],
    verifyAuthToken:
      headers["verifyauthtoken"] || headers["VerifyAuthToken"],
    xPhanData: headers["x-phan-data"] || headers["X-Phan-Data"],
  };
}

/**
 * Solution for "System busy!" error
 *
 * The error occurs because anti-content token is single-use.
 * Solutions:
 *
 * 1. GET FRESH TOKENS FROM BROWSER:
 *    - Open DevTools → Network tab
 *    - Visit Temu product page
 *    - Click on any API request (like /reviews/list)
 *    - Copy Request Headers:
 *      - anti-content
 *      - verifyauthtoken
 *      - x-phan-data
 *    - Update these in your GraphQL variables
 *
 * 2. IMPLEMENT TOKEN ROTATION:
 *    - Store multiple fresh tokens
 *    - Rotate to next token when current expires
 *
 * 3. USE PUPPETEER TO GET TOKENS:
 *    - Intercept network requests
 *    - Extract tokens from actual browser requests
 *    - Use those tokens immediately
 *
 * 4. REDUCE REQUEST FREQUENCY:
 *    - Cache API responses
 *    - Only fetch when absolutely necessary
 *    - Use longer cache times
 */
export const TOKEN_REFRESH_GUIDE = `
╔════════════════════════════════════════════════════════════════╗
║  How to Fix "System busy!" Error                              ║
╚════════════════════════════════════════════════════════════════╝

The error occurs because Temu's anti-content token is SINGLE-USE.

📋 Quick Fix - Get Fresh Tokens:

1. Open Chrome DevTools (F12)
2. Go to Network tab
3. Visit: https://www.temu.com/your-product-url
4. Click "Reviews" section or scroll down
5. Find request: "/api/bg/engels/reviews/list"
6. Click on it → Request Headers tab
7. Copy these values:

   anti-content: [LONG STRING]
   verifyauthtoken: [TOKEN]
   x-phan-data: [ENCODED DATA]

8. Use them in your next GraphQL request

⚠️  Important:
- Tokens expire after 1 use
- Get fresh tokens for each new session
- Cookies last longer (hours/days)
- anti-content is the most important one

💡 Best Practice:
- Cache API responses
- Don't make repeated calls with same tokens
- Consider using Puppeteer to auto-get tokens
`;

import puppeteer, { Browser, Page } from "puppeteer";

/**
 * Extract fresh anti-content and other tokens from Temu by intercepting network requests
 */
export async function extractFreshTokens(
  productUrl: string,
  cookies?: any[]
): Promise<{
  antiContent: string | null;
  verifyAuthToken: string | null;
  xPhanData: string | null;
  cookies: string | null;
  success: boolean;
  error?: string;
}> {
  let browser: Browser | null = null;

  try {
    console.log("🔧 Extracting fresh tokens from Temu...");

    browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-blink-features=AutomationControlled",
      ],
    });

    const page = await browser.newPage();

    // Set cookies if provided
    if (cookies && cookies.length > 0) {
      await page.setCookie(...cookies);
    }

    // Set user agent
    await page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"
    );

    // Object to store captured tokens
    const capturedTokens: {
      antiContent: string | null;
      verifyAuthToken: string | null;
      xPhanData: string | null;
    } = {
      antiContent: null,
      verifyAuthToken: null,
      xPhanData: null,
    };

    // Intercept network requests to capture tokens
    await page.setRequestInterception(true);

    page.on("request", (request) => {
      const headers = request.headers();

      // Capture tokens from API requests
      if (request.url().includes("/api/bg/engels/")) {
        if (headers["anti-content"]) {
          capturedTokens.antiContent = headers["anti-content"];
          console.log("✅ Captured anti-content token");
        }
        if (headers["verifyauthtoken"]) {
          capturedTokens.verifyAuthToken = headers["verifyauthtoken"];
          console.log("✅ Captured verifyauthtoken");
        }
        if (headers["x-phan-data"]) {
          capturedTokens.xPhanData = headers["x-phan-data"];
          console.log("✅ Captured x-phan-data");
        }
      }

      request.continue();
    });

    // Navigate to product page
    console.log("🌐 Navigating to product page...");
    await page.goto(productUrl, {
      waitUntil: "networkidle2",
      timeout: 60000,
    });

    // Wait a bit for API calls to complete
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Get cookies
    const pageCookies = await page.cookies();
    const cookieString = pageCookies
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join("; ");

    await browser.close();

    return {
      ...capturedTokens,
      cookies: cookieString,
      success: true,
    };
  } catch (error: any) {
    if (browser) {
      await browser.close();
    }
    console.error("❌ Failed to extract tokens:", error.message);
    return {
      antiContent: null,
      verifyAuthToken: null,
      xPhanData: null,
      cookies: null,
      success: false,
      error: error.message,
    };
  }
}

/**
 * Fetch reviews with automatic token extraction
 */
export async function fetchReviewsWithFreshTokens(
  productUrl: string,
  goodsId: string,
  cookies?: any[]
): Promise<any> {
  console.log("🔄 Fetching reviews with fresh token extraction...");

  // First, extract fresh tokens
  const tokens = await extractFreshTokens(productUrl, cookies);

  if (!tokens.success || !tokens.antiContent) {
    throw new Error(
      "Failed to extract fresh tokens. Error: " + tokens.error
    );
  }

  console.log("✅ Fresh tokens extracted successfully!");
  console.log("📦 Making API request with fresh tokens...");

  // Import fetchTemuReviews here to avoid circular dependency
  const { fetchTemuReviews } = await import("./fetchProductAPI");

  // Now fetch reviews with fresh tokens
  const result = await fetchTemuReviews(
    {
      goods_id: goodsId,
      page: 1,
      size: 10,
    },
    {
      cookies: tokens.cookies || "",
      antiContent: tokens.antiContent || "",
      verifyAuthToken: tokens.verifyAuthToken || "",
      xPhanData: tokens.xPhanData || "",
      referer: productUrl,
    }
  );

  return result;
}

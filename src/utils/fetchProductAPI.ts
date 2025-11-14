import axios, { AxiosRequestConfig } from "axios";

/**
 * Interface for Temu API request options
 */
export interface TemuAPIOptions {
  cookies?: string; // Cookie string from browser
  antiContent?: string; // Anti-bot token
  verifyAuthToken?: string; // Verification token
  xPhanData?: string; // Additional tracking data
  referer?: string; // Referer URL
  xDocumentReferer?: string; // Document referer
}

/**
 * Interface for review list parameters
 */
export interface ReviewListParams {
  goods_id: string;
  page?: number;
  size?: number;
  need_max_size?: boolean;
  sort_type?: number;
  goods_review_label_show?: boolean;
}


export async function fetchTemuReviews(
  params: ReviewListParams,
  options: TemuAPIOptions = {}
): Promise<any> {
  const {
    cookies = "",
    antiContent = "",
    verifyAuthToken = "",
    xPhanData = "",
    referer = "",
    xDocumentReferer = "https://www.temu.com/?is_back=1",
  } = options;

  // Build query parameters using URLSearchParams
  const queryParams = new URLSearchParams({
    goods_id: params.goods_id,
    page: String(params.page || 1),
    size: String(params.size || 10),
    need_max_size: String(params.need_max_size ?? true),
    sort_type: String(params.sort_type || 0),
    goods_review_label_show: String(params.goods_review_label_show ?? true),
  });

  const url = `https://www.temu.com/api/bg/engels/reviews/list?${queryParams.toString()}`;

  // Prepare headers matching the curl request exactly
  const headers: Record<string, string> = {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,lo;q=0.8,la;q=0.7",
    priority: "u=1, i",
    "sec-ch-ua":
      '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": '""',
    "sec-ch-ua-platform": '"macOS"',
    "sec-ch-ua-platform-version": '"15.6.1"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
  };

  // Add optional headers if provided
  if (referer) {
    headers["referer"] = referer;
  }

  if (antiContent) {
    headers["anti-content"] = antiContent;
  }

  if (verifyAuthToken) {
    headers["verifyauthtoken"] = verifyAuthToken;
  }

  if (xPhanData) {
    headers["x-phan-data"] = xPhanData;
  }

  if (xDocumentReferer) {
    headers["x-document-referer"] = xDocumentReferer;
  }

  // Prepare axios config
  const config: AxiosRequestConfig = {
    method: "GET",
    url,
    headers,
    timeout: 30000,
  };

  // Add cookies if provided
  if (cookies) {
    config.headers!["cookie"] = cookies;
  }

  try {
    const response = await axios(config);
    return {
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers,
    };
  } catch (error: any) {
    console.error("Error fetching Temu reviews:", error.message);
    return {
      success: false,
      error: error.message,
      status: error.response?.status,
      data: error.response?.data,
    };
  }
}

/**
 * Generic function to make authenticated requests to Temu API
 */
export async function fetchTemuAPI(
  endpoint: string,
  options: TemuAPIOptions & {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    queryParams?: Record<string, string>;
  } = {}
): Promise<any> {
  const {
    cookies = "",
    antiContent = "",
    verifyAuthToken = "",
    xPhanData = "",
    referer = "",
    xDocumentReferer = "https://www.temu.com/?is_back=1",
    method = "GET",
    body,
    queryParams = {},
  } = options;

  // Build URL with query parameters
  let url = `https://www.temu.com${endpoint}`;
  if (Object.keys(queryParams).length > 0) {
    const query = new URLSearchParams(queryParams);
    url += `?${query.toString()}`;
  }

  // Prepare headers
  const headers: Record<string, string> = {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,lo;q=0.8,la;q=0.7",
    priority: "u=1, i",
    "sec-ch-ua":
      '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": '""',
    "sec-ch-ua-platform": '"macOS"',
    "sec-ch-ua-platform-version": '"15.6.1"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
  };

  // Add optional headers
  if (referer) headers["referer"] = referer;
  if (antiContent) headers["anti-content"] = antiContent;
  if (verifyAuthToken) headers["verifyauthtoken"] = verifyAuthToken;
  if (xPhanData) headers["x-phan-data"] = xPhanData;
  if (xDocumentReferer) headers["x-document-referer"] = xDocumentReferer;

  // Add Content-Type for POST/PUT requests
  if (body && (method === "POST" || method === "PUT")) {
    headers["content-type"] = "application/json";
  }

  // Prepare axios config
  const config: AxiosRequestConfig = {
    method,
    url,
    headers,
    timeout: 30000,
  };

  // Add cookies
  if (cookies) {
    config.headers!["cookie"] = cookies;
  }

  // Add body for POST/PUT
  if (body) {
    config.data = body;
  }

  try {
    const response = await axios(config);
    return {
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers,
    };
  } catch (error: any) {
    console.error(`Error fetching Temu API (${endpoint}):`, error.message);
    return {
      success: false,
      error: error.message,
      status: error.response?.status,
      data: error.response?.data,
    };
  }
}

/**
 * Extract authentication tokens from cookies and page data
 * This helps prepare the options for API calls
 */
export function extractAuthTokens(
  cookieString: string,
  pageData?: any
): TemuAPIOptions {
  const options: TemuAPIOptions = {
    cookies: cookieString,
  };

  // Parse cookies to extract specific values if needed
  const cookies = cookieString.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  // You can extract specific values from cookies if needed
  // For example: AccessToken, api_uid, etc.

  return options;
}

/**
 * Helper function to build cookie string from Puppeteer cookies
 */
export function buildCookieString(cookies: any[]): string {
  return cookies.map((cookie) => `${cookie.name}=${cookie.value}`).join("; ");
}

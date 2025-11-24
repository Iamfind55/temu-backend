import puppeteer from "puppeteer";
import { getRepository } from "typeorm";
import { Customer } from "../modules/customer";
import { Product } from "../modules/product";
import { ProductComment } from "../modules/productComment";

// export async function fetchAllImages() {
//   const url =
//     "https://www.temu.com/personalized-heart-shaped-glass-photo-laser-engraved-usb-powered-night-light-custom--pet-photo-gift-for-mother-s-day-birthdays-home-office-decor-g-601100250413209.html?_oak_name_id=2930952702255704955&_oak_mp_inf=EJnxmfeo1ogBGiA4MGVlYzliYmY5Nzk0MGUxOTI3ODQxNDAwMGQ4MTFmNCDct56gpTM%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fmarket%2Fc2025f946cafb8631eb9e0e5c676bf85_8yRIONxoEXQt6.jpg&spec_gallery_id=2&refer_page_sn=10005&refer_source=0&freesia_scene=1&_oak_freesia_scene=1&_oak_rec_ext_1=MzUxNA&_oak_gallery_order=1871344122%2C107327512%2C918269600%2C1864364231%2C1093515563&refer_page_el_sn=200024&refer_page_name=home&refer_page_id=10005_1762346374767_7tcta0y151&_x_sessn_id=a22lv3d0bw";
//   const res = await fetch(url, {
//     headers: {
//       "User-Agent":
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
//       "Accept-Language": "en-US,en;q=0.9",
//     },
//   });

//   if (!res.ok) throw new Error(`HTTP ${res.status}`);

//   const html = await res.text();

//   // 2️⃣ Load HTML into cheerio
//   const $ = cheerio.load(html);

//   // 3️⃣ Extract all <img> src URLs
//   const imgUrls = $("img")
//     .map((_, el) => $(el).attr("src"))
//     .get()
//     .filter((src): src is string => !!src && src.includes("img.kwcdn.com"));

//   // 4️⃣ Extract background-image URLs from inline styles
//   const bgUrls = $("div[style*='background-image']")
//     .map((_, el) => {
//       const style = $(el).attr("style");
//       const match = style?.match(/url\(["']?(.*?)["']?\)/);
//       return match ? match[1] : null;
//     })
//     .get()
//     .filter((src): src is string => !!src && src.includes("img.kwcdn.com"));

//   // 5️⃣ Combine and deduplicate
//   const allImages = [...new Set([...imgUrls, ...bgUrls])];

//   console.log(allImages);
//   return allImages;
// }

/**
 * Helper function to extract auth headers from a Temu page using Puppeteer
 * This captures fresh anti-content, verifyauthtoken, and cookies automatically
 */
async function extractTemuAuthHeaders(): Promise<{
  antiContent: string;
  verifyAuthToken: string;
  cookie: string;
} | null> {
  let browser = null;

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-blink-features=AutomationControlled",
      ],
    });

    const page = await browser.newPage();

    // Anti-detection measures
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, "webdriver", {
        get: () => undefined,
      });
    });

    await page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"
    );

    // Store captured headers
    let capturedHeaders: any = null;

    // Intercept network requests to capture headers
    await page.setRequestInterception(true);
    page.on("request", (request) => {
      const url = request.url();
      const headers = request.headers();

      // Look for the reviews API request
      if (url.includes("/api/bg/engels/reviews/list")) {
        capturedHeaders = {
          antiContent: headers["anti-content"] || "",
          verifyAuthToken: headers["verifyauthtoken"] || "",
          cookie: headers["cookie"] || "",
        };
      }

      request.continue();
    });

    // Visit a product page to trigger the API request
    await page.goto(
      "https://www.temu.com/new--max--version-with-2-batteries-screen-control-electrically-adjustable-dual-cameras-360-obstacle-avoidance-function-brushless-motor-foldable-arm-suitable-for--with-remote-control-and-8gb-storage-card-g-601102382176633.html",
      { waitUntil: "networkidle2", timeout: 60000 }
    );

    // Wait a bit for reviews to load
    await new Promise((resolve) => setTimeout(resolve, 3000));

    await browser.close();

    if (capturedHeaders && capturedHeaders.antiContent) {
      console.log("✅ Successfully extracted auth headers");
      return capturedHeaders;
    }

    console.warn("⚠️ Could not capture auth headers from network requests");
    return null;
  } catch (error) {
    if (browser) await browser.close();
    console.error("Failed to extract auth headers:", error);
    return null;
  }
}

export async function productReview() {
  // const data = {
  //   data: [
  //     {
  //       comment:
  //         "Hemos comprado 6 y pediré otros más , el pequeño dron hace todo lo que tiene uno de mayor precio , tiene pantalla en el control , cámara de buena resolución y vuela excelente. Es beneficioso para niños y los mantiene entretenidos divirtiéndose.",
  //       score: 5,
  //       goods_id: "601103130556373",
  //       sku_id: "17608147554719",
  //       specs:
  //         '[{"spec_key":"Items","spec_value":"Black-Dual Camera-Dual Battery"}]',
  //       time: 1757956861,
  //       time_ms: 1757956861849,
  //       concat_time_lang: "on Sep 16, 2025",
  //       concat_rich_text: {
  //         text_rich: [
  //           {
  //             type: 0,
  //             value: "in",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //           {
  //             type: 100,
  //             value:
  //               "https://aimg.kwcdn.com/upload_aimg/openingemail/flags/559eb015-f86e-4573-9585-c11bc8f69c33.png.slim.png",
  //             width: 17,
  //             height: 13,
  //             padding_start: 4,
  //             padding_end: 4,
  //           },
  //           {
  //             type: 0,
  //             value: "on Sep 16, 2025",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //         ],
  //         bg_color: "#FFFFFF",
  //         aria_label: "in United States on Sep 16, 2025",
  //       },
  //       avatar:
  //         "https://avatar.us.kwcdn.com/avatarj-us/avatar/default/7d96f863-b4c1-43d6-8f03-ebd1c4e23e25.png",
  //       name: "ne***00",
  //       is_own_review: false,
  //       profile_link_url:
  //         "/bgp_user_profile.html?show_new_profile=1&refer_id=Q2dJMldSSUljRFpEYzFOUmMya2FNRjZOVVFFUldwUUNJVnRFUG9jOEUwN2JNTDVJWmdWcEkyL1YydDlrWFVZMWxNdGdJZEp4aUJkaDUvc1B6YWV0R0RBQw&link_dr=dWRw&page_from=21",
  //       pictures: [
  //         {
  //           url: "https://rewimg.us.kwcdn.com/review-image/20150c2300b/599096b6-cefd-47fc-80fc-93d556bf0935_986x1200.jpeg",
  //           width: 986,
  //           height: 1200,
  //         },
  //       ],
  //       video: {
  //         url: "https://rewvod.us.kwcdn.com/review-video/2dcefb08768fa9d4b0a3c74ca45b965038e921b6.f30.mp4",
  //         width: 840,
  //         height: 1200,
  //         duration: 34,
  //         size: 8847203,
  //         cover_image_url:
  //           "https://rewimg.us.kwcdn.com/review-image/20150c2300b/3ffcd9be-7444-420a-8922-08d909cb1e0f_840x1200.jpeg",
  //         cover_image_width: 840,
  //         cover_image_height: 1200,
  //       },
  //       review_id: "362579706303805397",
  //       review_version: 0,
  //       op_list: [
  //         {
  //           type: 5,
  //           text: "Share",
  //           is_show_init: true,
  //           link_url:
  //             "https://www.temu.com/review-detail.html?review_id=362579706303805397&title=Review%20details&order_market_region=211&share_source=1&locale_override=211~en~USD&locale_override_cross=1",
  //         },
  //         {
  //           type: 4,
  //           text: "Helpful",
  //           is_show_init: true,
  //           num: 6,
  //           status: 0,
  //           cur_user_avatar:
  //             "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIDYMdSQdx1KdWg7eLvV8Rg1kVwK9nWJz4V71TgLtQfXUMAI-CgI2WRIITFY5bFRzOUQaMAfCQVkUOdoYz3tSOqKDZHr07whdn8eD3xBjMaBDJ0IhexHsYYt0S2X5FQO6PTEwFjAC?imageMogr2/thumbnail/100x",
  //           avatar_use_default: false,
  //           favored_user_info_list: [
  //             {
  //               avatar:
  //                 "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIP6nPgfneXPEnSTSVapGqhAdPVjcp0q6zt6j6Df2qkGOMAI-CgI2WRIITFY5bFRzOUQaMO6N4aHXwb34lARPPUJAY5J0qkr2h4zbh7m7QR7z1rfP09Zx45bDG0HsFyY2QWBCyDAC?imageMogr2/thumbnail/100x",
  //               cur_user: false,
  //               avatar_use_default: false,
  //             },
  //             {
  //               avatar:
  //                 "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaILUV78Lkhany5aaoLHhGiJ6pKcerGu9W-R_D_bkypiHNMAI-CgI2WRIITFY5bFRzOUQaMOymdrjtmaop-DAIfkHc4DZCyMt_psUlBDvGcAo5lKisL3ODj99tq1WtY7djI7-PWzAC?imageMogr2/thumbnail/100x",
  //               cur_user: false,
  //               avatar_use_default: false,
  //             },
  //           ],
  //         },
  //       ],
  //       view_more_list: [
  //         {
  //           type: 0,
  //           text: "Report",
  //         },
  //         {
  //           type: 3,
  //           text: "Translation issue",
  //           op_scene: 3,
  //           jump_url:
  //             "/bgr_translation_feedback.html?review_id=362579706303805397&review_version=0",
  //         },
  //       ],
  //       review_lang: {
  //         translate_comment:
  //           "We have bought 6 and I will order more. The small drone does everything a more expensive one does, it has a screen on the controller, a camera with good resolution, and it flies excellently. It is beneficial for children and keeps them entertained and having fun.",
  //       },
  //       pic_list_index: 1,
  //       in_blacklist: false,
  //       extend_params: {
  //         original_explanation_text: "Review before translation:",
  //       },
  //     },
  //     {
  //       comment:
  //         "drone works good flies great got here on time very happy recommend",
  //       score: 5,
  //       goods_id: "601103130556373",
  //       sku_id: "17608478877048",
  //       specs:
  //         '[{"spec_key":"Items","spec_value":"E88 - Normal Edition - Dual Electric"}]',
  //       time: 1758157685,
  //       time_ms: 1758157685544,
  //       concat_time_lang: "on Sep 18, 2025",
  //       concat_rich_text: {
  //         text_rich: [
  //           {
  //             type: 0,
  //             value: "in",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //           {
  //             type: 100,
  //             value:
  //               "https://aimg.kwcdn.com/upload_aimg/openingemail/flags/559eb015-f86e-4573-9585-c11bc8f69c33.png.slim.png",
  //             width: 17,
  //             height: 13,
  //             padding_start: 4,
  //             padding_end: 4,
  //           },
  //           {
  //             type: 0,
  //             value: "on Sep 18, 2025",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //         ],
  //         bg_color: "#FFFFFF",
  //         aria_label: "in United States on Sep 18, 2025",
  //       },
  //       avatar:
  //         "https://avatar.us.kwcdn.com/avatarj-us/avatar/default/7d96f863-b4c1-43d6-8f03-ebd1c4e23e25.png",
  //       name: "oz***es",
  //       is_own_review: false,
  //       profile_link_url:
  //         "/bgp_user_profile.html?show_new_profile=1&refer_id=Q2dJMldSSUljRFpEYzFOUmMya2FNSHc1dzVvejUyOHRIbHNQUGliZGRJUDcyd1ZvYW5jK0pWYWNja0tYTytrOTMvdm90U25jckYzeUdHREFrV3Q0QWpBQw&link_dr=dWRw&page_from=21",
  //       review_id: "362582813158995925",
  //       review_version: 0,
  //       op_list: [
  //         {
  //           type: 5,
  //           text: "Share",
  //           is_show_init: true,
  //           link_url:
  //             "https://www.temu.com/review-detail.html?review_id=362582813158995925&title=Review%20details&order_market_region=211&share_source=1&locale_override=211~en~USD&locale_override_cross=1",
  //         },
  //         {
  //           type: 4,
  //           text: "Helpful",
  //           is_show_init: true,
  //           num: 1,
  //           status: 0,
  //           cur_user_avatar:
  //             "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIDYMdSQdx1KdWg7eLvV8Rg1kVwK9nWJz4V71TgLtQfXUMAI-CgI2WRIITFY5bFRzOUQaMAfCQVkUOdoYz3tSOqKDZHr07whdn8eD3xBjMaBDJ0IhexHsYYt0S2X5FQO6PTEwFjAC?imageMogr2/thumbnail/100x",
  //           avatar_use_default: false,
  //           favored_user_info_list: [
  //             {
  //               avatar:
  //                 "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaILYTict1I8ACp4wBjNnjWchgqPXanfYSXSIZ2lDHRs71MAI-CgI2WRIITFY5bFRzOUQaML37hYx7CVCVpNtJM-fsT3-TcDKJDPh-VaJnyls0rdmQuGd4iKnvBr9y0ZyN0KrVzDAC?imageMogr2/thumbnail/100x",
  //               cur_user: false,
  //               avatar_use_default: false,
  //             },
  //           ],
  //         },
  //       ],
  //       view_more_list: [
  //         {
  //           type: 0,
  //           text: "Report",
  //         },
  //       ],
  //       in_blacklist: false,
  //       extend_params: {},
  //     },
  //     {
  //       comment: "camera good flight great looks as said amazing",
  //       score: 5,
  //       goods_id: "601103130556373",
  //       sku_id: "17608478877048",
  //       specs:
  //         '[{"spec_key":"Items","spec_value":"E88 - Normal Edition - Dual Electric"}]',
  //       time: 1759721420,
  //       time_ms: 1759721420207,
  //       concat_time_lang: "on Oct 6, 2025",
  //       concat_rich_text: {
  //         text_rich: [
  //           {
  //             type: 0,
  //             value: "in",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //           {
  //             type: 100,
  //             value:
  //               "https://aimg.kwcdn.com/upload_aimg/openingemail/flags/559eb015-f86e-4573-9585-c11bc8f69c33.png.slim.png",
  //             width: 17,
  //             height: 13,
  //             padding_start: 4,
  //             padding_end: 4,
  //           },
  //           {
  //             type: 0,
  //             value: "on Oct 6, 2025",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //         ],
  //         bg_color: "#FFFFFF",
  //         aria_label: "in United States on Oct 6, 2025",
  //       },
  //       avatar:
  //         "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIDrMr2uZawnaDzTNPpQtQgG3-p6Yzycm-k5PUMb8jyuFMAI-CgI2WRIITFY5bFRzOUQaMJa5N6vgHSUCwpPRiNeWsPBychZQuGTj8i_2k3a8c960kPkTsL6C-EpsukJFqHwFUTAC?imageMogr2/thumbnail/100x",
  //       name: "Damien Merys",
  //       is_own_review: false,
  //       profile_link_url:
  //         "/bgp_user_profile.html?show_new_profile=1&refer_id=Q2dJMldSSUljRFpEYzFOUmMya2FNS3Vnb25qbDlrV1hsUkpjUXZDeDkwdzZYRUVwU0RYakRNTnZOQkNyVW9rSzMvdm90U25jckYzeUdHREFrV3Q0QWpBQw&link_dr=dWRw&page_from=21",
  //       review_id: "362602642033145813",
  //       review_version: 0,
  //       op_list: [
  //         {
  //           type: 5,
  //           text: "Share",
  //           is_show_init: true,
  //           link_url:
  //             "https://www.temu.com/review-detail.html?review_id=362602642033145813&title=Review%20details&order_market_region=211&share_source=1&locale_override=211~en~USD&locale_override_cross=1",
  //         },
  //         {
  //           type: 4,
  //           text: "Helpful",
  //           is_show_init: true,
  //           num: 0,
  //           status: 0,
  //           cur_user_avatar:
  //             "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIDYMdSQdx1KdWg7eLvV8Rg1kVwK9nWJz4V71TgLtQfXUMAI-CgI2WRIITFY5bFRzOUQaMAfCQVkUOdoYz3tSOqKDZHr07whdn8eD3xBjMaBDJ0IhexHsYYt0S2X5FQO6PTEwFjAC?imageMogr2/thumbnail/100x",
  //           avatar_use_default: false,
  //         },
  //       ],
  //       view_more_list: [
  //         {
  //           type: 0,
  //           text: "Report",
  //         },
  //       ],
  //       in_blacklist: false,
  //       extend_params: {},
  //     },
  //     {
  //       comment: "Not impressed.. But great for beginners. Not a bad product..",
  //       score: 4,
  //       goods_id: "601103130556373",
  //       sku_id: "17608147554719",
  //       specs:
  //         '[{"spec_key":"Items","spec_value":"Black-Dual Camera-Dual Battery"}]',
  //       time: 1760050376,
  //       time_ms: 1760050376344,
  //       concat_time_lang: "on Oct 10, 2025",
  //       concat_rich_text: {
  //         text_rich: [
  //           {
  //             type: 0,
  //             value: "in",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //           {
  //             type: 100,
  //             value:
  //               "https://aimg.kwcdn.com/upload_aimg/openingemail/flags/559eb015-f86e-4573-9585-c11bc8f69c33.png.slim.png",
  //             width: 17,
  //             height: 13,
  //             padding_start: 4,
  //             padding_end: 4,
  //           },
  //           {
  //             type: 0,
  //             value: "on Oct 10, 2025",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //         ],
  //         bg_color: "#FFFFFF",
  //         aria_label: "in United States on Oct 10, 2025",
  //       },
  //       avatar:
  //         "https://avatar.us.kwcdn.com/avatarj-us/avatar/default/7d96f863-b4c1-43d6-8f03-ebd1c4e23e25.png",
  //       name: "Kevin J",
  //       is_own_review: false,
  //       profile_link_url:
  //         "/bgp_user_profile.html?show_new_profile=1&refer_id=Q2dJMldSSUljRFpEYzFOUmMya2FNSHcrV1pYNDlaYjFjU1ZWSDNLcWRnWi85Z1dmM0ZFbVYvdER2WU5qOEZlcWgxcmU0UTA1VHpSUHdPTW5selIwcVRBQw&link_dr=dWRw&page_from=21",
  //       review_id: "362606613686712277",
  //       review_version: 0,
  //       op_list: [
  //         {
  //           type: 5,
  //           text: "Share",
  //           is_show_init: true,
  //           link_url:
  //             "https://www.temu.com/review-detail.html?review_id=362606613686712277&title=Review%20details&order_market_region=211&share_source=1&locale_override=211~en~USD&locale_override_cross=1",
  //         },
  //         {
  //           type: 4,
  //           text: "Helpful",
  //           is_show_init: true,
  //           num: 0,
  //           status: 0,
  //           cur_user_avatar:
  //             "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIDYMdSQdx1KdWg7eLvV8Rg1kVwK9nWJz4V71TgLtQfXUMAI-CgI2WRIITFY5bFRzOUQaMAfCQVkUOdoYz3tSOqKDZHr07whdn8eD3xBjMaBDJ0IhexHsYYt0S2X5FQO6PTEwFjAC?imageMogr2/thumbnail/100x",
  //           avatar_use_default: false,
  //         },
  //       ],
  //       view_more_list: [
  //         {
  //           type: 0,
  //           text: "Report",
  //         },
  //       ],
  //       in_blacklist: false,
  //       extend_params: {},
  //     },
  //     {
  //       comment:
  //         "ordered the drone with 2 batteries and only received 1 battery with drone. Very upset this was a christmas present for my grandson.",
  //       score: 1,
  //       goods_id: "601103130556373",
  //       sku_id: "17608478877048",
  //       specs:
  //         '[{"spec_key":"Items","spec_value":"E88 - Normal Edition - Dual Electric"}]',
  //       time: 1762200127,
  //       time_ms: 1762200127757,
  //       concat_time_lang: "on Nov 4, 2025",
  //       concat_rich_text: {
  //         text_rich: [
  //           {
  //             type: 0,
  //             value: "in",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //           {
  //             type: 100,
  //             value:
  //               "https://aimg.kwcdn.com/upload_aimg/openingemail/flags/559eb015-f86e-4573-9585-c11bc8f69c33.png.slim.png",
  //             width: 17,
  //             height: 13,
  //             padding_start: 4,
  //             padding_end: 4,
  //           },
  //           {
  //             type: 0,
  //             value: "on Nov 4, 2025",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //         ],
  //         bg_color: "#FFFFFF",
  //         aria_label: "in United States on Nov 4, 2025",
  //       },
  //       avatar:
  //         "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIDcMY45IM4Jd_WZXkZvZ2YWVXaRcZb57aL4bxq-aIpPdMAI-CgI2WRIITFY5bFRzOUQaMDs20CALdRYHv1ZKFhcrnZsD4FjWQKgHgEwCIS6lRAjWM15YNu0t4Aw4pVNftvxvxTAC?imageMogr2/thumbnail/100x",
  //       name: "Angie Wheat",
  //       is_own_review: false,
  //       profile_link_url:
  //         "/bgp_user_profile.html?show_new_profile=1&refer_id=Q2dJMldSSUljRFpEYzFOUmMya2FNQmhFWVhXc3lOMjFFbTQwemo0WG9ObjI0QlgzMzB1bElDL2t4TWFNcFJ5dWYveTVNV01EKzJKL2ZpSllOZ2FWTkRBQw&link_dr=dWRw&page_from=21",
  //       pictures: [
  //         {
  //           url: "https://rewimg.us.kwcdn.com/review-image/20add7005a/3faea105-627d-4dbc-8201-1303df0f9c31_4080x3060.jpeg.compressed.jpeg",
  //           width: 4080,
  //           height: 3060,
  //         },
  //         {
  //           url: "https://rewimg.us.kwcdn.com/review-image/20add7005a/6ec345f0-92c6-46b5-8345-2fc284935466_4080x3060.jpeg.compressed.jpeg",
  //           width: 4080,
  //           height: 3060,
  //         },
  //       ],
  //       review_id: "362633832958064597",
  //       review_version: 0,
  //       op_list: [
  //         {
  //           type: 5,
  //           text: "Share",
  //           is_show_init: true,
  //           link_url:
  //             "https://www.temu.com/review-detail.html?review_id=362633832958064597&title=Review%20details&order_market_region=211&share_source=1&locale_override=211~en~USD&locale_override_cross=1",
  //         },
  //         {
  //           type: 4,
  //           text: "Helpful",
  //           is_show_init: true,
  //           num: 0,
  //           status: 0,
  //           cur_user_avatar:
  //             "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIDYMdSQdx1KdWg7eLvV8Rg1kVwK9nWJz4V71TgLtQfXUMAI-CgI2WRIITFY5bFRzOUQaMAfCQVkUOdoYz3tSOqKDZHr07whdn8eD3xBjMaBDJ0IhexHsYYt0S2X5FQO6PTEwFjAC?imageMogr2/thumbnail/100x",
  //           avatar_use_default: false,
  //         },
  //       ],
  //       view_more_list: [
  //         {
  //           type: 0,
  //           text: "Report",
  //         },
  //       ],
  //       pic_list_index: 2,
  //       in_blacklist: false,
  //       extend_params: {},
  //     },
  //     {
  //       comment:
  //         "hard to learn the controls but has a great picture if you can keep it connected to your phone.",
  //       score: 2,
  //       goods_id: "601103130556373",
  //       sku_id: "17608478877048",
  //       specs:
  //         '[{"spec_key":"Items","spec_value":"E88 - Normal Edition - Dual Electric"}]',
  //       time: 1757864932,
  //       time_ms: 1757864932661,
  //       concat_time_lang: "on Sep 14, 2025",
  //       concat_rich_text: {
  //         text_rich: [
  //           {
  //             type: 0,
  //             value: "in",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //           {
  //             type: 100,
  //             value:
  //               "https://aimg.kwcdn.com/upload_aimg/openingemail/flags/559eb015-f86e-4573-9585-c11bc8f69c33.png.slim.png",
  //             width: 17,
  //             height: 13,
  //             padding_start: 4,
  //             padding_end: 4,
  //           },
  //           {
  //             type: 0,
  //             value: "on Sep 14, 2025",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //         ],
  //         bg_color: "#FFFFFF",
  //         aria_label: "in United States on Sep 14, 2025",
  //       },
  //       avatar:
  //         "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIDxGh3lOKvRl7P-OUt7z8q5Wc1bD36jF7yTPPw97Fn44MAI-CgI2WRIITFY5bFRzOUQaMDTrs9cd20rD9BZQKlXVOl67hlECGRI9yyeNUR9_VrXJ3t4hgvj3g-IbIPVOdyQERzAC?imageMogr2/thumbnail/100x",
  //       name: "Alexandria Nichols",
  //       is_own_review: false,
  //       profile_link_url:
  //         "/bgp_user_profile.html?show_new_profile=1&refer_id=Q2dJMldSSUljRFpEYzFOUmMya2FNTzdraFYrTU5ucFpBbHE4TDI1WTQxVWo4ME4vUTJXWmtBWXIvVFZZaGg3N08yMnVGMktZSkE1R09JOG1RL1NialRBQw&link_dr=dWRw&page_from=21",
  //       review_id: "362578896786356181",
  //       review_version: 0,
  //       op_list: [
  //         {
  //           type: 5,
  //           text: "Share",
  //           is_show_init: true,
  //           link_url:
  //             "https://www.temu.com/review-detail.html?review_id=362578896786356181&title=Review%20details&order_market_region=211&share_source=1&locale_override=211~en~USD&locale_override_cross=1",
  //         },
  //         {
  //           type: 4,
  //           text: "Helpful",
  //           is_show_init: true,
  //           num: 0,
  //           status: 0,
  //           cur_user_avatar:
  //             "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIDYMdSQdx1KdWg7eLvV8Rg1kVwK9nWJz4V71TgLtQfXUMAI-CgI2WRIITFY5bFRzOUQaMAfCQVkUOdoYz3tSOqKDZHr07whdn8eD3xBjMaBDJ0IhexHsYYt0S2X5FQO6PTEwFjAC?imageMogr2/thumbnail/100x",
  //           avatar_use_default: false,
  //         },
  //       ],
  //       view_more_list: [
  //         {
  //           type: 0,
  //           text: "Report",
  //         },
  //       ],
  //       in_blacklist: false,
  //       extend_params: {},
  //     },
  //     {
  //       comment: "works great in low wind .. can almost fly itself..love it",
  //       score: 5,
  //       goods_id: "601103130556373",
  //       sku_id: "17608147554719",
  //       specs:
  //         '[{"spec_key":"Items","spec_value":"Black-Dual Camera-Dual Battery"}]',
  //       time: 1758132679,
  //       time_ms: 1758132679620,
  //       concat_time_lang: "on Sep 18, 2025",
  //       concat_rich_text: {
  //         text_rich: [
  //           {
  //             type: 0,
  //             value: "in",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //           {
  //             type: 100,
  //             value:
  //               "https://aimg.kwcdn.com/upload_aimg/openingemail/flags/559eb015-f86e-4573-9585-c11bc8f69c33.png.slim.png",
  //             width: 17,
  //             height: 13,
  //             padding_start: 4,
  //             padding_end: 4,
  //           },
  //           {
  //             type: 0,
  //             value: "on Sep 18, 2025",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //         ],
  //         bg_color: "#FFFFFF",
  //         aria_label: "in United States on Sep 18, 2025",
  //       },
  //       avatar:
  //         "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIOeYVgNnTnK9NZx-YELQJ5fpXZCAcV61rj5C8kYb1o36MAI-CgI2WRIITFY5bFRzOUQaMDc5rYK12lZPSkUWwnq7S2xPCrrW4d7dJRa-mwELFEHX0el-DXrf3wcA6lAYrXs3TTAC?imageMogr2/thumbnail/100x",
  //       name: "#COWBOYS4LIFE!!",
  //       is_own_review: false,
  //       profile_link_url:
  //         "/bgp_user_profile.html?show_new_profile=1&refer_id=Q2dJMldSSUljRFpEYzFOUmMya2FNQ2c1RDl1MFBMT1pSOWl0SFRWRnIvZ09WLzYyT2t0TTRzbUJPTkFaeTl2UHR0UVRSS0NQNEVZdE9yUHY5MXplTGpBQw&link_dr=dWRw&page_from=21",
  //       review_id: "362582220839385045",
  //       review_version: 0,
  //       op_list: [
  //         {
  //           type: 5,
  //           text: "Share",
  //           is_show_init: true,
  //           link_url:
  //             "https://www.temu.com/review-detail.html?review_id=362582220839385045&title=Review%20details&order_market_region=211&share_source=1&locale_override=211~en~USD&locale_override_cross=1",
  //         },
  //         {
  //           type: 4,
  //           text: "Helpful",
  //           is_show_init: true,
  //           num: 3,
  //           status: 0,
  //           cur_user_avatar:
  //             "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIDYMdSQdx1KdWg7eLvV8Rg1kVwK9nWJz4V71TgLtQfXUMAI-CgI2WRIITFY5bFRzOUQaMAfCQVkUOdoYz3tSOqKDZHr07whdn8eD3xBjMaBDJ0IhexHsYYt0S2X5FQO6PTEwFjAC?imageMogr2/thumbnail/100x",
  //           avatar_use_default: false,
  //           favored_user_info_list: [
  //             {
  //               avatar:
  //                 "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIBm28NPx2mMrP0wySPuXNZpT0316xy01dD0PW8uH-5NAMAI-CgI2WRIITFY5bFRzOUQaMDyj1-f3sXOPialFdr2_9M8j0IEnRHDZdCmG0ti40wX2LjAMMVmDBfiujB1agu5_oTAC?imageMogr2/thumbnail/100x",
  //               cur_user: false,
  //               avatar_use_default: false,
  //             },
  //             {
  //               avatar:
  //                 "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIKAVb6-qCLd0uF6w8UBkSfICWbDMkwXYqBDU4UySqJOAMAI-CgI2WRIITFY5bFRzOUQaMPEcRfzxHvFY4znK0xQE-eczCMcf5AsqupURicgFqBtvEu79YV8HwshpjcNfeAx_ZzAC?imageMogr2/thumbnail/100x",
  //               cur_user: false,
  //               avatar_use_default: false,
  //             },
  //           ],
  //         },
  //       ],
  //       view_more_list: [
  //         {
  //           type: 0,
  //           text: "Report",
  //         },
  //       ],
  //       in_blacklist: false,
  //       extend_params: {},
  //     },
  //     {
  //       comment:
  //         "Love the drome, Wife impress that I can operate so soon. great drone for beginners, wish it wss more info are video on how to use the accessories.",
  //       score: 5,
  //       goods_id: "601103130556373",
  //       sku_id: "17608147554719",
  //       specs:
  //         '[{"spec_key":"Items","spec_value":"Black-Dual Camera-Dual Battery"}]',
  //       time: 1757923363,
  //       time_ms: 1757923363898,
  //       concat_time_lang: "on Sep 15, 2025",
  //       concat_rich_text: {
  //         text_rich: [
  //           {
  //             type: 0,
  //             value: "in",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //           {
  //             type: 100,
  //             value:
  //               "https://aimg.kwcdn.com/upload_aimg/openingemail/flags/559eb015-f86e-4573-9585-c11bc8f69c33.png.slim.png",
  //             width: 17,
  //             height: 13,
  //             padding_start: 4,
  //             padding_end: 4,
  //           },
  //           {
  //             type: 0,
  //             value: "on Sep 15, 2025",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //         ],
  //         bg_color: "#FFFFFF",
  //         aria_label: "in United States on Sep 15, 2025",
  //       },
  //       avatar:
  //         "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIEwvGL-6pMt2TVb7UoxiHFRLSLj77FVqcLq0eo1pjMYmMAI-CgI2WRIITFY5bFRzOUQaMK8FrgBN78ifcZ_PpiFtuFP1Hk87A4XaEEQa6D0dilMWyXJZDq38_bSG243TiBZRSzAC?imageMogr2/thumbnail/100x",
  //       name: "CARLTON JACKSON",
  //       is_own_review: false,
  //       profile_link_url:
  //         "/bgp_user_profile.html?show_new_profile=1&refer_id=Q2dJMldSSUljRFpEYzFOUmMya2FNT0lFUDN6S3JqekFnTmo2Y215NG1hczdERCtRK0hlYkMyaURqYzBIU09JQSsrTjE2bUtGL0VuNURLMVpEM2p2eFRBQw&link_dr=dWRw&page_from=21",
  //       review_id: "362579727778641877",
  //       review_version: 0,
  //       op_list: [
  //         {
  //           type: 5,
  //           text: "Share",
  //           is_show_init: true,
  //           link_url:
  //             "https://www.temu.com/review-detail.html?review_id=362579727778641877&title=Review%20details&order_market_region=211&share_source=1&locale_override=211~en~USD&locale_override_cross=1",
  //         },
  //         {
  //           type: 4,
  //           text: "Helpful",
  //           is_show_init: true,
  //           num: 3,
  //           status: 0,
  //           cur_user_avatar:
  //             "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIDYMdSQdx1KdWg7eLvV8Rg1kVwK9nWJz4V71TgLtQfXUMAI-CgI2WRIITFY5bFRzOUQaMAfCQVkUOdoYz3tSOqKDZHr07whdn8eD3xBjMaBDJ0IhexHsYYt0S2X5FQO6PTEwFjAC?imageMogr2/thumbnail/100x",
  //           avatar_use_default: false,
  //           favored_user_info_list: [
  //             {
  //               avatar:
  //                 "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaINuTkQRq5MwrkJmj4nqQGMR9Co8syGXCzb8ctETx5axPMAI-CgI2WRIITFY5bFRzOUQaMO7k21R5cwyp_7vgSXZkPJwGeXU_sGXiRLoPY0AyFiWCXQx8kVD6-_mHXl847vF1mDAC?imageMogr2/thumbnail/100x",
  //               cur_user: false,
  //               avatar_use_default: false,
  //             },
  //             {
  //               avatar:
  //                 "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIKAVb6-qCLd0uF6w8UBkSfICWbDMkwXYqBDU4UySqJOAMAI-CgI2WRIITFY5bFRzOUQaMPEcRfzxHvFY4znK0xQE-eczCMcf5AsqupURicgFqBtvEu79YV8HwshpjcNfeAx_ZzAC?imageMogr2/thumbnail/100x",
  //               cur_user: false,
  //               avatar_use_default: false,
  //             },
  //           ],
  //         },
  //       ],
  //       view_more_list: [
  //         {
  //           type: 0,
  //           text: "Report",
  //         },
  //       ],
  //       in_blacklist: false,
  //       extend_params: {},
  //     },
  //     {
  //       comment:
  //         "good for a beginner drone user before getting an expensive one all in all packages came looks handsome and a nice color to boot recommend is for children and beginning adults yes",
  //       score: 5,
  //       goods_id: "601103130556373",
  //       sku_id: "17608478877048",
  //       specs:
  //         '[{"spec_key":"Items","spec_value":"E88 - Normal Edition - Dual Electric"}]',
  //       time: 1761714891,
  //       time_ms: 1761714891297,
  //       concat_time_lang: "on Oct 29, 2025",
  //       concat_rich_text: {
  //         text_rich: [
  //           {
  //             type: 0,
  //             value: "in",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //           {
  //             type: 100,
  //             value:
  //               "https://aimg.kwcdn.com/upload_aimg/openingemail/flags/559eb015-f86e-4573-9585-c11bc8f69c33.png.slim.png",
  //             width: 17,
  //             height: 13,
  //             padding_start: 4,
  //             padding_end: 4,
  //           },
  //           {
  //             type: 0,
  //             value: "on Oct 29, 2025",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //         ],
  //         bg_color: "#FFFFFF",
  //         aria_label: "in United States on Oct 29, 2025",
  //       },
  //       avatar:
  //         "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIPCvW1hlW6KUPn2QALHZGgSgxwU9BHqpE-wjQleREJWXMAI-CgI2WRIITFY5bFRzOUQaMPRqYTPtleNnxuW3b5pCcNtoiGE4WsbAj0le_-TNtMlRbP15cn05im6ESk6FlluT6TAC?imageMogr2/thumbnail/100x",
  //       name: "Rowland Roberson jr",
  //       is_own_review: false,
  //       profile_link_url:
  //         "/bgp_user_profile.html?show_new_profile=1&refer_id=Q2dJMldSSUljRFpEYzFOUmMya2FNRTVKM2VST0tlTjdhUmZsd3NkaUdyMnhEc1RPMDVOU1FVb0VTRU1mZkRJSisrTjE2bUtGL0VuNURLMVpEM2p2eFRBQw&link_dr=dWRw&page_from=21",
  //       review_id: "362628201970726869",
  //       review_version: 0,
  //       op_list: [
  //         {
  //           type: 5,
  //           text: "Share",
  //           is_show_init: true,
  //           link_url:
  //             "https://www.temu.com/review-detail.html?review_id=362628201970726869&title=Review%20details&order_market_region=211&share_source=1&locale_override=211~en~USD&locale_override_cross=1",
  //         },
  //         {
  //           type: 4,
  //           text: "Helpful",
  //           is_show_init: true,
  //           num: 0,
  //           status: 0,
  //           cur_user_avatar:
  //             "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIDYMdSQdx1KdWg7eLvV8Rg1kVwK9nWJz4V71TgLtQfXUMAI-CgI2WRIITFY5bFRzOUQaMAfCQVkUOdoYz3tSOqKDZHr07whdn8eD3xBjMaBDJ0IhexHsYYt0S2X5FQO6PTEwFjAC?imageMogr2/thumbnail/100x",
  //           avatar_use_default: false,
  //         },
  //       ],
  //       view_more_list: [
  //         {
  //           type: 0,
  //           text: "Report",
  //         },
  //       ],
  //       in_blacklist: false,
  //       extend_params: {},
  //     },
  //     {
  //       comment: "great item.. buying another.",
  //       score: 5,
  //       goods_id: "601103130556373",
  //       sku_id: "17608478877048",
  //       specs:
  //         '[{"spec_key":"Items","spec_value":"E88 - Normal Edition - Dual Electric"}]',
  //       time: 1758643114,
  //       time_ms: 1758643114206,
  //       concat_time_lang: "on Sep 23, 2025",
  //       concat_rich_text: {
  //         text_rich: [
  //           {
  //             type: 0,
  //             value: "in",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //           {
  //             type: 100,
  //             value:
  //               "https://aimg.kwcdn.com/upload_aimg/openingemail/flags/559eb015-f86e-4573-9585-c11bc8f69c33.png.slim.png",
  //             width: 17,
  //             height: 13,
  //             padding_start: 4,
  //             padding_end: 4,
  //           },
  //           {
  //             type: 0,
  //             value: "on Sep 23, 2025",
  //             font_size: 14,
  //             font_color: "#757575",
  //             font_weight: 400,
  //             ver_align: 2,
  //           },
  //         ],
  //         bg_color: "#FFFFFF",
  //         aria_label: "in United States on Sep 23, 2025",
  //       },
  //       avatar:
  //         "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIDhlG9yuiMsgaJb_2i95zof_0aBu3cRv49sRucB31pHSMAI-CgI2WRIITFY5bFRzOUQaMMd-OUTRgOXk0ts6P9vWzUDX5jFihjZ4-w5ihroRexQHUqaUAZck1XVbZApu_VFPYzAC?imageMogr2/thumbnail/100x",
  //       name: "Tony Kitchen",
  //       is_own_review: false,
  //       profile_link_url:
  //         "/bgp_user_profile.html?show_new_profile=1&refer_id=Q2dJMldSSUljRFpEYzFOUmMya2FNSFJpdk12ckJFTFZIdjZHTmxoZzJ0K2dSdEVaVUU5OW5EZjRsYTNEdmI1LysrTjE2bUtGL0VuNURLMVpEM2p2eFRBQw&link_dr=dWRw&page_from=21",
  //       review_id: "362588262147094485",
  //       review_version: 0,
  //       op_list: [
  //         {
  //           type: 5,
  //           text: "Share",
  //           is_show_init: true,
  //           link_url:
  //             "https://www.temu.com/review-detail.html?review_id=362588262147094485&title=Review%20details&order_market_region=211&share_source=1&locale_override=211~en~USD&locale_override_cross=1",
  //         },
  //         {
  //           type: 4,
  //           text: "Helpful",
  //           is_show_init: true,
  //           num: 0,
  //           status: 0,
  //           cur_user_avatar:
  //             "https://avatar.us.kwcdn.com/avatarj-us/MjEx/CgI2WRIITFY5bFRzOUQaIDYMdSQdx1KdWg7eLvV8Rg1kVwK9nWJz4V71TgLtQfXUMAI-CgI2WRIITFY5bFRzOUQaMAfCQVkUOdoYz3tSOqKDZHr07whdn8eD3xBjMaBDJ0IhexHsYYt0S2X5FQO6PTEwFjAC?imageMogr2/thumbnail/100x",
  //           avatar_use_default: false,
  //         },
  //       ],
  //       view_more_list: [
  //         {
  //           type: 0,
  //           text: "Report",
  //         },
  //       ],
  //       in_blacklist: false,
  //       extend_params: {},
  //     },
  //   ],
  //   max_list_size: 94,
  //   exp_params: {
  //     review_buy_the_same: "true",
  //     top_my_review: "1",
  //     item_reviews_manual_retrieve_reviews: "0",
  //   },
  // };

  const productRepository = getRepository(Product);
  const productCommentRepository = getRepository(ProductComment);
  const customerRepository = getRepository(Customer);

  const page = 1;
  const limit = 10;

  const products = await productRepository.find({
    skip: (page - 1) * limit,
    take: limit,
    order: { created_at: "DESC" },
  });

  // Extract fresh auth headers automatically
  console.log("🔄 Extracting fresh authentication headers...");
  const authHeaders = await extractTemuAuthHeaders();
  console.log(authHeaders);

  if (!authHeaders) {
    throw new Error(
      "Failed to extract authentication headers. Please try again."
    );
  }

  const headers = {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,lo;q=0.8,la;q=0.7",
    "anti-content": authHeaders.antiContent,
    priority: "u=1, i",
    referer:
      "https://www.temu.com/?_x_sessn_id=4ynvvdcdxd&refer_page_name=bgn_verification&refer_page_id=10017_1763655276040_5hn1jpqlss&refer_page_sn=10017&is_back=1",
    Cookie: authHeaders.cookie,
    "sec-ch-ua":
      '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
    verifyauthtoken: authHeaders.verifyAuthToken,
  };

  for (const product of products) {
    if (!product.good_id) continue;

    const url = `https://www.temu.com/api/bg/engels/reviews/list?goods_id=${product.good_id}&page=1&size=10&need_max_size=true&sort_type=0&goods_review_label_show=true`;

    try {
      const response = await fetch(url, { headers });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const dataMap =
        data.data?.map((r: any) => ({
          goods_id: r.goods_id,
          comment: r.comment || "",
          score: Number(r.score) || 0,
          time_ms: r.time_ms ? new Date(Number(r.time_ms)) : undefined,
          pictures: r.pictures
            ? r.pictures.map((p: any) => p.url).join(",")
            : undefined,
          avatar: r.avatar,
          name: r.name,
        })) || [];

      for (const item of dataMap) {
        // Find or create customer
        let customer = await customerRepository.findOne({
          where: { firstName: item.name },
        });

        if (!customer) {
          customer = customerRepository.create({
            firstName: item.name,
            email: item.name + "@gmail.com",
            image: item.avatar,
          });
          await customerRepository.save(customer);
        }

        // Create product comment using IDs only
        const comment = productCommentRepository.create({
          goods_id: item.goods_id,
          comment: item.comment,
          score: item.score,
          time_ms: item.time_ms,
          pictures: item.pictures,
          customer_id: customer.id,
          product_id: product.id,
        });

        const commented = await productCommentRepository.save(comment);
        console.log(commented);

      }

      console.log(`✅ Comments for product ${product.good_id} saved!`);
    } catch (err) {
      console.error(
        `Failed to fetch reviews for goods_id ${product.good_id}`,
        err
      );
    }
  }
}

/**
 * Extract structured product data from Temu SSR JSON
 * @param rawData - Raw data from window.rawData (contains store key)
 * @returns Structured product information with all available data
 */
export function extractProductInfo(rawData: any) {
  try {
    const store = rawData?.store || rawData;
    const goods = store?.goods || {};

    // Extract complete product data structure
    return {
      // Basic product info
      goodsId: goods.goodsId || goods.goods_id || null,
      title: goods.goodsName || goods.title || null,

      // Pricing
      price: {
        original: goods.retailPrice || goods.originalPrice || 0,
        sale: goods.minOnSalePrice || goods.salePrice || 0,
        currency: goods.currency || "USD",
        priceInfo: goods.priceInfo || null,
      },

      // Images
      images:
        goods.topGallery?.map((img: any) => img.url || img) ||
        goods.imageList ||
        [],

      // Product details
      description: goods.description || goods.goodsDesc || null,
      specifications: goods.productSpec || goods.specs || {},

      // Reviews
      reviews: {
        rating: goods.averageRating || goods.rating || 0,
        count: goods.reviewNum || goods.reviewCount || 0,
        reviewData: store?.review || null,
      },

      // Inventory & availability
      inventory: goods.quantity || goods.stock || 0,
      available: goods.available !== false,

      // Categories & classification
      category: goods.categoryId || goods.catId || null,
      categoryPath: goods.categoryPath || null,
      brand: goods.brandName || goods.brand || null,

      // Shipping & benefits (from activityInfoData in network response)
      shipping: {
        freeShipping: goods.freeShipping || false,
        deliveryGuarantee: goods.deliveryGuarantee || false,
        estimatedDelivery: goods.estimatedDelivery || null,
      },

      // SKU variations
      skus: goods.skus || goods.skuList || [],

      // Additional data
      metadata: {
        mallCode: goods.mallCode || null,
        sellerId: goods.sellerId || null,
        createTime: goods.createTime || null,
        updateTime: goods.updateTime || null,
      },

      // Full store data (includes all other info like categories, reviews, etc.)
      _fullStore: store,
    };
  } catch (err) {
    console.error("Error extracting product info:", err);
    return null;
  }
}

/**
 * Extract complete SSR data structure with all available information
 * @param rawData - Raw data from window.rawData
 * @returns Complete structured data
 */
export function extractCompleteData(rawData: any) {
  try {
    const store = rawData?.store || {};

    return {
      // Product information
      product: extractProductInfo(rawData),

      // Reviews
      reviews: {
        list: store?.review?.list || [],
        summary: store?.review?.summary || null,
        stats: store?.review?.stats || null,
      },

      // Categories
      categories: store?.categories || store?.categoryTree || null,

      // Recommendations
      recommendations: store?.recommendations || store?.relatedGoods || [],

      // Store/Seller info
      seller: {
        id: store?.seller?.id || null,
        name: store?.seller?.name || null,
        rating: store?.seller?.rating || 0,
        info: store?.seller || null,
      },

      // Promotions & benefits
      promotions: store?.promotions || store?.activities || [],

      // Activity info (shipping, returns, etc.)
      activityInfo: store?.activityInfo || null,

      // Page metadata
      metadata: {
        pageType: store?.pageType || null,
        locale: store?.locale || null,
        region: store?.region || null,
      },

      // Raw data (for debugging or accessing other fields)
      _raw: rawData,
    };
  } catch (err) {
    console.error("Error extracting complete data:", err);
    return null;
  }
}


export async function getTemuProductData(productUrl?: string, cookies?: any[]) {
  const url =
    productUrl ||
    "https://www.temu.com/new--max--version-with-2-batteries-screen-control-electrically-adjustable-dual-cameras-360-obstacle-avoidance-function-brushless-motor-foldable-arm-suitable-for--with-remote-control-and-8gb-storage-card-g-601102382176633.html?_oak_name_id=3157938455344744797&_oak_mp_inf=EPmy2u%2Bw1ogBGiAyZjJiODQwYzdhZTc0MjA4YjY2NjAwYjU3MjcyYTAwYyCXv9%2BbpzM%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa5cc7666-b29b-41ce-8bf7-a81ce0f104f3.jpg&spec_gallery_id=206100150942";

  let browser = null;

  try {
    // Launch puppeteer browser with Chrome-like configuration
    browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--disable-gpu",
        "--window-size=1920x1080",
        "--disable-blink-features=AutomationControlled", // Hide automation
        '--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
      ],
    });

    const page = await browser.newPage();

    // Override navigator properties to avoid bot detection
    await page.evaluateOnNewDocument(() => {
      // Override navigator.webdriver
      Object.defineProperty(navigator, 'webdriver', {
        get: () => undefined,
      });

      // Override navigator.plugins
      Object.defineProperty(navigator, 'plugins', {
        get: () => [1, 2, 3, 4, 5],
      });

      // Override navigator.languages
      Object.defineProperty(navigator, 'languages', {
        get: () => ['en-US', 'en'],
      });

      // Override chrome property
      (window as any).chrome = {
        runtime: {},
      };

      // Override permissions
      const originalQuery = window.navigator.permissions.query;
      window.navigator.permissions.query = (parameters: any) =>
        parameters.name === 'notifications'
          ? Promise.resolve({ state: Notification.permission } as PermissionStatus)
          : originalQuery(parameters);
    });

    // Set realistic viewport and user agent
    await page.setViewport({ width: 1920, height: 1080 });
    await page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"
    );

    // Set extra headers to match real Chrome browser
    await page.setExtraHTTPHeaders({
      "Accept-Language": "en-US,en;q=0.9",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate, br",
      "Upgrade-Insecure-Requests": "1",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-User": "?1",
      "Cache-Control": "max-age=0",
      Referer: "https://www.temu.com/?is_back=1",
    });

    // Load authentication cookies if provided
    if (cookies && cookies.length > 0) {
      await page.setCookie(...cookies);
    } else {
      // Set default cookies to simulate a real session
      await page.setCookie(
        {
          name: "region",
          value: "211",
          domain: ".temu.com",
        },
        {
          name: "language",
          value: "en",
          domain: ".temu.com",
        },
        {
          name: "currency",
          value: "USD",
          domain: ".temu.com",
        }
      );
    }

    // Navigate to the page and wait for network to be idle
    await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 60000,
    });

    // Wait for JavaScript to execute
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Check current URL to ensure we're not redirected to login
    const currentUrl = page.url();
    if (currentUrl.includes("/login.html")) {
      await browser.close();
      throw new Error(
        "Page redirected to login. Try accessing the product page directly or check if authentication is required."
      );
    }

    // Extract window.rawData from the page
    const windowData = await page.evaluate(() => {
      // @ts-ignore
      return typeof window.rawData !== "undefined" ? window.rawData : null;
    });

    if (windowData && windowData.store) {
      const isProductPage =
        windowData.store?.goods ||
        windowData.store?.webLayoutData?.activityInfoData;

      if (!isProductPage) {
        await browser.close();
        throw new Error(
          "Not a product page. Extracted data does not contain product information."
        );
      }

      await browser.close();

      // Extract activityInfo from the correct location
      const activityInfo =
        windowData.store?.activityInfo ||
        windowData.store?.webLayoutData?.activityInfoData ||
        null;
      const headersData = windowData.store?.webLayoutData?.headerData;
      const cartScene = windowData.store?.webLayoutData?.CartScene;
      const reviewStore = windowData?.store?.reviewStore;
      const deliveryTag = windowData?.store?.deliveryTag;

      // Return the complete data structure including activityInfo with benefits
      return {
        success: true,
        source: "window.rawData",
        data: windowData,
        cartScene: cartScene,
        headersData: headersData,
        reviewStore: reviewStore,
        deliveryTag: deliveryTag,
        // Quick access to commonly used data
        product: windowData.store?.goods || null,
        reviews: windowData.store?.review || null,
        categories: windowData.store?.categories || null,
        activityInfo: activityInfo,
      };
    }

    // Fallback: Try to parse HTML with cheerio if window.rawData not found
    await browser.close();
    return null;
  } catch (err: any) {
    if (browser) {
      await browser.close();
    }
    throw new Error(
      `Failed to fetch Temu product data: ${err?.message || "Unknown error"}`
    );
  }
}

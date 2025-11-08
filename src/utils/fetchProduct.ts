import * as cheerio from "cheerio";

export async function fetchAllImages() {
  const url =
    "https://www.temu.com/personalized-heart-shaped-glass-photo-laser-engraved-usb-powered-night-light-custom--pet-photo-gift-for-mother-s-day-birthdays-home-office-decor-g-601100250413209.html?_oak_name_id=2930952702255704955&_oak_mp_inf=EJnxmfeo1ogBGiA4MGVlYzliYmY5Nzk0MGUxOTI3ODQxNDAwMGQ4MTFmNCDct56gpTM%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fmarket%2Fc2025f946cafb8631eb9e0e5c676bf85_8yRIONxoEXQt6.jpg&spec_gallery_id=2&refer_page_sn=10005&refer_source=0&freesia_scene=1&_oak_freesia_scene=1&_oak_rec_ext_1=MzUxNA&_oak_gallery_order=1871344122%2C107327512%2C918269600%2C1864364231%2C1093515563&refer_page_el_sn=200024&refer_page_name=home&refer_page_id=10005_1762346374767_7tcta0y151&_x_sessn_id=a22lv3d0bw";
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const html = await res.text();

  // 2️⃣ Load HTML into cheerio
  const $ = cheerio.load(html);

  // 3️⃣ Extract all <img> src URLs
  const imgUrls = $("img")
    .map((_, el) => $(el).attr("src"))
    .get()
    .filter((src): src is string => !!src && src.includes("img.kwcdn.com"));

  // 4️⃣ Extract background-image URLs from inline styles
  const bgUrls = $("div[style*='background-image']")
    .map((_, el) => {
      const style = $(el).attr("style");
      const match = style?.match(/url\(["']?(.*?)["']?\)/);
      return match ? match[1] : null;
    })
    .get()
    .filter((src): src is string => !!src && src.includes("img.kwcdn.com"));

  // 5️⃣ Combine and deduplicate
  const allImages = [...new Set([...imgUrls, ...bgUrls])];

  console.log(allImages);
  return allImages;
}

import { fetchTemuReviews } from "./src/utils/fetchProductAPI";

async function testReviewsAPI() {
  console.log("🧪 Testing Temu Reviews API...\n");

  const cookies = "api_uid=Cm14BWjej0xSFQBlXwsmAg==; timezone=Asia%2FVientiane; img_sup=avif%2Cwebp; _bee=bqcwasrUCxFpOrX3cd6r56wDeumPZanl; njrpl=bqcwasrUCxFpOrX3cd6r56wDeumPZanl; dilx=vO11ue7M7dd5_bFDt8rRS; hfsc=L3yPcY0x7z/w1ZLKeQ==; _u_pa=%7B%22nrpt%22%3A0%7D; _nano_fp=GV-q8b-Y5E-YWErtPJzhj#a95L1SV5GOsXRHnRpo65A; isVisitor=0; privacy_setting_detail=%7B%22firstPAds%22%3A1%2C%22adj%22%3A1%2C%22fbsAnlys%22%3A1%2C%22fbEvt%22%3A1%2C%22ggAds%22%3A1%2C%22fbAds%22%3A1%2C%22ttAds%22%3A1%2C%22scAds%22%3A1%2C%22ptAds%22%3A1%2C%22bgAds%22%3A1%2C%22tblAds%22%3A1%2C%22obAds%22%3A1%2C%22vgAds%22%3A1%2C%22idAds%22%3A1%2C%22opAds%22%3A1%2C%22stAds%22%3A1%2C%22pmAds%22%3A1%2C%22xads%22%3A1%2C%22adsChoice%22%3A%22111111111111111111011111111111%22%7D; region=211; currency=USD; _ttc=3.SwAtgjlKuVv5.1793377937; webp=1; language=en; g_state={\"i_l\":0,\"i_ll\":1762884677033,\"i_b\":\"rc2hKjNIxoKM5DEMVwS3Q4ozzqYwaY0qt5dm10qMGdI\"}; user_uin=BBRHMEALPWWAGF43FPSYUCDVGV67EUBO64GAEUJ5; _hal_tag=ACwggRPGLDcjSwVnp0J5MZgbm1zk6eFd7YkFWLYDPCGr8KZmKedoLlyTAr4K6txAgSvSD0TaHeDEvCIwbHIxqHdEwPVNKZ0ftpwqvg==; AccessToken=TLQ6UKXL3CJ5FOMJ4XIK5TGHC3XEGFSKAG6JRJ72EE7QD4MSCZEA0110d3008b73; isLogin=1762886037002; __cf_bm=dQjVn3caeWozR8PCrgdN4SzlwHuObOyl8ekKvnBiAC8-1763051216-1.0.1.1-Rvhn7CkxOWhtXUovg5IMQeWbc9wDeHLrXCbua.aogtbyXD0vjog2C5pM50IlKU.jHEwAKtQTdRRHppHwe6HBW6B0VdV2OZ3vc93vk1LCSwo";

  const result = await fetchTemuReviews(
    {
      goods_id: "601099931631019",
      page: 1,
      size: 10,
    },
    {
      cookies,
    }
  );

  if (result.success) {
    console.log("✅ Success!");
    console.log("Status:", result.status);
    console.log("Data:", JSON.stringify(result.data, null, 2));
  } else {
    console.log("❌ Failed!");
    console.log("Error:", result.error);
    console.log("Status:", result.status);
    console.log("Response:", result.data);
  }
}

testReviewsAPI().catch(console.error);

import {
  fetchTemuReviews,
  fetchTemuAPI,
  extractAuthTokens,
  buildCookieString,
  ReviewListParams,
  TemuAPIOptions,
} from '../src/utils/fetchProductAPI';

/**
 * Example 1: Fetch product reviews with full authentication
 */
async function exampleFetchReviews() {
  console.log('🔍 Fetching Temu product reviews...\n');

  // Your authentication cookies from browser
  const cookies = `api_uid=Cm14BWjej0xSFQBlXwsmAg==; timezone=Asia%2FVientiane; img_sup=avif%2Cwebp; _bee=bqcwasrUCxFpOrX3cd6r56wDeumPZanl; njrpl=bqcwasrUCxFpOrX3cd6r56wDeumPZanl; dilx=vO11ue7M7dd5_bFDt8rRS; hfsc=L3yPcY0x7z/w1ZLKeQ==; _u_pa=%7B%22nrpt%22%3A0%7D; _nano_fp=GV-q8b-Y5E-YWErtPJzhj#a95L1SV5GOsXRHnRpo65A; isVisitor=0; privacy_setting_detail=%7B%22firstPAds%22%3A1%2C%22adj%22%3A1%2C%22fbsAnlys%22%3A1%2C%22fbEvt%22%3A1%2C%22ggAds%22%3A1%2C%22fbAds%22%3A1%2C%22ttAds%22%3A1%2C%22scAds%22%3A1%2C%22ptAds%22%3A1%2C%22bgAds%22%3A1%2C%22tblAds%22%3A1%2C%22obAds%22%3A1%2C%22vgAds%22%3A1%2C%22idAds%22%3A1%2C%22opAds%22%3A1%2C%22stAds%22%3A1%2C%22pmAds%22%3A1%2C%22xads%22%3A1%2C%22adsChoice%22%3A%22111111111111111111011111111111%22%7D; region=211; currency=USD; _ttc=3.SwAtgjlKuVv5.1793377937; webp=1; language=en; g_state={"i_l":0,"i_ll":1762884677033,"i_b":"rc2hKjNIxoKM5DEMVwS3Q4ozzqYwaY0qt5dm10qMGdI"}; user_uin=BBRHMEALPWWAGF43FPSYUCDVGV67EUBO64GAEUJ5; _hal_tag=ACwggRPGLDcjSwVnp0J5MZgbm1zk6eFd7YkFWLYDPCGr8KZmKedoLlyTAr4K6txAgSvSD0TaHeDEvCIwbHIxqHdEwPVNKZ0ftpwqvg==; AccessToken=TLQ6UKXL3CJ5FOMJ4XIK5TGHC3XEGFSKAG6JRJ72EE7QD4MSCZEA0110d3008b73; isLogin=1762886037002; __cf_bm=1yq9LA0NlQ2EIbc6m6ldLhW702PLRpW9tHvH1KTva8g-1763048168-1.0.1.1-wKZAftbe_F3g6ZLLKUyg8O5gYyW_duls7SGxkGL19Tz_gFQM2zz.N_7jyj2nykLVMtBbdujCHceaKgmkQiFx8IDpmDVarA1qUOYS7cli38E`;

  // Anti-bot token (you'll need to extract this from browser or use a fresh one)
  const antiContent = '0GVNPEVJqdLWJWHeg58pjqYPS3KPK4P6v3cpOwO878lc3joR5xWhSbqWIUbxkBd4pM8pVZnHdncRXh9-RxnlhczYqj3wQSvee-5H9oTW4povILOoacHB1AdzOoScu4SKgpKgEOM0zH5GvpIdYa_DuYaYLN37WvYmCEzYLMU_4xtHm4AYMHhFcPDuNG6S1_bQFldmoRyEVmwbYl13eHki2QerAs6bMiRdFpMDllwM2EzHmm5ECSn8hs3ANCZY3WigWT8engG-pq8tLzJlLN35opyaIZrRZkRD5rric6s3e7DrVvRFmUsHeUC9amYV4GnpcLByYdxoBxGye73VpQWBBGAMZ52UTEtNO6mILecmOviQIMr07pGJK80tZ3Rnv6iaF1d1vcQsxjHaVMH--TjfPWiRmX90La8VVaaeyVV7LqapW5NChEv6cX1swc7nnWhlwWcPUQTUggUY0rH-BjsAKe4h764Our9ApRaKWvzGbSdo5fooVV37DXxpEG7xwobCJQzZD7JE1VCXqwQW8DIeR3FCK1ebIKxRFkFu-KeUD7QnNBm-heB-SaDOa8uEQOSfNJy7Lijmwo_CeLT9uA3sM5851kjvJngnzOkxBGmEFnVOvOqxG62Iz6IzYPMb8ZEx72dRnF7qHVBVXPhXyZBV621q-EvV2cPCaq_36fXw3iiDr_K_p1i_JPFqGzxmbbEQNMPc1VER-8j4inAhb7uajs8s4luEIQfCd_8GnguCCFp1rDB-WhBcbFWvcAYAN-8YO9SyhoD0bZ703Ztj_-CyCBiiCHBOckk9CTfLJXg';

  // Verification token
  const verifyAuthToken = 'XRGJjTHeGn8CsGiO0cNmXwe810f9fd39a7f2c98';

  // x-phan-data token
  const xPhanData = '0aeJx7xMxiYPiIWS7a0NzM2MDEAkyZxwIASSYFqw';

  // Product URL for referer
  const productUrl = 'https://www.temu.com/-16-inch-brushless-chainsaw-36v-compatible-with--battery-brushless-motor-8000rpm-chains-brake-auto-lubrication--ideal-for---cutting-and-pruning--tool-without-battery-g-601099931631019.html?_oak_mp_inf=EKv7mN%2Bn1ogBGiA5YmMyNjY0ZWEyNjA0MjMyYjgyZWI4NDFhNzE2ZjEyMyCpsLfupzM%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbd8dbdf5-b81b-4b56-9264-e1d0d247d6e1.jpg&spec_gallery_id=3448646010&refer_page_sn=10005&refer_source=0&freesia_scene=1&_oak_freesia_scene=1&_oak_rec_ext_1=ODYyMA&_oak_gallery_order=1589273181%2C1143614942%2C590661954%2C304395391%2C1462436017&refer_page_el_sn=200024&refer_page_name=home&refer_page_id=10005_1763047232666_iblm1asf53&_x_sessn_id=rb3odl6wnb&adt_btn_confirm=0&mn_ext=';

  // Review parameters
  const reviewParams: ReviewListParams = {
    goods_id: '601099931631019',
    page: 1,
    size: 10,
    need_max_size: true,
    sort_type: 0,
    goods_review_label_show: true,
  };

  // API options with all authentication headers
  const apiOptions: TemuAPIOptions = {
    cookies,
    antiContent,
    verifyAuthToken,
    xPhanData,
    referer: productUrl,
    xDocumentReferer: 'https://www.temu.com/?is_back=1',
  };

  // Fetch reviews
  const result = await fetchTemuReviews(reviewParams, apiOptions);

  if (result.success) {
    console.log('✅ Successfully fetched reviews!');
    console.log(`Status: ${result.status}`);
    console.log(`Total reviews: ${result.data?.result?.reviews?.length || 0}\n`);
    console.log('First review:', JSON.stringify(result.data?.result?.reviews?.[0], null, 2));
  } else {
    console.log('❌ Failed to fetch reviews');
    console.log(`Error: ${result.error}`);
    console.log(`Status: ${result.status}`);
  }
}

/**
 * Example 2: Fetch reviews without authentication tokens (may fail)
 */
async function exampleFetchReviewsSimple() {
  console.log('\n🔍 Fetching reviews without full authentication...\n');

  const reviewParams: ReviewListParams = {
    goods_id: '601099931631019',
    page: 1,
    size: 5,
  };

  const result = await fetchTemuReviews(reviewParams);

  if (result.success) {
    console.log('✅ Reviews fetched:', result.data);
  } else {
    console.log('❌ Failed:', result.error);
    console.log('Note: This may fail without proper authentication tokens');
  }
}

/**
 * Example 3: Use generic API function for custom endpoints
 */
async function exampleGenericAPI() {
  console.log('\n🔍 Using generic API function...\n');

  const cookies = 'your_cookies_here';

  const result = await fetchTemuAPI(
    '/api/bg/engels/reviews/list',
    {
      cookies,
      queryParams: {
        goods_id: '601099931631019',
        page: '1',
        size: '10',
      },
      method: 'GET',
    }
  );

  console.log('Result:', result);
}

/**
 * Example 4: Extract auth tokens from cookie string
 */
async function exampleExtractTokens() {
  console.log('\n🔧 Extracting authentication tokens...\n');

  const cookieString = 'api_uid=Cm14BWjej0xSFQBlXwsmAg==; AccessToken=TLQ6UKXL3CJ5FOMJ4XIK5TGHC3XEGFSKAG6JRJ72EE7QD4MSCZEA0110d3008b73; isLogin=1762886037002';

  const authOptions = extractAuthTokens(cookieString);
  console.log('Extracted options:', authOptions);
}

/**
 * Example 5: Build cookie string from Puppeteer cookies
 */
function exampleBuildCookies() {
  console.log('\n🍪 Building cookie string from Puppeteer cookies...\n');

  const puppeteerCookies = [
    { name: 'api_uid', value: 'Cm14BWjej0xSFQBlXwsmAg==' },
    { name: 'AccessToken', value: 'TLQ6UKXL3CJ5FOMJ4XIK5TGHC3XEGFSKAG6JRJ72EE7QD4MSCZEA0110d3008b73' },
    { name: 'isLogin', value: '1762886037002' },
  ];

  const cookieString = buildCookieString(puppeteerCookies);
  console.log('Cookie string:', cookieString);
}

// Run examples
async function main() {
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║     Temu API Fetch Examples                            ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');

  // Run the examples
  await exampleFetchReviews();
  // await exampleFetchReviewsSimple();
  // await exampleGenericAPI();
  // await exampleExtractTokens();
  // exampleBuildCookies();

  console.log('\n✨ Examples completed!');
}

// Uncomment to run
// main().catch(console.error);

export {
  exampleFetchReviews,
  exampleFetchReviewsSimple,
  exampleGenericAPI,
  exampleExtractTokens,
  exampleBuildCookies,
};

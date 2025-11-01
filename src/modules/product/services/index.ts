import { Request } from "express";
import { config } from "../../../config";
import {
  ProductModel,
  ProductWhereInput,
  SimilarProductWhereInput,
} from "../types";
import { Brackets, getRepository } from "typeorm";
import { Product } from "../entity";
import { BaseOrderByInput, BaseStatus } from "../../../utils/base/baseType";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { Category, CategoryService } from "../../category";
import { GraphQLResolveInfo } from "graphql";
import { getRequestedFields } from "../../../utils/graphqlUtils";
import { handleError } from "../../../utils/response/error.handler";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import { StaffService } from "../../staff";
import { BannerService } from "../../banner";
import { Branding, BrandingService } from "../../branding";
import axios from "axios";

export class ProductService {
  // User only clone data from dhlshopping api

  static uploadImage = async (imageUrl: string) => {
    const cloudinaryKeys = [
      {
        url: "https://api.cloudinary.com/v1_1/dvzvw2ztg/image/upload",
        preset: "tiktokshop",
      },
      {
        url: "https://api.cloudinary.com/v1_1/dvh8zf1nm/image/upload",
        preset: "tiktokshop",
      },
      {
        url: "https://api.cloudinary.com/v1_1/djcsccoap/image/upload",
        preset: "tiktokshop",
      },
      {
        url: "https://api.cloudinary.com/v1_1/dfocpdsxd/image/upload",
        preset: "tiktokshop",
      },
      {
        url: "https://api.cloudinary.com/v1_1/dxqvafipl/image/upload",
        preset: "tiktokshop",
      },
    ];
    // Randomly select a key from the cloudinaryKeys array
    const randomKey =
      cloudinaryKeys[Math.floor(Math.random() * cloudinaryKeys.length)];
    const CLOUDINARY_URL = randomKey.url;
    const UPLOAD_PRESET = randomKey.preset;

    const _formData = new FormData();
    _formData.append("file", `${imageUrl}`);
    _formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: _formData,
      });

      const data = await response.json();

      if (data.secure_url) {
        return data.secure_url;
      }
      return null;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  static async createLoopCategoryAndProduct() {
    const baseCategoryUrl =
      "https://dhlshopping.com/api/customer/index/get-all-category";
    const categoryDetailsUrl = (id: string, page: number, pagesize: number) =>
      `https://dhlshopping.com/api/category/${id}/shop?page=${page}&pagesize=${pagesize}&sort=new&brand=&min_price=1&max_price=99990`;
    const productDetailsUrl = (id: string) =>
      `https://dhlshopping.com/api/product/${id}/a`;
    const cdnUrl = "https://227_cdn.pionexprocoin.cc";

    const fetchJson = async (url: string, options: RequestInit) => {
      // method: options.method,
      // url: url,
      // headers: {
      //   "access-token": "-N4Dk1cfc1R4_4A-1ry_dORe7oK08S6P",
      //   lang: "en",
      //   pragma: "no-cache",
      //   priority: "u=1, i",
      //   "content-type": "application/x-www-form-urlencoded",
      // },
      const config = {
        method: options.method,
        url: url,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          lang: "en",
          "User-Agent": "curl/7.79.1", // 🧠 Trick: mimic curl's UA
          Accept: "*/*",
        },
        data: "", // ⬅️ matches curl’s empty body
        validateStatus: () => true, // allows non-2xx responses for debugging
      };

      try {
        const response = await axios(config);
        console.log("Status:", response.status);
        console.log("Headers:", response.headers);
        console.log("Body:", response.data);
        return response.data;
      } catch (error) {
        console.error("❌ Real error:", error);
      }
    };

    const staffLogin = await StaffService.staffLogin({
      where: { username: "admin", password: "12345678" },
    });
    let token = "";
    if (staffLogin?.success) {
      token = staffLogin.data?.token as string;
    }

    const mapCategoryData = async (
      category: any,
      parentId: string | null = null
    ) => {
      const _url = category.image?.includes("https")
        ? category.image
        : `${cdnUrl}${category.image}`;
      const imageUrl = await this.uploadImage(`${_url}`);

      return {
        image: imageUrl,
        name: {
          name_en: category?.name?.name_en || "",
        },
        parent_id: parentId,
        origin_id: category?.id,
      };
    };

    const mapProductData = async (product: any, categoryId: string | null) => {
      const _url = product?.image?.main?.image?.includes("https")
        ? product?.image?.main?.image
        : `${cdnUrl}${product?.image?.main?.image}`;
      const imageUrl = await this.uploadImage(`${_url}`);

      let allProductImages: string[] = [];
      if (product?.image?.gallery?.length) {
        for (const image of product?.image?.gallery) {
          const _url = image?.image?.includes("https")
            ? image?.image
            : `${cdnUrl}${image?.image}`;
          const _imageUrl = await this.uploadImage(`${_url}`);
          allProductImages.push(_imageUrl);
        }
      }

      return {
        name: {
          name_en: product?.name?.name_en || "",
        },
        description: {
          name_en: product?.description?.description_en || "",
        },
        cover_image: `${imageUrl}`,
        images: allProductImages,
        category_id: categoryId,
        total_star: parseFloat(product?.score) || 5.0,
        price: parseFloat(product?.price) || 34.99,
        quantity: parseFloat(product?.qty) || 2837,
        origin_id: product?.product_id || product?.id,
      };
    };

    const req: any = {};
    req.headers = {};
    req.headers.authorization = token;

    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    let categoryCount = 0;
    let productCount = 0;
    const processCategory = async (
      category: any,
      parentId: string | null = null
    ) => {
      const categoryRepository = getRepository(Category);
      const existingCategory = await categoryRepository.findOne({
        where: { origin_id: category?.id },
      });
      console.log({ existingCategory });
      let categoryId = (existingCategory && existingCategory?.id) || "";
      if (!existingCategory) {
        const categoryData = await mapCategoryData(category, parentId);
        let parentCategory = await CategoryService.createCategory({
          data: categoryData,
          req,
        } as any);
        categoryId = parentCategory?.data?.id as string;
        if (!categoryId) {
          console.error("Failed to create category:", parentCategory);
          return;
        }
      }
      //  else {
      //   await CategoryService.updateCategory({
      //     data: {
      //       ...existingCategory,
      //       name: { name_en: category?.name?.name_en } as any,
      //       is_active: true,
      //     },
      //     req,
      //   });
      // }

      categoryCount++;
      console.log("createCategory::", { categoryCount });

      console.log("Created category:", categoryId);

      let page = 2;
      const pagesize = 500;
      let continues = true;

      while (continues) {
        try {
          console.log("start to fetch categoryProducts=====1::");
          const categoryProducts = await fetchJson(
            categoryDetailsUrl(category?.id, page, pagesize),
            { method: "GET", redirect: "follow" }
          );
          console.log("start to fetch categoryProducts=====2::", {
            categoryProducts,
            page,
          });

          if (
            categoryProducts.code === 200 &&
            categoryProducts?.data?.list?.length > 0
          ) {
            for (const product of categoryProducts.data.list) {
              try {
                const productRepository = getRepository(Product);
                const brandingRepository = getRepository(Branding);
                console.log("aaa:::", product.id);
                const productDetails = await fetchJson(
                  productDetailsUrl(product.id),
                  { method: "GET", redirect: "follow" }
                );
                console.log({
                  productId: productDetails?.data,
                });
                const existingProduct = await productRepository
                  .createQueryBuilder("product")
                  .where("product.origin_id = :origin_id", {
                    origin_id: product?.id,
                  })
                  .orWhere("product.origin_id = :productId", {
                    productId: productDetails?.data?.product?.product_id,
                  })
                  .orWhere("product.name ->>'name_en' = :productName", {
                    productName: productDetails?.data?.product?.name?.name_en,
                  })
                  .getOne();

                let existingBranding: any = await brandingRepository
                  .createQueryBuilder("brand")
                  .where("brand.name ->>'name_en' = :productName", {
                    productName: productDetails?.data?.brand?.name?.name_en,
                  })
                  .getOne();
                if (!existingBranding) {
                  const _url = productDetails?.data?.brand?.logo?.includes(
                    "https"
                  )
                    ? productDetails?.data?.brand?.logo
                    : `${cdnUrl}${productDetails?.data?.brand?.logo}`;
                  const imageUrl =
                    productDetails?.data?.brand?.logo == ""
                      ? null
                      : await this.uploadImage(`${_url}`);

                  const brandingData: any = {
                    name: {
                      name_en: productDetails?.data?.brand?.name?.name_en,
                    },
                    image: imageUrl,
                  };
                  const _result = await BrandingService.createBranding({
                    data: brandingData,
                    req,
                  });
                  console.log({ _result });
                  if (_result?.data?.id) {
                    existingBranding = {
                      ..._result?.data,
                      id: _result?.data?.id,
                    };
                  }
                }

                console.log("===::existingBranding::", { existingBranding });

                if (!existingProduct) {
                  const productData = await mapProductData(
                    productDetails?.data?.product,
                    categoryId
                  );
                  console.log({ productData });

                  const createProduct = await ProductService.createProduct({
                    data: { ...productData, brand_id: existingBranding?.id },
                    req,
                  } as any);

                  productCount++;
                  console.log("createProduct::", { productCount });
                  console.log("Created product:", createProduct);

                  // Delay for 1 second before proceeding to the next product
                  await delay(60);
                } else {
                  console.log("::888::", { existingProduct, existingCategory });
                  const product = await ProductService.updateProduct({
                    data: {
                      id: existingProduct?.id,
                      category_id: existingCategory?.id,
                    } as any,
                    req,
                  });
                  console.log({ product });
                  // await productRepository
                  //   .createQueryBuilder()
                  //   .update(Product) // Specify the entity
                  //   .set({
                  //     brand_id: existingBranding?.id,
                  //     category_id: categoryId,
                  //   }) // Set new values
                  //   .where("id = :productId", {
                  //     productId: existingProduct?.id,
                  //   }) // Condition
                  //   .execute(); // Execute the query
                }
              } catch (productError) {
                console.error("Error creating product:", productError);
              }
            }
          } else {
            continues = false;
            productCount = 0;
          }
        } catch (categoryError) {
          console.error("Error fetching category products:", categoryError);
          continues = false;
          productCount = 0;
        }

        page++;
      }

      if (category?.child?.length > 0) {
        for (const childCategory of category.child) {
          await processCategory(childCategory, categoryId);
        }
      }
    };

    try {
      const categories = await fetchJson(baseCategoryUrl, {
        method: "POST",
        redirect: "follow",
      });

      if (categories.code !== 200 || !categories?.data) {
        console.error("Unexpected response for categories:", categories);
        return;
      }

      for (const category of categories.data) {
        console.log({ category });
        await processCategory(category);
      }

      console.log("All categories and products processed successfully.");
    } catch (error) {
      console.error("Error processing categories and products:", error);
    }
  }

  static async uploadCategoryToStorage() {
    const categoryRepository = getRepository(Category);

    const params = "imageView2/2/w/150/q/50/format/webp";
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dwzjfryoh/upload";
    const UPLOAD_PRESET = "temushop";

    try {
      // 1️⃣ Fetch all categories that have an origin image
      const categories = await categoryRepository.find({
        where: { is_active: true },
      });

      console.log(`🔍 Found ${categories.length} categories.`);

      for (const category of categories) {
        if (!category.oringImageURL) {
          console.log(`⏭️ Skipped category ${category.id}: No origin image`);
          continue;
        }

        const imageUrl = `${category.oringImageURL}?${params}`;

        console.log(`⬆️ Uploading category ${category.id}...`);

        try {
          // 2️⃣ Prepare form data for Cloudinary
          const formData = new FormData();
          formData.append("file", imageUrl);
          formData.append("upload_preset", UPLOAD_PRESET);

          // 3️⃣ Upload to Cloudinary
          const response = await fetch(CLOUDINARY_URL, {
            method: "POST",
            body: formData,
          });

          const data = await response.json();

          if (data.secure_url) {
            // 4️⃣ Update image URL in database
            category.image = data.secure_url;
            await categoryRepository.save(category);

            console.log(`✅ Updated category ${category.id}`);
          } else {
            console.warn(
              `⚠️ Cloudinary upload failed for ${category.id}`,
              data.error?.message || data
            );
          }
        } catch (uploadError:any) {
          console.error(
            `❌ Error uploading category ${category.id}:`,
            uploadError.message
          );
        }
      }

      console.log("🎉 All category uploads complete!");
    } catch (error) {
      console.error("❌ Error in uploadCategoryToStorage:", error);
    }
  }
  // static async uploadCategoryToStorge(){
  //   const categoryRepository = getRepository(Category);

  //   const params = "imageView2/2/w/150/q/50/format/webp";
  //   const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dwzjfryoh/upload";
  //   const UPLOAD_PRESET = "temushop";

  //   try {
  //     // 1Get first 10 active categories with originImageURL
  //     const categories = await categoryRepository.find({
  //       where: { is_active: true },
  //       take: 10,
  //     });

  //     for (const category of categories) {
  //       if (!category.oringImageURL) continue; // skip if no image

  //       const imageUrl = `${category.oringImageURL}?${params}`;

  //       console.log(`Uploading category ${category.id}: ${imageUrl}`);

  //       // 2️⃣ Prepare form data for Cloudinary
  //       const formData = new FormData();
  //       formData.append("file", imageUrl);
  //       formData.append("upload_preset", UPLOAD_PRESET);

  //       // 3️⃣ Upload image to Cloudinary
  //       const uploadResponse = await fetch(CLOUDINARY_URL, {
  //         method: "POST",
  //         body: formData,
  //       });

  //       const uploadData = await uploadResponse.json();
        
  //       if (uploadData.secure_url) {
  //         console.log(`✅ Uploaded: ${uploadData.secure_url}`);

  //         // 4️⃣ Update category.image in DB
  //         category.image = uploadData.secure_url;
  //         await categoryRepository.save(category);
  //       } else {
  //         console.warn(`⚠️ Failed to upload ${category.id}`, uploadData);
  //       }
  //     }

  //     console.log("🎉 Upload completed for all categories!");
  //   } catch (error) {
  //     console.error("❌ Error in uploadCategoryToStorage:", error);
  //   }
  // }
  // Works in Node.js 18+, Next.js, or Deno
  static async fetchTemuCategoryOptList() {
    const data = {
      result: {
        server_time: 1761927607623,
        data: {
          default_row_cnt: 0,
          opt_list: [
            {
              child_opts: [
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/3b4b888d-82ec-4991-b902-51b398d6b34d.jpg",
                  disable_dup: false,
                  bubble_info: [
                    {
                      display_type: 100,
                      top: -1,
                      width: 29,
                      right: -3,
                      url: "https://aimg.kwcdn.com/upload_aimg/temu/be532b19-cd14-491e-a894-498af3809564.png",
                      height: 17,
                    },
                  ],
                  pattern: 0,
                  opt_name: "Women's T-Shirt",
                  priority: 0,
                  opt_id: 1891,
                  seo_link_url:
                    "/womens-t-shirt-o3-1891.html?opt_level=2&title=Women%27s%20T-Shirt&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "1891",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1409179739",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "0",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=1891&opt_level=2&title=Women%27s%20T-Shirt&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/Material/ImageCut/94e8c654/24587c27-629f-4650-ad99-655f61dbc1b7.jpg",
                  disable_dup: false,
                  bubble_info: [
                    {
                      display_type: 100,
                      top: -1,
                      width: 29,
                      right: -3,
                      url: "https://aimg.kwcdn.com/upload_aimg/temu/be532b19-cd14-491e-a894-498af3809564.png",
                      height: 17,
                    },
                  ],
                  pattern: 0,
                  opt_name: "Women's Sweaters",
                  priority: 0,
                  opt_id: 840,
                  seo_link_url:
                    "/womens-sweaters-o3-840.html?opt_level=2&title=Women%27s%20Sweaters&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "840",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1198220095",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "1",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=840&opt_level=2&title=Women%27s%20Sweaters&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/open/208db4fb660648e8b81141b04f994cd9-goods.jpeg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Dresses",
                  priority: 0,
                  opt_id: 31,
                  seo_link_url:
                    "/womens-dresses-o3-31.html?opt_level=2&title=Women%27s%20Dresses&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "31",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "975042198",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "2",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=31&opt_level=2&title=Women%27s%20Dresses&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/open/17fcf94a7c39435d826ca41af21a03b5-goods.jpeg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Two Piece Sets",
                  priority: 0,
                  opt_id: 829,
                  seo_link_url:
                    "/womens-two-piece-sets-o3-829.html?opt_level=2&title=Women%27s%20Two%20Piece%20Sets&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "829",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1164327163",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "3",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=829&opt_level=2&title=Women%27s%20Two%20Piece%20Sets&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/165d53f7-dde9-42d2-9a21-56f0f699cb24.jpg",
                  disable_dup: false,
                  bubble_info: [
                    {
                      display_type: 100,
                      top: -1,
                      width: 29,
                      right: -3,
                      url: "https://aimg.kwcdn.com/upload_aimg/temu/be532b19-cd14-491e-a894-498af3809564.png",
                      height: 17,
                    },
                  ],
                  pattern: 0,
                  opt_name: "Women's Coats & Jackets",
                  priority: 0,
                  opt_id: 721,
                  seo_link_url:
                    "/womens-coats-jackets-o3-721.html?opt_level=2&title=Women%27s%20Coats%20%26%20Jackets&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "721",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1053529209",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "4",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=721&opt_level=2&title=Women%27s%20Coats%20%26%20Jackets&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/88c7c5ce-2c94-4015-83a5-189f3cd96ae4.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Sweatshirts",
                  priority: 0,
                  opt_id: 843,
                  seo_link_url:
                    "/womens-sweatshirts-o3-843.html?opt_level=2&title=Women%27s%20Sweatshirts&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "843",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1275774246",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "5",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=843&opt_level=2&title=Women%27s%20Sweatshirts&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/0fb26b8b-2cd0-4eb3-ac99-dee75b40a4c9.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Pants",
                  priority: 0,
                  opt_id: 30,
                  seo_link_url:
                    "/womens-pants-o3-30.html?opt_level=2&title=Women%27s%20Pants&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "30",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "456380244",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "6",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=30&opt_level=2&title=Women%27s%20Pants&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/open/c07672b71eac4e2b84868a10ddacc03c-goods.jpeg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Jeans",
                  priority: 0,
                  opt_id: 1364,
                  seo_link_url:
                    "/womens-jeans-o3-1364.html?opt_level=2&title=Women%27s%20Jeans&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "1364",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1538442884",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "7",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=1364&opt_level=2&title=Women%27s%20Jeans&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/f61cc8f3-2830-41f1-ab22-65c8b213c40f.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Blouses & Shirts",
                  priority: 0,
                  opt_id: 29,
                  seo_link_url:
                    "/womens-blouses-shirts-o3-29.html?opt_level=2&title=Women%27s%20Blouses%20%26%20Shirts&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "29",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1873005072",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "8",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=29&opt_level=2&title=Women%27s%20Blouses%20%26%20Shirts&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/6348822f-c3ec-424d-9429-f789f87e59ba.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Athleisure",
                  priority: 0,
                  opt_id: 681,
                  seo_link_url:
                    "/womens-athleisure-o3-681.html?opt_level=2&title=Women%27s%20Athleisure&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "681",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "671657986",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "9",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=681&opt_level=2&title=Women%27s%20Athleisure&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/open/386865e308d945659ec9a88ea0b71313-goods.jpeg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Skirts",
                  priority: 0,
                  opt_id: 1024,
                  seo_link_url:
                    "/womens-skirts-o3-1024.html?opt_level=2&title=Women%27s%20Skirts&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "1024",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1290253741",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "10",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=1024&opt_level=2&title=Women%27s%20Skirts&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/d0e14fe3-664e-410d-aeab-6c381d6a460c.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Blazers",
                  priority: 0,
                  opt_id: 1018,
                  seo_link_url:
                    "/womens--o3-1018.html?opt_level=2&title=Women%27s%20Blazers&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "1018",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "573242713",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "11",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=1018&opt_level=2&title=Women%27s%20Blazers&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/6a2d700c-c432-47e2-be7b-67a21af2c950.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Jumpsuits",
                  priority: 0,
                  opt_id: 1035,
                  seo_link_url:
                    "/womens-jumpsuits-o3-1035.html?opt_level=2&title=Women%27s%20Jumpsuits&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "1035",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "639518949",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "12",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=1035&opt_level=2&title=Women%27s%20Jumpsuits&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/open/75ae6f2f80a746599b6bd7671c03563d-goods.jpeg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Sporty Sweatshirts",
                  priority: 0,
                  opt_id: 6805,
                  seo_link_url:
                    "/sporty-sweatshirts-o3-6805.html?opt_level=2&title=Sporty%20Sweatshirts&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "6805",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1752672063",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "13",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=6805&opt_level=2&title=Sporty%20Sweatshirts&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/fancy/c8ef5107-6c09-4693-a340-b1d4ca4861b1.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Skinny-Fit Pants",
                  priority: 0,
                  opt_id: 1889,
                  seo_link_url:
                    "/womens-skinny-fit-pants-o3-1889.html?opt_level=2&title=Women%27s%20Skinny-Fit%20Pants&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "1889",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1850051531",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "14",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=1889&opt_level=2&title=Women%27s%20Skinny-Fit%20Pants&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/020e35aa-26b3-47ef-932f-5cab1da0d329.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Tank Tops & Camis",
                  priority: 0,
                  opt_id: 1822,
                  seo_link_url:
                    "/womens-tank-tops-camis-o3-1822.html?opt_level=2&title=Women%27s%20Tank%20Tops%20%26%20Camis&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "1822",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "2139237161",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "15",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=1822&opt_level=2&title=Women%27s%20Tank%20Tops%20%26%20Camis&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/fancy/1d1c6359-ccf5-4fc6-bf6d-6b82c961a9a5.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Wedding Event Wear",
                  priority: 0,
                  opt_id: 1824,
                  seo_link_url:
                    "/womens-wedding-event-wear-o3-1824.html?opt_level=2&title=Women%27s%20Wedding%20Event%20Wear&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "1824",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "424457998",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "16",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=1824&opt_level=2&title=Women%27s%20Wedding%20Event%20Wear&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/open/fd100a79eb594e38ae0e9ffa118cc2f0-goods.jpeg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Denim Jackets & Coats",
                  priority: 0,
                  opt_id: 6976,
                  seo_link_url:
                    "/womens-denim-jackets-coats-o3-6976.html?opt_level=2&title=Women%27s%20Denim%20Jackets%20%26%20Coats&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "6976",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1209327325",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "17",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=6976&opt_level=2&title=Women%27s%20Denim%20Jackets%20%26%20Coats&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/3d1c556a-5df7-48aa-bff1-df97a0c2a087.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Denim Apparel",
                  priority: 0,
                  opt_id: 565,
                  seo_link_url:
                    "/womens-denim-apparel-o3-565.html?opt_level=2&title=Women%27s%20Denim%20Apparel&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "565",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1686692396",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "18",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=565&opt_level=2&title=Women%27s%20Denim%20Apparel&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/open/d13c77cf45aa49e88959fb27a8ed6eb3-goods.jpeg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Cosplay Costumes",
                  priority: 0,
                  opt_id: 1021,
                  seo_link_url:
                    "/womens-cosplay-costumes-o3-1021.html?opt_level=2&title=Women%27s%20Cosplay%20Costumes&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "1021",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1504334549",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "19",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=1021&opt_level=2&title=Women%27s%20Cosplay%20Costumes&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/91f61a41-928a-4ef5-b3ed-274136750300.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Uniforms, Work & Safety",
                  priority: 0,
                  opt_id: 7030,
                  seo_link_url:
                    "/womens-uniforms-work-safety-o3-7030.html?opt_level=2&title=Women%27s%20Uniforms%2C%20Work%20%26%20Safety&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7030",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1840875179",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "20",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=7030&opt_level=2&title=Women%27s%20Uniforms%2C%20Work%20%26%20Safety&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/open/1b05650058ce449c9ed23cc8d96c7a5d-goods.jpeg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Maternity Clothing",
                  priority: 0,
                  opt_id: 7241,
                  seo_link_url:
                    "/maternity-clothing-o3-7241.html?opt_level=2&title=Maternity%20Clothing&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7241",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1321827055",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "21",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=7241&opt_level=2&title=Maternity%20Clothing&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/d6233405-a422-4713-b6ef-edb0b78e0326.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Shorts",
                  priority: 0,
                  opt_id: 1032,
                  seo_link_url:
                    "/womens-shorts-o3-1032.html?opt_level=2&title=Women%27s%20Shorts&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "1032",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1383628723",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "22",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=1032&opt_level=2&title=Women%27s%20Shorts&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/local-goods-image/transfer/8f1e0628/f7199162-06ca-4d68-a342-9478fe6450da.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Traditional & Cultural Wear",
                  priority: 0,
                  opt_id: 7022,
                  seo_link_url:
                    "/womens-traditional-cultural-wear-o3-7022.html?opt_level=2&title=Women%27s%20Traditional%20%26%20Cultural%20Wear&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7022",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "385075254",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "23",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=7022&opt_level=2&title=Women%27s%20Traditional%20%26%20Cultural%20Wear&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/1e14dde0136/5e3f93ff-e6e8-489c-9504-ce8c6ec55d46_213x213.png",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Bodysuits",
                  priority: 0,
                  opt_id: 1038,
                  seo_link_url:
                    "/womens-bodysuits-o3-1038.html?opt_level=2&title=Women%27s%20Bodysuits&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "1038",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1572023707",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "24",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=1038&opt_level=2&title=Women%27s%20Bodysuits&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/6a06fda3-862e-4766-9002-973e886327c6.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Denim Shorts",
                  priority: 0,
                  opt_id: 1899,
                  seo_link_url:
                    "/womens-denim-shorts-o3-1899.html?opt_level=2&title=Women%27s%20Denim%20Shorts&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "1899",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "380016525",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "25",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=1899&opt_level=2&title=Women%27s%20Denim%20Shorts&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/open/ba70b0a6f1764e3980cc20e4fbd8a882-goods.jpeg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Denim Skirts",
                  priority: 0,
                  opt_id: 1900,
                  seo_link_url:
                    "/womens-denim-skirts-o3-1900.html?opt_level=2&title=Women%27s%20Denim%20Skirts&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "1900",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1816671893",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "26",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=1900&opt_level=2&title=Women%27s%20Denim%20Skirts&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/02dac489-8de3-44f2-bda2-75e890af6e5c.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Swimsuits",
                  priority: 0,
                  opt_id: 533,
                  seo_link_url:
                    "/womens-swimsuits-o3-533.html?opt_level=2&title=Women%27s%20Swimsuits&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "533",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "260672257",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "27",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  parent_id: 28,
                  link_url:
                    "/category.html?opt_id=533&opt_level=2&title=Women%27s%20Swimsuits&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
              ],
              tab_type: 0,
              p_rec: {
                offset: "0",
                list_id: "1c4636d946fa4077882a5a2f87368f8b",
                g: "0",
                scene_id: "42",
                opt_id: "0",
                ts_req: "0",
                version: "5",
                search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                scene: "sub_all_opt_list",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "0",
                region: "211",
                no_result: "0",
                cloud_env: "udpm1",
                ts: "1761927607623",
              },
              disable_dup: false,
              pattern: 0,
              opt_type: 0,
              opt_name: "Shop by category",
              priority: 0,
              opt_id: 0,
              is_featured: false,
            },
            {
              child_opts: [
                {
                  tab_type: 0,
                  image_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/deff633d-1e50-47b4-9d87-1c186ac83b2e.webp",
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "-28",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "142809852",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "0",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  disable_dup: false,
                  pattern: 0,
                  link_url:
                    "/category.html?opt_id=-28&opt_level=2&title=Petite&_x_enter_scene_type=cate_tab&show_search_type=3",
                  opt_type: 2,
                  tag_id: 91014,
                  opt_name: "Petite",
                  priority: 0,
                  opt_id: -28,
                  is_featured: false,
                },
                {
                  tab_type: 0,
                  image_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c800387b-c148-4b4a-95f8-c551e22aa9a2.webp",
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "-29",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "301009317",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "1",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  disable_dup: false,
                  pattern: 0,
                  link_url:
                    "/category.html?opt_id=-29&opt_level=2&title=Hourglass&_x_enter_scene_type=cate_tab&show_search_type=3",
                  opt_type: 2,
                  tag_id: 91023,
                  opt_name: "Hourglass",
                  priority: 0,
                  opt_id: -29,
                  is_featured: false,
                },
                {
                  tab_type: 0,
                  image_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c82e665b-8984-4aec-ac45-fbe9869244c4.webp",
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "-30",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "454203215",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "2",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  disable_dup: false,
                  pattern: 0,
                  link_url:
                    "/category.html?opt_id=-30&opt_level=2&title=Curve%20%26%20Plus&_x_enter_scene_type=cate_tab&show_search_type=3",
                  opt_type: 2,
                  tag_id: 91012,
                  opt_name: "Curve & Plus",
                  priority: 0,
                  opt_id: -30,
                  is_featured: false,
                },
              ],
              tab_type: 0,
              p_rec: {
                offset: "0",
                list_id: "1c4636d946fa4077882a5a2f87368f8b",
                g: "0",
                scene_id: "42",
                opt_id: "-101",
                ts_req: "0",
                version: "5",
                search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                scene: "sub_all_opt_list",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "1",
                region: "211",
                no_result: "0",
                cloud_env: "udpm1",
                ts: "1761927607623",
              },
              disable_dup: false,
              pattern: 101,
              opt_type: 0,
              opt_name: "Shop by figure",
              priority: 0,
              opt_id: -101,
              is_featured: false,
            },
            {
              child_opts: [
                {
                  tab_type: 0,
                  image_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/a9ac433c-34f7-41de-9939-c045c87c9672.webp",
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "-14",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1072030423",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "0",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  disable_dup: false,
                  pattern: 0,
                  link_url:
                    "/category.html?opt_id=-14&opt_level=2&title=Vacation&_x_enter_scene_type=cate_tab&show_search_type=3",
                  opt_type: 2,
                  tf_id: 1000002470,
                  opt_name: "Vacation",
                  priority: 0,
                  opt_id: -14,
                  is_featured: false,
                },
                {
                  tab_type: 0,
                  image_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c2d932ac-28b4-4d6c-86a0-aef307f37de7.webp",
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "-27",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1985323147",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "1",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  disable_dup: false,
                  pattern: 0,
                  link_url:
                    "/category.html?opt_id=-27&opt_level=2&title=Elegant&_x_enter_scene_type=cate_tab&show_search_type=3",
                  opt_type: 2,
                  tf_id: 1000002483,
                  opt_name: "Elegant",
                  priority: 0,
                  opt_id: -27,
                  is_featured: false,
                },
                {
                  tab_type: 0,
                  image_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/01da1658-b71b-4285-8556-ad07e6cbf699.webp",
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "-16",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1392754940",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "2",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  disable_dup: false,
                  pattern: 0,
                  link_url:
                    "/category.html?opt_id=-16&opt_level=2&title=Street&_x_enter_scene_type=cate_tab&show_search_type=3",
                  opt_type: 2,
                  tf_id: 1000002472,
                  opt_name: "Street",
                  priority: 0,
                  opt_id: -16,
                  is_featured: false,
                },
                {
                  tab_type: 0,
                  image_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/62fbc490-fd33-44a9-b271-e0e07a18541c.webp",
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "-23",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "75713094",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "3",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  disable_dup: false,
                  pattern: 0,
                  link_url:
                    "/category.html?opt_id=-23&opt_level=2&title=Party&_x_enter_scene_type=cate_tab&show_search_type=3",
                  opt_type: 2,
                  tf_id: 1000002479,
                  opt_name: "Party",
                  priority: 0,
                  opt_id: -23,
                  is_featured: false,
                },
                {
                  tab_type: 0,
                  image_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/5586312e-26cf-4f98-93a3-fb7977039b7b.webp",
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "-20",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1377113224",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "4",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  disable_dup: false,
                  pattern: 0,
                  link_url:
                    "/category.html?opt_id=-20&opt_level=2&title=Girly&_x_enter_scene_type=cate_tab&show_search_type=3",
                  opt_type: 2,
                  tf_id: 1000002476,
                  opt_name: "Girly",
                  priority: 0,
                  opt_id: -20,
                  is_featured: false,
                },
                {
                  tab_type: 0,
                  image_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/8441e2a1-1972-44e3-9814-5fb2517a87a4.webp",
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "-21",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1649115391",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "5",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  disable_dup: false,
                  pattern: 0,
                  link_url:
                    "/category.html?opt_id=-21&opt_level=2&title=Urban&_x_enter_scene_type=cate_tab&show_search_type=3",
                  opt_type: 2,
                  tf_id: 1000002477,
                  opt_name: "Urban",
                  priority: 0,
                  opt_id: -21,
                  is_featured: false,
                },
                {
                  tab_type: 0,
                  image_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c596e2a3-77ce-49d5-9f89-c29e8da65a85.webp",
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "-25",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "2109221425",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "6",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  disable_dup: false,
                  pattern: 0,
                  link_url:
                    "/category.html?opt_id=-25&opt_level=2&title=Sporty&_x_enter_scene_type=cate_tab&show_search_type=3",
                  opt_type: 2,
                  tf_id: 1000002481,
                  opt_name: "Sporty",
                  priority: 0,
                  opt_id: -25,
                  is_featured: false,
                },
                {
                  tab_type: 0,
                  image_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/962c68ab-8e9f-45ad-9474-b0349bd30ada.webp",
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "-24",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1336457661",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "7",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  disable_dup: false,
                  pattern: 0,
                  link_url:
                    "/category.html?opt_id=-24&opt_level=2&title=Casual&_x_enter_scene_type=cate_tab&show_search_type=3",
                  opt_type: 2,
                  tf_id: 1000002480,
                  opt_name: "Casual",
                  priority: 0,
                  opt_id: -24,
                  is_featured: false,
                },
                {
                  tab_type: 0,
                  image_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d5122b93-e0fc-442c-be40-47cba9c3bf34.webp",
                  p_rec: {
                    offset: "0",
                    list_id: "1c4636d946fa4077882a5a2f87368f8b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "-26",
                    ts_req: "0",
                    version: "5",
                    search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1307966821",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "8",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1761927607623",
                  },
                  disable_dup: false,
                  pattern: 0,
                  link_url:
                    "/category.html?opt_id=-26&opt_level=2&title=Chic&_x_enter_scene_type=cate_tab&show_search_type=3",
                  opt_type: 2,
                  tf_id: 1000002482,
                  opt_name: "Chic",
                  priority: 0,
                  opt_id: -26,
                  is_featured: false,
                },
              ],
              tab_type: 0,
              p_rec: {
                offset: "0",
                list_id: "1c4636d946fa4077882a5a2f87368f8b",
                g: "0",
                scene_id: "42",
                opt_id: "-100",
                ts_req: "0",
                version: "5",
                search_id: "HFNLCzmshKG4RTG1S0lpCVPz-nZiGbaOHLPhnay6NLo=",
                scene: "sub_all_opt_list",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "2",
                region: "211",
                no_result: "0",
                cloud_env: "udpm1",
                ts: "1761927607623",
              },
              disable_dup: false,
              pattern: 100,
              opt_type: 0,
              opt_name: "Shop by style",
              priority: 0,
              opt_id: -100,
              is_featured: false,
            },
          ],
          popup_map: {},
          call_opt: 1,
          pattern: 0,
          extend_fields: {},
          home_opt_module_list: [],
          text_cart_button: false,
          title: "Explore your interests",
          jump_type: 0,
          recent_word: 0,
          shield_all: false,
        },
        has_more: true,
      },
      success: true,
      message: "",
    };

    if (!data?.result?.data?.opt_list) return [];

    const response = data.result.data.opt_list.map((opt) => {
      const subCategory = opt.child_opts?.map((child) => {
        return {
          opt_name: child.opt_name,
          child_images: child.image_url,
        };
      });

      return {
        opt_name: opt.opt_name,
        child_images: opt.child_opts?.map((child) => child.image_url) || [],
        sub_opt_name: subCategory?.map((sub) => sub.opt_name),
        sub_child_images1: subCategory?.map((sub) => sub.child_images),
      };
    });

    const categoryRepository = getRepository(Category);
    for (const parent of response) {
      // Check if first-level category exists
      let parentCategory = await categoryRepository
        .createQueryBuilder("category")
        .where(`category.name = :name`, { name: parent.opt_name })
        .getOne();

      if (!parentCategory) {
        parentCategory = categoryRepository.create({
          name: parent.opt_name,
          oringImageURL: parent.child_images[0] || "",
          parent_id: "842a526e-1a9b-46b7-80bb-8a9054433419",
          status: BaseStatus.ACTIVE,
        });
        await categoryRepository.save(parentCategory);
      }

      // Insert second-level categories
      if (parent.sub_opt_name && parent.sub_child_images1) {
        for (let i = 0; i < parent.sub_opt_name.length; i++) {
          const subName = parent.sub_opt_name[i];

          let subCategory = await categoryRepository
            .createQueryBuilder("category")
            .where(`category.name = :name AND category.parent_id = :parentId`, {
              name: subName,
              parentId: parentCategory.id,
            })
            .getOne();

          if (!subCategory) {
            subCategory = categoryRepository.create({
              name: subName,
              oringImageURL: parent.sub_child_images1[i] || "",
              parent_id: parentCategory.id,
              status: BaseStatus.ACTIVE,
            });
            await categoryRepository.save(subCategory);
          }
        }
      }
    }
  }

  static async createBanner() {
    try {
      const staffLogin = await StaffService.staffLogin({
        where: { username: "admin", password: "12345678" },
      });
      let token = "";
      if (staffLogin?.success) {
        token = staffLogin.data?.token as string;
      }
      const req: any = {};
      req.headers = {};
      req.headers.authorization = token;

      const fetchJson = async (url: string, options: RequestInit) => {
        const response = await fetch(url, options);
        return response.json();
      };
      const banners = await fetchJson(
        "https://dhlshopping.com/api/customer/index/store?type=advert",
        // "https://dhlshopping.com/api/customer/index/store?type=banners",
        // "https://dhlshopping.com/api/customer/index/store?type=banners",
        {
          method: "GET",
          redirect: "follow",
        }
      );
      let count = 7;
      for (const banner of banners.data) {
        console.log({ count });
        const url = "https://227_cdn.pionexprocoin.cc/" + banner?.icon;
        const imageUrl = await this.uploadImage(url);
        const data: any = {
          name: "Banner " + count,
          image: imageUrl,
          position:
            banner?.position == "top"
              ? "2"
              : banner?.position == "center"
              ? "3"
              : banner?.position == "center_top"
              ? "4"
              : banner?.position == "bottom"
              ? "5"
              : "1",
        };
        await BannerService.createBanner({ data, req });
        count++;
      }
    } catch (error) {
      console.log({ error });
    }
  }

  // static async createLoopCategoryAndProduct() {
  //   const baseCategoryUrl =
  //     "https://dhlshopping.com/api/customer/index/get-all-category";
  //   const categoryDetailsUrl = (id: string, page: number, pagesize: number) =>
  //     `https://dhlshopping.com/api/category/${id}/shop?page=${page}&pagesize=${pagesize}&sort=new&brand=&min_price=1&max_price=99990`;
  //   const productDetailsUrl = (id: string) =>
  //     `https://dhlshopping.com/api/product/${id}/a`;
  //   const cdnUrl = "https://227_cdn.pionexprocoin.cc";

  //   const cloudinaryKeys = [
  //     {
  //       url: "https://api.cloudinary.com/v1_1/dvzvw2ztg/image/upload",
  //       preset: "tiktokshop",
  //     },
  //     {
  //       url: "https://api.cloudinary.com/v1_1/dvh8zf1nm/image/upload",
  //       preset: "tiktokshop",
  //     },
  //     {
  //       url: "https://api.cloudinary.com/v1_1/djcsccoap/image/upload",
  //       preset: "tiktokshop",
  //     },
  //     {
  //       url: "https://api.cloudinary.com/v1_1/dfocpdsxd/image/upload",
  //       preset: "tiktokshop",
  //     },
  //     {
  //       url: "https://api.cloudinary.com/v1_1/dxqvafipl/image/upload",
  //       preset: "tiktokshop",
  //     },
  //   ];

  //   const fetchJson = async (url: string, options: RequestInit) => {
  //     const response = await fetch(url, options);
  //     return response.json();
  //   };

  //   const staffLogin = await StaffService.staffLogin({
  //     where: { username: "admin", password: "12345678" },
  //   });
  //   const token = staffLogin?.success ? staffLogin.data?.token : "";

  //   const uploadImage = async (imageUrl: string) => {
  //     const randomKey =
  //       cloudinaryKeys[Math.floor(Math.random() * cloudinaryKeys.length)];
  //     const formData = new FormData();
  //     formData.append("file", imageUrl);
  //     formData.append("upload_preset", randomKey.preset);

  //     try {
  //       const response = await fetch(randomKey.url, {
  //         method: "POST",
  //         body: formData,
  //       });
  //       const data = await response.json();
  //       return data.secure_url || null;
  //     } catch (error) {
  //       console.error("Error uploading image:", error);
  //       return null;
  //     }
  //   };

  //   const mapCategoryData = async (
  //     category: any,
  //     parentId: string | null = null
  //   ) => {
  //     const imageUrl = await uploadImage(
  //       category.image?.includes("https")
  //         ? category.image
  //         : `${cdnUrl}${category.image}`
  //     );
  //     return {
  //       image: imageUrl,
  //       name: { name_en: category?.name?.name_en || "" },
  //       parent_id: parentId,
  //       origin_id: category?.id,
  //     };
  //   };

  //   const mapProductData = async (product: any, categoryId: string | null) => {
  //     const mainImageUrl = await uploadImage(
  //       product?.image?.main?.image?.includes("https")
  //         ? product?.image?.main?.image
  //         : `${cdnUrl}${product?.image?.main?.image}`
  //     );
  //     const allProductImages = await Promise.all(
  //       product?.image?.gallery?.map(async (image: any) => {
  //         return await uploadImage(
  //           image?.image?.includes("https")
  //             ? image?.image
  //             : `${cdnUrl}${image?.image}`
  //         );
  //       }) || []
  //     );

  //     return {
  //       name: { name_en: product?.name?.name_en || "" },
  //       description: { name_en: product?.description?.description_en || "" },
  //       cover_image: mainImageUrl,
  //       images: allProductImages,
  //       category_id: categoryId,
  //       total_star: parseFloat(product?.score) || 5.0,
  //       price: parseFloat(product?.price) || 34.99,
  //       quantity: parseFloat(product?.qty) || 2837,
  //       origin_id: product?.id,
  //     };
  //   };

  //   const req: any = { headers: { authorization: token } };
  //   const delay = (ms: number) =>
  //     new Promise((resolve) => setTimeout(resolve, ms));

  //   let categoryCount = 0;
  //   let productCount = 0;

  //   const processCategory = async (
  //     category: any,
  //     parentId: string | null = null
  //   ) => {
  //     const categoryRepository = getRepository(Category);
  //     const existingCategory = await categoryRepository.findOne({
  //       where: { origin_id: category?.id },
  //     });
  //     let categoryId: any = existingCategory?.id || "";

  //     if (!existingCategory) {
  //       const categoryData: any = await mapCategoryData(category, parentId);
  //       const parentCategory = await CategoryService.createCategory({
  //         data: categoryData,
  //         req,
  //       });
  //       categoryId = parentCategory?.data?.id;
  //       if (!categoryId) {
  //         console.error("Failed to create category:", parentCategory);
  //         return;
  //       }
  //     }

  //     categoryCount++;
  //     console.log("createCategory::", { categoryCount, categoryId });

  //     let page = 1;
  //     const pagesize = 1;
  //     let continues = true;

  //     while (continues && productCount < 5000) {
  //       try {
  //         console.log("step 1======");
  //         const categoryProducts = await fetchJson(
  //           categoryDetailsUrl(category.id, page, pagesize),
  //           { method: "GET", redirect: "follow" }
  //         );
  //         console.log("====step1 categoryProducts...====", categoryProducts);

  //         if (
  //           categoryProducts.code === 200 &&
  //           categoryProducts?.data?.list?.length > 0
  //         ) {
  //           await Promise.all(
  //             categoryProducts.data.list.map(async (product: any) => {
  //               const productRepository = getRepository(Product);
  //               const existingProduct = await productRepository.findOne({
  //                 where: { origin_id: product?.id },
  //               });

  //               if (!existingProduct) {
  //                 const productDetails = await fetchJson(
  //                   productDetailsUrl(product.id),
  //                   { method: "GET", redirect: "follow" }
  //                 );
  //                 const productData: any = await mapProductData(
  //                   productDetails?.data?.product,
  //                   categoryId
  //                 );
  //                 console.log({ productDetails: productData?.description });
  //                 const createProduct = await ProductService.createProduct({
  //                   data: productData,
  //                   req,
  //                 });

  //                 productCount++;
  //                 console.log("createProduct::", {
  //                   productCount,
  //                   productId: createProduct?.data?.id,
  //                 });
  //                 // await delay(10);
  //               }
  //             })
  //           );
  //         } else {
  //           continues = false;
  //           productCount = 0;
  //         }
  //       } catch (categoryError) {
  //         console.error("Error fetching category products:", categoryError);
  //         continues = false;
  //       }

  //       page++;
  //     }

  //     if (category?.child?.length > 0) {
  //       await Promise.all(
  //         category.child.map((childCategory: any) =>
  //           processCategory(childCategory, categoryId)
  //         )
  //       );
  //     }
  //   };

  //   try {
  //     const categories = await fetchJson(baseCategoryUrl, {
  //       method: "POST",
  //       redirect: "follow",
  //     });
  //     console.log("step 1 cateogry======", categories);

  //     if (categories.code !== 200 || !categories?.data) {
  //       console.error("Unexpected response for categories:", categories);
  //       return;
  //     }

  //     await Promise.all(
  //       categories.data.map((category: any) => processCategory(category))
  //     );
  //     console.log("All categories and products processed successfully.");
  //   } catch (error) {
  //     console.error("Error processing categories and products:", error);
  //   }
  // }

  static async createProductWithoutImage() {
    const cloudinaryKeys = [
      {
        url: "https://api.cloudinary.com/v1_1/dvzvw2ztg/image/upload",
        preset: "tiktokshop",
      },
      {
        url: "https://api.cloudinary.com/v1_1/dvh8zf1nm/image/upload",
        preset: "tiktokshop",
      },
      {
        url: "https://api.cloudinary.com/v1_1/djcsccoap/image/upload",
        preset: "tiktokshop",
      },
      {
        url: "https://api.cloudinary.com/v1_1/dfocpdsxd/image/upload",
        preset: "tiktokshop",
      },
      {
        url: "https://api.cloudinary.com/v1_1/dxqvafipl/image/upload",
        preset: "tiktokshop",
      },
    ];
    const uploadImage = async (imageUrl: string) => {
      // Randomly select a key from the cloudinaryKeys array
      const randomKey =
        cloudinaryKeys[Math.floor(Math.random() * cloudinaryKeys.length)];
      const CLOUDINARY_URL = randomKey.url;
      const UPLOAD_PRESET = randomKey.preset;

      const _formData = new FormData();
      _formData.append("file", `${imageUrl}`);
      _formData.append("upload_preset", UPLOAD_PRESET);

      try {
        const response = await fetch(CLOUDINARY_URL, {
          method: "POST",
          body: _formData,
        });

        const data = await response.json();

        if (data.secure_url) {
          return data.secure_url;
        }
        return null;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
    const productDetailsUrl = (id: string) =>
      `https://dhlshopping.com/api/product/${id}/a`;
    const fetchJson = async (url: string, options: RequestInit) => {
      const response = await fetch(url, options);
      return response.json();
    };
    const productRepository = getRepository(Product);
    const products: any = await productRepository
      .createQueryBuilder("product")
      .select(["product.id", "product.origin_id"])
      .where({ cover_image: "null" })
      .getMany();
    // const products = await productRepository
    //   .createQueryBuilder("product")
    //   .where("json_array_length(product.images) = 0") // Check for empty array
    //   .getMany();
    console.log({ products });

    // return;

    if (products?.length) {
      for (const product of products) {
        const productDetails = await fetchJson(
          productDetailsUrl(product.origin_id),
          {
            method: "GET",
            redirect: "follow",
          }
        );
        console.log({ productDetails: productDetails?.data?.product.image });
        const imageUrl = await uploadImage(
          `${productDetails?.data?.product.image?.main?.image}`
        );
        let allProductImages: string[] = [];
        if (productDetails?.data?.product.image?.gallery?.length) {
          for (const image of productDetails?.data?.product.image?.gallery) {
            const _imageUrl = await uploadImage(`${image?.image}`);
            allProductImages.push(_imageUrl);
          }
        }
        console.log({ imageUrl, allProductImages });

        await productRepository
          .createQueryBuilder()
          .update(Product) // Specify the entity
          .set({ cover_image: imageUrl, images: allProductImages }) // Set new values
          .where("id = :productId", { productId: product?.id }) // Condition
          .execute(); // Execute the query
      }
    }
  }

  static async createProduct({
    data,
    req,
  }: {
    data: ProductModel;
    req: Request;
  }) {
    try {
      const productRepository = getRepository(Product);

      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      if (!data?.name?.name_en || !data?.cover_image) {
        return handleError(
          "Validation Error: Missing required fields",
          400,
          null
        );
      }

      const categoryIds = data?.category_id
        ? await this.findCategoryParents(data.category_id)
        : [];
      const newProduct = productRepository.create({
        ...data,
        category_ids: categoryIds,
        status: data.status || BaseStatus.ACTIVE,
        created_by: staffDataFromToken.id,
      });

      const savedProduct = await productRepository.save(newProduct);
      return handleSuccess(savedProduct);
    } catch (error: any) {
      console.log("Error while create product::", error);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async updateProduct({
    data,
    req,
  }: {
    data: ProductModel;
    req: Request;
  }) {
    try {
      const productRepository = getRepository(Product);

      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const product = await productRepository.findOneById(data.id);
      if (!product) return handleError("Product not found", 404, null);

      const categoryIds = data?.category_id
        ? await this.findCategoryParents(data.category_id)
        : [];
      productRepository.merge(product, {
        ...data,
        category_ids: categoryIds,
        updated_by: staffDataFromToken.id,
      });

      const updatedProduct = await productRepository.save(product);
      return handleSuccess(updatedProduct);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async deleteProduct({ id, req }: { id: string; req: Request }) {
    try {
      const productRepository = getRepository(Product);

      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const product = await productRepository.findOneById(id);
      if (!product) return handleError("Product not found", 404, null);

      productRepository.merge(product, {
        status: BaseStatus.INACTIVE,
        is_active: false,
      });

      await productRepository.save(product);

      // await productRepository.remove(product);
      return handleSuccess(null);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getProducts(
    {
      req,
      where,
      page,
      limit,
      sortedBy,
    }: {
      req: Request;
      where: Partial<ProductWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo
  ) {
    return this.buildProductQuery(
      { req, where, page, limit, sortedBy },
      info,
      false
    );
  }

  static async adminGetProducts(
    {
      req,
      where,
      page,
      limit,
      sortedBy,
    }: {
      req: Request;
      where: Partial<ProductWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo
  ) {
    return this.buildProductQuery(
      { req, where, page, limit, sortedBy },
      info,
      true
    );
  }

  static async getBestSellingProducts(
    {
      req,
      where,
      page,
      limit,
      sortedBy,
    }: {
      req: Request;
      where: Partial<ProductWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo
  ) {
    const queryBuilder = this.buildBaseQuery(
      { req, where, page, limit, sortedBy },
      info
    );
    // queryBuilder.orderBy({ sell_count: "DESC" });
    return this.executeQuery(queryBuilder, info);
  }

  static async getSimilarProducts(
    {
      req,
      where,
      page,
      limit,
    }: {
      req: Request;
      where: Partial<SimilarProductWhereInput>;
      page: number;
      limit: number;
    },
    info: GraphQLResolveInfo
  ) {
    const productRepository = getRepository(Product);

    const queryBuilder = this.buildBaseQuery(
      { req, where, page, limit, sortedBy: BaseOrderByInput.created_at_DESC },
      info
    );
    if (where?.product_id) {
      const product = await productRepository.findOne({
        where: { id: where.product_id },
        select: ["category_ids", "brand_id"],
      });

      if (product?.category_ids?.length) {
        queryBuilder.andWhere("product.category_ids::jsonb @> :category_ids", {
          category_ids: JSON.stringify(product.category_ids),
        });
      }
      if (product?.brand_id) {
        queryBuilder.orWhere("product.brand_id = :brand_id", {
          brand_id: product.brand_id,
        });
      }
    }
    queryBuilder.addOrderBy("RANDOM()").take(limit);
    return this.executeQuery(queryBuilder, info);
  }

  static async searchProducts({
    where,
    page,
    limit,
    sortedBy,
  }: {
    where: Partial<ProductWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
  }) {
    const productRepository = getRepository(Product);

    const queryBuilder = productRepository.createQueryBuilder("product");
    if (where?.keyword) {
      queryBuilder.where("product.name ->> 'name_en' ILIKE :keyword", {
        keyword: `%${where.keyword}%`,
      });
    }
    queryBuilder
      .select([
        "product.id",
        "product.name",
        "product.price",
        "product.status",
        "product.cover_image",
        "product.description",
      ])
      .skip((page - 1) * limit)
      .take(limit)
      .orderBy(this.order(sortedBy) as any);
    const [products, total] = await queryBuilder.getManyAndCount();
    return handleSuccessWithTotalData(products, total);
  }

  static async getProduct({ id }: { id: string }) {
    try {
      const productRepository = getRepository(Product);
      const categoryRepository = getRepository(Category);

      const product = await productRepository.findOne({
        where: { id, is_active: true },
      });
      if (!product) return handleError("Product not found", 404, null);

      if (product?.category_ids?.length) {
        const categories = await categoryRepository.findByIds(
          product.category_ids
        );
        product.categories = product.category_ids.map((id) =>
          categories.find((category) => category.id === id)
        ) as any;
      }

      return handleSuccess(product);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  private static buildProductQuery(
    {
      req,
      where,
      page,
      limit,
      sortedBy,
    }: {
      req: Request;
      where: Partial<ProductWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo,
    isAdmin: boolean
  ) {
    const queryBuilder = this.buildBaseQuery(
      { req, where, page, limit, sortedBy },
      info,
      isAdmin
    );
    if (isAdmin) {
      queryBuilder
        .leftJoinAndSelect("product.categoryData", "category")
        .leftJoinAndSelect("product.brandData", "brand");
    }
    return this.executeQuery(queryBuilder, info);
  }

  private static buildBaseQuery(
    {
      req,
      where,
      page,
      limit,
      sortedBy,
    }: {
      req: Request;
      where: Partial<ProductWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo,
    isAdmin = false
  ) {
    const productRepository = getRepository(Product);

    const queryBuilder = productRepository
      .createQueryBuilder("product")
      .where("product.is_active = :isActive", { isActive: true });
    const selectFields = getRequestedFields(info, "getProducts.data");
    if (selectFields?.length) {
      const fields = selectFields
        .filter((field) => field !== "shopProductStatus")
        .map((field) => `product.${field}`);
      queryBuilder.select(fields);
    }

    if (!isAdmin) {
      try {
        const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
          req
        );
        if (shopDataFromToken?.id) {
          queryBuilder.leftJoinAndSelect(
            "product.shopProducts",
            "shopProduct",
            "shopProduct.shop_id = :shopId",
            { shopId: shopDataFromToken.id }
          );
        }
      } catch (error) {}
    }

    if (where?.keyword) {
      queryBuilder.andWhere(
        new Brackets((qb) => {
          qb.where("product.name ->> 'name_en' ILIKE :keyword", {
            keyword: `%${where.keyword}%`,
          }).orWhere("product.description ->> 'name_en' ILIKE :keyword", {
            keyword: `%${where.keyword}%`,
          });
        })
      );
    }

    if (where?.status)
      queryBuilder.andWhere("product.status = :status", {
        status: where.status,
      });
    if (where?.category_id)
      queryBuilder.andWhere("product.category_ids::jsonb @> :category_id", {
        category_id: JSON.stringify([where.category_id]),
      });

    if (where?.category_ids?.length)
      queryBuilder.andWhere(
        "product.category_ids::jsonb ?| array[:...category_ids]",
        {
          category_ids: where.category_ids,
        }
      );

    if (where?.brand_id)
      queryBuilder.andWhere("product.brand_id = :brand_id", {
        brand_id: where.brand_id,
      });
    if (where?.product_top)
      queryBuilder.andWhere("product.product_top = :product_top", {
        product_top: where.product_top,
      });
    if (where?.product_vip || where?.product_vip === 0)
      queryBuilder.andWhere("product.product_vip = :product_vip", {
        product_vip: where.product_vip,
      });
    if (where?.price_between) {
      queryBuilder
        .andWhere("product.price >= :minPrice", {
          minPrice: where.price_between[0],
        })
        .andWhere("product.price <= :maxPrice", {
          maxPrice: where.price_between[1],
        });
    }
    if (where?.quantity !== undefined) {
      queryBuilder.andWhere(
        `product.quantity ${where.quantity > 0 ? ">=" : "<="} :quantity`,
        { quantity: where.quantity > 0 ? 1 : 0 }
      );
    }
    if (
      where?.createdAtBetween?.startDate &&
      where?.createdAtBetween?.endDate
    ) {
      queryBuilder.andWhere(
        "DATE(product.created_at) BETWEEN :startDate AND :endDate",
        {
          startDate: where.createdAtBetween.startDate,
          endDate: where.createdAtBetween.endDate,
        }
      );
    }
    // within 30 day, 15 day, 7 day
    if (where?.within) {
      const days = where.within;
      const fromDate = new Date();
      fromDate.setDate(fromDate.getDate() - days);
      queryBuilder.andWhere("product.created_at >= :fromDate", { fromDate });
    }

    // 5 Star rate
    if (where?.star_top) {
      queryBuilder.andWhere("product.total_star >= 4");
      queryBuilder.orderBy("RANDOM()");
    } else if (where?.discount && where?.discount > 0) {
      queryBuilder.andWhere("product.discount >= :discount", {
        discount: where.discount,
      });
      queryBuilder.orderBy("RANDOM()");
    } else if (where?.offer) {
      queryBuilder.andWhere("product.discount >0");
      queryBuilder.orderBy("RANDOM()");
    } else {
      queryBuilder.orderBy(this.order(sortedBy, where?.price_between) as any);
    }

    queryBuilder.skip((page - 1) * limit).take(limit);
    return queryBuilder;
  }

  private static async executeQuery(
    queryBuilder: any,
    info: GraphQLResolveInfo
  ) {
    const selectFields = getRequestedFields(info, "getProducts.data");
    if (selectFields?.length <= 0) {
      const total = await queryBuilder.getCount();
      return handleSuccessWithTotalData([], total);
    }

    const [products, total] = await queryBuilder.getManyAndCount();
    products.forEach((product: Product) => {
      product.shopProductStatus =
        product.shopProducts?.[0]?.shopProductStatus || null;
    });

    return handleSuccessWithTotalData(products, total);
  }

  // static order(sortedBy: BaseOrderByInput): [string, "ASC" | "DESC"] {
  //   switch (sortedBy) {
  //     case BaseOrderByInput.created_at_ASC:
  //       return ["product.created_at", "ASC"];
  //     case BaseOrderByInput.created_at_DESC:
  //       return ["product.created_at", "DESC"];
  //     case BaseOrderByInput.updated_at_ASC:
  //       return ["product.updated_at", "ASC"];
  //     case BaseOrderByInput.updated_at_DESC:
  //       return ["product.updated_at", "DESC"];
  //     default:
  //       return ["product.created_at", "DESC"]; // Default order
  //   }
  // }
  private static order(sortedBy: BaseOrderByInput, price = [0]) {
    switch (sortedBy) {
      case BaseOrderByInput.created_at_ASC:
        return { "product.created_at": "ASC" };
      case BaseOrderByInput.created_at_DESC:
        return { "product.created_at": "DESC" };
      case BaseOrderByInput.updated_at_ASC:
        return { "product.updated_at": "ASC" };
      case BaseOrderByInput.updated_at_DESC:
        return { "product.updated_at": "DESC" };
      case BaseOrderByInput.sell_count_ASC:
        return { "product.sell_count": "ASC" };
      case BaseOrderByInput.sell_count_DESC:
        return { "product.sell_count": "DESC" };
      case BaseOrderByInput.price_ASC:
        return { "product.price": "ASC" };
      case BaseOrderByInput.price_DESC:
        return { "product.price": "DESC" };
      default:
        return { "product.created_at": "DESC" };
    }
  }

  private static async findCategoryParents(
    categoryId: string,
    categoryIds: string[] = []
  ) {
    try {
      const categoryRepository = getRepository(Category);

      const category = await categoryRepository.findOne({
        where: { id: categoryId },
      });
      if (category) {
        categoryIds.push(category.id);
        if (category.parent_id)
          await this.findCategoryParents(category.parent_id, categoryIds);
      }
      return categoryIds;
    } catch (error) {
      console.error("Error finding parent categories:", error);
      return categoryIds;
    }
  }
}

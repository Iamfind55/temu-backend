import axios from "axios";
import { Request } from "express";
import { GraphQLResolveInfo } from "graphql";
import { Brackets, getRepository } from "typeorm";
import { config } from "../../../config";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { BaseOrderByInput, BaseStatus } from "../../../utils/base/baseType";
import { getRequestedFields } from "../../../utils/graphqlUtils";
import { handleError } from "../../../utils/response/error.handler";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import { BannerService } from "../../banner";
import { Branding, BrandingService } from "../../branding";
import { Category, CategoryService } from "../../category";
import { StaffService } from "../../staff";
import { Product } from "../entity";
import {
  ProductModel,
  ProductWhereInput,
  SimilarProductWhereInput,
} from "../types";

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
        } catch (uploadError: any) {
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
        server_time: 1762093691053,
        data: {
          default_row_cnt: 0,
          opt_list: [
            {
              child_opts: [
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/e19e31ae-c807-4a3f-b21f-b676ef3217d6.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Bikini Sets",
                  priority: 0,
                  opt_id: 7167,
                  seo_link_url:
                    "/womens-bikini-sets-o3-7167.html?opt_level=2&title=Women%27s%20Bikini%20Sets&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7167",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1877071882",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "0",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7167&opt_level=2&title=Women%27s%20Bikini%20Sets&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/cccbf893-9237-4dde-baff-68b6c82a7148.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's One-pieces",
                  priority: 0,
                  opt_id: 7171,
                  seo_link_url:
                    "/womens-one-pieces-o3-7171.html?opt_level=2&title=Women%27s%20One-pieces&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7171",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "746515040",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "1",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7171&opt_level=2&title=Women%27s%20One-pieces&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/fe80e9b7-789f-4003-8755-3f732a6be808.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Tankinis",
                  priority: 0,
                  opt_id: 7169,
                  seo_link_url:
                    "/womens-tankinis-o3-7169.html?opt_level=2&title=Women%27s%20Tankinis&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7169",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1316393756",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "2",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7169&opt_level=2&title=Women%27s%20Tankinis&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/d9f91748-ab1b-4441-a5a8-74b82a0f9448.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Cover Ups",
                  priority: 0,
                  opt_id: 7177,
                  seo_link_url:
                    "/womens-cover-ups-o3-7177.html?opt_level=2&title=Women%27s%20Cover%20Ups&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7177",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1650908204",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "3",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7177&opt_level=2&title=Women%27s%20Cover%20Ups&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/025eebc1-7247-4552-b88e-0942cf613b73.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Curve Tankinis",
                  priority: 0,
                  opt_id: 7187,
                  seo_link_url:
                    "/curve-tankinis-o3-7187.html?opt_level=2&title=Curve%20Tankinis&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7187",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1224851689",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "4",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7187&opt_level=2&title=Curve%20Tankinis&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/53cd63bd-b908-411a-99d7-d21718f32a94.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Curve Cover Ups",
                  priority: 0,
                  opt_id: 7195,
                  seo_link_url:
                    "/curve-cover-ups-o3-7195.html?opt_level=2&title=Curve%20Cover%20Ups&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7195",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1762608473",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "5",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7195&opt_level=2&title=Curve%20Cover%20Ups&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/5bf8af1e-9efc-4cc2-af9d-ab312b326817.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women‘s Beachwear sets",
                  priority: 0,
                  opt_id: 7183,
                  seo_link_url:
                    "/womens-beachwear-sets-o3-7183.html?opt_level=2&title=Women%E2%80%98s%20Beachwear%20sets&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7183",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "52683348",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "6",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7183&opt_level=2&title=Women%E2%80%98s%20Beachwear%20sets&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/open/fa93b6d885a44c7bab44fa2e2c2a8d44-goods.jpeg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Rash Guard Swimsuit",
                  priority: 0,
                  opt_id: 7181,
                  seo_link_url:
                    "/womens-rash-guard-swimsuit-o3-7181.html?opt_level=2&title=Women%27s%20Rash%20Guard%20Swimsuit&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7181",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "994890712",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "7",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7181&opt_level=2&title=Women%27s%20Rash%20Guard%20Swimsuit&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/Material/ImageCut/cbee6126/187e177f-3243-4732-b18a-22d66b958213.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Curve One-pieces",
                  priority: 0,
                  opt_id: 7189,
                  seo_link_url:
                    "/curve-one-pieces-o3-7189.html?opt_level=2&title=Curve%20One-pieces&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7189",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "2139435271",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "8",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7189&opt_level=2&title=Curve%20One-pieces&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/8aa5dedb-d501-4950-9212-3eeecbc71754.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Curve Bikini Sets",
                  priority: 0,
                  opt_id: 7185,
                  seo_link_url:
                    "/curve-bikini-sets-o3-7185.html?opt_level=2&title=Curve%20Bikini%20Sets&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7185",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "246994889",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "9",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7185&opt_level=2&title=Curve%20Bikini%20Sets&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/f9520151-d869-45b2-ac20-5789f4cd6652.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Beach Shorts",
                  priority: 0,
                  opt_id: 7179,
                  seo_link_url:
                    "/womens-beach-shorts-o3-7179.html?opt_level=2&title=Women%27s%20Beach%20Shorts&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7179",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1431956574",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "10",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7179&opt_level=2&title=Women%27s%20Beach%20Shorts&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/Material/ImageCut/4aed01/60e3ee64-c7bc-4512-bdc4-00b859105d5c.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Bikini Bottoms",
                  priority: 0,
                  opt_id: 7175,
                  seo_link_url:
                    "/womens-bikini-bottoms-o3-7175.html?opt_level=2&title=Women%27s%20Bikini%20Bottoms&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7175",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1831902692",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "11",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7175&opt_level=2&title=Women%27s%20Bikini%20Bottoms&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/9c91a55a-510a-49a4-9afd-6fa6c94a4dff.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Women's Bikini Tops",
                  priority: 0,
                  opt_id: 7173,
                  seo_link_url:
                    "/womens-bikini--o3-7173.html?opt_level=2&title=Women%27s%20Bikini%20Tops&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7173",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "863655142",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "12",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7173&opt_level=2&title=Women%27s%20Bikini%20Tops&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/e34aac32-b4e5-46b0-b736-489a06550e00.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Curve Beachwear Bottoms",
                  priority: 0,
                  opt_id: 7193,
                  seo_link_url:
                    "/curve-beachwear-bottoms-o3-7193.html?opt_level=2&title=Curve%20Beachwear%20Bottoms&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7193",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1288171864",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "13",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7193&opt_level=2&title=Curve%20Beachwear%20Bottoms&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
                {
                  child_opts: [],
                  image_url:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/ad74e05e-210d-4205-9be2-45493a891be5.jpg",
                  disable_dup: false,
                  pattern: 0,
                  opt_name: "Curve Bikini Tops",
                  priority: 0,
                  opt_id: 7191,
                  seo_link_url:
                    "/curve-bikini--o3-7191.html?opt_level=2&title=Curve%20Bikini%20Tops&_x_enter_scene_type=cate_tab&leaf_type=bro&show_search_type=3",
                  tab_type: 0,
                  p_rec: {
                    offset: "0",
                    list_id: "i1hd0b",
                    g: "0",
                    scene_id: "42",
                    opt_id: "7191",
                    ts_req: "0",
                    version: "5",
                    search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                    scene: "sub_all_opt_list",
                    gin_fallback: "0",
                    opt_hash_id: "1969653689",
                    opt_type: "2",
                    goods_source: "rec",
                    idx: "14",
                    region: "211",
                    no_result: "0",
                    cloud_env: "udpm1",
                    ts: "1762093691053",
                  },
                  parent_id: 7166,
                  link_url:
                    "/category.html?opt_id=7191&opt_level=2&title=Curve%20Bikini%20Tops&_x_enter_scene_type=cate_tab&show_search_type=3&leaf_type=bro",
                  opt_type: 2,
                  is_featured: false,
                },
              ],
              tab_type: 0,
              p_rec: {
                offset: "0",
                list_id: "i1hd0b",
                g: "0",
                scene_id: "42",
                opt_id: "0",
                ts_req: "0",
                version: "5",
                search_id: "mTDJteEL-q4COa_PNNFoRD6vD7TIHNMoSjcaGsN0xlA=",
                scene: "sub_all_opt_list",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "0",
                region: "211",
                no_result: "0",
                cloud_env: "udpm1",
                ts: "1762093691053",
              },
              disable_dup: false,
              pattern: 0,
              opt_type: 0,
              opt_name: "Shop by category",
              priority: 0,
              opt_id: 0,
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
      const parentCategory = categoryRepository.create({
        name: parent.opt_name,
        oringImageURL: parent.child_images[0] || "",
        parent_id: "5f0933c8-472b-4c20-bf2d-7f965cecad0f",
        status: BaseStatus.ACTIVE,
      });
      await categoryRepository.save(parentCategory);

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
            const created = await categoryRepository.save(subCategory);
            console.log(created);
          }
        }
      }
    }
    console.log("Added category completed");
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

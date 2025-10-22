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
        select: ["category_ids"],
      });
      if (product?.category_ids?.length) {
        queryBuilder.andWhere("product.category_ids::jsonb @> :category_ids", {
          category_ids: JSON.stringify(product.category_ids),
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
    } else if (where?.discount) {
      queryBuilder.andWhere("product.discount > 0");
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

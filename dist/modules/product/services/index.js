"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const config_1 = require("../../../config");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const baseType_1 = require("../../../utils/base/baseType");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const category_1 = require("../../category");
const graphqlUtils_1 = require("../../../utils/graphqlUtils");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const staff_1 = require("../../staff");
const banner_1 = require("../../banner");
const branding_1 = require("../../branding");
const axios_1 = __importDefault(require("axios"));
class ProductService {
    static createLoopCategoryAndProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            var _b;
            const baseCategoryUrl = "https://dhlshopping.com/api/customer/index/get-all-category";
            const categoryDetailsUrl = (id, page, pagesize) => `https://dhlshopping.com/api/category/${id}/shop?page=${page}&pagesize=${pagesize}&sort=new&brand=&min_price=1&max_price=99990`;
            const productDetailsUrl = (id) => `https://dhlshopping.com/api/product/${id}/a`;
            const cdnUrl = "https://227_cdn.pionexprocoin.cc";
            const fetchJson = (url, options) => __awaiter(this, void 0, void 0, function* () {
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
                    const response = yield (0, axios_1.default)(config);
                    console.log("Status:", response.status);
                    console.log("Headers:", response.headers);
                    console.log("Body:", response.data);
                    return response.data;
                }
                catch (error) {
                    console.error("❌ Real error:", error);
                }
            });
            const staffLogin = yield staff_1.StaffService.staffLogin({
                where: { username: "admin", password: "12345678" },
            });
            let token = "";
            if (staffLogin === null || staffLogin === void 0 ? void 0 : staffLogin.success) {
                token = (_b = staffLogin.data) === null || _b === void 0 ? void 0 : _b.token;
            }
            const mapCategoryData = (category_2, ...args_1) => __awaiter(this, [category_2, ...args_1], void 0, function* (category, parentId = null) {
                var _b, _c;
                const _url = ((_b = category.image) === null || _b === void 0 ? void 0 : _b.includes("https"))
                    ? category.image
                    : `${cdnUrl}${category.image}`;
                const imageUrl = yield this.uploadImage(`${_url}`);
                return {
                    image: imageUrl,
                    name: {
                        name_en: ((_c = category === null || category === void 0 ? void 0 : category.name) === null || _c === void 0 ? void 0 : _c.name_en) || "",
                    },
                    parent_id: parentId,
                    origin_id: category === null || category === void 0 ? void 0 : category.id,
                };
            });
            const mapProductData = (product, categoryId) => __awaiter(this, void 0, void 0, function* () {
                var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
                const _url = ((_d = (_c = (_b = product === null || product === void 0 ? void 0 : product.image) === null || _b === void 0 ? void 0 : _b.main) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.includes("https"))
                    ? (_f = (_e = product === null || product === void 0 ? void 0 : product.image) === null || _e === void 0 ? void 0 : _e.main) === null || _f === void 0 ? void 0 : _f.image
                    : `${cdnUrl}${(_h = (_g = product === null || product === void 0 ? void 0 : product.image) === null || _g === void 0 ? void 0 : _g.main) === null || _h === void 0 ? void 0 : _h.image}`;
                const imageUrl = yield this.uploadImage(`${_url}`);
                let allProductImages = [];
                if ((_k = (_j = product === null || product === void 0 ? void 0 : product.image) === null || _j === void 0 ? void 0 : _j.gallery) === null || _k === void 0 ? void 0 : _k.length) {
                    for (const image of (_l = product === null || product === void 0 ? void 0 : product.image) === null || _l === void 0 ? void 0 : _l.gallery) {
                        const _url = ((_m = image === null || image === void 0 ? void 0 : image.image) === null || _m === void 0 ? void 0 : _m.includes("https"))
                            ? image === null || image === void 0 ? void 0 : image.image
                            : `${cdnUrl}${image === null || image === void 0 ? void 0 : image.image}`;
                        const _imageUrl = yield this.uploadImage(`${_url}`);
                        allProductImages.push(_imageUrl);
                    }
                }
                return {
                    name: {
                        name_en: ((_o = product === null || product === void 0 ? void 0 : product.name) === null || _o === void 0 ? void 0 : _o.name_en) || "",
                    },
                    description: {
                        name_en: ((_p = product === null || product === void 0 ? void 0 : product.description) === null || _p === void 0 ? void 0 : _p.description_en) || "",
                    },
                    cover_image: `${imageUrl}`,
                    images: allProductImages,
                    category_id: categoryId,
                    total_star: parseFloat(product === null || product === void 0 ? void 0 : product.score) || 5.0,
                    price: parseFloat(product === null || product === void 0 ? void 0 : product.price) || 34.99,
                    quantity: parseFloat(product === null || product === void 0 ? void 0 : product.qty) || 2837,
                    origin_id: (product === null || product === void 0 ? void 0 : product.product_id) || (product === null || product === void 0 ? void 0 : product.id),
                };
            });
            const req = {};
            req.headers = {};
            req.headers.authorization = token;
            const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            let categoryCount = 0;
            let productCount = 0;
            const processCategory = (category_2, ...args_1) => __awaiter(this, [category_2, ...args_1], void 0, function* (category, parentId = null) {
                var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
                const categoryRepository = (0, typeorm_1.getRepository)(category_1.Category);
                const existingCategory = yield categoryRepository.findOne({
                    where: { origin_id: category === null || category === void 0 ? void 0 : category.id },
                });
                console.log({ existingCategory });
                let categoryId = (existingCategory && (existingCategory === null || existingCategory === void 0 ? void 0 : existingCategory.id)) || "";
                if (!existingCategory) {
                    const categoryData = yield mapCategoryData(category, parentId);
                    let parentCategory = yield category_1.CategoryService.createCategory({
                        data: categoryData,
                        req,
                    });
                    categoryId = (_b = parentCategory === null || parentCategory === void 0 ? void 0 : parentCategory.data) === null || _b === void 0 ? void 0 : _b.id;
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
                        const categoryProducts = yield fetchJson(categoryDetailsUrl(category === null || category === void 0 ? void 0 : category.id, page, pagesize), { method: "GET", redirect: "follow" });
                        console.log("start to fetch categoryProducts=====2::", {
                            categoryProducts,
                            page,
                        });
                        if (categoryProducts.code === 200 &&
                            ((_d = (_c = categoryProducts === null || categoryProducts === void 0 ? void 0 : categoryProducts.data) === null || _c === void 0 ? void 0 : _c.list) === null || _d === void 0 ? void 0 : _d.length) > 0) {
                            for (const product of categoryProducts.data.list) {
                                try {
                                    const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
                                    const brandingRepository = (0, typeorm_1.getRepository)(branding_1.Branding);
                                    console.log("aaa:::", product.id);
                                    const productDetails = yield fetchJson(productDetailsUrl(product.id), { method: "GET", redirect: "follow" });
                                    console.log({
                                        productId: productDetails === null || productDetails === void 0 ? void 0 : productDetails.data,
                                    });
                                    const existingProduct = yield productRepository
                                        .createQueryBuilder("product")
                                        .where("product.origin_id = :origin_id", {
                                        origin_id: product === null || product === void 0 ? void 0 : product.id,
                                    })
                                        .orWhere("product.origin_id = :productId", {
                                        productId: (_f = (_e = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _e === void 0 ? void 0 : _e.product) === null || _f === void 0 ? void 0 : _f.product_id,
                                    })
                                        .orWhere("product.name ->>'name_en' = :productName", {
                                        productName: (_j = (_h = (_g = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _g === void 0 ? void 0 : _g.product) === null || _h === void 0 ? void 0 : _h.name) === null || _j === void 0 ? void 0 : _j.name_en,
                                    })
                                        .getOne();
                                    let existingBranding = yield brandingRepository
                                        .createQueryBuilder("brand")
                                        .where("brand.name ->>'name_en' = :productName", {
                                        productName: (_m = (_l = (_k = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _k === void 0 ? void 0 : _k.brand) === null || _l === void 0 ? void 0 : _l.name) === null || _m === void 0 ? void 0 : _m.name_en,
                                    })
                                        .getOne();
                                    if (!existingBranding) {
                                        const _url = ((_q = (_p = (_o = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _o === void 0 ? void 0 : _o.brand) === null || _p === void 0 ? void 0 : _p.logo) === null || _q === void 0 ? void 0 : _q.includes("https"))
                                            ? (_s = (_r = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _r === void 0 ? void 0 : _r.brand) === null || _s === void 0 ? void 0 : _s.logo
                                            : `${cdnUrl}${(_u = (_t = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _t === void 0 ? void 0 : _t.brand) === null || _u === void 0 ? void 0 : _u.logo}`;
                                        const imageUrl = ((_w = (_v = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _v === void 0 ? void 0 : _v.brand) === null || _w === void 0 ? void 0 : _w.logo) == ""
                                            ? null
                                            : yield this.uploadImage(`${_url}`);
                                        const brandingData = {
                                            name: {
                                                name_en: (_z = (_y = (_x = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _x === void 0 ? void 0 : _x.brand) === null || _y === void 0 ? void 0 : _y.name) === null || _z === void 0 ? void 0 : _z.name_en,
                                            },
                                            image: imageUrl,
                                        };
                                        const _result = yield branding_1.BrandingService.createBranding({
                                            data: brandingData,
                                            req,
                                        });
                                        console.log({ _result });
                                        if ((_0 = _result === null || _result === void 0 ? void 0 : _result.data) === null || _0 === void 0 ? void 0 : _0.id) {
                                            existingBranding = Object.assign(Object.assign({}, _result === null || _result === void 0 ? void 0 : _result.data), { id: (_1 = _result === null || _result === void 0 ? void 0 : _result.data) === null || _1 === void 0 ? void 0 : _1.id });
                                        }
                                    }
                                    console.log("===::existingBranding::", { existingBranding });
                                    if (!existingProduct) {
                                        const productData = yield mapProductData((_2 = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _2 === void 0 ? void 0 : _2.product, categoryId);
                                        console.log({ productData });
                                        const createProduct = yield _a.createProduct({
                                            data: Object.assign(Object.assign({}, productData), { brand_id: existingBranding === null || existingBranding === void 0 ? void 0 : existingBranding.id }),
                                            req,
                                        });
                                        productCount++;
                                        console.log("createProduct::", { productCount });
                                        console.log("Created product:", createProduct);
                                        // Delay for 1 second before proceeding to the next product
                                        yield delay(60);
                                    }
                                    else {
                                        console.log("::888::", { existingProduct, existingCategory });
                                        const product = yield _a.updateProduct({
                                            data: {
                                                id: existingProduct === null || existingProduct === void 0 ? void 0 : existingProduct.id,
                                                category_id: existingCategory === null || existingCategory === void 0 ? void 0 : existingCategory.id,
                                            },
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
                                }
                                catch (productError) {
                                    console.error("Error creating product:", productError);
                                }
                            }
                        }
                        else {
                            continues = false;
                            productCount = 0;
                        }
                    }
                    catch (categoryError) {
                        console.error("Error fetching category products:", categoryError);
                        continues = false;
                        productCount = 0;
                    }
                    page++;
                }
                if (((_3 = category === null || category === void 0 ? void 0 : category.child) === null || _3 === void 0 ? void 0 : _3.length) > 0) {
                    for (const childCategory of category.child) {
                        yield processCategory(childCategory, categoryId);
                    }
                }
            });
            try {
                const categories = yield fetchJson(baseCategoryUrl, {
                    method: "POST",
                    redirect: "follow",
                });
                if (categories.code !== 200 || !(categories === null || categories === void 0 ? void 0 : categories.data)) {
                    console.error("Unexpected response for categories:", categories);
                    return;
                }
                for (const category of categories.data) {
                    console.log({ category });
                    yield processCategory(category);
                }
                console.log("All categories and products processed successfully.");
            }
            catch (error) {
                console.error("Error processing categories and products:", error);
            }
        });
    }
    static createBanner() {
        return __awaiter(this, void 0, void 0, function* () {
            var _b;
            try {
                const staffLogin = yield staff_1.StaffService.staffLogin({
                    where: { username: "admin", password: "12345678" },
                });
                let token = "";
                if (staffLogin === null || staffLogin === void 0 ? void 0 : staffLogin.success) {
                    token = (_b = staffLogin.data) === null || _b === void 0 ? void 0 : _b.token;
                }
                const req = {};
                req.headers = {};
                req.headers.authorization = token;
                const fetchJson = (url, options) => __awaiter(this, void 0, void 0, function* () {
                    const response = yield fetch(url, options);
                    return response.json();
                });
                const banners = yield fetchJson("https://dhlshopping.com/api/customer/index/store?type=advert", 
                // "https://dhlshopping.com/api/customer/index/store?type=banners",
                // "https://dhlshopping.com/api/customer/index/store?type=banners",
                {
                    method: "GET",
                    redirect: "follow",
                });
                let count = 7;
                for (const banner of banners.data) {
                    console.log({ count });
                    const url = "https://227_cdn.pionexprocoin.cc/" + (banner === null || banner === void 0 ? void 0 : banner.icon);
                    const imageUrl = yield this.uploadImage(url);
                    const data = {
                        name: "Banner " + count,
                        image: imageUrl,
                        position: (banner === null || banner === void 0 ? void 0 : banner.position) == "top"
                            ? "2"
                            : (banner === null || banner === void 0 ? void 0 : banner.position) == "center"
                                ? "3"
                                : (banner === null || banner === void 0 ? void 0 : banner.position) == "center_top"
                                    ? "4"
                                    : (banner === null || banner === void 0 ? void 0 : banner.position) == "bottom"
                                        ? "5"
                                        : "1",
                    };
                    yield banner_1.BannerService.createBanner({ data, req });
                    count++;
                }
            }
            catch (error) {
                console.log({ error });
            }
        });
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
    static createProductWithoutImage() {
        return __awaiter(this, void 0, void 0, function* () {
            var _b, _c, _d, _e, _f, _g, _h, _j, _k;
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
            const uploadImage = (imageUrl) => __awaiter(this, void 0, void 0, function* () {
                // Randomly select a key from the cloudinaryKeys array
                const randomKey = cloudinaryKeys[Math.floor(Math.random() * cloudinaryKeys.length)];
                const CLOUDINARY_URL = randomKey.url;
                const UPLOAD_PRESET = randomKey.preset;
                const _formData = new FormData();
                _formData.append("file", `${imageUrl}`);
                _formData.append("upload_preset", UPLOAD_PRESET);
                try {
                    const response = yield fetch(CLOUDINARY_URL, {
                        method: "POST",
                        body: _formData,
                    });
                    const data = yield response.json();
                    if (data.secure_url) {
                        return data.secure_url;
                    }
                    return null;
                }
                catch (error) {
                    console.error("Error uploading image:", error);
                }
            });
            const productDetailsUrl = (id) => `https://dhlshopping.com/api/product/${id}/a`;
            const fetchJson = (url, options) => __awaiter(this, void 0, void 0, function* () {
                const response = yield fetch(url, options);
                return response.json();
            });
            const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
            const products = yield productRepository
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
            if (products === null || products === void 0 ? void 0 : products.length) {
                for (const product of products) {
                    const productDetails = yield fetchJson(productDetailsUrl(product.origin_id), {
                        method: "GET",
                        redirect: "follow",
                    });
                    console.log({ productDetails: (_b = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _b === void 0 ? void 0 : _b.product.image });
                    const imageUrl = yield uploadImage(`${(_e = (_d = (_c = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _c === void 0 ? void 0 : _c.product.image) === null || _d === void 0 ? void 0 : _d.main) === null || _e === void 0 ? void 0 : _e.image}`);
                    let allProductImages = [];
                    if ((_h = (_g = (_f = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _f === void 0 ? void 0 : _f.product.image) === null || _g === void 0 ? void 0 : _g.gallery) === null || _h === void 0 ? void 0 : _h.length) {
                        for (const image of (_k = (_j = productDetails === null || productDetails === void 0 ? void 0 : productDetails.data) === null || _j === void 0 ? void 0 : _j.product.image) === null || _k === void 0 ? void 0 : _k.gallery) {
                            const _imageUrl = yield uploadImage(`${image === null || image === void 0 ? void 0 : image.image}`);
                            allProductImages.push(_imageUrl);
                        }
                    }
                    console.log({ imageUrl, allProductImages });
                    yield productRepository
                        .createQueryBuilder()
                        .update(entity_1.Product) // Specify the entity
                        .set({ cover_image: imageUrl, images: allProductImages }) // Set new values
                        .where("id = :productId", { productId: product === null || product === void 0 ? void 0 : product.id }) // Condition
                        .execute(); // Execute the query
                }
            }
        });
    }
    static createProduct(_b) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            var _c;
            try {
                const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                if (!((_c = data === null || data === void 0 ? void 0 : data.name) === null || _c === void 0 ? void 0 : _c.name_en) || !(data === null || data === void 0 ? void 0 : data.cover_image)) {
                    return (0, error_handler_1.handleError)("Validation Error: Missing required fields", 400, null);
                }
                const categoryIds = (data === null || data === void 0 ? void 0 : data.category_id)
                    ? yield this.findCategoryParents(data.category_id)
                    : [];
                const newProduct = productRepository.create(Object.assign(Object.assign({}, data), { category_ids: categoryIds, status: data.status || baseType_1.BaseStatus.ACTIVE, created_by: staffDataFromToken.id }));
                const savedProduct = yield productRepository.save(newProduct);
                return (0, success_handler_1.handleSuccess)(savedProduct);
            }
            catch (error) {
                console.log("Error while create product::", error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateProduct(_b) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            try {
                const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const product = yield productRepository.findOneById(data.id);
                if (!product)
                    return (0, error_handler_1.handleError)("Product not found", 404, null);
                const categoryIds = (data === null || data === void 0 ? void 0 : data.category_id)
                    ? yield this.findCategoryParents(data.category_id)
                    : [];
                productRepository.merge(product, Object.assign(Object.assign({}, data), { category_ids: categoryIds, updated_by: staffDataFromToken.id }));
                const updatedProduct = yield productRepository.save(product);
                return (0, success_handler_1.handleSuccess)(updatedProduct);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static deleteProduct(_b) {
        return __awaiter(this, arguments, void 0, function* ({ id, req }) {
            try {
                const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const product = yield productRepository.findOneById(id);
                if (!product)
                    return (0, error_handler_1.handleError)("Product not found", 404, null);
                productRepository.merge(product, {
                    status: baseType_1.BaseStatus.INACTIVE,
                    is_active: false,
                });
                yield productRepository.save(product);
                // await productRepository.remove(product);
                return (0, success_handler_1.handleSuccess)(null);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getProducts(_b, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ req, where, page, limit, sortedBy, }, info) {
            return this.buildProductQuery({ req, where, page, limit, sortedBy }, info, false);
        });
    }
    static adminGetProducts(_b, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ req, where, page, limit, sortedBy, }, info) {
            return this.buildProductQuery({ req, where, page, limit, sortedBy }, info, true);
        });
    }
    static getBestSellingProducts(_b, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ req, where, page, limit, sortedBy, }, info) {
            const queryBuilder = this.buildBaseQuery({ req, where, page, limit, sortedBy }, info);
            // queryBuilder.orderBy({ sell_count: "DESC" });
            return this.executeQuery(queryBuilder, info);
        });
    }
    static getSimilarProducts(_b, info_1) {
        return __awaiter(this, arguments, void 0, function* ({ req, where, page, limit, }, info) {
            var _c;
            const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
            const queryBuilder = this.buildBaseQuery({ req, where, page, limit, sortedBy: baseType_1.BaseOrderByInput.created_at_DESC }, info);
            if (where === null || where === void 0 ? void 0 : where.product_id) {
                const product = yield productRepository.findOne({
                    where: { id: where.product_id },
                    select: ["category_ids", "brand_id"],
                });
                if ((_c = product === null || product === void 0 ? void 0 : product.category_ids) === null || _c === void 0 ? void 0 : _c.length) {
                    queryBuilder.andWhere("product.category_ids::jsonb @> :category_ids", {
                        category_ids: JSON.stringify(product.category_ids),
                    });
                }
                if (product === null || product === void 0 ? void 0 : product.brand_id) {
                    queryBuilder.orWhere("product.brand_id = :brand_id", {
                        brand_id: product.brand_id,
                    });
                }
            }
            queryBuilder.addOrderBy("RANDOM()").take(limit);
            return this.executeQuery(queryBuilder, info);
        });
    }
    static searchProducts(_b) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, }) {
            const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
            const queryBuilder = productRepository.createQueryBuilder("product");
            if (where === null || where === void 0 ? void 0 : where.keyword) {
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
                .orderBy(this.order(sortedBy));
            const [products, total] = yield queryBuilder.getManyAndCount();
            return (0, success_handler_1.handleSuccessWithTotalData)(products, total);
        });
    }
    static getProduct(_b) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            var _c;
            try {
                const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
                const categoryRepository = (0, typeorm_1.getRepository)(category_1.Category);
                const product = yield productRepository.findOne({
                    where: { id, is_active: true },
                });
                if (!product)
                    return (0, error_handler_1.handleError)("Product not found", 404, null);
                if ((_c = product === null || product === void 0 ? void 0 : product.category_ids) === null || _c === void 0 ? void 0 : _c.length) {
                    const categories = yield categoryRepository.findByIds(product.category_ids);
                    product.categories = product.category_ids.map((id) => categories.find((category) => category.id === id));
                }
                return (0, success_handler_1.handleSuccess)(product);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static buildProductQuery({ req, where, page, limit, sortedBy, }, info, isAdmin) {
        const queryBuilder = this.buildBaseQuery({ req, where, page, limit, sortedBy }, info, isAdmin);
        if (isAdmin) {
            queryBuilder
                .leftJoinAndSelect("product.categoryData", "category")
                .leftJoinAndSelect("product.brandData", "brand");
        }
        return this.executeQuery(queryBuilder, info);
    }
    static buildBaseQuery({ req, where, page, limit, sortedBy, }, info, isAdmin = false) {
        var _b, _c, _d;
        const productRepository = (0, typeorm_1.getRepository)(entity_1.Product);
        const queryBuilder = productRepository
            .createQueryBuilder("product")
            .where("product.is_active = :isActive", { isActive: true });
        const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getProducts.data");
        if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
            const fields = selectFields
                .filter((field) => field !== "shopProductStatus")
                .map((field) => `product.${field}`);
            queryBuilder.select(fields);
        }
        if (!isAdmin) {
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id) {
                    queryBuilder.leftJoinAndSelect("product.shopProducts", "shopProduct", "shopProduct.shop_id = :shopId", { shopId: shopDataFromToken.id });
                }
            }
            catch (error) { }
        }
        if (where === null || where === void 0 ? void 0 : where.keyword) {
            queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                qb.where("product.name ->> 'name_en' ILIKE :keyword", {
                    keyword: `%${where.keyword}%`,
                }).orWhere("product.description ->> 'name_en' ILIKE :keyword", {
                    keyword: `%${where.keyword}%`,
                });
            }));
        }
        if (where === null || where === void 0 ? void 0 : where.status)
            queryBuilder.andWhere("product.status = :status", {
                status: where.status,
            });
        if (where === null || where === void 0 ? void 0 : where.category_id)
            queryBuilder.andWhere("product.category_ids::jsonb @> :category_id", {
                category_id: JSON.stringify([where.category_id]),
            });
        if ((_b = where === null || where === void 0 ? void 0 : where.category_ids) === null || _b === void 0 ? void 0 : _b.length)
            queryBuilder.andWhere("product.category_ids::jsonb ?| array[:...category_ids]", {
                category_ids: where.category_ids,
            });
        if (where === null || where === void 0 ? void 0 : where.brand_id)
            queryBuilder.andWhere("product.brand_id = :brand_id", {
                brand_id: where.brand_id,
            });
        if (where === null || where === void 0 ? void 0 : where.product_top)
            queryBuilder.andWhere("product.product_top = :product_top", {
                product_top: where.product_top,
            });
        if ((where === null || where === void 0 ? void 0 : where.product_vip) || (where === null || where === void 0 ? void 0 : where.product_vip) === 0)
            queryBuilder.andWhere("product.product_vip = :product_vip", {
                product_vip: where.product_vip,
            });
        if (where === null || where === void 0 ? void 0 : where.price_between) {
            queryBuilder
                .andWhere("product.price >= :minPrice", {
                minPrice: where.price_between[0],
            })
                .andWhere("product.price <= :maxPrice", {
                maxPrice: where.price_between[1],
            });
        }
        if ((where === null || where === void 0 ? void 0 : where.quantity) !== undefined) {
            queryBuilder.andWhere(`product.quantity ${where.quantity > 0 ? ">=" : "<="} :quantity`, { quantity: where.quantity > 0 ? 1 : 0 });
        }
        if (((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.startDate) &&
            ((_d = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _d === void 0 ? void 0 : _d.endDate)) {
            queryBuilder.andWhere("DATE(product.created_at) BETWEEN :startDate AND :endDate", {
                startDate: where.createdAtBetween.startDate,
                endDate: where.createdAtBetween.endDate,
            });
        }
        // within 30 day, 15 day, 7 day
        if (where === null || where === void 0 ? void 0 : where.within) {
            const days = where.within;
            const fromDate = new Date();
            fromDate.setDate(fromDate.getDate() - days);
            queryBuilder.andWhere("product.created_at >= :fromDate", { fromDate });
        }
        // 5 Star rate
        if (where === null || where === void 0 ? void 0 : where.star_top) {
            queryBuilder.andWhere("product.total_star >= 4");
            queryBuilder.orderBy("RANDOM()");
        }
        else if ((where === null || where === void 0 ? void 0 : where.discount) && (where === null || where === void 0 ? void 0 : where.discount) > 0) {
            queryBuilder.andWhere("product.discount >= :discount", {
                discount: where.discount,
            });
            queryBuilder.orderBy("RANDOM()");
        }
        else if (where === null || where === void 0 ? void 0 : where.offer) {
            queryBuilder.andWhere("product.discount >0");
            queryBuilder.orderBy("RANDOM()");
        }
        else {
            queryBuilder.orderBy(this.order(sortedBy, where === null || where === void 0 ? void 0 : where.price_between));
        }
        queryBuilder.skip((page - 1) * limit).take(limit);
        return queryBuilder;
    }
    static executeQuery(queryBuilder, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "getProducts.data");
            if ((selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) <= 0) {
                const total = yield queryBuilder.getCount();
                return (0, success_handler_1.handleSuccessWithTotalData)([], total);
            }
            const [products, total] = yield queryBuilder.getManyAndCount();
            products.forEach((product) => {
                var _b, _c;
                product.shopProductStatus =
                    ((_c = (_b = product.shopProducts) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.shopProductStatus) || null;
            });
            return (0, success_handler_1.handleSuccessWithTotalData)(products, total);
        });
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
    static order(sortedBy, price = [0]) {
        switch (sortedBy) {
            case baseType_1.BaseOrderByInput.created_at_ASC:
                return { "product.created_at": "ASC" };
            case baseType_1.BaseOrderByInput.created_at_DESC:
                return { "product.created_at": "DESC" };
            case baseType_1.BaseOrderByInput.updated_at_ASC:
                return { "product.updated_at": "ASC" };
            case baseType_1.BaseOrderByInput.updated_at_DESC:
                return { "product.updated_at": "DESC" };
            case baseType_1.BaseOrderByInput.sell_count_ASC:
                return { "product.sell_count": "ASC" };
            case baseType_1.BaseOrderByInput.sell_count_DESC:
                return { "product.sell_count": "DESC" };
            case baseType_1.BaseOrderByInput.price_ASC:
                return { "product.price": "ASC" };
            case baseType_1.BaseOrderByInput.price_DESC:
                return { "product.price": "DESC" };
            default:
                return { "product.created_at": "DESC" };
        }
    }
    static findCategoryParents(categoryId_1) {
        return __awaiter(this, arguments, void 0, function* (categoryId, categoryIds = []) {
            try {
                const categoryRepository = (0, typeorm_1.getRepository)(category_1.Category);
                const category = yield categoryRepository.findOne({
                    where: { id: categoryId },
                });
                if (category) {
                    categoryIds.push(category.id);
                    if (category.parent_id)
                        yield this.findCategoryParents(category.parent_id, categoryIds);
                }
                return categoryIds;
            }
            catch (error) {
                console.error("Error finding parent categories:", error);
                return categoryIds;
            }
        });
    }
}
exports.ProductService = ProductService;
_a = ProductService;
// User only clone data from dhlshopping api
ProductService.uploadImage = (imageUrl) => __awaiter(void 0, void 0, void 0, function* () {
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
    const randomKey = cloudinaryKeys[Math.floor(Math.random() * cloudinaryKeys.length)];
    const CLOUDINARY_URL = randomKey.url;
    const UPLOAD_PRESET = randomKey.preset;
    const _formData = new FormData();
    _formData.append("file", `${imageUrl}`);
    _formData.append("upload_preset", UPLOAD_PRESET);
    try {
        const response = yield fetch(CLOUDINARY_URL, {
            method: "POST",
            body: _formData,
        });
        const data = yield response.json();
        if (data.secure_url) {
            return data.secure_url;
        }
        return null;
    }
    catch (error) {
        console.error("Error uploading image:", error);
    }
});

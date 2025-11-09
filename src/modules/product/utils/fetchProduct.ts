import { DeepPartial, getRepository } from "typeorm";
import { Product } from "../entity";
import { Category } from "../../category";
import { ProductTag } from "../../productTag";
import { Branding } from "../../branding";

export const fetchProducts = async () => {
  const data = {
    result: {
      server_time: 1762536754874,
      data: {
        popup_map: {},
        control_param: {
          preload_size: 24,
          page_size: 40,
        },
        total_price: {
          total_price_text: ["Add ", "0", " item to cart", ": ", "", "$", "0"],
          price: 0,
          price_text: ["Add ", "0", " item to cart", ": ", "", "$", "0"],
        },
        call_opt: 0,
        pattern: 0,
        filter_region: {
          p_search: {
            offset: "40",
            list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
            item_type: "0",
            g: "0",
            scene_id: "3",
            mid: "69999906",
            opt_id: "2641",
            ts_req: "0",
            version: "5",
            search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
            scene: "opt",
            gin_fallback: "0",
            opt_type: "0",
            goods_source: "search",
            idx: "-1",
            region: "211",
            no_result: "0",
            bid: "69999705",
            cloud_env: "udpm1",
            ts: "1762536754875",
          },
          outer_filter: [
            {
              identifier: "100",
              side_name: "Sort by",
              filter_list: [
                {
                  filter: "0:1",
                  name: "Relevance",
                },
                {
                  filter: "1:1",
                  name: "Top sales",
                },
                {
                  filter: "3:1",
                  name: "Most recent",
                },
                {
                  filter: "2:0",
                  name: "Price low to high",
                },
                {
                  filter: "2:1",
                  name: "Price high to low",
                },
              ],
              view_more: 7,
              name: "Sort by",
            },
          ],
          rank_colum_filter: [
            {
              name: "Relevance",
              p_search: {
                offset: "40",
                list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
                item_type: "0",
                g: "0",
                scene_id: "3",
                mid: "69999906",
                opt_id: "2641",
                ts_req: "0",
                version: "5",
                search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
                scene: "opt",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "search",
                idx: "0",
                region: "211",
                no_result: "0",
                bid: "69999705",
                cloud_env: "udpm1",
                ts: "1762536754875",
              },
              id: 0,
              sort: [1],
            },
            {
              name: "Top sales",
              p_search: {
                offset: "40",
                list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
                item_type: "0",
                g: "0",
                scene_id: "3",
                mid: "69999906",
                opt_id: "2641",
                ts_req: "0",
                version: "5",
                search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
                scene: "opt",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "search",
                idx: "1",
                region: "211",
                no_result: "0",
                bid: "69999705",
                cloud_env: "udpm1",
                ts: "1762536754875",
              },
              id: 1,
              sort: [1],
            },
            {
              name: "Most recent",
              p_search: {
                offset: "40",
                list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
                item_type: "0",
                g: "0",
                scene_id: "3",
                mid: "69999906",
                opt_id: "2641",
                ts_req: "0",
                version: "5",
                search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
                scene: "opt",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "search",
                idx: "2",
                region: "211",
                no_result: "0",
                bid: "69999705",
                cloud_env: "udpm1",
                ts: "1762536754875",
              },
              id: 3,
              sort: [1],
            },
            {
              name: "Price low to high",
              p_search: {
                offset: "40",
                list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
                item_type: "0",
                g: "0",
                scene_id: "3",
                mid: "69999906",
                opt_id: "2641",
                ts_req: "0",
                version: "5",
                search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
                scene: "opt",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "search",
                idx: "3",
                region: "211",
                no_result: "0",
                bid: "69999705",
                cloud_env: "udpm1",
                ts: "1762536754875",
              },
              id: 2,
              sort: [0],
            },
            {
              name: "Price high to low",
              p_search: {
                offset: "40",
                list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
                item_type: "0",
                g: "0",
                scene_id: "3",
                mid: "69999906",
                opt_id: "2641",
                ts_req: "0",
                version: "5",
                search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
                scene: "opt",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "search",
                idx: "4",
                region: "211",
                no_result: "0",
                bid: "69999705",
                cloud_env: "udpm1",
                ts: "1762536754875",
              },
              id: 2,
              sort: [1],
            },
          ],
        },
        quick_look: {
          icon_url:
            "https://aimg.kwcdn.com/upload_aimg/transaction/6dbc3f74-d7eb-463e-8397-cc1101ecba8e.png.slim.png",
          act_border_color: "#222222",
          back_rgb: "rgba(255,255,255,0.80)",
          border_color: "#CDCDCD",
          text: {
            color: "#000000",
            text: "Quick look",
          },
          open: true,
        },
        title: "Cell Phones",
        default_row_cnt: 0,
        opt_list: [
          {
            tab_type: 0,
            image_url:
              "https://img.kwcdn.com/product/1e133b3590a/6237ca8d-0913-4f73-87af-67539f2feecb_213x213.png",
            p_rec: {
              offset: "40",
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              g: "0",
              scene_id: "3",
              mid: "69999906",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              scene: "opt",
              gin_fallback: "0",
              opt_hash_id: "65790324",
              opt_type: "2",
              goods_source: "rec",
              idx: "-1",
              region: "211",
              no_result: "0",
              bid: "69999705",
              cloud_env: "udpm1",
              ts: "1762536754883",
            },
            disable_dup: false,
            pattern: 0,
            opt_type: 2,
            opt_name: "Cell Phones",
            priority: 0,
            opt_id: 2641,
            is_featured: false,
          },
        ],
        goods_list: [
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20ef5f4770/1425dc9c-6b7b-4d26-86e2-e97f45db7dd4_1500x1500.jpeg.format.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "-7%",
            },
            item_type: 0,
            page_alt: "    16 128gb pink fully unlocked  ",
            current_sku_id: 45804215631229,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "5 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 5 left",
                  tag_series: 2,
                },
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "1",
                    lowest_price_before_title: "Lowest ever",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price ever",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "3",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Good",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title: "Apple iPhone 16, 128GB, Pink - Fully Unlocked (Renewed)",
            sales_tip_text_list: ["14", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "2143774018",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXBUzgTg6ByGNSaBnl6+uZN4lqEempgRMiDqcbXf2Zzq5hJo1WqtZjRtdggSgpzqU14QeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "4441482444222583472",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "2143774018",
              g: "603227164612665",
              scene_id: "3",
              show_price: "62775",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "40",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "5147852494511843876",
              ts: "1762536754872",
            },
            mall_id: 741070851595181,
            sales_num: "14",
            link_url:
              "goods.html?_bg_fs=1&goods_id=603227164612665&_oak_mp_inf=ELmw9qaclIkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIqdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20ef5f4770%2F1425dc9c-6b7b-4d26-86e2-e97f45db7dd4_1500x1500.jpeg.format.jpg&spec_gallery_id=209623425932&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjI3NzU&_oak_gallery_order=2143774018",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "2143774018",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "5 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 5 left",
                tag_series: 2,
              },
              {
                color: "#555555",
                ext_map: {
                  lowest_tag_up_flag: "1",
                  lowest_price_before_title: "Lowest ever",
                },
                marketing_tag_type: 1000,
                tag_id: 91048,
                text: "Lowest price ever",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "3",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Good",
                tag_series: 2,
              },
            ],
            show_index: 40,
            price_info: {
              split_price_text: ["$", "627", ".75", ""],
              reduction_text: ["-7", "%"],
              price: 62775,
              market_price_str: "$675.00",
              market_price: 67500,
              price_schema: "627.75",
              currency: "USD",
              price_text: ["$", "627.75", ""],
              price_str: "$627.75",
              market_price_text: ["$", "675.00", ""],
            },
            image: {
              width: 1500,
              id: 209623425932,
              url_id: "4441482444222583472",
              url: "https://img.kwcdn.com/local-goods-image/20ef5f4770/1425dc9c-6b7b-4d26-86e2-e97f45db7dd4_1500x1500.jpeg.format.jpg",
              height: 1500,
            },
            sales_tip: "14 sold",
            visible: true,
            goods_id: 603227164612665,
            opt_id: 2661,
            seo_link_url:
              "/--16-128gb-pink-fully-unlocked--g-603227164612665.html?&_oak_mp_inf=ELmw9qaclIkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIqdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20ef5f4770%2F1425dc9c-6b7b-4d26-86e2-e97f45db7dd4_1500x1500.jpeg.format.jpg&spec_gallery_id=209623425932&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjI3NzU&_oak_gallery_order=2143774018",
            queryReleScore: 0.0,
            sales_tip_text: ["14", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 5.0,
              hidden_comment: true,
              comment_num_tips: "3",
            },
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/2066d9197e/d792f970-196f-4f3a-b4ef-d7a88afba919_1053x1053.png",
            ware_house_type: 1,
            benefit_text: {
              text: "-27%",
            },
            item_type: 0,
            page_alt:
              "   25 ultra 512gb unlocked     new factory sealed 5g smartphone 6 8   2x display 200  grade camera   processor   included   long lasting battery us model ships fast from usa",
            current_sku_id: 52065204235528,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"SAMSUNG","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: SAMSUNG",
                  tag_series: 2,
                  height: 39,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Samsung Galaxy S25 Ultra 512GB Unlocked Titanium Silver Blue – Brand New Factory Sealed 5G Smartphone | 6.8″ Dynamic AMOLED 2X Display | 200MP Pro-Grade Camera | Snapdragon 8 Gen 3 Processor | S Pen Included | Dual SIM | Long-Lasting Battery | US Model | Ships Fast from USA",
            sales_tip_text_list: ["1", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "153700779",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXD5gkIKjrpMZcFm5qVk02+iCaW/4f5NAxftoBFcbUk05gvmSOlYhjG/SzugJTf55QsQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "603550905364508555",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "153700779",
              g: "602896720571140",
              scene_id: "3",
              show_price: "105648",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "41",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "8997412680738734155",
              ts: "1762536754872",
            },
            mall_id: 741070851808039,
            sales_num: "1",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602896720571140&_oak_mp_inf=EITW9qbNiokBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIqdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d9197e%2Fd792f970-196f-4f3a-b4ef-d7a88afba919_1053x1053.png&spec_gallery_id=214542413818&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA1NjQ4&_oak_gallery_order=153700779%2C1640710451%2C1669375478%2C1689432017%2C1684571659",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "153700779,1640710451,1669375478,1689432017,1684571659",
              },
            },
            goods_tags: [],
            show_index: 41,
            price_info: {
              split_price_text: ["$", "1,056", ".48", ""],
              reduction_text: ["-27", "%"],
              price: 105648,
              market_price_str: "$1,452.20",
              market_price: 145220,
              price_schema: "1056.48",
              currency: "USD",
              price_text: ["$", "1,056.48", ""],
              price_str: "$1,056.48",
              market_price_text: ["$", "1,452.20", ""],
            },
            image: {
              width: 1053,
              id: 214542413818,
              url_id: "603550905364508555",
              url: "https://img.kwcdn.com/local-goods-image/2066d9197e/d792f970-196f-4f3a-b4ef-d7a88afba919_1053x1053.png",
              height: 1053,
            },
            sales_tip: "1 sold",
            visible: true,
            goods_id: 602896720571140,
            opt_id: 2661,
            seo_link_url:
              "/-25-ultra-512gb-unlocked---new-factory-sealed-5g-smartphone-6-8--2x-display-200-grade-camera--processor--included--long-lasting-battery-us-model-ships-fast-from-usa-g-602896720571140.html?&_oak_mp_inf=EITW9qbNiokBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIqdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d9197e%2Fd792f970-196f-4f3a-b4ef-d7a88afba919_1053x1053.png&spec_gallery_id=214542413818&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA1NjQ4&_oak_gallery_order=153700779%2C1640710451%2C1669375478%2C1689432017%2C1684571659",
            queryReleScore: 0.0,
            sales_tip_text: ["1", "sold"],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20150c2300b/f7435e29-03d8-4067-8fbd-496f329ac775_1080x1080.jpeg.format.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "-21%",
            },
            item_type: 0,
            page_alt: "    14 plus 128gb unlocked   condition  ",
            current_sku_id: 41060424238374,
            tags_info: {
              activity_icon_tags: [{}],
              title_header_tags: [
                {
                  ext_map: {
                    discount_promotion_tag:
                      '{"text_dx":0.0,"text_color":"#ffffff","width":73.0,"height":18.0,"bg_url":"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png"}',
                  },
                  marketing_tag_type: 2000,
                },
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Apple iPhone 14 Plus 128GB Unlocked Excellent Condition (Renewed)",
            sales_tip_text_list: ["43", "sold"],
            display_end_time_percent: 23,
            sold_quantity_percent: 17,
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "148542352",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXBE+VANdkVw/qRXDvxi3zIMuaCWebb8o5JbSZJf5MLouC7qrOacyPnhmLLIJ17SFIsQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "4230583635951695370",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "148542352",
              g: "602804546560156",
              scene_id: "3",
              show_price: "31926",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "42",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "7023175632638607847",
              ts: "1762536754872",
            },
            activity_type: 13,
            mall_id: 741070851663746,
            sales_num: "43",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602804546560156&_oak_mp_inf=EJzB9%2Fb1h4kBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIqdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c2300b%2Ff7435e29-03d8-4067-8fbd-496f329ac775_1080x1080.jpeg.format.jpg&spec_gallery_id=602804546560156&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzE5MjY&_oak_gallery_order=148542352%2C1672020671%2C947002900%2C1498524723%2C1005981546",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=602804546560156&_oak_mp_inf=EJzB9%2Fb1h4kBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIqdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c2300b%2Ff7435e29-03d8-4067-8fbd-496f329ac775_1080x1080.jpeg.format.jpg&spec_gallery_id=602804546560156&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzE5MjY&_oak_gallery_order=148542352%2C1672020671%2C947002900%2C1498524723%2C1005981546&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112644442565894300",
              sku_extra_param: {
                _oak_gallery_order:
                  "148542352,1672020671,947002900,1498524723,1005981546",
              },
            },
            goods_tags: [
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 42,
            price_info: {
              split_price_text: ["$", "319", ".26", ""],
              reduction_text: ["-21", "%"],
              price: 31926,
              market_price_str: "$407.00",
              market_price: 40700,
              price_schema: "319.26",
              currency: "USD",
              price_text: ["$", "319.26", ""],
              price_str: "$319.26",
              price_color: "#FB7701",
              reduction: 210,
              market_price_text: ["$", "407.00", ""],
            },
            image: {
              width: 375,
              id: 602804546560156,
              url_id: "4230583635951695370",
              url: "https://img.kwcdn.com/local-goods-image/20150c2300b/f7435e29-03d8-4067-8fbd-496f329ac775_1080x1080.jpeg.format.jpg",
              height: 375,
            },
            sales_tip: "43 sold",
            visible: true,
            goods_id: 602804546560156,
            opt_id: 2661,
            display_end_time: 1764403199,
            seo_link_url:
              "/--14-plus-128gb-unlocked--condition--g-602804546560156.html?&_oak_mp_inf=EJzB9%2Fb1h4kBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIqdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c2300b%2Ff7435e29-03d8-4067-8fbd-496f329ac775_1080x1080.jpeg.format.jpg&spec_gallery_id=602804546560156&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzE5MjY&_oak_gallery_order=148542352%2C1672020671%2C947002900%2C1498524723%2C1005981546",
            queryReleScore: 0.0,
            sales_tip_text: ["43", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.3,
              hidden_comment: true,
              comment_num_tips: "9",
            },
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/product/fancy/e1bd7ffa-2eb2-4139-9827-69d86da2cbed.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "-19%",
            },
            item_type: 0,
            page_alt:
              "6 8 inch smartphone 12gb   512gb storage 6800mah high capacity battery   stylus pen headphones type c charging cable the perfect festive gift for new year valentines day or easter smartphone for professionals travel smartphone",
            current_sku_id: 17612362838393,
            tags_info: {
              activity_icon_tags: [{}],
              title_header_tags: [
                {
                  ext_map: {
                    discount_promotion_tag:
                      '{"text_dx":0.0,"text_color":"#ffffff","width":73.0,"height":18.0,"bg_url":"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png"}',
                  },
                  marketing_tag_type: 2000,
                },
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#D9001B",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#D9001B","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Cell Phones","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"2641"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"2641"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Cell Phones",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/goods_details/3a667bf9-184a-4089-9631-4c4c3e6c0c27.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "Best sellers",
                  ranking_id: "2641",
                },
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "1",
                    lowest_price_before_title: "Lowest ever",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price ever",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "6.8-inch Smartphone, 12GB RAM + 512GB Storage, 6800mAh High-capacity Battery, Includes Stylus Pen/ headphones/ Type-C Charging Cable. The Perfect Festive Gift for New Year, Valentine's Day Or Easter!, Smartphone For Professionals, Travel Smartphone",
            sales_tip_text_list: ["113", "sold"],
            display_end_time_percent: 53,
            sold_quantity_percent: 60,
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "2056740643",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXAarMTSnNqL8BpMfjVozXgG0GJvnIMpnI3pWmmt1U4M2yb7GDXdGlvbZR2Pccu5CXIQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "1923020641892502884",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "2056740643",
              g: "601103945068379",
              scene_id: "3",
              show_price: "5810",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "43",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "7695077649741347250",
              ts: "1762536754872",
            },
            activity_type: 27,
            mall_id: 634418223861876,
            sales_num: "113",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601103945068379&_oak_mp_inf=ENve%2Bdi21ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIqdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe1bd7ffa-2eb2-4139-9827-69d86da2cbed.jpg&spec_gallery_id=212486296123&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTgxMA&_oak_gallery_order=2056740643%2C342365932%2C362240225",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601103945068379&_oak_mp_inf=ENve%2Bdi21ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIqdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe1bd7ffa-2eb2-4139-9827-69d86da2cbed.jpg&spec_gallery_id=212486296123&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTgxMA&_oak_gallery_order=2056740643%2C342365932%2C362240225&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112655433538170715",
              sku_extra_param: {
                _oak_gallery_order: "2056740643,342365932,362240225",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#D9001B",
                ext_map: {
                  ranking_list_rich_text:
                    '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#D9001B","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Cell Phones","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"2641"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"2641"}}}',
                },
                prompt_tag_text:
                  "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                footer: {
                  color: "#555555",
                  text: " in Cell Phones",
                  font: 14,
                },
                marketing_tag_type: 2100,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/goods_details/3a667bf9-184a-4089-9631-4c4c3e6c0c27.png.slim.png",
                header: {
                  text_style: 2,
                  color: "#FFFFFF",
                  back_color: "#0A8800",
                  text: "BEST-SELLING ITEM",
                  font: 12,
                },
                tag_id: 91020,
                ranking_type: "Best sellers",
                ranking_id: "2641",
              },
              {
                color: "#555555",
                ext_map: {
                  lowest_tag_up_flag: "1",
                  lowest_price_before_title: "Lowest ever",
                },
                marketing_tag_type: 1000,
                tag_id: 91048,
                text: "Lowest price ever",
                tag_series: 2,
              },
            ],
            show_index: 43,
            price_info: {
              split_price_text: ["$", "58", ".10", ""],
              reduction_text: ["-19", "%"],
              price: 5810,
              market_price_str: "$72.27",
              market_price: 7227,
              price_schema: "58.10",
              currency: "USD",
              price_text: ["$", "58.10", ""],
              price_str: "$58.10",
              price_color: "#D9001B",
              reduction: 190,
              market_price_text: ["$", "72.27", ""],
            },
            image: {
              width: 800,
              id: 212486296123,
              url_id: "1923020641892502884",
              url: "https://img.kwcdn.com/product/fancy/e1bd7ffa-2eb2-4139-9827-69d86da2cbed.jpg",
              height: 800,
            },
            sales_tip: "113 sold",
            visible: true,
            goods_id: 601103945068379,
            opt_id: 2661,
            display_end_time: 1763107199,
            seo_link_url:
              "/6-8-inch-smartphone-12gb--512gb-storage-6800mah-high-capacity-battery--stylus-pen-headphones-type-c-charging-cable-the-perfect-festive-gift-for-new-year-valentines-day-or-easter-smartphone-for-professionals-travel-smartphone-g-601103945068379.html?&_oak_mp_inf=ENve%2Bdi21ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIqdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe1bd7ffa-2eb2-4139-9827-69d86da2cbed.jpg&spec_gallery_id=212486296123&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTgxMA&_oak_gallery_order=2056740643%2C342365932%2C362240225",
            queryReleScore: 0.0,
            sales_tip_text: ["113", "sold"],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/product/fancy/e2424982-b984-427c-af60-35da2d728b6b.jpg",
            after_price_tip_text: ["In", "2", "carts"],
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "Unlocked 5G Smartphone - 8+256GB, 6.8 HD+ AMOLED Display, 108MP+48MP  , 4500mAh Battery,  , Stylus Pen,   Unlocked   14 - Golden,   Case, Screen Protector,   Phone, Travel Phone,  ",
            current_sku_id: 17616851232100,
            tags_info: {
              activity_icon_tags: [{}],
              title_header_tags: [
                {
                  ext_map: {
                    discount_promotion_tag:
                      '{"text_dx":0.0,"text_color":"#ffffff","width":73.0,"height":18.0,"bg_url":"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png"}',
                  },
                  marketing_tag_type: 2000,
                },
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
            },
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/goods-video/00e62288f693682f7131ee0b0f47cddba8042c25gs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/e2424982-b984-427c-af60-35da2d728b6b.jpg",
              url: "https://img.kwcdn.com/product/e24473d0649cdef968f4b5d88c44f0bf469f01cb.temu.000001.jpeg",
            },
            title:
              'Unlocked 5G Smartphone - 8+256GB, 6.8" HD+ AMOLED Display, 108MP+48MP Dual Camera, 4500mAh Battery, Face ID, Stylus Pen, Dual SIM Unlocked Android 14 - Golden, Includes Case, Screen Protector, Highperformance Phone, Travel Phone, Premium Design',
            sales_tip_text_list: [],
            display_end_time_percent: 23,
            sold_quantity_percent: 1,
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1560346075",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXDYgBVO5CeriQ12gWE0JcJjM1zveW2LivZ87PuWq9O3Xw7WIs2iLt3Tk8Hq9r9u3JoQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "8771463279373970733",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1560346075",
              g: "601104868755557",
              scene_id: "3",
              show_price: "8256",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "44",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "5894618788076282254",
              ts: "1762536754872",
            },
            activity_type: 13,
            mall_id: 634418227138942,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601104868755557&_oak_mp_inf=EOWQs5G61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe2424982-b984-427c-af60-35da2d728b6b.jpg&spec_gallery_id=216158690527&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=ODI1Ng&_oak_gallery_order=1560346075%2C951469693%2C976491847%2C786440325%2C1705839614",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601104868755557&_oak_mp_inf=EOWQs5G61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe2424982-b984-427c-af60-35da2d728b6b.jpg&spec_gallery_id=216158690527&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=ODI1Ng&_oak_gallery_order=1560346075%2C951469693%2C976491847%2C786440325%2C1705839614&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112716958223288421",
              sku_extra_param: {
                _oak_gallery_order:
                  "1560346075,951469693,976491847,786440325,1705839614",
              },
            },
            goods_tags: [],
            show_index: 44,
            price_info: {
              split_price_text: ["$", "82", ".56", ""],
              reduction_text: [],
              price: 8256,
              price_schema: "82.56",
              currency: "USD",
              price_text: ["$", "82.56", ""],
              price_str: "$82.56",
              price_color: "#FB7701",
            },
            image: {
              width: 2048,
              id: 216158690527,
              url_id: "8771463279373970733",
              url: "https://img.kwcdn.com/product/fancy/e2424982-b984-427c-af60-35da2d728b6b.jpg",
              height: 2048,
            },
            sales_tip: "",
            visible: true,
            goods_id: 601104868755557,
            opt_id: 2661,
            display_end_time: 1764403199,
            seo_link_url:
              "/unlocked-5g-smartphone-8-256-8-hd-amoled-display-108mp-48mp--4500mah-battery--stylus-pen--unlocked--14-golden--case-screen-protector--phone-travel-phone--g-601104868755557.html?&_oak_mp_inf=EOWQs5G61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe2424982-b984-427c-af60-35da2d728b6b.jpg&spec_gallery_id=216158690527&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=ODI1Ng&_oak_gallery_order=1560346075%2C951469693%2C976491847%2C786440325%2C1705839614",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20150c229ba/8a7e5fbb-c56a-4dcf-8e51-d6082a5a5336_1500x1500.jpeg.format.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt: "  14 256gb fully unlocked   used  ",
            current_sku_id: 44232257569511,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "1 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 1 Left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "iPhone 14 256GB - Fully Unlocked - (Renewed) - USED LIKE NEW",
            sales_tip_text_list: ["14", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "203131089",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXDIemus9CRvHyKR7CoEcM5dW8FaXKH3vwtP4wAuvkPM9aNXye+Yb/vKDK87jHkc98YQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "6467386980433698382",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "203131089",
              g: "602232611302454",
              scene_id: "3",
              show_price: "37023",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "45",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "6384885736372099192",
              ts: "1762536754872",
            },
            mall_id: 741070851728255,
            sales_num: "14",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602232611302454&_oak_mp_inf=ELbY%2Baaj94gBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c229ba%2F8a7e5fbb-c56a-4dcf-8e51-d6082a5a5336_1500x1500.jpeg.format.jpg&spec_gallery_id=211703869404&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzcwMjM&_oak_gallery_order=203131089%2C1616422002%2C1704905734%2C1867694175%2C351171764",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=602232611302454&_oak_mp_inf=ELbY%2Baaj94gBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c229ba%2F8a7e5fbb-c56a-4dcf-8e51-d6082a5a5336_1500x1500.jpeg.format.jpg&spec_gallery_id=211703869404&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzcwMjM&_oak_gallery_order=203131089%2C1616422002%2C1704905734%2C1867694175%2C351171764&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "203131089,1616422002,1704905734,1867694175,351171764",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "1 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 1 Left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 45,
            price_info: {
              split_price_text: ["$", "370", ".23", ""],
              reduction_text: [],
              price: 37023,
              price_schema: "370.23",
              currency: "USD",
              price_text: ["$", "370.23", ""],
              price_str: "$370.23",
            },
            image: {
              width: 1500,
              id: 211703869404,
              url_id: "6467386980433698382",
              url: "https://img.kwcdn.com/local-goods-image/20150c229ba/8a7e5fbb-c56a-4dcf-8e51-d6082a5a5336_1500x1500.jpeg.format.jpg",
              height: 1500,
            },
            sales_tip: "14 sold",
            visible: true,
            goods_id: 602232611302454,
            opt_id: 2661,
            seo_link_url:
              "/-14-256gb-fully-unlocked--used--g-602232611302454.html?&_oak_mp_inf=ELbY%2Baaj94gBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c229ba%2F8a7e5fbb-c56a-4dcf-8e51-d6082a5a5336_1500x1500.jpeg.format.jpg&spec_gallery_id=211703869404&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzcwMjM&_oak_gallery_order=203131089%2C1616422002%2C1704905734%2C1867694175%2C351171764",
            queryReleScore: 0.0,
            sales_tip_text: ["14", "sold"],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20150c2239a/ac5be8f8-e254-4ae1-81d3-6f3489e79125_1114x1114.jpeg.format.jpg",
            after_price_tip_text: ["In", "49", "carts"],
            ware_house_type: 1,
            benefit_text: {
              text: "-11%",
            },
            item_type: 0,
            page_alt: "  iphone 15 pro 128  titanium fully unlocked  ",
            current_sku_id: 42783779859086,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "3 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 3 left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Apple iPhone 15 Pro, 128GB, White Titanium - Fully Unlocked (Renewed)",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "322283696",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXAFXcbeX977qO8lgD5f9Db3iHITVlxin2UAnHRHa8HBrvk7DjLdMLKLRV753vNyjz4QeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "5279154497346327258",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "322283696",
              g: "602615802911343",
              scene_id: "3",
              show_price: "61702",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "46",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "838827294891015323",
              ts: "1762536754872",
            },
            mall_id: 741070851595181,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602615802911343&_oak_mp_inf=EO%2B0%2Bea2gokBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c2239a%2Fac5be8f8-e254-4ae1-81d3-6f3489e79125_1114x1114.jpeg.format.jpg&spec_gallery_id=215432312055&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjE3MDI&_oak_gallery_order=322283696",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "322283696",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "3 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 3 left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 46,
            price_info: {
              split_price_text: ["$", "617", ".02", ""],
              reduction_text: ["-11", "%"],
              price: 61702,
              market_price_str: "$699.00",
              market_price: 69900,
              price_schema: "617.02",
              currency: "USD",
              price_text: ["$", "617.02", ""],
              price_str: "$617.02",
              market_price_text: ["$", "699.00", ""],
            },
            image: {
              width: 1114,
              id: 215432312055,
              url_id: "5279154497346327258",
              url: "https://img.kwcdn.com/local-goods-image/20150c2239a/ac5be8f8-e254-4ae1-81d3-6f3489e79125_1114x1114.jpeg.format.jpg",
              height: 1114,
            },
            sales_tip: "",
            visible: true,
            goods_id: 602615802911343,
            opt_id: 2661,
            seo_link_url:
              "/-iphone-15-pro-128-titanium-fully-unlocked--g-602615802911343.html?&_oak_mp_inf=EO%2B0%2Bea2gokBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c2239a%2Fac5be8f8-e254-4ae1-81d3-6f3489e79125_1114x1114.jpeg.format.jpg&spec_gallery_id=215432312055&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjE3MDI&_oak_gallery_order=322283696",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20150c2300b/7b89051c-e9bb-4614-8a17-1bde25f50d32_1600x1600.jpeg.format.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "-36%",
            },
            item_type: 0,
            page_alt:
              "  iphone 14 pro max 256gb deep   unlocked smartphone 6 7   xdr display   chip pro camera system       condition   iphone box charging cable manual premium   flagship in stylish purple  ",
            current_sku_id: 46740518506045,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "1 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 1 Left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "2",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Very Good",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Apple iPhone 14 Pro Max 256GB Deep Purple – Factory Unlocked Smartphone – 6.7” Super Retina XDR Display, A16 Bionic Chip, Pro Camera System, iOS 17, 5G Ready, Excellent Condition – Includes iPhone Box, Charging Cable & Manual – Premium Apple Flagship in Stylish Purple Finish",
            sales_tip_text_list: ["2", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "2133930990",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXAaViEsXxNX4I0IcCpUItdaU5nf+nQ0AmZGbvmHLgf4/e4op12lwpdFZwU0TGx0kwkQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "2145013068446909812",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "2133930990",
              g: "602264286664544",
              scene_id: "3",
              show_price: "56873",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "47",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "5302958613123928526",
              ts: "1762536754873",
            },
            mall_id: 741070851836097,
            sales_num: "2",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602264286664544&_oak_mp_inf=EOCu%2BKaZ%2BIgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c2300b%2F7b89051c-e9bb-4614-8a17-1bde25f50d32_1600x1600.jpeg.format.jpg&spec_gallery_id=211313346372&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTY4NzM&_oak_gallery_order=2133930990%2C236944604%2C1900926498%2C2089751832%2C809869728",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "2133930990,236944604,1900926498,2089751832,809869728",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "1 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 1 Left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "2",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Very Good",
                tag_series: 2,
              },
            ],
            show_index: 47,
            price_info: {
              split_price_text: ["$", "568", ".73", ""],
              reduction_text: ["-36", "%"],
              price: 56873,
              market_price_str: "$899.99",
              market_price: 89999,
              price_schema: "568.73",
              currency: "USD",
              price_text: ["$", "568.73", ""],
              price_str: "$568.73",
              market_price_text: ["$", "899.99", ""],
            },
            image: {
              width: 1600,
              id: 211313346372,
              url_id: "2145013068446909812",
              url: "https://img.kwcdn.com/local-goods-image/20150c2300b/7b89051c-e9bb-4614-8a17-1bde25f50d32_1600x1600.jpeg.format.jpg",
              height: 1600,
            },
            sales_tip: "2 sold",
            visible: true,
            goods_id: 602264286664544,
            opt_id: 2661,
            seo_link_url:
              "/-iphone-14-pro-max-256gb-deep--unlocked-smartphone-6-7--xdr-display--chip-pro-camera-system----condition--iphone-box-charging-cable-manual-premium--flagship-in-stylish-purple--g-602264286664544.html?&_oak_mp_inf=EOCu%2BKaZ%2BIgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c2300b%2F7b89051c-e9bb-4614-8a17-1bde25f50d32_1600x1600.jpeg.format.jpg&spec_gallery_id=211313346372&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTY4NzM&_oak_gallery_order=2133930990%2C236944604%2C1900926498%2C2089751832%2C809869728",
            queryReleScore: 0.0,
            sales_tip_text: ["2", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 5.0,
              hidden_comment: true,
              comment_num_tips: "1",
            },
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20add7005a/57edb0a6-2ca3-4569-bded-d81790c07bf7_898x898.jpeg.format.jpg",
            after_price_tip_text: ["In", "4", "carts"],
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt: "  14   Locked 128GB   -  ",
            current_sku_id: 46331422865146,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "5 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 5 left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title: "iPhone 14 T-Mobile Locked 128GB Midnight - Like New",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "739698174",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXDskhEFdkmg+SZhxqcoAg97iuWVFzWviBDNY7V0sF9pqYMvoAIQFeD9oVNGwFF71DMQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "8142763791890036055",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "739698174",
              g: "602569095118057",
              scene_id: "3",
              show_price: "29530",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "48",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "1291930148279292290",
              ts: "1762536754873",
            },
            mall_id: 741070852040375,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602569095118057&_oak_mp_inf=EOn59%2BaIgYkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20add7005a%2F57edb0a6-2ca3-4569-bded-d81790c07bf7_898x898.jpeg.format.jpg&spec_gallery_id=216403634551&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk1MzA&_oak_gallery_order=739698174",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "739698174",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "5 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 5 left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 48,
            price_info: {
              split_price_text: ["$", "295", ".30", ""],
              reduction_text: [],
              price: 29530,
              price_schema: "295.30",
              currency: "USD",
              price_text: ["$", "295.30", ""],
              price_str: "$295.30",
            },
            image: {
              width: 898,
              id: 216403634551,
              url_id: "8142763791890036055",
              url: "https://img.kwcdn.com/local-goods-image/20add7005a/57edb0a6-2ca3-4569-bded-d81790c07bf7_898x898.jpeg.format.jpg",
              height: 898,
            },
            sales_tip: "",
            visible: true,
            goods_id: 602569095118057,
            opt_id: 2661,
            seo_link_url:
              "/-14--locked-128gb---g-602569095118057.html?&_oak_mp_inf=EOn59%2BaIgYkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20add7005a%2F57edb0a6-2ca3-4569-bded-d81790c07bf7_898x898.jpeg.format.jpg&spec_gallery_id=216403634551&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk1MzA&_oak_gallery_order=739698174",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20add7022e/2a3a882f-c997-4e0d-a3c8-545927819dd6_800x800.jpeg.format.jpg",
            after_price_tip_text: ["In", "1", "cart"],
            ware_house_type: 1,
            benefit_text: {
              text: "-27%",
            },
            item_type: 0,
            page_alt: "  iPhone 11 Pro Max Fully Unlocked 512GB -  ",
            current_sku_id: 41125922527170,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "3 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 3 left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title: "Apple iPhone 11 Pro Max Fully Unlocked 512GB - All Colors",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1765406329",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXCRNd7tv4g9RnkHvVEW7zqF3v2J6w+ZQ5s4BW5ZrQTugzVQR213+elDjxe3r7iXIwoQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "298237675567697240",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1765406329",
              g: "602460647203943",
              scene_id: "3",
              show_price: "34895",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "49",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "7098677353862996320",
              ts: "1762536754873",
            },
            mall_id: 741070850362413,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602460647203943&_oak_mp_inf=EOfI%2BOb0%2FYgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20add7022e%2F2a3a882f-c997-4e0d-a3c8-545927819dd6_800x800.jpeg.format.jpg&spec_gallery_id=602460647203943&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzQ4OTU&_oak_gallery_order=1765406329%2C1524788249%2C1882786853",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=602460647203943&_oak_mp_inf=EOfI%2BOb0%2FYgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20add7022e%2F2a3a882f-c997-4e0d-a3c8-545927819dd6_800x800.jpeg.format.jpg&spec_gallery_id=602460647203943&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzQ4OTU&_oak_gallery_order=1765406329%2C1524788249%2C1882786853&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1765406329,1524788249,1882786853",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "3 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 3 left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 49,
            price_info: {
              split_price_text: ["$", "348", ".95", ""],
              reduction_text: ["-27", "%"],
              price: 34895,
              market_price_str: "$479.00",
              market_price: 47900,
              price_schema: "348.95",
              currency: "USD",
              price_text: ["$", "348.95", ""],
              price_str: "$348.95",
              market_price_text: ["$", "479.00", ""],
            },
            image: {
              width: 375,
              id: 602460647203943,
              url_id: "298237675567697240",
              url: "https://img.kwcdn.com/local-goods-image/20add7022e/2a3a882f-c997-4e0d-a3c8-545927819dd6_800x800.jpeg.format.jpg",
              height: 375,
            },
            sales_tip: "",
            visible: true,
            goods_id: 602460647203943,
            opt_id: 2661,
            seo_link_url:
              "/-iphone-11-pro-max-fully-unlocked-512gb--g-602460647203943.html?&_oak_mp_inf=EOfI%2BOb0%2FYgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20add7022e%2F2a3a882f-c997-4e0d-a3c8-545927819dd6_800x800.jpeg.format.jpg&spec_gallery_id=602460647203943&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzQ4OTU&_oak_gallery_order=1765406329%2C1524788249%2C1882786853",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/b77c4709/49e88b70-c0f6-466d-9450-4df1ae04cc5e.jpeg",
            after_price_tip_text: ["In", "11", "carts"],
            ware_house_type: 1,
            benefit_text: {
              text: "-20%",
            },
            item_type: 0,
            page_alt:
              "   25 ultra   only 256gb storage titanium gray refurbished premium",
            current_sku_id: 47156056555789,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"SAMSUNG","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: SAMSUNG",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "3 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 3 left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Samsung Galaxy S25 Ultra: AT&T Only, 256GB Storage, Titanium Gray, (Refurbished Premium)",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1653959696",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXDcpTSTMDhegcx5i2sBfny0L0MxELx/7ouAWohK0xWyfkeJK5xpAazJsS1zfwkoaOYQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "5781468520846880787",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1653959696",
              g: "602334079887056",
              scene_id: "3",
              show_price: "73015",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "50",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "7240214053270817421",
              ts: "1762536754873",
            },
            mall_id: 741070851677687,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602334079887056&_oak_mp_inf=ENDN%2BKad%2BogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2Fb77c4709%2F49e88b70-c0f6-466d-9450-4df1ae04cc5e.jpeg&spec_gallery_id=215969131339&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NzMwMTU&_oak_gallery_order=1653959696",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1653959696",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "3 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 3 left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 50,
            price_info: {
              split_price_text: ["$", "730", ".15", ""],
              reduction_text: ["-20", "%"],
              price: 73015,
              market_price_str: "$915.00",
              market_price: 91500,
              price_schema: "730.15",
              currency: "USD",
              price_text: ["$", "730.15", ""],
              price_str: "$730.15",
              market_price_text: ["$", "915.00", ""],
            },
            image: {
              width: 1070,
              id: 215969131339,
              url_id: "5781468520846880787",
              url: "https://img.kwcdn.com/local-goods-image/b77c4709/49e88b70-c0f6-466d-9450-4df1ae04cc5e.jpeg",
              height: 1070,
            },
            sales_tip: "",
            visible: true,
            goods_id: 602334079887056,
            opt_id: 2661,
            seo_link_url:
              "/-25-ultra--only-256gb-storage-titanium-gray-refurbished-premium-g-602334079887056.html?&_oak_mp_inf=ENDN%2BKad%2BogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2Fb77c4709%2F49e88b70-c0f6-466d-9450-4df1ae04cc5e.jpeg&spec_gallery_id=215969131339&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NzMwMTU&_oak_gallery_order=1653959696",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/product/open/5a910da387d1457b91c40c11d75c90af-goods.jpeg",
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "6.8-Inch Touchscreen   5G Unlocked Phone, 8+256GB Storage,   Card Slot, 1440*3120 Display Resolution,   with a Stylus And Complete Set of Accessories - The Best Halloween Gift,   for  ",
            current_sku_id: 17617339537708,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
            },
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/goods-video/a409dd78d0a240bcf6b015375deea2b04db0231c.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/open/5a910da387d1457b91c40c11d75c90af-goods.jpeg",
              url: "https://img.kwcdn.com/product/4e19e862c3032e8473e61ff50600e4dca588e6d6.goods.000001.jpeg",
            },
            title:
              "6.8-Inch Touchscreen Android 5G Unlocked Phone, 8+256GB Storage, Dual SIM Card Slot, 1440*3120 Display Resolution, Comes with a Stylus And Complete Set of Accessories - The Best Halloween Gift, The Best Gift for The Festival",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1159286030",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXDtj9IMj65qb8cuJ9CKtQ8JA43kfIlOtwPOOlsOxX1hUmENH4bH7gHd+D6/Ac2FcB8QeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "4350190716243840862",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1159286030",
              g: "601104972935146",
              scene_id: "3",
              show_price: "3633",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "51",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "3286006844391597522",
              ts: "1762536754873",
            },
            mall_id: 634418223809359,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601104972935146&_oak_mp_inf=EOrficO61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F5a910da387d1457b91c40c11d75c90af-goods.jpeg&spec_gallery_id=216502085565&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzYzMw&_oak_gallery_order=1159286030",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601104972935146&_oak_mp_inf=EOrficO61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F5a910da387d1457b91c40c11d75c90af-goods.jpeg&spec_gallery_id=216502085565&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzYzMw&_oak_gallery_order=1159286030&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1159286030",
              },
            },
            goods_tags: [],
            show_index: 51,
            price_info: {
              split_price_text: ["$", "36", ".33", ""],
              reduction_text: [],
              price: 3633,
              price_schema: "36.33",
              currency: "USD",
              price_text: ["$", "36.33", ""],
              price_str: "$36.33",
            },
            image: {
              width: 800,
              id: 216502085565,
              url_id: "4350190716243840862",
              url: "https://img.kwcdn.com/product/open/5a910da387d1457b91c40c11d75c90af-goods.jpeg",
              height: 800,
            },
            sales_tip: "",
            visible: true,
            goods_id: 601104972935146,
            opt_id: 2661,
            seo_link_url:
              "/6-8-inch-touchscreen--5g-unlocked-phone-8-256gb-storage--card-slot-1440-3120-display-resolution--with-a-stylus-and-complete-set-of-accessories-the-best-halloween-gift--for--g-601104972935146.html?&_oak_mp_inf=EOrficO61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F5a910da387d1457b91c40c11d75c90af-goods.jpeg&spec_gallery_id=216502085565&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzYzMw&_oak_gallery_order=1159286030",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20150c20c71/25927ccd-f5c6-43f1-9458-e8ec1559f809_1500x1500.jpeg.format.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt: "  12 64gb fully unlocked   used good",
            current_sku_id: 44013214266569,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "1 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 1 Left",
                  tag_series: 2,
                },
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Cell Phones","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"2641"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"2641"}}}',
                  },
                  prompt_tag_text:
                    "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Cell Phones",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/goods_details/3a667bf9-184a-4089-9631-4c4c3e6c0c27.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "TOP RATED",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "Top rated",
                  ranking_id: "2641",
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "3",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Good",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title: "iPhone 12 64GB - FULLY UNLOCKED - (RENEWED) - USED GOOD",
            sales_tip_text_list: ["116", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1810606035",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXDAPe47MrqBp5s3mWa7ceXtjs1fjGCptICdFLTdS9wNM6FW5jC/NEneUQSJhY5CS7IQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "1716146908047775623",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1810606035",
              g: "603194952408433",
              scene_id: "3",
              show_price: "17709",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "52",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "6556716801522994451",
              ts: "1762536754873",
            },
            mall_id: 741070851728255,
            sales_num: "116",
            link_url:
              "goods.html?_bg_fs=1&goods_id=603194952408433&_oak_mp_inf=EPG6%2Baakk4kBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c20c71%2F25927ccd-f5c6-43f1-9458-e8ec1559f809_1500x1500.jpeg.format.jpg&spec_gallery_id=603194952408433&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc3MDk&_oak_gallery_order=1810606035%2C2090798051%2C1940136072%2C588238604%2C522379541",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=603194952408433&_oak_mp_inf=EPG6%2Baakk4kBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c20c71%2F25927ccd-f5c6-43f1-9458-e8ec1559f809_1500x1500.jpeg.format.jpg&spec_gallery_id=603194952408433&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc3MDk&_oak_gallery_order=1810606035%2C2090798051%2C1940136072%2C588238604%2C522379541&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "1810606035,2090798051,1940136072,588238604,522379541",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "1 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 1 Left",
                tag_series: 2,
              },
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                ext_map: {
                  ranking_list_rich_text:
                    '{"text_rich":[{"type":0,"value":"TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Cell Phones","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"2641"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"2641"}}}',
                },
                prompt_tag_text:
                  "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                footer: {
                  color: "#555555",
                  text: " in Cell Phones",
                  font: 14,
                },
                marketing_tag_type: 2100,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/goods_details/3a667bf9-184a-4089-9631-4c4c3e6c0c27.png.slim.png",
                header: {
                  text_style: 2,
                  color: "#FFFFFF",
                  back_color: "#0A8800",
                  text: "TOP RATED",
                  font: 12,
                },
                tag_id: 91020,
                ranking_type: "Top rated",
                ranking_id: "2641",
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "3",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Good",
                tag_series: 2,
              },
            ],
            show_index: 52,
            price_info: {
              split_price_text: ["$", "177", ".09", ""],
              reduction_text: [],
              price: 17709,
              price_schema: "177.09",
              currency: "USD",
              price_text: ["$", "177.09", ""],
              price_str: "$177.09",
            },
            image: {
              width: 375,
              id: 603194952408433,
              url_id: "1716146908047775623",
              url: "https://img.kwcdn.com/local-goods-image/20150c20c71/25927ccd-f5c6-43f1-9458-e8ec1559f809_1500x1500.jpeg.format.jpg",
              height: 375,
            },
            sales_tip: "116 sold",
            visible: true,
            goods_id: 603194952408433,
            opt_id: 2661,
            seo_link_url:
              "/-12-64gb-fully-unlocked--used-good-g-603194952408433.html?&_oak_mp_inf=EPG6%2Baakk4kBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIudgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c20c71%2F25927ccd-f5c6-43f1-9458-e8ec1559f809_1500x1500.jpeg.format.jpg&spec_gallery_id=603194952408433&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc3MDk&_oak_gallery_order=1810606035%2C2090798051%2C1940136072%2C588238604%2C522379541",
            queryReleScore: 0.0,
            sales_tip_text: ["116", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.6,
              hidden_comment: true,
              comment_num_tips: "9",
            },
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20150c211cd/618f5142-83cb-4cc7-b884-489c34fc0446_1166x1166.jpeg.format.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "-6%",
            },
            item_type: 0,
            page_alt: "    15 plus 128gb pink fully unlocked  ",
            current_sku_id: 47672526387912,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "3 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 3 left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "3",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Good",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Apple iPhone 15 Plus, 128GB, Pink - Fully Unlocked (Renewed)",
            sales_tip_text_list: ["1", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1414421519",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXBuHK8yKEUfLRzETdxhiZJvErzhbmKfeFKWGKElDsmu9yFjsGWt3hSWjhYlLpARBJMQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "990733820311755123",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1414421519",
              g: "602992283629455",
              scene_id: "3",
              show_price: "48826",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "53",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "6027352796725142577",
              ts: "1762536754873",
            },
            mall_id: 741070851595181,
            sales_num: "1",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602992283629455&_oak_mp_inf=EI%2Fv%2BKaxjYkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c211cd%2F618f5142-83cb-4cc7-b884-489c34fc0446_1166x1166.jpeg.format.jpg&spec_gallery_id=212546364051&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDg4MjY&_oak_gallery_order=1414421519",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1414421519",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "3 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 3 left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "3",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Good",
                tag_series: 2,
              },
            ],
            show_index: 53,
            price_info: {
              split_price_text: ["$", "488", ".26", ""],
              reduction_text: ["-6", "%"],
              price: 48826,
              market_price_str: "$520.00",
              market_price: 52000,
              price_schema: "488.26",
              currency: "USD",
              price_text: ["$", "488.26", ""],
              price_str: "$488.26",
              market_price_text: ["$", "520.00", ""],
            },
            image: {
              width: 1166,
              id: 212546364051,
              url_id: "990733820311755123",
              url: "https://img.kwcdn.com/local-goods-image/20150c211cd/618f5142-83cb-4cc7-b884-489c34fc0446_1166x1166.jpeg.format.jpg",
              height: 1166,
            },
            sales_tip: "1 sold",
            visible: true,
            goods_id: 602992283629455,
            opt_id: 2661,
            seo_link_url:
              "/--15-plus-128gb-pink-fully-unlocked--g-602992283629455.html?&_oak_mp_inf=EI%2Fv%2BKaxjYkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c211cd%2F618f5142-83cb-4cc7-b884-489c34fc0446_1166x1166.jpeg.format.jpg&spec_gallery_id=212546364051&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDg4MjY&_oak_gallery_order=1414421519",
            queryReleScore: 0.0,
            sales_tip_text: ["1", "sold"],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/ecadedea/30ca6a2b-e5bd-4baa-ba77-651dfc3dbf08/da09352c9e388f8b64135ee18b49e542.jpeg",
            after_price_tip_text: ["7", "viewed"],
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt: "   22 Ultra 5G, US Version, 128GB, Green - Unlocked ( )",
            current_sku_id: 37878927213301,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"SAMSUNG","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: SAMSUNG",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "SAMSUNG Galaxy S22 Ultra 5G, US Version, 128GB, Green - Unlocked (Renewed)",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1402434965",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXD5gkIKjrpMZcFm5qVk02+iwwOuuuN7cY5kjbI1fBqX/d7bHG/lc7OronHR2iXIMgoQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "4446400332486444569",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1402434965",
              g: "602341461829896",
              scene_id: "3",
              show_price: "32857",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "54",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "7223447481159832385",
              ts: "1762536754873",
            },
            mall_id: 741070852160616,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602341461829896&_oak_mp_inf=EIjS9ua4%2BogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2Fecadedea%2F30ca6a2b-e5bd-4baa-ba77-651dfc3dbf08%2Fda09352c9e388f8b64135ee18b49e542.jpeg&spec_gallery_id=216520068549&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI4NTc&_oak_gallery_order=1402434965",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1402434965",
              },
            },
            goods_tags: [
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 54,
            price_info: {
              split_price_text: ["$", "328", ".57", ""],
              reduction_text: [],
              price: 32857,
              price_schema: "328.57",
              currency: "USD",
              price_text: ["$", "328.57", ""],
              price_str: "$328.57",
            },
            image: {
              width: 1224,
              id: 216520068549,
              url_id: "4446400332486444569",
              url: "https://img.kwcdn.com/local-goods-image/ecadedea/30ca6a2b-e5bd-4baa-ba77-651dfc3dbf08/da09352c9e388f8b64135ee18b49e542.jpeg",
              height: 1224,
            },
            sales_tip: "",
            visible: true,
            goods_id: 602341461829896,
            opt_id: 2661,
            seo_link_url:
              "/-22-ultra-5g-us-version-128gb-green-unlocked--g-602341461829896.html?&_oak_mp_inf=EIjS9ua4%2BogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2Fecadedea%2F30ca6a2b-e5bd-4baa-ba77-651dfc3dbf08%2Fda09352c9e388f8b64135ee18b49e542.jpeg&spec_gallery_id=216520068549&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI4NTc&_oak_gallery_order=1402434965",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20150c21109/19991d4e-bf22-4368-baf5-206fbabe41e4_1000x1000.jpeg.format.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt: "    14 plus unlock",
            current_sku_id: 51258824072158,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "1 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 1 Left",
                  tag_series: 2,
                },
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "1",
                    lowest_price_before_title: "Lowest ever",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price ever",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title: "Apple iphone 14 Plus -Unlock",
            sales_tip_text_list: ["9", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1815086240",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXDqVJowyQzdDUIPkWLoq3MqASj8bxnuV1H9gA4bFPeaeV27HCnh3FlxHi3WbWgIjjAQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "5299517169409329972",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1815086240",
              g: "602342401389979",
              scene_id: "3",
              show_price: "36486",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "55",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "4727154806540219153",
              ts: "1762536754873",
            },
            mall_id: 741070851813764,
            sales_num: "9",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602342401389979&_oak_mp_inf=EJvr%2BKa8%2BogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c21109%2F19991d4e-bf22-4368-baf5-206fbabe41e4_1000x1000.jpeg.format.jpg&spec_gallery_id=210676248728&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY0ODY&_oak_gallery_order=1815086240%2C476753133%2C171488767%2C1075959964%2C1096493971",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=602342401389979&_oak_mp_inf=EJvr%2BKa8%2BogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c21109%2F19991d4e-bf22-4368-baf5-206fbabe41e4_1000x1000.jpeg.format.jpg&spec_gallery_id=210676248728&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY0ODY&_oak_gallery_order=1815086240%2C476753133%2C171488767%2C1075959964%2C1096493971&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "1815086240,476753133,171488767,1075959964,1096493971",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "1 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 1 Left",
                tag_series: 2,
              },
              {
                color: "#555555",
                ext_map: {
                  lowest_tag_up_flag: "1",
                  lowest_price_before_title: "Lowest ever",
                },
                marketing_tag_type: 1000,
                tag_id: 91048,
                text: "Lowest price ever",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 55,
            price_info: {
              split_price_text: ["$", "364", ".86", ""],
              reduction_text: [],
              price: 36486,
              price_schema: "364.86",
              currency: "USD",
              price_text: ["$", "364.86", ""],
              price_str: "$364.86",
            },
            image: {
              width: 1000,
              id: 210676248728,
              url_id: "5299517169409329972",
              url: "https://img.kwcdn.com/local-goods-image/20150c21109/19991d4e-bf22-4368-baf5-206fbabe41e4_1000x1000.jpeg.format.jpg",
              height: 1000,
            },
            sales_tip: "9 sold",
            visible: true,
            goods_id: 602342401389979,
            opt_id: 2661,
            seo_link_url:
              "/--14-plus-unlock-g-602342401389979.html?&_oak_mp_inf=EJvr%2BKa8%2BogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c21109%2F19991d4e-bf22-4368-baf5-206fbabe41e4_1000x1000.jpeg.format.jpg&spec_gallery_id=210676248728&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY0ODY&_oak_gallery_order=1815086240%2C476753133%2C171488767%2C1075959964%2C1096493971",
            queryReleScore: 0.0,
            sales_tip_text: ["9", "sold"],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/201365d8acc/ec5a8660-b3db-4204-ad1f-110c5969bdcf_971x971.jpeg.format.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "-11%",
            },
            item_type: 0,
            page_alt:
              "  iphone 11 pro max unlocked   storage   colors   premium",
            current_sku_id: 46400142367634,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "1 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 1 Left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Apple iPhone 11 Pro Max - Unlocked - Variety Storage - Variety Colors - (Renewed Premium)",
            sales_tip_text_list: ["10", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "296705133",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXCcq4IQ3++1rhV/qKfSEbtLIUZPPLGxVBYVjMJE7Cp+8Wf/FyMez1TEA7LzgKK90T4QeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "1255274536291862278",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "296705133",
              g: "602828001093958",
              scene_id: "3",
              show_price: "20391",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "56",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "2719390442469087744",
              ts: "1762536754873",
            },
            mall_id: 741070851493122,
            sales_num: "10",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602828001093958&_oak_mp_inf=EMbS9qbNiIkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F201365d8acc%2Fec5a8660-b3db-4204-ad1f-110c5969bdcf_971x971.jpeg.format.jpg&spec_gallery_id=602828001093958&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAzOTE&_oak_gallery_order=296705133%2C1748976552",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=602828001093958&_oak_mp_inf=EMbS9qbNiIkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F201365d8acc%2Fec5a8660-b3db-4204-ad1f-110c5969bdcf_971x971.jpeg.format.jpg&spec_gallery_id=602828001093958&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAzOTE&_oak_gallery_order=296705133%2C1748976552&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "296705133,1748976552",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "1 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 1 Left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 56,
            price_info: {
              split_price_text: ["$", "203", ".91", ""],
              reduction_text: ["-11", "%"],
              price: 20391,
              market_price_str: "$230.00",
              market_price: 23000,
              price_schema: "203.91",
              currency: "USD",
              price_text: ["$", "203.91", ""],
              price_str: "$203.91",
              market_price_text: ["$", "230.00", ""],
            },
            image: {
              width: 375,
              id: 602828001093958,
              url_id: "1255274536291862278",
              url: "https://img.kwcdn.com/local-goods-image/201365d8acc/ec5a8660-b3db-4204-ad1f-110c5969bdcf_971x971.jpeg.format.jpg",
              height: 375,
            },
            sales_tip: "10 sold",
            visible: true,
            goods_id: 602828001093958,
            opt_id: 2661,
            seo_link_url:
              "/-iphone-11-pro-max-unlocked--storage--colors--premium-g-602828001093958.html?&_oak_mp_inf=EMbS9qbNiIkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F201365d8acc%2Fec5a8660-b3db-4204-ad1f-110c5969bdcf_971x971.jpeg.format.jpg&spec_gallery_id=602828001093958&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAzOTE&_oak_gallery_order=296705133%2C1748976552",
            queryReleScore: 0.0,
            sales_tip_text: ["10", "sold"],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20150c22e52/ae7a061c-8844-4b9c-9b27-4c8723385260_1080x1080.jpeg.format.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "   23 ultra 256gb unlocked good condition aftermarket display",
            current_sku_id: 48018271296147,
            tags_info: {
              activity_icon_tags: [{}],
              title_header_tags: [
                {
                  ext_map: {
                    discount_promotion_tag:
                      '{"text_dx":0.0,"text_color":"#ffffff","width":73.0,"height":18.0,"bg_url":"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png"}',
                  },
                  marketing_tag_type: 2000,
                },
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"SAMSUNG","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: SAMSUNG",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "2 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 2 left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "2",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Very Good",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Samsung Galaxy S23 Ultra – 256GB Unlocked Good Condition – Aftermarket Display",
            sales_tip_text_list: ["24", "sold"],
            display_end_time_percent: 23,
            sold_quantity_percent: 6,
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "113689234",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXBrt1YXPhbipJf2mbuVlpTviBzcI488aJPtijsylyjtOYvQcL41sn3+Bbrh5pjN5J4QeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "4668189827832564016",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "113689234",
              g: "602289150497703",
              scene_id: "3",
              show_price: "36431",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "57",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "6402104757129156553",
              ts: "1762536754873",
            },
            activity_type: 13,
            mall_id: 741070851663746,
            sales_num: "24",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602289150497703&_oak_mp_inf=EKen%2BPb1%2BIgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c22e52%2Fae7a061c-8844-4b9c-9b27-4c8723385260_1080x1080.jpeg.format.jpg&spec_gallery_id=602289150497703&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY0MzE&_oak_gallery_order=113689234%2C1324430195%2C246861949%2C432731643",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=602289150497703&_oak_mp_inf=EKen%2BPb1%2BIgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c22e52%2Fae7a061c-8844-4b9c-9b27-4c8723385260_1080x1080.jpeg.format.jpg&spec_gallery_id=602289150497703&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY0MzE&_oak_gallery_order=113689234%2C1324430195%2C246861949%2C432731643&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112644434118513575",
              sku_extra_param: {
                _oak_gallery_order: "113689234,1324430195,246861949,432731643",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "2 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 2 left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "2",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Very Good",
                tag_series: 2,
              },
            ],
            show_index: 57,
            price_info: {
              split_price_text: ["$", "364", ".31", ""],
              reduction_text: [],
              price: 36431,
              price_schema: "364.31",
              currency: "USD",
              price_text: ["$", "364.31", ""],
              price_str: "$364.31",
              price_color: "#FB7701",
            },
            image: {
              width: 375,
              id: 602289150497703,
              url_id: "4668189827832564016",
              url: "https://img.kwcdn.com/local-goods-image/20150c22e52/ae7a061c-8844-4b9c-9b27-4c8723385260_1080x1080.jpeg.format.jpg",
              height: 375,
            },
            sales_tip: "24 sold",
            visible: true,
            goods_id: 602289150497703,
            opt_id: 2661,
            display_end_time: 1764403199,
            seo_link_url:
              "/-23-ultra-256gb-unlocked-good-condition-aftermarket-display-g-602289150497703.html?&_oak_mp_inf=EKen%2BPb1%2BIgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c22e52%2Fae7a061c-8844-4b9c-9b27-4c8723385260_1080x1080.jpeg.format.jpg&spec_gallery_id=602289150497703&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY0MzE&_oak_gallery_order=113689234%2C1324430195%2C246861949%2C432731643",
            queryReleScore: 0.0,
            sales_tip_text: ["24", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.6,
              hidden_comment: true,
              comment_num_tips: "5",
            },
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/2066d9030c/2eeef4e1-b33f-43c7-9619-bd1d50c1cad2_1500x1500.jpeg.format.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt: "    16 128gb     unlocked",
            current_sku_id: 36130875537443,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title: "Apple ‌iPhone 16, 128GB, Ultramarine (Renewed) Unlocked",
            sales_tip_text_list: ["2", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1904808544",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXBOTAMtmwxwHjw6QPT3+UGNaveK+fGZYzgSomimED5stuxxZaDmX04iTk2TqxvkgVsQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "5554954588532129154",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1904808544",
              g: "602307773234934",
              scene_id: "3",
              show_price: "62678",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "58",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "2065071676787085518",
              ts: "1762536754873",
            },
            mall_id: 741070851675026,
            sales_num: "2",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602307773234934&_oak_mp_inf=EPb9%2Baa7%2BYgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d9030c%2F2eeef4e1-b33f-43c7-9619-bd1d50c1cad2_1500x1500.jpeg.format.jpg&spec_gallery_id=213536203411&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjI2Nzg&_oak_gallery_order=1904808544%2C850511660",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=602307773234934&_oak_mp_inf=EPb9%2Baa7%2BYgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d9030c%2F2eeef4e1-b33f-43c7-9619-bd1d50c1cad2_1500x1500.jpeg.format.jpg&spec_gallery_id=213536203411&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjI2Nzg&_oak_gallery_order=1904808544%2C850511660&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1904808544,850511660",
              },
            },
            goods_tags: [
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 58,
            price_info: {
              split_price_text: ["$", "626", ".78", ""],
              reduction_text: [],
              price: 62678,
              price_schema: "626.78",
              currency: "USD",
              price_text: ["$", "626.78", ""],
              price_str: "$626.78",
            },
            image: {
              width: 1500,
              id: 213536203411,
              url_id: "5554954588532129154",
              url: "https://img.kwcdn.com/local-goods-image/2066d9030c/2eeef4e1-b33f-43c7-9619-bd1d50c1cad2_1500x1500.jpeg.format.jpg",
              height: 1500,
            },
            sales_tip: "2 sold",
            visible: true,
            goods_id: 602307773234934,
            opt_id: 2661,
            seo_link_url:
              "/-e2-80-8ciphone-16-128gb---unlocked-g-602307773234934.html?&_oak_mp_inf=EPb9%2Baa7%2BYgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d9030c%2F2eeef4e1-b33f-43c7-9619-bd1d50c1cad2_1500x1500.jpeg.format.jpg&spec_gallery_id=213536203411&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjI2Nzg&_oak_gallery_order=1904808544%2C850511660",
            queryReleScore: 0.0,
            sales_tip_text: ["2", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 5.0,
              hidden_comment: true,
              comment_num_tips: "1",
            },
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20ef5f17a0/684f8e0a-fdd9-4b5a-ac10-cc004a478750_1200x1200.jpeg.format.jpg",
            after_price_tip_text: ["In", "48", "carts"],
            ware_house_type: 1,
            benefit_text: {
              text: "-6%",
            },
            item_type: 0,
            page_alt: "  iphone 16 pro 128gb fully unlocked natural titanium  ",
            current_sku_id: 50845433520626,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "4 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 4 left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Apple iPhone 16 Pro, 128GB, Fully Unlocked, Natural Titanium - ( Renewed )",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1349392171",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXB8ixN+RhNfrVUxD5yYsAwW0Knnz+qIwmrz6novO2FC24MvoAIQFeD9oVNGwFF71DMQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "7373553914989067079",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1349392171",
              g: "602786527866770",
              scene_id: "3",
              show_price: "79406",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "59",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "3525786753348722647",
              ts: "1762536754873",
            },
            mall_id: 741070851595181,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602786527866770&_oak_mp_inf=EJLf%2Beayh4kBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20ef5f17a0%2F684f8e0a-fdd9-4b5a-ac10-cc004a478750_1200x1200.jpeg.format.jpg&spec_gallery_id=215418896081&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Nzk0MDY&_oak_gallery_order=1349392171",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1349392171",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "4 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 4 left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 59,
            price_info: {
              split_price_text: ["$", "794", ".06", ""],
              reduction_text: ["-6", "%"],
              price: 79406,
              market_price_str: "$845.00",
              market_price: 84500,
              price_schema: "794.06",
              currency: "USD",
              price_text: ["$", "794.06", ""],
              price_str: "$794.06",
              market_price_text: ["$", "845.00", ""],
            },
            image: {
              width: 1200,
              id: 215418896081,
              url_id: "7373553914989067079",
              url: "https://img.kwcdn.com/local-goods-image/20ef5f17a0/684f8e0a-fdd9-4b5a-ac10-cc004a478750_1200x1200.jpeg.format.jpg",
              height: 1200,
            },
            sales_tip: "",
            visible: true,
            goods_id: 602786527866770,
            opt_id: 2661,
            seo_link_url:
              "/-iphone-16-pro-128gb-fully-unlocked-natural-titanium--g-602786527866770.html?&_oak_mp_inf=EJLf%2Beayh4kBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20ef5f17a0%2F684f8e0a-fdd9-4b5a-ac10-cc004a478750_1200x1200.jpeg.format.jpg&spec_gallery_id=215418896081&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Nzk0MDY&_oak_gallery_order=1349392171",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20add7022e/d8edae04-2ef9-4553-a653-0b735c2f646e_800x800.jpeg.format.jpg",
            after_price_tip_text: ["13", "viewed"],
            ware_house_type: 1,
            benefit_text: {
              text: "-33%",
            },
            item_type: 0,
            page_alt: "  iPhone 11 Pro Max Fully Unlocked 64GB -  ",
            current_sku_id: 49423799334444,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "1 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 1 Left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "2",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Very Good",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title: "Apple iPhone 11 Pro Max Fully Unlocked 64GB - All Colors",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1841279953",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXChT0EgEUcLvtPLftf//IIqEb5xRg/vd5UW0gQ7OYkgW6j6OIanmJEQERI2X6hG4EsQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "4536873789786160116",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1841279953",
              g: "602466015921334",
              scene_id: "3",
              show_price: "23092",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "60",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "7906191755765096882",
              ts: "1762536754873",
            },
            mall_id: 741070850362413,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602466015921334&_oak_mp_inf=ELaJ%2BeaI%2FogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20add7022e%2Fd8edae04-2ef9-4553-a653-0b735c2f646e_800x800.jpeg.format.jpg&spec_gallery_id=216502903678&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjMwOTI&_oak_gallery_order=1841279953",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=602466015921334&_oak_mp_inf=ELaJ%2BeaI%2FogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20add7022e%2Fd8edae04-2ef9-4553-a653-0b735c2f646e_800x800.jpeg.format.jpg&spec_gallery_id=216502903678&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjMwOTI&_oak_gallery_order=1841279953&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1841279953",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "1 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 1 Left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "2",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Very Good",
                tag_series: 2,
              },
            ],
            show_index: 60,
            price_info: {
              split_price_text: ["$", "230", ".92", ""],
              reduction_text: ["-33", "%"],
              price: 23092,
              market_price_str: "$349.00",
              market_price: 34900,
              price_schema: "230.92",
              currency: "USD",
              price_text: ["$", "230.92", ""],
              price_str: "$230.92",
              market_price_text: ["$", "349.00", ""],
            },
            image: {
              width: 800,
              id: 216502903678,
              url_id: "4536873789786160116",
              url: "https://img.kwcdn.com/local-goods-image/20add7022e/d8edae04-2ef9-4553-a653-0b735c2f646e_800x800.jpeg.format.jpg",
              height: 800,
            },
            sales_tip: "",
            visible: true,
            goods_id: 602466015921334,
            opt_id: 2661,
            seo_link_url:
              "/-iphone-11-pro-max-fully-unlocked-64gb--g-602466015921334.html?&_oak_mp_inf=ELaJ%2BeaI%2FogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20add7022e%2Fd8edae04-2ef9-4553-a653-0b735c2f646e_800x800.jpeg.format.jpg&spec_gallery_id=216502903678&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjMwOTI&_oak_gallery_order=1841279953",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/product/open/b6c9b418653a4a209ce96428d35530f9-goods.jpeg",
            after_price_tip_text: ["1", "viewed"],
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "This 2025 5G Smartphone Features a 6.8-Inch Screen, 8GB of Memory, And 256GB of Storage Space, And   with a Stylus. It Has a Dual-Camera System And a Battery. Additionally, The Device Supports   Cards And Facial Recognition. The Package I",
            current_sku_id: 17617169938248,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
            },
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/goods-video/3566b9ab3e2b766ebc3657b4c6ec013f3fc0914a.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/open/b6c9b418653a4a209ce96428d35530f9-goods.jpeg",
              url: "https://img.kwcdn.com/product/6cdf04730537a04f138163c13f74830e31be2d8b.goods.000001.jpeg",
            },
            title:
              "This 2025 5G Smartphone Features a 6.8-Inch Screen, 8GB of Memory, And 256GB of Storage Space, And Comes with a Stylus. It Has a Dual-Camera System And a Battery. Additionally, The Device Supports Dual SIM Cards And Facial Recognition. The Package I",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "127989518",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXBOOEPZF4Fw+9kzS0UBESzZvjB/kcdbQXOP16TjaHmFOgp4En5rAwSauPJ5CyuQZqUQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "2326379574518391053",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "127989518",
              g: "601104937135874",
              scene_id: "3",
              show_price: "3645",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "61",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "6163645258074130098",
              ts: "1762536754873",
            },
            mall_id: 634418223809359,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601104937135874&_oak_mp_inf=EILegLK61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fb6c9b418653a4a209ce96428d35530f9-goods.jpeg&spec_gallery_id=216394942531&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY0NQ&_oak_gallery_order=127989518%2C919621909%2C582220747%2C781473378%2C905342961",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601104937135874&_oak_mp_inf=EILegLK61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fb6c9b418653a4a209ce96428d35530f9-goods.jpeg&spec_gallery_id=216394942531&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY0NQ&_oak_gallery_order=127989518%2C919621909%2C582220747%2C781473378%2C905342961&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "127989518,919621909,582220747,781473378,905342961",
              },
            },
            goods_tags: [],
            show_index: 61,
            price_info: {
              split_price_text: ["$", "36", ".45", ""],
              reduction_text: [],
              price: 3645,
              price_schema: "36.45",
              currency: "USD",
              price_text: ["$", "36.45", ""],
              price_str: "$36.45",
            },
            image: {
              width: 800,
              id: 216394942531,
              url_id: "2326379574518391053",
              url: "https://img.kwcdn.com/product/open/b6c9b418653a4a209ce96428d35530f9-goods.jpeg",
              height: 800,
            },
            sales_tip: "",
            visible: true,
            goods_id: 601104937135874,
            opt_id: 2661,
            seo_link_url:
              "/this-2025-5g-smartphone-features-a-6-8-inch-screen-8gb-of-memory-and-256gb-of-storage-space-and--with-a-stylus-it-has-a--system-and-a-battery-additionally-the-device-supports--cards-and-facial-recognition-the-package-i-g-601104937135874.html?&_oak_mp_inf=EILegLK61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fb6c9b418653a4a209ce96428d35530f9-goods.jpeg&spec_gallery_id=216394942531&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY0NQ&_oak_gallery_order=127989518%2C919621909%2C582220747%2C781473378%2C905342961",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/1446e7af/c904aec5-11a1-4730-8018-bda8eca2ae4f/1359f79bc2552d2bf07ddd9a6eb624ba.jpeg",
            after_price_tip_text: ["15", "viewed"],
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt: "   22 Ultra 5G, US Version, 128GB, Black - Unlocked ( )",
            current_sku_id: 50016504781966,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"SAMSUNG","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: SAMSUNG",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "SAMSUNG Galaxy S22 Ultra 5G, US Version, 128GB, Black - Unlocked (Renewed)",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "263810089",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXD5gkIKjrpMZcFm5qVk02+i45dcE0tTeEq7HokNGTFiy97bHG/lc7OronHR2iXIMgoQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "916777166759524112",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "263810089",
              g: "602974701074973",
              scene_id: "3",
              show_price: "31611",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "62",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "7183305693019742949",
              ts: "1762536754873",
            },
            mall_id: 741070852160616,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602974701074973&_oak_mp_inf=EJ309ubvjIkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F1446e7af%2Fc904aec5-11a1-4730-8018-bda8eca2ae4f%2F1359f79bc2552d2bf07ddd9a6eb624ba.jpeg&spec_gallery_id=216511021829&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzE2MTE&_oak_gallery_order=263810089",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "263810089",
              },
            },
            goods_tags: [
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 62,
            price_info: {
              split_price_text: ["$", "316", ".11", ""],
              reduction_text: [],
              price: 31611,
              price_schema: "316.11",
              currency: "USD",
              price_text: ["$", "316.11", ""],
              price_str: "$316.11",
            },
            image: {
              width: 2000,
              id: 216511021829,
              url_id: "916777166759524112",
              url: "https://img.kwcdn.com/local-goods-image/1446e7af/c904aec5-11a1-4730-8018-bda8eca2ae4f/1359f79bc2552d2bf07ddd9a6eb624ba.jpeg",
              height: 2000,
            },
            sales_tip: "",
            visible: true,
            goods_id: 602974701074973,
            opt_id: 2661,
            seo_link_url:
              "/-22-ultra-5g-us-version-128gb-black-unlocked--g-602974701074973.html?&_oak_mp_inf=EJ309ubvjIkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyIIydgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F1446e7af%2Fc904aec5-11a1-4730-8018-bda8eca2ae4f%2F1359f79bc2552d2bf07ddd9a6eb624ba.jpeg&spec_gallery_id=216511021829&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzE2MTE&_oak_gallery_order=263810089",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20150c22e52/16e9e454-4252-41fd-b9eb-fd289cad51d3_1080x1080.jpeg.format.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "-15%",
            },
            item_type: 0,
            page_alt:
              "    14 plus 128gb unlocked good condition aftermarket screen message",
            current_sku_id: 38328825068695,
            tags_info: {
              activity_icon_tags: [{}],
              title_header_tags: [
                {
                  ext_map: {
                    discount_promotion_tag:
                      '{"text_dx":0.0,"text_color":"#ffffff","width":73.0,"height":18.0,"bg_url":"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png"}',
                  },
                  marketing_tag_type: 2000,
                },
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "1 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 1 Left",
                  tag_series: 2,
                },
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "1",
                    lowest_price_before_title: "Lowest ever",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price ever",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "2",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Very Good",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Apple iPhone 14 Plus 128GB Unlocked Good Condition – Aftermarket Screen Message",
            sales_tip_text_list: ["12", "sold"],
            display_end_time_percent: 23,
            sold_quantity_percent: 2,
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1996365454",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXAfATmzZe9+91OC1K3RWkQ73TUGOInnNFFstb7ik7+guFcYw0h0uKlnBWKs6rfAHK4QeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "85268561130553830",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1996365454",
              g: "602699420549493",
              scene_id: "3",
              show_price: "32929",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "63",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "2481694079489966206",
              ts: "1762536754873",
            },
            activity_type: 13,
            mall_id: 741070851663746,
            sales_num: "12",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602699420549493&_oak_mp_inf=EPWC%2BabuhIkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c22e52%2F16e9e454-4252-41fd-b9eb-fd289cad51d3_1080x1080.jpeg.format.jpg&spec_gallery_id=205680377194&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI5Mjk&_oak_gallery_order=1996365454%2C103947120%2C583450379",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=602699420549493&_oak_mp_inf=EPWC%2BabuhIkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c22e52%2F16e9e454-4252-41fd-b9eb-fd289cad51d3_1080x1080.jpeg.format.jpg&spec_gallery_id=205680377194&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI5Mjk&_oak_gallery_order=1996365454%2C103947120%2C583450379&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112644388065067381",
              sku_extra_param: {
                _oak_gallery_order: "1996365454,103947120,583450379",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "1 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 1 Left",
                tag_series: 2,
              },
              {
                color: "#555555",
                ext_map: {
                  lowest_tag_up_flag: "1",
                  lowest_price_before_title: "Lowest ever",
                },
                marketing_tag_type: 1000,
                tag_id: 91048,
                text: "Lowest price ever",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "2",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Very Good",
                tag_series: 2,
              },
            ],
            show_index: 63,
            price_info: {
              split_price_text: ["$", "329", ".29", ""],
              reduction_text: ["-15", "%"],
              price: 32929,
              market_price_str: "$388.08",
              market_price: 38808,
              price_schema: "329.29",
              currency: "USD",
              price_text: ["$", "329.29", ""],
              price_str: "$329.29",
              price_color: "#FB7701",
              reduction: 150,
              market_price_text: ["$", "388.08", ""],
            },
            image: {
              width: 1080,
              id: 205680377194,
              url_id: "85268561130553830",
              url: "https://img.kwcdn.com/local-goods-image/20150c22e52/16e9e454-4252-41fd-b9eb-fd289cad51d3_1080x1080.jpeg.format.jpg",
              height: 1080,
            },
            sales_tip: "12 sold",
            visible: true,
            goods_id: 602699420549493,
            opt_id: 2661,
            display_end_time: 1764403199,
            seo_link_url:
              "/--14-plus-128gb-unlocked-good-condition-aftermarket-screen-message-g-602699420549493.html?&_oak_mp_inf=EPWC%2BabuhIkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c22e52%2F16e9e454-4252-41fd-b9eb-fd289cad51d3_1080x1080.jpeg.format.jpg&spec_gallery_id=205680377194&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI5Mjk&_oak_gallery_order=1996365454%2C103947120%2C583450379",
            queryReleScore: 0.0,
            sales_tip_text: ["12", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.5,
              hidden_comment: true,
              comment_num_tips: "2",
            },
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/2066d9156e/a1a65449-87a7-41fe-b408-6ea2abf404bd_800x800.png",
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "iphone 16 pro 256gb 128gb fully unlocked   premium used  ",
            current_sku_id: 52061982950158,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "8 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 8 left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "iPhone 16 Pro 256GB/128GB - FULLY UNLOCKED - (RENEWED PREMIUM) - USED LIKE NEW",
            sales_tip_text_list: ["2", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "545154405",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXBP+WT4OLoNcs1Uar51loq7jCkMP+/9TJJ3EGoM31iNJyBNt5p6rKPNQpi2/rwpbBMQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "6844440880657470276",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "545154405",
              g: "602253012355155",
              scene_id: "3",
              show_price: "81552",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "64",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "8859909981754193413",
              ts: "1762536754873",
            },
            mall_id: 741070851728255,
            sales_num: "2",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602253012355155&_oak_mp_inf=ENOQ96bv94gBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d9156e%2Fa1a65449-87a7-41fe-b408-6ea2abf404bd_800x800.png&spec_gallery_id=602253012355155&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=ODE1NTI&_oak_gallery_order=545154405%2C1599945856",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=602253012355155&_oak_mp_inf=ENOQ96bv94gBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d9156e%2Fa1a65449-87a7-41fe-b408-6ea2abf404bd_800x800.png&spec_gallery_id=602253012355155&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=ODE1NTI&_oak_gallery_order=545154405%2C1599945856&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "545154405,1599945856",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "8 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 8 left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 64,
            price_info: {
              split_price_text: ["$", "815", ".52", ""],
              reduction_text: [],
              price: 81552,
              price_schema: "815.52",
              currency: "USD",
              price_text: ["$", "815.52", ""],
              price_str: "$815.52",
            },
            image: {
              width: 375,
              id: 602253012355155,
              url_id: "6844440880657470276",
              url: "https://img.kwcdn.com/local-goods-image/2066d9156e/a1a65449-87a7-41fe-b408-6ea2abf404bd_800x800.png",
              height: 375,
            },
            sales_tip: "2 sold",
            visible: true,
            goods_id: 602253012355155,
            opt_id: 2661,
            seo_link_url:
              "/iphone-16-pro-256gb-128gb-fully-unlocked--premium-used--g-602253012355155.html?&_oak_mp_inf=ENOQ96bv94gBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d9156e%2Fa1a65449-87a7-41fe-b408-6ea2abf404bd_800x800.png&spec_gallery_id=602253012355155&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=ODE1NTI&_oak_gallery_order=545154405%2C1599945856",
            queryReleScore: 0.0,
            sales_tip_text: ["2", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 5.0,
              hidden_comment: true,
              comment_num_tips: "1",
            },
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/2066d9156e/88753bdf-52b0-4a82-ada5-927b0977dd28_800x800.jpeg.format.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "  iphone 16 pro max 256gb fully unlocked white titanium  ",
            current_sku_id: 36969467915839,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "8 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 8 left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "2",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Very Good",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Apple iPhone 16 Pro Max, 256GB, Fully Unlocked, White Titanium - ( Renewed )",
            sales_tip_text_list: ["2", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "813469931",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXBuHK8yKEUfLRzETdxhiZJv0mJuMy6oNccGypeaWdbD4ihxb5Rpf2IboQ9foVlStWoQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "6759280266000925797",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "813469931",
              g: "602746799410327",
              scene_id: "3",
              show_price: "94965",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "65",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "2259958642346107783",
              ts: "1762536754873",
            },
            mall_id: 741070851595181,
            sales_num: "2",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602746799410327&_oak_mp_inf=EJeZ%2BeaehokBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d9156e%2F88753bdf-52b0-4a82-ada5-927b0977dd28_800x800.jpeg.format.jpg&spec_gallery_id=213889355465&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=OTQ5NjU&_oak_gallery_order=813469931",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "813469931",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "8 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 8 left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "2",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Very Good",
                tag_series: 2,
              },
            ],
            show_index: 65,
            price_info: {
              split_price_text: ["$", "949", ".65", ""],
              reduction_text: [],
              price: 94965,
              price_schema: "949.65",
              currency: "USD",
              price_text: ["$", "949.65", ""],
              price_str: "$949.65",
            },
            image: {
              width: 800,
              id: 213889355465,
              url_id: "6759280266000925797",
              url: "https://img.kwcdn.com/local-goods-image/2066d9156e/88753bdf-52b0-4a82-ada5-927b0977dd28_800x800.jpeg.format.jpg",
              height: 800,
            },
            sales_tip: "2 sold",
            visible: true,
            goods_id: 602746799410327,
            opt_id: 2661,
            seo_link_url:
              "/-iphone-16-pro-max-256gb-fully-unlocked-white-titanium--g-602746799410327.html?&_oak_mp_inf=EJeZ%2BeaehokBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d9156e%2F88753bdf-52b0-4a82-ada5-927b0977dd28_800x800.jpeg.format.jpg&spec_gallery_id=213889355465&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=OTQ5NjU&_oak_gallery_order=813469931",
            queryReleScore: 0.0,
            sales_tip_text: ["2", "sold"],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/product/open/99a46c5303aa47548d4ac477b320bfcd-goods.jpeg",
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "  Unlock Smartphone - 6.8-inch HD Display, 8GB+256GB/ 12GB+512GB Storage,   Support, 5G  , USB-C Fast Charging Technology, Touchscreen Design, Ideal Gift for Holidays and Birthdays, Mobile Accessory, Large Display Phone",
            current_sku_id: 17617172929986,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
            },
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/goods-video/56a766e97ae2c255b512241cfe3142155ed9fb17.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/open/99a46c5303aa47548d4ac477b320bfcd-goods.jpeg",
              url: "https://img.kwcdn.com/product/c9fdda64a49693f8d48abc6ce8dc3993259697b7.goods.000001.jpeg",
            },
            title:
              "Android Unlock Smartphone - 6.8-inch HD Display, 8GB+256GB/ 12GB+512GB Storage, Dual SIM Support, 5G Compatibility, USB-C Fast Charging Technology, Touchscreen Design, Ideal Gift for Holidays and Birthdays, Mobile Accessory, Large Display Phone",
            sales_tip_text_list: ["3", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "582220747",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXBOOEPZF4Fw+9kzS0UBESzZvjB/kcdbQXOP16TjaHmFOgp4En5rAwSauPJ5CyuQZqUQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "3033980820932848277",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "582220747",
              g: "601104937736065",
              scene_id: "3",
              show_price: "3645",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "66",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "1240184040190663050",
              ts: "1762536754874",
            },
            mall_id: 634418223809359,
            sales_num: "3",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601104937736065&_oak_mp_inf=EIGvpbK61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F99a46c5303aa47548d4ac477b320bfcd-goods.jpeg&spec_gallery_id=216391953081&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY0NQ&_oak_gallery_order=582220747%2C919621909%2C127989518%2C781473378%2C905342961",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601104937736065&_oak_mp_inf=EIGvpbK61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F99a46c5303aa47548d4ac477b320bfcd-goods.jpeg&spec_gallery_id=216391953081&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY0NQ&_oak_gallery_order=582220747%2C919621909%2C127989518%2C781473378%2C905342961&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "582220747,919621909,127989518,781473378,905342961",
              },
            },
            goods_tags: [],
            show_index: 66,
            price_info: {
              split_price_text: ["$", "36", ".45", ""],
              reduction_text: [],
              price: 3645,
              price_schema: "36.45",
              currency: "USD",
              price_text: ["$", "36.45", ""],
              price_str: "$36.45",
            },
            image: {
              width: 800,
              id: 216391953081,
              url_id: "3033980820932848277",
              url: "https://img.kwcdn.com/product/open/99a46c5303aa47548d4ac477b320bfcd-goods.jpeg",
              height: 800,
            },
            sales_tip: "3 sold",
            visible: true,
            goods_id: 601104937736065,
            opt_id: 2661,
            seo_link_url:
              "/-unlock-smartphone-6-8-inch-hd-display-8gb-256gb-12gb-512gb-storage--support-5g--usb-c-fast-charging-technology-touchscreen-design-ideal-gift-for-holidays-and-birthdays-mobile-accessory-large-display-phone-g-601104937736065.html?&_oak_mp_inf=EIGvpbK61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F99a46c5303aa47548d4ac477b320bfcd-goods.jpeg&spec_gallery_id=216391953081&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY0NQ&_oak_gallery_order=582220747%2C919621909%2C127989518%2C781473378%2C905342961",
            queryReleScore: 0.0,
            sales_tip_text: ["3", "sold"],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/3db9c195/9e2673cb-830e-4ef4-93f2-594604465a4d.jpeg",
            after_price_tip_text: ["47", "viewed"],
            ware_house_type: 1,
            benefit_text: {
              text: "-18%",
            },
            item_type: 0,
            page_alt: "   25: Unlocked, 128GB Storage,   (Refurbished  )",
            current_sku_id: 49922015556523,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"SAMSUNG","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: SAMSUNG",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "2",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Very Good",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Samsung Galaxy S25: Unlocked, 128GB Storage, Silver Shadow (Refurbished Excellent)",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1532332272",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXDv4BA4wVlnI1XTLeVkmUQShDo0piTyf2wNpdDOxzMPg69I6XvfiTb8V7ws3+OnvVoQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "903730205420575266",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1532332272",
              g: "602443467318185",
              scene_id: "3",
              show_price: "42514",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "67",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "2046401269097938463",
              ts: "1762536754874",
            },
            mall_id: 741070851677687,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602443467318185&_oak_mp_inf=EKnH9%2Ba0%2FYgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F3db9c195%2F9e2673cb-830e-4ef4-93f2-594604465a4d.jpeg&spec_gallery_id=216115262903&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDI1MTQ&_oak_gallery_order=1532332272%2C595171374%2C814718782%2C1380668662",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1532332272,595171374,814718782,1380668662",
              },
            },
            goods_tags: [
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "2",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Very Good",
                tag_series: 2,
              },
            ],
            show_index: 67,
            price_info: {
              split_price_text: ["$", "425", ".14", ""],
              reduction_text: ["-18", "%"],
              price: 42514,
              market_price_str: "$519.00",
              market_price: 51900,
              price_schema: "425.14",
              currency: "USD",
              price_text: ["$", "425.14", ""],
              price_str: "$425.14",
              market_price_text: ["$", "519.00", ""],
            },
            image: {
              width: 800,
              id: 216115262903,
              url_id: "903730205420575266",
              url: "https://img.kwcdn.com/local-goods-image/3db9c195/9e2673cb-830e-4ef4-93f2-594604465a4d.jpeg",
              height: 800,
            },
            sales_tip: "",
            visible: true,
            goods_id: 602443467318185,
            opt_id: 2661,
            seo_link_url:
              "/-25-unlocked-128gb-storage--refurbished--g-602443467318185.html?&_oak_mp_inf=EKnH9%2Ba0%2FYgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F3db9c195%2F9e2673cb-830e-4ef4-93f2-594604465a4d.jpeg&spec_gallery_id=216115262903&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDI1MTQ&_oak_gallery_order=1532332272%2C595171374%2C814718782%2C1380668662",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/6cc44bce/f803ebdc-c72f-4ab9-8c1c-183d500e7dfb/3c9c80e060508c154df97019ca7de5d9.jpeg.a.jpeg",
            after_price_tip_text: ["In", "8", "carts"],
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt: "    15 128gb black",
            current_sku_id: 51419885375870,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "2",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Very Good",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title: "Apple iPhone 15, 128GB, Black",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1398642149",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXCRNd7tv4g9RnkHvVEW7zqF0dvGT35KeYLNT8MLPIwmIPFcXIDaM41NwnFAw1GMM8YQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "2528364003781659213",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1398642149",
              g: "603212568458763",
              scene_id: "3",
              show_price: "52580",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "68",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "1587649214444822767",
              ts: "1762536754874",
            },
            mall_id: 741070850449920,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=603212568458763&_oak_mp_inf=EIvs9%2Fblk4kBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F6cc44bce%2Ff803ebdc-c72f-4ab9-8c1c-183d500e7dfb%2F3c9c80e060508c154df97019ca7de5d9.jpeg.a.jpeg&spec_gallery_id=206415143861&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTI1ODA&_oak_gallery_order=1398642149",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1398642149",
              },
            },
            goods_tags: [
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "2",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Very Good",
                tag_series: 2,
              },
            ],
            show_index: 68,
            price_info: {
              split_price_text: ["$", "525", ".80", ""],
              reduction_text: [],
              price: 52580,
              price_schema: "525.80",
              currency: "USD",
              price_text: ["$", "525.80", ""],
              price_str: "$525.80",
            },
            image: {
              width: 1600,
              id: 206415143861,
              url_id: "2528364003781659213",
              url: "https://img.kwcdn.com/local-goods-image/6cc44bce/f803ebdc-c72f-4ab9-8c1c-183d500e7dfb/3c9c80e060508c154df97019ca7de5d9.jpeg.a.jpeg",
              height: 1600,
            },
            sales_tip: "",
            visible: true,
            goods_id: 603212568458763,
            opt_id: 2661,
            seo_link_url:
              "/--15-128gb-black-g-603212568458763.html?&_oak_mp_inf=EIvs9%2Fblk4kBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII2dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F6cc44bce%2Ff803ebdc-c72f-4ab9-8c1c-183d500e7dfb%2F3c9c80e060508c154df97019ca7de5d9.jpeg.a.jpeg&spec_gallery_id=206415143861&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTI1ODA&_oak_gallery_order=1398642149",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/d466158f/8ad0a3a6-882e-46eb-a24d-1c0eb70f2787/d3ac3c97aed2fd58305cf8becd9db646.jpeg.a.jpeg",
            ware_house_type: 1,
            benefit_text: {
              text: "-10%",
            },
            item_type: 0,
            page_alt: "    12 mini 128  unlocked  ",
            current_sku_id: 46420543459911,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "1",
                    lowest_price_before_title: "Lowest ever",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price ever",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title: "Apple iPhone 12 Mini, 128GB, White - Unlocked (Renewed)",
            sales_tip_text_list: ["22", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1500908466",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXDALDwboPAkpjVSa2OaHA/sJHV4eLU1c+Ie+rq9FUfcgNrl5iTpgyw4RbfYd5MLH0YQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "6436259281043902266",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1500908466",
              g: "602718647235198",
              scene_id: "3",
              show_price: "18813",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "69",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "8984529923367305145",
              ts: "1762536754874",
            },
            mall_id: 741070851352760,
            sales_num: "22",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602718647235198&_oak_mp_inf=EP7k%2BPa1hYkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII6dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2Fd466158f%2F8ad0a3a6-882e-46eb-a24d-1c0eb70f2787%2Fd3ac3c97aed2fd58305cf8becd9db646.jpeg.a.jpeg&spec_gallery_id=206525571024&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg4MTM&_oak_gallery_order=1500908466%2C1635435499%2C2131854899",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1500908466,1635435499,2131854899",
              },
            },
            goods_tags: [
              {
                color: "#555555",
                ext_map: {
                  lowest_tag_up_flag: "1",
                  lowest_price_before_title: "Lowest ever",
                },
                marketing_tag_type: 1000,
                tag_id: 91048,
                text: "Lowest price ever",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 69,
            price_info: {
              split_price_text: ["$", "188", ".13", ""],
              reduction_text: ["-10", "%"],
              price: 18813,
              market_price_str: "$210.00",
              market_price: 21000,
              price_schema: "188.13",
              currency: "USD",
              price_text: ["$", "188.13", ""],
              price_str: "$188.13",
              market_price_text: ["$", "210.00", ""],
            },
            image: {
              width: 800,
              id: 206525571024,
              url_id: "6436259281043902266",
              url: "https://img.kwcdn.com/local-goods-image/d466158f/8ad0a3a6-882e-46eb-a24d-1c0eb70f2787/d3ac3c97aed2fd58305cf8becd9db646.jpeg.a.jpeg",
              height: 800,
            },
            sales_tip: "22 sold",
            visible: true,
            goods_id: 602718647235198,
            opt_id: 2661,
            seo_link_url:
              "/--12-mini-128-unlocked--g-602718647235198.html?&_oak_mp_inf=EP7k%2BPa1hYkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII6dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2Fd466158f%2F8ad0a3a6-882e-46eb-a24d-1c0eb70f2787%2Fd3ac3c97aed2fd58305cf8becd9db646.jpeg.a.jpeg&spec_gallery_id=206525571024&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg4MTM&_oak_gallery_order=1500908466%2C1635435499%2C2131854899",
            queryReleScore: 0.0,
            sales_tip_text: ["22", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 5.0,
              hidden_comment: true,
              comment_num_tips: "5",
            },
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20ef5f4770/b793a81e-2783-4ed6-8f9d-5bfd89678ff6_1500x1500.jpeg.format.jpg",
            after_price_tip_text: ["In", "377", "carts"],
            ware_house_type: 1,
            benefit_text: {
              text: "-6%",
            },
            item_type: 0,
            page_alt: "    16 128gb   fully unlocked  ",
            current_sku_id: 47357920031591,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "8 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 8 left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Apple iPhone 16, 128GB, Ultramarine- Fully Unlocked (Renewed)",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "2029019612",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXAZU0ClUtK5frorBAmBarsgfMiTT5rem3kCgp9pK9HrOChxb5Rpf2IboQ9foVlStWoQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "7546096727016263011",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "2029019612",
              g: "602541312051377",
              scene_id: "3",
              show_price: "63848",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "70",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "8034749325588057355",
              ts: "1762536754874",
            },
            mall_id: 741070851595181,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602541312051377&_oak_mp_inf=ELGR%2BKahgIkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII6dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20ef5f4770%2Fb793a81e-2783-4ed6-8f9d-5bfd89678ff6_1500x1500.jpeg.format.jpg&spec_gallery_id=213779519748&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjM4NDg&_oak_gallery_order=2029019612",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "2029019612",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "8 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 8 left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 70,
            price_info: {
              split_price_text: ["$", "638", ".48", ""],
              reduction_text: ["-6", "%"],
              price: 63848,
              market_price_str: "$680.00",
              market_price: 68000,
              price_schema: "638.48",
              currency: "USD",
              price_text: ["$", "638.48", ""],
              price_str: "$638.48",
              market_price_text: ["$", "680.00", ""],
            },
            image: {
              width: 1500,
              id: 213779519748,
              url_id: "7546096727016263011",
              url: "https://img.kwcdn.com/local-goods-image/20ef5f4770/b793a81e-2783-4ed6-8f9d-5bfd89678ff6_1500x1500.jpeg.format.jpg",
              height: 1500,
            },
            sales_tip: "",
            visible: true,
            goods_id: 602541312051377,
            opt_id: 2661,
            seo_link_url:
              "/--16-128gb--fully-unlocked--g-602541312051377.html?&_oak_mp_inf=ELGR%2BKahgIkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII6dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20ef5f4770%2Fb793a81e-2783-4ed6-8f9d-5bfd89678ff6_1500x1500.jpeg.format.jpg&spec_gallery_id=213779519748&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjM4NDg&_oak_gallery_order=2029019612",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20150c215d2/5c3b5a59-4172-467e-aa12-d2914fd5de48_800x800.jpeg.format.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "-35%",
            },
            item_type: 0,
            page_alt:
              "  iphone 14 pro max 128gb factory unlocked smartphone     6 7   xdr display   chip pro camera system     compatible great condition with original box works with       more",
            current_sku_id: 52044803092255,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "2",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Very Good",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Apple iPhone 14 Pro Max 128GB Factory Unlocked Smartphone – All Colors Available – 6.7” Super Retina XDR Display, A16 Bionic Chip, Pro Camera System, 5G Ready, iOS 17 Compatible – Great Condition with Original Box – Works with AT&T, Verizon, T-Mobile & More",
            sales_tip_text_list: ["4", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "707434814",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXDAQCxUnrlliOrGlqwsuOOqTHoBmrLgYKbvyPUjlydt00I5B6d+xzoecvXmyE+hefMQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "7130922414548932951",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "707434814",
              g: "602593388502009",
              scene_id: "3",
              show_price: "51507",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "71",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "7574934740159655455",
              ts: "1762536754874",
            },
            mall_id: 741070851836097,
            sales_num: "4",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602593388502009&_oak_mp_inf=EPm39qbjgYkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII6dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c215d2%2F5c3b5a59-4172-467e-aa12-d2914fd5de48_800x800.jpeg.format.jpg&spec_gallery_id=212242861239&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTE1MDc&_oak_gallery_order=707434814%2C1133050324%2C236950492%2C991257661%2C889108672",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=602593388502009&_oak_mp_inf=EPm39qbjgYkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII6dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c215d2%2F5c3b5a59-4172-467e-aa12-d2914fd5de48_800x800.jpeg.format.jpg&spec_gallery_id=212242861239&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTE1MDc&_oak_gallery_order=707434814%2C1133050324%2C236950492%2C991257661%2C889108672&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "707434814,1133050324,236950492,991257661,889108672",
              },
            },
            goods_tags: [
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "2",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Very Good",
                tag_series: 2,
              },
            ],
            show_index: 71,
            price_info: {
              split_price_text: ["$", "515", ".07", ""],
              reduction_text: ["-35", "%"],
              price: 51507,
              market_price_str: "$799.99",
              market_price: 79999,
              price_schema: "515.07",
              currency: "USD",
              price_text: ["$", "515.07", ""],
              price_str: "$515.07",
              market_price_text: ["$", "799.99", ""],
            },
            image: {
              width: 800,
              id: 212242861239,
              url_id: "7130922414548932951",
              url: "https://img.kwcdn.com/local-goods-image/20150c215d2/5c3b5a59-4172-467e-aa12-d2914fd5de48_800x800.jpeg.format.jpg",
              height: 800,
            },
            sales_tip: "4 sold",
            visible: true,
            goods_id: 602593388502009,
            opt_id: 2661,
            seo_link_url:
              "/-iphone-14-pro-max-128gb-factory-unlocked-smartphone---6-7--xdr-display--chip-pro-camera-system---compatible-great-condition-with-original-box-works-with----more-g-602593388502009.html?&_oak_mp_inf=EPm39qbjgYkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII6dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c215d2%2F5c3b5a59-4172-467e-aa12-d2914fd5de48_800x800.jpeg.format.jpg&spec_gallery_id=212242861239&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTE1MDc&_oak_gallery_order=707434814%2C1133050324%2C236950492%2C991257661%2C889108672",
            queryReleScore: 0.0,
            sales_tip_text: ["4", "sold"],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/product/open/a410f62c007e49b08422d3aff388e3e5-goods.jpeg",
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "Smartphone,   with   System, 8GB + 256GB Memory Configuration,   with a Touch Pen/ Type-C Charging Cable, Protective Case, Headphones, Including Screen Protector., Smartphone for Work, Productivity Phone, Work Smartphone, Modern",
            current_sku_id: 17617165785315,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
            },
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/goods-video/2d85633f6ecceb4181c2288f2bec1ae4295dc3e7.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/open/a410f62c007e49b08422d3aff388e3e5-goods.jpeg",
              url: "https://img.kwcdn.com/product/623ea1e39f1445ffa517ecc57b10981686e49502.goods.000001.jpeg",
            },
            title:
              "Smartphone, Equipped with Android System, 8GB + 256GB Memory Configuration, Comes with a Touch Pen/ Type-C Charging Cable, Protective Case, Headphones, Including Screen Protector., Smartphone for Work, Productivity Phone, Work Smartphone, Modern",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "514082060",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXBOOEPZF4Fw+9kzS0UBESzZvjB/kcdbQXOP16TjaHmFOgp4En5rAwSauPJ5CyuQZqUQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "2704085480545094253",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "514082060",
              g: "601104935851919",
              scene_id: "3",
              show_price: "3637",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "72",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "4571897755546976749",
              ts: "1762536754874",
            },
            mall_id: 634418223809359,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601104935851919&_oak_mp_inf=EI%2BvsrG61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII6dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fa410f62c007e49b08422d3aff388e3e5-goods.jpeg&spec_gallery_id=216350654341&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzYzNw&_oak_gallery_order=514082060%2C115618582%2C684752257%2C1379820343%2C1653225268",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601104935851919&_oak_mp_inf=EI%2BvsrG61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII6dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fa410f62c007e49b08422d3aff388e3e5-goods.jpeg&spec_gallery_id=216350654341&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzYzNw&_oak_gallery_order=514082060%2C115618582%2C684752257%2C1379820343%2C1653225268&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "514082060,115618582,684752257,1379820343,1653225268",
              },
            },
            goods_tags: [],
            show_index: 72,
            price_info: {
              split_price_text: ["$", "36", ".37", ""],
              reduction_text: [],
              price: 3637,
              price_schema: "36.37",
              currency: "USD",
              price_text: ["$", "36.37", ""],
              price_str: "$36.37",
            },
            image: {
              width: 800,
              id: 216350654341,
              url_id: "2704085480545094253",
              url: "https://img.kwcdn.com/product/open/a410f62c007e49b08422d3aff388e3e5-goods.jpeg",
              height: 800,
            },
            sales_tip: "",
            visible: true,
            goods_id: 601104935851919,
            opt_id: 2661,
            seo_link_url:
              "/smartphone--with--system-8gb-256gb-memory-configuration--with-a-touch-pen-type-c-charging-cable-protective-case-headphones-including-screen-protector-smartphone-for-work-productivity-phone-work-smartphone-modern-g-601104935851919.html?&_oak_mp_inf=EI%2BvsrG61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII6dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fa410f62c007e49b08422d3aff388e3e5-goods.jpeg&spec_gallery_id=216350654341&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzYzNw&_oak_gallery_order=514082060%2C115618582%2C684752257%2C1379820343%2C1653225268",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/2066d90958/8efb9ca1-82ab-4bb7-b21f-fca49e70b492_976x976.jpeg.format.jpg",
            after_price_tip_text: ["In", "13", "carts"],
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt: "  iphone 14 pro max 128gb  ",
            current_sku_id: 35246112267285,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title: "Apple ‌iPhone 14 Pro Max, 128GB, Space Black",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "2070158633",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXDsnev7nThBfmehHzFhigUUUyospub3P5HWU759GBpUbYv8tdPxZp5jsqVNjb812goQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "8651577658805559305",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "2070158633",
              g: "602894975739402",
              scene_id: "3",
              show_price: "53653",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "73",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "2540940619844196849",
              ts: "1762536754874",
            },
            mall_id: 741070850278600,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602894975739402&_oak_mp_inf=EIrM9ubGiokBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII6dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d90958%2F8efb9ca1-82ab-4bb7-b21f-fca49e70b492_976x976.jpeg.format.jpg&spec_gallery_id=215844132748&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTM2NTM&_oak_gallery_order=2070158633%2C934291951%2C983368117%2C484526542",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "2070158633,934291951,983368117,484526542",
              },
            },
            goods_tags: [
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 73,
            price_info: {
              split_price_text: ["$", "536", ".53", ""],
              reduction_text: [],
              price: 53653,
              price_schema: "536.53",
              currency: "USD",
              price_text: ["$", "536.53", ""],
              price_str: "$536.53",
            },
            image: {
              width: 976,
              id: 215844132748,
              url_id: "8651577658805559305",
              url: "https://img.kwcdn.com/local-goods-image/2066d90958/8efb9ca1-82ab-4bb7-b21f-fca49e70b492_976x976.jpeg.format.jpg",
              height: 976,
            },
            sales_tip: "",
            visible: true,
            goods_id: 602894975739402,
            opt_id: 2661,
            seo_link_url:
              "/-e2-80-8ciphone-14-pro-max-128gb--g-602894975739402.html?&_oak_mp_inf=EIrM9ubGiokBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII6dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d90958%2F8efb9ca1-82ab-4bb7-b21f-fca49e70b492_976x976.jpeg.format.jpg&spec_gallery_id=215844132748&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTM2NTM&_oak_gallery_order=2070158633%2C934291951%2C983368117%2C484526542",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/2496541/b73428d8-ca4b-46be-a59b-fecb06c95bdb/9334c3dd6b44aed47620240ffd676af5.jpeg.a.jpeg",
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt: "  iphone 12 pro 5g us version 256gb graphite unlocked  ",
            current_sku_id: 47193637561945,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "1",
                    lowest_price_before_title: "Lowest ever",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price ever",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "1",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Like New",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Apple iPhone 12 Pro 5G, US Version, 256GB, Graphite - Unlocked (Renewed)",
            sales_tip_text_list: ["7", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1173818808",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXCi4Cnco0oVLhPRpxdwhK4uPNSIaAwKt0fKxwkiEEllKCQuo5ddYW02z42vLk7b9CMQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "344016631291049151",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1173818808",
              g: "602658618341756",
              scene_id: "3",
              show_price: "30799",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "74",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "5522010749730617698",
              ts: "1762536754874",
            },
            mall_id: 741070851352760,
            sales_num: "7",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602658618341756&_oak_mp_inf=EPzy96bWg4kBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII6dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2496541%2Fb73428d8-ca4b-46be-a59b-fecb06c95bdb%2F9334c3dd6b44aed47620240ffd676af5.jpeg.a.jpeg&spec_gallery_id=206525230450&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzA3OTk&_oak_gallery_order=1173818808%2C756295928%2C1247575280%2C1908625954",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "1173818808,756295928,1247575280,1908625954",
              },
            },
            goods_tags: [
              {
                color: "#555555",
                ext_map: {
                  lowest_tag_up_flag: "1",
                  lowest_price_before_title: "Lowest ever",
                },
                marketing_tag_type: 1000,
                tag_id: 91048,
                text: "Lowest price ever",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "1",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Like New",
                tag_series: 2,
              },
            ],
            show_index: 74,
            price_info: {
              split_price_text: ["$", "307", ".99", ""],
              reduction_text: [],
              price: 30799,
              price_schema: "307.99",
              currency: "USD",
              price_text: ["$", "307.99", ""],
              price_str: "$307.99",
            },
            image: {
              width: 800,
              id: 206525230450,
              url_id: "344016631291049151",
              url: "https://img.kwcdn.com/local-goods-image/2496541/b73428d8-ca4b-46be-a59b-fecb06c95bdb/9334c3dd6b44aed47620240ffd676af5.jpeg.a.jpeg",
              height: 800,
            },
            sales_tip: "7 sold",
            visible: true,
            goods_id: 602658618341756,
            opt_id: 2661,
            seo_link_url:
              "/-iphone-12-pro-5g-us-version-256gb-graphite-unlocked--g-602658618341756.html?&_oak_mp_inf=EPzy96bWg4kBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII6dgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2496541%2Fb73428d8-ca4b-46be-a59b-fecb06c95bdb%2F9334c3dd6b44aed47620240ffd676af5.jpeg.a.jpeg&spec_gallery_id=206525230450&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzA3OTk&_oak_gallery_order=1173818808%2C756295928%2C1247575280%2C1908625954",
            queryReleScore: 0.0,
            sales_tip_text: ["7", "sold"],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20ef5f17a0/a7732f7c-dc3f-47aa-a9e3-bed41e1879df_1200x1200.jpeg.format.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "-10%",
            },
            item_type: 0,
            page_alt: "  iphone 16 pro 128gb fully unlocked desert titanium  ",
            current_sku_id: 48168595121897,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "9 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 9 left",
                  tag_series: 2,
                },
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "1",
                    lowest_price_before_title: "Lowest ever",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price ever",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "3",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Good",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Apple iPhone 16 Pro, 128GB, Fully Unlocked, Desert Titanium - ( Renewed )",
            sales_tip_text_list: ["1", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1947259806",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXCU5oKtf0nkYqG7FAoXMYpxFGWUkaheQnL6eHF22Rybt0sqAjohlWVp/lrymR3tOAIQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "3154564339492463737",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1947259806",
              g: "602836322602140",
              scene_id: "3",
              show_price: "75114",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "75",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "1169214971033562023",
              ts: "1762536754874",
            },
            mall_id: 741070851595181,
            sales_num: "1",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602836322602140&_oak_mp_inf=EJyZ96bsiIkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII%2BdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20ef5f17a0%2Fa7732f7c-dc3f-47aa-a9e3-bed41e1879df_1200x1200.jpeg.format.jpg&spec_gallery_id=209657616516&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NzUxMTQ&_oak_gallery_order=1947259806",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1947259806",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "9 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 9 left",
                tag_series: 2,
              },
              {
                color: "#555555",
                ext_map: {
                  lowest_tag_up_flag: "1",
                  lowest_price_before_title: "Lowest ever",
                },
                marketing_tag_type: 1000,
                tag_id: 91048,
                text: "Lowest price ever",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "3",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Good",
                tag_series: 2,
              },
            ],
            show_index: 75,
            price_info: {
              split_price_text: ["$", "751", ".14", ""],
              reduction_text: ["-10", "%"],
              price: 75114,
              market_price_str: "$840.00",
              market_price: 84000,
              price_schema: "751.14",
              currency: "USD",
              price_text: ["$", "751.14", ""],
              price_str: "$751.14",
              market_price_text: ["$", "840.00", ""],
            },
            image: {
              width: 1200,
              id: 209657616516,
              url_id: "3154564339492463737",
              url: "https://img.kwcdn.com/local-goods-image/20ef5f17a0/a7732f7c-dc3f-47aa-a9e3-bed41e1879df_1200x1200.jpeg.format.jpg",
              height: 1200,
            },
            sales_tip: "1 sold",
            visible: true,
            goods_id: 602836322602140,
            opt_id: 2661,
            seo_link_url:
              "/-iphone-16-pro-128gb-fully-unlocked-desert-titanium--g-602836322602140.html?&_oak_mp_inf=EJyZ96bsiIkBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII%2BdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20ef5f17a0%2Fa7732f7c-dc3f-47aa-a9e3-bed41e1879df_1200x1200.jpeg.format.jpg&spec_gallery_id=209657616516&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NzUxMTQ&_oak_gallery_order=1947259806",
            queryReleScore: 0.0,
            sales_tip_text: ["1", "sold"],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/product/open/8d7e4750aafa4a8fa791a4f90b5d5501-goods.jpeg",
            after_price_tip_text: ["1", "viewed"],
            ware_house_type: 1,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "New   Smartphone, 8GB + 256GB Storage Space, Built- , an Ideal Gift for Thanksgiving And Christmas, a Smartphone | Modern Phone Design |, Smartphone for Professional, Foldable Phone, Work From Home, Travel Phone, Stylish Mobile",
            current_sku_id: 17617165468999,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "New Android Smartphone, 8GB + 256GB Storage Space, Built-In Stylus, an Ideal Gift for Thanksgiving And Christmas, a Smartphone | Modern Phone Design |, Smartphone for Professional, Foldable Phone, Work From Home, Travel Phone, Stylish Mobile",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "115618582",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXBOOEPZF4Fw+9kzS0UBESzZvjB/kcdbQXOP16TjaHmFOgp4En5rAwSauPJ5CyuQZqUQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "6158174931197518256",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "115618582",
              g: "601104935846057",
              scene_id: "3",
              show_price: "3633",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "76",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "3132494592068613034",
              ts: "1762536754874",
            },
            mall_id: 634418223809359,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601104935846057&_oak_mp_inf=EKmBsrG61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII%2BdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F8d7e4750aafa4a8fa791a4f90b5d5501-goods.jpeg&spec_gallery_id=216346667918&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzYzMw&_oak_gallery_order=115618582%2C514082060%2C684752257%2C1235818723%2C905342961",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601104935846057&_oak_mp_inf=EKmBsrG61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII%2BdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F8d7e4750aafa4a8fa791a4f90b5d5501-goods.jpeg&spec_gallery_id=216346667918&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzYzMw&_oak_gallery_order=115618582%2C514082060%2C684752257%2C1235818723%2C905342961&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "115618582,514082060,684752257,1235818723,905342961",
              },
            },
            goods_tags: [],
            show_index: 76,
            price_info: {
              split_price_text: ["$", "36", ".33", ""],
              reduction_text: [],
              price: 3633,
              price_schema: "36.33",
              currency: "USD",
              price_text: ["$", "36.33", ""],
              price_str: "$36.33",
            },
            image: {
              width: 800,
              id: 216346667918,
              url_id: "6158174931197518256",
              url: "https://img.kwcdn.com/product/open/8d7e4750aafa4a8fa791a4f90b5d5501-goods.jpeg",
              height: 800,
            },
            sales_tip: "",
            visible: true,
            goods_id: 601104935846057,
            opt_id: 2661,
            seo_link_url:
              "/new--smartphone-8gb-256gb-storage-space-built--an-ideal-gift-for-thanksgiving-and-christmas-a-smartphone-modern-phone-design-smartphone-for-professional-foldable-phone-work-from--phone-stylish-mobile-g-601104935846057.html?&_oak_mp_inf=EKmBsrG61ogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII%2BdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F8d7e4750aafa4a8fa791a4f90b5d5501-goods.jpeg&spec_gallery_id=216346667918&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzYzMw&_oak_gallery_order=115618582%2C514082060%2C684752257%2C1235818723%2C905342961",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/2066d91998/9e391e7b-5f4e-493a-ab85-215bdd2a5a34_800x800.png",
            ware_house_type: 1,
            benefit_text: {
              text: "-29%",
            },
            item_type: 0,
            page_alt:
              "   25 ultra 512gb unlocked     new factory sealed 5g smartphone 6 8   2x display 200  grade camera   processor   included   long lasting battery us model ships fast from usa",
            current_sku_id: 51292110097056,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"SAMSUNG","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: SAMSUNG",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "5 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 5 left",
                  tag_series: 2,
                },
              ],
            },
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/local-goods-video/dceed3991900035726efd908cd4034ff21744f54.f30.mp4",
              image_url:
                "https://img.kwcdn.com/local-goods-image/2066d91998/9e391e7b-5f4e-493a-ab85-215bdd2a5a34_800x800.png",
              url: "https://img.kwcdn.com/local-goods-image/dfb0199e54cc41dc358354cd18b47f47670138c0.temu.000001.jpeg",
            },
            title:
              "Samsung Galaxy S25 Ultra 512GB Unlocked Titanium Silver Blue – Brand New Factory Sealed 5G Smartphone | 6.8″ Dynamic AMOLED 2X Display | 200MP Pro-Grade Camera | Snapdragon 8 Gen 3 Processor | S Pen Included | Dual SIM | Long-Lasting Battery | US Model | Ships Fast from USA",
            sales_tip_text_list: ["5", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1220527019",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXD2PuJolyOwwLq8Q2u41/+Asu82qP3n/QBQ54ztRAp2BnWX4Eun8VYepiz/Rj4oWbwQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "4904372478239546870",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1220527019",
              g: "602330187534574",
              scene_id: "3",
              show_price: "105550",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "77",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "7761019690900267007",
              ts: "1762536754874",
            },
            mall_id: 741070851836095,
            sales_num: "5",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602330187534574&_oak_mp_inf=EO6h9uaO%2BogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII%2BdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d91998%2F9e391e7b-5f4e-493a-ab85-215bdd2a5a34_800x800.png&spec_gallery_id=214425882967&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA1NTUw&_oak_gallery_order=1220527019%2C1928061960%2C1787394311%2C1272611285%2C1365279167",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "1220527019,1928061960,1787394311,1272611285,1365279167",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "5 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 5 left",
                tag_series: 2,
              },
            ],
            show_index: 77,
            price_info: {
              split_price_text: ["$", "1,055", ".50", ""],
              reduction_text: ["-29", "%"],
              price: 105550,
              market_price_str: "$1,499.99",
              market_price: 149999,
              price_schema: "1055.50",
              currency: "USD",
              price_text: ["$", "1,055.50", ""],
              price_str: "$1,055.50",
              market_price_text: ["$", "1,499.99", ""],
            },
            image: {
              width: 800,
              id: 214425882967,
              url_id: "4904372478239546870",
              url: "https://img.kwcdn.com/local-goods-image/2066d91998/9e391e7b-5f4e-493a-ab85-215bdd2a5a34_800x800.png",
              height: 800,
            },
            sales_tip: "5 sold",
            visible: true,
            goods_id: 602330187534574,
            opt_id: 2661,
            seo_link_url:
              "/-25-ultra-512gb-unlocked---new-factory-sealed-5g-smartphone-6-8--2x-display-200-grade-camera--processor--included--long-lasting-battery-us-model-ships-fast-from-usa-g-602330187534574.html?&_oak_mp_inf=EO6h9uaO%2BogBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII%2BdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d91998%2F9e391e7b-5f4e-493a-ab85-215bdd2a5a34_800x800.png&spec_gallery_id=214425882967&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA1NTUw&_oak_gallery_order=1220527019%2C1928061960%2C1787394311%2C1272611285%2C1365279167",
            queryReleScore: 0.0,
            sales_tip_text: ["5", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.5,
              hidden_comment: true,
              comment_num_tips: "2",
            },
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/20150c205be/e1b64119-a081-424c-bd83-42c8eff56f48_1168x1168.jpeg.format.jpg",
            after_price_tip_text: ["In", "20", "carts"],
            ware_house_type: 1,
            benefit_text: {
              text: "-10%",
            },
            item_type: 0,
            page_alt: "  iphone 15 pro 128gb natural titanium fully unlocked  ",
            current_sku_id: 35753992149364,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "1",
                    lowest_price_before_title: "Lowest ever",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price ever",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "2",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Very Good",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Apple iPhone 15 Pro, 128GB, Natural Titanium - Fully Unlocked (Renewed)",
            sales_tip_text_list: [],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1129507038",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXAGtv8z99Z9lM9Y0wZRKBnB9dBls1pYHbYxSrgFHW9ffRlJ9wbFs9Myk+TE/gufaVIQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "6712492249418336241",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "1129507038",
              g: "602410047112278",
              scene_id: "3",
              show_price: "60629",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "78",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "4977970349326411285",
              ts: "1762536754874",
            },
            mall_id: 741070851595181,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602410047112278&_oak_mp_inf=ENaI%2BKa4%2FIgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII%2BdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c205be%2Fe1b64119-a081-424c-bd83-42c8eff56f48_1168x1168.jpeg.format.jpg&spec_gallery_id=210140344551&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjA2Mjk&_oak_gallery_order=1129507038",
            extend_fields: {
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1129507038",
              },
            },
            goods_tags: [
              {
                color: "#555555",
                ext_map: {
                  lowest_tag_up_flag: "1",
                  lowest_price_before_title: "Lowest ever",
                },
                marketing_tag_type: 1000,
                tag_id: 91048,
                text: "Lowest price ever",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "2",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Very Good",
                tag_series: 2,
              },
            ],
            show_index: 78,
            price_info: {
              split_price_text: ["$", "606", ".29", ""],
              reduction_text: ["-10", "%"],
              price: 60629,
              market_price_str: "$678.54",
              market_price: 67854,
              price_schema: "606.29",
              currency: "USD",
              price_text: ["$", "606.29", ""],
              price_str: "$606.29",
              market_price_text: ["$", "678.54", ""],
            },
            image: {
              width: 1168,
              id: 210140344551,
              url_id: "6712492249418336241",
              url: "https://img.kwcdn.com/local-goods-image/20150c205be/e1b64119-a081-424c-bd83-42c8eff56f48_1168x1168.jpeg.format.jpg",
              height: 1168,
            },
            sales_tip: "",
            visible: true,
            goods_id: 602410047112278,
            opt_id: 2661,
            seo_link_url:
              "/-iphone-15-pro-128gb-natural-titanium-fully-unlocked--g-602410047112278.html?&_oak_mp_inf=ENaI%2BKa4%2FIgBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII%2BdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F20150c205be%2Fe1b64119-a081-424c-bd83-42c8eff56f48_1168x1168.jpeg.format.jpg&spec_gallery_id=210140344551&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjA2Mjk&_oak_gallery_order=1129507038",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            thumb_url:
              "https://img.kwcdn.com/local-goods-image/2066d9156e/8b7d48d0-c70a-431a-9079-14a217b93bdd_800x800.png",
            ware_house_type: 1,
            benefit_text: {
              text: "-28%",
            },
            item_type: 0,
            page_alt: "  iphone 14 pro 128gb unlocked   good",
            current_sku_id: 44191455433855,
            tags_info: {
              title_header_tags: [
                {
                  color: "#0A8800",
                  ext_map: {
                    local_explanation:
                      '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91050,
                  text: "Local",
                  tag_series: 2,
                },
              ],
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"APPLE","brand_authorized_type":3}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: APPLE",
                  tag_series: 2,
                  height: 39,
                },
              ],
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "3 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 3 left",
                  tag_series: 2,
                },
                {
                  color: "#084BF1",
                  ext_map: {
                    second_hand_level: "3",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91129,
                  text: "Used･Good",
                  tag_series: 2,
                },
              ],
            },
            video: {
              video_url: "",
            },
            title: "Apple iPhone 14 Pro, 128GB - Unlocked (Renewed GOOD)",
            sales_tip_text_list: ["13", "sold"],
            p_rec: {
              list_id: "category_list_10cd411f60294fdfb84dbd777a4b09a2",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "841946993",
              sort_by_type: "873027542",
              st_model_point:
                "CoABvlakBstOuTg4+OU0WOnM7NLGGAkJEUlzyZCOPY0g7v3uV9R+AiN/j8fl+BX0ZifOJdBn8zv3nHay9j1V/iWqLdPU465VlDVJlFTD5aFwFXDpombHO9bsvttj2YufNuX7oPs1H2YmY7/9BlmAhOsxFgY0WJ53F6r+Pm3R5EgNEOUQeRhzIiQwNWZjNmI1ZC1kYmNmLTQ3MDctODA5OS0wNWJjNjI0Mjg3MTc=",
              scene: "opt",
              image_url_id: "200415253745587332",
              show_currency: "USD",
              no_result: "0",
              offset: "40",
              engine_creative_id: "841946993",
              g: "602892157216348",
              scene_id: "3",
              show_price: "47216",
              opt_id: "2641",
              ts_req: "0",
              version: "5",
              search_id: "F9LFrnTUh4s-yidP91XKdRaekrq4WCELnHZBnM4hMUY=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "79",
              region: "211",
              bid: "69999705",
              cloud_env: "udpm1",
              creative_title_id: "8911580970411500682",
              ts: "1762536754874",
            },
            mall_id: 741070851728255,
            sales_num: "13",
            link_url:
              "goods.html?_bg_fs=1&goods_id=602892157216348&_oak_mp_inf=ENzM%2Baa8iokBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII%2BdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d9156e%2F8b7d48d0-c70a-431a-9079-14a217b93bdd_800x800.png&spec_gallery_id=208812410332&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDcyMTY&_oak_gallery_order=841946993%2C73002053",
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=602892157216348&_oak_mp_inf=ENzM%2Baa8iokBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII%2BdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d9156e%2F8b7d48d0-c70a-431a-9079-14a217b93bdd_800x800.png&spec_gallery_id=208812410332&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDcyMTY&_oak_gallery_order=841946993%2C73002053&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "841946993,73002053",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "3 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 3 left",
                tag_series: 2,
              },
              {
                color: "#084BF1",
                ext_map: {
                  second_hand_level: "3",
                },
                marketing_tag_type: 1000,
                tag_id: 91129,
                text: "Used･Good",
                tag_series: 2,
              },
            ],
            show_index: 79,
            price_info: {
              split_price_text: ["$", "472", ".16", ""],
              reduction_text: ["-28", "%"],
              price: 47216,
              market_price_str: "$660.00",
              market_price: 66000,
              price_schema: "472.16",
              currency: "USD",
              price_text: ["$", "472.16", ""],
              price_str: "$472.16",
              market_price_text: ["$", "660.00", ""],
            },
            image: {
              width: 800,
              id: 208812410332,
              url_id: "200415253745587332",
              url: "https://img.kwcdn.com/local-goods-image/2066d9156e/8b7d48d0-c70a-431a-9079-14a217b93bdd_800x800.png",
              height: 800,
            },
            sales_tip: "13 sold",
            visible: true,
            goods_id: 602892157216348,
            opt_id: 2661,
            seo_link_url:
              "/-iphone-14-pro-128gb-unlocked--good-g-602892157216348.html?&_oak_mp_inf=ENzM%2Baa8iokBGi5jYXRlZ29yeV9saXN0XzEwY2Q0MTFmNjAyOTRmZGZiODRkYmQ3NzdhNGIwOWEyII%2BdgvulMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Flocal-goods-image%2F2066d9156e%2F8b7d48d0-c70a-431a-9079-14a217b93bdd_800x800.png&spec_gallery_id=208812410332&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDcyMTY&_oak_gallery_order=841946993%2C73002053",
            queryReleScore: 0.0,
            sales_tip_text: ["13", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.8,
              hidden_comment: true,
              comment_num_tips: "4",
            },
            adult_goods: false,
          },
        ],
        share_url: "https://share.temu.com/ggnVMh47VQC",
        extend_fields: {},
        home_opt_module_list: [],
        text_cart_button: false,
        jump_type: 0,
        recent_word: 0,
        shield_all: false,
      },
      has_more: true,
    },
    success: true,
    message: "",
  };

  const title = data.result.data.title;
  console.log(title);

  const mappedGoods = data.result.data.goods_list.map((item: any) => {
    const d = item;

    // Flatten all tags into one array
    const good_tag = [
      ...(d.goods_tags || []).map((tag: any) => ({ ...tag })),
      ...(d.tags_info?.goods_tags || []).map((tag: any) => ({ ...tag })),
      ...(d.tags_info?.mall_tag || []).map((tag: any) => ({ ...tag })),
      ...(d.tags_info?.title_header_tags || []).map((tag: any) => ({
        ...tag,
      })),
      ...(d.tags_info?.mix_benefit_tags || [])
        .map(
          (tag: any) =>
            tag.tag_rich_text?.text_rich?.map((tr: any) => ({
              text: tr.value,
            })) || []
        )
        .flat(),
    ];

    return {
      ...d,
      good_tag,
      category_name: data.result.data.title,
      name: title,
    };
  });
  //   const mappedGoods = data.result.data.goods_list.map((item: any) => {
  //     const d = item;

  //     // Flatten all tags into one array
  //     const good_tag = [
  //       ...(d.goods_tags || []).map((tag: any) => ({ ...tag })),
  //       ...(d.tags_info?.goods_tags || []).map((tag: any) => ({ ...tag })),
  //       ...(d.tags_info?.mall_tag || []).map((tag: any) => ({ ...tag })),
  //       ...(d.tags_info?.title_header_tags || []).map((tag: any) => ({
  //         ...tag,
  //       })),
  //       ...(d.tags_info?.mix_benefit_tags || [])
  //         .map(
  //           (tag: any) =>
  //             tag.tag_rich_text?.text_rich?.map((tr: any) => ({
  //               text: tr.value,
  //             })) || []
  //         )
  //         .flat(),
  //     ];

  //     return {
  //       ...d,
  //       good_tag,
  //       category_name: data.result.data.title,
  //     };
  //   });
  const productRepository = getRepository(Product);
  const categoryRepository = getRepository(Category);

  for (const productData of mappedGoods) {
    let category = await categoryRepository.findOne({
      where: { name: productData.category_name },
    });
    // console.log(category);

    //   const product = productRepository.create({
    //     goods_id: productData.goods_id,
    //     price_info: productData.price_info,
    //     category: productData.category, // relation
    //     // ...other fields
    //   });
    //   await productRepository.save(product);
  }
};

export const fetchProductByCategory = async () => {
  const url = "https://www.temu.com/ca/api/poppy/v1/opt?scene=opt";

  const headers = {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "anti-content":
      "0GVMPE-JVFjllW8SclIyIrGZnKajLQJ8l_j2wbN2QpdlBzvBbTQ8mBD-WEt7I2w9NfwNImuOIAdWlvWMYe0qNcLglJtopYkeIwej_oTcynllWW_cO191sBVVtEJ-I9vAQIA2uzEHv6Gxnjqet-SWHTFSlYtvCMne3Yn2z2V4cls3P-ygAGt1n8w4vDuGvBWlqvjqT5zSoKmv7G53z1a_NMEYcVOcx02oaLS1zA96RZcTCGL316wEC40B04XT1iafHVJY4zqtSBnlsTLtTMV1AG_seMVRAGs7e4Vrz5_bRGZy25-HPBCBytekEeqV6kYaCYC-Wr-SozG6HWW7ZeIyo2yR1TBuSTOo8-SROShvC5_8PH8Jee3Yy4j6AGrIswNe_Lk7vrca6JMtqeV3WKPQ397mdF2p0O4gIcLokxaFIUn-l5TduTUsK8EpHQowchylN-SnqsIL0x0owQqT0wMaig0JXsCRZI2a6DDDjdJcCA56d4QBT_PuRMeSGIa-wr1UM1WZfZyw16zbm6ZpvmOdp8J6zdI7dQqsSZRO1XFiOqKxeStMsPpNdzj9uaYBlUKytE3Uz-mBiEiTDAeo0P_WYJokT43h9umPg1THCHKKP4EoI0rFcVWtju47XXu9Fc-KGifQ0dUJD4cXEDTU_1Oes4dfSbT9lBoAPP0tdw4KZkrZArd69aIM-_PRbTw42LS8rZZxbXTTY0vPO4OXzixSU1hoz-EqBAOT2anlC1WdUr1sGdwQUqf4yo626MmN1B0lhFnywwZV-6W2v08kD1Vb7-3IOpuu2zHPSNnNzVLyyAxUaI50DrXZE_OlOEcDsOPV0Qxj2IzdohcvorHgLDlmv3VborvjtsZj5z",
    "content-type": "application/json;charset=UTF-8",
    cookie:
      'region=37; language=en; currency=CAD; api_uid=CmxMFGkQEkYTPgBO7jeeAg==; timezone=Asia%2FVientiane; img_sup=avif%2Cwebp; _nano_fp=XpmjX5EjX0UqlpTYnT_dIjTci6vItnSccAV38R1q; _bee=BAdGkWeb2zGwzBqlgUvVvLp3K5mtAanr; njrpl=BAdGkWeb2zGwzBqlgUvVvLp3K5mtAanr; dilx=NhQEK9U-pwjj7fHKGbwfL; hfsc=L3yMeo826Tf805LLfw==; _ttc=3.85igPvNR0oKR.1794196949; g_state={"i_l":0,"i_ll":1762662075480,"i_b":"vF/Cfz03felziqP6KRemBjvW4/A59WK903qQaq6BkKM"}; __cf_bm=q6RT25IXuf5Ehsu_zaUMTeZqN2t20y8AQlHaYPcbM.w-1762672563-1.0.1.1-C1s2unOktdTsD48VqUde9B1RFjmJkNmX_PiT4LvvClAnw7.MrLylS9ovwMfx8NEtZ9.CIOijjsihUnqzMgjOLlGPh1qHQ.k4bQYC1bRRjsw; verifyAuthToken=Y3eLT9O66FqxffCYrHro5w3bc92b958ffdd8bca',
    origin: "https://www.temu.com",
    referer:
      "https://www.temu.com/ca/category.html?opt_id=-13&opt_level=1&title=Featured&show_search_type=0",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
    verifyauthtoken: "Y3eLT9O66FqxffCYrHro5w3bc92b958ffdd8bca",
    "x-document-referer":
      "https://www.temu.com/ca/category.html?opt_id=-13&opt_level=1&title=Featured",
    "x-phan-data":
      "0aeJx7xMxiYPiIOSza0NzMyMzcyNzE2MDMQAfKszC1MDc3g_EsLQyBZCwAP-YLoQ",
  };

  const body = {
    scene: "opt",
    pageSn: 10012,
    offset: 120,
    pageSize: 40,
    pagelistId: "b83414712a174764a7a7d8bdd9fc3540",
    optId: -13,
    listId: "category_list_f2db71bc76dd4ba4929eaa7f767e1fb9",
    filterItems: "",
    childOptList:
      "31,766,829,1891,1088,751,29,180,1078,426,2642,585,787,952,517,1121,721,743,1115,30,1775,1732,1084,355,737,1822,1543,1915,1364,1035",
  };

  try {
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers,
    //   body: JSON.stringify(body),
    // });

    // if (!response.ok) {
    //   throw new Error(`HTTP error ${response.status}`);
    // }

    // const result = await response.json();
    const data = {
      result: {
        server_time: 1762677696799,
        data: {
          popup_map: {},
          control_param: {
            preload_size: 24,
            page_size: 40,
          },
          total_price: {
            total_price_text: [
              "Add ",
              "0",
              " item to cart",
              ": ",
              "",
              "$",
              "0",
            ],
            price: 0,
            price_text: ["Add ", "0", " item to cart", ": ", "", "$", "0"],
          },
          call_opt: 0,
          pattern: 0,
          filter_region: {
            p_search: {
              offset: "40",
              list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
              item_type: "0",
              g: "0",
              scene_id: "3",
              mid: "69999906",
              opt_id: "36",
              ts_req: "0",
              version: "5",
              search_id:
                "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
              scene: "opt",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "search",
              idx: "-1",
              region: "211",
              no_result: "0",
              bid: "69999705",
              cloud_env: "udpm1",
              ts: "1762677696799",
            },
            outer_filter: [
              {
                identifier: "100",
                side_name: "Sort by",
                filter_list: [
                  {
                    filter: "0:1",
                    name: "Relevance",
                  },
                  {
                    filter: "1:1",
                    name: "Top sales",
                  },
                  {
                    filter: "3:1",
                    name: "Most recent",
                  },
                  {
                    filter: "2:0",
                    name: "Price low to high",
                  },
                  {
                    filter: "2:1",
                    name: "Price high to low",
                  },
                ],
                view_more: 7,
                name: "Sort by",
              },
            ],
            rank_colum_filter: [
              {
                name: "Relevance",
                p_search: {
                  offset: "40",
                  list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                  item_type: "0",
                  g: "0",
                  scene_id: "3",
                  mid: "69999906",
                  opt_id: "36",
                  ts_req: "0",
                  version: "5",
                  search_id:
                    "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                  scene: "opt",
                  gin_fallback: "0",
                  opt_type: "0",
                  goods_source: "search",
                  idx: "0",
                  region: "211",
                  no_result: "0",
                  bid: "69999705",
                  cloud_env: "udpm1",
                  ts: "1762677696799",
                },
                id: 0,
                sort: [1],
              },
              {
                name: "Top sales",
                p_search: {
                  offset: "40",
                  list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                  item_type: "0",
                  g: "0",
                  scene_id: "3",
                  mid: "69999906",
                  opt_id: "36",
                  ts_req: "0",
                  version: "5",
                  search_id:
                    "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                  scene: "opt",
                  gin_fallback: "0",
                  opt_type: "0",
                  goods_source: "search",
                  idx: "1",
                  region: "211",
                  no_result: "0",
                  bid: "69999705",
                  cloud_env: "udpm1",
                  ts: "1762677696799",
                },
                id: 1,
                sort: [1],
              },
              {
                name: "Most recent",
                p_search: {
                  offset: "40",
                  list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                  item_type: "0",
                  g: "0",
                  scene_id: "3",
                  mid: "69999906",
                  opt_id: "36",
                  ts_req: "0",
                  version: "5",
                  search_id:
                    "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                  scene: "opt",
                  gin_fallback: "0",
                  opt_type: "0",
                  goods_source: "search",
                  idx: "2",
                  region: "211",
                  no_result: "0",
                  bid: "69999705",
                  cloud_env: "udpm1",
                  ts: "1762677696799",
                },
                id: 3,
                sort: [1],
              },
              {
                name: "Price low to high",
                p_search: {
                  offset: "40",
                  list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                  item_type: "0",
                  g: "0",
                  scene_id: "3",
                  mid: "69999906",
                  opt_id: "36",
                  ts_req: "0",
                  version: "5",
                  search_id:
                    "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                  scene: "opt",
                  gin_fallback: "0",
                  opt_type: "0",
                  goods_source: "search",
                  idx: "3",
                  region: "211",
                  no_result: "0",
                  bid: "69999705",
                  cloud_env: "udpm1",
                  ts: "1762677696799",
                },
                id: 2,
                sort: [0],
              },
              {
                name: "Price high to low",
                p_search: {
                  offset: "40",
                  list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                  item_type: "0",
                  g: "0",
                  scene_id: "3",
                  mid: "69999906",
                  opt_id: "36",
                  ts_req: "0",
                  version: "5",
                  search_id:
                    "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                  scene: "opt",
                  gin_fallback: "0",
                  opt_type: "0",
                  goods_source: "search",
                  idx: "4",
                  region: "211",
                  no_result: "0",
                  bid: "69999705",
                  cloud_env: "udpm1",
                  ts: "1762677696799",
                },
                id: 2,
                sort: [1],
              },
            ],
          },
          quick_look: {
            icon_url:
              "https://aimg.kwcdn.com/upload_aimg/transaction/6dbc3f74-d7eb-463e-8397-cc1101ecba8e.png.slim.png",
            act_border_color: "#222222",
            back_rgb: "rgba(255,255,255,0.80)",
            border_color: "#CDCDCD",
            text: {
              color: "#000000",
              text: "Quick look",
            },
            open: true,
          },
          title: "Home & Kitchen",
          default_row_cnt: 0,
          opt_list: [
            {
              tab_type: 0,
              image_url:
                "https://img.kwcdn.com/product/1e19d468875/bba34851-9832-4e6e-9f96-da20ad2c6813_213x213.png",
              p_rec: {
                offset: "40",
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                g: "0",
                scene_id: "3",
                mid: "69999906",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                scene: "opt",
                gin_fallback: "0",
                opt_hash_id: "668074088",
                opt_type: "1",
                goods_source: "rec",
                idx: "-1",
                region: "211",
                no_result: "0",
                bid: "69999705",
                cloud_env: "udpm1",
                ts: "1762677696802",
              },
              disable_dup: false,
              pattern: 0,
              opt_type: 1,
              opt_name: "Home & Kitchen",
              priority: 0,
              opt_id: 36,
              is_featured: false,
            },
          ],
          goods_list: [
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 8790,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/2c060838-d1f4-4a3e-b79b-bb737f1391f5.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "2   non stick sandwich maker with   plates   handle indicator lights easy to clean 750w for quick breakfasts and snacks bpa free stainless  ",
              current_sku_id: 17593891397995,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 1 BUSINESS DAY",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"YASHE","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: YASHE",
                    tag_series: 2,
                    height: 39,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/d2febb7c5927eb95407e1a15eafcf98aa15cb142.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/2c060838-d1f4-4a3e-b79b-bb737f1391f5.jpg",
                url: "https://img.kwcdn.com/product/c37a01a0bc1c7aa73f335f1a15af7e5e84ec6fb3.goods.000001.jpeg",
              },
              title:
                "2-Slice Non-Stick Sandwich Maker with Triangle Plates, Cool-Touch Handle & Indicator Lights, Easy to Clean, 750W for Quick Breakfasts and Snacks, BPA-Free Stainless Steel Design",
              sales_tip_text_list: ["1.3K+", "sold"],
              sold_quantity_percent: 30,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1846172548",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGokyPmEXHH+XAdIKAt0mTxvnJrzVmRzgI5uKVLXI8OQeR33dn/E1/TkHCIQehVB2jfEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "1176881330217694915",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "1846172548",
                g: "601099916685676",
                scene_id: "3",
                show_price: "1348",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "40",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "8859934593954810762",
                ts: "1762677696796",
              },
              activity_type: 13,
              mall_id: 634418220056823,
              sales_num: "1.3K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099916685676&_oak_name_id=8859934593954810762&_oak_mp_inf=EOziiNin1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIOzRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2c060838-d1f4-4a3e-b79b-bb737f1391f5.jpg&spec_gallery_id=3534874409&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTM0OA&_oak_gallery_order=1846172548%2C1114287705%2C1397716942%2C1188140115%2C2058030964",
              extend_fields: {
                sale_fire_flag: true,
                mall_view_type: 2,
                support_tag_carousel: true,
                detail_id: "112716977592545644",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1846172548,1114287705,1397716942,1188140115,2058030964",
                  _oak_name_id: "8859934593954810762",
                },
              },
              goods_tags: [],
              show_index: 40,
              price_info: {
                split_price_text: ["$", "13", ".48", ""],
                reduction_text: [],
                price: 1348,
                price_schema: "13.48",
                currency: "USD",
                price_text: ["$", "13.48", ""],
                price_str: "$13.48",
              },
              image: {
                width: 1600,
                id: 3534874409,
                url_id: "1176881330217694915",
                url: "https://img.kwcdn.com/product/fancy/2c060838-d1f4-4a3e-b79b-bb737f1391f5.jpg",
                height: 1600,
              },
              sales_tip: "1.3K+ sold",
              visible: true,
              goods_id: 601099916685676,
              opt_id: 1854,
              seo_link_url:
                "/2--non-stick-sandwich-maker-with--plates--handle-indicator-lights-easy-to-clean-750w-for-quick-breakfasts-and-snacks-bpa-free-stainless--g-601099916685676.html?&_oak_name_id=8859934593954810762&_oak_mp_inf=EOziiNin1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIOzRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2c060838-d1f4-4a3e-b79b-bb737f1391f5.jpg&spec_gallery_id=3534874409&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTM0OA&_oak_gallery_order=1846172548%2C1114287705%2C1397716942%2C1188140115%2C2058030964",
              queryReleScore: 0.0,
              sales_tip_text: ["1.3K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.9,
                hidden_comment: false,
                comment_num_tips: "297",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 5,
                percent: 8670,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/33b89e3f-4705-4479-b6c8-20d9818276cb.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "24 pack airtight food storage containers with lids bpa free plastic leak proof square canisters for cereal dry food flour sugar dishwasher safe   24 labels",
              current_sku_id: 17592733594465,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"HIHEGD","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: HIHEGD",
                    tag_series: 2,
                    height: 39,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/ffad4752c599a895cc1869329766f291f312fadf.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/33b89e3f-4705-4479-b6c8-20d9818276cb.jpg",
                url: "https://img.kwcdn.com/product/34a5dc22f7c3d8920d1309278e9182ae6f072969.goods.000001.jpeg",
              },
              title:
                "24-Pack Airtight Food Storage Containers with Lids - BPA-Free Plastic, Leak-Proof, Square Canisters for Cereal, Dry Food, Flour, Sugar - Dishwasher Safe, Includes 24 Labels",
              sales_tip_text_list: ["1.3K+", "sold"],
              sold_quantity_percent: 97,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "500273021",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGobTkLku4znt6A+8YhI0VhP55kdO4s3h7RAKCbkab9IEA7CRLjtuQhUqd/YxuU9MJLEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "506969926437324930",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "500273021",
                g: "601099654238703",
                scene_id: "3",
                show_price: "2251",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "41",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "2115650146418334348",
                ts: "1762677696796",
              },
              activity_type: 13,
              mall_id: 634418217716822,
              sales_num: "1.3K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099654238703&_oak_name_id=2115650146418334348&_oak_mp_inf=EO%2Bj9tqm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIOzRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F33b89e3f-4705-4479-b6c8-20d9818276cb.jpg&spec_gallery_id=601099654238703&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI1MQ&_oak_gallery_order=500273021%2C1590322436%2C1901703664%2C1682827023",
              extend_fields: {
                sale_fire_flag: true,
                mall_view_type: 2,
                support_tag_carousel: true,
                detail_id: "112666412137288175",
                sku_extra_param: {
                  _oak_gallery_order:
                    "500273021,1590322436,1901703664,1682827023",
                  _oak_name_id: "2115650146418334348",
                },
              },
              goods_tags: [],
              show_index: 41,
              price_info: {
                split_price_text: ["$", "22", ".51", ""],
                reduction_text: [],
                price: 2251,
                price_schema: "22.51",
                currency: "USD",
                price_text: ["$", "22.51", ""],
                price_str: "$22.51",
              },
              image: {
                width: 375,
                id: 601099654238703,
                url_id: "506969926437324930",
                url: "https://img.kwcdn.com/product/fancy/33b89e3f-4705-4479-b6c8-20d9818276cb.jpg",
                height: 375,
              },
              sales_tip: "1.3K+ sold",
              visible: true,
              goods_id: 601099654238703,
              opt_id: 1724,
              seo_link_url:
                "/24-pack-airtight-food-storage-containers-with-lids-bpa-free-plastic-leak-proof-square-canisters-for-cereal-dry-food-flour-sugar-dishwasher-safe--24-labels-g-601099654238703.html?&_oak_name_id=2115650146418334348&_oak_mp_inf=EO%2Bj9tqm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIOzRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F33b89e3f-4705-4479-b6c8-20d9818276cb.jpg&spec_gallery_id=601099654238703&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI1MQ&_oak_gallery_order=500273021%2C1590322436%2C1901703664%2C1682827023",
              queryReleScore: 0.0,
              sales_tip_text: ["1.3K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "156",
              },
              adult_goods: false,
            },
            {
              thumb_url:
                "https://img.kwcdn.com/product/open/2024-04-28/1714296316009-35fe02c7f9234a68bd97865f0e0dcaba-goods.jpeg",
              ware_house_type: 0,
              benefit_text: {
                text: "-31%",
              },
              item_type: 0,
              page_alt:
                "versatile wooden belt hanger with multiple hooks   ties scarves more ideal closet organizer for home dorm",
              current_sku_id: 17592445707550,
              tags_info: {
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Closet & Laundry Storage","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"6926"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"6926"}}}',
                    },
                    prompt_tag_text:
                      "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Closet & Laundry Storage",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "TOP RATED",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "TOP RATED",
                    ranking_id: "6926",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/87a53ebb8e3945ec97fa5b2ad5cff134c7b37a13.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/open/2024-04-28/1714296316009-35fe02c7f9234a68bd97865f0e0dcaba-goods.jpeg",
                url: "https://img.kwcdn.com/product/d14d100da908bd7d3f199f3d1d13e6fe6fd82179.goods.000001.jpeg",
              },
              title:
                "Multiple Hooks Versatile Wooden Belt Hanger - Ideal Closet Organizer for Home & Dorm - Perfect for Ties, Scarves & More",
              sales_tip_text_list: ["29K+", "sold"],
              sold_quantity_percent: 46,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1880977968",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoqC22wkg5hk8hfFIMyUsnJ2hD9e7xSPgGKWx1yFVSd8ADHMlSbeTOJpOEuXeYyFrREIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "5634632994696567622",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "1880977968",
                g: "601099574946380",
                scene_id: "3",
                show_price: "577",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "42",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "7939683604429345361",
                ts: "1762677696796",
              },
              activity_type: 13,
              mall_id: 634418213745546,
              sales_num: "29K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099574946380&_oak_name_id=7939683604429345361&_oak_mp_inf=EMzUjrWm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIOzRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-04-28%2F1714296316009-35fe02c7f9234a68bd97865f0e0dcaba-goods.jpeg&spec_gallery_id=601099574946380&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTc3&_oak_gallery_order=1880977968%2C1138565266%2C1361377069%2C892568557%2C753740596",
              extend_fields: {
                support_tag_carousel: true,
                detail_id: "112629016192592460",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1880977968,1138565266,1361377069,892568557,753740596",
                  _oak_name_id: "7939683604429345361",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Closet & Laundry Storage","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"6926"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"6926"}}}',
                  },
                  prompt_tag_text:
                    "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Closet & Laundry Storage",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "TOP RATED",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "TOP RATED",
                  ranking_id: "6926",
                },
              ],
              show_index: 42,
              price_info: {
                split_price_text: ["$", "5", ".77", ""],
                reduction_text: ["-31", "%"],
                price: 577,
                market_price_str: "$8.37",
                market_price: 837,
                price_schema: "5.77",
                currency: "USD",
                price_text: ["$", "5.77", ""],
                price_str: "$5.77",
                reduction: 310,
                market_price_text: ["$", "8.37", ""],
              },
              image: {
                width: 375,
                id: 601099574946380,
                url_id: "5634632994696567622",
                url: "https://img.kwcdn.com/product/open/2024-04-28/1714296316009-35fe02c7f9234a68bd97865f0e0dcaba-goods.jpeg",
                height: 375,
              },
              sales_tip: "29K+ sold",
              visible: true,
              goods_id: 601099574946380,
              opt_id: 6928,
              seo_link_url:
                "/versatile-wooden-belt-hanger-with-multiple-hooks--ties-scarves-more-ideal-closet-organizer-for-home-dorm-g-601099574946380.html?&_oak_name_id=7939683604429345361&_oak_mp_inf=EMzUjrWm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIOzRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-04-28%2F1714296316009-35fe02c7f9234a68bd97865f0e0dcaba-goods.jpeg&spec_gallery_id=601099574946380&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTc3&_oak_gallery_order=1880977968%2C1138565266%2C1361377069%2C892568557%2C753740596",
              queryReleScore: 0.0,
              sales_tip_text: ["29K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.9,
                hidden_comment: false,
                comment_num_tips: "586",
              },
              adult_goods: false,
            },
            {
              thumb_url:
                "https://img.kwcdn.com/product/open/d6b58eacb2dd4b9a88155046b203f53c-goods.jpeg",
              ware_house_type: 0,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "1  olive oil dispenser 2 in 1 oil bottle and cooking sprayer automatic   16 ounces kitchen essentials oil dispensing tool modern oil sprayer sleek kitchen tool   sprayer bpafree plastic kitchen spray bottle home   chefs",
              current_sku_id: 17605555382636,
              tags_info: {
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#9 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Utensils & Supplies","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"732"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"732"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Kitchen Utensils & Supplies",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#9 BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#9 BEST-SELLING ITEM",
                    ranking_id: "732",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/ee0096c483af35bbe1eb64e5fc9d021eece207f8.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/open/d6b58eacb2dd4b9a88155046b203f53c-goods.jpeg",
                url: "https://img.kwcdn.com/product/fc7ccbf205c1cc2cf96c1c39a9432d0f6e13a570.goods.000001.jpeg",
              },
              title:
                "1pc Kitchen Olive Oil Dispenser, 2-in-1 Oil Bottle and Cooking Sprayer, Automatic Flip Lid, 16 Ounces, Kitchen Essentials, Oil Dispensing Tool, Modern Oil Sprayer, Sleek Kitchen Tool, Highquality Sprayer, Bpafree Plastic, Kitchen Spray Bottle, Home Cooks, Professional Chefs",
              sales_tip_text_list: ["9.6K+", "sold"],
              sold_quantity_percent: 64,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1903472204",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGo1RZmyCxM8B6yAkKsYuPfAq5sypMnktUj3SXaBYePXRbLLA9Ab2zx/8GvxkmzELF6EIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "7761904334593394291",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "1903472204",
                g: "601102616121377",
                scene_id: "3",
                show_price: "348",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "43",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "5732752222551371521",
                ts: "1762677696796",
              },
              activity_type: 13,
              mall_id: 634418212828746,
              sales_num: "9.6K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102616121377&_oak_name_id=5732752222551371521&_oak_mp_inf=EKGgod%2Bx1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fd6b58eacb2dd4b9a88155046b203f53c-goods.jpeg&spec_gallery_id=207057066216&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzQ4&_oak_gallery_order=1903472204%2C2125629524%2C733792797%2C1114239264",
              extend_fields: {
                support_tag_carousel: true,
                detail_id: "112624631416836129",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1903472204,2125629524,733792797,1114239264",
                  _oak_name_id: "5732752222551371521",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#9 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Utensils & Supplies","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"732"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"732"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Kitchen Utensils & Supplies",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#9 BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#9 BEST-SELLING ITEM",
                  ranking_id: "732",
                },
              ],
              show_index: 43,
              price_info: {
                split_price_text: ["$", "3", ".48", ""],
                reduction_text: [],
                price: 348,
                price_schema: "3.48",
                currency: "USD",
                price_text: ["$", "3.48", ""],
                price_str: "$3.48",
              },
              image: {
                width: 800,
                id: 207057066216,
                url_id: "7761904334593394291",
                url: "https://img.kwcdn.com/product/open/d6b58eacb2dd4b9a88155046b203f53c-goods.jpeg",
                height: 800,
              },
              sales_tip: "9.6K+ sold",
              visible: true,
              goods_id: 601102616121377,
              opt_id: 734,
              seo_link_url:
                "/1-olive-oil-dispenser-2-in-1-oil-bottle-and-cooking-sprayer-automatic--16-ounces-kitchen-essentials-oil-dispensing-tool-modern-oil-sprayer-sleek-kitchen-tool--sprayer-bpafree-plastic-kitchen-spray-bottle-home--chefs-g-601102616121377.html?&_oak_name_id=5732752222551371521&_oak_mp_inf=EKGgod%2Bx1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fd6b58eacb2dd4b9a88155046b203f53c-goods.jpeg&spec_gallery_id=207057066216&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzQ4&_oak_gallery_order=1903472204%2C2125629524%2C733792797%2C1114239264",
              queryReleScore: 0.0,
              sales_tip_text: ["9.6K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.5,
                hidden_comment: false,
                comment_num_tips: "275",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 7110,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/a2e64f9a-3465-4d8e-9e90-554b1dc08c96.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-52%",
              },
              item_type: 0,
              page_alt:
                "3pcs kitchen chef knife set barbecue knife multipurpose knife utility knife stainless steel boning knife professional vegetable chopper fish knife mini knife   small pocket knife for   camping knife outdoor",
              current_sku_id: 17592945630677,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#4 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Utensils & Supplies: Stainless Steel","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"732"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"732"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Kitchen Utensils & Supplies: Stainless Steel",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#4 BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#4 BEST-SELLING ITEM",
                    ranking_id: "732",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/0e8c07717eafcaa5c557dcd4d43119643eb5e713.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/a2e64f9a-3465-4d8e-9e90-554b1dc08c96.jpg",
                url: "https://img.kwcdn.com/product/0007bb9f2afcda07645a3b4f3e86c9ef3e0b1462.goods.000001.jpeg",
              },
              title:
                "3PCS, Kitchen Chef Knife Set, Barbecue Knife Multipurpose Knife Utility Knife Stainless Steel Boning Knife Professional Vegetable Chopper Fish Knife Mini Knife Cheese Pizza Small Pocket Knife for Kitchen Convenience Camping Knife Outdoor",
              sales_tip_text_list: ["6K+", "sold"],
              sold_quantity_percent: 32,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "2669547",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGod3sbpu6R03amD8kTkLSap+D7cmWBABNu5oiSOe98iesaqSzB3mqWWa36s6rUU38BEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "1908524200010220027",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "2669547",
                g: "601099708727074",
                scene_id: "3",
                show_price: "1712",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "44",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "668477574146884436",
                ts: "1762677696797",
              },
              activity_type: 100,
              mall_id: 634418214713468,
              sales_num: "6K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099708727074&_oak_name_id=668477574146884436&_oak_mp_inf=EKL%2B8%2FSm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa2e64f9a-3465-4d8e-9e90-554b1dc08c96.jpg&spec_gallery_id=601099708727074&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTcxMg&_oak_gallery_order=2669547%2C819019364%2C1508368016%2C958468334%2C1721340432",
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099708727074&_oak_name_id=668477574146884436&_oak_mp_inf=EKL%2B8%2FSm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa2e64f9a-3465-4d8e-9e90-554b1dc08c96.jpg&spec_gallery_id=601099708727074&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTcxMg&_oak_gallery_order=2669547%2C819019364%2C1508368016%2C958468334%2C1721340432&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112692771542794018",
                sku_extra_param: {
                  _oak_gallery_order:
                    "2669547,819019364,1508368016,958468334,1721340432",
                  _oak_name_id: "668477574146884436",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#4 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Utensils & Supplies: Stainless Steel","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"732"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"732"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Kitchen Utensils & Supplies: Stainless Steel",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#4 BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#4 BEST-SELLING ITEM",
                  ranking_id: "732",
                },
              ],
              show_index: 44,
              price_info: {
                split_price_text: ["$", "17", ".12", ""],
                reduction_text: ["-52", "%"],
                price: 1712,
                market_price_str: "$35.96",
                market_price: 3596,
                price_schema: "17.12",
                currency: "USD",
                price_text: ["$", "17.12", ""],
                price_str: "$17.12",
                reduction: 520,
                market_price_text: ["$", "35.96", ""],
              },
              image: {
                width: 375,
                id: 601099708727074,
                url_id: "1908524200010220027",
                url: "https://img.kwcdn.com/product/fancy/a2e64f9a-3465-4d8e-9e90-554b1dc08c96.jpg",
                height: 375,
              },
              sales_tip: "6K+ sold",
              visible: true,
              goods_id: 601099708727074,
              opt_id: 734,
              seo_link_url:
                "/3pcs-kitchen-chef-knife-set-barbecue-knife-multipurpose-knife-utility-knife-stainless-steel-boning-knife-professional-vegetable-chopper-fish-knife-mini-knife--small-pocket-knife-for--camping-knife-outdoor-g-601099708727074.html?&_oak_name_id=668477574146884436&_oak_mp_inf=EKL%2B8%2FSm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa2e64f9a-3465-4d8e-9e90-554b1dc08c96.jpg&spec_gallery_id=601099708727074&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTcxMg&_oak_gallery_order=2669547%2C819019364%2C1508368016%2C958468334%2C1721340432",
              queryReleScore: 0.0,
              sales_tip_text: ["6K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "655",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 7340,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/20e03d3d-05b6-4445-8078-d4eb08a2e5f0.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "  coffee maker with   setting single serve coffee maker   cup and   6   brew sizes 50oz removable water   cup coffee machine with reusable filter black",
              current_sku_id: 17593556192029,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#2 TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Coffee, Tea & Espresso","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"1855"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"1855"}}}',
                    },
                    prompt_tag_text:
                      "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Coffee, Tea & Espresso",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#2 TOP RATED",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#2 TOP RATED",
                    ranking_id: "1855",
                  },
                  {
                    color: "#555555",
                    ext_map: {
                      lowest_tag_up_flag: "4",
                      lowest_price_before_title: "60d lowest",
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91048,
                    text: "Lowest price in 60 days",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/1888fe68a5547bb2bbc7cd36dc6c6af6be1c83fd.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/20e03d3d-05b6-4445-8078-d4eb08a2e5f0.jpg",
                url: "https://img.kwcdn.com/product/dce0fbba1878e3bd56403d916ece255b3d17badf.goods.000001.jpeg",
              },
              title:
                "Hot & Iced Coffee Maker with Bold Setting, Single Serve Coffee Maker for K Cup And Grounds, 6-14oz Brew Sizes, 50oz Removable Water Tank, One Cup Coffee Machine with Reusable Filter, Black.",
              sales_tip_text_list: ["3.6K+", "sold"],
              sold_quantity_percent: 37,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "318085346",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoYXPGZvI/APiIoC4LMVnVuA+JICkA94qfJjPWRwFGaairTaJl1xGC0tGbuCVnnDYnEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "2509467941091566714",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "318085346",
                g: "601099844643391",
                scene_id: "3",
                show_price: "3870",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "45",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "479120717037573749",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418219689244,
              sales_num: "3.6K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099844643391&_oak_name_id=479120717037573749&_oak_mp_inf=EL%2FU27Wn1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F20e03d3d-05b6-4445-8078-d4eb08a2e5f0.jpg&spec_gallery_id=3130259873&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzg3MA&_oak_gallery_order=318085346%2C886643361%2C413954477%2C75075571%2C944848373",
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099844643391&_oak_name_id=479120717037573749&_oak_mp_inf=EL%2FU27Wn1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F20e03d3d-05b6-4445-8078-d4eb08a2e5f0.jpg&spec_gallery_id=3130259873&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzg3MA&_oak_gallery_order=318085346%2C886643361%2C413954477%2C75075571%2C944848373&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112725765431224895",
                sku_extra_param: {
                  _oak_gallery_order:
                    "318085346,886643361,413954477,75075571,944848373",
                  _oak_name_id: "479120717037573749",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#2 TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Coffee, Tea & Espresso","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"1855"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"1855"}}}',
                  },
                  prompt_tag_text:
                    "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Coffee, Tea & Espresso",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#2 TOP RATED",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#2 TOP RATED",
                  ranking_id: "1855",
                },
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "4",
                    lowest_price_before_title: "60d lowest",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price in 60 days",
                  tag_series: 2,
                },
              ],
              show_index: 45,
              price_info: {
                split_price_text: ["$", "38", ".70", ""],
                reduction_text: [],
                price: 3870,
                price_schema: "38.70",
                currency: "USD",
                price_text: ["$", "38.70", ""],
                price_str: "$38.70",
              },
              image: {
                width: 3000,
                id: 3130259873,
                url_id: "2509467941091566714",
                url: "https://img.kwcdn.com/product/fancy/20e03d3d-05b6-4445-8078-d4eb08a2e5f0.jpg",
                height: 3000,
              },
              sales_tip: "3.6K+ sold",
              visible: true,
              goods_id: 601099844643391,
              opt_id: 1856,
              seo_link_url:
                "/-coffee-maker-with--setting-single-serve-coffee-maker--cup-and--6--brew-sizes-50oz-removable-water--cup-coffee-machine-with-reusable-filter-black-g-601099844643391.html?&_oak_name_id=479120717037573749&_oak_mp_inf=EL%2FU27Wn1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F20e03d3d-05b6-4445-8078-d4eb08a2e5f0.jpg&spec_gallery_id=3130259873&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzg3MA&_oak_gallery_order=318085346%2C886643361%2C413954477%2C75075571%2C944848373",
              queryReleScore: 0.0,
              sales_tip_text: ["3.6K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "733",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 5,
                percent: 8070,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/cd3c6db9-37db-49b0-9b22-45c3bffa9a02.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-15%",
              },
              item_type: 0,
              page_alt:
                "high pressure rain shower head and handheld shower combo with 11 inch adjustable arm 9 spray   rain massage spa stainless hose bracket leak proof design heavy duty square shower system for bath shower  ",
              current_sku_id: 17597659245400,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"BN BY NEE","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: BN BY NEE",
                    tag_series: 2,
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#2 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Bath in Black","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"746"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"746"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Bath in Black",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#2 BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#2 BEST-SELLING ITEM",
                    ranking_id: "746",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/1553fd9687876088100c70e0bad01543fdf74e59.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/cd3c6db9-37db-49b0-9b22-45c3bffa9a02.jpg",
                url: "https://img.kwcdn.com/product/c19e3dc6e06988b12ca7c21e421f0b52daf4efe5.goods.000001.jpeg",
              },
              title:
                "High-Pressure Rain Shower Head and Handheld Shower Combo with 11-Inch Adjustable Arm, 9-Spray Modes (Rain, Massage, Spa), Stainless Hose & Bracket, Leak-Proof Design - Heavy-Duty Square Shower System for Bath/Shower (Easy Install",
              sales_tip_text_list: ["54K+", "sold"],
              sold_quantity_percent: 78,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "873142417",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoaolvjOVsYIt+FirQUTgEPy2dK7WXL+nIzLqNEkSUG9JqKv4dYf4im1aXv5rEZtnlEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "2621500976697079621",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "873142417",
                g: "601099763926495",
                scene_id: "3",
                show_price: "992",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "46",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "5762116553164575238",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418219087619,
              sales_num: "54K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099763926495&_oak_mp_inf=EN%2BLnY%2Bn1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fcd3c6db9-37db-49b0-9b22-45c3bffa9a02.jpg&spec_gallery_id=601099763926495&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=OTky&_oak_gallery_order=873142417%2C1054454933%2C1155697811%2C1894065579%2C2063957758",
              extend_fields: {
                sale_fire_flag: true,
                mall_view_type: 2,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099763926495&_oak_mp_inf=EN%2BLnY%2Bn1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fcd3c6db9-37db-49b0-9b22-45c3bffa9a02.jpg&spec_gallery_id=601099763926495&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=OTky&_oak_gallery_order=873142417%2C1054454933%2C1155697811%2C1894065579%2C2063957758&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112710369156220383",
                sku_extra_param: {
                  _oak_gallery_order:
                    "873142417,1054454933,1155697811,1894065579,2063957758",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#2 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Bath in Black","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"746"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"746"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Bath in Black",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#2 BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#2 BEST-SELLING ITEM",
                  ranking_id: "746",
                },
              ],
              show_index: 46,
              price_info: {
                split_price_text: ["$", "9", ".92", ""],
                reduction_text: ["-15", "%"],
                price: 992,
                market_price_str: "$11.72",
                market_price: 1172,
                price_schema: "9.92",
                currency: "USD",
                price_text: ["$", "9.92", ""],
                price_str: "$9.92",
                reduction: 150,
                market_price_text: ["$", "11.72", ""],
              },
              image: {
                width: 375,
                id: 601099763926495,
                url_id: "2621500976697079621",
                url: "https://img.kwcdn.com/product/fancy/cd3c6db9-37db-49b0-9b22-45c3bffa9a02.jpg",
                height: 375,
              },
              sales_tip: "54K+ sold",
              visible: true,
              goods_id: 601099763926495,
              opt_id: 749,
              seo_link_url:
                "/high-pressure-rain-shower-head-and-handheld-shower-combo-with-11-inch-adjustable-arm-9-spray--rain-massage-spa-stainless-hose-bracket-leak-proof-design-heavy-duty-square-shower-system-for-bath-shower--g-601099763926495.html?&_oak_mp_inf=EN%2BLnY%2Bn1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fcd3c6db9-37db-49b0-9b22-45c3bffa9a02.jpg&spec_gallery_id=601099763926495&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=OTky&_oak_gallery_order=873142417%2C1054454933%2C1155697811%2C1894065579%2C2063957758",
              queryReleScore: 0.0,
              sales_tip_text: ["54K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "7,249",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 5,
                percent: 8160,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/1c57dce4-58de-49ce-a26e-ed5cd72d2e07.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-32%",
              },
              item_type: 0,
              page_alt:
                "intelligent bathroom scale digital body scale with backlit led display screen and sturdy tempered glass compact size weighing up to 400   180  ",
              current_sku_id: 17592771219874,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Bath","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"746"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"746"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Bath",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "BEST-SELLING ITEM",
                    ranking_id: "746",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/6936a1ec66099e1349161212e7058e297b723745.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/1c57dce4-58de-49ce-a26e-ed5cd72d2e07.jpg",
                url: "https://img.kwcdn.com/product/5a34686c088e4a36024d05f0469b331412a51113.goods.000001.jpeg",
              },
              title:
                "Intelligent Bathroom Scale, Digital Body Scale, With Backlit LED Display Screen And Sturdy Tempered Glass, Compact Size, Weighing Up To 400 Pounds/180 Kilograms.",
              sales_tip_text_list: ["31K+", "sold"],
              sold_quantity_percent: 12,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "256044807",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGov2hwATgAKNyfkuxiLwwgS0HsBKuOeJVrX9Y+oe+ipE9/F6PqRhlThGwXKWA+Vzk8EIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "4209856024599935399",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "256044807",
                g: "601099664353604",
                scene_id: "3",
                show_price: "882",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "47",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "7574338072731571455",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418214874526,
              sales_num: "31K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099664353604&_oak_mp_inf=EMTS39%2Bm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F1c57dce4-58de-49ce-a26e-ed5cd72d2e07.jpg&spec_gallery_id=2413660389&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=ODgy&_oak_gallery_order=256044807%2C1891234587%2C986688031%2C1007629431",
              extend_fields: {
                sale_fire_flag: true,
                support_tag_carousel: true,
                detail_id: "112721370958260548",
                sku_extra_param: {
                  _oak_gallery_order:
                    "256044807,1891234587,986688031,1007629431",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Bath","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"746"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"746"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Bath",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "BEST-SELLING ITEM",
                  ranking_id: "746",
                },
              ],
              show_index: 47,
              price_info: {
                split_price_text: ["$", "8", ".82", ""],
                reduction_text: ["-32", "%"],
                price: 882,
                market_price_str: "$13.08",
                market_price: 1308,
                price_schema: "8.82",
                currency: "USD",
                price_text: ["$", "8.82", ""],
                price_str: "$8.82",
                reduction: 320,
                market_price_text: ["$", "13.08", ""],
              },
              image: {
                width: 800,
                id: 2413660389,
                url_id: "4209856024599935399",
                url: "https://img.kwcdn.com/product/fancy/1c57dce4-58de-49ce-a26e-ed5cd72d2e07.jpg",
                height: 800,
              },
              sales_tip: "31K+ sold",
              visible: true,
              goods_id: 601099664353604,
              opt_id: 749,
              seo_link_url:
                "/intelligent-bathroom-scale-digital-body-scale-with-backlit-led-display-screen-and-sturdy-tempered-glass-compact-size-weighing-up-to-400--180--g-601099664353604.html?&_oak_mp_inf=EMTS39%2Bm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F1c57dce4-58de-49ce-a26e-ed5cd72d2e07.jpg&spec_gallery_id=2413660389&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=ODgy&_oak_gallery_order=256044807%2C1891234587%2C986688031%2C1007629431",
              queryReleScore: 0.0,
              sales_tip_text: ["31K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "4,958",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 5,
                percent: 8440,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/ac2fc571-2e01-4ad3-b5bf-99ecd72ec5b3.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-14%",
              },
              item_type: 0,
              page_alt:
                "10  bartenders set with bamboo stand stainless steel   shaker with bar tool set for home bar perfect housewarming   accessories for fathers day gift",
              current_sku_id: 17594614432134,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/02d21e2a8c2697bd06c54eb108b1d4885f6a0d7f.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/ac2fc571-2e01-4ad3-b5bf-99ecd72ec5b3.jpg",
                url: "https://img.kwcdn.com/product/cd8212858ed6efc0f1f6f88476768ec504614081.goods.000001.jpeg",
              },
              title:
                "10pcs Premium Bartender's Set with Bamboo Stand - Stainless Steel Roostertail Shaker with Bar Tool Set for Home Bar, Perfect Housewarming Gift, Bar Accessories for Father's Day Gift",
              sales_tip_text_list: ["570", "sold"],
              sold_quantity_percent: 46,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "839908704",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGowGm+j55SiUg94U/NH+BWksyj9PxHerx3c07E20gdMX6/WmLqF+YkU2cQ8SzA4yKHEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "6392759953826630227",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "839908704",
                g: "601100078270307",
                scene_id: "3",
                show_price: "1423",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "48",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "3048148109485177210",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418220675315,
              sales_num: "570",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601100078270307&_oak_name_id=3048148109485177210&_oak_mp_inf=EOOOj6Wo1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fac2fc571-2e01-4ad3-b5bf-99ecd72ec5b3.jpg&spec_gallery_id=5084282769&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQyMw&_oak_gallery_order=839908704%2C652439554%2C169186857%2C376496341%2C58137482",
              extend_fields: {
                support_tag_carousel: true,
                detail_id: "112723557734139747",
                sku_extra_param: {
                  _oak_gallery_order:
                    "839908704,652439554,169186857,376496341,58137482",
                  _oak_name_id: "3048148109485177210",
                },
              },
              goods_tags: [],
              show_index: 48,
              price_info: {
                split_price_text: ["$", "14", ".23", ""],
                reduction_text: ["-14", "%"],
                price: 1423,
                market_price_str: "$16.59",
                market_price: 1659,
                price_schema: "14.23",
                currency: "USD",
                price_text: ["$", "14.23", ""],
                price_str: "$14.23",
                reduction: 140,
                market_price_text: ["$", "16.59", ""],
              },
              image: {
                width: 1600,
                id: 5084282769,
                url_id: "6392759953826630227",
                url: "https://img.kwcdn.com/product/fancy/ac2fc571-2e01-4ad3-b5bf-99ecd72ec5b3.jpg",
                height: 1600,
              },
              sales_tip: "570 sold",
              visible: true,
              goods_id: 601100078270307,
              opt_id: 1726,
              seo_link_url:
                "/10-bartender--with-bamboo-stand-stainless-steel--shaker-with-bar-tool-set-for-home-bar-perfect-housewarming--accessories-for-father-s-day-gift-g-601100078270307.html?&_oak_name_id=3048148109485177210&_oak_mp_inf=EOOOj6Wo1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fac2fc571-2e01-4ad3-b5bf-99ecd72ec5b3.jpg&spec_gallery_id=5084282769&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQyMw&_oak_gallery_order=839908704%2C652439554%2C169186857%2C376496341%2C58137482",
              queryReleScore: 0.0,
              sales_tip_text: ["570", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "65",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 5,
                percent: 8300,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/38438cc7-4f8a-4e43-9cff-09d4dda4fc20.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "set of 4 oversized collapsible storage container made of   fabric featuring double zippers and three handles waterproof design ideal for closets bedrooms kitchens and books versatile large canvas storage box easy to fold for organization",
              current_sku_id: 17599048503850,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Home Storage & Organization","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"759"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"759"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Home Storage & Organization",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "BEST-SELLING ITEM",
                    ranking_id: "759",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/1fcd648fb931661f1fdfbef86258c5c13b337a2fgs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/38438cc7-4f8a-4e43-9cff-09d4dda4fc20.jpg",
                url: "https://img.kwcdn.com/product/0d80faaaeb9c11257fd63f855925346d5eb575a9.temu.000001.jpeg",
              },
              title:
                "Set of 4, Oversized Collapsible Storage Container Made of Cationic Fabric, Featuring Double Zippers And Three Handles, Waterproof Design, Ideal for Closets, Bedrooms, Kitchens, And Books, Versatile Large Canvas Storage Box, Easy to Fold for Organization.",
              sales_tip_text_list: ["4.1K+", "sold"],
              sold_quantity_percent: 27,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "665605651",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoDr2HdrQuG1k7z4rG6o2/+aIyNEKmyefwA2A7bbIAOWQ3ClZkiDRXzfD4qH5sm94ZEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "3760537295165231781",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "665605651",
                g: "601101275960773",
                scene_id: "3",
                show_price: "1759",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "49",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "886411582820364640",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418218777722,
              sales_num: "4.1K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601101275960773&_oak_name_id=886411582820364640&_oak_mp_inf=EMWrnOCs1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F38438cc7-4f8a-4e43-9cff-09d4dda4fc20.jpg&spec_gallery_id=201660232163&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc1OQ&_oak_gallery_order=665605651%2C631999312%2C823225712%2C1573310609%2C2141371816",
              extend_fields: {
                sale_fire_flag: true,
                support_tag_carousel: true,
                detail_id: "112723549152548293",
                sku_extra_param: {
                  _oak_gallery_order:
                    "665605651,631999312,823225712,1573310609,2141371816",
                  _oak_name_id: "886411582820364640",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Home Storage & Organization","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"759"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"759"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Home Storage & Organization",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "BEST-SELLING ITEM",
                  ranking_id: "759",
                },
              ],
              show_index: 49,
              price_info: {
                split_price_text: ["$", "17", ".59", ""],
                reduction_text: [],
                price: 1759,
                price_schema: "17.59",
                currency: "USD",
                price_text: ["$", "17.59", ""],
                price_str: "$17.59",
              },
              image: {
                width: 900,
                id: 201660232163,
                url_id: "3760537295165231781",
                url: "https://img.kwcdn.com/product/fancy/38438cc7-4f8a-4e43-9cff-09d4dda4fc20.jpg",
                height: 900,
              },
              sales_tip: "4.1K+ sold",
              visible: true,
              goods_id: 601101275960773,
              opt_id: 760,
              seo_link_url:
                "/set-of-4-oversized-collapsible-storage-container-made-of--fabric-featuring-double-zippers-and-three-handles-waterproof-design-ideal-for-closets-bedrooms-kitchens-and-books-versatile-large-canvas-storage-box-easy-to-fold-for-organization-g-601101275960773.html?&_oak_name_id=886411582820364640&_oak_mp_inf=EMWrnOCs1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO3RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F38438cc7-4f8a-4e43-9cff-09d4dda4fc20.jpg&spec_gallery_id=201660232163&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc1OQ&_oak_gallery_order=665605651%2C631999312%2C823225712%2C1573310609%2C2141371816",
              queryReleScore: 0.0,
              sales_tip_text: ["4.1K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "363",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 8300,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/9f7a2f47-cd08-4424-8da1-f89c0aa3c621.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-12%",
              },
              item_type: 0,
              page_alt:
                "1pc adjustable expandable clothes drying rack 3 tier foldable laundry dryer metal towel and garment rack for air drying white drying racks",
              current_sku_id: 17616476365153,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 1 BUSINESS DAY",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/166491707b32889a2d539148a2f1aa63319164e8gs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/9f7a2f47-cd08-4424-8da1-f89c0aa3c621.jpg",
                url: "https://img.kwcdn.com/product/5eea4278a2f5ea920a6766b4e102a6248d368a93.temu.000001.jpeg",
              },
              title:
                "Clothes Drying Rack 3-Tier Laundry Drying Rack For Clothes Expandable Metal Clothing Dryer Collapsible Towel Rack Air Drying Rack White, Drying Racks",
              sales_tip_text_list: ["431", "sold"],
              sold_quantity_percent: 75,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1357732193",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoY/W+MPBREaF4esi/XSaT2VAzybsybI0s3q9Er01sd1FpUYuU6mPHgGqGq1BC57g5EIIBGGMiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "7531241870967618947",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "1357732193",
                g: "601102781676517",
                scene_id: "3",
                show_price: "1872",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "50",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "7829383952245024589",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418222431952,
              sales_num: "431",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102781676517&_oak_mp_inf=EOX3ma6y1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO7RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9f7a2f47-cd08-4424-8da1-f89c0aa3c621.jpg&spec_gallery_id=601102781676517&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg3Mg&_oak_gallery_order=1357732193%2C519159949%2C693610649%2C1310277946",
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601102781676517&_oak_mp_inf=EOX3ma6y1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO7RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9f7a2f47-cd08-4424-8da1-f89c0aa3c621.jpg&spec_gallery_id=601102781676517&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg3Mg&_oak_gallery_order=1357732193%2C519159949%2C693610649%2C1310277946&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112705982040079333",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1357732193,519159949,693610649,1310277946",
                },
              },
              goods_tags: [],
              show_index: 50,
              price_info: {
                split_price_text: ["$", "18", ".72", ""],
                reduction_text: ["-12", "%"],
                price: 1872,
                market_price_str: "$21.47",
                market_price: 2147,
                price_schema: "18.72",
                currency: "USD",
                price_text: ["$", "18.72", ""],
                price_str: "$18.72",
                reduction: 120,
                market_price_text: ["$", "21.47", ""],
              },
              image: {
                width: 375,
                id: 601102781676517,
                url_id: "7531241870967618947",
                url: "https://img.kwcdn.com/product/fancy/9f7a2f47-cd08-4424-8da1-f89c0aa3c621.jpg",
                height: 375,
              },
              sales_tip: "431 sold",
              visible: true,
              goods_id: 601102781676517,
              opt_id: 6928,
              seo_link_url:
                "/clothes-drying-rack-3-tier-laundry-drying-rack-for-clothes-expandable-metal-clothing-dryer-collapsible-towel-rack-air-drying-rack-white-drying-racks-g-601102781676517.html?&_oak_mp_inf=EOX3ma6y1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO7RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9f7a2f47-cd08-4424-8da1-f89c0aa3c621.jpg&spec_gallery_id=601102781676517&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg3Mg&_oak_gallery_order=1357732193%2C519159949%2C693610649%2C1310277946",
              queryReleScore: 0.0,
              sales_tip_text: ["431", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.9,
                hidden_comment: true,
                comment_num_tips: "40",
              },
              adult_goods: false,
            },
            {
              thumb_url:
                "https://img.kwcdn.com/product/fancy/4b05fe62-129d-4a7f-bed0-5ebd695b6850.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-8%",
              },
              item_type: 0,
              page_alt:
                "1pc stainless steel garlic press manual handheld garlic crusher grater 304 stainless steel kitchen tool for mincing garlic   durable   design for   garlic crusher and grater kitchen gadget modern kitchenware   material food preparation   sturdy construction cooking enthusiasts",
              current_sku_id: 17605662082704,
              tags_info: {},
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/49fa922fcbdb66230dda6b2bec237560066d5e9bgs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/4b05fe62-129d-4a7f-bed0-5ebd695b6850.jpg",
                url: "https://img.kwcdn.com/product/b1f69ef3b627a1997fade9b8fe99d64dccaa0671.temu.000001.jpeg",
              },
              title:
                "1pc Stainless Steel Garlic Press - Manual Handheld Garlic Crusher & Grater, 304 Stainless Steel Kitchen Tool for Mincing Garlic, Ginger, and More - Durable, Easy-to-Use Design for Home Cooking, Garlic Crusher And Grater, Kitchen Gadget, Modern Kitchenware, Easyclean Material, Food Preparation, Compact Design, Sturdy Construction, Cooking Enthusiasts",
              sales_tip_text_list: ["8.3K+", "sold"],
              sold_quantity_percent: 12,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "880039907",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoBThicNrKpdH7645t/ZBr82T8PgzFbl0N5sVMILBpHMDCE1vGuLG8cxQcP5V2GTF4EIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "7251002243915485970",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "880039907",
                g: "601102637680865",
                scene_id: "3",
                show_price: "488",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "51",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "2247559970725919429",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 5889228770328,
              sales_num: "8.3K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102637680865&_oak_name_id=2247559970725919429&_oak_mp_inf=EOGRxemx1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO7RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F4b05fe62-129d-4a7f-bed0-5ebd695b6850.jpg&spec_gallery_id=208870379510&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDg4&_oak_gallery_order=880039907%2C151846615%2C745674472",
              extend_fields: {
                support_tag_carousel: true,
                detail_id: "112635625954298081",
                sku_extra_param: {
                  _oak_gallery_order: "880039907,151846615,745674472",
                  _oak_name_id: "2247559970725919429",
                },
              },
              goods_tags: [],
              show_index: 51,
              price_info: {
                split_price_text: ["$", "4", ".88", ""],
                reduction_text: ["-8", "%"],
                price: 488,
                market_price_str: "$5.31",
                market_price: 531,
                price_schema: "4.88",
                currency: "USD",
                price_text: ["$", "4.88", ""],
                price_str: "$4.88",
                reduction: 80,
                market_price_text: ["$", "5.31", ""],
              },
              image: {
                width: 800,
                id: 208870379510,
                url_id: "7251002243915485970",
                url: "https://img.kwcdn.com/product/fancy/4b05fe62-129d-4a7f-bed0-5ebd695b6850.jpg",
                height: 800,
              },
              sales_tip: "8.3K+ sold",
              visible: true,
              goods_id: 601102637680865,
              opt_id: 734,
              seo_link_url:
                "/1pc-stainless-steel-garlic-press-manual-handheld-garlic-crusher-grater-304-stainless-steel-kitchen-tool-for-mincing-garlic--durable--design-for--garlic-crusher-and-grater-kitchen-gadget-modern-kitchenware--material-food-preparation--sturdy-construction-cooking-enthusiasts-g-601102637680865.html?&_oak_name_id=2247559970725919429&_oak_mp_inf=EOGRxemx1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO7RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F4b05fe62-129d-4a7f-bed0-5ebd695b6850.jpg&spec_gallery_id=208870379510&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDg4&_oak_gallery_order=880039907%2C151846615%2C745674472",
              queryReleScore: 0.0,
              sales_tip_text: ["8.3K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.5,
                hidden_comment: false,
                comment_num_tips: "71",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 5,
                percent: 7190,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/91966a10-b4a6-40b1-80c3-012291b4351f.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-13%",
              },
              item_type: 0,
              page_alt:
                "12 inch all metal 3 way rain shower head high pressure shower head dual shower heads with handheld spray combo upgrade extension arm height adjustable hotel toilet shower2025",
              current_sku_id: 17592815054440,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"SANKECAO","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: SANKECAO",
                    tag_series: 2,
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Bath in Black","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"746"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"746"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Bath in Black",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "BEST-SELLING ITEM",
                    ranking_id: "746",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/cd9f9cfc276367a03d447f54225a5f419a3ab995.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/91966a10-b4a6-40b1-80c3-012291b4351f.jpg",
                url: "https://img.kwcdn.com/product/79252dedda2e38287cbd9f6f11ef963c44841b69.goods.000001.jpeg",
              },
              title:
                "12 Inch All Metal 3-Way Rain Shower Head with High Pressure & Handheld Spray Combo - Upgrade Extension Arm Height Adjustable, Hotel Toilet Shower2025, Dual Shower Heads",
              sales_tip_text_list: ["11K+", "sold"],
              sold_quantity_percent: 22,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "246973255",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGozKi9yt6tz49Ap1OrQzXLrsQYt2qacw1PGtwbVgsPR+BxufphQvpmL3taJE8sKY6dEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "4061883977187511762",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "246973255",
                g: "601099615921614",
                scene_id: "3",
                show_price: "1487",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "52",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "1066232083670180548",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418216984670,
              sales_num: "11K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099615921614&_oak_mp_inf=EM7L08im1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO7RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F91966a10-b4a6-40b1-80c3-012291b4351f.jpg&spec_gallery_id=601099615921614&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ4Nw&_oak_gallery_order=246973255%2C1050476262%2C680807364%2C42297332%2C974224250",
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099615921614&_oak_mp_inf=EM7L08im1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO7RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F91966a10-b4a6-40b1-80c3-012291b4351f.jpg&spec_gallery_id=601099615921614&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ4Nw&_oak_gallery_order=246973255%2C1050476262%2C680807364%2C42297332%2C974224250&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112701569313531342",
                sku_extra_param: {
                  _oak_gallery_order:
                    "246973255,1050476262,680807364,42297332,974224250",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Bath in Black","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"746"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"746"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Bath in Black",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "BEST-SELLING ITEM",
                  ranking_id: "746",
                },
              ],
              show_index: 52,
              price_info: {
                split_price_text: ["$", "14", ".87", ""],
                reduction_text: ["-13", "%"],
                price: 1487,
                market_price_str: "$17.23",
                market_price: 1723,
                price_schema: "14.87",
                currency: "USD",
                price_text: ["$", "14.87", ""],
                price_str: "$14.87",
                reduction: 130,
                market_price_text: ["$", "17.23", ""],
              },
              image: {
                width: 375,
                id: 601099615921614,
                url_id: "4061883977187511762",
                url: "https://img.kwcdn.com/product/fancy/91966a10-b4a6-40b1-80c3-012291b4351f.jpg",
                height: 375,
              },
              sales_tip: "11K+ sold",
              visible: true,
              goods_id: 601099615921614,
              opt_id: 749,
              seo_link_url:
                "/12-inch-all-metal-3-way-rain-shower-head-high-pressure-shower-head-dual-shower-heads-with-handheld-spray-combo-upgrade-extension-arm-height-adjustable-hotel-toilet-shower2025-g-601099615921614.html?&_oak_mp_inf=EM7L08im1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO7RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F91966a10-b4a6-40b1-80c3-012291b4351f.jpg&spec_gallery_id=601099615921614&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ4Nw&_oak_gallery_order=246973255%2C1050476262%2C680807364%2C42297332%2C974224250",
              queryReleScore: 0.0,
              sales_tip_text: ["11K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.6,
                hidden_comment: false,
                comment_num_tips: "1,340",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 6,
                percent: 8860,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/123754a2-a64c-44c2-93be-833a01fcdb86.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-15%",
              },
              item_type: 0,
              page_alt:
                "1pc home electronic body weight scale digital bathroom scale usb charging thickening and durable hd   to     electronic weighing suitable for home use",
              current_sku_id: 17608498043224,
              tags_info: {
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                goods_tags: [
                  {
                    color: "#555555",
                    ext_map: {
                      lowest_tag_up_flag: "1",
                      lowest_price_before_title: "Lowest ever",
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91048,
                    text: "Lowest price ever",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/ccadbc0bce74fde0383466f7ec9b9eb9d3cd5d80.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/123754a2-a64c-44c2-93be-833a01fcdb86.jpg",
                url: "https://img.kwcdn.com/product/639bfb00a4bec2090de866be7ad912e5b55d3ab0.goods.000001.jpeg",
              },
              title:
                "1pc Smart Scale For Body Weight - High Precision Digital Bathroom Scale, USB Charging, HD Display, Thickened Tempered Glass, For Home, Gym, Health Tracking",
              sales_tip_text_list: ["431", "sold"],
              sold_quantity_percent: 33,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "960716326",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoZeEQWINP+zeen3TkVCaIVYDY4+7PaPYYywJVXuUtCmRR+U8Wljl42AdGXFQZuXdMEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "3824290138496468435",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "960716326",
                g: "601102287470212",
                scene_id: "3",
                show_price: "682",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "53",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "5082028104512384240",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418222836934,
              sales_num: "431",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102287470212&_oak_mp_inf=EIT9xcKw1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO7RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F123754a2-a64c-44c2-93be-833a01fcdb86.jpg&spec_gallery_id=205698365859&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Njgy&_oak_gallery_order=960716326%2C2019425971%2C1369572014%2C1592202196%2C179242737",
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601102287470212&_oak_mp_inf=EIT9xcKw1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO7RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F123754a2-a64c-44c2-93be-833a01fcdb86.jpg&spec_gallery_id=205698365859&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Njgy&_oak_gallery_order=960716326%2C2019425971%2C1369572014%2C1592202196%2C179242737&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112723555980902020",
                sku_extra_param: {
                  _oak_gallery_order:
                    "960716326,2019425971,1369572014,1592202196,179242737",
                },
              },
              goods_tags: [
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "1",
                    lowest_price_before_title: "Lowest ever",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price ever",
                  tag_series: 2,
                },
              ],
              show_index: 53,
              price_info: {
                split_price_text: ["$", "6", ".82", ""],
                reduction_text: ["-15", "%"],
                price: 682,
                market_price_str: "$8.10",
                market_price: 810,
                price_schema: "6.82",
                currency: "USD",
                price_text: ["$", "6.82", ""],
                price_str: "$6.82",
                reduction: 150,
                market_price_text: ["$", "8.10", ""],
              },
              image: {
                width: 800,
                id: 205698365859,
                url_id: "3824290138496468435",
                url: "https://img.kwcdn.com/product/fancy/123754a2-a64c-44c2-93be-833a01fcdb86.jpg",
                height: 800,
              },
              sales_tip: "431 sold",
              visible: true,
              goods_id: 601102287470212,
              opt_id: 749,
              seo_link_url:
                "/1pc-home-electronic-body-weight-scale-digital-bathroom-scale-usb-charging-thickening-and-durable-hd--to---electronic-weighing-suitable-for-home-use-g-601102287470212.html?&_oak_mp_inf=EIT9xcKw1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO7RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F123754a2-a64c-44c2-93be-833a01fcdb86.jpg&spec_gallery_id=205698365859&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Njgy&_oak_gallery_order=960716326%2C2019425971%2C1369572014%2C1592202196%2C179242737",
              queryReleScore: 0.0,
              sales_tip_text: ["431", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.5,
                hidden_comment: true,
                comment_num_tips: "49",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 5,
                percent: 7820,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/4ead47c5-bda0-4758-b2f3-6388b5c6e209.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-25%",
              },
              item_type: 0,
              page_alt:
                " s for large rooms up to 1076   h13 true hepa filter with scented sponge 25db quiet   for bedrooms and homes odor   compact appliance highefficiency filtration   home   allergy sufferers",
              current_sku_id: 17614093537631,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#4 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Air Quality","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"6841"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"6841"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Air Quality",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#4 BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#4 BEST-SELLING ITEM",
                    ranking_id: "6841",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/153add0f37111dc070042aca08a6fe0e45e648c2gs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/4ead47c5-bda0-4758-b2f3-6388b5c6e209.jpg",
                url: "https://img.kwcdn.com/product/767f64c900913f47baf8af3bd0f4a4a0d91fd86d.temu.000001.jpeg",
              },
              title:
                "Air Purifiers for Large Rooms up to 1076 Sqft, H13 True HEPA Filter with Scented Sponge, 25dB Quiet Air Purifier for Bedrooms and Homes, Odor Elimination, Compact Appliance, Highefficiency Filtration, Quiet Operation, Home Users, Allergy Sufferers",
              sales_tip_text_list: ["3.9K+", "sold"],
              sold_quantity_percent: 34,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "842444572",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoZNg5ocSG52S9Azr04z9T3av/pLHa3SnSZayZU1gVuEkgmBYzF5xPPGtjAqd+AyUnEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "4143704332779635943",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "842444572",
                g: "601100286051111",
                scene_id: "3",
                show_price: "2919",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "54",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "5841388912786250110",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418218290923,
              sales_num: "3.9K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601100286051111&_oak_mp_inf=EKeGmYip1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO7RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F4ead47c5-bda0-4758-b2f3-6388b5c6e209.jpg&spec_gallery_id=5293351185&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjkxOQ&_oak_gallery_order=842444572%2C1469689221%2C940693958%2C86947218%2C1630223726",
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601100286051111&_oak_mp_inf=EKeGmYip1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO7RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F4ead47c5-bda0-4758-b2f3-6388b5c6e209.jpg&spec_gallery_id=5293351185&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjkxOQ&_oak_gallery_order=842444572%2C1469689221%2C940693958%2C86947218%2C1630223726&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112721369364382503",
                sku_extra_param: {
                  _oak_gallery_order:
                    "842444572,1469689221,940693958,86947218,1630223726",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#4 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Air Quality","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"6841"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"6841"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Air Quality",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#4 BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#4 BEST-SELLING ITEM",
                  ranking_id: "6841",
                },
              ],
              show_index: 54,
              price_info: {
                split_price_text: ["$", "29", ".19", ""],
                reduction_text: ["-25", "%"],
                price: 2919,
                market_price_str: "$39.26",
                market_price: 3926,
                price_schema: "29.19",
                currency: "USD",
                price_text: ["$", "29.19", ""],
                price_str: "$29.19",
                reduction: 250,
                market_price_text: ["$", "39.26", ""],
              },
              image: {
                width: 1600,
                id: 5293351185,
                url_id: "4143704332779635943",
                url: "https://img.kwcdn.com/product/fancy/4ead47c5-bda0-4758-b2f3-6388b5c6e209.jpg",
                height: 1600,
              },
              sales_tip: "3.9K+ sold",
              visible: true,
              goods_id: 601100286051111,
              opt_id: 6842,
              seo_link_url:
                "/s-for-large-rooms-up-to-1076--h13-true-hepa-filter-with-scented-sponge-25db-quiet--for-bedrooms-and-homes-odor--compact-appliance-highefficiency-filtration--home--allergy-sufferers-g-601100286051111.html?&_oak_mp_inf=EKeGmYip1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO7RnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F4ead47c5-bda0-4758-b2f3-6388b5c6e209.jpg&spec_gallery_id=5293351185&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjkxOQ&_oak_gallery_order=842444572%2C1469689221%2C940693958%2C86947218%2C1630223726",
              queryReleScore: 0.0,
              sales_tip_text: ["3.9K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "494",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 7280,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/512f6a1b-2618-4f9a-aeaa-86b7a93aeb5e.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-20%",
              },
              item_type: 0,
              page_alt:
                "digital bathroom scale with lcd display temperature   body weight scale   platform supports 396 lbs 180kg kg switchable   function low indicator for use bedside tracking",
              current_sku_id: 17610257573106,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Bath","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"746"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"746"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Bath",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "BEST-SELLING ITEM",
                    ranking_id: "746",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/bf1b9c654503d4a8f08db6d7e86b2a90f44c14cdgs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/512f6a1b-2618-4f9a-aeaa-86b7a93aeb5e.jpg",
                url: "https://img.kwcdn.com/product/92ee52aa66705015c25f7ead7de6a22b9f771964.temu.000001.jpeg",
              },
              title:
                "Digital Bathroom Scale with LCD Display & Temperature - High-Precision Body Weight Scale, Ultra-Wide Platform (Supports 396 lbs/180kg), kg/ Switchable, Tare Function & Low Indicator for Use, Bedside, Tracking",
              sales_tip_text_list: ["1.1K+", "sold"],
              sold_quantity_percent: 84,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "684084562",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGo49PC6A2SSPYAzW53SPQ20BOItFX+j7cwT8UD12YVuu2HVUi1yKZih/1OVHxIaUGCEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "6873228422957896633",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "684084562",
                g: "601103526051140",
                scene_id: "3",
                show_price: "467",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "55",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "3153558541379383590",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418220843305,
              sales_num: "1.1K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601103526051140&_oak_mp_inf=EMT6kpG11ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F512f6a1b-2618-4f9a-aeaa-86b7a93aeb5e.jpg&spec_gallery_id=210823646683&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTA5&_oak_gallery_order=684084562%2C1982997947%2C1622395577%2C605051410%2C241362106",
              extend_fields: {
                market_map: {
                  "220001": {
                    showTag: false,
                    couponBatchSn: "",
                    marketingToolType: 220001,
                    endTime: 1765295999000,
                    savingPrice: 42,
                    appliedPrice: true,
                    promotionId: "A00051C-4698732154975240489176102575731060",
                  },
                },
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601103526051140&_oak_mp_inf=EMT6kpG11ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F512f6a1b-2618-4f9a-aeaa-86b7a93aeb5e.jpg&spec_gallery_id=210823646683&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTA5&_oak_gallery_order=684084562%2C1982997947%2C1622395577%2C605051410%2C241362106&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112714794407017796",
                sku_extra_param: {
                  _oak_gallery_order:
                    "684084562,1982997947,1622395577,605051410,241362106",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Bath","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"746"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"746"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Bath",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "BEST-SELLING ITEM",
                  ranking_id: "746",
                },
              ],
              show_index: 55,
              price_info: {
                split_price_text: ["$", "4", ".67", ""],
                reduction_text: ["-27", "%"],
                price: 467,
                market_price_str: "$6.41",
                market_price: 641,
                price_schema: "$4.67",
                currency: "USD",
                price_text: ["$", "4.67", ""],
                price_str: "$4.67",
                price_color: "#000000",
                reduction: 271,
                market_price_text: ["$", "6.41", ""],
              },
              image: {
                width: 1600,
                id: 210823646683,
                url_id: "6873228422957896633",
                url: "https://img.kwcdn.com/product/fancy/512f6a1b-2618-4f9a-aeaa-86b7a93aeb5e.jpg",
                height: 1600,
              },
              sales_tip: "1.1K+ sold",
              visible: true,
              goods_id: 601103526051140,
              opt_id: 749,
              seo_link_url:
                "/digital-bathroom-scale-with-lcd-display-temperature--body-weight-scale--platform-supports-396-lbs-180kg-kg-switchable--function-low-indicator-for-use-bedside-tracking-g-601103526051140.html?&_oak_mp_inf=EMT6kpG11ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F512f6a1b-2618-4f9a-aeaa-86b7a93aeb5e.jpg&spec_gallery_id=210823646683&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTA5&_oak_gallery_order=684084562%2C1982997947%2C1622395577%2C605051410%2C241362106",
              queryReleScore: 0.0,
              sales_tip_text: ["1.1K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "139",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 5,
                percent: 8310,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/eebc3abe-65e3-492c-ab16-c735147a2962.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-44%",
              },
              item_type: 0,
              page_alt:
                "5 tray food dehydrator machine with digital timer thermostat heavy duty stainless 201   tray dehydrator for jerky fruits vegetables herbs yogurt pet treats energy saving   operation dishwasher safe trays",
              current_sku_id: 17612914081161,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"SUSTEAS","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: SUSTEAS",
                    tag_series: 2,
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#9 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Small Appliances & Accessories: Stainless Steel","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"1853"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"1853"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Small Appliances & Accessories: Stainless Steel",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#9 BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#9 BEST-SELLING ITEM",
                    ranking_id: "1853",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/fa96b7f3a900129c50a8c0a7e391e5e8b51e4d6bgs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/eebc3abe-65e3-492c-ab16-c735147a2962.jpg",
                url: "https://img.kwcdn.com/product/dac4beb10065bda483c43d2fcdc184b74ba4f8e7.temu.000001.jpeg",
              },
              title:
                "5-Tray Food Dehydrator Machine with Digital Timer & Thermostat - Heavy-Duty Stainless (201 Grade) 5-Tray Dehydrator for Jerky, Fruits, Vegetables, Herbs, Yogurt, Pet Treats - Energy-Saving, Ultra-Quiet Operation, Dishwasher-Safe Trays,",
              sales_tip_text_list: ["1.1K+", "sold"],
              sold_quantity_percent: 51,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "286416187",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoqzYJQI+y5syMlV+u6k0eTxd0jIPoz+/oX0+rPhyX71uW6Oxu9GvuMjWe/dcgUA7jEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "2645354831749884010",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "286416187",
                g: "601103161494387",
                scene_id: "3",
                show_price: "2363",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "56",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "7915842891514801332",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418215805902,
              sales_num: "1.1K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601103161494387&_oak_mp_inf=EPOWqOOz1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Feebc3abe-65e3-492c-ab16-c735147a2962.jpg&spec_gallery_id=209192294548&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM2Mw&_oak_gallery_order=286416187%2C291608156%2C920230341%2C1603812340%2C279991253",
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601103161494387&_oak_mp_inf=EPOWqOOz1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Feebc3abe-65e3-492c-ab16-c735147a2962.jpg&spec_gallery_id=209192294548&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM2Mw&_oak_gallery_order=286416187%2C291608156%2C920230341%2C1603812340%2C279991253&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112723557901863795",
                sku_extra_param: {
                  _oak_gallery_order:
                    "286416187,291608156,920230341,1603812340,279991253",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#9 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Small Appliances & Accessories: Stainless Steel","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"1853"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"1853"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Small Appliances & Accessories: Stainless Steel",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#9 BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#9 BEST-SELLING ITEM",
                  ranking_id: "1853",
                },
              ],
              show_index: 56,
              price_info: {
                split_price_text: ["$", "23", ".63", ""],
                reduction_text: ["-44", "%"],
                price: 2363,
                market_price_str: "$42.40",
                market_price: 4240,
                price_schema: "23.63",
                currency: "USD",
                price_text: ["$", "23.63", ""],
                price_str: "$23.63",
                reduction: 440,
                market_price_text: ["$", "42.40", ""],
              },
              image: {
                width: 2000,
                id: 209192294548,
                url_id: "2645354831749884010",
                url: "https://img.kwcdn.com/product/fancy/eebc3abe-65e3-492c-ab16-c735147a2962.jpg",
                height: 2000,
              },
              sales_tip: "1.1K+ sold",
              visible: true,
              goods_id: 601103161494387,
              opt_id: 1854,
              seo_link_url:
                "/5-tray-food-dehydrator-machine-with-digital-timer-thermostat-heavy-duty-stainless-201--tray-dehydrator-for-jerky-fruits-vegetables-herbs-yogurt-pet-treats-energy-saving--operation-dishwasher-safe-trays-g-601103161494387.html?&_oak_mp_inf=EPOWqOOz1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Feebc3abe-65e3-492c-ab16-c735147a2962.jpg&spec_gallery_id=209192294548&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM2Mw&_oak_gallery_order=286416187%2C291608156%2C920230341%2C1603812340%2C279991253",
              queryReleScore: 0.0,
              sales_tip_text: ["1.1K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "71",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 7460,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/7574dfe1-4a34-4397-a79f-63e6225576e4.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-7%",
              },
              item_type: 0,
              page_alt:
                "3 in 1 electric indoor grill   with non stick plates 180 opening angle floating hinge grease tray 304 stainless steel sandwich maker with preheat indicator light   for   steaks chicken all in one appliance",
              current_sku_id: 17593694381045,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"SUSTEAS","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: SUSTEAS",
                    tag_series: 2,
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#7 TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Small Appliances & Accessories","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"1853"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"1853"}}}',
                    },
                    prompt_tag_text:
                      "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Small Appliances & Accessories",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#7 TOP RATED",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#7 TOP RATED",
                    ranking_id: "1853",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/2efc7441e34d8b594652cd3c5196b93cb0b628c3.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/7574dfe1-4a34-4397-a79f-63e6225576e4.jpg",
                url: "https://img.kwcdn.com/product/385daf52cc6bce0fafbfaad1f601fa4f34e3915c.goods.000001.jpeg",
              },
              title:
                "3-in-1 Electric Indoor Grill & Panini Press with Non-Stick Plates, 180° Opening Angle, Floating Hinge & Grease Tray - 304 Stainless Steel Sandwich Maker with Preheat Indicator Light, Compact Design for Burgers, Steaks, Chicken - All-in-One Appliance",
              sales_tip_text_list: ["4.6K+", "sold"],
              sold_quantity_percent: 15,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1337029864",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGogZAIS2xBreLl3ayPQBUbG5a42k1myTzEoLp58ugZYvY3ClZkiDRXzfD4qH5sm94ZEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "6933522686465750222",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "1337029864",
                g: "601099756410736",
                scene_id: "3",
                show_price: "1655",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "57",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "1395796166785542691",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418218931726,
              sales_num: "4.6K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099756410736&_oak_mp_inf=EPCu0oun1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7574dfe1-4a34-4397-a79f-63e6225576e4.jpg&spec_gallery_id=2768587541&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTY1NQ&_oak_gallery_order=1337029864%2C1146703387%2C171040196%2C1543748816%2C476585430",
              extend_fields: {
                sale_fire_flag: true,
                mall_view_type: 2,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099756410736&_oak_mp_inf=EPCu0oun1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7574dfe1-4a34-4397-a79f-63e6225576e4.jpg&spec_gallery_id=2768587541&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTY1NQ&_oak_gallery_order=1337029864%2C1146703387%2C171040196%2C1543748816%2C476585430&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112723551945987952",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1337029864,1146703387,171040196,1543748816,476585430",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#7 TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Small Appliances & Accessories","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"1853"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"1853"}}}',
                  },
                  prompt_tag_text:
                    "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Small Appliances & Accessories",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#7 TOP RATED",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#7 TOP RATED",
                  ranking_id: "1853",
                },
              ],
              show_index: 57,
              price_info: {
                split_price_text: ["$", "16", ".55", ""],
                reduction_text: ["-7", "%"],
                price: 1655,
                market_price_str: "$17.90",
                market_price: 1790,
                price_schema: "16.55",
                currency: "USD",
                price_text: ["$", "16.55", ""],
                price_str: "$16.55",
                reduction: 70,
                market_price_text: ["$", "17.90", ""],
              },
              image: {
                width: 2000,
                id: 2768587541,
                url_id: "6933522686465750222",
                url: "https://img.kwcdn.com/product/fancy/7574dfe1-4a34-4397-a79f-63e6225576e4.jpg",
                height: 2000,
              },
              sales_tip: "4.6K+ sold",
              visible: true,
              goods_id: 601099756410736,
              opt_id: 1854,
              seo_link_url:
                "/3-in-1-electric-indoor-grill--with-non-stick-plates-180-opening-angle-floating-hinge-grease-tray-304-stainless-steel-sandwich-maker-with-preheat-indicator-light--for--steaks-chicken-all-in-one-appliance-g-601099756410736.html?&_oak_mp_inf=EPCu0oun1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7574dfe1-4a34-4397-a79f-63e6225576e4.jpg&spec_gallery_id=2768587541&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTY1NQ&_oak_gallery_order=1337029864%2C1146703387%2C171040196%2C1543748816%2C476585430",
              queryReleScore: 0.0,
              sales_tip_text: ["4.6K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "797",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 5,
                percent: 7940,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/c4c68c84-7f75-4dd5-af6a-ba77fd8a5066.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "adult cordless electric lunch box 8000mah battery powered 60w 1 liter portable timer   food warmer portable food heater for home car office truck portable electric lunch box",
              current_sku_id: 17604167731163,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Storage & Organization: Plastic","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"1723"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"1723"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Kitchen Storage & Organization: Plastic",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "BEST-SELLING ITEM",
                    ranking_id: "1723",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/0f3fdc61a89ea96de53934fd34b054ec1e541cc3gs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/c4c68c84-7f75-4dd5-af6a-ba77fd8a5066.jpg",
                url: "https://img.kwcdn.com/product/4249bf3de1239fd86410f94b27236af1482c66e4.temu.000001.jpeg",
              },
              title:
                "Adult Cordless Electric Lunch Box, 8000mAh Battery Powered, 60W 1 Liter Portable Timer Automatic Heating Food Warmer, Portable Food Heater For Home/Car/Office/Truck, Portable Electric Lunch Box",
              sales_tip_text_list: ["1.3K+", "sold"],
              sold_quantity_percent: 50,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "2010294658",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoab3X9PvFAFP99ALRvvJUZvrEEGyL+UFGu2tl1lE5Dnpd/gKQInHeYX9/Tfl/bhoCEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "6901244269880070053",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "2010294658",
                g: "601102329628444",
                scene_id: "3",
                show_price: "4059",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "58",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "2742949206091232489",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418217352954,
              sales_num: "1.3K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102329628444&_oak_name_id=2742949206091232489&_oak_mp_inf=EJyO09aw1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc4c68c84-7f75-4dd5-af6a-ba77fd8a5066.jpg&spec_gallery_id=206422436307&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDA1OQ&_oak_gallery_order=2010294658%2C822380799%2C921974585%2C281343638%2C262293846",
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601102329628444&_oak_name_id=2742949206091232489&_oak_mp_inf=EJyO09aw1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc4c68c84-7f75-4dd5-af6a-ba77fd8a5066.jpg&spec_gallery_id=206422436307&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDA1OQ&_oak_gallery_order=2010294658%2C822380799%2C921974585%2C281343638%2C262293846&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112716956428125980",
                sku_extra_param: {
                  _oak_gallery_order:
                    "2010294658,822380799,921974585,281343638,262293846",
                  _oak_name_id: "2742949206091232489",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Storage & Organization: Plastic","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"1723"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"1723"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Kitchen Storage & Organization: Plastic",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "BEST-SELLING ITEM",
                  ranking_id: "1723",
                },
              ],
              show_index: 58,
              price_info: {
                split_price_text: ["$", "40", ".59", ""],
                reduction_text: [],
                price: 4059,
                price_schema: "40.59",
                currency: "USD",
                price_text: ["$", "40.59", ""],
                price_str: "$40.59",
              },
              image: {
                width: 1600,
                id: 206422436307,
                url_id: "6901244269880070053",
                url: "https://img.kwcdn.com/product/fancy/c4c68c84-7f75-4dd5-af6a-ba77fd8a5066.jpg",
                height: 1600,
              },
              sales_tip: "1.3K+ sold",
              visible: true,
              goods_id: 601102329628444,
              opt_id: 1724,
              seo_link_url:
                "/adult-cordless-electric-lunch-box-8000mah-battery-powered-60w-1-liter-portable-timer--food-warmer-portable-food-heater-for-home-car-office-truck-portable-electric-lunch-box-g-601102329628444.html?&_oak_name_id=2742949206091232489&_oak_mp_inf=EJyO09aw1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc4c68c84-7f75-4dd5-af6a-ba77fd8a5066.jpg&spec_gallery_id=206422436307&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDA1OQ&_oak_gallery_order=2010294658%2C822380799%2C921974585%2C281343638%2C262293846",
              queryReleScore: 0.0,
              sales_tip_text: ["1.3K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "113",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 7170,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/dc1e8cb8-a050-485b-ad8e-00699c0f52f1.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-40%",
              },
              item_type: 0,
              page_alt:
                "6 7 9 12 21 24 30 72pcs sealed kitchen crisper bpa free labeled and labeled food storage containers cupboards sealed living room jars for   preservation of   sugar and   kitchen set tools",
              current_sku_id: 17593237433700,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"VOOVA","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: VOOVA",
                    tag_series: 2,
                    height: 39,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/746bc737cd5f95561dc632b6d425e7570682df55.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/dc1e8cb8-a050-485b-ad8e-00699c0f52f1.jpg",
                url: "https://img.kwcdn.com/product/00dbd1ee8a6da4c6eb3270f56e742b020e889fbe.goods.000001.jpeg",
              },
              title:
                "6/7/9/12/21/24/30/72pcs Sealed Kitchen Crisper, Bpa-Free Labeled And Labeled Food Storage Containers, Cupboards, Sealed Living Room Jars for Longer Preservation of Pasta, Snacks, Sugar And Grains, Kitchen Set Tools",
              sales_tip_text_list: ["39K+", "sold"],
              sold_quantity_percent: 1,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1090855943",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGo4cEn1B3AKCRfKkpJa4G2WBnxUhoGX7NdJmrrIkXy78J3NO9mRZXxvHpaGyEMvrrJEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "8481435704031772139",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "1090855943",
                g: "601099565007050",
                scene_id: "3",
                show_price: "1313",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "59",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "4762697025191484172",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418214343399,
              sales_num: "39K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099565007050&_oak_mp_inf=EMqBsLCm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fdc1e8cb8-a050-485b-ad8e-00699c0f52f1.jpg&spec_gallery_id=601099565007050&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTMxMw&_oak_gallery_order=1090855943%2C1837800874%2C1392123067%2C1670734138%2C2039628904",
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099565007050&_oak_mp_inf=EMqBsLCm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fdc1e8cb8-a050-485b-ad8e-00699c0f52f1.jpg&spec_gallery_id=601099565007050&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTMxMw&_oak_gallery_order=1090855943%2C1837800874%2C1392123067%2C1670734138%2C2039628904&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112712555856593098",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1090855943,1837800874,1392123067,1670734138,2039628904",
                },
              },
              goods_tags: [],
              show_index: 59,
              price_info: {
                split_price_text: ["$", "13", ".13", ""],
                reduction_text: ["-40", "%"],
                price: 1313,
                market_price_str: "$22.12",
                market_price: 2212,
                price_schema: "13.13",
                currency: "USD",
                price_text: ["$", "13.13", ""],
                price_str: "$13.13",
                reduction: 400,
                market_price_text: ["$", "22.12", ""],
              },
              image: {
                width: 375,
                id: 601099565007050,
                url_id: "8481435704031772139",
                url: "https://img.kwcdn.com/product/fancy/dc1e8cb8-a050-485b-ad8e-00699c0f52f1.jpg",
                height: 375,
              },
              sales_tip: "39K+ sold",
              visible: true,
              goods_id: 601099565007050,
              opt_id: 1724,
              seo_link_url:
                "/6-7-9-12-21-24-30-72pcs-sealed-kitchen-crisper-bpa-free-labeled-and-labeled-food-storage-containers-cupboards-sealed-living-room-jars-for--preservation-of--sugar-and--kitchen-set-tools-g-601099565007050.html?&_oak_mp_inf=EMqBsLCm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIO%2FRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fdc1e8cb8-a050-485b-ad8e-00699c0f52f1.jpg&spec_gallery_id=601099565007050&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTMxMw&_oak_gallery_order=1090855943%2C1837800874%2C1392123067%2C1670734138%2C2039628904",
              queryReleScore: 0.0,
              sales_tip_text: ["39K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "4,759",
              },
              adult_goods: false,
            },
            {
              thumb_url:
                "https://img.kwcdn.com/product/open/2024-09-10/1725967773868-0bf9f361bdc04958be4d1e0ae8b8d91e-goods.jpeg",
              ware_house_type: 0,
              benefit_text: {
                text: "-29%",
              },
              item_type: 0,
              page_alt:
                "stainless steel garlic   clean portable   tool for   and chopping garlic     durable stylish design garlic crusher garlic   garlic crusher  s garlic chopper kitchen accessory kitchen utensil kitchen item",
              current_sku_id: 17601208585175,
              tags_info: {
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Utensils & Supplies","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"732"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"732"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Kitchen Utensils & Supplies",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "BEST-SELLING ITEM",
                    ranking_id: "732",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/440ab965de1b472356b74a987223fb8b0921c304.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/open/2024-09-10/1725967773868-0bf9f361bdc04958be4d1e0ae8b8d91e-goods.jpeg",
                url: "https://img.kwcdn.com/product/12edfab32b6bffc60d070599066cabfa87c3b8b0.goods.000001.jpeg",
              },
              title:
                "Stainless Steel Garlic Press - Easy-Clean, Portable & Compact Kitchen Tool for Crushing and Chopping Garlic, Perfect for All Seasons, Durable & Stylish Design, Garlic Crusher, Garlic Pres, Garlic Crusher/press, Garlic Chopper, Kitchen Accessory, Kitchen Utensil, Kitchen Item",
              sales_tip_text_list: ["18K+", "sold"],
              sold_quantity_percent: 55,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1018510672",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGowLI8DzQbKLz0oSkWX5xrFLzMMrYAhT1fw09JN0svZcPxSUswXOS4vavlJvNEKRlpEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "1011964767746542645",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "1018510672",
                g: "601101725663912",
                scene_id: "3",
                show_price: "303",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "60",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "3188775883095134898",
                ts: "1762677696797",
              },
              activity_type: 13,
              mall_id: 634418222198850,
              sales_num: "18K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601101725663912&_oak_name_id=3188775883095134898&_oak_mp_inf=EKiF1Lau1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-09-10%2F1725967773868-0bf9f361bdc04958be4d1e0ae8b8d91e-goods.jpeg&spec_gallery_id=203496492910&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzAz&_oak_gallery_order=1018510672%2C1820742171%2C597413529",
              extend_fields: {
                support_tag_carousel: true,
                detail_id: "112725762939749032",
                sku_extra_param: {
                  _oak_gallery_order: "1018510672,1820742171,597413529",
                  _oak_name_id: "3188775883095134898",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Utensils & Supplies","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"732"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"732"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Kitchen Utensils & Supplies",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "BEST-SELLING ITEM",
                  ranking_id: "732",
                },
              ],
              show_index: 60,
              price_info: {
                split_price_text: ["$", "3", ".03", ""],
                reduction_text: ["-29", "%"],
                price: 303,
                market_price_str: "$4.31",
                market_price: 431,
                price_schema: "3.03",
                currency: "USD",
                price_text: ["$", "3.03", ""],
                price_str: "$3.03",
                reduction: 290,
                market_price_text: ["$", "4.31", ""],
              },
              image: {
                width: 1500,
                id: 203496492910,
                url_id: "1011964767746542645",
                url: "https://img.kwcdn.com/product/open/2024-09-10/1725967773868-0bf9f361bdc04958be4d1e0ae8b8d91e-goods.jpeg",
                height: 1500,
              },
              sales_tip: "18K+ sold",
              visible: true,
              goods_id: 601101725663912,
              opt_id: 734,
              seo_link_url:
                "/stainless-steel-garlic--clean-portable--tool-for--and-chopping-garlic---durable-stylish-design-garlic-crusher-garlic--garlic-crusher-s-garlic-chopper-kitchen-accessory-kitchen-utensil-kitchen-item-g-601101725663912.html?&_oak_name_id=3188775883095134898&_oak_mp_inf=EKiF1Lau1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-09-10%2F1725967773868-0bf9f361bdc04958be4d1e0ae8b8d91e-goods.jpeg&spec_gallery_id=203496492910&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzAz&_oak_gallery_order=1018510672%2C1820742171%2C597413529",
              queryReleScore: 0.0,
              sales_tip_text: ["18K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "594",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 7380,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/0fed8bfb-8ff4-499b-98d7-b518d8a6ec2d.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-50%",
              },
              item_type: 0,
              page_alt:
                "1 2pcs corner floor lamp 61 42 156cm modern rgb led mood lighting with remote app control music sync mode timer     6000k tall standing lamp for living room bedroom game room halloween christmas gift",
              current_sku_id: 17594963040188,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#1 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Lighting & Ceiling Fans: Modern","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"773"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"773"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Lighting & Ceiling Fans: Modern",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#1 BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#1 BEST-SELLING ITEM",
                    ranking_id: "773",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/b0385ffe22f2f48d374e4dc3ade32d98fc6db2b1.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/0fed8bfb-8ff4-499b-98d7-b518d8a6ec2d.jpg",
                url: "https://img.kwcdn.com/product/9b6fd6b117df23c1a1dcbec5fa11cbabbee8d138.goods.000001.jpeg",
              },
              title:
                '1/2pcs Corner Floor Lamp 61.42" (156cm) Modern RGB LED Mood Lighting With Remote APP Control, Music Sync, Mode, Timer, RGBCW 2000K-6000K Tall Standing Lamp For Living Room, Bedroom, Game Room, Halloween Christmas Gift',
              sales_tip_text_list: ["9.8K+", "sold"],
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "680404560",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoPTvYlt0SiMAD9tAaEAUPkUEPGTKc6M8OfPNY1/Ovxfvm1Xqj1NG9eNAvP2Sm1NAVEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "1744199810109514288",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "680404560",
                g: "601099631505418",
                scene_id: "3",
                show_price: "2964",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "61",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "3708850512628320387",
                ts: "1762677696798",
              },
              mall_id: 634418216267425,
              sales_num: "9.8K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099631505418&_oak_mp_inf=EIrgitCm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F0fed8bfb-8ff4-499b-98d7-b518d8a6ec2d.jpg&spec_gallery_id=6317405870&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk2NA&_oak_gallery_order=680404560%2C306017822%2C616447694%2C1710618945%2C1595725117",
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099631505418&_oak_mp_inf=EIrgitCm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F0fed8bfb-8ff4-499b-98d7-b518d8a6ec2d.jpg&spec_gallery_id=6317405870&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk2NA&_oak_gallery_order=680404560%2C306017822%2C616447694%2C1710618945%2C1595725117&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "680404560,306017822,616447694,1710618945,1595725117",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#1 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Lighting & Ceiling Fans: Modern","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"773"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"773"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Lighting & Ceiling Fans: Modern",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#1 BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#1 BEST-SELLING ITEM",
                  ranking_id: "773",
                },
              ],
              show_index: 61,
              price_info: {
                split_price_text: ["$", "29", ".64", ""],
                reduction_text: ["-50", "%"],
                price: 2964,
                market_price_str: "$59.96",
                market_price: 5996,
                price_schema: "29.64",
                currency: "USD",
                price_text: ["$", "29.64", ""],
                price_str: "$29.64",
                market_price_text: ["$", "59.96", ""],
              },
              image: {
                width: 1600,
                id: 6317405870,
                url_id: "1744199810109514288",
                url: "https://img.kwcdn.com/product/fancy/0fed8bfb-8ff4-499b-98d7-b518d8a6ec2d.jpg",
                height: 1600,
              },
              sales_tip: "9.8K+ sold",
              visible: true,
              goods_id: 601099631505418,
              opt_id: 777,
              seo_link_url:
                "/1-2pcs-corner-floor-lamp-61-42-156cm-modern-rgb-led-mood-lighting-with-remote-app-control-music-sync-mode-timer---6000k-tall-standing-lamp-for-living-room-bedroom-game-room-halloween-christmas-gift-g-601099631505418.html?&_oak_mp_inf=EIrgitCm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F0fed8bfb-8ff4-499b-98d7-b518d8a6ec2d.jpg&spec_gallery_id=6317405870&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk2NA&_oak_gallery_order=680404560%2C306017822%2C616447694%2C1710618945%2C1595725117",
              queryReleScore: 0.0,
              sales_tip_text: ["9.8K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "564",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 5,
                percent: 8750,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/86409872-af34-485f-89fc-ac3d3c35077e.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-57%",
              },
              item_type: 0,
              page_alt:
                "two level organizers for under the sink featuring a sliding pull out shelf made of metal ideal for organizing kitchen bathroom pantry or closet spaces   in 1 pack   pack under sink bathroom cabinet under sink cabinet bathroom under sink storage cabinet under sink cabinet black kitchen cabinet organizer and storage pull out cabinet organizer for kitchen under cabinet organizer and storage pull down cabinet organizer under the sink organizer sliding cabinet",
              current_sku_id: 17592723512199,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#2 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Storage & Organization","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"1723"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"1723"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Kitchen Storage & Organization",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#2 BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#2 BEST-SELLING ITEM",
                    ranking_id: "1723",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/1f1f71a7a4eced4fa3a43c38786946e0fb2ef11a.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/86409872-af34-485f-89fc-ac3d3c35077e.jpg",
                url: "https://img.kwcdn.com/product/c193b5c536ae9bf758f223f0732c8aefa93a1e1f.goods.000001.jpeg",
              },
              title:
                "Two-Level Organizers for Under The Sink, Featuring a Sliding Pull-Out Shelf Made of Metal, Ideal for Organizing Kitchen, Bathroom, Pantry, Or Closet Spaces (Available in 1-Pack Or 2-Pack), Under Sink Bathroom Cabinet, Under Sink Cabinet Bathroom, Under Sink Storage Cabinet, Under Sink Cabinet Black, Kitchen Cabinet Organizer And Storage, Pull Out Cabinet Organizer For Kitchen, Under Cabinet Organizer And Storage, Pull Down Cabinet Organizer, Under The Sink Organizer, Sliding Cabinet",
              sales_tip_text_list: ["100K+", "sold"],
              sold_quantity_percent: 39,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "747048336",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoDr2HdrQuG1k7z4rG6o2/+Vgh+uBcCjGXcW/MEdBpIJ060Tg4NBcmKzYrktM7ecunEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "8505190426188287847",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "747048336",
                g: "601099651517081",
                scene_id: "3",
                show_price: "927",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "62",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "2828270453990733153",
                ts: "1762677696798",
              },
              activity_type: 13,
              mall_id: 634418217431313,
              sales_num: "100K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099651517081&_oak_mp_inf=EJmV0Nmm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F86409872-af34-485f-89fc-ac3d3c35077e.jpg&spec_gallery_id=2374817094&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=OTI3&_oak_gallery_order=747048336%2C545065046%2C1414597091%2C1860122318%2C945712838",
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099651517081&_oak_mp_inf=EJmV0Nmm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F86409872-af34-485f-89fc-ac3d3c35077e.jpg&spec_gallery_id=2374817094&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=OTI3&_oak_gallery_order=747048336%2C545065046%2C1414597091%2C1860122318%2C945712838&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112716972894915225",
                sku_extra_param: {
                  _oak_gallery_order:
                    "747048336,545065046,1414597091,1860122318,945712838",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#2 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Storage & Organization","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"1723"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"1723"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Kitchen Storage & Organization",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#2 BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#2 BEST-SELLING ITEM",
                  ranking_id: "1723",
                },
              ],
              show_index: 62,
              price_info: {
                split_price_text: ["$", "9", ".27", ""],
                reduction_text: ["-57", "%"],
                price: 927,
                market_price_str: "$21.93",
                market_price: 2193,
                price_schema: "9.27",
                currency: "USD",
                price_text: ["$", "9.27", ""],
                price_str: "$9.27",
                reduction: 570,
                market_price_text: ["$", "21.93", ""],
              },
              image: {
                width: 1200,
                id: 2374817094,
                url_id: "8505190426188287847",
                url: "https://img.kwcdn.com/product/fancy/86409872-af34-485f-89fc-ac3d3c35077e.jpg",
                height: 1200,
              },
              sales_tip: "100K+ sold",
              visible: true,
              goods_id: 601099651517081,
              opt_id: 1724,
              seo_link_url:
                "/two-level-organizers-for-under-the-sink-featuring-a-sliding-pull-out-shelf-made-of-metal-ideal-for-organizing-kitchen-bathroom-pantry-or-closet-spaces--in-1-pack--pack-under-sink-bathroom-cabinet-under-sink-cabinet-bathroom-under-sink-storage-cabinet-under-sink-cabinet-black-kitchen-cabinet-organizer-and-storage-pull-out-cabinet-organizer-for-kitchen-under-cabinet-organizer-and-storage-pull-down-cabinet-organizer-under-the-sink-organizer-sliding-cabinet-g-601099651517081.html?&_oak_mp_inf=EJmV0Nmm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F86409872-af34-485f-89fc-ac3d3c35077e.jpg&spec_gallery_id=2374817094&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=OTI3&_oak_gallery_order=747048336%2C545065046%2C1414597091%2C1860122318%2C945712838",
              queryReleScore: 0.0,
              sales_tip_text: ["100K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "11,136",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 8270,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/030de514-2f30-4d02-8131-1eb06e639fef.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-6%",
              },
              item_type: 0,
              page_alt:
                "2pcs gravity powered electric salt and pepper grinder battery powered led   handed automatic operation adjustable coarse grinder grinder black rocking chair   gadget gift battery powered  ",
              current_sku_id: 17593757364292,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 1 BUSINESS DAY",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"JIASLING","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: JIASLING",
                    tag_series: 2,
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#1 TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Utensils & Supplies","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"732"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"732"}}}',
                    },
                    prompt_tag_text:
                      "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Kitchen Utensils & Supplies",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#1 TOP RATED",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#1 TOP RATED",
                    ranking_id: "732",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/790217855c1074ea2c661999f99741d1a9e40685.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/030de514-2f30-4d02-8131-1eb06e639fef.jpg",
                url: "https://img.kwcdn.com/product/0ddb9cbf8d5645a96ce5285c6195a146f88a4d2e.goods.000001.jpeg",
              },
              title:
                "2PCS Gravity-powered Electric Salt and Pepper Grinder Battery-powered LED Light One-handed Automatic Operation Adjustable Coarse Grinder Grinder Black Rocking Chair Creative Kitchen Gadget Gift Battery-powered to Choose",
              sales_tip_text_list: ["86K+", "sold"],
              sold_quantity_percent: 78,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1115300747",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGo0BjdY6mmEu2wr8LYlho2EgU6i+6AXK5c9LOZ1JtxHXfoa4nUZN9OBzMcUth5JyqwEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "5247289271558221197",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "1115300747",
                g: "601099889081263",
                scene_id: "3",
                show_price: "789",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "63",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "5759328918438436171",
                ts: "1762677696798",
              },
              activity_type: 13,
              mall_id: 634418219465738,
              sales_num: "86K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099889081263&_oak_name_id=5759328918438436171&_oak_mp_inf=EK%2F388qn1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F030de514-2f30-4d02-8131-1eb06e639fef.jpg&spec_gallery_id=601099889081263&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Nzg5&_oak_gallery_order=1115300747%2C2119117238%2C1912700287%2C330836800%2C602862777",
              extend_fields: {
                sale_fire_flag: true,
                mall_view_type: 2,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099889081263&_oak_name_id=5759328918438436171&_oak_mp_inf=EK%2F388qn1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F030de514-2f30-4d02-8131-1eb06e639fef.jpg&spec_gallery_id=601099889081263&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Nzg5&_oak_gallery_order=1115300747%2C2119117238%2C1912700287%2C330836800%2C602862777&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112699365986925487",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1115300747,2119117238,1912700287,330836800,602862777",
                  _oak_name_id: "5759328918438436171",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#1 TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Utensils & Supplies","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"732"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"732"}}}',
                  },
                  prompt_tag_text:
                    "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Kitchen Utensils & Supplies",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#1 TOP RATED",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#1 TOP RATED",
                  ranking_id: "732",
                },
              ],
              show_index: 63,
              price_info: {
                split_price_text: ["$", "7", ".89", ""],
                reduction_text: ["-6", "%"],
                price: 789,
                market_price_str: "$8.48",
                market_price: 848,
                price_schema: "7.89",
                currency: "USD",
                price_text: ["$", "7.89", ""],
                price_str: "$7.89",
                reduction: 60,
                market_price_text: ["$", "8.48", ""],
              },
              image: {
                width: 375,
                id: 601099889081263,
                url_id: "5247289271558221197",
                url: "https://img.kwcdn.com/product/fancy/030de514-2f30-4d02-8131-1eb06e639fef.jpg",
                height: 375,
              },
              sales_tip: "86K+ sold",
              visible: true,
              goods_id: 601099889081263,
              opt_id: 734,
              seo_link_url:
                "/2pcs-gravity-powered-electric-salt-and-pepper-grinder-battery-powered-led--handed-automatic-operation-adjustable-coarse-grinder-grinder-black-rocking-chair--gadget-gift-battery-powered--g-601099889081263.html?&_oak_name_id=5759328918438436171&_oak_mp_inf=EK%2F388qn1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F030de514-2f30-4d02-8131-1eb06e639fef.jpg&spec_gallery_id=601099889081263&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Nzg5&_oak_gallery_order=1115300747%2C2119117238%2C1912700287%2C330836800%2C602862777",
              queryReleScore: 0.0,
              sales_tip_text: ["86K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "8,892",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 7460,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/market/8ec9501cb3349064bc70b4c68bbbadd8_pp4y5o5oJdOnH.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-47%",
              },
              item_type: 0,
              page_alt:
                "16 in 1 vegetable chopper professional onion chopper multi functional food chopper kitchen vegetable slicer and dicer vegetable chopper with 8   carrot chopper with container father gift",
              current_sku_id: 17594755679250,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#1 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Utensils & Supplies","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"732"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"732"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Kitchen Utensils & Supplies",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#1 BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#1 BEST-SELLING ITEM",
                    ranking_id: "732",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/fbb368c1dbae6bbd17b520267bf8e056f7ec5d72.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/market/8ec9501cb3349064bc70b4c68bbbadd8_pp4y5o5oJdOnH.jpg",
                url: "https://img.kwcdn.com/product/5cb4cf3156c525fb9b99191a59df52130efdb202.goods.000001.jpeg",
              },
              title:
                "16-In-1 Vegetable Chopper, Professional Onion Chopper, Multi-Functional Food Chopper, Kitchen Vegetable Slicer And Dicer, Vegetable Chopper with 8 Blades, Carrot Chopper with Container Father Gift",
              sales_tip_text_list: ["56K+", "sold"],
              sold_quantity_percent: 40,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "151772875",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGophYegXTHmdT0NTmRPnYZdJ9x+ZTKFVHNHzyYxfiN89ug7JIR/BF4RCaE6a+ri9TfEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "2726496634210073738",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "151772875",
                g: "601100107041758",
                scene_id: "3",
                show_price: "667",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "64",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "86097281700262093",
                ts: "1762677696798",
              },
              activity_type: 13,
              mall_id: 634418221139160,
              sales_num: "56K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601100107041758&_oak_name_id=86097281700262093&_oak_mp_inf=EN6X67Ko1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fmarket%2F8ec9501cb3349064bc70b4c68bbbadd8_pp4y5o5oJdOnH.jpg&spec_gallery_id=2&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjY3&_oak_gallery_order=151772875%2C263352769%2C1017672048%2C1893782224%2C1377452038",
              extend_fields: {
                sale_fire_flag: true,
                support_tag_carousel: true,
                detail_id: "112719186690558942",
                sku_extra_param: {
                  _oak_gallery_order:
                    "151772875,263352769,1017672048,1893782224,1377452038",
                  _oak_name_id: "86097281700262093",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#1 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Utensils & Supplies","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"732"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"732"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Kitchen Utensils & Supplies",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#1 BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#1 BEST-SELLING ITEM",
                  ranking_id: "732",
                },
              ],
              show_index: 64,
              price_info: {
                split_price_text: ["$", "6", ".67", ""],
                reduction_text: ["-47", "%"],
                price: 667,
                market_price_str: "$12.76",
                market_price: 1276,
                price_schema: "6.67",
                currency: "USD",
                price_text: ["$", "6.67", ""],
                price_str: "$6.67",
                reduction: 470,
                market_price_text: ["$", "12.76", ""],
              },
              image: {
                width: 800,
                id: 2,
                url_id: "2726496634210073738",
                url: "https://img.kwcdn.com/product/fancy/market/8ec9501cb3349064bc70b4c68bbbadd8_pp4y5o5oJdOnH.jpg",
                height: 800,
              },
              sales_tip: "56K+ sold",
              visible: true,
              goods_id: 601100107041758,
              opt_id: 734,
              seo_link_url:
                "/16-in-1-vegetable-chopper-professional-onion-chopper-multi-functional-food-chopper-kitchen-vegetable-slicer-and-dicer-vegetable-chopper-with-8--carrot-chopper-with-container-father-gift-g-601100107041758.html?&_oak_name_id=86097281700262093&_oak_mp_inf=EN6X67Ko1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fmarket%2F8ec9501cb3349064bc70b4c68bbbadd8_pp4y5o5oJdOnH.jpg&spec_gallery_id=2&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjY3&_oak_gallery_order=151772875%2C263352769%2C1017672048%2C1893782224%2C1377452038",
              queryReleScore: 0.0,
              sales_tip_text: ["56K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.6,
                hidden_comment: false,
                comment_num_tips: "6,046",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 8130,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/90d9dfee-12e1-41c7-8861-2519c0fc3112.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "22lbs multipurpose plastic   reusable round food storage container with   lid 360 rotating grain organizer for rice beans pasta with one click portion control",
              current_sku_id: 17592831684941,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"BANBERS","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: BANBERS",
                    tag_series: 2,
                    height: 39,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/d675d27f91ce8a4bfcf1e22688931d4c4bcb03a6.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/90d9dfee-12e1-41c7-8861-2519c0fc3112.jpg",
                url: "https://img.kwcdn.com/product/d06c024e2460070e03efe81e3e5545f31994503f.goods.000001.jpeg",
              },
              title:
                "22Lbs Multipurpose Plastic Cereal Dispenser, Reusable Round Food Storage Container, with Flip Top Lid, 360° Rotating Grain Organizer for Rice, Beans, Pasta, with One-Click Portion Control",
              sales_tip_text_list: ["1.3K+", "sold"],
              sold_quantity_percent: 34,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "409495995",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGo5mp45ClMESgO7cxB1L3rBw5E4D2q6UptSJZsQnxVYkS3TWzubVl05OnJLfw/SRPrEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "7744329031865607230",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "409495995",
                g: "601099679477593",
                scene_id: "3",
                show_price: "1419",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "65",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "1855650678295798410",
                ts: "1762677696798",
              },
              activity_type: 13,
              mall_id: 634418217433394,
              sales_num: "1.3K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099679477593&_oak_name_id=1855650678295798410&_oak_mp_inf=ENne%2Buam1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F90d9dfee-12e1-41c7-8861-2519c0fc3112.jpg&spec_gallery_id=2842262942&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQxOQ&_oak_gallery_order=409495995%2C506443340%2C1293214824%2C1794610885%2C420004039",
              extend_fields: {
                sale_fire_flag: true,
                support_tag_carousel: true,
                detail_id: "112723559646736217",
                sku_extra_param: {
                  _oak_gallery_order:
                    "409495995,506443340,1293214824,1794610885,420004039",
                  _oak_name_id: "1855650678295798410",
                },
              },
              goods_tags: [],
              show_index: 65,
              price_info: {
                split_price_text: ["$", "14", ".19", ""],
                reduction_text: [],
                price: 1419,
                price_schema: "14.19",
                currency: "USD",
                price_text: ["$", "14.19", ""],
                price_str: "$14.19",
              },
              image: {
                width: 1500,
                id: 2842262942,
                url_id: "7744329031865607230",
                url: "https://img.kwcdn.com/product/fancy/90d9dfee-12e1-41c7-8861-2519c0fc3112.jpg",
                height: 1500,
              },
              sales_tip: "1.3K+ sold",
              visible: true,
              goods_id: 601099679477593,
              opt_id: 1724,
              seo_link_url:
                "/22lbs-multipurpose-plastic--reusable-round-food-storage-container-with--lid-360-rotating-grain-organizer-for-rice-beans-pasta-with-one-click-portion-control-g-601099679477593.html?&_oak_name_id=1855650678295798410&_oak_mp_inf=ENne%2Buam1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F90d9dfee-12e1-41c7-8861-2519c0fc3112.jpg&spec_gallery_id=2842262942&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQxOQ&_oak_gallery_order=409495995%2C506443340%2C1293214824%2C1794610885%2C420004039",
              queryReleScore: 0.0,
              sales_tip_text: ["1.3K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "205",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 7840,
              },
              thumb_url:
                "https://img.kwcdn.com/product/open/2c3460a5a42049a5a9c537a2e444f2e2-goods.jpeg",
              ware_house_type: 1,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "3  stainless steel cutting board set durable easy to clean rust resistant bpa   saving   for food preparation food preparation essentials modern kitchenware durable cutting boards cutting boards for kitchen",
              current_sku_id: 17594268449666,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Utensils & Supplies: Stainless Steel","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"732"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"732"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Kitchen Utensils & Supplies: Stainless Steel",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "BEST-SELLING ITEM",
                    ranking_id: "732",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/7be09799863b21ed0bf2e48350de18bac7c91d02.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/open/2c3460a5a42049a5a9c537a2e444f2e2-goods.jpeg",
                url: "https://img.kwcdn.com/product/9dd7bdff73273a7ae247d8109f7f7f70adef77aa.goods.000001.jpeg",
              },
              title:
                "3pcs Stainless Steel Cutting Board Set - Premium, Durable, Easy to Clean, Rust-Resistant, BPA-Free, Space-Saving Kitchen Ready for Food Preparation, Food Preparation Essentials|Modern Kitchenware|Durable Cutting Boards, Cutting Boards for Kitchen",
              sales_tip_text_list: ["37K+", "sold"],
              sold_quantity_percent: 99,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "626307455",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoldhJ8iGq5TAFZ+dvq6lvArKvESsN3BF36mNdixi4UMo42EpspeDaxQk7jmPcRf+nEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "2804981306422715612",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "626307455",
                g: "601099999899088",
                scene_id: "3",
                show_price: "967",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "66",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "4151082571311412273",
                ts: "1762677696798",
              },
              activity_type: 13,
              mall_id: 634418215466438,
              sales_num: "37K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099999899088&_oak_mp_inf=ENDb3%2F%2Bn1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2c3460a5a42049a5a9c537a2e444f2e2-goods.jpeg&spec_gallery_id=3713610805&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=OTY3&_oak_gallery_order=626307455%2C830294361%2C1341972031%2C1084879094%2C1809872540",
              extend_fields: {
                sale_fire_flag: true,
                support_tag_carousel: true,
                detail_id: "112708182892080592",
                sku_extra_param: {
                  _oak_gallery_order:
                    "626307455,830294361,1341972031,1084879094,1809872540",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Utensils & Supplies: Stainless Steel","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"732"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"732"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Kitchen Utensils & Supplies: Stainless Steel",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "BEST-SELLING ITEM",
                  ranking_id: "732",
                },
              ],
              show_index: 66,
              price_info: {
                split_price_text: ["$", "9", ".67", ""],
                reduction_text: [],
                price: 967,
                price_schema: "9.67",
                currency: "USD",
                price_text: ["$", "9.67", ""],
                price_str: "$9.67",
              },
              image: {
                width: 800,
                id: 3713610805,
                url_id: "2804981306422715612",
                url: "https://img.kwcdn.com/product/open/2c3460a5a42049a5a9c537a2e444f2e2-goods.jpeg",
                height: 800,
              },
              sales_tip: "37K+ sold",
              visible: true,
              goods_id: 601099999899088,
              opt_id: 734,
              seo_link_url:
                "/3-stainless-steel-cutting-board-set-durable-easy-to-clean-rust-resistant-bpa--saving--for-food-preparation-food-preparation-essentials-modern-kitchenware-durable-cutting-boards-cutting-boards-for-kitchen-g-601099999899088.html?&_oak_mp_inf=ENDb3%2F%2Bn1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPDRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2c3460a5a42049a5a9c537a2e444f2e2-goods.jpeg&spec_gallery_id=3713610805&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=OTY3&_oak_gallery_order=626307455%2C830294361%2C1341972031%2C1084879094%2C1809872540",
              queryReleScore: 0.0,
              sales_tip_text: ["37K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.6,
                hidden_comment: false,
                comment_num_tips: "3,434",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 5,
                percent: 7790,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/d48ae5f7-e859-40c9-a04a-38312d14d190.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-16%",
              },
              item_type: 0,
              page_alt:
                "15 9 5 6 5 large screen led alarm clock energy saving with auto dimming luminous display of week temperature remote   humidity timer modern desk room decor great fathers day gift for dad seniors  ",
              current_sku_id: 17592877968686,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"PACILACK","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: PACILACK",
                    tag_series: 2,
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    color: "#555555",
                    ext_map: {
                      lowest_tag_up_flag: "2",
                      lowest_price_before_title: "6m lowest",
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91048,
                    text: "Lowest price in half year",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/c1ffa8319d0ef2ca0ed92cbb7fc024def005b1f1.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/d48ae5f7-e859-40c9-a04a-38312d14d190.jpg",
                url: "https://img.kwcdn.com/product/b410e47e4d299107fe5c21eb7383be3f0250f837.goods.000001.jpeg",
              },
              title:
                '15"/9.5"/6.5" Large Screen LED Alarm Clock - Energy-Saving with Auto-Dimming, Luminous Display Of Week, Temperature, Remote Controll, Humidity & Timer - Modern Desk & Room Decor, Great Father\'s Day Gift for Dad, Seniors, Family & Friends',
              sales_tip_text_list: ["9.5K+", "sold"],
              sold_quantity_percent: 56,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1068957611",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoraeDaUA3Wk9pl9y+Ei0dM5rr8DoEbjdqSk6yb45CwPHbRmA4bHztRb/sOWRIFEU1EIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "9222093257782452769",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "1068957611",
                g: "601099692214309",
                scene_id: "3",
                show_price: "660",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "67",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "2922002642836752455",
                ts: "1762677696798",
              },
              activity_type: 13,
              mall_id: 634418216913785,
              sales_num: "9.5K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099692214309&_oak_name_id=2922002642836752455&_oak_mp_inf=EKWQhO2m1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd48ae5f7-e859-40c9-a04a-38312d14d190.jpg&spec_gallery_id=601099692214309&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjYw&_oak_gallery_order=1068957611%2C550564776%2C387892815%2C348877016%2C1467031039",
              extend_fields: {
                mall_view_type: 2,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099692214309&_oak_name_id=2922002642836752455&_oak_mp_inf=EKWQhO2m1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd48ae5f7-e859-40c9-a04a-38312d14d190.jpg&spec_gallery_id=601099692214309&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjYw&_oak_gallery_order=1068957611%2C550564776%2C387892815%2C348877016%2C1467031039&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112710359819683877",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1068957611,550564776,387892815,348877016,1467031039",
                  _oak_name_id: "2922002642836752455",
                },
              },
              goods_tags: [
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "2",
                    lowest_price_before_title: "6m lowest",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price in half year",
                  tag_series: 2,
                },
              ],
              show_index: 67,
              price_info: {
                split_price_text: ["$", "6", ".60", ""],
                reduction_text: ["-16", "%"],
                price: 660,
                market_price_str: "$7.95",
                market_price: 795,
                price_schema: "6.60",
                currency: "USD",
                price_text: ["$", "6.60", ""],
                price_str: "$6.60",
                reduction: 160,
                market_price_text: ["$", "7.95", ""],
              },
              image: {
                width: 375,
                id: 601099692214309,
                url_id: "9222093257782452769",
                url: "https://img.kwcdn.com/product/fancy/d48ae5f7-e859-40c9-a04a-38312d14d190.jpg",
                height: 375,
              },
              sales_tip: "9.5K+ sold",
              visible: true,
              goods_id: 601099692214309,
              opt_id: 755,
              seo_link_url:
                "/15-9-5-6-5-large-screen-led-alarm-clock-energy-saving-with-auto-dimming-luminous-display-of-week-temperature-remote--humidity-timer-modern-desk-room-decor-great-fathers-day-gift-for-dad-seniors--g-601099692214309.html?&_oak_name_id=2922002642836752455&_oak_mp_inf=EKWQhO2m1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd48ae5f7-e859-40c9-a04a-38312d14d190.jpg&spec_gallery_id=601099692214309&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjYw&_oak_gallery_order=1068957611%2C550564776%2C387892815%2C348877016%2C1467031039",
              queryReleScore: 0.0,
              sales_tip_text: ["9.5K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "1,363",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 3,
                percent: 7090,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/e105bddf-9ed3-4e8c-9be3-b10c07fc7db1.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-6%",
              },
              item_type: 0,
              page_alt:
                "2pcs under sink organizer under sliding cabinet basket organizer drawer slide out pull out cabinet organizer shelf multi purpose under sink organizers and storage for kitchen bathroom pantry cabinet christmas gifts black white",
              current_sku_id: 17602036707324,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 1 BUSINESS DAY",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                  {
                    color: "#FFEFD3",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"INNOVATIVE LIFE","brand_authorized_type":1}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/aftersales/f3dba53e-2a7c-4ae2-acf5-6cf50fd53c15.png",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand Official Store: INNOVATIVE LIFE",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/aftersales/efb13335-b6b6-4984-af7d-a48dbaccb830.png",
                    height: 39,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/9fbee84f49119d31c74519a4f1379b91f23bd73d.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/e105bddf-9ed3-4e8c-9be3-b10c07fc7db1.jpg",
                url: "https://img.kwcdn.com/product/ee2fdd88d0c4230e8af89987000734563d764498.goods.000001.jpeg",
              },
              title:
                "2pcs Under Sink Organizer, Under Sliding Cabinet Basket Organizer Drawer, Slide Out Pull Out Cabinet Organizer Shelf, Multi-Purpose Under Sink Organizers And Storage for Kitchen, Bathroom, Pantry Cabinet, Christmas Gifts, Black/White",
              sales_tip_text_list: ["3.7K+", "sold"],
              sold_quantity_percent: 12,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1275432747",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGokrVO6oobo5rKcDzpO/8CSeuvsKQDjXrxP18B3QaySCx+xAG8f/D4Zt4hgOi3cUpnEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "8695509603163849485",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "1275432747",
                g: "601100809669171",
                scene_id: "3",
                show_price: "1299",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "68",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "1799902094170792800",
                ts: "1762677696798",
              },
              activity_type: 13,
              mall_id: 634418213933714,
              sales_num: "3.7K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601100809669171&_oak_mp_inf=ELOU8IGr1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe105bddf-9ed3-4e8c-9be3-b10c07fc7db1.jpg&spec_gallery_id=601100809669171&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTI5OQ&_oak_gallery_order=1275432747%2C1846893156%2C1666757609%2C181755233%2C1529270888",
              extend_fields: {
                sale_fire_flag: true,
                mall_view_type: 2,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601100809669171&_oak_mp_inf=ELOU8IGr1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe105bddf-9ed3-4e8c-9be3-b10c07fc7db1.jpg&spec_gallery_id=601100809669171&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTI5OQ&_oak_gallery_order=1275432747%2C1846893156%2C1666757609%2C181755233%2C1529270888&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112725756933507635",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1275432747,1846893156,1666757609,181755233,1529270888",
                },
              },
              goods_tags: [],
              show_index: 68,
              price_info: {
                split_price_text: ["$", "12", ".99", ""],
                reduction_text: ["-6", "%"],
                price: 1299,
                market_price_str: "$13.96",
                market_price: 1396,
                price_schema: "12.99",
                currency: "USD",
                price_text: ["$", "12.99", ""],
                price_str: "$12.99",
                reduction: 60,
                market_price_text: ["$", "13.96", ""],
              },
              image: {
                width: 375,
                id: 601100809669171,
                url_id: "8695509603163849485",
                url: "https://img.kwcdn.com/product/fancy/e105bddf-9ed3-4e8c-9be3-b10c07fc7db1.jpg",
                height: 375,
              },
              sales_tip: "3.7K+ sold",
              visible: true,
              goods_id: 601100809669171,
              opt_id: 1724,
              seo_link_url:
                "/2pcs-under-sink-organizer-under-sliding-cabinet-basket-organizer-drawer-slide-out-pull-out-cabinet-organizer-shelf-multi-purpose-under-sink-organizers-and-storage-for-kitchen-bathroom-pantry-cabinet-christmas-gifts-black-white-g-601100809669171.html?&_oak_mp_inf=ELOU8IGr1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe105bddf-9ed3-4e8c-9be3-b10c07fc7db1.jpg&spec_gallery_id=601100809669171&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTI5OQ&_oak_gallery_order=1275432747%2C1846893156%2C1666757609%2C181755233%2C1529270888",
              queryReleScore: 0.0,
              sales_tip_text: ["3.7K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "365",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 8120,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/2c0fa938-53a6-48be-9810-6ff2164dbf2d.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-46%",
              },
              item_type: 0,
              page_alt:
                "2 tier   dispenser organizer   plastic space saving refrigerator storage rack with   for   access breakage prevention ladderstyle rack egg holder for refrigerator",
              current_sku_id: 17595955224674,
              tags_info: {
                activity_icon_tags: [{}],
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 1 BUSINESS DAY",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    ext_map: {
                      discount_promotion_tag:
                        '{"width":95.0,"height":20.0,"bg_url":"https://aimg.kwcdn.com/material-put/20150c22617/6418b975-cdbc-4f67-a113-095602c56edd.png","promotion_tag_track":"clearance_normal"}',
                    },
                    marketing_tag_type: 2000,
                  },
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                goods_tags: [
                  {
                    color: "#555555",
                    ext_map: {
                      lowest_tag_up_flag: "4",
                      lowest_price_before_title: "60d lowest",
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91048,
                    text: "Lowest price in 60 days",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/72d8c2c9e0b9a8123c34a1e31b92d84737396628.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/2c0fa938-53a6-48be-9810-6ff2164dbf2d.jpg",
                url: "https://img.kwcdn.com/product/dcef8efe49158e8a480a4ae53c5c64607beb008d.goods.000001.jpeg",
              },
              title:
                "2-Tier Rolling Egg Dispenser Organizer - Food-Safe Plastic Space-Saving Refrigerator Storage Rack with Transparent Design for Easy Egg Access & Breakage Prevention, Ladderstyle Rack, Egg Holder for Refrigerator",
              sales_tip_text_list: ["3.7K+", "sold"],
              display_end_time_percent: 22,
              sold_quantity_percent: 97,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "386749238",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGo9ICFt1HvwfrrXjx5RSJDNohUWIRgGFy4cxkaXMdwvbTCwataXSeQBSjqfXwKdaRQEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "8608933363992631365",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "386749238",
                g: "601100417644546",
                scene_id: "3",
                show_price: "269",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "69",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "7830522829644256593",
                ts: "1762677696798",
              },
              activity_type: 27,
              mall_id: 634418216289387,
              sales_num: "3.7K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601100417644546&_oak_mp_inf=EILw%2BMap1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2c0fa938-53a6-48be-9810-6ff2164dbf2d.jpg&spec_gallery_id=5256487117&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY5&_oak_gallery_order=386749238%2C1385247989%2C1298453138%2C2121119047%2C5000978",
              extend_fields: {
                support_tag_carousel: true,
                detail_id: "112686176553351170",
                sku_extra_param: {
                  _oak_gallery_order:
                    "386749238,1385247989,1298453138,2121119047,5000978",
                },
              },
              goods_tags: [
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "4",
                    lowest_price_before_title: "60d lowest",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price in 60 days",
                  tag_series: 2,
                },
              ],
              show_index: 69,
              price_info: {
                split_price_text: ["$", "2", ".69", ""],
                reduction_text: ["-46", "%"],
                price: 269,
                market_price_str: "$5.05",
                market_price: 505,
                price_schema: "2.69",
                currency: "USD",
                price_text: ["$", "2.69", ""],
                price_str: "$2.69",
                price_color: "#D9001B",
                reduction: 460,
                market_price_text: ["$", "5.05", ""],
              },
              image: {
                width: 801,
                id: 5256487117,
                url_id: "8608933363992631365",
                url: "https://img.kwcdn.com/product/fancy/2c0fa938-53a6-48be-9810-6ff2164dbf2d.jpg",
                height: 801,
              },
              sales_tip: "3.7K+ sold",
              visible: true,
              goods_id: 601100417644546,
              opt_id: 1724,
              display_end_time: 1763625599,
              seo_link_url:
                "/2-tier--dispenser-organizer--plastic-space-saving-refrigerator-storage-rack-with--for--access-breakage-prevention-ladderstyle-rack-egg-holder-for-refrigerator-g-601100417644546.html?&_oak_mp_inf=EILw%2BMap1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2c0fa938-53a6-48be-9810-6ff2164dbf2d.jpg&spec_gallery_id=5256487117&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY5&_oak_gallery_order=386749238%2C1385247989%2C1298453138%2C2121119047%2C5000978",
              queryReleScore: 0.0,
              sales_tip_text: ["3.7K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "426",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 5,
                percent: 8740,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/70384a22-0bed-447b-9b9b-00e5684c615f.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-5%",
              },
              item_type: 0,
              page_alt:
                "1pc 1050w high power portable handheld steam cleaner quick heating 12 brush heads for versatile cleaning in kitchens bathrooms furniture cars us plug large capacity water tank steam cleaner for car",
              current_sku_id: 17592626995090,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"HATTYROOM","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: HATTYROOM",
                    tag_series: 2,
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#4 TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Vacuums & Floor Care","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"1849"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"1849"}}}',
                    },
                    prompt_tag_text:
                      "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Vacuums & Floor Care",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#4 TOP RATED",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#4 TOP RATED",
                    ranking_id: "1849",
                  },
                  {
                    color: "#555555",
                    ext_map: {
                      lowest_tag_up_flag: "5",
                      lowest_price_before_title: "30d lowest",
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91048,
                    text: "Lowest price in 30 days",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/8bd9e3d3999ab36408f37bf15ea5db13e46926f6.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/70384a22-0bed-447b-9b9b-00e5684c615f.jpg",
                url: "https://img.kwcdn.com/product/950e99b8d4a6e3064c0a9bd8748549b240092612.goods.000001.jpeg",
              },
              title:
                "1Pc 1050W High-Power Portable Handheld Steam Cleaner Quick Heating, 12 Brush Heads For Versatile Cleaning In Kitchens, Bathrooms, Furniture & Cars - Us Plug, Large Capacity Water Tank, Steam Cleaner For Car",
              sales_tip_text_list: ["14K+", "sold"],
              sold_quantity_percent: 28,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "169590555",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGojqOlJktiBJVLjQsSlHwv/XyL6kDfNs7DuoOg/CpAgEe7i3jubgH1hj0/Fkaqp1AMEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "7374238955551624233",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "169590555",
                g: "601099597290744",
                scene_id: "3",
                show_price: "2317",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "70",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "4181350228741247280",
                ts: "1762677696798",
              },
              activity_type: 13,
              mall_id: 634418216142304,
              sales_num: "14K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099597290744&_oak_name_id=4181350228741247280&_oak_mp_inf=EPi54r%2Bm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F70384a22-0bed-447b-9b9b-00e5684c615f.jpg&spec_gallery_id=2227021283&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjMxNw&_oak_gallery_order=169590555%2C57103810%2C138369384%2C190600037%2C720701805",
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099597290744&_oak_name_id=4181350228741247280&_oak_mp_inf=EPi54r%2Bm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F70384a22-0bed-447b-9b9b-00e5684c615f.jpg&spec_gallery_id=2227021283&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjMxNw&_oak_gallery_order=169590555%2C57103810%2C138369384%2C190600037%2C720701805&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112725772788014328",
                sku_extra_param: {
                  _oak_gallery_order:
                    "169590555,57103810,138369384,190600037,720701805",
                  _oak_name_id: "4181350228741247280",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#4 TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Vacuums & Floor Care","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"1849"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"1849"}}}',
                  },
                  prompt_tag_text:
                    "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Vacuums & Floor Care",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#4 TOP RATED",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#4 TOP RATED",
                  ranking_id: "1849",
                },
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "5",
                    lowest_price_before_title: "30d lowest",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price in 30 days",
                  tag_series: 2,
                },
              ],
              show_index: 70,
              price_info: {
                split_price_text: ["$", "23", ".17", ""],
                reduction_text: ["-5", "%"],
                price: 2317,
                market_price_str: "$24.39",
                market_price: 2439,
                price_schema: "23.17",
                currency: "USD",
                price_text: ["$", "23.17", ""],
                price_str: "$23.17",
                reduction: 50,
                market_price_text: ["$", "24.39", ""],
              },
              image: {
                width: 1600,
                id: 2227021283,
                url_id: "7374238955551624233",
                url: "https://img.kwcdn.com/product/fancy/70384a22-0bed-447b-9b9b-00e5684c615f.jpg",
                height: 1600,
              },
              sales_tip: "14K+ sold",
              visible: true,
              goods_id: 601099597290744,
              opt_id: 1850,
              seo_link_url:
                "/1pc-1050w-high-power-portable-handheld-steam-cleaner-quick-heating-12-brush-heads-for-versatile-cleaning-in-kitchens-bathrooms-furniture-cars-us-plug-large-capacity-water-tank-steam-cleaner-for-car-g-601099597290744.html?&_oak_name_id=4181350228741247280&_oak_mp_inf=EPi54r%2Bm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F70384a22-0bed-447b-9b9b-00e5684c615f.jpg&spec_gallery_id=2227021283&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjMxNw&_oak_gallery_order=169590555%2C57103810%2C138369384%2C190600037%2C720701805",
              queryReleScore: 0.0,
              sales_tip_text: ["14K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "1,483",
              },
              adult_goods: false,
            },
            {
              thumb_url:
                "https://img.kwcdn.com/product/fmket/edfc7aedd1709df55844b0a69dd12411.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "2  stainless steel salt and pepper grinder set adjustable ceramic   salt and pepper mill this elegant yet practical grinder set enhances your     flavor to your kitchen",
              current_sku_id: 17602314745413,
              tags_info: {
                activity_icon_tags: [
                  {
                    icon_img:
                      "https://aimg.kwcdn.com/upload_aimg_b/search/0f7bbe9c-599b-4380-8c8a-7ea42ba4db03.png",
                    width: 24,
                    height: 24,
                  },
                ],
                title_header_tags: [
                  {
                    ext_map: {
                      discount_promotion_tag:
                        '{"width":91.0,"height":20.0,"bg_url":"https://aimg.kwcdn.com/material-put/20150c22617/8154dd93-1bf7-4376-8ea2-b9a76d13ab14.png","promotion_tag_track":"lightning_normal"}',
                    },
                    marketing_tag_type: 2000,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Utensils & Supplies","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"732"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"732"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Kitchen Utensils & Supplies",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "BEST-SELLING ITEM",
                    ranking_id: "732",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/cd2d4824d4276ecc8964d50eb199c3ceee4069d9.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fmket/edfc7aedd1709df55844b0a69dd12411.jpg",
                url: "https://img.kwcdn.com/product/e5679c73394fedaec62e1e5642e2d4ee9b4cdc09.goods.000001.jpeg",
              },
              title:
                "2pcs Premium Stainless Steel Salt and Pepper Grinder Set - Adjustable Ceramic - High Glass Salt and Pepper Mill - This elegant yet practical grinder set enhances your cooking experience, adding flavor to your kitchen",
              sales_tip_text_list: ["19K+", "sold"],
              display_end_time_percent: 0,
              sold_quantity_percent: 26,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "320936788",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoe1QahOXQG7mdRURdFcFNqLBYKZB+OVEigfVTMgFeiEAPfPC+Djf1p45XrF7PTbxBEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "3670021454164074744",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "320936788",
                g: "601101961736576",
                scene_id: "3",
                show_price: "1232",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "71",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "230776809520038132",
                ts: "1762677696798",
              },
              activity_type: 2,
              mall_id: 634418220450081,
              sales_num: "19K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601101961736576&_oak_name_id=230776809520038132&_oak_mp_inf=EIDjnKev1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Fedfc7aedd1709df55844b0a69dd12411.jpg&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTIzMg&_oak_gallery_order=320936788%2C2141295602%2C1221861028%2C1023116834%2C1751397537",
              extend_fields: {
                sale_fire_flag: true,
                support_tag_carousel: true,
                detail_id: "112710358745952640",
                sku_extra_param: {
                  _oak_gallery_order:
                    "320936788,2141295602,1221861028,1023116834,1751397537",
                  _oak_name_id: "230776809520038132",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Kitchen Utensils & Supplies","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"732"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"732"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Kitchen Utensils & Supplies",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "BEST-SELLING ITEM",
                  ranking_id: "732",
                },
              ],
              show_index: 71,
              price_info: {
                split_price_text: ["$", "12", ".32", ""],
                reduction_text: [],
                price: 1232,
                price_schema: "12.32",
                currency: "USD",
                price_text: ["$", "12.32", ""],
                price_str: "$12.32",
                price_color: "#FB7701",
              },
              image: {
                width: 2000,
                id: 1,
                url_id: "3670021454164074744",
                url: "https://img.kwcdn.com/product/fmket/edfc7aedd1709df55844b0a69dd12411.jpg",
                height: 2000,
              },
              sales_tip: "19K+ sold",
              visible: true,
              goods_id: 601101961736576,
              opt_id: 734,
              display_end_time: 1763279999,
              seo_link_url:
                "/2-stainless-steel-salt-and-pepper-grinder-set-adjustable-ceramic--salt-and-pepper-mill-this-elegant-yet-practical-grinder-set-enhances-your---flavor-to-your-kitchen-g-601101961736576.html?&_oak_name_id=230776809520038132&_oak_mp_inf=EIDjnKev1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Fedfc7aedd1709df55844b0a69dd12411.jpg&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTIzMg&_oak_gallery_order=320936788%2C2141295602%2C1221861028%2C1023116834%2C1751397537",
              queryReleScore: 0.0,
              sales_tip_text: ["19K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "406",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 8790,
              },
              thumb_url:
                "https://img.kwcdn.com/product/open/f4fa7cae2b7241a694a3bf06b768954e-goods.jpeg",
              ware_house_type: 1,
              benefit_text: {
                text: "-29%",
              },
              item_type: 0,
              page_alt:
                "food dehydrator machine adjustable temperature 72h timer 5 tray dehydrators for food and jerky   treats herbs snacks led display 240w electric food dryer recipe book",
              current_sku_id: 17607665841569,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 1 BUSINESS DAY",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"YASHE","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: YASHE",
                    tag_series: 2,
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#6 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Small Appliances & Accessories: Stainless Steel","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"1853"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"1853"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Small Appliances & Accessories: Stainless Steel",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#6 BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#6 BEST-SELLING ITEM",
                    ranking_id: "1853",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/184963180f9cd86aeb4f6fee6b5b2909c8cd1e24.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/open/f4fa7cae2b7241a694a3bf06b768954e-goods.jpeg",
                url: "https://img.kwcdn.com/product/b558f8466349547fd75bd709ca8cfaed438e98b9.goods.000001.jpeg",
              },
              title:
                "Food Dehydrator Machine Adjustable Temperature & 72H Timer, 5-Tray Dehydrators for Food And Jerky, Fruit, Dog Treats, Herbs, Snacks, LED Display, 240W Electric Food Dryer, Recipe Book",
              sales_tip_text_list: ["8.9K+", "sold"],
              sold_quantity_percent: 6,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1422850582",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGo/hJYRWCdcSqOz2NjgmAGh0NnBlMiTrq1i+JaI6es9geh+KqRg/AIsgeRFLUJmemiEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "5099388582912659310",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "1422850582",
                g: "601099913932645",
                scene_id: "3",
                show_price: "3534",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "72",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "1041659615786242286",
                ts: "1762677696798",
              },
              activity_type: 13,
              mall_id: 634418220056823,
              sales_num: "8.9K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099913932645&_oak_mp_inf=EOXe4Nan1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Ff4fa7cae2b7241a694a3bf06b768954e-goods.jpeg&spec_gallery_id=3385102220&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzUzNA&_oak_gallery_order=1422850582%2C1271341805%2C868701887%2C758979669%2C1538752836",
              extend_fields: {
                sale_fire_flag: true,
                mall_view_type: 2,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099913932645&_oak_mp_inf=EOXe4Nan1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Ff4fa7cae2b7241a694a3bf06b768954e-goods.jpeg&spec_gallery_id=3385102220&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzUzNA&_oak_gallery_order=1422850582%2C1271341805%2C868701887%2C758979669%2C1538752836&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112716975570890597",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1422850582,1271341805,868701887,758979669,1538752836",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#6 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Small Appliances & Accessories: Stainless Steel","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"1853"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"1853"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Small Appliances & Accessories: Stainless Steel",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#6 BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#6 BEST-SELLING ITEM",
                  ranking_id: "1853",
                },
              ],
              show_index: 72,
              price_info: {
                split_price_text: ["$", "35", ".34", ""],
                reduction_text: ["-29", "%"],
                price: 3534,
                market_price_str: "$49.99",
                market_price: 4999,
                price_schema: "35.34",
                currency: "USD",
                price_text: ["$", "35.34", ""],
                price_str: "$35.34",
                reduction: 290,
                market_price_text: ["$", "49.99", ""],
              },
              image: {
                width: 1500,
                id: 3385102220,
                url_id: "5099388582912659310",
                url: "https://img.kwcdn.com/product/open/f4fa7cae2b7241a694a3bf06b768954e-goods.jpeg",
                height: 1500,
              },
              sales_tip: "8.9K+ sold",
              visible: true,
              goods_id: 601099913932645,
              opt_id: 1854,
              seo_link_url:
                "/food-dehydrator-machine-adjustable-temperature-72h-timer-5-tray-dehydrators-for-food-and-jerky--treats-herbs-snacks-led-display-240w-electric-food-dryer-recipe-book-g-601099913932645.html?&_oak_mp_inf=EOXe4Nan1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPHRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Ff4fa7cae2b7241a694a3bf06b768954e-goods.jpeg&spec_gallery_id=3385102220&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzUzNA&_oak_gallery_order=1422850582%2C1271341805%2C868701887%2C758979669%2C1538752836",
              queryReleScore: 0.0,
              sales_tip_text: ["8.9K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "1,018",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 7400,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/f5f6bf52-65ee-4e68-bee7-00f46ed89dfe.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "50pcs disposable shower drain hair catcher stickers   plastic mesh filter covers for bathroom bathtub   hair   blocker for sink and floor drains",
              current_sku_id: 17598920003396,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Ships earliest in 13h",
                        },
                      ],
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91137,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Bath","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"746"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"746"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Bath",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "BEST-SELLING ITEM",
                    ranking_id: "746",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/dfef4f37e690db48fae8508233413b20100ced92.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/f5f6bf52-65ee-4e68-bee7-00f46ed89dfe.jpg",
                url: "https://img.kwcdn.com/product/05ab0c8d4ef1ab15771c0ba1ad9ab03f53fa1035.goods.000001.jpeg",
              },
              title:
                "50pcs Disposable Shower Drain Hair Catcher Stickers - Easy-to-Use Plastic Mesh Filter Covers For Bathroom & Bathtub, Efficient Hair & Debris Blocker For Sink And Floor Drains",
              sales_tip_text_list: ["10K+", "sold"],
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "414830292",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGo4mjD58cOdyKXLq6xF2azG9N3xaQxjsLMbzEbGymjO10gzFUI6C0iALvQpVkvjTRAEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "3158791871139929485",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "2140921545",
                g: "601100284634786",
                scene_id: "3",
                show_price: "673",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "73",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "9114730707206459345",
                ts: "1762677696798",
              },
              mall_id: 634418221549804,
              sales_num: "10K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601100284634786&_oak_mp_inf=EKLNwoep1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ff5f6bf52-65ee-4e68-bee7-00f46ed89dfe.jpg&spec_gallery_id=601100284634786&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Njcz&_oak_gallery_order=2140921545%2C414830292%2C1910320416%2C37896958%2C1361192270",
              extend_fields: {
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "2140921545,414830292,1910320416,37896958,1361192270",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Bath","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"746"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"746"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Bath",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "BEST-SELLING ITEM",
                  ranking_id: "746",
                },
              ],
              show_index: 73,
              price_info: {
                split_price_text: ["$", "6", ".73", ""],
                reduction_text: [],
                price: 673,
                price_schema: "6.73",
                currency: "USD",
                price_text: ["$", "6.73", ""],
                price_str: "$6.73",
              },
              image: {
                width: 375,
                id: 601100284634786,
                url_id: "3158791871139929485",
                url: "https://img.kwcdn.com/product/fancy/f5f6bf52-65ee-4e68-bee7-00f46ed89dfe.jpg",
                height: 375,
              },
              sales_tip: "10K+ sold",
              visible: true,
              goods_id: 601100284634786,
              opt_id: 749,
              seo_link_url:
                "/50pcs-disposable-shower-drain-hair-catcher-stickers--plastic-mesh-filter-covers-for-bathroom-bathtub--hair--blocker-for-sink-and-floor-drains-g-601100284634786.html?&_oak_mp_inf=EKLNwoep1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ff5f6bf52-65ee-4e68-bee7-00f46ed89dfe.jpg&spec_gallery_id=601100284634786&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Njcz&_oak_gallery_order=2140921545%2C414830292%2C1910320416%2C37896958%2C1361192270",
              queryReleScore: 0.0,
              sales_tip_text: ["10K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.5,
                hidden_comment: false,
                comment_num_tips: "952",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 5,
                percent: 8770,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/0e16a32f-e9c3-411e-b388-1fe8ea8ae8eb.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "  large digital alarm wall clock large led dual alarm brightness adjustment date daylight saving time temperature 12 24 hour switch suitable for living room bedroom office decoration gifts suitable for students during the back to school   bedroom decor   contemporary   precision   durable abs material temperature   alarm clock office workers gift  ",
              current_sku_id: 17592684206423,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"TIMESS","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: TIMESS",
                    tag_series: 2,
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Home Decor Products","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"751"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"751"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Home Decor Products",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "BEST-SELLING ITEM",
                    ranking_id: "751",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/d8e441e4dea2812d235c4d968a37ff9e1f96b467.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/0e16a32f-e9c3-411e-b388-1fe8ea8ae8eb.jpg",
                url: "https://img.kwcdn.com/product/bbf341d0d8b4d370324d1f2285ffa60d5a768103.goods.000001.jpeg",
              },
              title:
                "TIMESS Large Digital Alarm Wall Clock, Large LED/dual Alarm/brightness Adjustment/date/daylight Saving Time/temperature/12/24 Hour Switch, Suitable for Living Room, Bedroom, Office Decoration Gifts, Suitable for Students During The Back-to-school, Student Essentials, Bedroom Decor, Sleek Design, Contemporary Timepiece, Precision Timekeeping, Durable Abs Material, Temperature Display, Dual Alarm Clock, Office Workers, Gift Shoppers",
              sales_tip_text_list: ["50K+", "sold"],
              sold_quantity_percent: 40,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "32201379",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoSyJw3WXERvhXAO4qPX779Q5yKgzZgoFuDYvqcdTVMpzkZM/7A2l6scTycK51okD/EIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "4423917624327285383",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "32201379",
                g: "601099603570563",
                scene_id: "3",
                show_price: "1171",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "74",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "6343936311688039289",
                ts: "1762677696798",
              },
              activity_type: 13,
              mall_id: 634418215765263,
              sales_num: "50K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099603570563&_oak_name_id=6343936311688039289&_oak_mp_inf=EIPf4cKm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F0e16a32f-e9c3-411e-b388-1fe8ea8ae8eb.jpg&spec_gallery_id=2215885836&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTE3MQ&_oak_gallery_order=32201379%2C1878629625%2C1446098084%2C1172611545%2C2063783011",
              extend_fields: {
                sale_fire_flag: true,
                mall_view_type: 2,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099603570563&_oak_name_id=6343936311688039289&_oak_mp_inf=EIPf4cKm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F0e16a32f-e9c3-411e-b388-1fe8ea8ae8eb.jpg&spec_gallery_id=2215885836&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTE3MQ&_oak_gallery_order=32201379%2C1878629625%2C1446098084%2C1172611545%2C2063783011&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112727963414261635",
                sku_extra_param: {
                  _oak_gallery_order:
                    "32201379,1878629625,1446098084,1172611545,2063783011",
                  _oak_name_id: "6343936311688039289",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Home Decor Products","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"751"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"751"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Home Decor Products",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "BEST-SELLING ITEM",
                  ranking_id: "751",
                },
              ],
              show_index: 74,
              price_info: {
                split_price_text: ["$", "11", ".71", ""],
                reduction_text: [],
                price: 1171,
                price_schema: "11.71",
                currency: "USD",
                price_text: ["$", "11.71", ""],
                price_str: "$11.71",
              },
              image: {
                width: 800,
                id: 2215885836,
                url_id: "4423917624327285383",
                url: "https://img.kwcdn.com/product/fancy/0e16a32f-e9c3-411e-b388-1fe8ea8ae8eb.jpg",
                height: 800,
              },
              sales_tip: "50K+ sold",
              visible: true,
              goods_id: 601099603570563,
              opt_id: 755,
              seo_link_url:
                "/-large-digital-alarm-wall-clock-large-led-dual-alarm-brightness-adjustment-date-daylight-saving-time-temperature-12-24-hour-switch-suitable-for-living-room-bedroom-office-decoration-gifts-suitable-for-students-during-the-back-to-school--bedroom-decor--contemporary--precision--durable-abs-material-temperature--alarm-clock-office-workers-gift--g-601099603570563.html?&_oak_name_id=6343936311688039289&_oak_mp_inf=EIPf4cKm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F0e16a32f-e9c3-411e-b388-1fe8ea8ae8eb.jpg&spec_gallery_id=2215885836&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTE3MQ&_oak_gallery_order=32201379%2C1878629625%2C1446098084%2C1172611545%2C2063783011",
              queryReleScore: 0.0,
              sales_tip_text: ["50K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "6,836",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 7370,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/5a04be57-1ad8-403a-9488-d62088437d54.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-18%",
              },
              item_type: 0,
              page_alt:
                "24 48pcs black stainless steel flatware set   polish families hotels knives forks spoons cutlery set with gift box for 8   durable   polished dishwasher safe   halloween parties weddings banquets silverware set",
              current_sku_id: 17597636322409,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                  {
                    color: "#FFEFD3",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"LVABZ","brand_authorized_type":1}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/aftersales/f3dba53e-2a7c-4ae2-acf5-6cf50fd53c15.png",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand Official Store: LVABZ",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/aftersales/efb13335-b6b6-4984-af7d-a48dbaccb830.png",
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#1 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Dining & Entertaining: Stainless Steel","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"1725"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"1725"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Dining & Entertaining: Stainless Steel",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#1 BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#1 BEST-SELLING ITEM",
                    ranking_id: "1725",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/20368c4497e9ba8bb0780b831ef4dfa369497934.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/5a04be57-1ad8-403a-9488-d62088437d54.jpg",
                url: "https://img.kwcdn.com/product/e1df31a7428f13d606f114947a1794dfbb1b553e.goods.000001.jpeg",
              },
              title:
                "24/48pcs Black Stainless Steel Flatware Set, Mirror Polish Families Hotels Knives Forks Spoons Cutlery Set with Gift Box for 8 Persons, Durable, Mirror Polished, Dishwasher Safe, Perfect for Halloween, Parties, Weddings, Banquets, Silverware Set",
              sales_tip_text_list: ["47K+", "sold"],
              sold_quantity_percent: 49,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "717944354",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoEzMVqnol4McqFYxPkBHVuWN7WdZkRcTs4Mkk3QFaVZboa4nUZN9OBzMcUth5JyqwEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "1589535725292491207",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "717944354",
                g: "601099634452598",
                scene_id: "3",
                show_price: "1065",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "75",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "6238168411120635899",
                ts: "1762677696798",
              },
              activity_type: 13,
              mall_id: 634418216359848,
              sales_num: "47K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099634452598&_oak_mp_inf=EPbQvtGm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F5a04be57-1ad8-403a-9488-d62088437d54.jpg&spec_gallery_id=601099634452598&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA2NQ&_oak_gallery_order=717944354%2C1842317833%2C1165456329%2C106401940%2C489935604",
              extend_fields: {
                sale_fire_flag: true,
                mall_view_type: 2,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099634452598&_oak_mp_inf=EPbQvtGm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F5a04be57-1ad8-403a-9488-d62088437d54.jpg&spec_gallery_id=601099634452598&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA2NQ&_oak_gallery_order=717944354%2C1842317833%2C1165456329%2C106401940%2C489935604&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112723555821529206",
                sku_extra_param: {
                  _oak_gallery_order:
                    "717944354,1842317833,1165456329,106401940,489935604",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#1 BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Dining & Entertaining: Stainless Steel","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"1725"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"1725"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Dining & Entertaining: Stainless Steel",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#1 BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#1 BEST-SELLING ITEM",
                  ranking_id: "1725",
                },
              ],
              show_index: 75,
              price_info: {
                split_price_text: ["$", "10", ".65", ""],
                reduction_text: ["-18", "%"],
                price: 1065,
                market_price_str: "$13.00",
                market_price: 1300,
                price_schema: "10.65",
                currency: "USD",
                price_text: ["$", "10.65", ""],
                price_str: "$10.65",
                reduction: 180,
                market_price_text: ["$", "13.00", ""],
              },
              image: {
                width: 375,
                id: 601099634452598,
                url_id: "1589535725292491207",
                url: "https://img.kwcdn.com/product/fancy/5a04be57-1ad8-403a-9488-d62088437d54.jpg",
                height: 375,
              },
              sales_tip: "47K+ sold",
              visible: true,
              goods_id: 601099634452598,
              opt_id: 1726,
              seo_link_url:
                "/24-48pcs-black-stainless-steel-flatware-set--polish-families-hotels-knives-forks-spoons-cutlery-set-with-gift-box-for-8--durable--polished-dishwasher-safe--halloween-parties-weddings-banquets-silverware-set-g-601099634452598.html?&_oak_mp_inf=EPbQvtGm1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F5a04be57-1ad8-403a-9488-d62088437d54.jpg&spec_gallery_id=601099634452598&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA2NQ&_oak_gallery_order=717944354%2C1842317833%2C1165456329%2C106401940%2C489935604",
              queryReleScore: 0.0,
              sales_tip_text: ["47K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "6,500",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 5,
                percent: 8470,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/4bbd1421-7668-4756-a213-e25eff452426.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-22%",
              },
              item_type: 0,
              page_alt:
                "1pc thick soft comforter lamb quilt ultra breathable   cover quilt double sided box   solid color comforter for bedroom warm autumn and winter comforter gift home decor",
              current_sku_id: 17592965750898,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 2 BUSINESS DAYS",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"ASPMIZ","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: ASPMIZ",
                    tag_series: 2,
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Bedding","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"737"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"737"}}}',
                    },
                    prompt_tag_text:
                      "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Bedding",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "TOP RATED",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "TOP RATED",
                    ranking_id: "737",
                  },
                  {
                    color: "#555555",
                    ext_map: {
                      lowest_tag_up_flag: "3",
                      lowest_price_before_title: "90d lowest",
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91048,
                    text: "Lowest price in 90 days",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/ce3dc40c145af5874e53253be8b53f6a427e7c3e.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/4bbd1421-7668-4756-a213-e25eff452426.jpg",
                url: "https://img.kwcdn.com/product/a545017b3a774ade4cdf421e88299da74543babc.goods.000001.jpeg",
              },
              title:
                "1pc Thick Soft Comforter Lamb Quilt, Ultra Breathable All Season Cover Quilt Double-Sided, Box Stitch Solid Color Comforter for Bedroom Warm Autumn And Winter Comforter, Gift, Home Decor",
              sales_tip_text_list: ["29K+", "sold"],
              sold_quantity_percent: 35,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "492619359",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGorsJvx6foHo/0XhQqNGFqrYXdHKhOb79Yrr2KEywcnCubyRw5G7LurOGpOHc5yv9TEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "7299996978308223720",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "492619359",
                g: "601099713718923",
                scene_id: "3",
                show_price: "2606",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "76",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "6735875514392315083",
                ts: "1762677696798",
              },
              activity_type: 13,
              mall_id: 634418218101089,
              sales_num: "29K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099713718923&_oak_name_id=6735875514392315083&_oak_mp_inf=EIvVpPem1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F4bbd1421-7668-4756-a213-e25eff452426.jpg&spec_gallery_id=2588247309&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjYwNg&_oak_gallery_order=492619359%2C1722891194%2C1186352842%2C364573295%2C1655515371",
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099713718923&_oak_name_id=6735875514392315083&_oak_mp_inf=EIvVpPem1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F4bbd1421-7668-4756-a213-e25eff452426.jpg&spec_gallery_id=2588247309&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjYwNg&_oak_gallery_order=492619359%2C1722891194%2C1186352842%2C364573295%2C1655515371&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112716966762850955",
                sku_extra_param: {
                  _oak_gallery_order:
                    "492619359,1722891194,1186352842,364573295,1655515371",
                  _oak_name_id: "6735875514392315083",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Bedding","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"737"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"737"}}}',
                  },
                  prompt_tag_text:
                    "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Bedding",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "TOP RATED",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "TOP RATED",
                  ranking_id: "737",
                },
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "3",
                    lowest_price_before_title: "90d lowest",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price in 90 days",
                  tag_series: 2,
                },
              ],
              show_index: 76,
              price_info: {
                split_price_text: ["$", "26", ".06", ""],
                reduction_text: ["-22", "%"],
                price: 2606,
                market_price_str: "$33.68",
                market_price: 3368,
                price_schema: "26.06",
                currency: "USD",
                price_text: ["$", "26.06", ""],
                price_str: "$26.06",
                reduction: 220,
                market_price_text: ["$", "33.68", ""],
              },
              image: {
                width: 800,
                id: 2588247309,
                url_id: "7299996978308223720",
                url: "https://img.kwcdn.com/product/fancy/4bbd1421-7668-4756-a213-e25eff452426.jpg",
                height: 800,
              },
              sales_tip: "29K+ sold",
              visible: true,
              goods_id: 601099713718923,
              opt_id: 739,
              seo_link_url:
                "/1pc-thick-soft-comforter-lamb-quilt-ultra-breathable--cover-quilt-double-sided-box--solid-color-comforter-for-bedroom-warm-autumn-and-winter-comforter-gift-home-decor-g-601099713718923.html?&_oak_name_id=6735875514392315083&_oak_mp_inf=EIvVpPem1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F4bbd1421-7668-4756-a213-e25eff452426.jpg&spec_gallery_id=2588247309&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjYwNg&_oak_gallery_order=492619359%2C1722891194%2C1186352842%2C364573295%2C1655515371",
              queryReleScore: 0.0,
              sales_tip_text: ["29K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.9,
                hidden_comment: false,
                comment_num_tips: "5,395",
              },
              adult_goods: false,
            },
            {
              thumb_url:
                "https://img.kwcdn.com/product/fancy/fce62cea-f045-44bc-afb8-2f3c65667f79.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-13%",
              },
              item_type: 0,
              page_alt:
                "2pcs plug in light controlled sensor   light with dusk to dawn sensor light control switch suitable for   bedrooms childrens rooms kitchens stairs ideal as christmas thanksgiving valentines day new year gifts best for christmas   thanksgiving",
              current_sku_id: 17594884544125,
              tags_info: {
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"#4 TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Lighting & Accessories","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"773"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"773"}}}',
                    },
                    prompt_tag_text:
                      "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Lighting & Accessories",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "#4 TOP RATED",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "#4 TOP RATED",
                    ranking_id: "773",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/805c9f36789dc1febbcbab2aea8dfa1927b5aa23.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/fce62cea-f045-44bc-afb8-2f3c65667f79.jpg",
                url: "https://img.kwcdn.com/product/2bc0495c247a1abe63585b751f49ab35cd57430b.goods.000001.jpeg",
              },
              title:
                "[Smart Night Light] 2pcs Smart Night Light | Plug-in Light-Controlled Sensor with Dusk-to-Dawn Sensor Light Control Switch for Corridors, Bedrooms, Children's Rooms, Kitchens, Stairs - Ideal Christmas, Thanksgiving, Valentine's Day, New Year Gifts",
              sales_tip_text_list: ["82K+", "sold"],
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1562147595",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoBThicNrKpdH7645t/ZBr89QcvbXL/l7ZmD2Mo2OuEeMvW2J/FgdKWFvI25fBXNJ8EIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "6115019336848632103",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "1562147595",
                g: "601099656169115",
                scene_id: "3",
                show_price: "442",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "77",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "5972486477584578766",
                ts: "1762677696798",
              },
              mall_id: 6073293533710,
              sales_num: "82K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099656169115&_oak_name_id=5972486477584578766&_oak_mp_inf=EJuN7Num1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffce62cea-f045-44bc-afb8-2f3c65667f79.jpg&spec_gallery_id=3408344705&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDQy&_oak_gallery_order=1562147595%2C318058635%2C1436232864%2C236691926%2C919822085",
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099656169115&_oak_name_id=5972486477584578766&_oak_mp_inf=EJuN7Num1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffce62cea-f045-44bc-afb8-2f3c65667f79.jpg&spec_gallery_id=3408344705&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDQy&_oak_gallery_order=1562147595%2C318058635%2C1436232864%2C236691926%2C919822085&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "1562147595,318058635,1436232864,236691926,919822085",
                  _oak_name_id: "5972486477584578766",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"#4 TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Lighting & Accessories","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"773"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"773"}}}',
                  },
                  prompt_tag_text:
                    "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Lighting & Accessories",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "#4 TOP RATED",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "#4 TOP RATED",
                  ranking_id: "773",
                },
              ],
              show_index: 77,
              price_info: {
                split_price_text: ["$", "4", ".42", ""],
                reduction_text: ["-13", "%"],
                price: 442,
                market_price_str: "$5.12",
                market_price: 512,
                price_schema: "4.42",
                currency: "USD",
                price_text: ["$", "4.42", ""],
                price_str: "$4.42",
                market_price_text: ["$", "5.12", ""],
              },
              image: {
                width: 800,
                id: 3408344705,
                url_id: "6115019336848632103",
                url: "https://img.kwcdn.com/product/fancy/fce62cea-f045-44bc-afb8-2f3c65667f79.jpg",
                height: 800,
              },
              sales_tip: "82K+ sold",
              visible: true,
              goods_id: 601099656169115,
              opt_id: 777,
              seo_link_url:
                "/2pcs-plug-in-light-controlled-sensor--light-with-dusk-to-dawn-sensor-light-control-switch-suitable-for--bedrooms-childrens-rooms-kitchens-stairs-ideal-as-christmas-thanksgiving-valentines-day-new-year-gifts-best-for-christmas--thanksgiving-g-601099656169115.html?&_oak_name_id=5972486477584578766&_oak_mp_inf=EJuN7Num1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffce62cea-f045-44bc-afb8-2f3c65667f79.jpg&spec_gallery_id=3408344705&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDQy&_oak_gallery_order=1562147595%2C318058635%2C1436232864%2C236691926%2C919822085",
              queryReleScore: 0.0,
              sales_tip_text: ["82K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "5,050",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 3,
                percent: 7090,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/37400b08-598c-45d1-ab4a-d8432049991a.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-25%",
              },
              item_type: 0,
              page_alt:
                "2pcs bamboo breakfast tray with folding legs handles extra wide stable   bed tray table for eating working drawing portable foldable design for sofa bed   bedside table natural look christmas gifts",
              current_sku_id: 17594026355658,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Ships earliest in 11h",
                        },
                      ],
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91137,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                  {
                    color: "#FFEFD3",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"INNOVATIVE LIFE","brand_authorized_type":1}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/aftersales/f3dba53e-2a7c-4ae2-acf5-6cf50fd53c15.png",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand Official Store: INNOVATIVE LIFE",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/aftersales/efb13335-b6b6-4984-af7d-a48dbaccb830.png",
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Dining & Entertaining","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"1725"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"1725"}}}',
                    },
                    prompt_tag_text:
                      "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Dining & Entertaining",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "TOP RATED",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "TOP RATED",
                    ranking_id: "1725",
                  },
                  {
                    color: "#555555",
                    ext_map: {
                      lowest_tag_up_flag: "1",
                      lowest_price_before_title: "Lowest ever",
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91048,
                    text: "Lowest price ever",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/dbc8c873aee16342ccab123be8bdc4fcf3f72446.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/37400b08-598c-45d1-ab4a-d8432049991a.jpg",
                url: "https://img.kwcdn.com/product/37799ba6045b2c8a30f876ddfd5021abcd4b2ef5.goods.000001.jpeg",
              },
              title:
                "2pcs Bamboo Breakfast Tray with Folding Legs & Handles - Extra Wide Stable Food-Safe Bed Tray Table for Eating, Working, Drawing - Portable Foldable Design for Sofa, Bed, Lazy People, Bedside Table | Natural Look | Christmas Gifts",
              sales_tip_text_list: ["13K+", "sold"],
              sold_quantity_percent: 17,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "286398038",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGo40/m9A2sCa9YlmqUamKf6O0HA/xZRVgCg8sO3i2A7aXbRmA4bHztRb/sOWRIFEU1EIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "466528750639889615",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "286398038",
                g: "601099579948305",
                scene_id: "3",
                show_price: "1241",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "78",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "688110658950885746",
                ts: "1762677696798",
              },
              activity_type: 13,
              mall_id: 634418213933714,
              sales_num: "13K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099579948305&_oak_mp_inf=EJH6v7em1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F37400b08-598c-45d1-ab4a-d8432049991a.jpg&spec_gallery_id=2149532693&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTI0MQ&_oak_gallery_order=286398038%2C474654757%2C640654632%2C393963004%2C526042267",
              extend_fields: {
                sale_fire_flag: true,
                mall_view_type: 2,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099579948305&_oak_mp_inf=EJH6v7em1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F37400b08-598c-45d1-ab4a-d8432049991a.jpg&spec_gallery_id=2149532693&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTI0MQ&_oak_gallery_order=286398038%2C474654757%2C640654632%2C393963004%2C526042267&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112725765456395537",
                sku_extra_param: {
                  _oak_gallery_order:
                    "286398038,474654757,640654632,393963004,526042267",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Dining & Entertaining","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"1725"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"1725"}}}',
                  },
                  prompt_tag_text:
                    "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Dining & Entertaining",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "TOP RATED",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "TOP RATED",
                  ranking_id: "1725",
                },
                {
                  color: "#555555",
                  ext_map: {
                    lowest_tag_up_flag: "1",
                    lowest_price_before_title: "Lowest ever",
                  },
                  marketing_tag_type: 1000,
                  tag_id: 91048,
                  text: "Lowest price ever",
                  tag_series: 2,
                },
              ],
              show_index: 78,
              price_info: {
                split_price_text: ["$", "12", ".41", ""],
                reduction_text: ["-25", "%"],
                price: 1241,
                market_price_str: "$16.77",
                market_price: 1677,
                price_schema: "12.41",
                currency: "USD",
                price_text: ["$", "12.41", ""],
                price_str: "$12.41",
                reduction: 250,
                market_price_text: ["$", "16.77", ""],
              },
              image: {
                width: 1400,
                id: 2149532693,
                url_id: "466528750639889615",
                url: "https://img.kwcdn.com/product/fancy/37400b08-598c-45d1-ab4a-d8432049991a.jpg",
                height: 1400,
              },
              sales_tip: "13K+ sold",
              visible: true,
              goods_id: 601099579948305,
              opt_id: 1726,
              seo_link_url:
                "/2pcs-bamboo-breakfast-tray-with-folding-legs-handles-extra-wide-stable--bed-tray-table-for-eating-working-drawing-portable-foldable-design-for-sofa-bed--bedside-table-natural-look-christmas-gifts-g-601099579948305.html?&_oak_mp_inf=EJH6v7em1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F37400b08-598c-45d1-ab4a-d8432049991a.jpg&spec_gallery_id=2149532693&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTI0MQ&_oak_gallery_order=286398038%2C474654757%2C640654632%2C393963004%2C526042267",
              queryReleScore: 0.0,
              sales_tip_text: ["13K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.9,
                hidden_comment: false,
                comment_num_tips: "2,137",
              },
              adult_goods: false,
            },
            {
              shipping_info: {
                titleType: 0,
                shippingMethod: 101,
                dayNum: 4,
                percent: 8790,
              },
              thumb_url:
                "https://img.kwcdn.com/product/fancy/85a24a4f-7528-4c0b-979d-5636a3a3cfc6.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "  for   8 bite sized 2   dual non stick plates for quick release     family breakfasts double sided waffle maker waffle maker electric nonstick waffle machin for restaurant",
              current_sku_id: 17596728582399,
              tags_info: {
                mix_benefit_tags: [
                  {
                    tag_rich_text: {
                      support_promotion: false,
                      text_rich: [
                        {
                          font_weight: 400,
                          font_color: "#0A8800",
                          font_size: 14,
                          id: 2,
                          type: 0,
                          value: "Fastest : 1 BUSINESS DAY",
                        },
                      ],
                    },
                    tag_id: 1016,
                  },
                ],
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {
                      local_explanation:
                        '{"title":"Local warehouse","content":"Items with the \\"Local\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.","button":{"text":"OK"}}',
                    },
                    marketing_tag_type: 1000,
                    tag_id: 91050,
                    text: "Local",
                    tag_series: 2,
                  },
                ],
                mall_tag: [
                  {
                    color: "#FFFFFF",
                    ext_map: {
                      bg_start_color: "#6F3D91",
                      bg_end_color: "#520E6F",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/pho/03fdaf4a-34b2-4a01-8a7c-2b662468d77a.png.slim.png",
                    marketing_tag_type: 2701,
                    width: 39,
                    tag_id: 91130,
                    text: "Star store",
                    tag_series: 2,
                    url: "https://aimg.kwcdn.com/upload_aimg/pho/05f39254-a4b9-4289-9174-56337e13689e.png.slim.png",
                    height: 39,
                  },
                  {
                    color: "#000000",
                    ext_map: {
                      brand_info:
                        '{"brand_name":"OSTBA","brand_authorized_type":2}',
                      brand_tag_text_style: "1",
                    },
                    bg_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                    marketing_tag_type: 2700,
                    width: 39,
                    tag_id: 91007,
                    text: "Brand: OSTBA",
                    tag_series: 2,
                    height: 39,
                  },
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Small Appliances & Accessories","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"1853"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"1853"}}}',
                    },
                    prompt_tag_text:
                      "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                    footer: {
                      color: "#555555",
                      text: " in Small Appliances & Accessories",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "BEST-SELLING ITEM",
                    ranking_id: "1853",
                  },
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "Mini Waffle Maker for, Makes 8 Bite-Sized 2'' Waffles, Dual Non-Stick Plates for Quick Release & Easy Cleaning, Perfect for Family Breakfasts, Double Sided Waffle Maker, Waffle Maker Electric Nonstick, Waffle Machin for Restaurant",
              sales_tip_text_list: ["3.8K+", "sold"],
              sold_quantity_percent: 21,
              p_rec: {
                list_id: "category_list_f1d7fce4f0904fcaa5567bfe6da6428c",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "2059500646",
                sort_by_type: "873027542",
                st_model_point:
                  "CnAc6MjuPct/QwFcMI+FaY4R0sYYCQkRSXPJkI49jSDu/aAgNo9jULAHjYtXIwa/9uUWWcFF0H7hiIolkBYDmwGoMJ01Sck177Ht97xixmYZaloNoEBX4u+RnldadAeeRTwaqSzB3mqWWa36s6rUU38BEIIBGGQiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                scene: "opt",
                image_url_id: "371655340045544931",
                show_currency: "USD",
                no_result: "0",
                offset: "40",
                engine_creative_id: "2059500646",
                g: "601099914248613",
                scene_id: "3",
                show_price: "1063",
                opt_id: "36",
                ts_req: "0",
                version: "5",
                search_id:
                  "iQwgJrg95NNuzoYN2Q-b9SmZPYT-yImUHMvNk2sgGq0GuA7TFKCTGguIRv6jUCge",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "79",
                region: "211",
                bid: "69999705",
                cloud_env: "udpm1",
                creative_title_id: "7374877406926208927",
                ts: "1762677696798",
              },
              activity_type: 13,
              mall_id: 634418220056823,
              sales_num: "3.8K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099914248613&_oak_mp_inf=EKWD9Nan1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F85a24a4f-7528-4c0b-979d-5636a3a3cfc6.jpg&spec_gallery_id=3388879745&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA2Mw&_oak_gallery_order=2059500646%2C1446879015%2C1056268081%2C698227409%2C81325937",
              extend_fields: {
                sale_fire_flag: true,
                mall_view_type: 2,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099914248613&_oak_mp_inf=EKWD9Nan1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F85a24a4f-7528-4c0b-979d-5636a3a3cfc6.jpg&spec_gallery_id=3388879745&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA2Mw&_oak_gallery_order=2059500646%2C1446879015%2C1056268081%2C698227409%2C81325937&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112716952535761317",
                sku_extra_param: {
                  _oak_gallery_order:
                    "2059500646,1446879015,1056268081,698227409,81325937",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/3d766c5d-90c1-44c9-ae11-25159c96fa25.png.slim.png",
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Small Appliances & Accessories","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"1853"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"1853"}}}',
                  },
                  prompt_tag_text:
                    "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                  footer: {
                    color: "#555555",
                    text: " in Small Appliances & Accessories",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/srch/d548f0ad-c7cc-4201-bafd-789daa2c1455.png.slim.png",
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "BEST-SELLING ITEM",
                  ranking_id: "1853",
                },
              ],
              show_index: 79,
              price_info: {
                split_price_text: ["$", "10", ".63", ""],
                reduction_text: [],
                price: 1063,
                price_schema: "10.63",
                currency: "USD",
                price_text: ["$", "10.63", ""],
                price_str: "$10.63",
              },
              image: {
                width: 1471,
                id: 3388879745,
                url_id: "371655340045544931",
                url: "https://img.kwcdn.com/product/fancy/85a24a4f-7528-4c0b-979d-5636a3a3cfc6.jpg",
                height: 1471,
              },
              sales_tip: "3.8K+ sold",
              visible: true,
              goods_id: 601099914248613,
              opt_id: 1854,
              seo_link_url:
                "/-for--8-bite-sized-2--dual-non-stick-plates-for-quick-release---family-breakfasts-double-sided-waffle-maker-waffle-maker-electric-nonstick-waffle-machin-for-restaurant-g-601099914248613.html?&_oak_mp_inf=EKWD9Nan1ogBGi5jYXRlZ29yeV9saXN0X2YxZDdmY2U0ZjA5MDRmY2FhNTU2N2JmZTZkYTY0MjhjIPLRnL6mMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F85a24a4f-7528-4c0b-979d-5636a3a3cfc6.jpg&spec_gallery_id=3388879745&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA2Mw&_oak_gallery_order=2059500646%2C1446879015%2C1056268081%2C698227409%2C81325937",
              queryReleScore: 0.0,
              sales_tip_text: ["3.8K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "485",
              },
              adult_goods: false,
            },
          ],
          share_url: "https://share.temu.com/WSSeCWuPsvC",
          extend_fields: {},
          home_opt_module_list: [],
          text_cart_button: false,
          jump_type: 0,
          recent_word: 0,
          shield_all: false,
        },
        has_more: true,
      },
      success: true,
      message: "",
    };
    const title = data.result.data.title;
    const goodsList = data?.result?.data?.goods_list || [];

    const mappedGoods = goodsList.map((item: any) => ({
      id: item.goods_id,
      name: title,
      title: item.title,
      image: item.image?.url,
      image_url: item.video?.url,
      price: item.price_info?.price_schema,
      show_price: item.p_rec?.show_price,
      market_price: item.p_rec?.market_price,
      currency: item.price_info?.currency,
      price_str: item.price_info?.price_str,
      discount: item.price_info?.reduction_text?.join("") || "",
      sales: item.sales_num,

      link: "https://www.temu.com" + item.seo_link_url,
      shipping_info: {
        ...item.shipping_info,
      },
      tags_info: {
        ...item.tags_info,
      },
      goods_tags: {
        ...item.goods_tags,
      },
      mall_tag: {
        ...item.mall_tag,
      },
      comment: {
        ...item.comment,
      },
      tags: [
        ...(item.goods_tags || []),
        ...(item.tags_info?.title_header_tags || []),
      ]
        .map((tag) => tag.text)
        .filter(Boolean),
    }));

    const productRepository = getRepository(Product);
    const categoryRepository = getRepository(Category);
    const productTagRepository = getRepository(ProductTag);
    const brandRepository = getRepository(Branding);

    for (const productData of mappedGoods) {
      if (!productData.title) {
        return;
      }
      let category = await categoryRepository.findOne({
        where: { name: productData.name },
      });

      let brand: Branding | null = null;
      let brandName: string | null = null;

      // 1️⃣ Find the first mall_tag that contains brand_info
      const brandTag = productData.tags_info?.mall_tag?.find(
        (tag: any) => tag.ext_map?.brand_info
      );

      if (brandTag) {
        try {
          const brandInfo = JSON.parse(brandTag.ext_map.brand_info);
          brandName = brandInfo.brand_name || null;
        } catch (err) {
          // fallback to text if JSON parsing fails
          if (brandTag.text && brandTag.text.includes(":")) {
            brandName = brandTag.text.split(":")[1].trim();
          } else if (brandTag.text) {
            brandName = brandTag.text.trim();
          }
        }
      }

      // 2️⃣ Additional fallback if brandName still null, check title_header_tags
      if (!brandName && productData.tags_info?.title_header_tags?.length) {
        const titleHeaderBrandTag =
          productData.tags_info.title_header_tags.find((tag: any) =>
            tag.text?.toLowerCase().includes("brand")
          );
        if (
          titleHeaderBrandTag?.text &&
          titleHeaderBrandTag.text.includes(":")
        ) {
          brandName = titleHeaderBrandTag.text.split(":")[1].trim();
        }
      }

      // 3️⃣ Create or fetch brand
      if (brandName) {
        brand = await brandRepository.findOne({ where: { name: brandName } });
        if (!brand) {
          brand = brandRepository.create({ name: brandName, is_active: true });
          await brandRepository.save(brand);
        }
      }

      const productDataToSave: DeepPartial<Product> = {
        name: productData.title,
        price: toNumber(productData.price),
        market_price: toNumber(productData.market_price),
        price_str: productData.price_str,
        show_price: productData.show_price,
        currency: productData.currency,
        images: productData.image ? [productData.image] : [],
        image_url: productData.image_url,
        discount: toNumber(productData.discount),
        sell_count: productData.sales,
        star_store: productData.mall_tag?.[0]?.text || null,
        brand_id: brand?.id,
        category_id: category?.id,
        total_star: Math.floor(Number(productData.comment?.goods_score)) || 0,
        total_comment: Number(productData.comment?.comment_num_tips) || 0,
      };
      const product = productRepository.create(productDataToSave);
      const saved = await productRepository.save(product);

      // 4️⃣ Add goods_tags & title_header_tags to ProductTag
      const allTags = [
        ...(Array.isArray(productData.goods_tags)
          ? productData.goods_tags
          : []),
        ...(Array.isArray(productData.tags_info?.title_header_tags)
          ? productData.tags_info.title_header_tags
          : []),
        ...(Array.isArray(productData.tags_info?.mix_benefit_tags)
          ? productData.tags_info.mix_benefit_tags
          : []),
      ];

      for (const tag of allTags) {
        if (!tag.text) continue;
        let localExplanation: { title?: string; content?: string } = {};
        if (tag.title_header_tags?.ext_map?.local_explanation) {
          try {
            localExplanation = JSON.parse(
              tag.title_header_tags.ext_map.local_explanation
            );
          } catch (err) {
            console.warn("Failed to parse local_explanation JSON:", err);
          }
        }
        const productTag = productTagRepository.create({
          text_rich: tag.mix_benefit_tags?.tag_rich_text?.text
            ? [tag.mix_benefit_tags.tag_rich_text.text]
            : [],
          local_title: localExplanation.title || undefined,
          content: localExplanation.content || undefined,
          prompt_tag_text: tag.prompt_tag_text || undefined,
          footer_text: tag.footer?.text || undefined,
          header_text: tag.header?.text || undefined,
          productData: saved,
        });

        const createTag = await productTagRepository.save(productTag);
        console.log(createTag);
      }
    }
    console.log("Completed");
  } catch (error) {
    console.error("❌ Error fetching product by category:", error);
    return null;
  }
};

function toNumber(value: string | number | undefined | null): number {
  if (!value) return 0; // null, undefined, or empty string
  if (typeof value === "number") return value;
  // Remove anything that's not digit or dot
  const clean = value.replace(/[^0-9.]/g, "");
  return parseFloat(clean) || 0;
}

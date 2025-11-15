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
        server_time: 1763223031262,
        data: {
          aspect_ratio: 1.33,
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
              "CA$",
              "0",
            ],
            price: 0,
            price_text: ["Add ", "0", " item to cart", ": ", "", "CA$", "0"],
          },
          call_opt: 0,
          pattern: 0,
          filter_region: {
            p_search: {
              offset: "80",
              list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
              item_type: "0",
              g: "0",
              scene_id: "3",
              mid: "69999906",
              opt_id: "721",
              ts_req: "0",
              version: "5",
              search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
              scene: "opt",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "search",
              idx: "-1",
              region: "37",
              no_result: "0",
              bid: "69999705",
              cloud_env: "usm1",
              ts: "1763223031262",
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
                  offset: "80",
                  list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                  item_type: "0",
                  g: "0",
                  scene_id: "3",
                  mid: "69999906",
                  opt_id: "721",
                  ts_req: "0",
                  version: "5",
                  search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                  scene: "opt",
                  gin_fallback: "0",
                  opt_type: "0",
                  goods_source: "search",
                  idx: "0",
                  region: "37",
                  no_result: "0",
                  bid: "69999705",
                  cloud_env: "usm1",
                  ts: "1763223031262",
                },
                id: 0,
                sort: [1],
              },
              {
                name: "Top sales",
                p_search: {
                  offset: "80",
                  list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                  item_type: "0",
                  g: "0",
                  scene_id: "3",
                  mid: "69999906",
                  opt_id: "721",
                  ts_req: "0",
                  version: "5",
                  search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                  scene: "opt",
                  gin_fallback: "0",
                  opt_type: "0",
                  goods_source: "search",
                  idx: "1",
                  region: "37",
                  no_result: "0",
                  bid: "69999705",
                  cloud_env: "usm1",
                  ts: "1763223031262",
                },
                id: 1,
                sort: [1],
              },
              {
                name: "Most recent",
                p_search: {
                  offset: "80",
                  list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                  item_type: "0",
                  g: "0",
                  scene_id: "3",
                  mid: "69999906",
                  opt_id: "721",
                  ts_req: "0",
                  version: "5",
                  search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                  scene: "opt",
                  gin_fallback: "0",
                  opt_type: "0",
                  goods_source: "search",
                  idx: "2",
                  region: "37",
                  no_result: "0",
                  bid: "69999705",
                  cloud_env: "usm1",
                  ts: "1763223031262",
                },
                id: 3,
                sort: [1],
              },
              {
                name: "Price low to high",
                p_search: {
                  offset: "80",
                  list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                  item_type: "0",
                  g: "0",
                  scene_id: "3",
                  mid: "69999906",
                  opt_id: "721",
                  ts_req: "0",
                  version: "5",
                  search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                  scene: "opt",
                  gin_fallback: "0",
                  opt_type: "0",
                  goods_source: "search",
                  idx: "3",
                  region: "37",
                  no_result: "0",
                  bid: "69999705",
                  cloud_env: "usm1",
                  ts: "1763223031262",
                },
                id: 2,
                sort: [0],
              },
              {
                name: "Price high to low",
                p_search: {
                  offset: "80",
                  list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                  item_type: "0",
                  g: "0",
                  scene_id: "3",
                  mid: "69999906",
                  opt_id: "721",
                  ts_req: "0",
                  version: "5",
                  search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                  scene: "opt",
                  gin_fallback: "0",
                  opt_type: "0",
                  goods_source: "search",
                  idx: "4",
                  region: "37",
                  no_result: "0",
                  bid: "69999705",
                  cloud_env: "usm1",
                  ts: "1763223031262",
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
          title: "Women's Coats & Jackets",
          default_row_cnt: 0,
          opt_list: [
            {
              tab_type: 0,
              image_url:
                "https://img.kwcdn.com/product/1e14dde0136/b7d80419-f356-420a-b469-ee9303bb75bb_213x213.png",
              p_rec: {
                offset: "80",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                g: "0",
                scene_id: "3",
                mid: "69999906",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                scene: "opt",
                gin_fallback: "0",
                opt_hash_id: "158213038",
                opt_type: "2",
                goods_source: "rec",
                idx: "-1",
                region: "37",
                no_result: "0",
                bid: "69999705",
                cloud_env: "usm1",
                ts: "1763223031268",
              },
              disable_dup: false,
              pattern: 0,
              opt_type: 2,
              opt_name: "Women's Coats & Jackets",
              priority: 0,
              opt_id: 721,
              is_featured: false,
            },
          ],
          goods_list: [
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/2dbaa657-b3b1-4adf-bf38-0f589b6d0712.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/2dbaa657-b3b1-4adf-bf38-0f589b6d0712.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-14%",
              },
              item_type: 0,
              page_alt:
                "womens elegant trench coat long sleeve winter coat with button front closure   length formal everyday outerwear chic   outerwear non stretchy fabric for fall   ladies winter coats",
              current_sku_id: 17612742039013,
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
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "Women'S Elegant Trench Coat - Long Sleeve Winter Coat with Button Front Closure, Mid-Length Formal & Everyday Outerwear, Chic Office to Party Outerwear, Non-Stretchy Fabric for Fall/Winter Fashion, Ladies Winter Coats",
              sales_tip_text_list: [],
              display_end_time_percent: 52,
              sold_quantity_percent: 50,
              p_rec: {
                skc_id: "17597362873313",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1172849424",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw9Lc2m4lwFmPxPkUhfC5zlVTbfnuRCwLjYJG+X4eZ45nEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "4463595821841252026",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1172849424",
                g: "601104020664185",
                scene_id: "3",
                show_price: "4914",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "80",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "8104114164893616976",
                ts: "1763223031258",
              },
              activity_type: 13,
              mall_id: 634418212725044,
              sales_num: "4.6K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601104020664185&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2dbaa657-b3b1-4adf-bf38-0f589b6d0712.jpg&spec_id=16079&spec_gallery_id=523336&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTAxMw&_oak_gallery_order=1172849424%2C216916827%2C487800165&spec_ids=16079&_oak_mp_inf=EPne%2F%2Fy21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKibocKoMw%3D%3D",
              selected_spec_ids: [16079],
              extend_fields: {
                market_map: {
                  "220001": {
                    showTag: false,
                    couponBatchSn: "",
                    marketingToolType: 220001,
                    endTime: 1765641599000,
                    savingPrice: 99,
                    appliedPrice: true,
                    promotionId: "A00049C-4699013630230823220176127420390130",
                  },
                },
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601104020664185&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2dbaa657-b3b1-4adf-bf38-0f589b6d0712.jpg&spec_id=16079&spec_gallery_id=523336&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTAxMw&_oak_gallery_order=1172849424%2C216916827%2C487800165&spec_ids=16079&_oak_mp_inf=EPne%2F%2Fy21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKibocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112732613555056505",
                sku_extra_param: {
                  _oak_gallery_order: "1172849424,216916827,487800165",
                },
              },
              goods_tags: [],
              show_index: 80,
              price_info: {
                reduction_text: ["-16", "%"],
                market_price_type: 2,
                price_text: ["CA$", "49.14", ""],
                price_str: "CA$49.14",
                price_color: "#FB7701",
                split_price_text: ["CA$", "49", ".14", ""],
                currency_str: "CA$",
                price: 4914,
                market_price_str: "58.54",
                market_price: 5854,
                price_schema: "CA$49.14",
                currency: "CAD",
                reduction: 161,
                market_price_text: ["", "58.54", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1340,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 523336,
                url_id: "4463595821841252026",
                url: "https://img.kwcdn.com/product/fancy/2dbaa657-b3b1-4adf-bf38-0f589b6d0712.jpg",
                height: 1785,
              },
              sales_tip: "4.6K+ sold",
              visible: true,
              goods_id: 601104020664185,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "50", ".13", ""],
                    reduction_text: ["-14", "%"],
                    price: 5013,
                    market_price_str: "58.54",
                    market_price: 5854,
                    price_schema: "50.13",
                    currency: "CAD",
                    price_text: ["CA$", "50.13", ""],
                    price_str: "CA$50.13",
                    price_color: "#FB7701",
                    reduction: 140,
                    market_price_text: ["", "58.54", ""],
                  },
                  image: {
                    width: 1340,
                    id: 523336,
                    url: "https://img.kwcdn.com/product/fancy/2dbaa657-b3b1-4adf-bf38-0f589b6d0712.jpg",
                    height: 1785,
                  },
                  color: "(234,234,234,1)",
                  seo_link_url:
                    "/ca/womens-elegant-trench-coat-long-sleeve-winter-coat-with-button-front-closure--length-formal-everyday-outerwear-chic--outerwear-non-stretchy-fabric-for-fall--ladies-winter-coats-g-601104020664185.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2dbaa657-b3b1-4adf-bf38-0f589b6d0712.jpg&spec_id=16079&spec_gallery_id=523336&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTAxMw&_oak_mp_inf=EPne%2F%2Fy21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKibocKoMw%3D%3D",
                  spec_id: 16079,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/cc690cf7-3187-404c-8cdd-f3eb5561591a.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104020664185&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2dbaa657-b3b1-4adf-bf38-0f589b6d0712.jpg&spec_id=16079&spec_gallery_id=523336&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTAxMw&_oak_mp_inf=EPne%2F%2Fy21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKibocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/2dbaa657-b3b1-4adf-bf38-0f589b6d0712.jpg",
                  price_str: "53.60",
                },
              ],
              spec_ids: "16079",
              display_end_time: 1764392399,
              seo_link_url:
                "/ca/womens-elegant-trench-coat-long-sleeve-winter-coat-with-button-front-closure--length-formal-everyday-outerwear-chic--outerwear-non-stretchy-fabric-for-fall--ladies-winter-coats-g-601104020664185.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2dbaa657-b3b1-4adf-bf38-0f589b6d0712.jpg&spec_id=16079&spec_gallery_id=523336&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTAxMw&_oak_gallery_order=1172849424%2C216916827%2C487800165&_oak_mp_inf=EPne%2F%2Fy21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKibocKoMw%3D%3D&spec_ids=16079",
              queryReleScore: 0.0,
              sales_tip_text: ["4.6K+", "sold"],
              opt_type: 3,
              comment: {},
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/3046a5f1-09de-4ae6-ac0a-5ca6dd05d21b.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/3046a5f1-09de-4ae6-ac0a-5ca6dd05d21b.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "womens   tweed coat long formal casual outerwear   h silhouette winter jacket for office parties party attire medium   fabric office wear professional women trench coat women with hood",
              current_sku_id: 17607205250926,
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
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "Women'S Elegant Burgundy Tweed Coat - Long Formal & Casual Outerwear, Structured H-Silhouette Winter Jacket for Office, Parties, Party Attire, Medium Elasticity Fabric, Office Wear, Professional Women, Trench Coat Women With Hood",
              sales_tip_text_list: [],
              display_end_time_percent: 23,
              sold_quantity_percent: 64,
              p_rec: {
                skc_id: "17596091295645",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "2140427328",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw78YpXSD/0EsBhAY1CK+jtLJBjdgJ6w33A0cgoT9hAObEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "8293781271811889844",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "2140427328",
                g: "601102947455862",
                scene_id: "3",
                show_price: "4019",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "81",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "4350936274119332679",
                ts: "1763223031258",
              },
              activity_type: 13,
              mall_id: 634418211419586,
              sales_num: "8.2K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102947455862&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3046a5f1-09de-4ae6-ac0a-5ca6dd05d21b.jpg&spec_id=15066&spec_gallery_id=394558&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDAxOQ&_oak_gallery_order=2140427328%2C1551846340%2C936617112%2C568030776%2C440171277&spec_ids=15066&_oak_name_id=4350936274119332679&_oak_mp_inf=EPamoP2y1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKibocKoMw%3D%3D",
              selected_spec_ids: [15066],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601102947455862&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3046a5f1-09de-4ae6-ac0a-5ca6dd05d21b.jpg&spec_id=15066&spec_gallery_id=394558&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDAxOQ&_oak_gallery_order=2140427328%2C1551846340%2C936617112%2C568030776%2C440171277&spec_ids=15066&_oak_name_id=4350936274119332679&_oak_mp_inf=EPamoP2y1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKibocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112738948061336438",
                sku_extra_param: {
                  _oak_gallery_order:
                    "2140427328,1551846340,936617112,568030776,440171277",
                  _oak_name_id: "4350936274119332679",
                },
              },
              goods_tags: [],
              show_index: 81,
              price_info: {
                split_price_text: ["CA$", "40", ".19", ""],
                currency_str: "CA$",
                reduction_text: [],
                price: 4019,
                price_schema: "40.19",
                currency: "CAD",
                price_text: ["CA$", "40.19", ""],
                price_str: "CA$40.19",
                price_color: "#FB7701",
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 394558,
                url_id: "8293781271811889844",
                url: "https://img.kwcdn.com/product/fancy/3046a5f1-09de-4ae6-ac0a-5ca6dd05d21b.jpg",
                height: 1800,
              },
              sales_tip: "8.2K+ sold",
              visible: true,
              goods_id: 601102947455862,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "40", ".19", ""],
                    reduction_text: [],
                    price: 4019,
                    price_schema: "40.19",
                    currency: "CAD",
                    price_text: ["CA$", "40.19", ""],
                    price_str: "CA$40.19",
                    price_color: "#FB7701",
                  },
                  image: {
                    width: 1350,
                    id: 394558,
                    url: "https://img.kwcdn.com/product/fancy/3046a5f1-09de-4ae6-ac0a-5ca6dd05d21b.jpg",
                    height: 1800,
                  },
                  color: "(139,0,0,1)",
                  seo_link_url:
                    "/ca/womens--tweed-coat-long-formal-casual-outerwear--h-silhouette-winter-jacket-for-office-parties-party-attire-medium--fabric-office-wear-professional-women-trench-coat-women-with-hood-g-601102947455862.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3046a5f1-09de-4ae6-ac0a-5ca6dd05d21b.jpg&spec_id=15066&spec_gallery_id=394558&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDAxOQ&_oak_mp_inf=EPamoP2y1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKibocKoMw%3D%3D",
                  spec_id: 15066,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/eb06f0f8-a182-4a1c-8454-5190ea273bf4.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102947455862&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3046a5f1-09de-4ae6-ac0a-5ca6dd05d21b.jpg&spec_id=15066&spec_gallery_id=394558&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDAxOQ&_oak_mp_inf=EPamoP2y1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKibocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/3046a5f1-09de-4ae6-ac0a-5ca6dd05d21b.jpg",
                  price_str: "42.19",
                },
              ],
              spec_ids: "15066",
              display_end_time: 1763355599,
              seo_link_url:
                "/ca/womens--tweed-coat-long-formal-casual-outerwear--h-silhouette-winter-jacket-for-office-parties-party-attire-medium--fabric-office-wear-professional-women-trench-coat-women-with-hood-g-601102947455862.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3046a5f1-09de-4ae6-ac0a-5ca6dd05d21b.jpg&spec_id=15066&spec_gallery_id=394558&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDAxOQ&_oak_gallery_order=2140427328%2C1551846340%2C936617112%2C568030776%2C440171277&_oak_name_id=4350936274119332679&_oak_mp_inf=EPamoP2y1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKibocKoMw%3D%3D&spec_ids=15066",
              queryReleScore: 0.0,
              sales_tip_text: ["8.2K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 5.0,
                hidden_comment: true,
                comment_num_tips: "4",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fmket/c5fe39ef77dfa0210aaf32123fbb3572.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fmket/c5fe39ef77dfa0210aaf32123fbb3572.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-41%",
              },
              item_type: 0,
              page_alt:
                "womens winter coat navy blue cold weather parka with full zip closure thick insulated long jacket front zipper pocket machine washable loose outerwear for everyday formal events seasonal fashion elegant design   stitching zipper closure office wear",
              current_sku_id: 17600847093063,
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
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                    marketing_tag_type: 1000,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                    tag_id: 91004,
                    text: "Only 2 left",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/adafb9ae8a044edefb325ad7acce6f5e6cc0e5cbgs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fmket/c5fe39ef77dfa0210aaf32123fbb3572.jpg",
                url: "https://img.kwcdn.com/product/88568e599503399cec434f7564176494bfc0f1be.temu.000001.jpeg",
              },
              title:
                "[Women's Winter Coat] Women's Winter Coat - Navy Blue Cold Weather Parka with Full-Zip Closure, Thick Insulated Long Jacket, Front Zipper Pocket, Machine Washable Loose Outerwear for Everyday & Formal Events, Seasonal Fashion, Elegant Design, Highquality Stitching, Zipper Closure, Office Wear",
              sales_tip_text_list: [],
              display_end_time_percent: 23,
              sold_quantity_percent: 0,
              p_rec: {
                skc_id: "17594588622156",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1313030879",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw6dxD7YTjkz2z3g5sZGcMEDGvcMATbMn+TgdJpdk3FgOEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "2365700435330543754",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1313030879",
                g: "601101649990341",
                scene_id: "3",
                show_price: "7201",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "82",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "7227835776698799943",
                ts: "1763223031259",
              },
              activity_type: 13,
              mall_id: 634418224176548,
              sales_num: "6.6K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601101649990341&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Fc5fe39ef77dfa0210aaf32123fbb3572.jpg&spec_id=16091&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NzIwMQ&_oak_gallery_order=1313030879%2C2118705217%2C747766230%2C1394986941%2C625962563&spec_ids=16091&_oak_name_id=7227835776698799943&_oak_mp_inf=EMWlyZKu1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
              selected_spec_ids: [16091],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601101649990341&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Fc5fe39ef77dfa0210aaf32123fbb3572.jpg&spec_id=16091&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NzIwMQ&_oak_gallery_order=1313030879%2C2118705217%2C747766230%2C1394986941%2C625962563&spec_ids=16091&_oak_name_id=7227835776698799943&_oak_mp_inf=EMWlyZKu1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112737216988205765",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1313030879,2118705217,747766230,1394986941,625962563",
                  _oak_name_id: "7227835776698799943",
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
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 2 left",
                  tag_series: 2,
                },
              ],
              show_index: 82,
              price_info: {
                reduction_text: ["-41", "%"],
                market_price_type: 1,
                price_text: ["CA$", "72.01", ""],
                price_str: "CA$72.01",
                price_color: "#FB7701",
                split_price_text: ["CA$", "72", ".01", ""],
                currency_str: "CA$",
                price: 7201,
                market_price_str: "123.68",
                market_price: 12368,
                price_schema: "72.01",
                currency: "CAD",
                reduction: 410,
                market_price_text: ["", "123.68", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1500,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 1,
                url_id: "2365700435330543754",
                url: "https://img.kwcdn.com/product/fmket/c5fe39ef77dfa0210aaf32123fbb3572.jpg",
                height: 2000,
              },
              sales_tip: "6.6K+ sold",
              visible: true,
              goods_id: 601101649990341,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "72", ".01", ""],
                    reduction_text: ["-41", "%"],
                    price: 7201,
                    market_price_str: "123.68",
                    market_price: 12368,
                    price_schema: "72.01",
                    currency: "CAD",
                    price_text: ["CA$", "72.01", ""],
                    price_str: "CA$72.01",
                    price_color: "#FB7701",
                    reduction: 410,
                    market_price_text: ["", "123.68", ""],
                  },
                  image: {
                    width: 1500,
                    id: 1,
                    url: "https://img.kwcdn.com/product/fmket/c5fe39ef77dfa0210aaf32123fbb3572.jpg",
                    height: 2000,
                  },
                  color: "(46,78,126,1)",
                  seo_link_url:
                    "/ca/womens-winter-coat-navy-blue-cold-weather-parka-with-full-zip-closure-thick-insulated-long-jacket-front-zipper-pocket-machine-washable-loose-outerwear-for-everyday-formal-events-seasonal-fashion-elegant-design--stitching-zipper-closure-office-wear-g-601101649990341.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Fc5fe39ef77dfa0210aaf32123fbb3572.jpg&spec_id=16091&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NzIwMQ&_oak_mp_inf=EMWlyZKu1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
                  spec_id: 16091,
                  color_image:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/a57f6519-5cba-45b6-8a5a-273314e886c4.jpg",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601101649990341&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Fc5fe39ef77dfa0210aaf32123fbb3572.jpg&spec_id=16091&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NzIwMQ&_oak_mp_inf=EMWlyZKu1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fmket/c5fe39ef77dfa0210aaf32123fbb3572.jpg",
                  price_str: "83.25",
                },
              ],
              spec_ids: "16091",
              display_end_time: 1763355599,
              seo_link_url:
                "/ca/womens-winter-coat-navy-blue-cold-weather-parka-with-full-zip-closure-thick-insulated-long-jacket-front-zipper-pocket-machine-washable-loose-outerwear-for-everyday-formal-events-seasonal-fashion-elegant-design--stitching-zipper-closure-office-wear-g-601101649990341.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Fc5fe39ef77dfa0210aaf32123fbb3572.jpg&spec_id=16091&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NzIwMQ&_oak_gallery_order=1313030879%2C2118705217%2C747766230%2C1394986941%2C625962563&_oak_name_id=7227835776698799943&_oak_mp_inf=EMWlyZKu1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D&spec_ids=16091",
              queryReleScore: 0.0,
              sales_tip_text: ["6.6K+", "sold"],
              opt_type: 3,
              comment: {},
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/da659d57-aa1c-4ff1-a3ca-907429648b80.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/da659d57-aa1c-4ff1-a3ca-907429648b80.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-85%",
              },
              item_type: 0,
              page_alt: "womens casual outerwear",
              current_sku_id: 17610858702305,
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
                ],
                goods_tags: [
                  {
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Women\'s Coats & Jackets","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"721"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"721"}}}',
                    },
                    footer: {
                      color: "#555555",
                      text: " in Women's Coats & Jackets",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "BEST-SELLING ITEM",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "Best sellers",
                    ranking_id: "721",
                  },
                ],
              },
              video: {
                video_url: "",
              },
              title: "Women's Casual Outerwear",
              sales_tip_text_list: [],
              display_end_time_percent: 7,
              sold_quantity_percent: 5,
              p_rec: {
                skc_id: "17596923706205",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "139965919",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw1k1rqj/mahorDE1rF+aEYS5mhP7S8vVOxekSwPvghZjEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "6748517884678078918",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "139965919",
                g: "601102393584900",
                scene_id: "3",
                show_price: "2269",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "83",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "4105875677496430159",
                ts: "1763223031259",
              },
              activity_type: 13,
              mall_id: 634418223104890,
              sales_num: "7.6K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102393584900&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fda659d57-aa1c-4ff1-a3ca-907429648b80.jpg&spec_id=2&spec_gallery_id=412129&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2OQ&_oak_gallery_order=139965919%2C999604195%2C880778687%2C1104134849%2C1406472651&spec_ids=2,15060,2877514,16091,15082,16062,3002,16093,16102&_oak_name_id=4105875677496430159&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
              selected_spec_ids: [
                2, 15060, 2877514, 16091, 15082, 16062, 3002, 16093, 16102,
              ],
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601102393584900&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fda659d57-aa1c-4ff1-a3ca-907429648b80.jpg&spec_id=2&spec_gallery_id=412129&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2OQ&_oak_gallery_order=139965919%2C999604195%2C880778687%2C1104134849%2C1406472651&spec_ids=2,15060,2877514,16091,15082,16062,3002,16093,16102&_oak_name_id=4105875677496430159&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112737154761534724",
                sku_extra_param: {
                  _oak_gallery_order:
                    "139965919,999604195,880778687,1104134849,1406472651",
                  _oak_name_id: "4105875677496430159",
                },
              },
              goods_tags: [
                {
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Women\'s Coats & Jackets","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"721"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"721"}}}',
                  },
                  footer: {
                    color: "#555555",
                    text: " in Women's Coats & Jackets",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "BEST-SELLING ITEM",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "Best sellers",
                  ranking_id: "721",
                },
              ],
              show_index: 83,
              price_info: {
                reduction_text: ["-85", "%"],
                market_price_type: 1,
                price_text: ["CA$", "22.69", ""],
                price_str: "CA$22.69",
                price_color: "#FB7701",
                split_price_text: ["CA$", "22", ".69", ""],
                currency_str: "CA$",
                price: 2269,
                market_price_str: "156.20",
                market_price: 15620,
                price_schema: "22.69",
                currency: "CAD",
                reduction: 850,
                market_price_text: ["", "156.20", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 412129,
                url_id: "6748517884678078918",
                url: "https://img.kwcdn.com/product/fancy/da659d57-aa1c-4ff1-a3ca-907429648b80.jpg",
                height: 1800,
              },
              sales_tip: "7.6K+ sold",
              visible: true,
              goods_id: 601102393584900,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "22", ".69", ""],
                    reduction_text: ["-85", "%"],
                    price: 2269,
                    market_price_str: "156.20",
                    market_price: 15620,
                    price_schema: "22.69",
                    currency: "CAD",
                    price_text: ["CA$", "22.69", ""],
                    price_str: "CA$22.69",
                    price_color: "#FB7701",
                    reduction: 850,
                    market_price_text: ["", "156.20", ""],
                  },
                  image: {
                    width: 1350,
                    id: 412129,
                    url: "https://img.kwcdn.com/product/fancy/da659d57-aa1c-4ff1-a3ca-907429648b80.jpg",
                    height: 1800,
                  },
                  color: "(255,0,0,1)",
                  seo_link_url:
                    "/ca/womens-casual-outerwear-g-601102393584900.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fda659d57-aa1c-4ff1-a3ca-907429648b80.jpg&spec_id=2&spec_gallery_id=412129&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2OQ&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
                  spec_id: 2,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/f38bd804-b24b-4951-8fa4-511d1eed5aaf.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102393584900&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fda659d57-aa1c-4ff1-a3ca-907429648b80.jpg&spec_id=2&spec_gallery_id=412129&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2OQ&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/da659d57-aa1c-4ff1-a3ca-907429648b80.jpg",
                  price_str: "29.73",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "20", ".41", ""],
                    reduction_text: ["-81", "%"],
                    price: 2041,
                    market_price_str: "108.73",
                    market_price: 10873,
                    price_schema: "20.41",
                    currency: "CAD",
                    price_text: ["CA$", "20.41", ""],
                    price_str: "CA$20.41",
                    price_color: "#FB7701",
                    reduction: 810,
                    market_price_text: ["", "108.73", ""],
                  },
                  image: {
                    width: 1350,
                    id: 311132,
                    url: "https://img.kwcdn.com/product/fancy/d2834509-4b5a-41f4-b28b-00a9b85ea85e.jpg",
                    height: 1800,
                  },
                  color: "(238,222,176,1)",
                  seo_link_url:
                    "/ca/womens-casual-outerwear-g-601102393584900.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd2834509-4b5a-41f4-b28b-00a9b85ea85e.jpg&spec_id=15060&spec_gallery_id=311132&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjA0MQ&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
                  spec_id: 15060,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/f19fb5b8-ab2e-420c-8d46-3970e468c3a5.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102393584900&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd2834509-4b5a-41f4-b28b-00a9b85ea85e.jpg&spec_id=15060&spec_gallery_id=311132&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjA0MQ&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/d2834509-4b5a-41f4-b28b-00a9b85ea85e.jpg",
                  price_str: "25.48",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "21", ".03", ""],
                    reduction_text: ["-80", "%"],
                    price: 2103,
                    market_price_str: "109.10",
                    market_price: 10910,
                    price_schema: "21.03",
                    currency: "CAD",
                    price_text: ["CA$", "21.03", ""],
                    price_str: "CA$21.03",
                    price_color: "#FB7701",
                    reduction: 800,
                    market_price_text: ["", "109.10", ""],
                  },
                  image: {
                    width: 1350,
                    id: 408929,
                    url: "https://img.kwcdn.com/product/fancy/c382444a-22d4-49d7-b368-d9e3b74c683c.jpg",
                    height: 1800,
                  },
                  color: "",
                  seo_link_url:
                    "/ca/womens-casual-outerwear-g-601102393584900.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc382444a-22d4-49d7-b368-d9e3b74c683c.jpg&spec_id=2877514&spec_gallery_id=408929&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjEwMw&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
                  spec_id: 2877514,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/e6f15682-9edc-453f-ae3c-e0cb9b8eca7d.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102393584900&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc382444a-22d4-49d7-b368-d9e3b74c683c.jpg&spec_id=2877514&spec_gallery_id=408929&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjEwMw&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/c382444a-22d4-49d7-b368-d9e3b74c683c.jpg",
                  price_str: "28.07",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "21", ".05", ""],
                    reduction_text: ["-80", "%"],
                    price: 2105,
                    market_price_str: "107.49",
                    market_price: 10749,
                    price_schema: "21.05",
                    currency: "CAD",
                    price_text: ["CA$", "21.05", ""],
                    price_str: "CA$21.05",
                    price_color: "#FB7701",
                    reduction: 800,
                    market_price_text: ["", "107.49", ""],
                  },
                  image: {
                    width: 1350,
                    id: 408949,
                    url: "https://img.kwcdn.com/product/fancy/81a79fa4-d8cf-4484-8b08-e412d98cbf4f.jpg",
                    height: 1800,
                  },
                  color: "(46,78,126,1)",
                  seo_link_url:
                    "/ca/womens-casual-outerwear-g-601102393584900.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F81a79fa4-d8cf-4484-8b08-e412d98cbf4f.jpg&spec_id=16091&spec_gallery_id=408949&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjEwNQ&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
                  spec_id: 16091,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/5e9a5cbe-bb3b-4bd2-9d5b-be03a3c9129f.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102393584900&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F81a79fa4-d8cf-4484-8b08-e412d98cbf4f.jpg&spec_id=16091&spec_gallery_id=408949&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjEwNQ&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/81a79fa4-d8cf-4484-8b08-e412d98cbf4f.jpg",
                  price_str: "28.07",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "21", ".29", ""],
                    reduction_text: ["-82", "%"],
                    price: 2129,
                    market_price_str: "119.88",
                    market_price: 11988,
                    price_schema: "21.29",
                    currency: "CAD",
                    price_text: ["CA$", "21.29", ""],
                    price_str: "CA$21.29",
                    price_color: "#FB7701",
                    reduction: 820,
                    market_price_text: ["", "119.88", ""],
                  },
                  image: {
                    width: 1350,
                    id: 408934,
                    url: "https://img.kwcdn.com/product/fancy/643e6edc-a95f-4ec8-a4d3-547e302d0430.jpg",
                    height: 1800,
                  },
                  color: "(0,100,0,1)",
                  seo_link_url:
                    "/ca/womens-casual-outerwear-g-601102393584900.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F643e6edc-a95f-4ec8-a4d3-547e302d0430.jpg&spec_id=15082&spec_gallery_id=408934&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjEyOQ&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
                  spec_id: 15082,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/0ab1543b-68f6-4f44-b6aa-90d2d35e5de0.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102393584900&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F643e6edc-a95f-4ec8-a4d3-547e302d0430.jpg&spec_id=15082&spec_gallery_id=408934&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjEyOQ&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/643e6edc-a95f-4ec8-a4d3-547e302d0430.jpg",
                  price_str: "28.07",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "22", ".69", ""],
                    reduction_text: ["-81", "%"],
                    price: 2269,
                    market_price_str: "119.88",
                    market_price: 11988,
                    price_schema: "22.69",
                    currency: "CAD",
                    price_text: ["CA$", "22.69", ""],
                    price_str: "CA$22.69",
                    price_color: "#FB7701",
                    reduction: 810,
                    market_price_text: ["", "119.88", ""],
                  },
                  image: {
                    width: 1350,
                    id: 408939,
                    url: "https://img.kwcdn.com/product/fancy/f33a0867-45b4-4362-9cdf-504a8d720c7b.jpg",
                    height: 1800,
                  },
                  color: "(153,0,0,1)",
                  seo_link_url:
                    "/ca/womens-casual-outerwear-g-601102393584900.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ff33a0867-45b4-4362-9cdf-504a8d720c7b.jpg&spec_id=16062&spec_gallery_id=408939&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2OQ&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
                  spec_id: 16062,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/d41fd6c8-8c89-4822-aa8f-a3296913a7dc.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102393584900&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ff33a0867-45b4-4362-9cdf-504a8d720c7b.jpg&spec_id=16062&spec_gallery_id=408939&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2OQ&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKmbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/f33a0867-45b4-4362-9cdf-504a8d720c7b.jpg",
                  price_str: "29.73",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "22", ".70", ""],
                    reduction_text: ["-79", "%"],
                    price: 2270,
                    market_price_str: "108.73",
                    market_price: 10873,
                    price_schema: "22.70",
                    currency: "CAD",
                    price_text: ["CA$", "22.70", ""],
                    price_str: "CA$22.70",
                    price_color: "#FB7701",
                    reduction: 790,
                    market_price_text: ["", "108.73", ""],
                  },
                  image: {
                    width: 1350,
                    id: 311127,
                    url: "https://img.kwcdn.com/product/fancy/aa3d8052-314d-47f2-99fe-df033c1f419c.jpg",
                    height: 1800,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-casual-outerwear-g-601102393584900.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Faa3d8052-314d-47f2-99fe-df033c1f419c.jpg&spec_id=3002&spec_gallery_id=311127&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI3MA&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/b7c4ebe8-25ad-4aee-ac71-483bf7798fb9.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102393584900&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Faa3d8052-314d-47f2-99fe-df033c1f419c.jpg&spec_id=3002&spec_gallery_id=311127&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI3MA&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/aa3d8052-314d-47f2-99fe-df033c1f419c.jpg",
                  price_str: "29.73",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "22", ".70", ""],
                    reduction_text: ["-79", "%"],
                    price: 2270,
                    market_price_str: "109.10",
                    market_price: 10910,
                    price_schema: "22.70",
                    currency: "CAD",
                    price_text: ["CA$", "22.70", ""],
                    price_str: "CA$22.70",
                    price_color: "#FB7701",
                    reduction: 790,
                    market_price_text: ["", "109.10", ""],
                  },
                  image: {
                    width: 1350,
                    id: 311137,
                    url: "https://img.kwcdn.com/product/fancy/7060604a-205b-4b4c-a569-09eb371f6463.jpg",
                    height: 1800,
                  },
                  color: "(93,118,42,1)",
                  seo_link_url:
                    "/ca/womens-casual-outerwear-g-601102393584900.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7060604a-205b-4b4c-a569-09eb371f6463.jpg&spec_id=16093&spec_gallery_id=311137&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI3MA&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  spec_id: 16093,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/82c791cf-3759-4c87-90c4-470c74c7137f.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102393584900&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7060604a-205b-4b4c-a569-09eb371f6463.jpg&spec_id=16093&spec_gallery_id=311137&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI3MA&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/7060604a-205b-4b4c-a569-09eb371f6463.jpg",
                  price_str: "29.73",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "22", ".71", ""],
                    reduction_text: ["-85", "%"],
                    price: 2271,
                    market_price_str: "156.20",
                    market_price: 15620,
                    price_schema: "22.71",
                    currency: "CAD",
                    price_text: ["CA$", "22.71", ""],
                    price_str: "CA$22.71",
                    price_color: "#FB7701",
                    reduction: 850,
                    market_price_text: ["", "156.20", ""],
                  },
                  image: {
                    width: 1350,
                    id: 408944,
                    url: "https://img.kwcdn.com/product/fancy/593af507-eaf2-4cf1-bd73-caf18506b4e8.jpg",
                    height: 1800,
                  },
                  color: "(96,57,18,1)",
                  seo_link_url:
                    "/ca/womens-casual-outerwear-g-601102393584900.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F593af507-eaf2-4cf1-bd73-caf18506b4e8.jpg&spec_id=16102&spec_gallery_id=408944&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI3MQ&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  spec_id: 16102,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/655ebad5-349b-47b7-aaf5-9efab7d462c5.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102393584900&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F593af507-eaf2-4cf1-bd73-caf18506b4e8.jpg&spec_id=16102&spec_gallery_id=408944&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI3MQ&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/593af507-eaf2-4cf1-bd73-caf18506b4e8.jpg",
                  price_str: "29.73",
                },
              ],
              spec_ids: "2,15060,2877514,16091,15082,16062,3002,16093,16102",
              display_end_time: 1763787599,
              seo_link_url:
                "/ca/womens-casual-outerwear-g-601102393584900.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fda659d57-aa1c-4ff1-a3ca-907429648b80.jpg&spec_id=2&spec_gallery_id=412129&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2OQ&_oak_gallery_order=139965919%2C999604195%2C880778687%2C1104134849%2C1406472651&_oak_name_id=4105875677496430159&_oak_mp_inf=EITakvWw1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D&spec_ids=2,15060,2877514,16091,15082,16062,3002,16093,16102",
              queryReleScore: 0.0,
              sales_tip_text: ["7.6K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "236",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/60f6580f-20e2-4e9a-81d5-cf824f046381.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/60f6580f-20e2-4e9a-81d5-cf824f046381.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-73%",
              },
              item_type: 0,
              page_alt:
                "womens winter plush like hooded jacket with full zip closure collar dark green black coat machine washable long sleeve outerwear zippered pockets for cold weather casual outer jacket no belt",
              current_sku_id: 17612093647921,
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
                ],
                goods_tags: [
                  {
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"NEW ARRIVAL","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Women\'s Coats & Jackets","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"New product","ranking_opt_id":"721"},"impr":{"ranking_type":"New product","ranking_opt_id":"721"}}}',
                    },
                    footer: {
                      color: "#555555",
                      text: " in Women's Coats & Jackets",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "NEW ARRIVAL",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "New product",
                    ranking_id: "721",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/95cfdfb3d733b3293a9fd1258c6fcd11e0e899c8gs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/60f6580f-20e2-4e9a-81d5-cf824f046381.jpg",
                url: "https://img.kwcdn.com/product/fceb09e3d49984bb30729bdf60f9524fdeb1cacc.temu.000001.jpeg",
              },
              title:
                "Women's Winter Plush-Like Hooded Jacket, Full-Zip Closure with Collar, Machine Washable Long Sleeve Outerwear, Zippered Pockets for Cold Weather, Dark Green/Black, Casual Outer Jacket (No Belt)",
              sales_tip_text_list: [],
              display_end_time_percent: 7,
              sold_quantity_percent: 0,
              p_rec: {
                skc_id: "17597211132281",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1206570940",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw5si5UO3NQwHENrfQcZmz1Ah+AvMhqcLkmVtkd8x2r3AEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "4324967474809091268",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1206570940",
                g: "601103892720340",
                scene_id: "3",
                show_price: "3654",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "84",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "3080039183419665591",
                ts: "1763223031259",
              },
              activity_type: 13,
              mall_id: 634418224177937,
              sales_num: "6.5K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601103892720340&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F60f6580f-20e2-4e9a-81d5-cf824f046381.jpg&spec_id=15082&spec_gallery_id=479838&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY1NA&_oak_gallery_order=1206570940%2C1330999369%2C557049981&spec_ids=15082&_oak_name_id=3080039183419665591&_oak_mp_inf=ENTV%2Fr%2B21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
              selected_spec_ids: [15082],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601103892720340&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F60f6580f-20e2-4e9a-81d5-cf824f046381.jpg&spec_id=15082&spec_gallery_id=479838&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY1NA&_oak_gallery_order=1206570940%2C1330999369%2C557049981&spec_ids=15082&_oak_name_id=3080039183419665591&_oak_mp_inf=ENTV%2Fr%2B21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112741297005832916",
                sku_extra_param: {
                  _oak_gallery_order: "1206570940,1330999369,557049981",
                  _oak_name_id: "3080039183419665591",
                },
              },
              goods_tags: [
                {
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"NEW ARRIVAL","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Women\'s Coats & Jackets","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"New product","ranking_opt_id":"721"},"impr":{"ranking_type":"New product","ranking_opt_id":"721"}}}',
                  },
                  footer: {
                    color: "#555555",
                    text: " in Women's Coats & Jackets",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "NEW ARRIVAL",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "New product",
                  ranking_id: "721",
                },
              ],
              show_index: 84,
              price_info: {
                reduction_text: ["-73", "%"],
                market_price_type: 1,
                price_text: ["CA$", "36.54", ""],
                price_str: "CA$36.54",
                price_color: "#FB7701",
                split_price_text: ["CA$", "36", ".54", ""],
                currency_str: "CA$",
                price: 3654,
                market_price_str: "140.41",
                market_price: 14041,
                price_schema: "36.54",
                currency: "CAD",
                reduction: 730,
                market_price_text: ["", "140.41", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1773,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 479838,
                url_id: "4324967474809091268",
                url: "https://img.kwcdn.com/product/fancy/60f6580f-20e2-4e9a-81d5-cf824f046381.jpg",
                height: 2364,
              },
              sales_tip: "6.5K+ sold",
              visible: true,
              goods_id: 601103892720340,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "36", ".54", ""],
                    reduction_text: ["-73", "%"],
                    price: 3654,
                    market_price_str: "140.41",
                    market_price: 14041,
                    price_schema: "36.54",
                    currency: "CAD",
                    price_text: ["CA$", "36.54", ""],
                    price_str: "CA$36.54",
                    price_color: "#FB7701",
                    reduction: 730,
                    market_price_text: ["", "140.41", ""],
                  },
                  image: {
                    width: 1773,
                    id: 479838,
                    url: "https://img.kwcdn.com/product/fancy/60f6580f-20e2-4e9a-81d5-cf824f046381.jpg",
                    height: 2364,
                  },
                  color: "(0,100,0,1)",
                  seo_link_url:
                    "/ca/womens-winter-plush-like-hooded-jacket-with-full-zip-closure-collar-dark-green-black-coat-machine-washable-long-sleeve-outerwear-zippered-pockets-for-cold-weather-casual-outer-jacket-no-belt-g-601103892720340.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F60f6580f-20e2-4e9a-81d5-cf824f046381.jpg&spec_id=15082&spec_gallery_id=479838&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY1NA&_oak_mp_inf=ENTV%2Fr%2B21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  spec_id: 15082,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/e07aa62d-e46d-44c8-ae61-c195494e9272.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601103892720340&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F60f6580f-20e2-4e9a-81d5-cf824f046381.jpg&spec_id=15082&spec_gallery_id=479838&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY1NA&_oak_mp_inf=ENTV%2Fr%2B21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/60f6580f-20e2-4e9a-81d5-cf824f046381.jpg",
                  price_str: "38.81",
                },
              ],
              spec_ids: "15082",
              display_end_time: 1763787599,
              seo_link_url:
                "/ca/womens-winter-plush-like-hooded-jacket-with-full-zip-closure-collar-dark-green-black-coat-machine-washable-long-sleeve-outerwear-zippered-pockets-for-cold-weather-casual-outer-jacket-no-belt-g-601103892720340.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F60f6580f-20e2-4e9a-81d5-cf824f046381.jpg&spec_id=15082&spec_gallery_id=479838&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY1NA&_oak_gallery_order=1206570940%2C1330999369%2C557049981&_oak_name_id=3080039183419665591&_oak_mp_inf=ENTV%2Fr%2B21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D&spec_ids=15082",
              queryReleScore: 0.0,
              sales_tip_text: ["6.5K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 5.0,
                hidden_comment: true,
                comment_num_tips: "2",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/e0b80880-3f1c-4cc3-b804-6fb5670e58b3.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/e0b80880-3f1c-4cc3-b804-6fb5670e58b3.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-77%",
              },
              item_type: 0,
              page_alt:
                "womens elegant sleeveless hooded jacket   length coat with adjustable drawstring hood solid color blouse   washable versatile for casual professional wear   outerwear for dresses skirts blouses stylish",
              current_sku_id: 17613186078463,
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
                        '{"text_dx":0.0,"text_color":"#ffffff","width":73.0,"height":18.0,"bg_url":"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png"}',
                    },
                    marketing_tag_type: 2000,
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
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                    marketing_tag_type: 1000,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                    tag_id: 91004,
                    text: "Only 4 left",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "Women's Elegant Sleeveless Hooded Jacket - Mid-Length Coat with Adjustable Drawstring Hood, Solid Color Blouse (No ), Machine Washable, Versatile for Casual & Professional Wear, Easy-Care Outerwear for Dresses/Skirts/Blouses - Stylish &",
              sales_tip_text_list: [],
              display_end_time_percent: 21,
              sold_quantity_percent: 57,
              p_rec: {
                skc_id: "17597466082343",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1232325179",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxwyVjqAHfZyWsP9Croubh6cDUW+sMR7GNFLLwdo2LkDs6EH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "4385323903216291665",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1232325179",
                g: "601102657205789",
                scene_id: "3",
                show_price: "2527",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "85",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "1288858955355417336",
                ts: "1763223031259",
              },
              activity_type: 2,
              mall_id: 634418221917612,
              sales_num: "6K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102657205789&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe0b80880-3f1c-4cc3-b804-6fb5670e58b3.jpg&spec_id=16068&spec_gallery_id=461605&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_gallery_order=1232325179%2C821553622%2C382333614%2C1808806056%2C71979161&spec_ids=16068,3002,16057,16091,16062,16102&_oak_name_id=1288858955355417336&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
              selected_spec_ids: [16068, 3002, 16057, 16091, 16062, 16102],
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601102657205789&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe0b80880-3f1c-4cc3-b804-6fb5670e58b3.jpg&spec_id=16068&spec_gallery_id=461605&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_gallery_order=1232325179%2C821553622%2C382333614%2C1808806056%2C71979161&spec_ids=16068,3002,16057,16091,16062,16102&_oak_name_id=1288858955355417336&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112736912901158429",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1232325179,821553622,382333614,1808806056,71979161",
                  _oak_name_id: "1288858955355417336",
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
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 4 left",
                  tag_series: 2,
                },
              ],
              show_index: 85,
              price_info: {
                reduction_text: ["-77", "%"],
                market_price_type: 1,
                price_text: ["CA$", "25.27", ""],
                price_str: "CA$25.27",
                price_color: "#FB7701",
                split_price_text: ["CA$", "25", ".27", ""],
                currency_str: "CA$",
                price: 2527,
                market_price_str: "111.48",
                market_price: 11148,
                price_schema: "25.27",
                currency: "CAD",
                reduction: 770,
                market_price_text: ["", "111.48", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 461605,
                url_id: "4385323903216291665",
                url: "https://img.kwcdn.com/product/fancy/e0b80880-3f1c-4cc3-b804-6fb5670e58b3.jpg",
                height: 1800,
              },
              sales_tip: "6K+ sold",
              visible: true,
              goods_id: 601102657205789,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "25", ".27", ""],
                    reduction_text: ["-77", "%"],
                    price: 2527,
                    market_price_str: "111.48",
                    market_price: 11148,
                    price_schema: "25.27",
                    currency: "CAD",
                    price_text: ["CA$", "25.27", ""],
                    price_str: "CA$25.27",
                    price_color: "#FB7701",
                    reduction: 770,
                    market_price_text: ["", "111.48", ""],
                  },
                  image: {
                    width: 1350,
                    id: 461605,
                    url: "https://img.kwcdn.com/product/fancy/e0b80880-3f1c-4cc3-b804-6fb5670e58b3.jpg",
                    height: 1800,
                  },
                  color: "(247,238,214,1)",
                  seo_link_url:
                    "/ca/womens-elegant-sleeveless-hooded-jacket--length-coat-with-adjustable-drawstring-hood-solid-color-blouse--washable-versatile-for-casual-professional-wear--outerwear-for-dresses-skirts-blouses-stylish-g-601102657205789.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe0b80880-3f1c-4cc3-b804-6fb5670e58b3.jpg&spec_id=16068&spec_gallery_id=461605&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  spec_id: 16068,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/dec144a3-d4f1-413c-a47a-b3a99e983bda.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102657205789&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe0b80880-3f1c-4cc3-b804-6fb5670e58b3.jpg&spec_id=16068&spec_gallery_id=461605&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/e0b80880-3f1c-4cc3-b804-6fb5670e58b3.jpg",
                  price_str: "25.28",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "25", ".27", ""],
                    reduction_text: ["-77", "%"],
                    price: 2527,
                    market_price_str: "111.48",
                    market_price: 11148,
                    price_schema: "25.27",
                    currency: "CAD",
                    price_text: ["CA$", "25.27", ""],
                    price_str: "CA$25.27",
                    price_color: "#FB7701",
                    reduction: 770,
                    market_price_text: ["", "111.48", ""],
                  },
                  image: {
                    width: 5400,
                    id: 330338,
                    url: "https://img.kwcdn.com/product/fancy/09551d22-3ce5-4ae3-8b89-82934dc26f7b.jpg",
                    height: 7200,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-elegant-sleeveless-hooded-jacket--length-coat-with-adjustable-drawstring-hood-solid-color-blouse--washable-versatile-for-casual-professional-wear--outerwear-for-dresses-skirts-blouses-stylish-g-601102657205789.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F09551d22-3ce5-4ae3-8b89-82934dc26f7b.jpg&spec_id=3002&spec_gallery_id=330338&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/529000c6-16e9-481f-956b-b1efe6296030.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102657205789&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F09551d22-3ce5-4ae3-8b89-82934dc26f7b.jpg&spec_id=3002&spec_gallery_id=330338&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/09551d22-3ce5-4ae3-8b89-82934dc26f7b.jpg",
                  price_str: "25.28",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "25", ".27", ""],
                    reduction_text: ["-77", "%"],
                    price: 2527,
                    market_price_str: "111.48",
                    market_price: 11148,
                    price_schema: "25.27",
                    currency: "CAD",
                    price_text: ["CA$", "25.27", ""],
                    price_str: "CA$25.27",
                    price_color: "#FB7701",
                    reduction: 770,
                    market_price_text: ["", "111.48", ""],
                  },
                  image: {
                    width: 1350,
                    id: 461593,
                    url: "https://img.kwcdn.com/product/fancy/f08d2b33-dc85-4945-a0ec-640f311f46f8.jpg",
                    height: 1800,
                  },
                  color: "(255,182,193,1)",
                  seo_link_url:
                    "/ca/womens-elegant-sleeveless-hooded-jacket--length-coat-with-adjustable-drawstring-hood-solid-color-blouse--washable-versatile-for-casual-professional-wear--outerwear-for-dresses-skirts-blouses-stylish-g-601102657205789.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ff08d2b33-dc85-4945-a0ec-640f311f46f8.jpg&spec_id=16057&spec_gallery_id=461593&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  spec_id: 16057,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/b93d987c-4fe0-478f-aed7-ad9528358c7f.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102657205789&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ff08d2b33-dc85-4945-a0ec-640f311f46f8.jpg&spec_id=16057&spec_gallery_id=461593&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/f08d2b33-dc85-4945-a0ec-640f311f46f8.jpg",
                  price_str: "25.28",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "25", ".27", ""],
                    reduction_text: ["-76", "%"],
                    price: 2527,
                    market_price_str: "109.10",
                    market_price: 10910,
                    price_schema: "25.27",
                    currency: "CAD",
                    price_text: ["CA$", "25.27", ""],
                    price_str: "CA$25.27",
                    price_color: "#FB7701",
                    reduction: 760,
                    market_price_text: ["", "109.10", ""],
                  },
                  image: {
                    width: 1350,
                    id: 461613,
                    url: "https://img.kwcdn.com/product/fancy/588e744d-6cf8-4ef0-b8c8-6a241fa4b91d.jpg",
                    height: 1800,
                  },
                  color: "(46,78,126,1)",
                  seo_link_url:
                    "/ca/womens-elegant-sleeveless-hooded-jacket--length-coat-with-adjustable-drawstring-hood-solid-color-blouse--washable-versatile-for-casual-professional-wear--outerwear-for-dresses-skirts-blouses-stylish-g-601102657205789.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F588e744d-6cf8-4ef0-b8c8-6a241fa4b91d.jpg&spec_id=16091&spec_gallery_id=461613&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  spec_id: 16091,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/034fa16c-30df-4a39-960f-043013cedf35.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102657205789&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F588e744d-6cf8-4ef0-b8c8-6a241fa4b91d.jpg&spec_id=16091&spec_gallery_id=461613&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/588e744d-6cf8-4ef0-b8c8-6a241fa4b91d.jpg",
                  price_str: "25.28",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "25", ".27", ""],
                    reduction_text: ["-77", "%"],
                    price: 2527,
                    market_price_str: "111.48",
                    market_price: 11148,
                    price_schema: "25.27",
                    currency: "CAD",
                    price_text: ["CA$", "25.27", ""],
                    price_str: "CA$25.27",
                    price_color: "#FB7701",
                    reduction: 770,
                    market_price_text: ["", "111.48", ""],
                  },
                  image: {
                    width: 1350,
                    id: 461617,
                    url: "https://img.kwcdn.com/product/fancy/48f93c4e-a6ce-4b93-8998-67068a57bb07.jpg",
                    height: 1800,
                  },
                  color: "(153,0,0,1)",
                  seo_link_url:
                    "/ca/womens-elegant-sleeveless-hooded-jacket--length-coat-with-adjustable-drawstring-hood-solid-color-blouse--washable-versatile-for-casual-professional-wear--outerwear-for-dresses-skirts-blouses-stylish-g-601102657205789.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F48f93c4e-a6ce-4b93-8998-67068a57bb07.jpg&spec_id=16062&spec_gallery_id=461617&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  spec_id: 16062,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/23a43078-f338-41e7-b12f-aea0ff3fba4a.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102657205789&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F48f93c4e-a6ce-4b93-8998-67068a57bb07.jpg&spec_id=16062&spec_gallery_id=461617&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/48f93c4e-a6ce-4b93-8998-67068a57bb07.jpg",
                  price_str: "25.28",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "25", ".27", ""],
                    reduction_text: ["-77", "%"],
                    price: 2527,
                    market_price_str: "111.48",
                    market_price: 11148,
                    price_schema: "25.27",
                    currency: "CAD",
                    price_text: ["CA$", "25.27", ""],
                    price_str: "CA$25.27",
                    price_color: "#FB7701",
                    reduction: 770,
                    market_price_text: ["", "111.48", ""],
                  },
                  image: {
                    width: 1350,
                    id: 461621,
                    url: "https://img.kwcdn.com/product/fancy/4acc7169-f1e2-4f51-ad45-46c559b77874.jpg",
                    height: 1800,
                  },
                  color: "(96,57,18,1)",
                  seo_link_url:
                    "/ca/womens-elegant-sleeveless-hooded-jacket--length-coat-with-adjustable-drawstring-hood-solid-color-blouse--washable-versatile-for-casual-professional-wear--outerwear-for-dresses-skirts-blouses-stylish-g-601102657205789.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F4acc7169-f1e2-4f51-ad45-46c559b77874.jpg&spec_id=16102&spec_gallery_id=461621&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  spec_id: 16102,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/12a0d4ea-9414-4e4a-886a-1fe7b4ee6080.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102657205789&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F4acc7169-f1e2-4f51-ad45-46c559b77874.jpg&spec_id=16102&spec_gallery_id=461621&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/4acc7169-f1e2-4f51-ad45-46c559b77874.jpg",
                  price_str: "25.28",
                },
              ],
              spec_ids: "16068,3002,16057,16091,16062,16102",
              display_end_time: 1763701199,
              seo_link_url:
                "/ca/womens-elegant-sleeveless-hooded-jacket--length-coat-with-adjustable-drawstring-hood-solid-color-blouse--washable-versatile-for-casual-professional-wear--outerwear-for-dresses-skirts-blouses-stylish-g-601102657205789.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe0b80880-3f1c-4cc3-b804-6fb5670e58b3.jpg&spec_id=16068&spec_gallery_id=461605&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyNw&_oak_gallery_order=1232325179%2C821553622%2C382333614%2C1808806056%2C71979161&_oak_name_id=1288858955355417336&_oak_mp_inf=EJ3s7PKx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKqbocKoMw%3D%3D&spec_ids=16068,3002,16057,16091,16062,16102",
              queryReleScore: 0.0,
              sales_tip_text: ["6K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: true,
                comment_num_tips: "30",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/b6085314/f7863147-82ba-4ed9-ab70-5809e83f7524/429476d1ac1428011bc2d2811e78b0da.jpeg",
              thumb_url:
                "https://img.kwcdn.com/product/b6085314/f7863147-82ba-4ed9-ab70-5809e83f7524/429476d1ac1428011bc2d2811e78b0da.jpeg",
              after_price_tip_text: ["In", "3", "carts"],
              ware_house_type: 1,
              benefit_text: {
                text: "-28%",
              },
              item_type: 0,
              page_alt:
                "womens vintage thickened trench coat for fall winter heavy warm classic solid color coat elegant outerwear for casual special occasions hand washable cold weather outer coat",
              current_sku_id: 17616854104519,
              tags_info: {
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
                    ext_map: {},
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
                "Women's Vintage Thickened Trench Coat for Fall & Winter - Heavy Warm Classic Solid Color Coat, Elegant Outerwear for, Casual & Special Occasions - Hand Washable Cold Weather Outer Coat",
              sales_tip_text_list: [],
              display_end_time_percent: 48,
              sold_quantity_percent: 0,
              p_rec: {
                skc_id: "17598347661295",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "852262592",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxwwizFNRGsy4M1O4hv8vqwJiQSeVIg3fLHoOLfIMzMLI3EH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "1831106259306567870",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "852262592",
                g: "601104868948345",
                scene_id: "3",
                show_price: "4374",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "86",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "3447127029323786316",
                ts: "1763223031259",
              },
              activity_type: 100,
              mall_id: 634418225550665,
              sales_num: "0",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601104868948345&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fb6085314%2Ff7863147-82ba-4ed9-ab70-5809e83f7524%2F429476d1ac1428011bc2d2811e78b0da.jpeg&spec_id=19079&spec_gallery_id=524720&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDM3NA&_oak_gallery_order=852262592%2C1067304431%2C1436029619%2C689226121%2C1491850113&spec_ids=19079,20081&_oak_mp_inf=EPnyvpG61ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
              selected_spec_ids: [19079, 20081],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601104868948345&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fb6085314%2Ff7863147-82ba-4ed9-ab70-5809e83f7524%2F429476d1ac1428011bc2d2811e78b0da.jpeg&spec_id=19079&spec_gallery_id=524720&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDM3NA&_oak_gallery_order=852262592%2C1067304431%2C1436029619%2C689226121%2C1491850113&spec_ids=19079,20081&_oak_mp_inf=EPnyvpG61ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112717120936917369",
                sku_extra_param: {
                  _oak_gallery_order:
                    "852262592,1067304431,1436029619,689226121,1491850113",
                },
              },
              goods_tags: [],
              show_index: 86,
              price_info: {
                reduction_text: ["-28", "%"],
                market_price_type: 1,
                price_text: ["CA$", "43.74", ""],
                price_str: "CA$43.74",
                split_price_text: ["CA$", "43", ".74", ""],
                currency_str: "CA$",
                price: 4374,
                market_price_str: "61.04",
                market_price: 6104,
                price_schema: "43.74",
                currency: "CAD",
                reduction: 280,
                market_price_text: ["", "61.04", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 524720,
                url_id: "1831106259306567870",
                url: "https://img.kwcdn.com/product/b6085314/f7863147-82ba-4ed9-ab70-5809e83f7524/429476d1ac1428011bc2d2811e78b0da.jpeg",
                height: 1800,
              },
              sales_tip: "",
              visible: true,
              goods_id: 601104868948345,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "43", ".74", ""],
                    reduction_text: ["-28", "%"],
                    price: 4374,
                    market_price_str: "61.04",
                    market_price: 6104,
                    price_schema: "43.74",
                    currency: "CAD",
                    price_text: ["CA$", "43.74", ""],
                    price_str: "CA$43.74",
                    reduction: 280,
                    market_price_text: ["", "61.04", ""],
                  },
                  image: {
                    width: 1350,
                    id: 524720,
                    url: "https://img.kwcdn.com/product/b6085314/f7863147-82ba-4ed9-ab70-5809e83f7524/429476d1ac1428011bc2d2811e78b0da.jpeg",
                    height: 1800,
                  },
                  color: "",
                  seo_link_url:
                    "/ca/womens-vintage-thickened-trench-coat-for-fall-winter-heavy-warm-classic-solid-color-coat-elegant-outerwear-for-casual-special-occasions-hand-washable-cold-weather-outer-coat-g-601104868948345.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fb6085314%2Ff7863147-82ba-4ed9-ab70-5809e83f7524%2F429476d1ac1428011bc2d2811e78b0da.jpeg&spec_id=19079&spec_gallery_id=524720&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDM3NA&_oak_mp_inf=EPnyvpG61ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
                  spec_id: 19079,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/e50312c3-12b6-45c0-b9d8-b07285974085.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104868948345&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fb6085314%2Ff7863147-82ba-4ed9-ab70-5809e83f7524%2F429476d1ac1428011bc2d2811e78b0da.jpeg&spec_id=19079&spec_gallery_id=524720&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDM3NA&_oak_mp_inf=EPnyvpG61ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/b6085314/f7863147-82ba-4ed9-ab70-5809e83f7524/429476d1ac1428011bc2d2811e78b0da.jpeg",
                  price_str: "48.14",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "43", ".74", ""],
                    reduction_text: ["-28", "%"],
                    price: 4374,
                    market_price_str: "61.04",
                    market_price: 6104,
                    price_schema: "43.74",
                    currency: "CAD",
                    price_text: ["CA$", "43.74", ""],
                    price_str: "CA$43.74",
                    reduction: 280,
                    market_price_text: ["", "61.04", ""],
                  },
                  image: {
                    width: 1350,
                    id: 524724,
                    url: "https://img.kwcdn.com/product/5ef45ef9/11e6bf02-c9e1-48cb-a6e6-40f32deb08d3/ee2e904fed399ec80f9cf9980482d0b7.jpeg",
                    height: 1800,
                  },
                  color: "",
                  seo_link_url:
                    "/ca/womens-vintage-thickened-trench-coat-for-fall-winter-heavy-warm-classic-solid-color-coat-elegant-outerwear-for-casual-special-occasions-hand-washable-cold-weather-outer-coat-g-601104868948345.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2F5ef45ef9%2F11e6bf02-c9e1-48cb-a6e6-40f32deb08d3%2Fee2e904fed399ec80f9cf9980482d0b7.jpeg&spec_id=20081&spec_gallery_id=524724&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDM3NA&_oak_mp_inf=EPnyvpG61ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
                  spec_id: 20081,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/536ea794-e481-4551-96e2-3dcbd79c8fa1.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104868948345&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2F5ef45ef9%2F11e6bf02-c9e1-48cb-a6e6-40f32deb08d3%2Fee2e904fed399ec80f9cf9980482d0b7.jpeg&spec_id=20081&spec_gallery_id=524724&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDM3NA&_oak_mp_inf=EPnyvpG61ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/5ef45ef9/11e6bf02-c9e1-48cb-a6e6-40f32deb08d3/ee2e904fed399ec80f9cf9980482d0b7.jpeg",
                  price_str: "48.14",
                },
              ],
              spec_ids: "19079,20081",
              display_end_time: 1764565199,
              seo_link_url:
                "/ca/womens-vintage-thickened-trench-coat-for-fall-winter-heavy-warm-classic-solid-color-coat-elegant-outerwear-for-casual-special-occasions-hand-washable-cold-weather-outer-coat-g-601104868948345.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fb6085314%2Ff7863147-82ba-4ed9-ab70-5809e83f7524%2F429476d1ac1428011bc2d2811e78b0da.jpeg&spec_id=19079&spec_gallery_id=524720&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDM3NA&_oak_gallery_order=852262592%2C1067304431%2C1436029619%2C689226121%2C1491850113&_oak_mp_inf=EPnyvpG61ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D&spec_ids=19079,20081",
              queryReleScore: 0.0,
              sales_tip_text: [],
              opt_type: 3,
              comment: {},
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/96f3996f-095e-45f8-8162-35adb2ffe92c.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/96f3996f-095e-45f8-8162-35adb2ffe92c.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-40%",
              },
              item_type: 0,
              page_alt:
                "elegant fashion autumn winter new solid color adult womens suit collar long sleeve casual loose versatile long coat yd88",
              current_sku_id: 17605660710855,
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
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "YD88 Women's Suit Collar Long Coat, Elegant Fashion Solid Color, Long Sleeve Casual Loose Versatile, Autumn/Winter",
              sales_tip_text_list: [],
              display_end_time_percent: 23,
              sold_quantity_percent: 2,
              p_rec: {
                skc_id: "17595730982776",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1605428068",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxwy9Dviy6xlFpJi8OmgsIjZBoTeDDf05HQCn9IG3FBXK5EH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "1927552026753131695",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1605428068",
                g: "601102637187348",
                scene_id: "3",
                show_price: "3836",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "87",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "6197211130115909934",
                ts: "1763223031259",
              },
              activity_type: 13,
              mall_id: 634418222147857,
              sales_num: "5.1K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102637187348&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F96f3996f-095e-45f8-8162-35adb2ffe92c.jpg&spec_id=16105&spec_gallery_id=405252&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgzNg&_oak_gallery_order=1605428068%2C1876654198%2C1343654317%2C42358924%2C92368451&spec_ids=16105,3002&_oak_name_id=6197211130115909934&_oak_mp_inf=EJSCp%2Bmx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
              selected_spec_ids: [16105, 3002],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601102637187348&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F96f3996f-095e-45f8-8162-35adb2ffe92c.jpg&spec_id=16105&spec_gallery_id=405252&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgzNg&_oak_gallery_order=1605428068%2C1876654198%2C1343654317%2C42358924%2C92368451&spec_ids=16105,3002&_oak_name_id=6197211130115909934&_oak_mp_inf=EJSCp%2Bmx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112741240743444756",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1605428068,1876654198,1343654317,42358924,92368451",
                  _oak_name_id: "6197211130115909934",
                },
              },
              goods_tags: [],
              show_index: 87,
              price_info: {
                reduction_text: ["-40", "%"],
                market_price_type: 1,
                price_text: ["CA$", "38.36", ""],
                price_str: "CA$38.36",
                price_color: "#FB7701",
                split_price_text: ["CA$", "38", ".36", ""],
                currency_str: "CA$",
                price: 3836,
                market_price_str: "65.00",
                market_price: 6500,
                price_schema: "38.36",
                currency: "CAD",
                reduction: 400,
                market_price_text: ["", "65.00", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1340,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 405252,
                url_id: "1927552026753131695",
                url: "https://img.kwcdn.com/product/fancy/96f3996f-095e-45f8-8162-35adb2ffe92c.jpg",
                height: 1785,
              },
              sales_tip: "5.1K+ sold",
              visible: true,
              goods_id: 601102637187348,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "38", ".36", ""],
                    reduction_text: ["-40", "%"],
                    price: 3836,
                    market_price_str: "65.00",
                    market_price: 6500,
                    price_schema: "38.36",
                    currency: "CAD",
                    price_text: ["CA$", "38.36", ""],
                    price_str: "CA$38.36",
                    price_color: "#FB7701",
                    reduction: 400,
                    market_price_text: ["", "65.00", ""],
                  },
                  image: {
                    width: 1340,
                    id: 405252,
                    url: "https://img.kwcdn.com/product/fancy/96f3996f-095e-45f8-8162-35adb2ffe92c.jpg",
                    height: 1785,
                  },
                  color: "(168,132,98,1)",
                  seo_link_url:
                    "/ca/elegant-fashion-autumn-winter-new-solid-color-adult-womens-suit-collar-long-sleeve-casual-loose-versatile-long-coat-yd88-g-601102637187348.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F96f3996f-095e-45f8-8162-35adb2ffe92c.jpg&spec_id=16105&spec_gallery_id=405252&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgzNg&_oak_mp_inf=EJSCp%2Bmx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
                  spec_id: 16105,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/27fe46e7-67c1-4ccc-b899-6e04a18e5a0f.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102637187348&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F96f3996f-095e-45f8-8162-35adb2ffe92c.jpg&spec_id=16105&spec_gallery_id=405252&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgzNg&_oak_mp_inf=EJSCp%2Bmx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/96f3996f-095e-45f8-8162-35adb2ffe92c.jpg",
                  price_str: "38.37",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "38", ".36", ""],
                    reduction_text: ["-34", "%"],
                    price: 3836,
                    market_price_str: "58.18",
                    market_price: 5818,
                    price_schema: "38.36",
                    currency: "CAD",
                    price_text: ["CA$", "38.36", ""],
                    price_str: "CA$38.36",
                    price_color: "#FB7701",
                    reduction: 340,
                    market_price_text: ["", "58.18", ""],
                  },
                  image: {
                    width: 1340,
                    id: 527230,
                    url: "https://img.kwcdn.com/product/fancy/662437e3-9961-4f2b-b301-daf96b79c852.jpg",
                    height: 1785,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/elegant-fashion-autumn-winter-new-solid-color-adult-womens-suit-collar-long-sleeve-casual-loose-versatile-long-coat-yd88-g-601102637187348.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F662437e3-9961-4f2b-b301-daf96b79c852.jpg&spec_id=3002&spec_gallery_id=527230&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgzNg&_oak_mp_inf=EJSCp%2Bmx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/46be8c1c-b50a-4e9e-a4f7-713ecd5a7e79.jpg",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102637187348&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F662437e3-9961-4f2b-b301-daf96b79c852.jpg&spec_id=3002&spec_gallery_id=527230&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgzNg&_oak_mp_inf=EJSCp%2Bmx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/662437e3-9961-4f2b-b301-daf96b79c852.jpg",
                  price_str: "38.37",
                },
              ],
              spec_ids: "16105,3002",
              display_end_time: 1763355599,
              seo_link_url:
                "/ca/elegant-fashion-autumn-winter-new-solid-color-adult-womens-suit-collar-long-sleeve-casual-loose-versatile-long-coat-yd88-g-601102637187348.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F96f3996f-095e-45f8-8162-35adb2ffe92c.jpg&spec_id=16105&spec_gallery_id=405252&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgzNg&_oak_gallery_order=1605428068%2C1876654198%2C1343654317%2C42358924%2C92368451&_oak_name_id=6197211130115909934&_oak_mp_inf=EJSCp%2Bmx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D&spec_ids=16105,3002",
              queryReleScore: 0.0,
              sales_tip_text: ["5.1K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.5,
                hidden_comment: true,
                comment_num_tips: "10",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/3289c209-62ca-4935-817b-019399300ac9.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/3289c209-62ca-4935-817b-019399300ac9.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-37%",
              },
              item_type: 0,
              page_alt:
                "womens casual hooded jacket elegant cow print plush coat machine washable zippered pockets suitable for autumn winter",
              current_sku_id: 17596794121690,
              tags_info: {},
              video: {
                video_url: "",
              },
              title:
                "Women's Casual Hooded Jacket. Elegant Cow Print Plush Coat, Machine Washable, Zippered Pockets, Suitable for Autumn/Winter",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17593489127730",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1940563000",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw+NgsLRWBTpSBOBvopXV2FihSnFW39wjymmFAmHBePauEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "7336348652310690098",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1940563000",
                g: "601100673398819",
                scene_id: "3",
                show_price: "3067",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "88",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "1723361385624493644",
                ts: "1763223031259",
              },
              mall_id: 634418211758084,
              sales_num: "4K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601100673398819&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3289c209-62ca-4935-817b-019399300ac9.jpg&spec_id=3002&spec_gallery_id=103816&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzA2Nw&_oak_gallery_order=1940563000%2C2061759168%2C1858226515%2C2111175247%2C736967680&spec_ids=3002&_oak_name_id=1723361385624493644&_oak_mp_inf=EKPw8sCq1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
              selected_spec_ids: [3002],
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601100673398819&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3289c209-62ca-4935-817b-019399300ac9.jpg&spec_id=3002&spec_gallery_id=103816&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzA2Nw&_oak_gallery_order=1940563000%2C2061759168%2C1858226515%2C2111175247%2C736967680&spec_ids=3002&_oak_name_id=1723361385624493644&_oak_mp_inf=EKPw8sCq1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "1940563000,2061759168,1858226515,2111175247,736967680",
                  _oak_name_id: "1723361385624493644",
                },
              },
              goods_tags: [],
              show_index: 88,
              price_info: {
                split_price_text: ["CA$", "30", ".67", ""],
                currency_str: "CA$",
                reduction_text: ["-37", "%"],
                price: 3067,
                market_price_str: "48.97",
                market_price: 4897,
                market_price_type: 1,
                price_schema: "30.67",
                currency: "CAD",
                price_text: ["CA$", "30.67", ""],
                price_str: "CA$30.67",
                market_price_text: ["", "48.97", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 103816,
                url_id: "7336348652310690098",
                url: "https://img.kwcdn.com/product/fancy/3289c209-62ca-4935-817b-019399300ac9.jpg",
                height: 1800,
              },
              sales_tip: "4K+ sold",
              visible: true,
              goods_id: 601100673398819,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "30", ".67", ""],
                    reduction_text: [],
                    price: 3067,
                    market_price_str: "48.97",
                    market_price: 4897,
                    price_schema: "30.67",
                    currency: "CAD",
                    price_text: ["CA$", "30.67", ""],
                    price_str: "CA$30.67",
                    market_price_text: ["", "48.97", ""],
                  },
                  image: {
                    width: 1350,
                    id: 103816,
                    url: "https://img.kwcdn.com/product/fancy/3289c209-62ca-4935-817b-019399300ac9.jpg",
                    height: 1800,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-casual-hooded-jacket-elegant-cow-print-plush-coat-machine-washable-zippered-pockets-suitable-for-autumn-winter-g-601100673398819.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3289c209-62ca-4935-817b-019399300ac9.jpg&spec_id=3002&spec_gallery_id=103816&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzA2Nw&_oak_mp_inf=EKPw8sCq1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/815790c2-7fe2-4e40-85b0-b86a10f3e025.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601100673398819&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3289c209-62ca-4935-817b-019399300ac9.jpg&spec_id=3002&spec_gallery_id=103816&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzA2Nw&_oak_mp_inf=EKPw8sCq1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/3289c209-62ca-4935-817b-019399300ac9.jpg",
                  price_str: "30.67",
                },
              ],
              spec_ids: "3002",
              seo_link_url:
                "/ca/womens-casual-hooded-jacket-elegant-cow-print-plush-coat-machine-washable-zippered-pockets-suitable-for-autumn-winter-g-601100673398819.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3289c209-62ca-4935-817b-019399300ac9.jpg&spec_id=3002&spec_gallery_id=103816&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzA2Nw&_oak_gallery_order=1940563000%2C2061759168%2C1858226515%2C2111175247%2C736967680&_oak_name_id=1723361385624493644&_oak_mp_inf=EKPw8sCq1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D&spec_ids=3002",
              queryReleScore: 0.0,
              sales_tip_text: ["4K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "52",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fmket/62d5094459ae2c1b0aafd703c018e7b3.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fmket/62d5094459ae2c1b0aafd703c018e7b3.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "womens casual short jacket with drawstring pockets light pink loose fit button   long sleeves   fall winter casual outerwear relaxed fit jacket functional pockets",
              current_sku_id: 17605658103584,
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
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                    marketing_tag_type: 1000,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                    tag_id: 91004,
                    text: "Only 8 left",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/658f52a9e7a49ce569a83c3003d41471100b5594gs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fmket/62d5094459ae2c1b0aafd703c018e7b3.jpg",
                url: "https://img.kwcdn.com/product/16b0cf377d60191eb32d804f0f13b1d8f5240225.temu.000001.jpeg",
              },
              title:
                "Women'S Casual Short Jacket with Drawstring Pockets - Light Pink, Loose Fit, Button-Up Front, Long Sleeves, Perfect for Fall/Winter, Casual Outerwear | Relaxed Fit Jacket | Functional Pockets",
              sales_tip_text_list: [],
              display_end_time_percent: 52,
              sold_quantity_percent: 87,
              p_rec: {
                skc_id: "17595730312541",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1322053592",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw7C1M9zmaa5o1gnshSyGiL/b53rxuOwsAa6qzs0ZOMvqEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "7947140624329044730",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1322053592",
                g: "601102636492483",
                scene_id: "3",
                show_price: "4061",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "89",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "5075318321822488555",
                ts: "1763223031259",
              },
              activity_type: 13,
              mall_id: 634418225173256,
              sales_num: "4.4K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102636492483&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F62d5094459ae2c1b0aafd703c018e7b3.jpg&spec_id=16057&spec_gallery_id=5&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDA2MQ&_oak_gallery_order=1322053592%2C310375269%2C792003092%2C1776001594&spec_ids=16057&_oak_name_id=5075318321822488555&_oak_mp_inf=EMPN%2FOix1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
              selected_spec_ids: [16057],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601102636492483&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F62d5094459ae2c1b0aafd703c018e7b3.jpg&spec_id=16057&spec_gallery_id=5&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDA2MQ&_oak_gallery_order=1322053592%2C310375269%2C792003092%2C1776001594&spec_ids=16057&_oak_name_id=5075318321822488555&_oak_mp_inf=EMPN%2FOix1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112701737160943299",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1322053592,310375269,792003092,1776001594",
                  _oak_name_id: "5075318321822488555",
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
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 8 left",
                  tag_series: 2,
                },
              ],
              show_index: 89,
              price_info: {
                split_price_text: ["CA$", "40", ".61", ""],
                currency_str: "CA$",
                reduction_text: [],
                price: 4061,
                price_schema: "40.61",
                currency: "CAD",
                price_text: ["CA$", "40.61", ""],
                price_str: "CA$40.61",
                price_color: "#FB7701",
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1500,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 5,
                url_id: "7947140624329044730",
                url: "https://img.kwcdn.com/product/fmket/62d5094459ae2c1b0aafd703c018e7b3.jpg",
                height: 2000,
              },
              sales_tip: "4.4K+ sold",
              visible: true,
              goods_id: 601102636492483,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "40", ".61", ""],
                    reduction_text: [],
                    price: 4061,
                    price_schema: "40.61",
                    currency: "CAD",
                    price_text: ["CA$", "40.61", ""],
                    price_str: "CA$40.61",
                    price_color: "#FB7701",
                  },
                  image: {
                    width: 1500,
                    id: 5,
                    url: "https://img.kwcdn.com/product/fmket/62d5094459ae2c1b0aafd703c018e7b3.jpg",
                    height: 2000,
                  },
                  color: "(255,182,193,1)",
                  seo_link_url:
                    "/ca/womens-casual-short-jacket-with-drawstring-pockets-light-pink-loose-fit-button--long-sleeves--fall-winter-casual-outerwear-relaxed-fit-jacket-functional-pockets-g-601102636492483.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F62d5094459ae2c1b0aafd703c018e7b3.jpg&spec_id=16057&spec_gallery_id=5&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDA2MQ&_oak_mp_inf=EMPN%2FOix1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
                  spec_id: 16057,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/3de38208-da67-42cb-ab15-605cb59aaf7d.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102636492483&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F62d5094459ae2c1b0aafd703c018e7b3.jpg&spec_id=16057&spec_gallery_id=5&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDA2MQ&_oak_mp_inf=EMPN%2FOix1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fmket/62d5094459ae2c1b0aafd703c018e7b3.jpg",
                  price_str: "43.00",
                },
              ],
              spec_ids: "16057",
              display_end_time: 1764392399,
              seo_link_url:
                "/ca/womens-casual-short-jacket-with-drawstring-pockets-light-pink-loose-fit-button--long-sleeves--fall-winter-casual-outerwear-relaxed-fit-jacket-functional-pockets-g-601102636492483.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F62d5094459ae2c1b0aafd703c018e7b3.jpg&spec_id=16057&spec_gallery_id=5&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDA2MQ&_oak_gallery_order=1322053592%2C310375269%2C792003092%2C1776001594&_oak_name_id=5075318321822488555&_oak_mp_inf=EMPN%2FOix1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D&spec_ids=16057",
              queryReleScore: 0.0,
              sales_tip_text: ["4.4K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 5.0,
                hidden_comment: true,
                comment_num_tips: "5",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fmket/589a45e53d6a9322e2b4120f182e1095.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fmket/589a45e53d6a9322e2b4120f182e1095.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-14%",
              },
              item_type: 0,
              page_alt:
                "womens elegant double breasted trench coat with belt long sleeve button   pockets and belted waist   fall winter casual to formal wear casual outerwear belted waist coat   design",
              current_sku_id: 17613617536115,
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
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                    marketing_tag_type: 1000,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                    tag_id: 91004,
                    text: "Only 9 left",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "Women'S Elegant Double-Breasted Trench Coat with Belt - Long Sleeve, Button-Up Front, Pockets, and Belted Waist, Perfect for Fall/Winter, Casual to Formal Wear, Casual Outerwear | Belted Waist Coat | Structured Design",
              sales_tip_text_list: [],
              display_end_time_percent: 22,
              sold_quantity_percent: 0,
              p_rec: {
                skc_id: "17597572838878",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "478293078",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw+G1cNJlRDWf39lxyQpAswIiU1nuG7PuHtriTTh/8WIEEH4YbiIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "7711267747918986803",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "478293078",
                g: "601104201261938",
                scene_id: "3",
                show_price: "5533",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "90",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "7479391531976622628",
                ts: "1763223031259",
              },
              activity_type: 13,
              mall_id: 634418221875060,
              sales_num: "2.5K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601104201261938&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F589a45e53d6a9322e2b4120f182e1095.jpg&spec_id=16054&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTUzMw&_oak_gallery_order=478293078%2C493873854%2C1220634183%2C1400138253%2C2039243411&spec_ids=16054&_oak_name_id=7479391531976622628&_oak_mp_inf=EPLGjtO31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
              selected_spec_ids: [16054],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601104201261938&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F589a45e53d6a9322e2b4120f182e1095.jpg&spec_id=16054&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTUzMw&_oak_gallery_order=478293078%2C493873854%2C1220634183%2C1400138253%2C2039243411&spec_ids=16054&_oak_name_id=7479391531976622628&_oak_mp_inf=EPLGjtO31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112741238587564914",
                sku_extra_param: {
                  _oak_gallery_order:
                    "478293078,493873854,1220634183,1400138253,2039243411",
                  _oak_name_id: "7479391531976622628",
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
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 9 left",
                  tag_series: 2,
                },
              ],
              show_index: 90,
              price_info: {
                reduction_text: ["-14", "%"],
                market_price_type: 1,
                price_text: ["CA$", "55.33", ""],
                price_str: "CA$55.33",
                price_color: "#FB7701",
                split_price_text: ["CA$", "55", ".33", ""],
                currency_str: "CA$",
                price: 5533,
                market_price_str: "64.69",
                market_price: 6469,
                price_schema: "55.33",
                currency: "CAD",
                reduction: 140,
                market_price_text: ["", "64.69", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1500,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 1,
                url_id: "7711267747918986803",
                url: "https://img.kwcdn.com/product/fmket/589a45e53d6a9322e2b4120f182e1095.jpg",
                height: 2000,
              },
              sales_tip: "2.5K+ sold",
              visible: true,
              goods_id: 601104201261938,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "55", ".33", ""],
                    reduction_text: ["-14", "%"],
                    price: 5533,
                    market_price_str: "64.69",
                    market_price: 6469,
                    price_schema: "55.33",
                    currency: "CAD",
                    price_text: ["CA$", "55.33", ""],
                    price_str: "CA$55.33",
                    price_color: "#FB7701",
                    reduction: 140,
                    market_price_text: ["", "64.69", ""],
                  },
                  image: {
                    width: 1500,
                    id: 1,
                    url: "https://img.kwcdn.com/product/fmket/589a45e53d6a9322e2b4120f182e1095.jpg",
                    height: 2000,
                  },
                  color: "(255,255,240,1)",
                  seo_link_url:
                    "/ca/womens-elegant-double-breasted-trench-coat-with-belt-long-sleeve-button--pockets-and-belted-waist--fall-winter-casual-to-formal-wear-casual-outerwear-belted-waist-coat--design-g-601104201261938.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F589a45e53d6a9322e2b4120f182e1095.jpg&spec_id=16054&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTUzMw&_oak_mp_inf=EPLGjtO31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
                  spec_id: 16054,
                  color_image:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/636a3643-fc58-4513-9184-10c4ad49b984.jpg",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104201261938&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F589a45e53d6a9322e2b4120f182e1095.jpg&spec_id=16054&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTUzMw&_oak_mp_inf=EPLGjtO31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fmket/589a45e53d6a9322e2b4120f182e1095.jpg",
                  price_str: "58.30",
                },
              ],
              spec_ids: "16054",
              display_end_time: 1765256399,
              seo_link_url:
                "/ca/womens-elegant-double-breasted-trench-coat-with-belt-long-sleeve-button--pockets-and-belted-waist--fall-winter-casual-to-formal-wear-casual-outerwear-belted-waist-coat--design-g-601104201261938.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F589a45e53d6a9322e2b4120f182e1095.jpg&spec_id=16054&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTUzMw&_oak_gallery_order=478293078%2C493873854%2C1220634183%2C1400138253%2C2039243411&_oak_name_id=7479391531976622628&_oak_mp_inf=EPLGjtO31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKubocKoMw%3D%3D&spec_ids=16054",
              queryReleScore: 0.0,
              sales_tip_text: ["2.5K+", "sold"],
              opt_type: 3,
              comment: {},
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/aaef0554-ca0c-456b-b0a3-9b95241bd874.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/aaef0554-ca0c-456b-b0a3-9b95241bd874.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-28%",
              },
              item_type: 0,
              page_alt:
                "womens black alternative jacket   fit winter vest with front zipper padded bust adjustable cuffs warm cardigan for cold weather versatile layering piece stylish outerwear durable outerwear",
              current_sku_id: 17592233258901,
              tags_info: {},
              video: {
                video_url: "",
              },
              title:
                "Women'S Black Alternative Jacket - Slim Fit Winter Vest with Front Zipper, Padded Bust & Adjustable Cuffs, Warm Cardigan for Cold Weather, Versatile Layering Piece, Stylish Outerwear, Durable Outerwear",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17592196724977",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "959043026",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw9+G+bHMqJ915nCFeAaDzlGVGfwA19pjEA1Uv8ODpvFYEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "7101605835307323070",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "959043026",
                g: "601099520488019",
                scene_id: "3",
                show_price: "2705",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "91",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "4106780455376348329",
                ts: "1763223031259",
              },
              mall_id: 5177737241611,
              sales_num: "4.4K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099520488019&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Faaef0554-ca0c-456b-b0a3-9b95241bd874.jpg&spec_id=3002&spec_gallery_id=922&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcwNQ&_oak_gallery_order=959043026%2C814019306%2C847579537%2C1994821646%2C886534402&spec_ids=3002&_oak_name_id=4106780455376348329&_oak_mp_inf=ENPkkpum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
              selected_spec_ids: [3002],
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099520488019&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Faaef0554-ca0c-456b-b0a3-9b95241bd874.jpg&spec_id=3002&spec_gallery_id=922&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcwNQ&_oak_gallery_order=959043026%2C814019306%2C847579537%2C1994821646%2C886534402&spec_ids=3002&_oak_name_id=4106780455376348329&_oak_mp_inf=ENPkkpum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "959043026,814019306,847579537,1994821646,886534402",
                  _oak_name_id: "4106780455376348329",
                },
              },
              goods_tags: [],
              show_index: 91,
              price_info: {
                split_price_text: ["CA$", "27", ".05", ""],
                currency_str: "CA$",
                reduction_text: ["-28", "%"],
                price: 2705,
                market_price_str: "37.79",
                market_price: 3779,
                market_price_type: 1,
                price_schema: "27.05",
                currency: "CAD",
                price_text: ["CA$", "27.05", ""],
                price_str: "CA$27.05",
                market_price_text: ["", "37.79", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1340,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 922,
                url_id: "7101605835307323070",
                url: "https://img.kwcdn.com/product/fancy/aaef0554-ca0c-456b-b0a3-9b95241bd874.jpg",
                height: 1785,
              },
              sales_tip: "4.4K+ sold",
              visible: true,
              goods_id: 601099520488019,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "27", ".05", ""],
                    reduction_text: [],
                    price: 2705,
                    market_price_str: "37.79",
                    market_price: 3779,
                    price_schema: "27.05",
                    currency: "CAD",
                    price_text: ["CA$", "27.05", ""],
                    price_str: "CA$27.05",
                    market_price_text: ["", "37.79", ""],
                  },
                  image: {
                    width: 1340,
                    id: 922,
                    url: "https://img.kwcdn.com/product/fancy/aaef0554-ca0c-456b-b0a3-9b95241bd874.jpg",
                    height: 1785,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-black-alternative-jacket--fit-winter-vest-with-front-zipper-padded-bust-adjustable-cuffs-warm-cardigan-for-cold-weather-versatile-layering-piece-stylish-outerwear-durable-outerwear-g-601099520488019.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Faaef0554-ca0c-456b-b0a3-9b95241bd874.jpg&spec_id=3002&spec_gallery_id=922&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcwNQ&_oak_mp_inf=ENPkkpum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/88b1b33a-1d57-11ee-abb2-0a580a69ec8a.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601099520488019&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Faaef0554-ca0c-456b-b0a3-9b95241bd874.jpg&spec_id=3002&spec_gallery_id=922&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcwNQ&_oak_mp_inf=ENPkkpum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/aaef0554-ca0c-456b-b0a3-9b95241bd874.jpg",
                  price_str: "27.05",
                },
              ],
              spec_ids: "3002",
              seo_link_url:
                "/ca/womens-black-alternative-jacket--fit-winter-vest-with-front-zipper-padded-bust-adjustable-cuffs-warm-cardigan-for-cold-weather-versatile-layering-piece-stylish-outerwear-durable-outerwear-g-601099520488019.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Faaef0554-ca0c-456b-b0a3-9b95241bd874.jpg&spec_id=3002&spec_gallery_id=922&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcwNQ&_oak_gallery_order=959043026%2C814019306%2C847579537%2C1994821646%2C886534402&_oak_name_id=4106780455376348329&_oak_mp_inf=ENPkkpum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D&spec_ids=3002",
              queryReleScore: 0.0,
              sales_tip_text: ["4.4K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "1,540",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/755fa522-e3cb-4c79-b11b-f66718d3f75e.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/755fa522-e3cb-4c79-b11b-f66718d3f75e.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "womens cozy fleece lined   length winter coat warm   with pockets zip up long sleeves and button details   cold weather winter coat",
              current_sku_id: 17610594519664,
              tags_info: {
                goods_tags: [
                  {
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"NEW ARRIVAL","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Women\'s Coats & Jackets","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"New product","ranking_opt_id":"721"},"impr":{"ranking_type":"New product","ranking_opt_id":"721"}}}',
                    },
                    footer: {
                      color: "#555555",
                      text: " in Women's Coats & Jackets",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "NEW ARRIVAL",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "New product",
                    ranking_id: "721",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/b685382a7ae15cea5704a0ef353e0d5ee2db56fcgs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/755fa522-e3cb-4c79-b11b-f66718d3f75e.jpg",
                url: "https://img.kwcdn.com/product/b220b578325cc34a95a18a5330ac66fb6b1ed6b7.temu.000001.jpeg",
              },
              title:
                "Women'S Winter Coat - Thickened Non-Stretch Fabric, Loose Fit Mid-Length Trench Coat with Full-Zip Front, Side Pockets - Cold Weather Outerwear for Everyday & Formal",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17596860037935",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "2102330891",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw/d5MeLLW64pUx05chDWPgCdLcNZOD9n1JmlvsV0Q8hPEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "1185830403795802693",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "2102330891",
                g: "601103591734468",
                scene_id: "3",
                show_price: "6269",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "92",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "7272206382902759099",
                ts: "1763223031259",
              },
              mall_id: 634418220860527,
              sales_num: "888",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601103591734468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F755fa522-e3cb-4c79-b11b-f66718d3f75e.jpg&spec_id=15060&spec_gallery_id=410278&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjI2OQ&_oak_gallery_order=2102330891%2C717139550%2C100987514%2C2050152472%2C961050166&spec_ids=15060,3002,2&_oak_mp_inf=EMT5u7C11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
              selected_spec_ids: [15060, 3002, 2],
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601103591734468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F755fa522-e3cb-4c79-b11b-f66718d3f75e.jpg&spec_id=15060&spec_gallery_id=410278&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjI2OQ&_oak_gallery_order=2102330891%2C717139550%2C100987514%2C2050152472%2C961050166&spec_ids=15060,3002,2&_oak_mp_inf=EMT5u7C11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "2102330891,717139550,100987514,2050152472,961050166",
                },
              },
              goods_tags: [
                {
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"NEW ARRIVAL","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Women\'s Coats & Jackets","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"New product","ranking_opt_id":"721"},"impr":{"ranking_type":"New product","ranking_opt_id":"721"}}}',
                  },
                  footer: {
                    color: "#555555",
                    text: " in Women's Coats & Jackets",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "NEW ARRIVAL",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "New product",
                  ranking_id: "721",
                },
              ],
              show_index: 92,
              price_info: {
                split_price_text: ["CA$", "62", ".69", ""],
                currency_str: "CA$",
                reduction_text: [],
                price: 6269,
                price_schema: "62.69",
                currency: "CAD",
                price_text: ["CA$", "62.69", ""],
                price_str: "CA$62.69",
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 410278,
                url_id: "1185830403795802693",
                url: "https://img.kwcdn.com/product/fancy/755fa522-e3cb-4c79-b11b-f66718d3f75e.jpg",
                height: 1800,
              },
              sales_tip: "888 sold",
              visible: true,
              goods_id: 601103591734468,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "62", ".69", ""],
                    reduction_text: [],
                    price: 6269,
                    price_schema: "62.69",
                    currency: "CAD",
                    price_text: ["CA$", "62.69", ""],
                    price_str: "CA$62.69",
                  },
                  image: {
                    width: 1350,
                    id: 410278,
                    url: "https://img.kwcdn.com/product/fancy/755fa522-e3cb-4c79-b11b-f66718d3f75e.jpg",
                    height: 1800,
                  },
                  color: "(238,222,176,1)",
                  seo_link_url:
                    "/ca/womens-cozy-fleece-lined--length-winter-coat-warm--with-pockets-zip-up-long-sleeves-and-button-details--cold-weather-winter-coat-g-601103591734468.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F755fa522-e3cb-4c79-b11b-f66718d3f75e.jpg&spec_id=15060&spec_gallery_id=410278&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjI2OQ&_oak_mp_inf=EMT5u7C11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
                  spec_id: 15060,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/ee0c687f-9633-4aa1-9290-892598d18def.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601103591734468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F755fa522-e3cb-4c79-b11b-f66718d3f75e.jpg&spec_id=15060&spec_gallery_id=410278&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjI2OQ&_oak_mp_inf=EMT5u7C11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/755fa522-e3cb-4c79-b11b-f66718d3f75e.jpg",
                  price_str: "62.69",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "62", ".52", ""],
                    reduction_text: [],
                    price: 6252,
                    market_price_str: "115.23",
                    market_price: 11523,
                    price_schema: "62.52",
                    currency: "CAD",
                    price_text: ["CA$", "62.52", ""],
                    price_str: "CA$62.52",
                    market_price_text: ["", "115.23", ""],
                  },
                  image: {
                    width: 1350,
                    id: 410287,
                    url: "https://img.kwcdn.com/product/fancy/3af1afce-d709-4f35-b6c6-950adf01bf18.jpg",
                    height: 1800,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-cozy-fleece-lined--length-winter-coat-warm--with-pockets-zip-up-long-sleeves-and-button-details--cold-weather-winter-coat-g-601103591734468.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3af1afce-d709-4f35-b6c6-950adf01bf18.jpg&spec_id=3002&spec_gallery_id=410287&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjI1Mg&_oak_mp_inf=EMT5u7C11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/e7a1085e-b947-4f5c-90f3-3f426dd10e43.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601103591734468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3af1afce-d709-4f35-b6c6-950adf01bf18.jpg&spec_id=3002&spec_gallery_id=410287&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjI1Mg&_oak_mp_inf=EMT5u7C11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/3af1afce-d709-4f35-b6c6-950adf01bf18.jpg",
                  price_str: "62.52",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "65", ".05", ""],
                    reduction_text: [],
                    price: 6505,
                    price_schema: "65.05",
                    currency: "CAD",
                    price_text: ["CA$", "65.05", ""],
                    price_str: "CA$65.05",
                  },
                  image: {
                    width: 1350,
                    id: 410297,
                    url: "https://img.kwcdn.com/product/fancy/bfed8ee9-76d6-48c3-8e5f-21dc536babf9.jpg",
                    height: 1800,
                  },
                  color: "(255,0,0,1)",
                  seo_link_url:
                    "/ca/womens-cozy-fleece-lined--length-winter-coat-warm--with-pockets-zip-up-long-sleeves-and-button-details--cold-weather-winter-coat-g-601103591734468.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbfed8ee9-76d6-48c3-8e5f-21dc536babf9.jpg&spec_id=2&spec_gallery_id=410297&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjUwNQ&_oak_mp_inf=EMT5u7C11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
                  spec_id: 2,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/3f6e1dcc-b085-4c25-8f87-b709b48777f2.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601103591734468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbfed8ee9-76d6-48c3-8e5f-21dc536babf9.jpg&spec_id=2&spec_gallery_id=410297&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjUwNQ&_oak_mp_inf=EMT5u7C11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/bfed8ee9-76d6-48c3-8e5f-21dc536babf9.jpg",
                  price_str: "65.05",
                },
              ],
              spec_ids: "15060,3002,2",
              seo_link_url:
                "/ca/womens-cozy-fleece-lined--length-winter-coat-warm--with-pockets-zip-up-long-sleeves-and-button-details--cold-weather-winter-coat-g-601103591734468.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F755fa522-e3cb-4c79-b11b-f66718d3f75e.jpg&spec_id=15060&spec_gallery_id=410278&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjI2OQ&_oak_gallery_order=2102330891%2C717139550%2C100987514%2C2050152472%2C961050166&_oak_mp_inf=EMT5u7C11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D&spec_ids=15060,3002,2",
              queryReleScore: 0.0,
              sales_tip_text: ["888", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 5.0,
                hidden_comment: true,
                comment_num_tips: "2",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/dac0e485-8c3c-4d4c-b619-73f7ac7bcfcd.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/dac0e485-8c3c-4d4c-b619-73f7ac7bcfcd.jpg",
              ware_house_type: 1,
              benefit_text: {
                text: "-66%",
              },
              item_type: 0,
              page_alt:
                "womens stretchy open front cardigan jacket asymmetrical hem coat machine washable everyday chic outerwear for women black office party casual outfits elegant cardigan",
              current_sku_id: 17602657752670,
              tags_info: {
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {},
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
                    color: "#FB7701",
                    ext_map: {
                      stock_type: "1",
                      simply_stock_tag_text: "1 LEFT!",
                    },
                    prompt_tag_text:
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                    marketing_tag_type: 1000,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                    tag_id: 91004,
                    text: "Only 1 Left",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/b8bc54e04303bcb474f915ca4160ac248b8c288c.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/dac0e485-8c3c-4d4c-b619-73f7ac7bcfcd.jpg",
                url: "https://img.kwcdn.com/product/c3e87cd089a01b7c7ac90e7e5e949d1b2ec96448.goods.000001.jpeg",
              },
              title:
                "Women's Stretchy Open Front Cardigan Jacket - Asymmetrical Hem Coat, Machine Washable Everyday Chic Outerwear for Women Black, Office, Party, Casual Outfits, Elegant Cardigan",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17595027420230",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "277410605",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxwzqcWHhQU9138l0ITPxiSC89b+UTSb3eAORDwjlaiFRwEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "3288724349521389888",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "277410605",
                g: "601102029749075",
                scene_id: "3",
                show_price: "2237",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "93",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "1621590040870609856",
                ts: "1763223031259",
              },
              mall_id: 634418223682437,
              sales_num: "5.2K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102029749075&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fdac0e485-8c3c-4d4c-b619-73f7ac7bcfcd.jpg&spec_id=3002&spec_gallery_id=236233&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjIzNw&_oak_gallery_order=277410605%2C959358586&spec_ids=3002&_oak_name_id=1621590040870609856&_oak_mp_inf=ENP208ev1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
              selected_spec_ids: [3002],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601102029749075&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fdac0e485-8c3c-4d4c-b619-73f7ac7bcfcd.jpg&spec_id=3002&spec_gallery_id=236233&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjIzNw&_oak_gallery_order=277410605%2C959358586&spec_ids=3002&_oak_name_id=1621590040870609856&_oak_mp_inf=ENP208ev1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order: "277410605,959358586",
                  _oak_name_id: "1621590040870609856",
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
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 1 Left",
                  tag_series: 2,
                },
              ],
              show_index: 93,
              price_info: {
                split_price_text: ["CA$", "22", ".37", ""],
                currency_str: "CA$",
                reduction_text: ["-66", "%"],
                price: 2237,
                market_price_str: "66.29",
                market_price: 6629,
                market_price_type: 1,
                price_schema: "22.37",
                currency: "CAD",
                price_text: ["CA$", "22.37", ""],
                price_str: "CA$22.37",
                market_price_text: ["", "66.29", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 236233,
                url_id: "3288724349521389888",
                url: "https://img.kwcdn.com/product/fancy/dac0e485-8c3c-4d4c-b619-73f7ac7bcfcd.jpg",
                height: 1800,
              },
              sales_tip: "5.2K+ sold",
              visible: true,
              goods_id: 601102029749075,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "22", ".37", ""],
                    reduction_text: [],
                    price: 2237,
                    market_price_str: "66.29",
                    market_price: 6629,
                    price_schema: "22.37",
                    currency: "CAD",
                    price_text: ["CA$", "22.37", ""],
                    price_str: "CA$22.37",
                    market_price_text: ["", "66.29", ""],
                  },
                  image: {
                    width: 1350,
                    id: 236233,
                    url: "https://img.kwcdn.com/product/fancy/dac0e485-8c3c-4d4c-b619-73f7ac7bcfcd.jpg",
                    height: 1800,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-stretchy-open-front-cardigan-jacket-asymmetrical-hem-coat-machine-washable-everyday-chic-outerwear-for-women-black-office-party-casual-outfits-elegant-cardigan-g-601102029749075.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fdac0e485-8c3c-4d4c-b619-73f7ac7bcfcd.jpg&spec_id=3002&spec_gallery_id=236233&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjIzNw&_oak_mp_inf=ENP208ev1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/fbd3f345-c724-460e-804a-1697fcf76f5a.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102029749075&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fdac0e485-8c3c-4d4c-b619-73f7ac7bcfcd.jpg&spec_id=3002&spec_gallery_id=236233&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjIzNw&_oak_mp_inf=ENP208ev1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/dac0e485-8c3c-4d4c-b619-73f7ac7bcfcd.jpg",
                  price_str: "22.37",
                },
              ],
              spec_ids: "3002",
              seo_link_url:
                "/ca/womens-stretchy-open-front-cardigan-jacket-asymmetrical-hem-coat-machine-washable-everyday-chic-outerwear-for-women-black-office-party-casual-outfits-elegant-cardigan-g-601102029749075.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fdac0e485-8c3c-4d4c-b619-73f7ac7bcfcd.jpg&spec_id=3002&spec_gallery_id=236233&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjIzNw&_oak_gallery_order=277410605%2C959358586&_oak_name_id=1621590040870609856&_oak_mp_inf=ENP208ev1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D&spec_ids=3002",
              queryReleScore: 0.0,
              sales_tip_text: ["5.2K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.3,
                hidden_comment: true,
                comment_num_tips: "3",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fmket/bb439c68c4e2e1ec31006bca48825ef5.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fmket/bb439c68c4e2e1ec31006bca48825ef5.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-24%",
              },
              item_type: 0,
              page_alt:
                "womens elegant     jacket with collar zippered pocket tailored   coat for office casual formal wear durable outerwear no   machine washable stand collar design",
              current_sku_id: 17608938544067,
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
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                    color: "#FB7701",
                    ext_map: {
                      stock_type: "1",
                      simply_stock_tag_text: "7 LEFT!",
                    },
                    prompt_tag_text:
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                    marketing_tag_type: 1000,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                    tag_id: 91004,
                    text: "Only 7 left",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/190764414e3628c6736d8978cec26ae4de9b8b1egs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fmket/bb439c68c4e2e1ec31006bca48825ef5.jpg",
                url: "https://img.kwcdn.com/product/57aec5c9e419d66ffefd7058ddf097d0271274a0.temu.000001.jpeg",
              },
              title:
                "Women's Elegant Structured Blazer Jacket with Collar & Zippered Pocket - Tailored All-Season Coat for Office, Casual & Formal Wear, Durable Outerwear (No-Stretch Fit) - Machine Washable, Stand Collar Design",
              sales_tip_text_list: [],
              display_end_time_percent: 48,
              sold_quantity_percent: 7,
              p_rec: {
                skc_id: "17596481819502",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "265347803",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw74KrBnJi+QkkDZ7LDe0ABO+CZPKWC6aJsEi81G5r9J8EH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "3214107637394363528",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "265347803",
                g: "601103276436067",
                scene_id: "3",
                show_price: "2800",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "94",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "64520884570646152",
                ts: "1763223031259",
              },
              activity_type: 13,
              mall_id: 634418221061284,
              sales_num: "2.6K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601103276436067&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Fbb439c68c4e2e1ec31006bca48825ef5.jpg&spec_id=15066&spec_gallery_id=2&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjgwMA&_oak_gallery_order=265347803%2C1710661056%2C1255138724%2C314201163%2C1089494980&spec_ids=15066&_oak_name_id=64520884570646152&_oak_mp_inf=EOPUj5q01ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
              selected_spec_ids: [15066],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601103276436067&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Fbb439c68c4e2e1ec31006bca48825ef5.jpg&spec_id=15066&spec_gallery_id=2&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjgwMA&_oak_gallery_order=265347803%2C1710661056%2C1255138724%2C314201163%2C1089494980&spec_ids=15066&_oak_name_id=64520884570646152&_oak_mp_inf=EOPUj5q01ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112717229124807267",
                sku_extra_param: {
                  _oak_gallery_order:
                    "265347803,1710661056,1255138724,314201163,1089494980",
                  _oak_name_id: "64520884570646152",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "7 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 7 left",
                  tag_series: 2,
                },
              ],
              show_index: 94,
              price_info: {
                reduction_text: ["-24", "%"],
                market_price_type: 1,
                price_text: ["CA$", "28.00", ""],
                price_str: "CA$28.00",
                price_color: "#FB7701",
                split_price_text: ["CA$", "28", ".00", ""],
                currency_str: "CA$",
                price: 2800,
                market_price_str: "36.92",
                market_price: 3692,
                price_schema: "28.00",
                currency: "CAD",
                reduction: 240,
                market_price_text: ["", "36.92", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1500,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 2,
                url_id: "3214107637394363528",
                url: "https://img.kwcdn.com/product/fmket/bb439c68c4e2e1ec31006bca48825ef5.jpg",
                height: 2000,
              },
              sales_tip: "2.6K+ sold",
              visible: true,
              goods_id: 601103276436067,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "28", ".00", ""],
                    reduction_text: ["-24", "%"],
                    price: 2800,
                    market_price_str: "36.92",
                    market_price: 3692,
                    price_schema: "28.00",
                    currency: "CAD",
                    price_text: ["CA$", "28.00", ""],
                    price_str: "CA$28.00",
                    price_color: "#FB7701",
                    reduction: 240,
                    market_price_text: ["", "36.92", ""],
                  },
                  image: {
                    width: 1500,
                    id: 2,
                    url: "https://img.kwcdn.com/product/fmket/bb439c68c4e2e1ec31006bca48825ef5.jpg",
                    height: 2000,
                  },
                  color: "(139,0,0,1)",
                  seo_link_url:
                    "/ca/womens-elegant---jacket-with-collar-zippered-pocket-tailored--coat-for-office-casual-formal-wear-durable-outerwear-no--machine-washable-stand-collar-design-g-601103276436067.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Fbb439c68c4e2e1ec31006bca48825ef5.jpg&spec_id=15066&spec_gallery_id=2&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjgwMA&_oak_mp_inf=EOPUj5q01ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
                  spec_id: 15066,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/7fa7f5b3-0e50-4090-a892-3bc39c7fa3f0.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601103276436067&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Fbb439c68c4e2e1ec31006bca48825ef5.jpg&spec_id=15066&spec_gallery_id=2&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjgwMA&_oak_mp_inf=EOPUj5q01ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fmket/bb439c68c4e2e1ec31006bca48825ef5.jpg",
                  price_str: "32.69",
                },
              ],
              spec_ids: "15066",
              display_end_time: 1764565199,
              seo_link_url:
                "/ca/womens-elegant---jacket-with-collar-zippered-pocket-tailored--coat-for-office-casual-formal-wear-durable-outerwear-no--machine-washable-stand-collar-design-g-601103276436067.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Fbb439c68c4e2e1ec31006bca48825ef5.jpg&spec_id=15066&spec_gallery_id=2&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjgwMA&_oak_gallery_order=265347803%2C1710661056%2C1255138724%2C314201163%2C1089494980&_oak_name_id=64520884570646152&_oak_mp_inf=EOPUj5q01ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D&spec_ids=15066",
              queryReleScore: 0.0,
              sales_tip_text: ["2.6K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 5.0,
                hidden_comment: true,
                comment_num_tips: "2",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/9006a5e1-a359-4552-832f-4b7466e196ef.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/9006a5e1-a359-4552-832f-4b7466e196ef.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-47%",
              },
              item_type: 0,
              page_alt:
                "  womens lightweight longline trench coat autumn winter belted windbreaker with double breasted front adjustable waist tie   shoulders a line regular fit no lining design for casual to formal outfits versatile outerwear elegant style polished   stylish outerwear  ",
              current_sku_id: 17603687725894,
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
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "DIQIUVY Women'S Lightweight Longline Trench Coat - Autumn Winter Belted Windbreaker with Double-Breasted Front, Adjustable Waist Tie & Structured Shoulders, A-Line Regular Fit, No-Lining Design for Casual to Formal Outfits, Versatile Outerwear, Elegant Style, Polished Finish, Stylish Outerwear, Office Attire",
              sales_tip_text_list: [],
              display_end_time_percent: 23,
              sold_quantity_percent: 0,
              p_rec: {
                skc_id: "17595267336157",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1764447891",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw/Hah86SgqdGfgp5BRljSrvhWDVU1LcRTTDBiXTvMHCMEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "1614188779256250510",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1764447891",
                g: "601101960607137",
                scene_id: "3",
                show_price: "2707",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "95",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "4851145653876884341",
                ts: "1763223031260",
              },
              activity_type: 13,
              mall_id: 634418211097932,
              sales_num: "7.9K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601101960607137&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9006a5e1-a359-4552-832f-4b7466e196ef.jpg&spec_id=16105&spec_gallery_id=314335&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcwNw&_oak_gallery_order=1764447891%2C1792315802%2C852937468%2C1400474856%2C1223855632&spec_ids=16105&_oak_name_id=4851145653876884341&_oak_mp_inf=EKHr16av1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
              selected_spec_ids: [16105],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601101960607137&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9006a5e1-a359-4552-832f-4b7466e196ef.jpg&spec_id=16105&spec_gallery_id=314335&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcwNw&_oak_gallery_order=1764447891%2C1792315802%2C852937468%2C1400474856%2C1223855632&spec_ids=16105&_oak_name_id=4851145653876884341&_oak_mp_inf=EKHr16av1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112741269600269729",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1764447891,1792315802,852937468,1400474856,1223855632",
                  _oak_name_id: "4851145653876884341",
                },
              },
              goods_tags: [],
              show_index: 95,
              price_info: {
                reduction_text: ["-47", "%"],
                market_price_type: 1,
                price_text: ["CA$", "27.07", ""],
                price_str: "CA$27.07",
                price_color: "#FB7701",
                split_price_text: ["CA$", "27", ".07", ""],
                currency_str: "CA$",
                price: 2707,
                market_price_str: "51.79",
                market_price: 5179,
                price_schema: "27.07",
                currency: "CAD",
                reduction: 470,
                market_price_text: ["", "51.79", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 314335,
                url_id: "1614188779256250510",
                url: "https://img.kwcdn.com/product/fancy/9006a5e1-a359-4552-832f-4b7466e196ef.jpg",
                height: 1800,
              },
              sales_tip: "7.9K+ sold",
              visible: true,
              goods_id: 601101960607137,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "27", ".07", ""],
                    reduction_text: ["-47", "%"],
                    price: 2707,
                    market_price_str: "51.79",
                    market_price: 5179,
                    price_schema: "27.07",
                    currency: "CAD",
                    price_text: ["CA$", "27.07", ""],
                    price_str: "CA$27.07",
                    price_color: "#FB7701",
                    reduction: 470,
                    market_price_text: ["", "51.79", ""],
                  },
                  image: {
                    width: 1350,
                    id: 314335,
                    url: "https://img.kwcdn.com/product/fancy/9006a5e1-a359-4552-832f-4b7466e196ef.jpg",
                    height: 1800,
                  },
                  color: "(168,132,98,1)",
                  seo_link_url:
                    "/ca/-womens-lightweight-longline-trench-coat-autumn-winter-belted-windbreaker-with-double-breasted-front-adjustable-waist-tie--shoulders-a-line-regular-fit-no-lining-design-for-casual-to-formal-outfits-versatile-outerwear-elegant-style-polished--stylish-outerwear--g-601101960607137.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9006a5e1-a359-4552-832f-4b7466e196ef.jpg&spec_id=16105&spec_gallery_id=314335&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcwNw&_oak_mp_inf=EKHr16av1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
                  spec_id: 16105,
                  color_image:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/d9bad595-f701-4e49-924c-595c337a76d0.jpg",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601101960607137&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9006a5e1-a359-4552-832f-4b7466e196ef.jpg&spec_id=16105&spec_gallery_id=314335&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcwNw&_oak_mp_inf=EKHr16av1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/9006a5e1-a359-4552-832f-4b7466e196ef.jpg",
                  price_str: "27.08",
                },
              ],
              spec_ids: "16105",
              display_end_time: 1763355599,
              seo_link_url:
                "/ca/-womens-lightweight-longline-trench-coat-autumn-winter-belted-windbreaker-with-double-breasted-front-adjustable-waist-tie--shoulders-a-line-regular-fit-no-lining-design-for-casual-to-formal-outfits-versatile-outerwear-elegant-style-polished--stylish-outerwear--g-601101960607137.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9006a5e1-a359-4552-832f-4b7466e196ef.jpg&spec_id=16105&spec_gallery_id=314335&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcwNw&_oak_gallery_order=1764447891%2C1792315802%2C852937468%2C1400474856%2C1223855632&_oak_name_id=4851145653876884341&_oak_mp_inf=EKHr16av1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIKybocKoMw%3D%3D&spec_ids=16105",
              queryReleScore: 0.0,
              sales_tip_text: ["7.9K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 5.0,
                hidden_comment: true,
                comment_num_tips: "11",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/934bbfc0-fa1e-4458-b5b7-300c3728dbe4.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/934bbfc0-fa1e-4458-b5b7-300c3728dbe4.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-43%",
              },
              item_type: 0,
              page_alt:
                "womens elegant plush winter coat double breasted collar jacket with white piping full length hanger friendly button closure machine washable outerwear for formal events cold weather autumn winter coat rack ready",
              current_sku_id: 17609995197097,
              tags_info: {
                title_header_tags: [
                  {
                    ext_map: {
                      discount_promotion_tag:
                        '{"text_dx":0.0,"text_color":"#ffffff","width":73.0,"height":18.0,"bg_url":"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png"}',
                    },
                    marketing_tag_type: 2000,
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
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                    marketing_tag_type: 1000,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                    tag_id: 91004,
                    text: "Only 1 Left",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/854a29e26d376a1e57bb9b477555b08a10e440b6gs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/934bbfc0-fa1e-4458-b5b7-300c3728dbe4.jpg",
                url: "https://img.kwcdn.com/product/db4015ab189eefead5d1456b18405a9abb14b8b6.temu.000001.jpeg",
              },
              title:
                "Women's Elegant Plush Winter Coat - Double-Breasted Collar Jacket with White Piping, Full-Length Hanger-Friendly Button Closure, Machine Washable Outerwear for, Formal Events & Cold Weather (Autumn/Winter) - Coat Rack Ready",
              sales_tip_text_list: [],
              display_end_time_percent: 48,
              sold_quantity_percent: 19,
              p_rec: {
                skc_id: "17596719492904",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1970800571",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw/Hah86SgqdGfgp5BRljSruyB+5zUpXYIUoGyZf1ucJxEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "7911707485137034529",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1970800571",
                g: "601103472484248",
                scene_id: "3",
                show_price: "3539",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "96",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "8781262284624612830",
                ts: "1763223031260",
              },
              activity_type: 100,
              mall_id: 6318960698746,
              sales_num: "4.2K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601103472484248&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F934bbfc0-fa1e-4458-b5b7-300c3728dbe4.jpg&spec_id=2001&spec_gallery_id=421137&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzUzOQ&_oak_gallery_order=1970800571%2C1451680534%2C183123507&spec_ids=2001&_oak_name_id=8781262284624612830&_oak_mp_inf=EJi%2Fzfe01ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
              selected_spec_ids: [2001],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601103472484248&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F934bbfc0-fa1e-4458-b5b7-300c3728dbe4.jpg&spec_id=2001&spec_gallery_id=421137&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzUzOQ&_oak_gallery_order=1970800571%2C1451680534%2C183123507&spec_ids=2001&_oak_name_id=8781262284624612830&_oak_mp_inf=EJi%2Fzfe01ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112701731750305688",
                sku_extra_param: {
                  _oak_gallery_order: "1970800571,1451680534,183123507",
                  _oak_name_id: "8781262284624612830",
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
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 1 Left",
                  tag_series: 2,
                },
              ],
              show_index: 96,
              price_info: {
                reduction_text: ["-43", "%"],
                market_price_type: 1,
                price_text: ["CA$", "35.39", ""],
                price_str: "CA$35.39",
                split_price_text: ["CA$", "35", ".39", ""],
                currency_str: "CA$",
                price: 3539,
                market_price_str: "62.99",
                market_price: 6299,
                price_schema: "35.39",
                currency: "CAD",
                reduction: 430,
                market_price_text: ["", "62.99", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 421137,
                url_id: "7911707485137034529",
                url: "https://img.kwcdn.com/product/fancy/934bbfc0-fa1e-4458-b5b7-300c3728dbe4.jpg",
                height: 1800,
              },
              sales_tip: "4.2K+ sold",
              visible: true,
              goods_id: 601103472484248,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "35", ".39", ""],
                    reduction_text: ["-43", "%"],
                    price: 3539,
                    market_price_str: "62.99",
                    market_price: 6299,
                    price_schema: "35.39",
                    currency: "CAD",
                    price_text: ["CA$", "35.39", ""],
                    price_str: "CA$35.39",
                    reduction: 430,
                    market_price_text: ["", "62.99", ""],
                  },
                  image: {
                    width: 1350,
                    id: 421137,
                    url: "https://img.kwcdn.com/product/fancy/934bbfc0-fa1e-4458-b5b7-300c3728dbe4.jpg",
                    height: 1800,
                  },
                  color: "(255,255,255,1)",
                  seo_link_url:
                    "/ca/womens-elegant-plush-winter-coat-double-breasted-collar-jacket-with-white-piping-full-length-hanger-friendly-button-closure-machine-washable-outerwear-for-formal-events-cold-weather-autumn-winter-coat-rack-ready-g-601103472484248.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F934bbfc0-fa1e-4458-b5b7-300c3728dbe4.jpg&spec_id=2001&spec_gallery_id=421137&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzUzOQ&_oak_mp_inf=EJi%2Fzfe01ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
                  spec_id: 2001,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/e12eb338-8447-423f-8f36-2466750dfad6.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601103472484248&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F934bbfc0-fa1e-4458-b5b7-300c3728dbe4.jpg&spec_id=2001&spec_gallery_id=421137&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzUzOQ&_oak_mp_inf=EJi%2Fzfe01ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/934bbfc0-fa1e-4458-b5b7-300c3728dbe4.jpg",
                  price_str: "43.76",
                },
              ],
              spec_ids: "2001",
              display_end_time: 1764565199,
              seo_link_url:
                "/ca/womens-elegant-plush-winter-coat-double-breasted-collar-jacket-with-white-piping-full-length-hanger-friendly-button-closure-machine-washable-outerwear-for-formal-events-cold-weather-autumn-winter-coat-rack-ready-g-601103472484248.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F934bbfc0-fa1e-4458-b5b7-300c3728dbe4.jpg&spec_id=2001&spec_gallery_id=421137&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzUzOQ&_oak_gallery_order=1970800571%2C1451680534%2C183123507&_oak_name_id=8781262284624612830&_oak_mp_inf=EJi%2Fzfe01ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D&spec_ids=2001",
              queryReleScore: 0.0,
              sales_tip_text: ["4.2K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 5.0,
                hidden_comment: true,
                comment_num_tips: "1",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/572ed5ac-7709-45df-8ec7-c7335199edd0.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/572ed5ac-7709-45df-8ec7-c7335199edd0.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "",
              },
              item_type: 0,
              page_alt:
                "womens winter warm jacket coat elegant collar solid color   navy blue   outerwear for office casual   hand   clean non stretch luxury  ",
              current_sku_id: 17613812301320,
              tags_info: {},
              video: {
                video_url: "",
              },
              title:
                "Women's Winter Warm Jacket Coat - Elegant Collar & Solid Color (Black/Brown/Navy/ Blue) - All-Season Outerwear for Office, Casual & Special Events - Hand Wash/Dry Clean - Non-Stretch Luxury Blazer",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17597620300030",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "398169858",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw6WVcHyG8tyrSiTFTHxEW1CE6oT04+a3z4T3Qjck4G2iEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "1631735278123918305",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "398169858",
                g: "601104242790218",
                scene_id: "3",
                show_price: "4499",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "97",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "7128173047590229302",
                ts: "1763223031260",
              },
              mall_id: 634418212313040,
              sales_num: "5.7K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601104242790218&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F572ed5ac-7709-45df-8ec7-c7335199edd0.jpg&spec_id=3002&spec_gallery_id=503473&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDQ5OQ&_oak_gallery_order=398169858%2C1471471429%2C1063839374%2C1234002720&spec_ids=3002&_oak_name_id=7128173047590229302&_oak_mp_inf=EMqe9ea31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
              selected_spec_ids: [3002],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601104242790218&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F572ed5ac-7709-45df-8ec7-c7335199edd0.jpg&spec_id=3002&spec_gallery_id=503473&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDQ5OQ&_oak_gallery_order=398169858%2C1471471429%2C1063839374%2C1234002720&spec_ids=3002&_oak_name_id=7128173047590229302&_oak_mp_inf=EMqe9ea31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "398169858,1471471429,1063839374,1234002720",
                  _oak_name_id: "7128173047590229302",
                },
              },
              goods_tags: [],
              show_index: 97,
              price_info: {
                split_price_text: ["CA$", "44", ".99", ""],
                currency_str: "CA$",
                reduction_text: [],
                price: 4499,
                price_schema: "44.99",
                currency: "CAD",
                price_text: ["CA$", "44.99", ""],
                price_str: "CA$44.99",
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 503473,
                url_id: "1631735278123918305",
                url: "https://img.kwcdn.com/product/fancy/572ed5ac-7709-45df-8ec7-c7335199edd0.jpg",
                height: 1800,
              },
              sales_tip: "5.7K+ sold",
              visible: true,
              goods_id: 601104242790218,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "44", ".99", ""],
                    reduction_text: [],
                    price: 4499,
                    price_schema: "44.99",
                    currency: "CAD",
                    price_text: ["CA$", "44.99", ""],
                    price_str: "CA$44.99",
                  },
                  image: {
                    width: 1350,
                    id: 503473,
                    url: "https://img.kwcdn.com/product/fancy/572ed5ac-7709-45df-8ec7-c7335199edd0.jpg",
                    height: 1800,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-winter-warm-jacket-coat-elegant-collar-solid-color--navy-blue--outerwear-for-office-casual--hand--clean-non-stretch-luxury--g-601104242790218.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F572ed5ac-7709-45df-8ec7-c7335199edd0.jpg&spec_id=3002&spec_gallery_id=503473&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDQ5OQ&_oak_mp_inf=EMqe9ea31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/ef0074a7-6253-462c-b9d6-3b761dfad6cf.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104242790218&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F572ed5ac-7709-45df-8ec7-c7335199edd0.jpg&spec_id=3002&spec_gallery_id=503473&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDQ5OQ&_oak_mp_inf=EMqe9ea31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/572ed5ac-7709-45df-8ec7-c7335199edd0.jpg",
                  price_str: "44.99",
                },
              ],
              spec_ids: "3002",
              seo_link_url:
                "/ca/womens-winter-warm-jacket-coat-elegant-collar-solid-color--navy-blue--outerwear-for-office-casual--hand--clean-non-stretch-luxury--g-601104242790218.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F572ed5ac-7709-45df-8ec7-c7335199edd0.jpg&spec_id=3002&spec_gallery_id=503473&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDQ5OQ&_oak_gallery_order=398169858%2C1471471429%2C1063839374%2C1234002720&_oak_name_id=7128173047590229302&_oak_mp_inf=EMqe9ea31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D&spec_ids=3002",
              queryReleScore: 0.0,
              sales_tip_text: ["5.7K+", "sold"],
              opt_type: 3,
              comment: {},
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/36dfa2b1-c54c-4380-92a8-1271f1c63749.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/36dfa2b1-c54c-4380-92a8-1271f1c63749.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-14%",
              },
              item_type: 0,
              page_alt:
                "womens cozy fleece lined hooded jacket plaid pattern long sleeve button   flared hem casual winter outerwear for fall winter brown plaid winter jacket fall fashion elegant style",
              current_sku_id: 17611073799449,
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
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "Women's Cozy Fleece-Lined Hooded Jacket, Plaid Pattern Long Sleeve Button-Up Front Flared Hem, Casual Winter Outerwear for Fall & Winter, Brown & Plaid, Winter Jacket Fall Fashion Elegant Style",
              sales_tip_text_list: [],
              display_end_time_percent: 23,
              sold_quantity_percent: 4,
              p_rec: {
                skc_id: "17596973246077",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1085401770",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw+8C6jw9TmSkeio35SDnypkcXGv8WE+lzcKlCuO+PqVpEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "7363584647592860590",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1085401770",
                g: "601103690325291",
                scene_id: "3",
                show_price: "3250",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "98",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "3283456304056247024",
                ts: "1763223031260",
              },
              activity_type: 13,
              mall_id: 634418226164697,
              sales_num: "181",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601103690325291&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F36dfa2b1-c54c-4380-92a8-1271f1c63749.jpg&spec_id=16067&spec_gallery_id=445773&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI1MA&_oak_gallery_order=1085401770%2C1336478339%2C839415126%2C1963910866&spec_ids=16067&_oak_name_id=3283456304056247024&_oak_mp_inf=EKu6vd%2B11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
              selected_spec_ids: [16067],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601103690325291&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F36dfa2b1-c54c-4380-92a8-1271f1c63749.jpg&spec_id=16067&spec_gallery_id=445773&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI1MA&_oak_gallery_order=1085401770%2C1336478339%2C839415126%2C1963910866&spec_ids=16067&_oak_name_id=3283456304056247024&_oak_mp_inf=EKu6vd%2B11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112741165958978859",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1085401770,1336478339,839415126,1963910866",
                  _oak_name_id: "3283456304056247024",
                },
              },
              goods_tags: [],
              show_index: 98,
              price_info: {
                reduction_text: ["-14", "%"],
                market_price_type: 1,
                price_text: ["CA$", "32.50", ""],
                price_str: "CA$32.50",
                price_color: "#FB7701",
                split_price_text: ["CA$", "32", ".50", ""],
                currency_str: "CA$",
                price: 3250,
                market_price_str: "37.88",
                market_price: 3788,
                price_schema: "32.50",
                currency: "CAD",
                reduction: 140,
                market_price_text: ["", "37.88", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 2127,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 445773,
                url_id: "7363584647592860590",
                url: "https://img.kwcdn.com/product/fancy/36dfa2b1-c54c-4380-92a8-1271f1c63749.jpg",
                height: 2835,
              },
              sales_tip: "181 sold",
              visible: true,
              goods_id: 601103690325291,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "32", ".50", ""],
                    reduction_text: ["-14", "%"],
                    price: 3250,
                    market_price_str: "37.88",
                    market_price: 3788,
                    price_schema: "32.50",
                    currency: "CAD",
                    price_text: ["CA$", "32.50", ""],
                    price_str: "CA$32.50",
                    price_color: "#FB7701",
                    reduction: 140,
                    market_price_text: ["", "37.88", ""],
                  },
                  image: {
                    width: 2127,
                    id: 445773,
                    url: "https://img.kwcdn.com/product/fancy/36dfa2b1-c54c-4380-92a8-1271f1c63749.jpg",
                    height: 2835,
                  },
                  color: "(255,199,115,1)",
                  seo_link_url:
                    "/ca/womens-cozy-fleece-lined-hooded-jacket-plaid-pattern-long-sleeve-button--flared-hem-casual-winter-outerwear-for-fall-winter-brown-plaid-winter-jacket-fall-fashion-elegant-style-g-601103690325291.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F36dfa2b1-c54c-4380-92a8-1271f1c63749.jpg&spec_id=16067&spec_gallery_id=445773&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI1MA&_oak_mp_inf=EKu6vd%2B11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
                  spec_id: 16067,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/675406ad-ceb4-4b21-9c9b-de198899880f.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601103690325291&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F36dfa2b1-c54c-4380-92a8-1271f1c63749.jpg&spec_id=16067&spec_gallery_id=445773&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI1MA&_oak_mp_inf=EKu6vd%2B11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/36dfa2b1-c54c-4380-92a8-1271f1c63749.jpg",
                  price_str: "38.74",
                },
              ],
              spec_ids: "16067",
              display_end_time: 1763355599,
              seo_link_url:
                "/ca/womens-cozy-fleece-lined-hooded-jacket-plaid-pattern-long-sleeve-button--flared-hem-casual-winter-outerwear-for-fall-winter-brown-plaid-winter-jacket-fall-fashion-elegant-style-g-601103690325291.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F36dfa2b1-c54c-4380-92a8-1271f1c63749.jpg&spec_id=16067&spec_gallery_id=445773&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI1MA&_oak_gallery_order=1085401770%2C1336478339%2C839415126%2C1963910866&_oak_name_id=3283456304056247024&_oak_mp_inf=EKu6vd%2B11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D&spec_ids=16067",
              queryReleScore: 0.0,
              sales_tip_text: ["181", "sold"],
              opt_type: 3,
              comment: {},
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/2cdb1cac-e20e-4e24-9a9e-969da61de1cd.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/2cdb1cac-e20e-4e24-9a9e-969da61de1cd.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-45%",
              },
              item_type: 0,
              page_alt:
                "womens elegant winter coat long sleeve hooded jacket with full zip front non stretch fabric side pockets cold weather outerwear for everyday formal events office wear durable construction   seasonal fashion",
              current_sku_id: 17602965066476,
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
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/a9407ef4cd5c542c6cf9c2550412fe283ad287c2gs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/2cdb1cac-e20e-4e24-9a9e-969da61de1cd.jpg",
                url: "https://img.kwcdn.com/product/b9261f593e9f1c017c5c9fbc478c2cff1dd2d817.temu.000001.jpeg",
              },
              title:
                "Women'S Elegant Winter Coat - Long Sleeve Hooded Jacket with Full-Zip Front, Non-Stretch Fabric, Side Pockets - Cold Weather Outerwear for Everyday & Formal Events, Office Wear, Durable Construction, Classic Design, Seasonal Fashion",
              sales_tip_text_list: [],
              display_end_time_percent: 7,
              sold_quantity_percent: 4,
              p_rec: {
                skc_id: "17595099757546",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1370294614",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxww2eQkZ/fWeMUiNdy42RFHDiEpovgF6hZtWEYdwxvjUbEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "7958462310236953350",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1370294614",
                g: "601102091480880",
                scene_id: "3",
                show_price: "3934",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "99",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "280036965849630483",
                ts: "1763223031260",
              },
              activity_type: 13,
              mall_id: 2532772973037,
              sales_num: "8K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102091480880&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cdb1cac-e20e-4e24-9a9e-969da61de1cd.jpg&spec_id=3002&spec_gallery_id=258050&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzkzNA&_oak_gallery_order=1370294614&spec_ids=3002&_oak_name_id=280036965849630483&_oak_mp_inf=ELDei%2BWv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
              selected_spec_ids: [3002],
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601102091480880&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cdb1cac-e20e-4e24-9a9e-969da61de1cd.jpg&spec_id=3002&spec_gallery_id=258050&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzkzNA&_oak_gallery_order=1370294614&spec_ids=3002&_oak_name_id=280036965849630483&_oak_mp_inf=ELDei%2BWv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112732451403263792",
                sku_extra_param: {
                  _oak_gallery_order: "1370294614",
                  _oak_name_id: "280036965849630483",
                },
              },
              goods_tags: [],
              show_index: 99,
              price_info: {
                reduction_text: ["-45", "%"],
                market_price_type: 1,
                price_text: ["CA$", "39.34", ""],
                price_str: "CA$39.34",
                price_color: "#FB7701",
                split_price_text: ["CA$", "39", ".34", ""],
                currency_str: "CA$",
                price: 3934,
                market_price_str: "72.38",
                market_price: 7238,
                price_schema: "39.34",
                currency: "CAD",
                reduction: 450,
                market_price_text: ["", "72.38", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1340,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 258050,
                url_id: "7958462310236953350",
                url: "https://img.kwcdn.com/product/fancy/2cdb1cac-e20e-4e24-9a9e-969da61de1cd.jpg",
                height: 1785,
              },
              sales_tip: "8K+ sold",
              visible: true,
              goods_id: 601102091480880,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "39", ".34", ""],
                    reduction_text: ["-45", "%"],
                    price: 3934,
                    market_price_str: "72.38",
                    market_price: 7238,
                    price_schema: "39.34",
                    currency: "CAD",
                    price_text: ["CA$", "39.34", ""],
                    price_str: "CA$39.34",
                    price_color: "#FB7701",
                    reduction: 450,
                    market_price_text: ["", "72.38", ""],
                  },
                  image: {
                    width: 1340,
                    id: 258050,
                    url: "https://img.kwcdn.com/product/fancy/2cdb1cac-e20e-4e24-9a9e-969da61de1cd.jpg",
                    height: 1785,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-elegant-winter-coat-long-sleeve-hooded-jacket-with-full-zip-front-non-stretch-fabric-side-pockets-cold-weather-outerwear-for-everyday-formal-events-office-wear-durable-construction--seasonal-fashion-g-601102091480880.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cdb1cac-e20e-4e24-9a9e-969da61de1cd.jpg&spec_id=3002&spec_gallery_id=258050&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzkzNA&_oak_mp_inf=ELDei%2BWv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/eff70e0f-f55a-47cf-8bd9-62d2a1194ffb.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102091480880&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cdb1cac-e20e-4e24-9a9e-969da61de1cd.jpg&spec_id=3002&spec_gallery_id=258050&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzkzNA&_oak_mp_inf=ELDei%2BWv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/2cdb1cac-e20e-4e24-9a9e-969da61de1cd.jpg",
                  price_str: "39.35",
                },
              ],
              spec_ids: "3002",
              display_end_time: 1763787599,
              seo_link_url:
                "/ca/womens-elegant-winter-coat-long-sleeve-hooded-jacket-with-full-zip-front-non-stretch-fabric-side-pockets-cold-weather-outerwear-for-everyday-formal-events-office-wear-durable-construction--seasonal-fashion-g-601102091480880.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cdb1cac-e20e-4e24-9a9e-969da61de1cd.jpg&spec_id=3002&spec_gallery_id=258050&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzkzNA&_oak_gallery_order=1370294614&_oak_name_id=280036965849630483&_oak_mp_inf=ELDei%2BWv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D&spec_ids=3002",
              queryReleScore: 0.0,
              sales_tip_text: ["8K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "64",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/open/ba07d58169a74f01a5357c1f5f912a51-goods.jpeg",
              thumb_url:
                "https://img.kwcdn.com/product/open/ba07d58169a74f01a5357c1f5f912a51-goods.jpeg",
              ware_house_type: 1,
              benefit_text: {
                text: "-50%",
              },
              item_type: 0,
              page_alt:
                "womens autumn winter jacket color block corduroy coat with lapel collar button front closure soft light friendly warm outerwear casual to semi formal long sleeve jacket in pinkpurplenavy single breasted design for fall winter layering",
              current_sku_id: 17611008266403,
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
                    ext_map: {},
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
                "Women'S Autumn & Winter Jacket - Color-Block Corduroy Coat with Lapel Collar & Button Front Closure, Soft Light -Friendly Warm Outerwear, Casual to Semi-Formal Long Sleeve Jacket in PinkPurpleNavy, Single-Breasted Design for Fall Winter Layering",
              sales_tip_text_list: [],
              display_end_time_percent: 52,
              sold_quantity_percent: 0,
              p_rec: {
                skc_id: "17596958030694",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1402531434",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw9onh+2S47Iaa5rvnUpDYiXJCCpRH+N2GvcZUywn++JDEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "1854335218114622030",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1402531434",
                g: "601103677358209",
                scene_id: "3",
                show_price: "2664",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "100",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "3794276860861313015",
                ts: "1763223031260",
              },
              activity_type: 13,
              mall_id: 634418219746492,
              sales_num: "8.6K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601103677358209&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fba07d58169a74f01a5357c1f5f912a51-goods.jpeg&spec_id=21263&spec_gallery_id=423089&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY2NA&_oak_gallery_order=1402531434%2C2098314406%2C1037910395%2C789411320%2C1117327585&spec_ids=21263,16057&_oak_name_id=3794276860861313015&_oak_mp_inf=EIGBptm11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
              selected_spec_ids: [21263, 16057],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601103677358209&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fba07d58169a74f01a5357c1f5f912a51-goods.jpeg&spec_id=21263&spec_gallery_id=423089&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY2NA&_oak_gallery_order=1402531434%2C2098314406%2C1037910395%2C789411320%2C1117327585&spec_ids=21263,16057&_oak_name_id=3794276860861313015&_oak_mp_inf=EIGBptm11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112730149820858497",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1402531434,2098314406,1037910395,789411320,1117327585",
                  _oak_name_id: "3794276860861313015",
                },
              },
              goods_tags: [],
              show_index: 100,
              price_info: {
                reduction_text: ["-50", "%"],
                market_price_type: 1,
                price_text: ["CA$", "26.64", ""],
                price_str: "CA$26.64",
                price_color: "#FB7701",
                split_price_text: ["CA$", "26", ".64", ""],
                currency_str: "CA$",
                price: 2664,
                market_price_str: "53.53",
                market_price: 5353,
                price_schema: "26.64",
                currency: "CAD",
                reduction: 500,
                market_price_text: ["", "53.53", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1920,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 423089,
                url_id: "1854335218114622030",
                url: "https://img.kwcdn.com/product/open/ba07d58169a74f01a5357c1f5f912a51-goods.jpeg",
                height: 2560,
              },
              sales_tip: "8.6K+ sold",
              visible: true,
              goods_id: 601103677358209,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "26", ".64", ""],
                    reduction_text: ["-50", "%"],
                    price: 2664,
                    market_price_str: "53.53",
                    market_price: 5353,
                    price_schema: "26.64",
                    currency: "CAD",
                    price_text: ["CA$", "26.64", ""],
                    price_str: "CA$26.64",
                    price_color: "#FB7701",
                    reduction: 500,
                    market_price_text: ["", "53.53", ""],
                  },
                  image: {
                    width: 1920,
                    id: 423089,
                    url: "https://img.kwcdn.com/product/open/ba07d58169a74f01a5357c1f5f912a51-goods.jpeg",
                    height: 2560,
                  },
                  color: "(255,255,254,1)",
                  seo_link_url:
                    "/ca/womens-autumn-winter-jacket-color-block-corduroy-coat-with-lapel-collar-button-front-closure-soft-light-friendly-warm-outerwear-casual-to-semi-formal-long-sleeve-jacket-in-pinkpurplenavy-single-breasted-design-for-fall-winter-layering-g-601103677358209.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fba07d58169a74f01a5357c1f5f912a51-goods.jpeg&spec_id=21263&spec_gallery_id=423089&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY2NA&_oak_mp_inf=EIGBptm11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
                  spec_id: 21263,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/dca96ea1-7057-42ac-bdec-ae4a6d025682.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601103677358209&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fba07d58169a74f01a5357c1f5f912a51-goods.jpeg&spec_id=21263&spec_gallery_id=423089&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY2NA&_oak_mp_inf=EIGBptm11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/open/ba07d58169a74f01a5357c1f5f912a51-goods.jpeg",
                  price_str: "30.79",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "26", ".64", ""],
                    reduction_text: ["-50", "%"],
                    price: 2664,
                    market_price_str: "53.53",
                    market_price: 5353,
                    price_schema: "26.64",
                    currency: "CAD",
                    price_text: ["CA$", "26.64", ""],
                    price_str: "CA$26.64",
                    price_color: "#FB7701",
                    reduction: 500,
                    market_price_text: ["", "53.53", ""],
                  },
                  image: {
                    width: 1350,
                    id: 423094,
                    url: "https://img.kwcdn.com/product/open/416c7c1913d148b5ace0927030d0ef51-goods.jpeg",
                    height: 1800,
                  },
                  color: "(255,182,193,1)",
                  seo_link_url:
                    "/ca/womens-autumn-winter-jacket-color-block-corduroy-coat-with-lapel-collar-button-front-closure-soft-light-friendly-warm-outerwear-casual-to-semi-formal-long-sleeve-jacket-in-pinkpurplenavy-single-breasted-design-for-fall-winter-layering-g-601103677358209.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F416c7c1913d148b5ace0927030d0ef51-goods.jpeg&spec_id=16057&spec_gallery_id=423094&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY2NA&_oak_mp_inf=EIGBptm11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
                  spec_id: 16057,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/10faf35f-23f0-4a85-9531-e960ade03961.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601103677358209&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F416c7c1913d148b5ace0927030d0ef51-goods.jpeg&spec_id=16057&spec_gallery_id=423094&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY2NA&_oak_mp_inf=EIGBptm11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/open/416c7c1913d148b5ace0927030d0ef51-goods.jpeg",
                  price_str: "30.79",
                },
              ],
              spec_ids: "21263,16057",
              display_end_time: 1764392399,
              seo_link_url:
                "/ca/womens-autumn-winter-jacket-color-block-corduroy-coat-with-lapel-collar-button-front-closure-soft-light-friendly-warm-outerwear-casual-to-semi-formal-long-sleeve-jacket-in-pinkpurplenavy-single-breasted-design-for-fall-winter-layering-g-601103677358209.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fba07d58169a74f01a5357c1f5f912a51-goods.jpeg&spec_id=21263&spec_gallery_id=423089&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY2NA&_oak_gallery_order=1402531434%2C2098314406%2C1037910395%2C789411320%2C1117327585&_oak_name_id=3794276860861313015&_oak_mp_inf=EIGBptm11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK2bocKoMw%3D%3D&spec_ids=21263,16057",
              queryReleScore: 0.0,
              sales_tip_text: ["8.6K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 5.0,
                hidden_comment: true,
                comment_num_tips: "1",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/c8df768e-0ef9-4d2f-a8ea-c8feb331a2a2.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/c8df768e-0ef9-4d2f-a8ea-c8feb331a2a2.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-27%",
              },
              item_type: 0,
              page_alt:
                "womens elegant winter coat with like collar belted full length jacket classic button front machine washable long outerwear for parties casual solid color fall winter warm   no stretch",
              current_sku_id: 17613948359800,
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
                ],
                goods_tags: [
                  {
                    icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                    color: "#FB7701",
                    ext_map: {
                      stock_type: "1",
                      simply_stock_tag_text: "7 LEFT!",
                    },
                    prompt_tag_text:
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                    marketing_tag_type: 1000,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                    tag_id: 91004,
                    text: "Only 7 left",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/0af0e5f9ec3b75046ff2763520085ae1a4205d01gs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/c8df768e-0ef9-4d2f-a8ea-c8feb331a2a2.jpg",
                url: "https://img.kwcdn.com/product/7d996a7c6c8e9867a113f7861c89aca030ab8482.temu.000001.jpeg",
              },
              title:
                "Women's Elegant Winter Coat with -Like Collar - Belted Full-Length Jacket, Classic Button Front & Machine Washable - Long Outerwear for, Parties, Casual (Solid Color) - Fall/Winter Warm Blazer (No Stretch)",
              sales_tip_text_list: [],
              display_end_time_percent: 23,
              sold_quantity_percent: 40,
              p_rec: {
                skc_id: "17597653363952",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "632022052",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw++HPfbOiTISLXWn9uu+GDvqDiifLj4E3bMOapLiaNGhEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "2943083353941898253",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "632022052",
                g: "601104271688776",
                scene_id: "3",
                show_price: "3974",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "101",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "7335367563241532551",
                ts: "1763223031260",
              },
              activity_type: 13,
              mall_id: 634418224178501,
              sales_num: "890",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601104271688776&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc8df768e-0ef9-4d2f-a8ea-c8feb331a2a2.jpg&spec_id=15067&spec_gallery_id=501677&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk3NA&_oak_gallery_order=632022052%2C269388267%2C947485813%2C814279563%2C1718736320&spec_ids=15067&_oak_name_id=7335367563241532551&_oak_mp_inf=EMiI2fS31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
              selected_spec_ids: [15067],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601104271688776&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc8df768e-0ef9-4d2f-a8ea-c8feb331a2a2.jpg&spec_id=15067&spec_gallery_id=501677&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk3NA&_oak_gallery_order=632022052%2C269388267%2C947485813%2C814279563%2C1718736320&spec_ids=15067&_oak_name_id=7335367563241532551&_oak_mp_inf=EMiI2fS31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112737211183285320",
                sku_extra_param: {
                  _oak_gallery_order:
                    "632022052,269388267,947485813,814279563,1718736320",
                  _oak_name_id: "7335367563241532551",
                },
              },
              goods_tags: [
                {
                  icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                  color: "#FB7701",
                  ext_map: {
                    stock_type: "1",
                    simply_stock_tag_text: "7 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 7 left",
                  tag_series: 2,
                },
              ],
              show_index: 101,
              price_info: {
                reduction_text: ["-27", "%"],
                market_price_type: 1,
                price_text: ["CA$", "39.74", ""],
                price_str: "CA$39.74",
                price_color: "#FB7701",
                split_price_text: ["CA$", "39", ".74", ""],
                currency_str: "CA$",
                price: 3974,
                market_price_str: "54.61",
                market_price: 5461,
                price_schema: "39.74",
                currency: "CAD",
                reduction: 270,
                market_price_text: ["", "54.61", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 501677,
                url_id: "2943083353941898253",
                url: "https://img.kwcdn.com/product/fancy/c8df768e-0ef9-4d2f-a8ea-c8feb331a2a2.jpg",
                height: 1800,
              },
              sales_tip: "890 sold",
              visible: true,
              goods_id: 601104271688776,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "39", ".74", ""],
                    reduction_text: ["-27", "%"],
                    price: 3974,
                    market_price_str: "54.61",
                    market_price: 5461,
                    price_schema: "39.74",
                    currency: "CAD",
                    price_text: ["CA$", "39.74", ""],
                    price_str: "CA$39.74",
                    price_color: "#FB7701",
                    reduction: 270,
                    market_price_text: ["", "54.61", ""],
                  },
                  image: {
                    width: 1350,
                    id: 501677,
                    url: "https://img.kwcdn.com/product/fancy/c8df768e-0ef9-4d2f-a8ea-c8feb331a2a2.jpg",
                    height: 1800,
                  },
                  color: "(195,176,145,1)",
                  seo_link_url:
                    "/ca/womens-elegant-winter-coat-with-like-collar-belted-full-length-jacket-classic-button-front-machine-washable-long-outerwear-for-parties-casual-solid-color-fall-winter-warm--no-stretch-g-601104271688776.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc8df768e-0ef9-4d2f-a8ea-c8feb331a2a2.jpg&spec_id=15067&spec_gallery_id=501677&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk3NA&_oak_mp_inf=EMiI2fS31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  spec_id: 15067,
                  color_image:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/dd9f5dca-9a29-4a05-8bff-a17def4dfc9b.jpg",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104271688776&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc8df768e-0ef9-4d2f-a8ea-c8feb331a2a2.jpg&spec_id=15067&spec_gallery_id=501677&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk3NA&_oak_mp_inf=EMiI2fS31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/c8df768e-0ef9-4d2f-a8ea-c8feb331a2a2.jpg",
                  price_str: "43.64",
                },
              ],
              spec_ids: "15067",
              display_end_time: 1763355599,
              seo_link_url:
                "/ca/womens-elegant-winter-coat-with-like-collar-belted-full-length-jacket-classic-button-front-machine-washable-long-outerwear-for-parties-casual-solid-color-fall-winter-warm--no-stretch-g-601104271688776.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc8df768e-0ef9-4d2f-a8ea-c8feb331a2a2.jpg&spec_id=15067&spec_gallery_id=501677&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk3NA&_oak_gallery_order=632022052%2C269388267%2C947485813%2C814279563%2C1718736320&_oak_name_id=7335367563241532551&_oak_mp_inf=EMiI2fS31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D&spec_ids=15067",
              queryReleScore: 0.0,
              sales_tip_text: ["890", "sold"],
              opt_type: 3,
              comment: {},
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fmket/8a959c46252513070961f275af920ffe.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fmket/8a959c46252513070961f275af920ffe.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-26%",
              },
              item_type: 0,
              page_alt:
                "womens winter cape style faux fur lined hooded cardigan burgundy plush open front oversized coat for cold weather middle eastern inspired     only ladies winter coats cold   cape style outerwear luxury  ",
              current_sku_id: 17592345078139,
              tags_info: {},
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/5503b9e28a53ae66e075551f59d5ca02adb2cb90.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fmket/8a959c46252513070961f275af920ffe.jpg",
                url: "https://img.kwcdn.com/product/ed5704d3034e4830014fddd27cea8715ee089fcd.goods.000001.jpeg",
              },
              title:
                "Women's Winter Cape-Style Faux Fur-Lined Hooded Cardigan - Burgundy Plush Open Front Oversized Coat for Cold Weather, Middle Eastern-Inspired Elegance, Dry Clean Only, Ladies Winter Coats, Cold Weather Apparel, Cape Style Outerwear, Luxury Fabric Coat",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17592227433896",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1603401568",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw5Q/fPxff/btP4fijuGAAZ6JUFrx+RuEyw2LU9EJYEekEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "5297997390181835216",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1603401568",
                g: "601099541009468",
                scene_id: "3",
                show_price: "5168",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "102",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "5047383798991594561",
                ts: "1763223031260",
              },
              mall_id: 634418212700207,
              sales_num: "2.1K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099541009468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F8a959c46252513070961f275af920ffe.jpg&spec_id=17084&spec_gallery_id=9&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTE2OA&_oak_gallery_order=1603401568%2C1647944929%2C759431470%2C952800538%2C1118708977&spec_ids=17084,3002,16062,16080,15067,16057&_oak_name_id=5047383798991594561&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
              selected_spec_ids: [17084, 3002, 16062, 16080, 15067, 16057],
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099541009468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F8a959c46252513070961f275af920ffe.jpg&spec_id=17084&spec_gallery_id=9&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTE2OA&_oak_gallery_order=1603401568%2C1647944929%2C759431470%2C952800538%2C1118708977&spec_ids=17084,3002,16062,16080,15067,16057&_oak_name_id=5047383798991594561&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "1603401568,1647944929,759431470,952800538,1118708977",
                  _oak_name_id: "5047383798991594561",
                },
              },
              goods_tags: [],
              show_index: 102,
              price_info: {
                split_price_text: ["CA$", "51", ".68", ""],
                currency_str: "CA$",
                reduction_text: ["-26", "%"],
                price: 5168,
                market_price_str: "70.19",
                market_price: 7019,
                market_price_type: 1,
                price_schema: "51.68",
                currency: "CAD",
                price_text: ["CA$", "51.68", ""],
                price_str: "CA$51.68",
                market_price_text: ["", "70.19", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1500,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 9,
                url_id: "5297997390181835216",
                url: "https://img.kwcdn.com/product/fmket/8a959c46252513070961f275af920ffe.jpg",
                height: 2000,
              },
              sales_tip: "2.1K+ sold",
              visible: true,
              goods_id: 601099541009468,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "51", ".68", ""],
                    reduction_text: [],
                    price: 5168,
                    market_price_str: "70.19",
                    market_price: 7019,
                    price_schema: "51.68",
                    currency: "CAD",
                    price_text: ["CA$", "51.68", ""],
                    price_str: "CA$51.68",
                    market_price_text: ["", "70.19", ""],
                  },
                  image: {
                    width: 1500,
                    id: 9,
                    url: "https://img.kwcdn.com/product/fmket/8a959c46252513070961f275af920ffe.jpg",
                    height: 2000,
                  },
                  color: "",
                  seo_link_url:
                    "/ca/womens-winter-cape-style-faux-fur-lined-hooded-cardigan-burgundy-plush-open-front-oversized-coat-for-cold-weather-middle-eastern-inspired---only-ladies-winter-coats-cold--cape-style-outerwear-luxury--g-601099541009468.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F8a959c46252513070961f275af920ffe.jpg&spec_id=17084&spec_gallery_id=9&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTE2OA&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  spec_id: 17084,
                  color_image:
                    "https://img.kwcdn.com/product/0b508a22-cfe7-11ee-9ab3-0a580a68bd19.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601099541009468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F8a959c46252513070961f275af920ffe.jpg&spec_id=17084&spec_gallery_id=9&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTE2OA&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fmket/8a959c46252513070961f275af920ffe.jpg",
                  price_str: "51.68",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "40", ".20", ""],
                    reduction_text: [],
                    price: 4020,
                    market_price_str: "70.19",
                    market_price: 7019,
                    price_schema: "40.20",
                    currency: "CAD",
                    price_text: ["CA$", "40.20", ""],
                    price_str: "CA$40.20",
                    market_price_text: ["", "70.19", ""],
                  },
                  image: {
                    width: 1340,
                    id: 1836,
                    url: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/9d9f54d8a5676094d0b581173f771823.jpg",
                    height: 1785,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-winter-cape-style-faux-fur-lined-hooded-cardigan-burgundy-plush-open-front-oversized-coat-for-cold-weather-middle-eastern-inspired---only-ladies-winter-coats-cold--cape-style-outerwear-luxury--g-601099541009468.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F9d9f54d8a5676094d0b581173f771823.jpg&spec_id=3002&spec_gallery_id=1836&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDAyMA&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/91323546-a60c-11ee-9a28-0a580a68bd19.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601099541009468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F9d9f54d8a5676094d0b581173f771823.jpg&spec_id=3002&spec_gallery_id=1836&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDAyMA&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/9d9f54d8a5676094d0b581173f771823.jpg",
                  price_str: "40.20",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "42", ".02", ""],
                    reduction_text: [],
                    price: 4202,
                    market_price_str: "129.38",
                    market_price: 12938,
                    price_schema: "42.02",
                    currency: "CAD",
                    price_text: ["CA$", "42.02", ""],
                    price_str: "CA$42.02",
                    market_price_text: ["", "129.38", ""],
                  },
                  image: {
                    width: 1340,
                    id: 1833,
                    url: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4af515eaba662301325ad43f12cbf7af.jpg",
                    height: 1785,
                  },
                  color: "(153,0,0,1)",
                  seo_link_url:
                    "/ca/womens-winter-cape-style-faux-fur-lined-hooded-cardigan-burgundy-plush-open-front-oversized-coat-for-cold-weather-middle-eastern-inspired---only-ladies-winter-coats-cold--cape-style-outerwear-luxury--g-601099541009468.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F4af515eaba662301325ad43f12cbf7af.jpg&spec_id=16062&spec_gallery_id=1833&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDIwMg&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  spec_id: 16062,
                  color_image:
                    "https://img.kwcdn.com/product/fecefa6e-a60a-11ee-855e-0a580a68bd19.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601099541009468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F4af515eaba662301325ad43f12cbf7af.jpg&spec_id=16062&spec_gallery_id=1833&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDIwMg&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4af515eaba662301325ad43f12cbf7af.jpg",
                  price_str: "42.02",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "42", ".02", ""],
                    reduction_text: [],
                    price: 4202,
                    market_price_str: "70.19",
                    market_price: 7019,
                    price_schema: "42.02",
                    currency: "CAD",
                    price_text: ["CA$", "42.02", ""],
                    price_str: "CA$42.02",
                    market_price_text: ["", "70.19", ""],
                  },
                  image: {
                    width: 1340,
                    id: 1844,
                    url: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8eb3366928fa0921edf3cdb2078dff57.jpg",
                    height: 1785,
                  },
                  color: "(128,128,128,1)",
                  seo_link_url:
                    "/ca/womens-winter-cape-style-faux-fur-lined-hooded-cardigan-burgundy-plush-open-front-oversized-coat-for-cold-weather-middle-eastern-inspired---only-ladies-winter-coats-cold--cape-style-outerwear-luxury--g-601099541009468.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F8eb3366928fa0921edf3cdb2078dff57.jpg&spec_id=16080&spec_gallery_id=1844&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDIwMg&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  spec_id: 16080,
                  color_image:
                    "https://img.kwcdn.com/product/ef9b3dd8-a60e-11ee-8875-0a580a68bd19.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601099541009468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F8eb3366928fa0921edf3cdb2078dff57.jpg&spec_id=16080&spec_gallery_id=1844&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDIwMg&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8eb3366928fa0921edf3cdb2078dff57.jpg",
                  price_str: "42.02",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "50", ".90", ""],
                    reduction_text: [],
                    price: 5090,
                    market_price_str: "70.19",
                    market_price: 7019,
                    price_schema: "50.90",
                    currency: "CAD",
                    price_text: ["CA$", "50.90", ""],
                    price_str: "CA$50.90",
                    market_price_text: ["", "70.19", ""],
                  },
                  image: {
                    width: 1340,
                    id: 2152,
                    url: "https://img.kwcdn.com/product/fancy/043713ff-70b0-4c15-8080-0b03e0a3391b.jpg",
                    height: 1785,
                  },
                  color: "(195,176,145,1)",
                  seo_link_url:
                    "/ca/womens-winter-cape-style-faux-fur-lined-hooded-cardigan-burgundy-plush-open-front-oversized-coat-for-cold-weather-middle-eastern-inspired---only-ladies-winter-coats-cold--cape-style-outerwear-luxury--g-601099541009468.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F043713ff-70b0-4c15-8080-0b03e0a3391b.jpg&spec_id=15067&spec_gallery_id=2152&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTA5MA&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  spec_id: 15067,
                  color_image:
                    "https://img.kwcdn.com/product/121a0a70-cfe4-11ee-9a28-0a580a68bd19.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601099541009468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F043713ff-70b0-4c15-8080-0b03e0a3391b.jpg&spec_id=15067&spec_gallery_id=2152&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTA5MA&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/043713ff-70b0-4c15-8080-0b03e0a3391b.jpg",
                  price_str: "50.90",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "53", ".85", ""],
                    reduction_text: [],
                    price: 5385,
                    market_price_str: "68.33",
                    market_price: 6833,
                    price_schema: "53.85",
                    currency: "CAD",
                    price_text: ["CA$", "53.85", ""],
                    price_str: "CA$53.85",
                    market_price_text: ["", "68.33", ""],
                  },
                  image: {
                    width: 1340,
                    id: 1839,
                    url: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/cabdf65045f5eb075afa0960065d9122.jpg",
                    height: 1785,
                  },
                  color: "(255,182,193,1)",
                  seo_link_url:
                    "/ca/womens-winter-cape-style-faux-fur-lined-hooded-cardigan-burgundy-plush-open-front-oversized-coat-for-cold-weather-middle-eastern-inspired---only-ladies-winter-coats-cold--cape-style-outerwear-luxury--g-601099541009468.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2Fcabdf65045f5eb075afa0960065d9122.jpg&spec_id=16057&spec_gallery_id=1839&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTM4NQ&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  spec_id: 16057,
                  color_image:
                    "https://img.kwcdn.com/product/187c6016-a60e-11ee-9ab3-0a580a68bd19.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601099541009468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2Fcabdf65045f5eb075afa0960065d9122.jpg&spec_id=16057&spec_gallery_id=1839&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTM4NQ&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/cabdf65045f5eb075afa0960065d9122.jpg",
                  price_str: "53.85",
                },
              ],
              spec_ids: "17084,3002,16062,16080,15067,16057",
              seo_link_url:
                "/ca/womens-winter-cape-style-faux-fur-lined-hooded-cardigan-burgundy-plush-open-front-oversized-coat-for-cold-weather-middle-eastern-inspired---only-ladies-winter-coats-cold--cape-style-outerwear-luxury--g-601099541009468.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F8a959c46252513070961f275af920ffe.jpg&spec_id=17084&spec_gallery_id=9&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTE2OA&_oak_gallery_order=1603401568%2C1647944929%2C759431470%2C952800538%2C1118708977&_oak_name_id=5047383798991594561&_oak_mp_inf=ELyo96Sm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D&spec_ids=17084,3002,16062,16080,15067,16057",
              queryReleScore: 0.0,
              sales_tip_text: ["2.1K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.7,
                hidden_comment: false,
                comment_num_tips: "374",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fmket/881c34d9a37032ee941b511a5001bb2f.jpeg",
              thumb_url:
                "https://img.kwcdn.com/product/fmket/881c34d9a37032ee941b511a5001bb2f.jpeg",
              ware_house_type: 0,
              benefit_text: {
                text: "-23%",
              },
              item_type: 0,
              page_alt:
                "womens vintage 1985   lettering 1985 print cardigan jacket black white   zipper front casual winter coat with pockets fall clothes for women jacket for women fall outfits for women autumn clothes women jackets for women",
              current_sku_id: 17603500800775,
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
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                    marketing_tag_type: 1000,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                    tag_id: 91004,
                    text: "Only 3 left",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/649185c37556675d577708255edb07da41a8755egs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fmket/881c34d9a37032ee941b511a5001bb2f.jpeg",
                url: "https://img.kwcdn.com/product/2a70c7adac8d52c2138f7fd0a83ce130e7b6a8a7.temu.000001.jpeg",
              },
              title:
                "Women'S Vintage 1985 New York Lettering & 1985 Print Cardigan Jacket - Black & White Patchwork Zipper Front, Casual Winter Coat with Pockets, Fall Clothes For Women, Jacket For Women, Fall Outfits For Women, Autumn Clothes Women, Jackets For Women",
              sales_tip_text_list: [],
              display_end_time_percent: 52,
              sold_quantity_percent: 61,
              p_rec: {
                skc_id: "17595223811192",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1710603884",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw19tv6uOf8HAxfUr3UNy4WQQTYRSdOjTaHVWBc2dYs/jEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "4456216893672671940",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1710603884",
                g: "601102197900611",
                scene_id: "3",
                show_price: "2630",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "103",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "5592749635616432726",
                ts: "1763223031260",
              },
              activity_type: 13,
              mall_id: 2648221582378,
              sales_num: "8.7K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102197900611&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F881c34d9a37032ee941b511a5001bb2f.jpeg&spec_id=147390&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjYzMA&_oak_gallery_order=1710603884%2C2104033928%2C446526775&spec_ids=147390,2&_oak_mp_inf=EMOK65ew1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
              selected_spec_ids: [147390, 2],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601102197900611&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F881c34d9a37032ee941b511a5001bb2f.jpeg&spec_id=147390&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjYzMA&_oak_gallery_order=1710603884%2C2104033928%2C446526775&spec_ids=147390,2&_oak_mp_inf=EMOK65ew1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112710447203665219",
                sku_extra_param: {
                  _oak_gallery_order: "1710603884,2104033928,446526775",
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
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 3 left",
                  tag_series: 2,
                },
              ],
              show_index: 103,
              price_info: {
                reduction_text: ["-23", "%"],
                market_price_type: 1,
                price_text: ["CA$", "26.30", ""],
                price_str: "CA$26.30",
                price_color: "#FB7701",
                split_price_text: ["CA$", "26", ".30", ""],
                currency_str: "CA$",
                price: 2630,
                market_price_str: "34.18",
                market_price: 3418,
                price_schema: "26.30",
                currency: "CAD",
                reduction: 230,
                market_price_text: ["", "34.18", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1340,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 1,
                url_id: "4456216893672671940",
                url: "https://img.kwcdn.com/product/fmket/881c34d9a37032ee941b511a5001bb2f.jpeg",
                height: 1785,
              },
              sales_tip: "8.7K+ sold",
              visible: true,
              goods_id: 601102197900611,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "26", ".30", ""],
                    reduction_text: ["-23", "%"],
                    price: 2630,
                    market_price_str: "34.18",
                    market_price: 3418,
                    price_schema: "26.30",
                    currency: "CAD",
                    price_text: ["CA$", "26.30", ""],
                    price_str: "CA$26.30",
                    price_color: "#FB7701",
                    reduction: 230,
                    market_price_text: ["", "34.18", ""],
                  },
                  image: {
                    width: 1340,
                    id: 1,
                    url: "https://img.kwcdn.com/product/fmket/881c34d9a37032ee941b511a5001bb2f.jpeg",
                    height: 1785,
                  },
                  color: "",
                  seo_link_url:
                    "/ca/womens-vintage-1985--lettering-1985-print-cardigan-jacket-black-white--zipper-front-casual-winter-coat-with-pockets-fall-clothes-for-women-jacket-for-women-fall-outfits-for-women-autumn-clothes-women-jackets-for-women-g-601102197900611.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F881c34d9a37032ee941b511a5001bb2f.jpeg&spec_id=147390&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjYzMA&_oak_mp_inf=EMOK65ew1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  spec_id: 147390,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/3a3883c2-8d09-449b-88f4-01ec985cdb96.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102197900611&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F881c34d9a37032ee941b511a5001bb2f.jpeg&spec_id=147390&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjYzMA&_oak_mp_inf=EMOK65ew1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fmket/881c34d9a37032ee941b511a5001bb2f.jpeg",
                  price_str: "27.34",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "25", ".38", ""],
                    reduction_text: ["-25", "%"],
                    price: 2538,
                    market_price_str: "34.18",
                    market_price: 3418,
                    price_schema: "25.38",
                    currency: "CAD",
                    price_text: ["CA$", "25.38", ""],
                    price_str: "CA$25.38",
                    price_color: "#FB7701",
                    reduction: 250,
                    market_price_text: ["", "34.18", ""],
                  },
                  image: {
                    width: 1500,
                    id: 533541,
                    url: "https://img.kwcdn.com/product/algo_check/auto/29258226b9d0669b0128b8ad9506bd60_1762238940452.jpg",
                    height: 2000,
                  },
                  color: "(255,0,0,1)",
                  seo_link_url:
                    "/ca/womens-vintage-1985--lettering-1985-print-cardigan-jacket-black-white--zipper-front-casual-winter-coat-with-pockets-fall-clothes-for-women-jacket-for-women-fall-outfits-for-women-autumn-clothes-women-jackets-for-women-g-601102197900611.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Falgo_check%2Fauto%2F29258226b9d0669b0128b8ad9506bd60_1762238940452.jpg&spec_id=2&spec_gallery_id=533541&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUzOA&_oak_mp_inf=EMOK65ew1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  spec_id: 2,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/04de116e-eb3c-4e44-9d42-0bd09d2d7957.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102197900611&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Falgo_check%2Fauto%2F29258226b9d0669b0128b8ad9506bd60_1762238940452.jpg&spec_id=2&spec_gallery_id=533541&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUzOA&_oak_mp_inf=EMOK65ew1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/algo_check/auto/29258226b9d0669b0128b8ad9506bd60_1762238940452.jpg",
                  price_str: "26.42",
                },
              ],
              spec_ids: "147390,2",
              display_end_time: 1764392399,
              seo_link_url:
                "/ca/womens-vintage-1985--lettering-1985-print-cardigan-jacket-black-white--zipper-front-casual-winter-coat-with-pockets-fall-clothes-for-women-jacket-for-women-fall-outfits-for-women-autumn-clothes-women-jackets-for-women-g-601102197900611.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F881c34d9a37032ee941b511a5001bb2f.jpeg&spec_id=147390&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjYzMA&_oak_gallery_order=1710603884%2C2104033928%2C446526775&_oak_mp_inf=EMOK65ew1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D&spec_ids=147390,2",
              queryReleScore: 0.0,
              sales_tip_text: ["8.7K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 5.0,
                hidden_comment: true,
                comment_num_tips: "3",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/d816895f-897c-4129-aed6-8a821070a6fb.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/d816895f-897c-4129-aed6-8a821070a6fb.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-10%",
              },
              item_type: 0,
              page_alt:
                "womens elegant winter coat jacket sleeveless faux fur like texture with   buttons soft brown tones machine washable durable outerwear sophisticated style seasonal fashion warm fall winter outerwear for casual or formal events",
              current_sku_id: 17613805945507,
              tags_info: {},
              video: {
                video_url: "",
              },
              title:
                "Women'S Elegant Winter Coat Jacket - Sleeveless Faux Fur-like Texture with Golden-Tone Buttons, Soft & Brown Tones, Machine Washable, Durable Outerwear, Sophisticated Style, Seasonal Fashion, Warm Fall/Winter Outerwear for Casual or Formal Events",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17597619201871",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1932652346",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw2sA9NE6k3O3TAkU1bRVlh8hOcZ8AfgfqmidfxFwliFCEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "6137953002456508935",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1932652346",
                g: "601104241787751",
                scene_id: "3",
                show_price: "2965",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "104",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "7301610958984432079",
                ts: "1763223031260",
              },
              mall_id: 634418225659878,
              sales_num: "7.1K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601104241787751&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd816895f-897c-4129-aed6-8a821070a6fb.jpg&spec_id=15067&spec_gallery_id=494134&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk2NQ&_oak_gallery_order=1932652346%2C661476884%2C516184461%2C1593007741%2C1289223939&spec_ids=15067,2001,3002,16068&_oak_name_id=7301610958984432079&_oak_mp_inf=EOeGuOa31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
              selected_spec_ids: [15067, 2001, 3002, 16068],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601104241787751&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd816895f-897c-4129-aed6-8a821070a6fb.jpg&spec_id=15067&spec_gallery_id=494134&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk2NQ&_oak_gallery_order=1932652346%2C661476884%2C516184461%2C1593007741%2C1289223939&spec_ids=15067,2001,3002,16068&_oak_name_id=7301610958984432079&_oak_mp_inf=EOeGuOa31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "1932652346,661476884,516184461,1593007741,1289223939",
                  _oak_name_id: "7301610958984432079",
                },
              },
              goods_tags: [],
              show_index: 104,
              price_info: {
                split_price_text: ["CA$", "29", ".65", ""],
                currency_str: "CA$",
                reduction_text: ["-10", "%"],
                price: 2965,
                market_price_str: "33.01",
                market_price: 3301,
                market_price_type: 1,
                price_schema: "29.65",
                currency: "CAD",
                price_text: ["CA$", "29.65", ""],
                price_str: "CA$29.65",
                market_price_text: ["", "33.01", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1340,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 494134,
                url_id: "6137953002456508935",
                url: "https://img.kwcdn.com/product/fancy/d816895f-897c-4129-aed6-8a821070a6fb.jpg",
                height: 1785,
              },
              sales_tip: "7.1K+ sold",
              visible: true,
              goods_id: 601104241787751,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "29", ".65", ""],
                    reduction_text: [],
                    price: 2965,
                    market_price_str: "33.01",
                    market_price: 3301,
                    price_schema: "29.65",
                    currency: "CAD",
                    price_text: ["CA$", "29.65", ""],
                    price_str: "CA$29.65",
                    market_price_text: ["", "33.01", ""],
                  },
                  image: {
                    width: 1340,
                    id: 494134,
                    url: "https://img.kwcdn.com/product/fancy/d816895f-897c-4129-aed6-8a821070a6fb.jpg",
                    height: 1785,
                  },
                  color: "(195,176,145,1)",
                  seo_link_url:
                    "/ca/womens-elegant-winter-coat-jacket-sleeveless-faux-fur-like-texture-with--buttons-soft-brown-tones-machine-washable-durable-outerwear-sophisticated-style-seasonal-fashion-warm-fall-winter-outerwear-for-casual-or-formal-events-g-601104241787751.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd816895f-897c-4129-aed6-8a821070a6fb.jpg&spec_id=15067&spec_gallery_id=494134&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk2NQ&_oak_mp_inf=EOeGuOa31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  spec_id: 15067,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/9dd00324-53b7-4fbd-9117-4eab3a6c3d99.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104241787751&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd816895f-897c-4129-aed6-8a821070a6fb.jpg&spec_id=15067&spec_gallery_id=494134&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk2NQ&_oak_mp_inf=EOeGuOa31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/d816895f-897c-4129-aed6-8a821070a6fb.jpg",
                  price_str: "29.65",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "29", ".08", ""],
                    reduction_text: [],
                    price: 2908,
                    market_price_str: "35.41",
                    market_price: 3541,
                    price_schema: "29.08",
                    currency: "CAD",
                    price_text: ["CA$", "29.08", ""],
                    price_str: "CA$29.08",
                    market_price_text: ["", "35.41", ""],
                  },
                  image: {
                    width: 1340,
                    id: 494144,
                    url: "https://img.kwcdn.com/product/fancy/49825878-cab9-4843-8d50-7484597de431.jpg",
                    height: 1785,
                  },
                  color: "(255,255,255,1)",
                  seo_link_url:
                    "/ca/womens-elegant-winter-coat-jacket-sleeveless-faux-fur-like-texture-with--buttons-soft-brown-tones-machine-washable-durable-outerwear-sophisticated-style-seasonal-fashion-warm-fall-winter-outerwear-for-casual-or-formal-events-g-601104241787751.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F49825878-cab9-4843-8d50-7484597de431.jpg&spec_id=2001&spec_gallery_id=494144&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjkwOA&_oak_mp_inf=EOeGuOa31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  spec_id: 2001,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/e43bf76f-03d0-4330-ab56-b220e9163b09.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104241787751&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F49825878-cab9-4843-8d50-7484597de431.jpg&spec_id=2001&spec_gallery_id=494144&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjkwOA&_oak_mp_inf=EOeGuOa31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK6bocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/49825878-cab9-4843-8d50-7484597de431.jpg",
                  price_str: "29.08",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "29", ".48", ""],
                    reduction_text: [],
                    price: 2948,
                    market_price_str: "35.41",
                    market_price: 3541,
                    price_schema: "29.48",
                    currency: "CAD",
                    price_text: ["CA$", "29.48", ""],
                    price_str: "CA$29.48",
                    market_price_text: ["", "35.41", ""],
                  },
                  image: {
                    width: 1340,
                    id: 494129,
                    url: "https://img.kwcdn.com/product/fancy/ecb27fc3-16f7-411e-9a83-c22f02963134.jpg",
                    height: 1785,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-elegant-winter-coat-jacket-sleeveless-faux-fur-like-texture-with--buttons-soft-brown-tones-machine-washable-durable-outerwear-sophisticated-style-seasonal-fashion-warm-fall-winter-outerwear-for-casual-or-formal-events-g-601104241787751.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fecb27fc3-16f7-411e-9a83-c22f02963134.jpg&spec_id=3002&spec_gallery_id=494129&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk0OA&_oak_mp_inf=EOeGuOa31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/154d32fd-76d4-4d96-8f7d-a5a9d3381b78.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104241787751&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fecb27fc3-16f7-411e-9a83-c22f02963134.jpg&spec_id=3002&spec_gallery_id=494129&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk0OA&_oak_mp_inf=EOeGuOa31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/ecb27fc3-16f7-411e-9a83-c22f02963134.jpg",
                  price_str: "29.48",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "29", ".54", ""],
                    reduction_text: [],
                    price: 2954,
                    market_price_str: "35.41",
                    market_price: 3541,
                    price_schema: "29.54",
                    currency: "CAD",
                    price_text: ["CA$", "29.54", ""],
                    price_str: "CA$29.54",
                    market_price_text: ["", "35.41", ""],
                  },
                  image: {
                    width: 1340,
                    id: 494139,
                    url: "https://img.kwcdn.com/product/fancy/91182853-d4f4-446b-a86b-750fad6adc81.jpg",
                    height: 1785,
                  },
                  color: "(247,238,214,1)",
                  seo_link_url:
                    "/ca/womens-elegant-winter-coat-jacket-sleeveless-faux-fur-like-texture-with--buttons-soft-brown-tones-machine-washable-durable-outerwear-sophisticated-style-seasonal-fashion-warm-fall-winter-outerwear-for-casual-or-formal-events-g-601104241787751.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F91182853-d4f4-446b-a86b-750fad6adc81.jpg&spec_id=16068&spec_gallery_id=494139&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk1NA&_oak_mp_inf=EOeGuOa31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  spec_id: 16068,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/0237e8aa-11cc-44ad-bdf5-da3cad8382e3.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104241787751&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F91182853-d4f4-446b-a86b-750fad6adc81.jpg&spec_id=16068&spec_gallery_id=494139&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk1NA&_oak_mp_inf=EOeGuOa31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/91182853-d4f4-446b-a86b-750fad6adc81.jpg",
                  price_str: "29.54",
                },
              ],
              spec_ids: "15067,2001,3002,16068",
              seo_link_url:
                "/ca/womens-elegant-winter-coat-jacket-sleeveless-faux-fur-like-texture-with--buttons-soft-brown-tones-machine-washable-durable-outerwear-sophisticated-style-seasonal-fashion-warm-fall-winter-outerwear-for-casual-or-formal-events-g-601104241787751.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd816895f-897c-4129-aed6-8a821070a6fb.jpg&spec_id=15067&spec_gallery_id=494134&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk2NQ&_oak_gallery_order=1932652346%2C661476884%2C516184461%2C1593007741%2C1289223939&_oak_name_id=7301610958984432079&_oak_mp_inf=EOeGuOa31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D&spec_ids=15067,2001,3002,16068",
              queryReleScore: 0.0,
              sales_tip_text: ["7.1K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 5.0,
                hidden_comment: true,
                comment_num_tips: "2",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/191dc190-cead-4ecf-8e4e-10aae2e6293a.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/191dc190-cead-4ecf-8e4e-10aae2e6293a.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-17%",
              },
              item_type: 0,
              page_alt:
                "womens black   full zip hooded jacket with   brand pocket heavy duty winter ready windproof coat for skiing snowboarding outdoor s casual to professional machine washable",
              current_sku_id: 17614623476831,
              tags_info: {
                goods_tags: [
                  {
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"NEW ARRIVAL","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Women\'s Coats & Jackets","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"New product","ranking_opt_id":"721"},"impr":{"ranking_type":"New product","ranking_opt_id":"721"}}}',
                    },
                    footer: {
                      color: "#555555",
                      text: " in Women's Coats & Jackets",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "NEW ARRIVAL",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "New product",
                    ranking_id: "721",
                  },
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "Women's Black All-Season/Full-Zip Hooded Jacket with Pink Logo & Brand Pocket/Heavy-Duty Winter-Ready Windproof Coat for Skiing, Snowboarding, Outdoors/Casual to Professional (Machine Washable)",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17597813233401",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "301063615",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw2Wl3ZZGWf9IvnpV1PQeHdHwxbaheaFmGTyNZWRTkOLXEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "4397846093245250096",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "301063615",
                g: "601104408254749",
                scene_id: "3",
                show_price: "2888",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "105",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "5182041040679713375",
                ts: "1763223031260",
              },
              mall_id: 634418220075423,
              sales_num: "8.5K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601104408254749&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F191dc190-cead-4ecf-8e4e-10aae2e6293a.jpg&spec_id=3002&spec_gallery_id=481785&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjg4OA&_oak_gallery_order=301063615%2C1855415716%2C1279341776&spec_ids=3002&_oak_name_id=5182041040679713375&_oak_mp_inf=EJ2y6LW41ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
              selected_spec_ids: [3002],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601104408254749&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F191dc190-cead-4ecf-8e4e-10aae2e6293a.jpg&spec_id=3002&spec_gallery_id=481785&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjg4OA&_oak_gallery_order=301063615%2C1855415716%2C1279341776&spec_ids=3002&_oak_name_id=5182041040679713375&_oak_mp_inf=EJ2y6LW41ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order: "301063615,1855415716,1279341776",
                  _oak_name_id: "5182041040679713375",
                },
              },
              goods_tags: [
                {
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"NEW ARRIVAL","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Women\'s Coats & Jackets","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"New product","ranking_opt_id":"721"},"impr":{"ranking_type":"New product","ranking_opt_id":"721"}}}',
                  },
                  footer: {
                    color: "#555555",
                    text: " in Women's Coats & Jackets",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "NEW ARRIVAL",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "New product",
                  ranking_id: "721",
                },
              ],
              show_index: 105,
              price_info: {
                split_price_text: ["CA$", "28", ".88", ""],
                currency_str: "CA$",
                reduction_text: ["-17", "%"],
                price: 2888,
                market_price_str: "34.95",
                market_price: 3495,
                market_price_type: 2,
                price_schema: "28.88",
                currency: "CAD",
                price_text: ["CA$", "28.88", ""],
                price_str: "CA$28.88",
                market_price_text: ["", "34.95", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 481785,
                url_id: "4397846093245250096",
                url: "https://img.kwcdn.com/product/fancy/191dc190-cead-4ecf-8e4e-10aae2e6293a.jpg",
                height: 1800,
              },
              sales_tip: "8.5K+ sold",
              visible: true,
              goods_id: 601104408254749,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "28", ".88", ""],
                    reduction_text: [],
                    price: 2888,
                    market_price_str: "34.95",
                    market_price: 3495,
                    price_schema: "28.88",
                    currency: "CAD",
                    price_text: ["CA$", "28.88", ""],
                    price_str: "CA$28.88",
                    market_price_text: ["", "34.95", ""],
                  },
                  image: {
                    width: 1350,
                    id: 481785,
                    url: "https://img.kwcdn.com/product/fancy/191dc190-cead-4ecf-8e4e-10aae2e6293a.jpg",
                    height: 1800,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-black--full-zip-hooded-jacket-with--brand-pocket-heavy-duty-winter-ready-windproof-coat-for-skiing-snowboarding-outdoor-s-casual-to-professional-machine-washable-g-601104408254749.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F191dc190-cead-4ecf-8e4e-10aae2e6293a.jpg&spec_id=3002&spec_gallery_id=481785&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjg4OA&_oak_mp_inf=EJ2y6LW41ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/566fd947-7336-4af2-9365-0cef39db1929.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104408254749&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F191dc190-cead-4ecf-8e4e-10aae2e6293a.jpg&spec_id=3002&spec_gallery_id=481785&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjg4OA&_oak_mp_inf=EJ2y6LW41ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/191dc190-cead-4ecf-8e4e-10aae2e6293a.jpg",
                  price_str: "28.88",
                },
              ],
              spec_ids: "3002",
              seo_link_url:
                "/ca/womens-black--full-zip-hooded-jacket-with--brand-pocket-heavy-duty-winter-ready-windproof-coat-for-skiing-snowboarding-outdoor-s-casual-to-professional-machine-washable-g-601104408254749.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F191dc190-cead-4ecf-8e4e-10aae2e6293a.jpg&spec_id=3002&spec_gallery_id=481785&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjg4OA&_oak_gallery_order=301063615%2C1855415716%2C1279341776&_oak_name_id=5182041040679713375&_oak_mp_inf=EJ2y6LW41ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D&spec_ids=3002",
              queryReleScore: 0.0,
              sales_tip_text: ["8.5K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 5.0,
                hidden_comment: true,
                comment_num_tips: "2",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/068080f5-5f1c-47ca-a642-9a60bcf32747.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/068080f5-5f1c-47ca-a642-9a60bcf32747.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-82%",
              },
              item_type: 0,
              page_alt:
                "vintage inspired long sleeve suede jacket for women chic stand collar with front buttons soft deer velvet texture ideal for   fashion versatile jacket vintage jacket delicate   suede jacket",
              current_sku_id: 17592863060237,
              tags_info: {
                goods_tags: [
                  {
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Women\'s Coats & Jackets","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"721"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"721"}}}',
                    },
                    footer: {
                      color: "#555555",
                      text: " in Women's Coats & Jackets",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "TOP RATED",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "Top rated",
                    ranking_id: "721",
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/c9dc4bd220af91930bc7c88a43677fd69db7e7cb.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/068080f5-5f1c-47ca-a642-9a60bcf32747.jpg",
                url: "https://img.kwcdn.com/product/a0402e1ef95a57ca25825f7e1055d88d718b54f8.goods.000001.jpeg",
              },
              title:
                "Chic Soft Suede Jacket - Vintage-Inspired Long Sleeve for Women - Front Buttons, Deer Velvet Texture, Ideal for Spring/Fall Fashion, Versatile Jacket|Vintage Jacket|Delicate Craftsmanship",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17592388321453",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "614776641",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw26GL8AZv94CjUDsSSBc0EgeAQ1QagkqeULitDBhaXmbEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "7119031958475864199",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "614776641",
                g: "601099688047248",
                scene_id: "3",
                show_price: "2373",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "106",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "3948634420687514654",
                ts: "1763223031260",
              },
              mall_id: 634418215534439,
              sales_num: "5.4K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099688047248&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F068080f5-5f1c-47ca-a642-9a60bcf32747.jpg&spec_id=16110&spec_gallery_id=12704&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM3Mw&_oak_gallery_order=614776641%2C853634429%2C1868421146%2C2038346375%2C543271568&spec_ids=16110,3002,16098,16068&_oak_name_id=3948634420687514654&_oak_mp_inf=EJDlheum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
              selected_spec_ids: [16110, 3002, 16098, 16068],
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099688047248&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F068080f5-5f1c-47ca-a642-9a60bcf32747.jpg&spec_id=16110&spec_gallery_id=12704&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM3Mw&_oak_gallery_order=614776641%2C853634429%2C1868421146%2C2038346375%2C543271568&spec_ids=16110,3002,16098,16068&_oak_name_id=3948634420687514654&_oak_mp_inf=EJDlheum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "614776641,853634429,1868421146,2038346375,543271568",
                  _oak_name_id: "3948634420687514654",
                },
              },
              goods_tags: [
                {
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Women\'s Coats & Jackets","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"721"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"721"}}}',
                  },
                  footer: {
                    color: "#555555",
                    text: " in Women's Coats & Jackets",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "TOP RATED",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "Top rated",
                  ranking_id: "721",
                },
              ],
              show_index: 106,
              price_info: {
                split_price_text: ["CA$", "23", ".73", ""],
                currency_str: "CA$",
                reduction_text: ["-82", "%"],
                price: 2373,
                market_price_str: "139.23",
                market_price: 13923,
                market_price_type: 1,
                price_schema: "23.73",
                currency: "CAD",
                price_text: ["CA$", "23.73", ""],
                price_str: "CA$23.73",
                market_price_text: ["", "139.23", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 12704,
                url_id: "7119031958475864199",
                url: "https://img.kwcdn.com/product/fancy/068080f5-5f1c-47ca-a642-9a60bcf32747.jpg",
                height: 1800,
              },
              sales_tip: "5.4K+ sold",
              visible: true,
              goods_id: 601099688047248,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "23", ".73", ""],
                    reduction_text: [],
                    price: 2373,
                    market_price_str: "139.23",
                    market_price: 13923,
                    price_schema: "23.73",
                    currency: "CAD",
                    price_text: ["CA$", "23.73", ""],
                    price_str: "CA$23.73",
                    market_price_text: ["", "139.23", ""],
                  },
                  image: {
                    width: 1350,
                    id: 12704,
                    url: "https://img.kwcdn.com/product/fancy/068080f5-5f1c-47ca-a642-9a60bcf32747.jpg",
                    height: 1800,
                  },
                  color: "(176,119,72,1)",
                  seo_link_url:
                    "/ca/vintage-inspired-long-sleeve-suede-jacket-for-women-chic-stand-collar-with-front-buttons-soft-deer-velvet-texture-ideal-for--fashion-versatile-jacket-vintage-jacket-delicate--suede-jacket-g-601099688047248.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F068080f5-5f1c-47ca-a642-9a60bcf32747.jpg&spec_id=16110&spec_gallery_id=12704&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM3Mw&_oak_mp_inf=EJDlheum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  spec_id: 16110,
                  color_image: "",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601099688047248&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F068080f5-5f1c-47ca-a642-9a60bcf32747.jpg&spec_id=16110&spec_gallery_id=12704&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM3Mw&_oak_mp_inf=EJDlheum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/068080f5-5f1c-47ca-a642-9a60bcf32747.jpg",
                  price_str: "23.73",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "23", ".76", ""],
                    reduction_text: [],
                    price: 2376,
                    market_price_str: "130.08",
                    market_price: 13008,
                    price_schema: "23.76",
                    currency: "CAD",
                    price_text: ["CA$", "23.76", ""],
                    price_str: "CA$23.76",
                    market_price_text: ["", "130.08", ""],
                  },
                  image: {
                    width: 1350,
                    id: 22802,
                    url: "https://img.kwcdn.com/product/fancy/18d537eb-915d-49a5-ac83-0ea46dd4723f.jpg",
                    height: 1800,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/vintage-inspired-long-sleeve-suede-jacket-for-women-chic-stand-collar-with-front-buttons-soft-deer-velvet-texture-ideal-for--fashion-versatile-jacket-vintage-jacket-delicate--suede-jacket-g-601099688047248.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F18d537eb-915d-49a5-ac83-0ea46dd4723f.jpg&spec_id=3002&spec_gallery_id=22802&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM3Ng&_oak_mp_inf=EJDlheum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/027061cc-76ba-4d58-843a-8144fb6bc33d.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601099688047248&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F18d537eb-915d-49a5-ac83-0ea46dd4723f.jpg&spec_id=3002&spec_gallery_id=22802&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM3Ng&_oak_mp_inf=EJDlheum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/18d537eb-915d-49a5-ac83-0ea46dd4723f.jpg",
                  price_str: "23.76",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "23", ".76", ""],
                    reduction_text: [],
                    price: 2376,
                    market_price_str: "139.23",
                    market_price: 13923,
                    price_schema: "23.76",
                    currency: "CAD",
                    price_text: ["CA$", "23.76", ""],
                    price_str: "CA$23.76",
                    market_price_text: ["", "139.23", ""],
                  },
                  image: {
                    width: 1350,
                    id: 22807,
                    url: "https://img.kwcdn.com/product/fancy/b14b90ca-9bc6-49f8-a18b-ea59e0a0a5a2.jpg",
                    height: 1800,
                  },
                  color: "(78,96,20,1)",
                  seo_link_url:
                    "/ca/vintage-inspired-long-sleeve-suede-jacket-for-women-chic-stand-collar-with-front-buttons-soft-deer-velvet-texture-ideal-for--fashion-versatile-jacket-vintage-jacket-delicate--suede-jacket-g-601099688047248.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fb14b90ca-9bc6-49f8-a18b-ea59e0a0a5a2.jpg&spec_id=16098&spec_gallery_id=22807&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM3Ng&_oak_mp_inf=EJDlheum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  spec_id: 16098,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/f3cd8114-cd02-45d7-98ef-4eac5439f616.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601099688047248&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fb14b90ca-9bc6-49f8-a18b-ea59e0a0a5a2.jpg&spec_id=16098&spec_gallery_id=22807&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM3Ng&_oak_mp_inf=EJDlheum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/b14b90ca-9bc6-49f8-a18b-ea59e0a0a5a2.jpg",
                  price_str: "23.76",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "23", ".76", ""],
                    reduction_text: [],
                    price: 2376,
                    market_price_str: "139.23",
                    market_price: 13923,
                    price_schema: "23.76",
                    currency: "CAD",
                    price_text: ["CA$", "23.76", ""],
                    price_str: "CA$23.76",
                    market_price_text: ["", "139.23", ""],
                  },
                  image: {
                    width: 3000,
                    id: 49854,
                    url: "https://img.kwcdn.com/product/fancy/fa2edb38-93d9-48c2-9f57-fd17ecbc6efa.jpg",
                    height: 4000,
                  },
                  color: "(247,238,214,1)",
                  seo_link_url:
                    "/ca/vintage-inspired-long-sleeve-suede-jacket-for-women-chic-stand-collar-with-front-buttons-soft-deer-velvet-texture-ideal-for--fashion-versatile-jacket-vintage-jacket-delicate--suede-jacket-g-601099688047248.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa2edb38-93d9-48c2-9f57-fd17ecbc6efa.jpg&spec_id=16068&spec_gallery_id=49854&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM3Ng&_oak_mp_inf=EJDlheum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  spec_id: 16068,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/8fc0e34c-2525-4e17-b4b4-f2b80a3b3b94.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601099688047248&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa2edb38-93d9-48c2-9f57-fd17ecbc6efa.jpg&spec_id=16068&spec_gallery_id=49854&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM3Ng&_oak_mp_inf=EJDlheum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/fa2edb38-93d9-48c2-9f57-fd17ecbc6efa.jpg",
                  price_str: "23.76",
                },
              ],
              spec_ids: "16110,3002,16098,16068",
              seo_link_url:
                "/ca/vintage-inspired-long-sleeve-suede-jacket-for-women-chic-stand-collar-with-front-buttons-soft-deer-velvet-texture-ideal-for--fashion-versatile-jacket-vintage-jacket-delicate--suede-jacket-g-601099688047248.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F068080f5-5f1c-47ca-a642-9a60bcf32747.jpg&spec_id=16110&spec_gallery_id=12704&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM3Mw&_oak_gallery_order=614776641%2C853634429%2C1868421146%2C2038346375%2C543271568&_oak_name_id=3948634420687514654&_oak_mp_inf=EJDlheum1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D&spec_ids=16110,3002,16098,16068",
              queryReleScore: 0.0,
              sales_tip_text: ["5.4K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: false,
                comment_num_tips: "2,113",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/open/2024-07-23/1721706634986-734cad443a3d4e5792c4c71b92360e00-goods.jpeg",
              thumb_url:
                "https://img.kwcdn.com/product/open/2024-07-23/1721706634986-734cad443a3d4e5792c4c71b92360e00-goods.jpeg",
              after_price_tip_text: ["20", "viewed"],
              ware_house_type: 1,
              benefit_text: {
                text: "-21%",
              },
              item_type: 0,
              page_alt:
                "womens   fluffy fleece jacket with full zip closure folded collar warm winter coat long sleeve casual outerwear soft fleece lining solid color brown   for everyday special occasions versatile   wear",
              current_sku_id: 17615743817686,
              tags_info: {
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {},
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
                    color: "#FB7701",
                    ext_map: {
                      stock_type: "1",
                      simply_stock_tag_text: "2 LEFT!",
                    },
                    prompt_tag_text:
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                    marketing_tag_type: 1000,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                    tag_id: 91004,
                    text: "Only 2 left",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "Women'S All-Season Fluffy Fleece Jacket with Full-Zip Closure & Folded Collar - Warm Winter Coat, Long Sleeve Casual Outerwear, Soft Fleece Lining, Solid Color (Brown Shown) for Everyday & Special Occasions, Versatile All-Season Wear",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17598083517997",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1923652088",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw2sRNH7HEEvIwxKz3yzJL5ruuVedx9FBQU2bXORMwytiEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "2576892643356295018",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1923652088",
                g: "601104643150761",
                scene_id: "3",
                show_price: "3005",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "107",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "521160374942772327",
                ts: "1763223031261",
              },
              mall_id: 634418224248982,
              sales_num: "0",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601104643150761&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-07-23%2F1721706634986-734cad443a3d4e5792c4c71b92360e00-goods.jpeg&spec_id=2001&spec_gallery_id=508411&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzAwNQ&_oak_gallery_order=1923652088%2C1713264614%2C1501064475%2C543371480%2C809862918&spec_ids=2001&_oak_mp_inf=EKmn6aW51ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
              selected_spec_ids: [2001],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601104643150761&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-07-23%2F1721706634986-734cad443a3d4e5792c4c71b92360e00-goods.jpeg&spec_id=2001&spec_gallery_id=508411&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzAwNQ&_oak_gallery_order=1923652088%2C1713264614%2C1501064475%2C543371480%2C809862918&spec_ids=2001&_oak_mp_inf=EKmn6aW51ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "1923652088,1713264614,1501064475,543371480,809862918",
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
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 2 left",
                  tag_series: 2,
                },
              ],
              show_index: 107,
              price_info: {
                split_price_text: ["CA$", "30", ".05", ""],
                currency_str: "CA$",
                reduction_text: ["-21", "%"],
                price: 3005,
                market_price_str: "38.14",
                market_price: 3814,
                market_price_type: 1,
                price_schema: "30.05",
                currency: "CAD",
                price_text: ["CA$", "30.05", ""],
                price_str: "CA$30.05",
                market_price_text: ["", "38.14", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1500,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 508411,
                url_id: "2576892643356295018",
                url: "https://img.kwcdn.com/product/open/2024-07-23/1721706634986-734cad443a3d4e5792c4c71b92360e00-goods.jpeg",
                height: 2000,
              },
              sales_tip: "",
              visible: true,
              goods_id: 601104643150761,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "30", ".05", ""],
                    reduction_text: [],
                    price: 3005,
                    market_price_str: "38.14",
                    market_price: 3814,
                    price_schema: "30.05",
                    currency: "CAD",
                    price_text: ["CA$", "30.05", ""],
                    price_str: "CA$30.05",
                    market_price_text: ["", "38.14", ""],
                  },
                  image: {
                    width: 1500,
                    id: 508411,
                    url: "https://img.kwcdn.com/product/open/2024-07-23/1721706634986-734cad443a3d4e5792c4c71b92360e00-goods.jpeg",
                    height: 2000,
                  },
                  color: "(255,255,255,1)",
                  seo_link_url:
                    "/ca/womens--fluffy-fleece-jacket-with-full-zip-closure-folded-collar-warm-winter-coat-long-sleeve-casual-outerwear-soft-fleece-lining-solid-color-brown--for-everyday-special-occasions-versatile--wear-g-601104643150761.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-07-23%2F1721706634986-734cad443a3d4e5792c4c71b92360e00-goods.jpeg&spec_id=2001&spec_gallery_id=508411&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzAwNQ&_oak_mp_inf=EKmn6aW51ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  spec_id: 2001,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/16d4bb45-6c10-4580-bbe6-dc07c42f0453.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104643150761&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-07-23%2F1721706634986-734cad443a3d4e5792c4c71b92360e00-goods.jpeg&spec_id=2001&spec_gallery_id=508411&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzAwNQ&_oak_mp_inf=EKmn6aW51ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/open/2024-07-23/1721706634986-734cad443a3d4e5792c4c71b92360e00-goods.jpeg",
                  price_str: "30.05",
                },
              ],
              spec_ids: "2001",
              seo_link_url:
                "/ca/womens--fluffy-fleece-jacket-with-full-zip-closure-folded-collar-warm-winter-coat-long-sleeve-casual-outerwear-soft-fleece-lining-solid-color-brown--for-everyday-special-occasions-versatile--wear-g-601104643150761.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-07-23%2F1721706634986-734cad443a3d4e5792c4c71b92360e00-goods.jpeg&spec_id=2001&spec_gallery_id=508411&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzAwNQ&_oak_gallery_order=1923652088%2C1713264614%2C1501064475%2C543371480%2C809862918&_oak_mp_inf=EKmn6aW51ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D&spec_ids=2001",
              queryReleScore: 0.0,
              sales_tip_text: [],
              opt_type: 3,
              comment: {},
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fmket/f51c1cec9f3ebb20216d0243dc847808.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fmket/f51c1cec9f3ebb20216d0243dc847808.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-26%",
              },
              item_type: 0,
              page_alt:
                "womens elegant   coat thick winter warm collar   classic notch collar   beige tartan print   outerwear for fall winter machine washable non stretch casual to",
              current_sku_id: 17605287277546,
              tags_info: {
                goods_tags: [
                  {
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"NEW ARRIVAL","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Women\'s Coats & Jackets","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"New product","ranking_opt_id":"721"},"impr":{"ranking_type":"New product","ranking_opt_id":"721"}}}',
                    },
                    footer: {
                      color: "#555555",
                      text: " in Women's Coats & Jackets",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "NEW ARRIVAL",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "New product",
                    ranking_id: "721",
                  },
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "Women's Elegant Plaid Jacket Coat - Thick Winter Warm Collar & Lapels, Classic Notch Collar, Brown/Black/Beige Tartan Print, Structured Outerwear for Fall/Winter, Machine Washable (Non-Stretch) Casual to",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17595642036384",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "883610505",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw33JfAYvXYLRDH0v2NI3l1ufHi7cs6wYzaY807TVclDuEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "4258415456818436824",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "883610505",
                g: "601102558908756",
                scene_id: "3",
                show_price: "3809",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "108",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "4078556856369187641",
                ts: "1763223031261",
              },
              mall_id: 59105422641,
              sales_num: "6.9K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102558908756&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Ff51c1cec9f3ebb20216d0243dc847808.jpg&spec_id=15099&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgwOQ&_oak_gallery_order=883610505%2C489606875%2C128662992%2C1078989590%2C1251722258&spec_ids=15099&_oak_name_id=4078556856369187641&_oak_mp_inf=ENSi%2FcOx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
              selected_spec_ids: [15099],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601102558908756&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Ff51c1cec9f3ebb20216d0243dc847808.jpg&spec_id=15099&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgwOQ&_oak_gallery_order=883610505%2C489606875%2C128662992%2C1078989590%2C1251722258&spec_ids=15099&_oak_name_id=4078556856369187641&_oak_mp_inf=ENSi%2FcOx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "883610505,489606875,128662992,1078989590,1251722258",
                  _oak_name_id: "4078556856369187641",
                },
              },
              goods_tags: [
                {
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"NEW ARRIVAL","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Women\'s Coats & Jackets","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"New product","ranking_opt_id":"721"},"impr":{"ranking_type":"New product","ranking_opt_id":"721"}}}',
                  },
                  footer: {
                    color: "#555555",
                    text: " in Women's Coats & Jackets",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "NEW ARRIVAL",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "New product",
                  ranking_id: "721",
                },
              ],
              show_index: 108,
              price_info: {
                split_price_text: ["CA$", "38", ".09", ""],
                currency_str: "CA$",
                reduction_text: ["-26", "%"],
                price: 3809,
                market_price_str: "51.83",
                market_price: 5183,
                market_price_type: 1,
                price_schema: "38.09",
                currency: "CAD",
                price_text: ["CA$", "38.09", ""],
                price_str: "CA$38.09",
                market_price_text: ["", "51.83", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 1,
                url_id: "4258415456818436824",
                url: "https://img.kwcdn.com/product/fmket/f51c1cec9f3ebb20216d0243dc847808.jpg",
                height: 1800,
              },
              sales_tip: "6.9K+ sold",
              visible: true,
              goods_id: 601102558908756,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "38", ".09", ""],
                    reduction_text: [],
                    price: 3809,
                    market_price_str: "51.83",
                    market_price: 5183,
                    price_schema: "38.09",
                    currency: "CAD",
                    price_text: ["CA$", "38.09", ""],
                    price_str: "CA$38.09",
                    market_price_text: ["", "51.83", ""],
                  },
                  image: {
                    width: 1350,
                    id: 1,
                    url: "https://img.kwcdn.com/product/fmket/f51c1cec9f3ebb20216d0243dc847808.jpg",
                    height: 1800,
                  },
                  color: "(210,105,30,1)",
                  seo_link_url:
                    "/ca/womens-elegant--coat-thick-winter-warm-collar--classic-notch-collar--beige-tartan-print--outerwear-for-fall-winter-machine-washable-non-stretch-casual-to-g-601102558908756.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Ff51c1cec9f3ebb20216d0243dc847808.jpg&spec_id=15099&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgwOQ&_oak_mp_inf=ENSi%2FcOx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  spec_id: 15099,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/9d51ce85-e163-4417-8361-6ebdbaa8586d.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102558908756&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Ff51c1cec9f3ebb20216d0243dc847808.jpg&spec_id=15099&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgwOQ&_oak_mp_inf=ENSi%2FcOx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fmket/f51c1cec9f3ebb20216d0243dc847808.jpg",
                  price_str: "38.09",
                },
              ],
              spec_ids: "15099",
              seo_link_url:
                "/ca/womens-elegant--coat-thick-winter-warm-collar--classic-notch-collar--beige-tartan-print--outerwear-for-fall-winter-machine-washable-non-stretch-casual-to-g-601102558908756.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2Ff51c1cec9f3ebb20216d0243dc847808.jpg&spec_id=15099&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgwOQ&_oak_gallery_order=883610505%2C489606875%2C128662992%2C1078989590%2C1251722258&_oak_name_id=4078556856369187641&_oak_mp_inf=ENSi%2FcOx1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwIK%2BbocKoMw%3D%3D&spec_ids=15099",
              queryReleScore: 0.0,
              sales_tip_text: ["6.9K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.5,
                hidden_comment: true,
                comment_num_tips: "10",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/13f553c8-d7e3-47cd-8808-9c62a26288c7.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/13f553c8-d7e3-47cd-8808-9c62a26288c7.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-5%",
              },
              item_type: 0,
              page_alt:
                "womens elegant beige lapel jacket   tailored   with notch collar   fit machine washable professional coat for office or casual wear trench coat",
              current_sku_id: 17610406168786,
              tags_info: {},
              video: {
                video_url: "",
              },
              title:
                "Women's Elegant Beige Lapel Jacket - All-Season Tailored Blazer with Notch Collar & Structured Fit, Machine Washable Professional Coat for, Office, or Casual Wear - Trench Coat",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17596817671430",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1837942721",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxwzU4s8/RVxLzMBrIdeyw2KXJWeA2i8XejnwPPVaPCTZlEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "2332331291920812359",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1837942721",
                g: "601103555668743",
                scene_id: "3",
                show_price: "6604",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "109",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "9191684952365356920",
                ts: "1763223031261",
              },
              mall_id: 634418217955144,
              sales_num: "1.3K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601103555668743&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F13f553c8-d7e3-47cd-8808-9c62a26288c7.jpg&spec_id=16068&spec_gallery_id=482618&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjYwNA&_oak_gallery_order=1837942721%2C618850060%2C1068448882&spec_ids=16068&_oak_name_id=9191684952365356920&_oak_mp_inf=EIfWop%2B11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILCbocKoMw%3D%3D",
              selected_spec_ids: [16068],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601103555668743&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F13f553c8-d7e3-47cd-8808-9c62a26288c7.jpg&spec_id=16068&spec_gallery_id=482618&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjYwNA&_oak_gallery_order=1837942721%2C618850060%2C1068448882&spec_ids=16068&_oak_name_id=9191684952365356920&_oak_mp_inf=EIfWop%2B11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILCbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order: "1837942721,618850060,1068448882",
                  _oak_name_id: "9191684952365356920",
                },
              },
              goods_tags: [],
              show_index: 109,
              price_info: {
                split_price_text: ["CA$", "66", ".04", ""],
                currency_str: "CA$",
                reduction_text: ["-5", "%"],
                price: 6604,
                market_price_str: "69.78",
                market_price: 6978,
                market_price_type: 2,
                price_schema: "66.04",
                currency: "CAD",
                price_text: ["CA$", "66.04", ""],
                price_str: "CA$66.04",
                market_price_text: ["", "69.78", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 482618,
                url_id: "2332331291920812359",
                url: "https://img.kwcdn.com/product/fancy/13f553c8-d7e3-47cd-8808-9c62a26288c7.jpg",
                height: 1800,
              },
              sales_tip: "1.3K+ sold",
              visible: true,
              goods_id: 601103555668743,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "66", ".04", ""],
                    reduction_text: [],
                    price: 6604,
                    market_price_str: "69.78",
                    market_price: 6978,
                    price_schema: "66.04",
                    currency: "CAD",
                    price_text: ["CA$", "66.04", ""],
                    price_str: "CA$66.04",
                    market_price_text: ["", "69.78", ""],
                  },
                  image: {
                    width: 1350,
                    id: 482618,
                    url: "https://img.kwcdn.com/product/fancy/13f553c8-d7e3-47cd-8808-9c62a26288c7.jpg",
                    height: 1800,
                  },
                  color: "(247,238,214,1)",
                  seo_link_url:
                    "/ca/womens-elegant-beige-lapel-jacket--tailored--with-notch-collar--fit-machine-washable-professional-coat-for-office-or-casual-wear-trench-coat-g-601103555668743.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F13f553c8-d7e3-47cd-8808-9c62a26288c7.jpg&spec_id=16068&spec_gallery_id=482618&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjYwNA&_oak_mp_inf=EIfWop%2B11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILCbocKoMw%3D%3D",
                  spec_id: 16068,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/1132f601-97c4-4c3d-a578-11c109bb3e1e.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601103555668743&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F13f553c8-d7e3-47cd-8808-9c62a26288c7.jpg&spec_id=16068&spec_gallery_id=482618&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjYwNA&_oak_mp_inf=EIfWop%2B11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILCbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/13f553c8-d7e3-47cd-8808-9c62a26288c7.jpg",
                  price_str: "66.04",
                },
              ],
              spec_ids: "16068",
              seo_link_url:
                "/ca/womens-elegant-beige-lapel-jacket--tailored--with-notch-collar--fit-machine-washable-professional-coat-for-office-or-casual-wear-trench-coat-g-601103555668743.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F13f553c8-d7e3-47cd-8808-9c62a26288c7.jpg&spec_id=16068&spec_gallery_id=482618&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjYwNA&_oak_gallery_order=1837942721%2C618850060%2C1068448882&_oak_name_id=9191684952365356920&_oak_mp_inf=EIfWop%2B11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILCbocKoMw%3D%3D&spec_ids=16068",
              queryReleScore: 0.0,
              sales_tip_text: ["1.3K+", "sold"],
              opt_type: 3,
              comment: {},
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/8f3dfff0-0e5f-41f3-8741-51d01053725e.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/8f3dfff0-0e5f-41f3-8741-51d01053725e.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-46%",
              },
              item_type: 0,
              page_alt:
                "womens winter coat long length cold weather jacket with full zip front closure loose fit hooded outerwear non stretch fabric for everyday formal events ladies winter coats",
              current_sku_id: 17615116970785,
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
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                    marketing_tag_type: 1000,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                    tag_id: 91004,
                    text: "Only 9 left",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "Women'S Winter Coat - Long Length Cold Weather Jacket with Full-Zip Front Closure, Loose Fit Hooded Outerwear, Non-Stretch Fabric for Everyday & Formal Events, Ladies Winter Coats",
              sales_tip_text_list: [],
              display_end_time_percent: 48,
              sold_quantity_percent: 0,
              p_rec: {
                skc_id: "17597931826367",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "572923868",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxww/3uG5d2+UTfKD0ZYAb5Y5IJourBEwWJMSiBwd9HAZjEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "6385746003997024733",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "572923868",
                g: "601101923947593",
                scene_id: "3",
                show_price: "3884",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "110",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "5188223663662800614",
                ts: "1763223031261",
              },
              activity_type: 13,
              mall_id: 634418222936978,
              sales_num: "4.8K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601101923947593&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8f3dfff0-0e5f-41f3-8741-51d01053725e.jpg&spec_id=64967&spec_gallery_id=518540&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzg4NA&_oak_gallery_order=572923868%2C312522722%2C710913076%2C429200392&spec_ids=64967,3002,15082&_oak_mp_inf=EMmompWv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILCbocKoMw%3D%3D",
              selected_spec_ids: [64967, 3002, 15082],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601101923947593&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8f3dfff0-0e5f-41f3-8741-51d01053725e.jpg&spec_id=64967&spec_gallery_id=518540&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzg4NA&_oak_gallery_order=572923868%2C312522722%2C710913076%2C429200392&spec_ids=64967,3002,15082&_oak_mp_inf=EMmompWv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILCbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112719506069820489",
                sku_extra_param: {
                  _oak_gallery_order: "572923868,312522722,710913076,429200392",
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
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 9 left",
                  tag_series: 2,
                },
              ],
              show_index: 110,
              price_info: {
                reduction_text: ["-46", "%"],
                market_price_type: 1,
                price_text: ["CA$", "38.84", ""],
                price_str: "CA$38.84",
                price_color: "#FB7701",
                split_price_text: ["CA$", "38", ".84", ""],
                currency_str: "CA$",
                price: 3884,
                market_price_str: "73.08",
                market_price: 7308,
                price_schema: "38.84",
                currency: "CAD",
                reduction: 460,
                market_price_text: ["", "73.08", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 518540,
                url_id: "6385746003997024733",
                url: "https://img.kwcdn.com/product/fancy/8f3dfff0-0e5f-41f3-8741-51d01053725e.jpg",
                height: 1800,
              },
              sales_tip: "4.8K+ sold",
              visible: true,
              goods_id: 601101923947593,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "38", ".84", ""],
                    reduction_text: ["-46", "%"],
                    price: 3884,
                    market_price_str: "73.08",
                    market_price: 7308,
                    price_schema: "38.84",
                    currency: "CAD",
                    price_text: ["CA$", "38.84", ""],
                    price_str: "CA$38.84",
                    price_color: "#FB7701",
                    reduction: 460,
                    market_price_text: ["", "73.08", ""],
                  },
                  image: {
                    width: 1350,
                    id: 518540,
                    url: "https://img.kwcdn.com/product/fancy/8f3dfff0-0e5f-41f3-8741-51d01053725e.jpg",
                    height: 1800,
                  },
                  color: "",
                  seo_link_url:
                    "/ca/womens-winter-coat-long-length-cold-weather-jacket-with-full-zip-front-closure-loose-fit-hooded-outerwear-non-stretch-fabric-for-everyday-formal-events-ladies-winter-coats-g-601101923947593.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8f3dfff0-0e5f-41f3-8741-51d01053725e.jpg&spec_id=64967&spec_gallery_id=518540&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzg4NA&_oak_mp_inf=EMmompWv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILCbocKoMw%3D%3D",
                  spec_id: 64967,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/5be60060-5120-4891-984d-7a8b69a5aca1.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601101923947593&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8f3dfff0-0e5f-41f3-8741-51d01053725e.jpg&spec_id=64967&spec_gallery_id=518540&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzg4NA&_oak_mp_inf=EMmompWv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILCbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/8f3dfff0-0e5f-41f3-8741-51d01053725e.jpg",
                  price_str: "44.25",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "43", ".32", ""],
                    reduction_text: ["-60", "%"],
                    price: 4332,
                    market_price_str: "108.99",
                    market_price: 10899,
                    price_schema: "43.32",
                    currency: "CAD",
                    price_text: ["CA$", "43.32", ""],
                    price_str: "CA$43.32",
                    price_color: "#FB7701",
                    reduction: 600,
                    market_price_text: ["", "108.99", ""],
                  },
                  image: {
                    width: 1350,
                    id: 515248,
                    url: "https://img.kwcdn.com/product/fancy/858a219c-0fba-46ed-addb-5347b29d84be.jpg",
                    height: 1800,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-winter-coat-long-length-cold-weather-jacket-with-full-zip-front-closure-loose-fit-hooded-outerwear-non-stretch-fabric-for-everyday-formal-events-ladies-winter-coats-g-601101923947593.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F858a219c-0fba-46ed-addb-5347b29d84be.jpg&spec_id=3002&spec_gallery_id=515248&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDMzMg&_oak_mp_inf=EMmompWv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILCbocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/8f3914ae-8814-4323-9631-95b8600fe52b.jpg",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601101923947593&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F858a219c-0fba-46ed-addb-5347b29d84be.jpg&spec_id=3002&spec_gallery_id=515248&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDMzMg&_oak_mp_inf=EMmompWv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILCbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/858a219c-0fba-46ed-addb-5347b29d84be.jpg",
                  price_str: "43.33",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "49", ".54", ""],
                    reduction_text: ["-32", "%"],
                    price: 4954,
                    market_price_str: "73.08",
                    market_price: 7308,
                    price_schema: "49.54",
                    currency: "CAD",
                    price_text: ["CA$", "49.54", ""],
                    price_str: "CA$49.54",
                    price_color: "#FB7701",
                    reduction: 320,
                    market_price_text: ["", "73.08", ""],
                  },
                  image: {
                    width: 1350,
                    id: 518535,
                    url: "https://img.kwcdn.com/product/fancy/ffd084f0-9c5d-4311-b7a3-e2b0477eb47f.jpg",
                    height: 1800,
                  },
                  color: "(0,100,0,1)",
                  seo_link_url:
                    "/ca/womens-winter-coat-long-length-cold-weather-jacket-with-full-zip-front-closure-loose-fit-hooded-outerwear-non-stretch-fabric-for-everyday-formal-events-ladies-winter-coats-g-601101923947593.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fffd084f0-9c5d-4311-b7a3-e2b0477eb47f.jpg&spec_id=15082&spec_gallery_id=518535&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDk1NA&_oak_mp_inf=EMmompWv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILCbocKoMw%3D%3D",
                  spec_id: 15082,
                  color_image:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/e7ee60b8-c996-4671-9a5d-03c7ce3b856a.jpg",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601101923947593&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fffd084f0-9c5d-4311-b7a3-e2b0477eb47f.jpg&spec_id=15082&spec_gallery_id=518535&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDk1NA&_oak_mp_inf=EMmompWv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILCbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/ffd084f0-9c5d-4311-b7a3-e2b0477eb47f.jpg",
                  price_str: "54.94",
                },
              ],
              spec_ids: "64967,3002,15082",
              display_end_time: 1764565199,
              seo_link_url:
                "/ca/womens-winter-coat-long-length-cold-weather-jacket-with-full-zip-front-closure-loose-fit-hooded-outerwear-non-stretch-fabric-for-everyday-formal-events-ladies-winter-coats-g-601101923947593.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8f3dfff0-0e5f-41f3-8741-51d01053725e.jpg&spec_id=64967&spec_gallery_id=518540&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzg4NA&_oak_gallery_order=572923868%2C312522722%2C710913076%2C429200392&_oak_mp_inf=EMmompWv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILCbocKoMw%3D%3D&spec_ids=64967,3002,15082",
              queryReleScore: 0.0,
              sales_tip_text: ["4.8K+", "sold"],
              opt_type: 3,
              comment: {},
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/83ef88fb-6cfd-4fca-98cc-eed00615e9fa.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/83ef88fb-6cfd-4fca-98cc-eed00615e9fa.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-48%",
              },
              item_type: 0,
              page_alt:
                "womens elegant and fashionable womens casual   print jacket womens autumn and winter hooded jacket autumn and winter style",
              current_sku_id: 17610800915342,
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
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                    marketing_tag_type: 1000,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                    tag_id: 91004,
                    text: "Only 3 left",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "Women's elegant and fashionable Women's casual plaid print jacket Women's autumn and winter hooded jacket autumn and winter style",
              sales_tip_text_list: [],
              display_end_time_percent: 52,
              sold_quantity_percent: 71,
              p_rec: {
                skc_id: "17596907670515",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1748092236",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw0++lJa3Kj/I5iXOWJXBC0SVSAV56DPbTLFB4f5gzV5ZEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "441424780636009461",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1748092236",
                g: "601103633836962",
                scene_id: "3",
                show_price: "2693",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "111",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "7131875951703912881",
                ts: "1763223031261",
              },
              activity_type: 13,
              mall_id: 634418225592231,
              sales_num: "4.1K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601103633836962&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F83ef88fb-6cfd-4fca-98cc-eed00615e9fa.jpg&spec_id=16057&spec_gallery_id=467409&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY5Mw&_oak_gallery_order=1748092236%2C1320548982%2C1715376200%2C1185744118%2C1286793398&spec_ids=16057&_oak_name_id=7131875951703912881&_oak_mp_inf=EKLXxcS11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
              selected_spec_ids: [16057],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601103633836962&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F83ef88fb-6cfd-4fca-98cc-eed00615e9fa.jpg&spec_id=16057&spec_gallery_id=467409&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY5Mw&_oak_gallery_order=1748092236%2C1320548982%2C1715376200%2C1185744118%2C1286793398&spec_ids=16057&_oak_name_id=7131875951703912881&_oak_mp_inf=EKLXxcS11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112664383494843298",
                sku_extra_param: {
                  _oak_gallery_order:
                    "1748092236,1320548982,1715376200,1185744118,1286793398",
                  _oak_name_id: "7131875951703912881",
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
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 3 left",
                  tag_series: 2,
                },
              ],
              show_index: 111,
              price_info: {
                reduction_text: ["-48", "%"],
                market_price_type: 1,
                price_text: ["CA$", "26.93", ""],
                price_str: "CA$26.93",
                price_color: "#FB7701",
                split_price_text: ["CA$", "26", ".93", ""],
                currency_str: "CA$",
                price: 2693,
                market_price_str: "52.38",
                market_price: 5238,
                price_schema: "26.93",
                currency: "CAD",
                reduction: 480,
                market_price_text: ["", "52.38", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 467409,
                url_id: "441424780636009461",
                url: "https://img.kwcdn.com/product/fancy/83ef88fb-6cfd-4fca-98cc-eed00615e9fa.jpg",
                height: 1800,
              },
              sales_tip: "4.1K+ sold",
              visible: true,
              goods_id: 601103633836962,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "26", ".93", ""],
                    reduction_text: ["-48", "%"],
                    price: 2693,
                    market_price_str: "52.38",
                    market_price: 5238,
                    price_schema: "26.93",
                    currency: "CAD",
                    price_text: ["CA$", "26.93", ""],
                    price_str: "CA$26.93",
                    price_color: "#FB7701",
                    reduction: 480,
                    market_price_text: ["", "52.38", ""],
                  },
                  image: {
                    width: 1350,
                    id: 467409,
                    url: "https://img.kwcdn.com/product/fancy/83ef88fb-6cfd-4fca-98cc-eed00615e9fa.jpg",
                    height: 1800,
                  },
                  color: "(255,182,193,1)",
                  seo_link_url:
                    "/ca/womens-elegant-and-fashionable-womens-casual--print-jacket-womens-autumn-and-winter-hooded-jacket-autumn-and-winter-style-g-601103633836962.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F83ef88fb-6cfd-4fca-98cc-eed00615e9fa.jpg&spec_id=16057&spec_gallery_id=467409&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY5Mw&_oak_mp_inf=EKLXxcS11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
                  spec_id: 16057,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/f422022b-0fb7-45d1-b35f-07bb5c38f6b4.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601103633836962&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F83ef88fb-6cfd-4fca-98cc-eed00615e9fa.jpg&spec_id=16057&spec_gallery_id=467409&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY5Mw&_oak_mp_inf=EKLXxcS11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/83ef88fb-6cfd-4fca-98cc-eed00615e9fa.jpg",
                  price_str: "30.38",
                },
              ],
              spec_ids: "16057",
              display_end_time: 1764392399,
              seo_link_url:
                "/ca/womens-elegant-and-fashionable-womens-casual--print-jacket-womens-autumn-and-winter-hooded-jacket-autumn-and-winter-style-g-601103633836962.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F83ef88fb-6cfd-4fca-98cc-eed00615e9fa.jpg&spec_id=16057&spec_gallery_id=467409&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY5Mw&_oak_gallery_order=1748092236%2C1320548982%2C1715376200%2C1185744118%2C1286793398&_oak_name_id=7131875951703912881&_oak_mp_inf=EKLXxcS11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D&spec_ids=16057",
              queryReleScore: 0.0,
              sales_tip_text: ["4.1K+", "sold"],
              opt_type: 3,
              comment: {},
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/ba9eda76-12ed-4849-aac0-90b07508b56f.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/ba9eda76-12ed-4849-aac0-90b07508b56f.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-69%",
              },
              item_type: 0,
              page_alt:
                "womens windproof jacket lightweight   outdoor coat with detachable hood multi zipper pockets adjustable cuffs vibrant color for fishing casual wear windbreaker jacket",
              current_sku_id: 17602756395901,
              tags_info: {
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
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
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
                  "https://goods-vod.kwcdn.com/goods-video/176660b5fa5b5483883736f0e85e048cfea383ad.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/ba9eda76-12ed-4849-aac0-90b07508b56f.jpg",
                url: "https://img.kwcdn.com/product/4e179a22d4c3e6d309f4e7384bdfcffb5ef587bb.goods.000001.jpeg",
              },
              title:
                "Women'S Windproof Jacket - Lightweight All-Season Outdoor Coat with Detachable Hood, Multi-Zipper Pockets & Adjustable Cuffs, Vibrant Color for, Fishing & Casual Wear, Windbreaker Jacket",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17595050921200",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "1676758246",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw+/xm4ZBL4SRV22IlbixDvrthak2mP12XHTpDT5pc3KuEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "2972539590957160838",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1676758246",
                g: "601102048935166",
                scene_id: "3",
                show_price: "2710",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "112",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "2755849126643736264",
                ts: "1763223031261",
              },
              mall_id: 634418221947862,
              sales_num: "8K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601102048935166&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fba9eda76-12ed-4849-aac0-90b07508b56f.jpg&spec_id=16054&spec_gallery_id=243558&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcxMA&_oak_gallery_order=1676758246%2C717539451%2C2062634413%2C1586884971%2C502894423&spec_ids=16054,3002,2&_oak_name_id=2755849126643736264&_oak_mp_inf=EP755tCv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
              selected_spec_ids: [16054, 3002, 2],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601102048935166&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fba9eda76-12ed-4849-aac0-90b07508b56f.jpg&spec_id=16054&spec_gallery_id=243558&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcxMA&_oak_gallery_order=1676758246%2C717539451%2C2062634413%2C1586884971%2C502894423&spec_ids=16054,3002,2&_oak_name_id=2755849126643736264&_oak_mp_inf=EP755tCv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "1676758246,717539451,2062634413,1586884971,502894423",
                  _oak_name_id: "2755849126643736264",
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
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 5 left",
                  tag_series: 2,
                },
              ],
              show_index: 112,
              price_info: {
                split_price_text: ["CA$", "27", ".10", ""],
                currency_str: "CA$",
                reduction_text: ["-69", "%"],
                price: 2710,
                market_price_str: "89.07",
                market_price: 8907,
                market_price_type: 1,
                price_schema: "27.10",
                currency: "CAD",
                price_text: ["CA$", "27.10", ""],
                price_str: "CA$27.10",
                market_price_text: ["", "89.07", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 243558,
                url_id: "2972539590957160838",
                url: "https://img.kwcdn.com/product/fancy/ba9eda76-12ed-4849-aac0-90b07508b56f.jpg",
                height: 1800,
              },
              sales_tip: "8K+ sold",
              visible: true,
              goods_id: 601102048935166,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "27", ".10", ""],
                    reduction_text: [],
                    price: 2710,
                    market_price_str: "89.07",
                    market_price: 8907,
                    price_schema: "27.10",
                    currency: "CAD",
                    price_text: ["CA$", "27.10", ""],
                    price_str: "CA$27.10",
                    market_price_text: ["", "89.07", ""],
                  },
                  image: {
                    width: 1350,
                    id: 243558,
                    url: "https://img.kwcdn.com/product/fancy/ba9eda76-12ed-4849-aac0-90b07508b56f.jpg",
                    height: 1800,
                  },
                  color: "(255,255,240,1)",
                  seo_link_url:
                    "/ca/womens-windproof-jacket-lightweight--outdoor-coat-with-detachable-hood-multi-zipper-pockets-adjustable-cuffs-vibrant-color-for-fishing-casual-wear-windbreaker-jacket-g-601102048935166.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fba9eda76-12ed-4849-aac0-90b07508b56f.jpg&spec_id=16054&spec_gallery_id=243558&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcxMA&_oak_mp_inf=EP755tCv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
                  spec_id: 16054,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/1452b3d9-06e7-4834-b205-be72d35f80e9.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102048935166&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fba9eda76-12ed-4849-aac0-90b07508b56f.jpg&spec_id=16054&spec_gallery_id=243558&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcxMA&_oak_mp_inf=EP755tCv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/ba9eda76-12ed-4849-aac0-90b07508b56f.jpg",
                  price_str: "27.10",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "28", ".61", ""],
                    reduction_text: [],
                    price: 2861,
                    market_price_str: "31.58",
                    market_price: 3158,
                    price_schema: "28.61",
                    currency: "CAD",
                    price_text: ["CA$", "28.61", ""],
                    price_str: "CA$28.61",
                    market_price_text: ["", "31.58", ""],
                  },
                  image: {
                    width: 1350,
                    id: 243547,
                    url: "https://img.kwcdn.com/product/fancy/8757741d-6150-4853-bde3-2523a6063ab6.jpg",
                    height: 1800,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-windproof-jacket-lightweight--outdoor-coat-with-detachable-hood-multi-zipper-pockets-adjustable-cuffs-vibrant-color-for-fishing-casual-wear-windbreaker-jacket-g-601102048935166.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8757741d-6150-4853-bde3-2523a6063ab6.jpg&spec_id=3002&spec_gallery_id=243547&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjg2MQ&_oak_mp_inf=EP755tCv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/43ddce1a-b226-40b4-ad4a-bc77377338c7.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102048935166&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8757741d-6150-4853-bde3-2523a6063ab6.jpg&spec_id=3002&spec_gallery_id=243547&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjg2MQ&_oak_mp_inf=EP755tCv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/8757741d-6150-4853-bde3-2523a6063ab6.jpg",
                  price_str: "28.61",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "28", ".84", ""],
                    reduction_text: [],
                    price: 2884,
                    market_price_str: "37.38",
                    market_price: 3738,
                    price_schema: "28.84",
                    currency: "CAD",
                    price_text: ["CA$", "28.84", ""],
                    price_str: "CA$28.84",
                    market_price_text: ["", "37.38", ""],
                  },
                  image: {
                    width: 1349,
                    id: 243542,
                    url: "https://img.kwcdn.com/product/fancy/b76acf49-73e6-477b-9564-0e0be0644521.jpg",
                    height: 1800,
                  },
                  color: "(255,0,0,1)",
                  seo_link_url:
                    "/ca/womens-windproof-jacket-lightweight--outdoor-coat-with-detachable-hood-multi-zipper-pockets-adjustable-cuffs-vibrant-color-for-fishing-casual-wear-windbreaker-jacket-g-601102048935166.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fb76acf49-73e6-477b-9564-0e0be0644521.jpg&spec_id=2&spec_gallery_id=243542&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjg4NA&_oak_mp_inf=EP755tCv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
                  spec_id: 2,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/aa488495-0786-412f-9318-dc30b1fe93c2.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601102048935166&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fb76acf49-73e6-477b-9564-0e0be0644521.jpg&spec_id=2&spec_gallery_id=243542&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjg4NA&_oak_mp_inf=EP755tCv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/b76acf49-73e6-477b-9564-0e0be0644521.jpg",
                  price_str: "28.84",
                },
              ],
              spec_ids: "16054,3002,2",
              seo_link_url:
                "/ca/womens-windproof-jacket-lightweight--outdoor-coat-with-detachable-hood-multi-zipper-pockets-adjustable-cuffs-vibrant-color-for-fishing-casual-wear-windbreaker-jacket-g-601102048935166.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fba9eda76-12ed-4849-aac0-90b07508b56f.jpg&spec_id=16054&spec_gallery_id=243558&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcxMA&_oak_gallery_order=1676758246%2C717539451%2C2062634413%2C1586884971%2C502894423&_oak_name_id=2755849126643736264&_oak_mp_inf=EP755tCv1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D&spec_ids=16054,3002,2",
              queryReleScore: 0.0,
              sales_tip_text: ["8K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.8,
                hidden_comment: true,
                comment_num_tips: "28",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/2d53b39c-f615-4378-9cf2-e718eb27faee.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/2d53b39c-f615-4378-9cf2-e718eb27faee.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-34%",
              },
              item_type: 0,
              page_alt:
                "womens elegant winter coat with luxurious heart shaped faux fur collar     jacket   washable outerwear for parties weddings cold weather no collar",
              current_sku_id: 17614000696009,
              tags_info: {
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
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                    marketing_tag_type: 1000,
                    rtl_icon_url:
                      "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                    tag_id: 91004,
                    text: "Only 1 Left",
                    tag_series: 2,
                  },
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "Women's Elegant Winter Coat with Luxurious Heart-Shaped Faux-Fur Collar & - All-Season Black/Brown Jacket, -like, Machine Washable Outerwear for Parties, Weddings & Cold Weather (No- Collar)",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17597665613578",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "208733244",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw1jMWZt3hvWdB3hW4nEPskydJ1WcRY5436o24cGQfFK8EH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "8386806600185112059",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "208733244",
                g: "601104282127695",
                scene_id: "3",
                show_price: "4674",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "113",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "3977579382859255488",
                ts: "1763223031261",
              },
              mall_id: 634418216969609,
              sales_num: "6.5K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601104282127695&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2d53b39c-f615-4378-9cf2-e718eb27faee.jpg&spec_id=3002&spec_gallery_id=494329&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDY3NA&_oak_gallery_order=208733244%2C481400187&spec_ids=3002,2001&_oak_mp_inf=EM%2Ba1vm31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
              selected_spec_ids: [3002, 2001],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601104282127695&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2d53b39c-f615-4378-9cf2-e718eb27faee.jpg&spec_id=3002&spec_gallery_id=494329&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDY3NA&_oak_gallery_order=208733244%2C481400187&spec_ids=3002,2001&_oak_mp_inf=EM%2Ba1vm31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order: "208733244,481400187",
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
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 1 Left",
                  tag_series: 2,
                },
              ],
              show_index: 113,
              price_info: {
                split_price_text: ["CA$", "46", ".74", ""],
                currency_str: "CA$",
                reduction_text: ["-34", "%"],
                price: 4674,
                market_price_str: "70.94",
                market_price: 7094,
                market_price_type: 1,
                price_schema: "46.74",
                currency: "CAD",
                price_text: ["CA$", "46.74", ""],
                price_str: "CA$46.74",
                market_price_text: ["", "70.94", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 494329,
                url_id: "8386806600185112059",
                url: "https://img.kwcdn.com/product/fancy/2d53b39c-f615-4378-9cf2-e718eb27faee.jpg",
                height: 1800,
              },
              sales_tip: "6.5K+ sold",
              visible: true,
              goods_id: 601104282127695,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "46", ".74", ""],
                    reduction_text: [],
                    price: 4674,
                    market_price_str: "70.94",
                    market_price: 7094,
                    price_schema: "46.74",
                    currency: "CAD",
                    price_text: ["CA$", "46.74", ""],
                    price_str: "CA$46.74",
                    market_price_text: ["", "70.94", ""],
                  },
                  image: {
                    width: 1350,
                    id: 494329,
                    url: "https://img.kwcdn.com/product/fancy/2d53b39c-f615-4378-9cf2-e718eb27faee.jpg",
                    height: 1800,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-elegant-winter-coat-with-luxurious-heart-shaped-faux-fur-collar---jacket--washable-outerwear-for-parties-weddings-cold-weather-no-collar-g-601104282127695.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2d53b39c-f615-4378-9cf2-e718eb27faee.jpg&spec_id=3002&spec_gallery_id=494329&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDY3NA&_oak_mp_inf=EM%2Ba1vm31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/caaa2ecf-f225-4f35-864d-00fd651d8564.jpg",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104282127695&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2d53b39c-f615-4378-9cf2-e718eb27faee.jpg&spec_id=3002&spec_gallery_id=494329&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDY3NA&_oak_mp_inf=EM%2Ba1vm31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/2d53b39c-f615-4378-9cf2-e718eb27faee.jpg",
                  price_str: "46.74",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "46", ".74", ""],
                    reduction_text: [],
                    price: 4674,
                    market_price_str: "70.94",
                    market_price: 7094,
                    price_schema: "46.74",
                    currency: "CAD",
                    price_text: ["CA$", "46.74", ""],
                    price_str: "CA$46.74",
                    market_price_text: ["", "70.94", ""],
                  },
                  image: {
                    width: 1350,
                    id: 517656,
                    url: "https://img.kwcdn.com/product/fancy/0277cafe-32de-41ef-b8a7-9d3f133db3e9.jpg",
                    height: 1800,
                  },
                  color: "(255,255,255,1)",
                  seo_link_url:
                    "/ca/womens-elegant-winter-coat-with-luxurious-heart-shaped-faux-fur-collar---jacket--washable-outerwear-for-parties-weddings-cold-weather-no-collar-g-601104282127695.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F0277cafe-32de-41ef-b8a7-9d3f133db3e9.jpg&spec_id=2001&spec_gallery_id=517656&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDY3NA&_oak_mp_inf=EM%2Ba1vm31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
                  spec_id: 2001,
                  color_image:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/2ab2e634-fa07-40ad-b38a-8ae525d85b5b.jpg",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104282127695&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F0277cafe-32de-41ef-b8a7-9d3f133db3e9.jpg&spec_id=2001&spec_gallery_id=517656&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDY3NA&_oak_mp_inf=EM%2Ba1vm31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/0277cafe-32de-41ef-b8a7-9d3f133db3e9.jpg",
                  price_str: "46.74",
                },
              ],
              spec_ids: "3002,2001",
              seo_link_url:
                "/ca/womens-elegant-winter-coat-with-luxurious-heart-shaped-faux-fur-collar---jacket--washable-outerwear-for-parties-weddings-cold-weather-no-collar-g-601104282127695.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2d53b39c-f615-4378-9cf2-e718eb27faee.jpg&spec_id=3002&spec_gallery_id=494329&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDY3NA&_oak_gallery_order=208733244%2C481400187&_oak_mp_inf=EM%2Ba1vm31ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D&spec_ids=3002,2001",
              queryReleScore: 0.0,
              sales_tip_text: ["6.5K+", "sold"],
              opt_type: 3,
              comment: {},
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/99135d65-4bb2-4157-a368-186f39a6a8f7.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/99135d65-4bb2-4157-a368-186f39a6a8f7.jpg",
              after_price_tip_text: ["In", "1", "cart"],
              ware_house_type: 1,
              benefit_text: {
                text: "-5%",
              },
              item_type: 0,
              page_alt:
                "womens cardigan sweater jacket button front closure long sleeve blouse barn door sweater solid color casual winter outerwear machine washable   coat no for blouses dresses   cardigan",
              current_sku_id: 17614878784257,
              tags_info: {
                title_header_tags: [
                  {
                    color: "#0A8800",
                    ext_map: {},
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
                    color: "#FB7701",
                    ext_map: {
                      stock_type: "1",
                      simply_stock_tag_text: "5 LEFT!",
                    },
                    prompt_tag_text:
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
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
                video_url: "",
              },
              title:
                "Women's Cardigan Sweater Jacket - Button-Front Closure Long Sleeve Blouse Barn Door Sweater, Solid Color Casual Winter Outerwear, Machine Washable Spring/Fall Coat (No ) for Blouses & Dresses - Easy Care Cardigan",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17597873423162",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1383880534",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxwzSFbqthTV5j8/KikGtuXUva6zLzZ0WSPgFkiy1WkmFsEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "8554320540543376100",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1383880534",
                g: "601104460717334",
                scene_id: "3",
                show_price: "2266",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "114",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "3662860198073775680",
                ts: "1763223031261",
              },
              mall_id: 634418222199523,
              sales_num: "0",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601104460717334&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F99135d65-4bb2-4157-a368-186f39a6a8f7.jpg&spec_id=16080&spec_gallery_id=490841&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2Ng&_oak_gallery_order=1383880534%2C1391264196%2C773018463%2C1228335732&spec_ids=16080&_oak_mp_inf=EJa66s641ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
              selected_spec_ids: [16080],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601104460717334&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F99135d65-4bb2-4157-a368-186f39a6a8f7.jpg&spec_id=16080&spec_gallery_id=490841&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2Ng&_oak_gallery_order=1383880534%2C1391264196%2C773018463%2C1228335732&spec_ids=16080&_oak_mp_inf=EJa66s641ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "1383880534,1391264196,773018463,1228335732",
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
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 5 left",
                  tag_series: 2,
                },
              ],
              show_index: 114,
              price_info: {
                split_price_text: ["CA$", "22", ".66", ""],
                currency_str: "CA$",
                reduction_text: ["-5", "%"],
                price: 2266,
                market_price_str: "24.04",
                market_price: 2404,
                market_price_type: 1,
                price_schema: "22.66",
                currency: "CAD",
                price_text: ["CA$", "22.66", ""],
                price_str: "CA$22.66",
                market_price_text: ["", "24.04", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1500,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 490841,
                url_id: "8554320540543376100",
                url: "https://img.kwcdn.com/product/fancy/99135d65-4bb2-4157-a368-186f39a6a8f7.jpg",
                height: 2000,
              },
              sales_tip: "",
              visible: true,
              goods_id: 601104460717334,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "22", ".66", ""],
                    reduction_text: [],
                    price: 2266,
                    market_price_str: "24.04",
                    market_price: 2404,
                    price_schema: "22.66",
                    currency: "CAD",
                    price_text: ["CA$", "22.66", ""],
                    price_str: "CA$22.66",
                    market_price_text: ["", "24.04", ""],
                  },
                  image: {
                    width: 1500,
                    id: 490841,
                    url: "https://img.kwcdn.com/product/fancy/99135d65-4bb2-4157-a368-186f39a6a8f7.jpg",
                    height: 2000,
                  },
                  color: "(128,128,128,1)",
                  seo_link_url:
                    "/ca/womens-cardigan-sweater-jacket-button-front-closure-long-sleeve-blouse-barn-door-sweater-solid-color-casual-winter-outerwear-machine-washable--coat-no-for-blouses-dresses--cardigan-g-601104460717334.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F99135d65-4bb2-4157-a368-186f39a6a8f7.jpg&spec_id=16080&spec_gallery_id=490841&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2Ng&_oak_mp_inf=EJa66s641ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
                  spec_id: 16080,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/1e9db67e-6803-4e42-8160-1d9b0cc39e9a.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104460717334&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F99135d65-4bb2-4157-a368-186f39a6a8f7.jpg&spec_id=16080&spec_gallery_id=490841&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2Ng&_oak_mp_inf=EJa66s641ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/99135d65-4bb2-4157-a368-186f39a6a8f7.jpg",
                  price_str: "22.66",
                },
              ],
              spec_ids: "16080",
              seo_link_url:
                "/ca/womens-cardigan-sweater-jacket-button-front-closure-long-sleeve-blouse-barn-door-sweater-solid-color-casual-winter-outerwear-machine-washable--coat-no-for-blouses-dresses--cardigan-g-601104460717334.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F99135d65-4bb2-4157-a368-186f39a6a8f7.jpg&spec_id=16080&spec_gallery_id=490841&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2Ng&_oak_gallery_order=1383880534%2C1391264196%2C773018463%2C1228335732&_oak_mp_inf=EJa66s641ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILGbocKoMw%3D%3D&spec_ids=16080",
              queryReleScore: 0.0,
              sales_tip_text: [],
              opt_type: 3,
              comment: {},
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/3d8ede50-355d-4f0e-ac84-ef9a65f8e4a7.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/3d8ede50-355d-4f0e-ac84-ef9a65f8e4a7.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-23%",
              },
              item_type: 0,
              page_alt:
                "womens winter lined thickened coat regular fit with windproof cuffs zip closure suitable for cold weather moms warm coat",
              current_sku_id: 17612725207221,
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
                      "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
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
                video_url: "",
              },
              title:
                "Women's Winter -Lined Thickened Coat, Regular Fit with Windproof Cuffs, Zip Closure, Suitable for Cold Weather, Mom's Warm Coat",
              sales_tip_text_list: [],
              display_end_time_percent: 52,
              sold_quantity_percent: 72,
              p_rec: {
                skc_id: "17597358981290",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "379579723",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxwyAF42io7bn4VcgvenJOzo+sHtaPFf8xVoIQUJwzmdXdEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "4263838816789910754",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "379579723",
                g: "601104017690456",
                scene_id: "3",
                show_price: "5977",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "115",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "9108397253299443112",
                ts: "1763223031261",
              },
              activity_type: 13,
              mall_id: 634418219514084,
              sales_num: "8K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601104017690456&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3d8ede50-355d-4f0e-ac84-ef9a65f8e4a7.jpg&spec_id=15074&spec_gallery_id=480725&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTk3Nw&_oak_gallery_order=379579723%2C285726800%2C1542292900%2C1665269028%2C1120782632&spec_ids=15074,16102,3002&_oak_name_id=9108397253299443112&_oak_mp_inf=ENieyvu21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D",
              selected_spec_ids: [15074, 16102, 3002],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601104017690456&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3d8ede50-355d-4f0e-ac84-ef9a65f8e4a7.jpg&spec_id=15074&spec_gallery_id=480725&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTk3Nw&_oak_gallery_order=379579723%2C285726800%2C1542292900%2C1665269028%2C1120782632&spec_ids=15074,16102,3002&_oak_name_id=9108397253299443112&_oak_mp_inf=ENieyvu21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112730165708885848",
                sku_extra_param: {
                  _oak_gallery_order:
                    "379579723,285726800,1542292900,1665269028,1120782632",
                  _oak_name_id: "9108397253299443112",
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
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 5 left",
                  tag_series: 2,
                },
              ],
              show_index: 115,
              price_info: {
                reduction_text: ["-23", "%"],
                market_price_type: 1,
                price_text: ["CA$", "59.77", ""],
                price_str: "CA$59.77",
                price_color: "#FB7701",
                split_price_text: ["CA$", "59", ".77", ""],
                currency_str: "CA$",
                price: 5977,
                market_price_str: "77.63",
                market_price: 7763,
                price_schema: "59.77",
                currency: "CAD",
                reduction: 230,
                market_price_text: ["", "77.63", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1417,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 480725,
                url_id: "4263838816789910754",
                url: "https://img.kwcdn.com/product/fancy/3d8ede50-355d-4f0e-ac84-ef9a65f8e4a7.jpg",
                height: 1890,
              },
              sales_tip: "8K+ sold",
              visible: true,
              goods_id: 601104017690456,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "59", ".77", ""],
                    reduction_text: ["-23", "%"],
                    price: 5977,
                    market_price_str: "77.63",
                    market_price: 7763,
                    price_schema: "59.77",
                    currency: "CAD",
                    price_text: ["CA$", "59.77", ""],
                    price_str: "CA$59.77",
                    price_color: "#FB7701",
                    reduction: 230,
                    market_price_text: ["", "77.63", ""],
                  },
                  image: {
                    width: 1417,
                    id: 480725,
                    url: "https://img.kwcdn.com/product/fancy/3d8ede50-355d-4f0e-ac84-ef9a65f8e4a7.jpg",
                    height: 1890,
                  },
                  color: "(51,161,201,1)",
                  seo_link_url:
                    "/ca/womens-winter-lined-thickened-coat-regular-fit-with-windproof-cuffs-zip-closure-suitable-for-cold-weather-moms-warm-coat-g-601104017690456.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3d8ede50-355d-4f0e-ac84-ef9a65f8e4a7.jpg&spec_id=15074&spec_gallery_id=480725&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTk3Nw&_oak_mp_inf=ENieyvu21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D",
                  spec_id: 15074,
                  color_image:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/3d0715d4-d89f-4f05-a16c-1537bf34a3d4.jpg",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104017690456&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3d8ede50-355d-4f0e-ac84-ef9a65f8e4a7.jpg&spec_id=15074&spec_gallery_id=480725&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTk3Nw&_oak_mp_inf=ENieyvu21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/3d8ede50-355d-4f0e-ac84-ef9a65f8e4a7.jpg",
                  price_str: "74.49",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "59", ".92", ""],
                    reduction_text: ["-22", "%"],
                    price: 5992,
                    market_price_str: "77.63",
                    market_price: 7763,
                    price_schema: "59.92",
                    currency: "CAD",
                    price_text: ["CA$", "59.92", ""],
                    price_str: "CA$59.92",
                    price_color: "#FB7701",
                    reduction: 220,
                    market_price_text: ["", "77.63", ""],
                  },
                  image: {
                    width: 1417,
                    id: 480732,
                    url: "https://img.kwcdn.com/product/fancy/be33b170-f1a0-4ddc-9ce6-fddaa163777f.jpg",
                    height: 1890,
                  },
                  color: "(96,57,18,1)",
                  seo_link_url:
                    "/ca/womens-winter-lined-thickened-coat-regular-fit-with-windproof-cuffs-zip-closure-suitable-for-cold-weather-moms-warm-coat-g-601104017690456.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbe33b170-f1a0-4ddc-9ce6-fddaa163777f.jpg&spec_id=16102&spec_gallery_id=480732&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTk5Mg&_oak_mp_inf=ENieyvu21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D",
                  spec_id: 16102,
                  color_image:
                    "https://img.kwcdn.com/product/temu-avi/image-crop/4544d3c2-c782-45b3-8a16-489f916f7541.jpg",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104017690456&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbe33b170-f1a0-4ddc-9ce6-fddaa163777f.jpg&spec_id=16102&spec_gallery_id=480732&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTk5Mg&_oak_mp_inf=ENieyvu21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/be33b170-f1a0-4ddc-9ce6-fddaa163777f.jpg",
                  price_str: "74.65",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "61", ".96", ""],
                    reduction_text: ["-20", "%"],
                    price: 6196,
                    market_price_str: "77.63",
                    market_price: 7763,
                    price_schema: "61.96",
                    currency: "CAD",
                    price_text: ["CA$", "61.96", ""],
                    price_str: "CA$61.96",
                    price_color: "#FB7701",
                    reduction: 200,
                    market_price_text: ["", "77.63", ""],
                  },
                  image: {
                    width: 1417,
                    id: 480717,
                    url: "https://img.kwcdn.com/product/fancy/e49a4d30-f8c5-463b-aadb-724f04c8212e.jpg",
                    height: 1890,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-winter-lined-thickened-coat-regular-fit-with-windproof-cuffs-zip-closure-suitable-for-cold-weather-moms-warm-coat-g-601104017690456.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe49a4d30-f8c5-463b-aadb-724f04c8212e.jpg&spec_id=3002&spec_gallery_id=480717&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjE5Ng&_oak_mp_inf=ENieyvu21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/17108e44-115e-402b-b380-afb3b1dbd188.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601104017690456&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe49a4d30-f8c5-463b-aadb-724f04c8212e.jpg&spec_id=3002&spec_gallery_id=480717&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NjE5Ng&_oak_mp_inf=ENieyvu21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/e49a4d30-f8c5-463b-aadb-724f04c8212e.jpg",
                  price_str: "76.68",
                },
              ],
              spec_ids: "15074,16102,3002",
              display_end_time: 1764392399,
              seo_link_url:
                "/ca/womens-winter-lined-thickened-coat-regular-fit-with-windproof-cuffs-zip-closure-suitable-for-cold-weather-moms-warm-coat-g-601104017690456.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F3d8ede50-355d-4f0e-ac84-ef9a65f8e4a7.jpg&spec_id=15074&spec_gallery_id=480725&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTk3Nw&_oak_gallery_order=379579723%2C285726800%2C1542292900%2C1665269028%2C1120782632&_oak_name_id=9108397253299443112&_oak_mp_inf=ENieyvu21ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D&spec_ids=15074,16102,3002",
              queryReleScore: 0.0,
              sales_tip_text: ["8K+", "sold"],
              opt_type: 3,
              comment: {},
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/market/7ccf9abbae12c438e2f6cb167b066ede_2762xToQTgV8p.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/market/7ccf9abbae12c438e2f6cb167b066ede_2762xToQTgV8p.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-44%",
              },
              item_type: 0,
              page_alt:
                "zipper solid crop jacket y2k long sleeve jacket for   womens clothing",
              current_sku_id: 17592299813643,
              tags_info: {
                goods_tags: [
                  {
                    ext_map: {
                      ranking_list_rich_text:
                        '{"text_rich":[{"type":0,"value":"TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Women\'s Coats & Jackets","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"721"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"721"}}}',
                    },
                    footer: {
                      color: "#555555",
                      text: " in Women's Coats & Jackets",
                      font: 14,
                    },
                    marketing_tag_type: 2100,
                    header: {
                      text_style: 2,
                      color: "#FFFFFF",
                      back_color: "#0A8800",
                      text: "TOP RATED",
                      font: 12,
                    },
                    tag_id: 91020,
                    ranking_type: "Top rated",
                    ranking_id: "721",
                  },
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "Zipper Solid Crop Jacket, Y2K Long Sleeve Jacket For Spring & Fall, Women's Clothing",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17592214986055",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "1193371416",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw4EHfu64xTCgFeS7OgMZnDixOChnK5zEJ2ceL3M12kl5EH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "9197977893886190120",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "1193371416",
                g: "601099536339361",
                scene_id: "3",
                show_price: "1614",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "116",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "7270632941872431314",
                ts: "1763223031261",
              },
              mall_id: 634418211842057,
              sales_num: "9.4K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601099536339361&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fmarket%2F7ccf9abbae12c438e2f6cb167b066ede_2762xToQTgV8p.jpg&spec_id=3002&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTYxNA&_oak_gallery_order=1193371416%2C909038367%2C378319949%2C1018003137%2C2076711813&spec_ids=3002,16093,16091&_oak_name_id=7270632941872431314&_oak_mp_inf=EKGj2qKm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D",
              selected_spec_ids: [3002, 16093, 16091],
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601099536339361&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fmarket%2F7ccf9abbae12c438e2f6cb167b066ede_2762xToQTgV8p.jpg&spec_id=3002&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTYxNA&_oak_gallery_order=1193371416%2C909038367%2C378319949%2C1018003137%2C2076711813&spec_ids=3002,16093,16091&_oak_name_id=7270632941872431314&_oak_mp_inf=EKGj2qKm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "1193371416,909038367,378319949,1018003137,2076711813",
                  _oak_name_id: "7270632941872431314",
                },
              },
              goods_tags: [
                {
                  ext_map: {
                    ranking_list_rich_text:
                      '{"text_rich":[{"type":0,"value":"TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Women\'s Coats & Jackets","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"721"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"721"}}}',
                  },
                  footer: {
                    color: "#555555",
                    text: " in Women's Coats & Jackets",
                    font: 14,
                  },
                  marketing_tag_type: 2100,
                  header: {
                    text_style: 2,
                    color: "#FFFFFF",
                    back_color: "#0A8800",
                    text: "TOP RATED",
                    font: 12,
                  },
                  tag_id: 91020,
                  ranking_type: "Top rated",
                  ranking_id: "721",
                },
              ],
              show_index: 116,
              price_info: {
                split_price_text: ["CA$", "16", ".14", ""],
                currency_str: "CA$",
                reduction_text: ["-44", "%"],
                price: 1614,
                market_price_str: "29.13",
                market_price: 2913,
                market_price_type: 1,
                price_schema: "16.14",
                currency: "CAD",
                price_text: ["CA$", "16.14", ""],
                price_str: "CA$16.14",
                market_price_text: ["", "29.13", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 1,
                url_id: "9197977893886190120",
                url: "https://img.kwcdn.com/product/fancy/market/7ccf9abbae12c438e2f6cb167b066ede_2762xToQTgV8p.jpg",
                height: 1800,
              },
              sales_tip: "9.4K+ sold",
              visible: true,
              goods_id: 601099536339361,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "16", ".14", ""],
                    reduction_text: [],
                    price: 1614,
                    market_price_str: "29.13",
                    market_price: 2913,
                    price_schema: "16.14",
                    currency: "CAD",
                    price_text: ["CA$", "16.14", ""],
                    price_str: "CA$16.14",
                    market_price_text: ["", "29.13", ""],
                  },
                  image: {
                    width: 1350,
                    id: 1,
                    url: "https://img.kwcdn.com/product/fancy/market/7ccf9abbae12c438e2f6cb167b066ede_2762xToQTgV8p.jpg",
                    height: 1800,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/zipper-solid-crop-jacket-y2k-long-sleeve-jacket-for--womens-clothing-g-601099536339361.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fmarket%2F7ccf9abbae12c438e2f6cb167b066ede_2762xToQTgV8p.jpg&spec_id=3002&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTYxNA&_oak_mp_inf=EKGj2qKm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/67dcf0de-97e1-11ee-845d-0a580a682cb5.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601099536339361&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fmarket%2F7ccf9abbae12c438e2f6cb167b066ede_2762xToQTgV8p.jpg&spec_id=3002&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTYxNA&_oak_mp_inf=EKGj2qKm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/market/7ccf9abbae12c438e2f6cb167b066ede_2762xToQTgV8p.jpg",
                  price_str: "16.14",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "15", ".80", ""],
                    reduction_text: [],
                    price: 1580,
                    price_schema: "15.80",
                    currency: "CAD",
                    price_text: ["CA$", "15.80", ""],
                    price_str: "CA$15.80",
                  },
                  image: {
                    width: 1350,
                    id: 1993,
                    url: "https://img.kwcdn.com/product/fancy/ec340618-5aff-46d2-8323-407436b696ac.jpg",
                    height: 1800,
                  },
                  color: "(93,118,42,1)",
                  seo_link_url:
                    "/ca/zipper-solid-crop-jacket-y2k-long-sleeve-jacket-for--womens-clothing-g-601099536339361.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fec340618-5aff-46d2-8323-407436b696ac.jpg&spec_id=16093&spec_gallery_id=1993&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTU4MA&_oak_mp_inf=EKGj2qKm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D",
                  spec_id: 16093,
                  color_image:
                    "https://img.kwcdn.com/product/9e6b3248-fc7f-11ee-ae8f-0a580a68bd19.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601099536339361&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fec340618-5aff-46d2-8323-407436b696ac.jpg&spec_id=16093&spec_gallery_id=1993&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTU4MA&_oak_mp_inf=EKGj2qKm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/ec340618-5aff-46d2-8323-407436b696ac.jpg",
                  price_str: "15.80",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "15", ".83", ""],
                    reduction_text: [],
                    price: 1583,
                    price_schema: "15.83",
                    currency: "CAD",
                    price_text: ["CA$", "15.83", ""],
                    price_str: "CA$15.83",
                  },
                  image: {
                    width: 1350,
                    id: 1996,
                    url: "https://img.kwcdn.com/product/fancy/75dd46bf-1978-469d-88b8-178ca5814369.jpg",
                    height: 1800,
                  },
                  color: "(46,78,126,1)",
                  seo_link_url:
                    "/ca/zipper-solid-crop-jacket-y2k-long-sleeve-jacket-for--womens-clothing-g-601099536339361.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F75dd46bf-1978-469d-88b8-178ca5814369.jpg&spec_id=16091&spec_gallery_id=1996&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTU4Mw&_oak_mp_inf=EKGj2qKm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D",
                  spec_id: 16091,
                  color_image:
                    "https://img.kwcdn.com/product/ff3c47e4-d2ed-11ee-855e-0a580a68bd19.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601099536339361&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F75dd46bf-1978-469d-88b8-178ca5814369.jpg&spec_id=16091&spec_gallery_id=1996&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTU4Mw&_oak_mp_inf=EKGj2qKm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/75dd46bf-1978-469d-88b8-178ca5814369.jpg",
                  price_str: "15.83",
                },
              ],
              spec_ids: "3002,16093,16091",
              seo_link_url:
                "/ca/zipper-solid-crop-jacket-y2k-long-sleeve-jacket-for--womens-clothing-g-601099536339361.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fmarket%2F7ccf9abbae12c438e2f6cb167b066ede_2762xToQTgV8p.jpg&spec_id=3002&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTYxNA&_oak_gallery_order=1193371416%2C909038367%2C378319949%2C1018003137%2C2076711813&_oak_name_id=7270632941872431314&_oak_mp_inf=EKGj2qKm1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILKbocKoMw%3D%3D&spec_ids=3002,16093,16091",
              queryReleScore: 0.0,
              sales_tip_text: ["9.4K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.9,
                hidden_comment: false,
                comment_num_tips: "2,714",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/c2cc6ba0-7e58-4c94-aea0-46732c1b0778.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/c2cc6ba0-7e58-4c94-aea0-46732c1b0778.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-35%",
              },
              item_type: 0,
              page_alt:
                "womens   fit fleece lined jacket elegant stand collar zip up coat with full zip front soft casual outerwear long sleeve   for fall winter everyday formal events womens fashionable jacket ladies winter coats",
              current_sku_id: 17610439825984,
              tags_info: {
                title_header_tags: [
                  {
                    ext_map: {
                      discount_promotion_tag:
                        '{"text_dx":0.0,"text_color":"#ffffff","width":73.0,"height":18.0,"bg_url":"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png"}',
                    },
                    marketing_tag_type: 2000,
                  },
                ],
              },
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/692126f0348ca9aad84c5a06ce91786d675911b4gs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/c2cc6ba0-7e58-4c94-aea0-46732c1b0778.jpg",
                url: "https://img.kwcdn.com/product/c29e165ee577c967397efd5303bba76881f17133.temu.000001.jpeg",
              },
              title:
                "Women'S Slim-Fit Fleece-Lined Jacket - Elegant Stand Collar Zip-Up Coat with Full-Zip Front, Soft Casual Outerwear, Long Sleeve Winter Warmth for, Fall/Winter Everyday & Formal Events - Women'S Fashionable Jacket, Ladies Winter Coats",
              sales_tip_text_list: [],
              display_end_time_percent: 48,
              sold_quantity_percent: 50,
              p_rec: {
                skc_id: "17596824570588",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "2043286566",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw+vaRnIStdx0lp8uaKJh/g4wRdrGeNesGDlsZIyJjLJ2EH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "4385409367463600700",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "2043286566",
                g: "601103562401822",
                scene_id: "3",
                show_price: "1806",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "117",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "8065138704716454836",
                ts: "1763223031261",
              },
              activity_type: 100,
              mall_id: 634418211454140,
              sales_num: "6.5K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601103562401822&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc2cc6ba0-7e58-4c94-aea0-46732c1b0778.jpg&spec_id=3002&spec_gallery_id=418789&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTgwNg&_oak_gallery_order=2043286566%2C1638360823%2C1152272806%2C2103930872%2C543789982&spec_ids=3002,2001&_oak_mp_inf=EJ7QvaK11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D",
              selected_spec_ids: [3002, 2001],
              extend_fields: {
                sale_fire_flag: true,
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601103562401822&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc2cc6ba0-7e58-4c94-aea0-46732c1b0778.jpg&spec_id=3002&spec_gallery_id=418789&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTgwNg&_oak_gallery_order=2043286566%2C1638360823%2C1152272806%2C2103930872%2C543789982&spec_ids=3002,2001&_oak_mp_inf=EJ7QvaK11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112741202499758110",
                sku_extra_param: {
                  _oak_gallery_order:
                    "2043286566,1638360823,1152272806,2103930872,543789982",
                },
              },
              goods_tags: [],
              show_index: 117,
              price_info: {
                reduction_text: ["-35", "%"],
                market_price_type: 1,
                price_text: ["CA$", "18.06", ""],
                price_str: "CA$18.06",
                split_price_text: ["CA$", "18", ".06", ""],
                currency_str: "CA$",
                price: 1806,
                market_price_str: "28.03",
                market_price: 2803,
                price_schema: "18.06",
                currency: "CAD",
                reduction: 350,
                market_price_text: ["", "28.03", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 418789,
                url_id: "4385409367463600700",
                url: "https://img.kwcdn.com/product/fancy/c2cc6ba0-7e58-4c94-aea0-46732c1b0778.jpg",
                height: 1800,
              },
              sales_tip: "6.5K+ sold",
              visible: true,
              goods_id: 601103562401822,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "18", ".06", ""],
                    reduction_text: ["-35", "%"],
                    price: 1806,
                    market_price_str: "28.03",
                    market_price: 2803,
                    price_schema: "18.06",
                    currency: "CAD",
                    price_text: ["CA$", "18.06", ""],
                    price_str: "CA$18.06",
                    reduction: 350,
                    market_price_text: ["", "28.03", ""],
                  },
                  image: {
                    width: 1350,
                    id: 418789,
                    url: "https://img.kwcdn.com/product/fancy/c2cc6ba0-7e58-4c94-aea0-46732c1b0778.jpg",
                    height: 1800,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens--fit-fleece-lined-jacket-elegant-stand-collar-zip-up-coat-with-full-zip-front-soft-casual-outerwear-long-sleeve--for-fall-winter-everyday-formal-events-womens-fashionable-jacket-ladies-winter-coats-g-601103562401822.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc2cc6ba0-7e58-4c94-aea0-46732c1b0778.jpg&spec_id=3002&spec_gallery_id=418789&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTgwNg&_oak_mp_inf=EJ7QvaK11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/ade12f2f-4610-4037-92a6-282cc569c194.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601103562401822&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc2cc6ba0-7e58-4c94-aea0-46732c1b0778.jpg&spec_id=3002&spec_gallery_id=418789&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTgwNg&_oak_mp_inf=EJ7QvaK11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/c2cc6ba0-7e58-4c94-aea0-46732c1b0778.jpg",
                  price_str: "18.66",
                },
                {
                  price_info: {
                    split_price_text: ["CA$", "17", ".84", ""],
                    reduction_text: ["-32", "%"],
                    price: 1784,
                    market_price_str: "26.31",
                    market_price: 2631,
                    price_schema: "17.84",
                    currency: "CAD",
                    price_text: ["CA$", "17.84", ""],
                    price_str: "CA$17.84",
                    reduction: 320,
                    market_price_text: ["", "26.31", ""],
                  },
                  image: {
                    width: 1350,
                    id: 527214,
                    url: "https://img.kwcdn.com/product/fancy/29cb5a38-2039-48e6-8e43-68efd9565ad3.jpg",
                    height: 1800,
                  },
                  color: "(255,255,255,1)",
                  seo_link_url:
                    "/ca/womens--fit-fleece-lined-jacket-elegant-stand-collar-zip-up-coat-with-full-zip-front-soft-casual-outerwear-long-sleeve--for-fall-winter-everyday-formal-events-womens-fashionable-jacket-ladies-winter-coats-g-601103562401822.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F29cb5a38-2039-48e6-8e43-68efd9565ad3.jpg&spec_id=2001&spec_gallery_id=527214&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc4NA&_oak_mp_inf=EJ7QvaK11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D",
                  spec_id: 2001,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/786d55d2-300f-48fb-aad3-debd05535d64.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601103562401822&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F29cb5a38-2039-48e6-8e43-68efd9565ad3.jpg&spec_id=2001&spec_gallery_id=527214&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc4NA&_oak_mp_inf=EJ7QvaK11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/29cb5a38-2039-48e6-8e43-68efd9565ad3.jpg",
                  price_str: "18.44",
                },
              ],
              spec_ids: "3002,2001",
              display_end_time: 1764565199,
              seo_link_url:
                "/ca/womens--fit-fleece-lined-jacket-elegant-stand-collar-zip-up-coat-with-full-zip-front-soft-casual-outerwear-long-sleeve--for-fall-winter-everyday-formal-events-womens-fashionable-jacket-ladies-winter-coats-g-601103562401822.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc2cc6ba0-7e58-4c94-aea0-46732c1b0778.jpg&spec_id=3002&spec_gallery_id=418789&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTgwNg&_oak_gallery_order=2043286566%2C1638360823%2C1152272806%2C2103930872%2C543789982&_oak_mp_inf=EJ7QvaK11ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D&spec_ids=3002,2001",
              queryReleScore: 0.0,
              sales_tip_text: ["6.5K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 4.9,
                hidden_comment: true,
                comment_num_tips: "30",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/2cf9d9ac-bf6c-4288-ac5f-e4cdbfac21db.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/2cf9d9ac-bf6c-4288-ac5f-e4cdbfac21db.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-45%",
              },
              item_type: 0,
              page_alt:
                "elegant womens gradient color jacket with invisible pockets 100 polyester fabric regular long sleeves zipper details lightweight and   fit 185g no belt included",
              current_sku_id: 17599617255458,
              tags_info: {},
              video: {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                video_url:
                  "https://goods-vod.kwcdn.com/goods-video/47d190dbfdf574086861292cfa419aa9ab6828fdgs2CV.f30.mp4",
                image_url:
                  "https://img.kwcdn.com/product/fancy/2cf9d9ac-bf6c-4288-ac5f-e4cdbfac21db.jpg",
                url: "https://img.kwcdn.com/product/69696b9f5cd930117daf352139505414e72e8530.temu.000001.jpeg",
              },
              title:
                "Elegant Women'S Gradient Color Jacket with Invisible Pockets, 100% Polyester, Fabric, Regular Long Sleeves, Zipper Details, Lightweight And Slim Fit, 185G/㎡ - No Belt Included.",
              sales_tip_text_list: [],
              p_rec: {
                skc_id: "17594289088719",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "0",
                mid: "69999906",
                final_creative_id: "555687676",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxw++HPfbOiTISLXWn9uu+GDv46syIc/lj8Os38eRFXHnAEH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "1843202778614805250",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "555687676",
                g: "601101389378321",
                scene_id: "3",
                show_price: "3952",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "118",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "3286990484086615850",
                ts: "1763223031261",
              },
              mall_id: 634418222689058,
              sales_num: "5.7K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601101389378321&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cf9d9ac-bf6c-4288-ac5f-e4cdbfac21db.jpg&spec_id=15096&spec_gallery_id=177205&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk1Mg&_oak_gallery_order=555687676%2C2054527139%2C1941421760%2C2104867238%2C1466362148&spec_ids=15096&_oak_name_id=3286990484086615850&_oak_mp_inf=EJHmppat1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D",
              selected_spec_ids: [15096],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601101389378321&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cf9d9ac-bf6c-4288-ac5f-e4cdbfac21db.jpg&spec_id=15096&spec_gallery_id=177205&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk1Mg&_oak_gallery_order=555687676%2C2054527139%2C1941421760%2C2104867238%2C1466362148&spec_ids=15096&_oak_name_id=3286990484086615850&_oak_mp_inf=EJHmppat1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                sku_extra_param: {
                  _oak_gallery_order:
                    "555687676,2054527139,1941421760,2104867238,1466362148",
                  _oak_name_id: "3286990484086615850",
                },
              },
              goods_tags: [],
              show_index: 118,
              price_info: {
                split_price_text: ["CA$", "39", ".52", ""],
                currency_str: "CA$",
                reduction_text: ["-45", "%"],
                price: 3952,
                market_price_str: "71.95",
                market_price: 7195,
                market_price_type: 1,
                price_schema: "39.52",
                currency: "CAD",
                price_text: ["CA$", "39.52", ""],
                price_str: "CA$39.52",
                market_price_text: ["", "71.95", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1350,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 177205,
                url_id: "1843202778614805250",
                url: "https://img.kwcdn.com/product/fancy/2cf9d9ac-bf6c-4288-ac5f-e4cdbfac21db.jpg",
                height: 1800,
              },
              sales_tip: "5.7K+ sold",
              visible: true,
              goods_id: 601101389378321,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "39", ".52", ""],
                    reduction_text: [],
                    price: 3952,
                    market_price_str: "71.95",
                    market_price: 7195,
                    price_schema: "39.52",
                    currency: "CAD",
                    price_text: ["CA$", "39.52", ""],
                    price_str: "CA$39.52",
                    market_price_text: ["", "71.95", ""],
                  },
                  image: {
                    width: 1350,
                    id: 177205,
                    url: "https://img.kwcdn.com/product/fancy/2cf9d9ac-bf6c-4288-ac5f-e4cdbfac21db.jpg",
                    height: 1800,
                  },
                  color: "(148,0,211,1)",
                  seo_link_url:
                    "/ca/elegant-womens-gradient-color-jacket-with-invisible-pockets-100-polyester-fabric-regular-long-sleeves-zipper-details-lightweight-and--fit-185g-m2-no-belt-included-g-601101389378321.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cf9d9ac-bf6c-4288-ac5f-e4cdbfac21db.jpg&spec_id=15096&spec_gallery_id=177205&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk1Mg&_oak_mp_inf=EJHmppat1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D",
                  spec_id: 15096,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/19d9f33b-08ab-4328-877c-f608086eb8d4.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601101389378321&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cf9d9ac-bf6c-4288-ac5f-e4cdbfac21db.jpg&spec_id=15096&spec_gallery_id=177205&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk1Mg&_oak_mp_inf=EJHmppat1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/2cf9d9ac-bf6c-4288-ac5f-e4cdbfac21db.jpg",
                  price_str: "39.52",
                },
              ],
              spec_ids: "15096",
              seo_link_url:
                "/ca/elegant-womens-gradient-color-jacket-with-invisible-pockets-100-polyester-fabric-regular-long-sleeves-zipper-details-lightweight-and--fit-185g-m2-no-belt-included-g-601101389378321.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cf9d9ac-bf6c-4288-ac5f-e4cdbfac21db.jpg&spec_id=15096&spec_gallery_id=177205&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk1Mg&_oak_gallery_order=555687676%2C2054527139%2C1941421760%2C2104867238%2C1466362148&_oak_name_id=3286990484086615850&_oak_mp_inf=EJHmppat1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D&spec_ids=15096",
              queryReleScore: 0.0,
              sales_tip_text: ["5.7K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 5.0,
                hidden_comment: true,
                comment_num_tips: "16",
              },
              adult_goods: false,
            },
            {
              long_thumb_url:
                "https://img.kwcdn.com/product/fancy/406735b2-d736-4644-9b69-cd1b0f8ea9ea.jpg",
              thumb_url:
                "https://img.kwcdn.com/product/fancy/406735b2-d736-4644-9b69-cd1b0f8ea9ea.jpg",
              ware_house_type: 0,
              benefit_text: {
                text: "-42%",
              },
              item_type: 0,
              page_alt:
                "womens short medium length full zip jacket   fit black winter coat with white piping trim   collar full zip front closure machine washable lightweight outerwear for work casual formal events spring autumn jacket for women winter jacket for women jackets for women",
              current_sku_id: 17608261084650,
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
                ],
              },
              video: {
                video_url: "",
              },
              title:
                "Women's Short/Medium-Length Full-Zip Jacket - Slim-Fit Black Winter Coat with White Piping Trim, Structured Collar & Full-Zip Front Closure | Machine-Washable Lightweight Outerwear for Work, Casual & Formal Events (Spring/Autumn), Jacket For Women, Winter Jacket For Women, Jackets For Women",
              sales_tip_text_list: [],
              display_end_time_percent: 7,
              sold_quantity_percent: 0,
              p_rec: {
                skc_id: "17596330824393",
                list_id: "category_list_a3f55fa941104ff7b82cf21064bffeb0",
                item_type: "0",
                ad_goods: "1",
                mid: "69999906",
                final_creative_id: "996286863",
                sort_by_type: "873027542",
                st_model_point:
                  "CnDB/dDUC+anFL+sL10uTEprn9BnB8uF5G3Om/8ExcjFKTLysjMuxsA98dsINPx5foyI0JdIZUtsEKJ+/AX2LE0oscCfn8SCZnXCT89rmqpxwwcTb2RifpX520/QJVF1U2EYm4HeqJDli/hIs24s3ou/EH4YbyIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
                scene: "opt",
                image_url_id: "1327022367599936738",
                show_currency: "CAD",
                no_result: "0",
                offset: "80",
                engine_creative_id: "996286863",
                g: "601103150332309",
                scene_id: "3",
                show_price: "3248",
                opt_id: "721",
                ts_req: "0",
                version: "5",
                search_id: "jufoKT98OhtiuV1wJWTU4z_XLxRkzqINicVeZwzqvE4=",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "rec",
                idx: "119",
                region: "37",
                bid: "69999705",
                cloud_env: "usm1",
                creative_title_id: "7653560259677198581",
                ts: "1763223031261",
              },
              activity_type: 13,
              mall_id: 634418224697173,
              sales_num: "5.7K+",
              link_url:
                "goods.html?_bg_fs=1&goods_id=601103150332309&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F406735b2-d736-4644-9b69-cd1b0f8ea9ea.jpg&spec_id=3002&spec_gallery_id=362314&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI0OA&_oak_gallery_order=996286863%2C885820480%2C1501557756%2C873404035%2C818936798&spec_ids=3002&_oak_name_id=7653560259677198581&_oak_mp_inf=EJXz%2Ft2z1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D",
              selected_spec_ids: [3002],
              extend_fields: {
                floating_link_url:
                  "goods.html?_bg_fs=1&goods_id=601103150332309&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F406735b2-d736-4644-9b69-cd1b0f8ea9ea.jpg&spec_id=3002&spec_gallery_id=362314&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI0OA&_oak_gallery_order=996286863%2C885820480%2C1501557756%2C873404035%2C818936798&spec_ids=3002&_oak_name_id=7653560259677198581&_oak_mp_inf=EJXz%2Ft2z1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
                support_tag_carousel: true,
                detail_id: "112736906836228501",
                sku_extra_param: {
                  _oak_gallery_order:
                    "996286863,885820480,1501557756,873404035,818936798",
                  _oak_name_id: "7653560259677198581",
                },
              },
              goods_tags: [],
              show_index: 119,
              price_info: {
                reduction_text: ["-42", "%"],
                market_price_type: 1,
                price_text: ["CA$", "32.48", ""],
                price_str: "CA$32.48",
                price_color: "#FB7701",
                split_price_text: ["CA$", "32", ".48", ""],
                currency_str: "CA$",
                price: 3248,
                market_price_str: "56.68",
                market_price: 5668,
                price_schema: "32.48",
                currency: "CAD",
                reduction: 420,
                market_price_text: ["", "56.68", ""],
              },
              image: {
                cut_bottom_percent: 0,
                cut_left_percent: 556,
                width: 1340,
                cut_right_percent: 556,
                cut_top_percent: 0,
                id: 362314,
                url_id: "1327022367599936738",
                url: "https://img.kwcdn.com/product/fancy/406735b2-d736-4644-9b69-cd1b0f8ea9ea.jpg",
                height: 1785,
              },
              sales_tip: "5.7K+ sold",
              visible: true,
              goods_id: 601103150332309,
              opt_id: 724,
              skc_list: [
                {
                  price_info: {
                    split_price_text: ["CA$", "32", ".48", ""],
                    reduction_text: ["-42", "%"],
                    price: 3248,
                    market_price_str: "56.68",
                    market_price: 5668,
                    price_schema: "32.48",
                    currency: "CAD",
                    price_text: ["CA$", "32.48", ""],
                    price_str: "CA$32.48",
                    price_color: "#FB7701",
                    reduction: 420,
                    market_price_text: ["", "56.68", ""],
                  },
                  image: {
                    width: 1340,
                    id: 362314,
                    url: "https://img.kwcdn.com/product/fancy/406735b2-d736-4644-9b69-cd1b0f8ea9ea.jpg",
                    height: 1785,
                  },
                  color: "(0,0,0,1)",
                  seo_link_url:
                    "/ca/womens-short-medium-length-full-zip-jacket--fit-black-winter-coat-with-white-piping-trim--collar-full-zip-front-closure-machine-washable-lightweight-outerwear-for-work-casual-formal-events-spring-autumn-jacket-for-women-winter-jacket-for-women-jackets-for-women-g-601103150332309.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F406735b2-d736-4644-9b69-cd1b0f8ea9ea.jpg&spec_id=3002&spec_gallery_id=362314&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI0OA&_oak_mp_inf=EJXz%2Ft2z1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D",
                  spec_id: 3002,
                  color_image:
                    "https://img.kwcdn.com/product/fancy/b04e2282-b1f5-4e87-8a36-e83ae2119435.png",
                  link_url:
                    "goods.html?_bg_fs=1&goods_id=601103150332309&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F406735b2-d736-4644-9b69-cd1b0f8ea9ea.jpg&spec_id=3002&spec_gallery_id=362314&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI0OA&_oak_mp_inf=EJXz%2Ft2z1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D",
                  gallery_url:
                    "https://img.kwcdn.com/product/fancy/406735b2-d736-4644-9b69-cd1b0f8ea9ea.jpg",
                  price_str: "32.49",
                },
              ],
              spec_ids: "3002",
              display_end_time: 1763787599,
              seo_link_url:
                "/ca/womens-short-medium-length-full-zip-jacket--fit-black-winter-coat-with-white-piping-trim--collar-full-zip-front-closure-machine-washable-lightweight-outerwear-for-work-casual-formal-events-spring-autumn-jacket-for-women-winter-jacket-for-women-jackets-for-women-g-601103150332309.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F406735b2-d736-4644-9b69-cd1b0f8ea9ea.jpg&spec_id=3002&spec_gallery_id=362314&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI0OA&_oak_gallery_order=996286863%2C885820480%2C1501557756%2C873404035%2C818936798&_oak_name_id=7653560259677198581&_oak_mp_inf=EJXz%2Ft2z1ogBGi5jYXRlZ29yeV9saXN0X2EzZjU1ZmE5NDExMDRmZjdiODJjZjIxMDY0YmZmZWIwILObocKoMw%3D%3D&spec_ids=3002",
              queryReleScore: 0.0,
              sales_tip_text: ["5.7K+", "sold"],
              opt_type: 3,
              comment: {
                goods_score: 5.0,
                hidden_comment: true,
                comment_num_tips: "2",
              },
              adult_goods: false,
            },
          ],
          share_url: "https://share.temu.com/wGmAbfknUo",
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
      list_id: item.p_rec.list_id,
      opt_id: item.opt_id,
      name: title,
      title: item.title,
      image: item.image?.url,
      image_url: item.video?.url,
      price: item.price_info?.price_schema,
      show_price: item.p_rec?.show_price,
      market_price: item.price_info?.market_price,
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
        opt_id: productData.opt_id,
        list_id: productData.list_id,
        good_id: productData.id,
        name: productData.title,
        price: toNumber(productData.price ?? "0"),
        market_price: productData.market_price,
        price_str: productData.price_str,
        show_price: productData.show_price,
        currency: productData.currency,
        origin_image_url: productData.image,
        image_url: productData.image_url,
        discount: toNumber(productData.discount ?? "0"),
        sell_count: productData.sales,
        star_store: productData.mall_tag?.[0]?.text || null,
        brand_id: brand?.id,
        category_id: category?.id,
        total_star: Number.isFinite(
          parseFloat(productData.comment?.goods_score ?? "0")
        )
          ? parseFloat(productData.comment?.goods_score ?? "0")
          : 0,
        total_comment: Number(productData.comment?.comment_num_tips) || 0,
      };

      const product = productRepository.create(productDataToSave);
      const saved = await productRepository.save(product);

      // 4️⃣ Add goods_tags & title_header_tags to ProductTag
      const allTags = [
        ...(Array.isArray(productData.goods_tags)
          ? productData.goods_tags
          : typeof productData.goods_tags === "object"
          ? Object.values(productData.goods_tags)
          : []),
        ...(Array.isArray(productData.tags_info?.title_header_tags)
          ? productData.tags_info.title_header_tags
          : []),
        ...(Array.isArray(productData.tags_info?.mix_benefit_tags)
          ? productData.tags_info.mix_benefit_tags
          : []),
      ];

      for (const tag of allTags) {
        // console.log(tag.);

        let localExplanation: { title?: string; content?: string } = {};
        if (tag?.ext_map?.local_explanation) {
          try {
            localExplanation = JSON.parse(tag.ext_map.local_explanation);
          } catch (err) {
            console.warn("Failed to parse local_explanation JSON:", err);
          }
        }

        const productTag = productTagRepository.create({
          text_rich: Array.isArray(tag.tag_rich_text?.text_rich)
            ? tag.tag_rich_text.text_rich.map((rich: any) => rich?.value)
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

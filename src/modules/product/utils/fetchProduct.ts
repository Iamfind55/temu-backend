import { getRepository } from "typeorm";
import { Product } from "../entity";
import { Category } from "../../category";

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
    };
  });
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

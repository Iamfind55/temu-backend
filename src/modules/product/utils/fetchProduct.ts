import { DeepPartial, getRepository } from "typeorm";
import { Branding } from "../../branding";
import { Category } from "../../category";
import { ProductTag } from "../../productTag";
import { Product } from "../entity";

export const fetchProducts = async () => {
  const data = {
    result: {
      server_time: 1763271940578,
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
            list_id: "category_list_36456926c2434396bca3105b83f3d83e",
            item_type: "0",
            g: "0",
            scene_id: "3",
            mid: "69999906",
            opt_id: "1084",
            ts_req: "0",
            version: "5",
            search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
            scene: "opt",
            gin_fallback: "0",
            opt_type: "0",
            goods_source: "search",
            idx: "-1",
            region: "37",
            no_result: "0",
            bid: "69999705",
            cloud_env: "usm1",
            ts: "1763271940578",
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
                list_id: "category_list_36456926c2434396bca3105b83f3d83e",
                item_type: "0",
                g: "0",
                scene_id: "3",
                mid: "69999906",
                opt_id: "1084",
                ts_req: "0",
                version: "5",
                search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
                scene: "opt",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "search",
                idx: "0",
                region: "37",
                no_result: "0",
                bid: "69999705",
                cloud_env: "usm1",
                ts: "1763271940578",
              },
              id: 0,
              sort: [1],
            },
            {
              name: "Top sales",
              p_search: {
                offset: "80",
                list_id: "category_list_36456926c2434396bca3105b83f3d83e",
                item_type: "0",
                g: "0",
                scene_id: "3",
                mid: "69999906",
                opt_id: "1084",
                ts_req: "0",
                version: "5",
                search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
                scene: "opt",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "search",
                idx: "1",
                region: "37",
                no_result: "0",
                bid: "69999705",
                cloud_env: "usm1",
                ts: "1763271940578",
              },
              id: 1,
              sort: [1],
            },
            {
              name: "Most recent",
              p_search: {
                offset: "80",
                list_id: "category_list_36456926c2434396bca3105b83f3d83e",
                item_type: "0",
                g: "0",
                scene_id: "3",
                mid: "69999906",
                opt_id: "1084",
                ts_req: "0",
                version: "5",
                search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
                scene: "opt",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "search",
                idx: "2",
                region: "37",
                no_result: "0",
                bid: "69999705",
                cloud_env: "usm1",
                ts: "1763271940578",
              },
              id: 3,
              sort: [1],
            },
            {
              name: "Price low to high",
              p_search: {
                offset: "80",
                list_id: "category_list_36456926c2434396bca3105b83f3d83e",
                item_type: "0",
                g: "0",
                scene_id: "3",
                mid: "69999906",
                opt_id: "1084",
                ts_req: "0",
                version: "5",
                search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
                scene: "opt",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "search",
                idx: "3",
                region: "37",
                no_result: "0",
                bid: "69999705",
                cloud_env: "usm1",
                ts: "1763271940578",
              },
              id: 2,
              sort: [0],
            },
            {
              name: "Price high to low",
              p_search: {
                offset: "80",
                list_id: "category_list_36456926c2434396bca3105b83f3d83e",
                item_type: "0",
                g: "0",
                scene_id: "3",
                mid: "69999906",
                opt_id: "1084",
                ts_req: "0",
                version: "5",
                search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
                scene: "opt",
                gin_fallback: "0",
                opt_type: "0",
                goods_source: "search",
                idx: "4",
                region: "37",
                no_result: "0",
                bid: "69999705",
                cloud_env: "usm1",
                ts: "1763271940578",
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
        title: "Girls' Dresses",
        default_row_cnt: 0,
        opt_list: [
          {
            tab_type: 0,
            image_url:
              "https://img.kwcdn.com/product/1e19d463eed/d8b02b34-b667-4f84-b04c-86679e12e346_213x213.png",
            p_rec: {
              offset: "80",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              g: "0",
              scene_id: "3",
              mid: "69999906",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              scene: "opt",
              gin_fallback: "0",
              opt_hash_id: "878615917",
              opt_type: "2",
              goods_source: "rec",
              idx: "-1",
              region: "37",
              no_result: "0",
              bid: "69999705",
              cloud_env: "usm1",
              ts: "1763271940583",
            },
            disable_dup: false,
            pattern: 0,
            opt_type: 2,
            opt_name: "Girls' Dresses",
            priority: 0,
            opt_id: 1084,
            is_featured: false,
          },
        ],
        goods_list: [
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/24be812c-3522-4630-bb04-4a61c69f89eb.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/24be812c-3522-4630-bb04-4a61c69f89eb.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-45%",
            },
            item_type: 0,
            page_alt:
              "young girls summer 3pcs set simple dress with bubble sleeves striped floral   fashionable outfit for vacation and outdoor activities",
            current_sku_id: 17601381249506,
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
                  color: "#555555",
                  marketing_tag_type: 902,
                  tag_id: 91003,
                  text: "Original Design",
                  tag_series: 2,
                },
              ],
            },
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/goods-video/f48dec49efa0cfd51eac2f295ee43449e0977958gs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/24be812c-3522-4630-bb04-4a61c69f89eb.jpg",
              url: "https://img.kwcdn.com/product/284d166e03c7ec79040aa1de54349d19c202aa65.temu.000001.jpeg",
            },
            title:
              "Young Girls Summer 3pcs Set: Simple Dress with Bubble Sleeves, Striped Floral Print, Casual Fashionable Outfit for Vacation and Outdoor Activities",
            sales_tip_text_list: ["10K+", "sold"],
            display_end_time_percent: 0,
            sold_quantity_percent: 0,
            p_rec: {
              skc_id: "17594719017228",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "803776646",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRBN+Gupj9DmSpexwxcMJLD1pxZs5XZv98ObCFDiJx86NtdXUbNiAaoZya0PIpnZgPYQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "2051801397275045106",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "2054478173",
              g: "601100288674984",
              scene_id: "3",
              show_price: "2111",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "80",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "6061972733639728060",
              ts: "1763271940575",
            },
            activity_type: 27,
            mall_id: 634418211704677,
            sales_num: "10K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601100288674984&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F24be812c-3522-4630-bb04-4a61c69f89eb.jpg&spec_id=15101&spec_gallery_id=200596&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjExMQ&_oak_gallery_order=2054478173%2C1269700555%2C1522593279%2C1098156006%2C1360951269&spec_ids=15101&_oak_mp_inf=EKiZuYmp1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlIK%2BzytmoMw%3D%3D",
            selected_spec_ids: [15101],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601100288674984&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F24be812c-3522-4630-bb04-4a61c69f89eb.jpg&spec_id=15101&spec_gallery_id=200596&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjExMQ&_oak_gallery_order=2054478173%2C1269700555%2C1522593279%2C1098156006%2C1360951269&spec_ids=15101&_oak_mp_inf=EKiZuYmp1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlIK%2BzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112741315804679336",
              sku_extra_param: {
                _oak_gallery_order:
                  "2054478173,1269700555,1522593279,1098156006,1360951269",
              },
            },
            goods_tags: [
              {
                color: "#555555",
                marketing_tag_type: 902,
                tag_id: 91003,
                text: "Original Design",
                tag_series: 2,
              },
            ],
            show_index: 80,
            price_info: {
              reduction_text: ["-45", "%"],
              market_price_type: 1,
              price_text: ["CA$", "21.11", ""],
              price_str: "CA$21.11",
              price_color: "#D9001B",
              split_price_text: ["CA$", "21", ".11", ""],
              currency_str: "CA$",
              price: 2111,
              market_price_str: "38.86",
              market_price: 3886,
              price_schema: "21.11",
              currency: "CAD",
              reduction: 450,
              market_price_text: ["", "38.86", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 200596,
              url_id: "2051801397275045106",
              url: "https://img.kwcdn.com/product/fancy/24be812c-3522-4630-bb04-4a61c69f89eb.jpg",
              height: 1785,
            },
            sales_tip: "10K+ sold",
            visible: true,
            goods_id: 601100288674984,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "21", ".11", ""],
                  reduction_text: ["-45", "%"],
                  price: 2111,
                  market_price_str: "38.86",
                  market_price: 3886,
                  price_schema: "21.11",
                  currency: "CAD",
                  price_text: ["CA$", "21.11", ""],
                  price_str: "CA$21.11",
                  price_color: "#D9001B",
                  reduction: 450,
                  market_price_text: ["", "38.86", ""],
                },
                image: {
                  width: 1340,
                  id: 200596,
                  url: "https://img.kwcdn.com/product/fancy/24be812c-3522-4630-bb04-4a61c69f89eb.jpg",
                  height: 1785,
                },
                color: "(179,92,68,1)",
                seo_link_url:
                  "/ca/young-girls-summer-3pcs-set-simple-dress-with-bubble-sleeves-striped-floral--fashionable-outfit-for-vacation-and-outdoor-activities-g-601100288674984.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F24be812c-3522-4630-bb04-4a61c69f89eb.jpg&spec_id=15101&spec_gallery_id=200596&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjExMQ&_oak_mp_inf=EKiZuYmp1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlIK%2BzytmoMw%3D%3D",
                spec_id: 15101,
                color_image:
                  "https://img.kwcdn.com/product/fancy/c659d766-2aaa-48b8-af9d-5fce6767b2c5.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100288674984&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F24be812c-3522-4630-bb04-4a61c69f89eb.jpg&spec_id=15101&spec_gallery_id=200596&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjExMQ&_oak_mp_inf=EKiZuYmp1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlIK%2BzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/24be812c-3522-4630-bb04-4a61c69f89eb.jpg",
                price_str: "26.39",
              },
            ],
            spec_ids: "15101",
            display_end_time: 1764997199,
            seo_link_url:
              "/ca/young-girls-summer-3pcs-set-simple-dress-with-bubble-sleeves-striped-floral--fashionable-outfit-for-vacation-and-outdoor-activities-g-601100288674984.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F24be812c-3522-4630-bb04-4a61c69f89eb.jpg&spec_id=15101&spec_gallery_id=200596&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjExMQ&_oak_gallery_order=2054478173%2C1269700555%2C1522593279%2C1098156006%2C1360951269&_oak_mp_inf=EKiZuYmp1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlIK%2BzytmoMw%3D%3D&spec_ids=15101",
            queryReleScore: 0.0,
            sales_tip_text: ["10K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.8,
              hidden_comment: false,
              comment_num_tips: "361",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/2e962d01-a22d-4b8c-b637-17eaed614548.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/2e962d01-a22d-4b8c-b637-17eaed614548.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-15%",
            },
            item_type: 0,
            page_alt:
              "  yan   girls 2025 summer dress elegant princess smocked waist lavender dress with   details lightweight breathable machine washable for kids casual special occasions dresses for girls",
            current_sku_id: 17597148553939,
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
            },
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/goods-video/bf0851adbbe7d573b3fca1342eebfb1ce06f9959gs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/2e962d01-a22d-4b8c-b637-17eaed614548.jpg",
              url: "https://img.kwcdn.com/product/20aff3c4d31162687939522377ec7a0d1837b2cc.temu.000001.jpeg",
            },
            title:
              "Qidi Yan Selection Girls' 2025 Summer Dress - Elegant Princess Smocked Waist Lavender Dress with Ruffled Details, Lightweight Breathable Machine-Washable for & Kids, Casual & Special Occasions, Dresses for Girls",
            sales_tip_text_list: ["1.5K+", "sold"],
            display_end_time_percent: 15,
            sold_quantity_percent: 69,
            p_rec: {
              skc_id: "17593608971847",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "1",
              mid: "69999906",
              final_creative_id: "1157646641",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRB5bxCO01yVhJ6cHIthGYXlWLTvVeJzHPK3837WvGMRtbbCu2bUIpNVUE6qGehc0+0QiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "3887664764984892731",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1157646641",
              g: "601100788239358",
              scene_id: "3",
              show_price: "1427",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "81",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "1464893351309917001",
              ts: "1763271940575",
            },
            activity_type: 2,
            mall_id: 634418213567706,
            sales_num: "1.5K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601100788239358&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2e962d01-a22d-4b8c-b637-17eaed614548.jpg&spec_id=120196180&spec_gallery_id=99911&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQyNw&_oak_gallery_order=1157646641%2C1605808639%2C1899059189&spec_ids=120196180&_oak_mp_inf=EP6X1Peq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlIK%2BzytmoMw%3D%3D",
            selected_spec_ids: [120196180],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601100788239358&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2e962d01-a22d-4b8c-b637-17eaed614548.jpg&spec_id=120196180&spec_gallery_id=99911&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQyNw&_oak_gallery_order=1157646641%2C1605808639%2C1899059189&spec_ids=120196180&_oak_mp_inf=EP6X1Peq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlIK%2BzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112721527128722430",
              sku_extra_param: {
                _oak_gallery_order: "1157646641,1605808639,1899059189",
              },
            },
            goods_tags: [],
            show_index: 81,
            price_info: {
              reduction_text: ["-15", "%"],
              market_price_type: 1,
              price_text: ["CA$", "14.27", ""],
              price_str: "CA$14.27",
              price_color: "#FB7701",
              split_price_text: ["CA$", "14", ".27", ""],
              currency_str: "CA$",
              price: 1427,
              market_price_str: "16.85",
              market_price: 1685,
              price_schema: "14.27",
              currency: "CAD",
              reduction: 150,
              market_price_text: ["", "16.85", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 99911,
              url_id: "3887664764984892731",
              url: "https://img.kwcdn.com/product/fancy/2e962d01-a22d-4b8c-b637-17eaed614548.jpg",
              height: 1785,
            },
            sales_tip: "1.5K+ sold",
            visible: true,
            goods_id: 601100788239358,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "14", ".27", ""],
                  reduction_text: ["-15", "%"],
                  price: 1427,
                  market_price_str: "16.85",
                  market_price: 1685,
                  price_schema: "14.27",
                  currency: "CAD",
                  price_text: ["CA$", "14.27", ""],
                  price_str: "CA$14.27",
                  price_color: "#FB7701",
                  reduction: 150,
                  market_price_text: ["", "16.85", ""],
                },
                image: {
                  width: 1340,
                  id: 99911,
                  url: "https://img.kwcdn.com/product/fancy/2e962d01-a22d-4b8c-b637-17eaed614548.jpg",
                  height: 1785,
                },
                color: "",
                seo_link_url:
                  "/ca/-yan--girls-2025-summer-dress-elegant-princess-smocked-waist-lavender-dress-with--details-lightweight-breathable-machine-washable-for-kids-casual-special-occasions-dresses-for-girls-g-601100788239358.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2e962d01-a22d-4b8c-b637-17eaed614548.jpg&spec_id=120196180&spec_gallery_id=99911&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQyNw&_oak_mp_inf=EP6X1Peq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlIK%2BzytmoMw%3D%3D",
                spec_id: 120196180,
                color_image:
                  "https://img.kwcdn.com/product/fancy/d88d988a-84dd-4cf4-952a-2d6a69e4fe42.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100788239358&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2e962d01-a22d-4b8c-b637-17eaed614548.jpg&spec_id=120196180&spec_gallery_id=99911&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQyNw&_oak_mp_inf=EP6X1Peq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlIK%2BzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/2e962d01-a22d-4b8c-b637-17eaed614548.jpg",
                price_str: "14.92",
              },
            ],
            spec_ids: "120196180",
            display_end_time: 1763787599,
            seo_link_url:
              "/ca/-yan--girls-2025-summer-dress-elegant-princess-smocked-waist-lavender-dress-with--details-lightweight-breathable-machine-washable-for-kids-casual-special-occasions-dresses-for-girls-g-601100788239358.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2e962d01-a22d-4b8c-b637-17eaed614548.jpg&spec_id=120196180&spec_gallery_id=99911&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQyNw&_oak_gallery_order=1157646641%2C1605808639%2C1899059189&_oak_mp_inf=EP6X1Peq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlIK%2BzytmoMw%3D%3D&spec_ids=120196180",
            queryReleScore: 0.0,
            sales_tip_text: ["1.5K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: false,
              comment_num_tips: "109",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/51dfafcc-24ed-4501-9813-992fa65f75e2.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/51dfafcc-24ed-4501-9813-992fa65f75e2.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-32%",
            },
            item_type: 0,
            page_alt:
              "girls sleeveless a line princess dress with star sequin mesh skirt bow belt emerald green with white stars machine washable summer party dress for birthdays vacations casual  ",
            current_sku_id: 17593436800174,
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
              "[Green Princess Dress] Emerald Green Girls' Sleeveless A-Line Princess Dress | Star Sequin Mesh Skirt & Bow Belt, Machine Washable Summer Party Dress for Birthdays, Vacations, Casual Outings",
            sales_tip_text_list: ["5.1K+", "sold"],
            display_end_time_percent: 54,
            sold_quantity_percent: 78,
            p_rec: {
              skc_id: "17592543589751",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "1",
              mid: "69999906",
              final_creative_id: "2097086754",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRBxWKBaAj3leCMpOkSLDa0RJSjFrOjBo8vtAx+vRZbyHUhQonzAWYqyE89Orbd6dPMQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "3782469353378435868",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "2097086754",
              g: "601099818405442",
              scene_id: "3",
              show_price: "1072",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "82",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "2343157523338626880",
              ts: "1763271940575",
            },
            activity_type: 13,
            mall_id: 136175906681,
            sales_num: "5.1K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601099818405442&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F51dfafcc-24ed-4501-9813-992fa65f75e2.jpg&spec_id=15084&spec_gallery_id=36467&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA3Mg&_oak_gallery_order=2097086754&spec_ids=15084&_oak_mp_inf=EMKcmqmn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D",
            selected_spec_ids: [15084],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601099818405442&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F51dfafcc-24ed-4501-9813-992fa65f75e2.jpg&spec_id=15084&spec_gallery_id=36467&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA3Mg&_oak_gallery_order=2097086754&spec_ids=15084&_oak_mp_inf=EMKcmqmn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112624732734262850",
              sku_extra_param: {
                _oak_gallery_order: "2097086754",
              },
            },
            goods_tags: [],
            show_index: 82,
            price_info: {
              reduction_text: ["-32", "%"],
              market_price_type: 1,
              price_text: ["CA$", "10.72", ""],
              price_str: "CA$10.72",
              price_color: "#FB7701",
              split_price_text: ["CA$", "10", ".72", ""],
              currency_str: "CA$",
              price: 1072,
              market_price_str: "15.96",
              market_price: 1596,
              price_schema: "10.72",
              currency: "CAD",
              reduction: 320,
              market_price_text: ["", "15.96", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 36467,
              url_id: "3782469353378435868",
              url: "https://img.kwcdn.com/product/fancy/51dfafcc-24ed-4501-9813-992fa65f75e2.jpg",
              height: 1785,
            },
            sales_tip: "5.1K+ sold",
            visible: true,
            goods_id: 601099818405442,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "10", ".72", ""],
                  reduction_text: ["-32", "%"],
                  price: 1072,
                  market_price_str: "15.96",
                  market_price: 1596,
                  price_schema: "10.72",
                  currency: "CAD",
                  price_text: ["CA$", "10.72", ""],
                  price_str: "CA$10.72",
                  price_color: "#FB7701",
                  reduction: 320,
                  market_price_text: ["", "15.96", ""],
                },
                image: {
                  width: 1340,
                  id: 36467,
                  url: "https://img.kwcdn.com/product/fancy/51dfafcc-24ed-4501-9813-992fa65f75e2.jpg",
                  height: 1785,
                },
                color: "(0,128,0,1)",
                seo_link_url:
                  "/ca/girls-sleeveless-a-line-princess-dress-with-star-sequin-mesh-skirt-bow-belt-emerald-green-with-white-stars-machine-washable-summer-party-dress-for-birthdays-vacations-casual--g-601099818405442.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F51dfafcc-24ed-4501-9813-992fa65f75e2.jpg&spec_id=15084&spec_gallery_id=36467&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA3Mg&_oak_mp_inf=EMKcmqmn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D",
                spec_id: 15084,
                color_image:
                  "https://img.kwcdn.com/product/fancy/79bf2b5e-2306-4b04-9644-acfe3fd82121.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601099818405442&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F51dfafcc-24ed-4501-9813-992fa65f75e2.jpg&spec_id=15084&spec_gallery_id=36467&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA3Mg&_oak_mp_inf=EMKcmqmn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/51dfafcc-24ed-4501-9813-992fa65f75e2.jpg",
                price_str: "11.58",
              },
            ],
            spec_ids: "15084",
            display_end_time: 1764392399,
            seo_link_url:
              "/ca/girls-sleeveless-a-line-princess-dress-with-star-sequin-mesh-skirt-bow-belt-emerald-green-with-white-stars-machine-washable-summer-party-dress-for-birthdays-vacations-casual--g-601099818405442.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F51dfafcc-24ed-4501-9813-992fa65f75e2.jpg&spec_id=15084&spec_gallery_id=36467&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA3Mg&_oak_gallery_order=2097086754&_oak_mp_inf=EMKcmqmn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D&spec_ids=15084",
            queryReleScore: 0.0,
            sales_tip_text: ["5.1K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.8,
              hidden_comment: false,
              comment_num_tips: "210",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/1f65f36d-8c3e-47d2-92e1-689d0d03fc96.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/1f65f36d-8c3e-47d2-92e1-689d0d03fc96.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-46%",
            },
            item_type: 0,
            page_alt:
              "girls elegant sleeveless party dress two tone burgundy flared skirt non stretchy fabric for formal events everyday special occasions machine washable girls clothing",
            current_sku_id: 17606399955130,
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
                "https://goods-vod.kwcdn.com/goods-video/c104bccca3281e4b6577b4bf5a8cc2fff4e2d857gs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/1f65f36d-8c3e-47d2-92e1-689d0d03fc96.jpg",
              url: "https://img.kwcdn.com/product/9cd54f157d7d340b8867de5957e50f0b624e785c.temu.000001.jpeg",
            },
            title:
              "[Elegant Sleeveless Dress] Elegant Sleeveless Girls' Party Dress | Two-Tone Burgundy & Flared Skirt, Non-Stretchy Fabric for Formal Events, Everyday & Special Occasions - Machine Washable",
            sales_tip_text_list: ["3.2K+", "sold"],
            display_end_time_percent: 50,
            sold_quantity_percent: 55,
            p_rec: {
              skc_id: "17595902194087",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1301025759",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRABZTiFBSGHZbmCKh4GMuuhV/MYzhxpO0QFYD1cEX0oJ5J8tnQE27fjWvtygRBtL+kQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "7207509251052611452",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1301025759",
              g: "601102786892789",
              scene_id: "3",
              show_price: "895",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "83",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "4221551986303701996",
              ts: "1763271940575",
            },
            activity_type: 100,
            mall_id: 634418221640983,
            sales_num: "3.2K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601102786892789&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F1f65f36d-8c3e-47d2-92e1-689d0d03fc96.jpg&spec_id=16059&spec_gallery_id=325365&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=ODk1&_oak_gallery_order=1301025759%2C497874777&spec_ids=16059,16057&_oak_mp_inf=EPWn2LCy1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D",
            selected_spec_ids: [16059, 16057],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601102786892789&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F1f65f36d-8c3e-47d2-92e1-689d0d03fc96.jpg&spec_id=16059&spec_gallery_id=325365&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=ODk1&_oak_gallery_order=1301025759%2C497874777&spec_ids=16059,16057&_oak_mp_inf=EPWn2LCy1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112697297230107637",
              sku_extra_param: {
                _oak_gallery_order: "1301025759,497874777",
              },
            },
            goods_tags: [],
            show_index: 83,
            price_info: {
              reduction_text: ["-46", "%"],
              market_price_type: 1,
              price_text: ["CA$", "8.95", ""],
              price_str: "CA$8.95",
              split_price_text: ["CA$", "8", ".95", ""],
              currency_str: "CA$",
              price: 895,
              market_price_str: "16.68",
              market_price: 1668,
              price_schema: "8.95",
              currency: "CAD",
              reduction: 460,
              market_price_text: ["", "16.68", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 325365,
              url_id: "7207509251052611452",
              url: "https://img.kwcdn.com/product/fancy/1f65f36d-8c3e-47d2-92e1-689d0d03fc96.jpg",
              height: 1785,
            },
            sales_tip: "3.2K+ sold",
            visible: true,
            goods_id: 601102786892789,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "8", ".95", ""],
                  reduction_text: ["-46", "%"],
                  price: 895,
                  market_price_str: "16.68",
                  market_price: 1668,
                  price_schema: "8.95",
                  currency: "CAD",
                  price_text: ["CA$", "8.95", ""],
                  price_str: "CA$8.95",
                  reduction: 460,
                  market_price_text: ["", "16.68", ""],
                },
                image: {
                  width: 1340,
                  id: 325365,
                  url: "https://img.kwcdn.com/product/fancy/1f65f36d-8c3e-47d2-92e1-689d0d03fc96.jpg",
                  height: 1785,
                },
                color: "(179,66,74,1)",
                seo_link_url:
                  "/ca/girls-elegant-sleeveless-party-dress-two-tone-burgundy-flared-skirt-non-stretchy-fabric-for-formal-events-everyday-special-occasions-machine-washable-girls-clothing-g-601102786892789.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F1f65f36d-8c3e-47d2-92e1-689d0d03fc96.jpg&spec_id=16059&spec_gallery_id=325365&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=ODk1&_oak_mp_inf=EPWn2LCy1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D",
                spec_id: 16059,
                color_image:
                  "https://img.kwcdn.com/product/fancy/fae7aa46-746b-4833-ac27-8ef2cfe5f507.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601102786892789&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F1f65f36d-8c3e-47d2-92e1-689d0d03fc96.jpg&spec_id=16059&spec_gallery_id=325365&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=ODk1&_oak_mp_inf=EPWn2LCy1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/1f65f36d-8c3e-47d2-92e1-689d0d03fc96.jpg",
                price_str: "9.35",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "9", ".05", ""],
                  reduction_text: ["-42", "%"],
                  price: 905,
                  market_price_str: "15.77",
                  market_price: 1577,
                  price_schema: "9.05",
                  currency: "CAD",
                  price_text: ["CA$", "9.05", ""],
                  price_str: "CA$9.05",
                  reduction: 420,
                  market_price_text: ["", "15.77", ""],
                },
                image: {
                  width: 1340,
                  id: 325374,
                  url: "https://img.kwcdn.com/product/fancy/256f96a3-d1e1-4697-bd46-27c7059d480d.jpg",
                  height: 1785,
                },
                color: "(255,182,193,1)",
                seo_link_url:
                  "/ca/girls-elegant-sleeveless-party-dress-two-tone-burgundy-flared-skirt-non-stretchy-fabric-for-formal-events-everyday-special-occasions-machine-washable-girls-clothing-g-601102786892789.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F256f96a3-d1e1-4697-bd46-27c7059d480d.jpg&spec_id=16057&spec_gallery_id=325374&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=OTA1&_oak_mp_inf=EPWn2LCy1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D",
                spec_id: 16057,
                color_image:
                  "https://img.kwcdn.com/product/fancy/0aeb2aab-4659-4aad-b194-b0750dad3cc6.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601102786892789&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F256f96a3-d1e1-4697-bd46-27c7059d480d.jpg&spec_id=16057&spec_gallery_id=325374&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=OTA1&_oak_mp_inf=EPWn2LCy1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/256f96a3-d1e1-4697-bd46-27c7059d480d.jpg",
                price_str: "9.45",
              },
            ],
            spec_ids: "16059,16057",
            display_end_time: 1764565199,
            seo_link_url:
              "/ca/girls-elegant-sleeveless-party-dress-two-tone-burgundy-flared-skirt-non-stretchy-fabric-for-formal-events-everyday-special-occasions-machine-washable-girls-clothing-g-601102786892789.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F1f65f36d-8c3e-47d2-92e1-689d0d03fc96.jpg&spec_id=16059&spec_gallery_id=325365&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=ODk1&_oak_gallery_order=1301025759%2C497874777&_oak_mp_inf=EPWn2LCy1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D&spec_ids=16059,16057",
            queryReleScore: 0.0,
            sales_tip_text: ["3.2K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.8,
              hidden_comment: false,
              comment_num_tips: "309",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/181c687e-70e0-4ca0-9703-78fa7a15c506.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/181c687e-70e0-4ca0-9703-78fa7a15c506.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-24%",
            },
            item_type: 0,
            page_alt:
              "elegant off shoulder red sequin mesh dress with   hem stretchy party wedding dress for   christmas halloween blackout friday",
            current_sku_id: 17614113930827,
            tags_info: {
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
              video_url: "",
            },
            title:
              "' Elegant Off-Shoulder Red Sequin & Mesh Dress with Ruffled Hem - Stretchy Party Wedding Dress for , Perfect for Christmas, Halloween, Blackout Friday",
            sales_tip_text_list: ["45", "sold"],
            p_rec: {
              skc_id: "17597693913029",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "1",
              mid: "69999906",
              final_creative_id: "564497722",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRDELd0F1naj2K2sF4gpAd2vVvSrF3IWtCrAThBupzcMvfEKXuOPAEpQG515jRAyCpAQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "3088687770026392523",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "564497722",
              g: "601104306786984",
              scene_id: "3",
              show_price: "1891",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "84",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "4325353886137911017",
              ts: "1763271940576",
            },
            mall_id: 634418226416413,
            sales_num: "45",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601104306786984&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F181c687e-70e0-4ca0-9703-78fa7a15c506.jpg&spec_id=16062&spec_gallery_id=534740&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg5MQ&_oak_gallery_order=564497722%2C225246612%2C324594302&spec_ids=16062&_oak_mp_inf=EKilt4W41ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D",
            selected_spec_ids: [16062],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601104306786984&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F181c687e-70e0-4ca0-9703-78fa7a15c506.jpg&spec_id=16062&spec_gallery_id=534740&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg5MQ&_oak_gallery_order=564497722%2C225246612%2C324594302&spec_ids=16062&_oak_mp_inf=EKilt4W41ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "564497722,225246612,324594302",
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
            show_index: 84,
            price_info: {
              split_price_text: ["CA$", "18", ".91", ""],
              currency_str: "CA$",
              reduction_text: ["-24", "%"],
              price: 1891,
              market_price_str: "24.93",
              market_price: 2493,
              market_price_type: 2,
              price_schema: "18.91",
              currency: "CAD",
              price_text: ["CA$", "18.91", ""],
              price_str: "CA$18.91",
              market_price_text: ["", "24.93", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1773,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 534740,
              url_id: "3088687770026392523",
              url: "https://img.kwcdn.com/product/fancy/181c687e-70e0-4ca0-9703-78fa7a15c506.jpg",
              height: 2364,
            },
            sales_tip: "45 sold",
            visible: true,
            goods_id: 601104306786984,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "18", ".91", ""],
                  reduction_text: [],
                  price: 1891,
                  market_price_str: "24.93",
                  market_price: 2493,
                  price_schema: "18.91",
                  currency: "CAD",
                  price_text: ["CA$", "18.91", ""],
                  price_str: "CA$18.91",
                  market_price_text: ["", "24.93", ""],
                },
                image: {
                  width: 1773,
                  id: 534740,
                  url: "https://img.kwcdn.com/product/fancy/181c687e-70e0-4ca0-9703-78fa7a15c506.jpg",
                  height: 2364,
                },
                color: "(153,0,0,1)",
                seo_link_url:
                  "/ca/elegant-off-shoulder-red-sequin-mesh-dress-with--hem-stretchy-party-wedding-dress-for--christmas-halloween-blackout-friday-g-601104306786984.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F181c687e-70e0-4ca0-9703-78fa7a15c506.jpg&spec_id=16062&spec_gallery_id=534740&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg5MQ&_oak_mp_inf=EKilt4W41ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D",
                spec_id: 16062,
                color_image:
                  "https://img.kwcdn.com/product/fancy/b0fc506e-6ac3-42d0-b238-fee104653602.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601104306786984&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F181c687e-70e0-4ca0-9703-78fa7a15c506.jpg&spec_id=16062&spec_gallery_id=534740&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg5MQ&_oak_mp_inf=EKilt4W41ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/181c687e-70e0-4ca0-9703-78fa7a15c506.jpg",
                price_str: "18.91",
              },
            ],
            spec_ids: "16062",
            seo_link_url:
              "/ca/elegant-off-shoulder-red-sequin-mesh-dress-with--hem-stretchy-party-wedding-dress-for--christmas-halloween-blackout-friday-g-601104306786984.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F181c687e-70e0-4ca0-9703-78fa7a15c506.jpg&spec_id=16062&spec_gallery_id=534740&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg5MQ&_oak_gallery_order=564497722%2C225246612%2C324594302&_oak_mp_inf=EKilt4W41ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D&spec_ids=16062",
            queryReleScore: 0.0,
            sales_tip_text: ["45", "sold"],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/e77261ff-2acd-4157-b0f4-d235eb7016ca.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/e77261ff-2acd-4157-b0f4-d235eb7016ca.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-34%",
            },
            item_type: 0,
            page_alt:
              "girls sleeveless spliced mesh princess dress with bow print yellow   hem flared skirt non stretch fabric summer party wedding outfit for  ",
            current_sku_id: 17608330502999,
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
              "Girls' Sleeveless Spliced Mesh Princess Dress with Bow & Print - Yellow & Ruffled Hem, Flared Skirt, Non-Stretch Fabric, Summer Party Wedding Outfit For Youngsters",
            sales_tip_text_list: ["617", "sold"],
            display_end_time_percent: 40,
            sold_quantity_percent: 2,
            p_rec: {
              skc_id: "17596345153011",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1102231250",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRD74OIBPZt2wxN9lhK7S+qRcanCh3tgXBkoOkBOTTH4vS8Qt1t6tobZZnvqzM69DmEQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "149178208855312527",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1102231250",
              g: "601103162042081",
              scene_id: "3",
              show_price: "1329",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "85",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "4627555078492286901",
              ts: "1763271940576",
            },
            activity_type: 13,
            mall_id: 634418223847762,
            sales_num: "617",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601103162042081&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe77261ff-2acd-4157-b0f4-d235eb7016ca.jpg&spec_id=15069&spec_gallery_id=438845&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTMyOQ&_oak_gallery_order=1102231250%2C3960935&spec_ids=15069&_oak_mp_inf=EOHNyeOz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D",
            selected_spec_ids: [15069],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601103162042081&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe77261ff-2acd-4157-b0f4-d235eb7016ca.jpg&spec_id=15069&spec_gallery_id=438845&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTMyOQ&_oak_gallery_order=1102231250%2C3960935&spec_ids=15069&_oak_mp_inf=EOHNyeOz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112743420649039585",
              sku_extra_param: {
                _oak_gallery_order: "1102231250,3960935",
              },
            },
            goods_tags: [],
            show_index: 85,
            price_info: {
              reduction_text: ["-34", "%"],
              market_price_type: 2,
              price_text: ["CA$", "13.29", ""],
              price_str: "CA$13.29",
              price_color: "#FB7701",
              split_price_text: ["CA$", "13", ".29", ""],
              currency_str: "CA$",
              price: 1329,
              market_price_str: "20.42",
              market_price: 2042,
              price_schema: "13.29",
              currency: "CAD",
              reduction: 340,
              market_price_text: ["", "20.42", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1350,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 438845,
              url_id: "149178208855312527",
              url: "https://img.kwcdn.com/product/fancy/e77261ff-2acd-4157-b0f4-d235eb7016ca.jpg",
              height: 1800,
            },
            sales_tip: "617 sold",
            visible: true,
            goods_id: 601103162042081,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "13", ".29", ""],
                  reduction_text: ["-34", "%"],
                  price: 1329,
                  market_price_str: "20.42",
                  market_price: 2042,
                  price_schema: "13.29",
                  currency: "CAD",
                  price_text: ["CA$", "13.29", ""],
                  price_str: "CA$13.29",
                  price_color: "#FB7701",
                  reduction: 340,
                  market_price_text: ["", "20.42", ""],
                },
                image: {
                  width: 1350,
                  id: 438845,
                  url: "https://img.kwcdn.com/product/fancy/e77261ff-2acd-4157-b0f4-d235eb7016ca.jpg",
                  height: 1800,
                },
                color: "(255,236,67,1)",
                seo_link_url:
                  "/ca/girls-sleeveless-spliced-mesh-princess-dress-with-bow-print-yellow--hem-flared-skirt-non-stretch-fabric-summer-party-wedding-outfit-for--g-601103162042081.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe77261ff-2acd-4157-b0f4-d235eb7016ca.jpg&spec_id=15069&spec_gallery_id=438845&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTMyOQ&_oak_mp_inf=EOHNyeOz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D",
                spec_id: 15069,
                color_image:
                  "https://img.kwcdn.com/product/fancy/c65e2cc8-f717-4d8f-bf25-1e9e87e2def0.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601103162042081&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe77261ff-2acd-4157-b0f4-d235eb7016ca.jpg&spec_id=15069&spec_gallery_id=438845&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTMyOQ&_oak_mp_inf=EOHNyeOz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/e77261ff-2acd-4157-b0f4-d235eb7016ca.jpg",
                price_str: "16.23",
              },
            ],
            spec_ids: "15069",
            display_end_time: 1763787599,
            seo_link_url:
              "/ca/girls-sleeveless-spliced-mesh-princess-dress-with-bow-print-yellow--hem-flared-skirt-non-stretch-fabric-summer-party-wedding-outfit-for--g-601103162042081.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe77261ff-2acd-4157-b0f4-d235eb7016ca.jpg&spec_id=15069&spec_gallery_id=438845&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTMyOQ&_oak_gallery_order=1102231250%2C3960935&_oak_mp_inf=EOHNyeOz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILCzytmoMw%3D%3D&spec_ids=15069",
            queryReleScore: 0.0,
            sales_tip_text: ["617", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: true,
              comment_num_tips: "29",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/7e7b264e-4008-4c43-a378-23bce0513e0a.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/7e7b264e-4008-4c43-a378-23bce0513e0a.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "-9%",
            },
            item_type: 0,
            page_alt:
              "girls   dress breathable mesh tulle with   embroidery short sleeve playtime party dress",
            current_sku_id: 17600902038333,
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
              video_url: "",
            },
            title:
              "Girls Summer Princess Dress: Breathable Mesh Tulle with Butterfly Embroidery Short Sleeve Playtime Party Dress",
            sales_tip_text_list: ["1", "sold"],
            p_rec: {
              skc_id: "17594602151978",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "683612882",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRA/yw5fqa0yyjvGvXvgMXoRdf9Y3JievdoOkfpPwyWSHXGbUHeAS8mZZd9+N0323K0QiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "5015066524965715229",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "683612882",
              g: "601101661530428",
              scene_id: "3",
              show_price: "1397",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "86",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "4412269518313084698",
              ts: "1763271940576",
            },
            mall_id: 634418221058764,
            sales_num: "1",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601101661530428&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7e7b264e-4008-4c43-a378-23bce0513e0a.jpg&spec_id=3002&spec_gallery_id=195127&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTM5Nw&_oak_gallery_order=683612882%2C1882571052&spec_ids=3002,2&_oak_mp_inf=ELzSiZiu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
            selected_spec_ids: [3002, 2],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601101661530428&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7e7b264e-4008-4c43-a378-23bce0513e0a.jpg&spec_id=3002&spec_gallery_id=195127&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTM5Nw&_oak_gallery_order=683612882%2C1882571052&spec_ids=3002,2&_oak_mp_inf=ELzSiZiu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "683612882,1882571052",
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
            show_index: 86,
            price_info: {
              split_price_text: ["CA$", "13", ".97", ""],
              currency_str: "CA$",
              reduction_text: ["-9", "%"],
              price: 1397,
              market_price_str: "15.40",
              market_price: 1540,
              market_price_type: 1,
              price_schema: "13.97",
              currency: "CAD",
              price_text: ["CA$", "13.97", ""],
              price_str: "CA$13.97",
              market_price_text: ["", "15.40", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1350,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 195127,
              url_id: "5015066524965715229",
              url: "https://img.kwcdn.com/product/fancy/7e7b264e-4008-4c43-a378-23bce0513e0a.jpg",
              height: 1800,
            },
            sales_tip: "1 sold",
            visible: true,
            goods_id: 601101661530428,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "13", ".97", ""],
                  reduction_text: [],
                  price: 1397,
                  market_price_str: "15.40",
                  market_price: 1540,
                  price_schema: "13.97",
                  currency: "CAD",
                  price_text: ["CA$", "13.97", ""],
                  price_str: "CA$13.97",
                  market_price_text: ["", "15.40", ""],
                },
                image: {
                  width: 1350,
                  id: 195127,
                  url: "https://img.kwcdn.com/product/fancy/7e7b264e-4008-4c43-a378-23bce0513e0a.jpg",
                  height: 1800,
                },
                color: "(0,0,0,1)",
                seo_link_url:
                  "/ca/girls--dress-breathable-mesh-tulle-with--embroidery-short-sleeve-playtime-party-dress-g-601101661530428.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7e7b264e-4008-4c43-a378-23bce0513e0a.jpg&spec_id=3002&spec_gallery_id=195127&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTM5Nw&_oak_mp_inf=ELzSiZiu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                spec_id: 3002,
                color_image:
                  "https://img.kwcdn.com/product/fancy/f7297865-b73f-4d59-89a9-6cff2cdf38cb.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101661530428&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7e7b264e-4008-4c43-a378-23bce0513e0a.jpg&spec_id=3002&spec_gallery_id=195127&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTM5Nw&_oak_mp_inf=ELzSiZiu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/7e7b264e-4008-4c43-a378-23bce0513e0a.jpg",
                price_str: "13.97",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "14", ".27", ""],
                  reduction_text: [],
                  price: 1427,
                  market_price_str: "21.53",
                  market_price: 2153,
                  price_schema: "14.27",
                  currency: "CAD",
                  price_text: ["CA$", "14.27", ""],
                  price_str: "CA$14.27",
                  market_price_text: ["", "21.53", ""],
                },
                image: {
                  width: 1500,
                  id: 195134,
                  url: "https://img.kwcdn.com/product/fancy/5ac9aab9-aa53-457a-b9ae-c8c72f593dc1.jpg",
                  height: 2000,
                },
                color: "(255,0,0,1)",
                seo_link_url:
                  "/ca/girls--dress-breathable-mesh-tulle-with--embroidery-short-sleeve-playtime-party-dress-g-601101661530428.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F5ac9aab9-aa53-457a-b9ae-c8c72f593dc1.jpg&spec_id=2&spec_gallery_id=195134&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQyNw&_oak_mp_inf=ELzSiZiu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                spec_id: 2,
                color_image:
                  "https://img.kwcdn.com/product/fancy/e1c46714-6722-48eb-bcfc-f33cd92652d2.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101661530428&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F5ac9aab9-aa53-457a-b9ae-c8c72f593dc1.jpg&spec_id=2&spec_gallery_id=195134&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQyNw&_oak_mp_inf=ELzSiZiu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/5ac9aab9-aa53-457a-b9ae-c8c72f593dc1.jpg",
                price_str: "14.27",
              },
            ],
            spec_ids: "3002,2",
            seo_link_url:
              "/ca/girls--dress-breathable-mesh-tulle-with--embroidery-short-sleeve-playtime-party-dress-g-601101661530428.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7e7b264e-4008-4c43-a378-23bce0513e0a.jpg&spec_id=3002&spec_gallery_id=195127&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTM5Nw&_oak_gallery_order=683612882%2C1882571052&_oak_mp_inf=ELzSiZiu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D&spec_ids=3002,2",
            queryReleScore: 0.0,
            sales_tip_text: ["1", "sold"],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/cd68d2ee-9d1f-4f4f-9e6f-ecb737853ed6.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/cd68d2ee-9d1f-4f4f-9e6f-ecb737853ed6.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-54%",
            },
            item_type: 0,
            page_alt:
              "children eden girls elegant rose floral print a line party dress with   short sleeves ribbon bow pink   print     machine washable   wear for weddings easter birthdays ages   years special occasion outfit  ",
            current_sku_id: 17592200385122,
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
                      '{"text_rich":[{"type":0,"value":"TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Girls\' Dresses","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"1084"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"1084"}}}',
                  },
                  footer: {
                    color: "#555555",
                    text: " in Girls' Dresses",
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
                  ranking_id: "1084",
                },
              ],
            },
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/goods-video/143dea0f031616e0ab9481b8997748612cf218d8gs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/cd68d2ee-9d1f-4f4f-9e6f-ecb737853ed6.jpg",
              url: "https://img.kwcdn.com/product/0c4ece6926540bfbe5dc86e2ab8fdb7d4a85d294.temu.000001.jpeg",
            },
            title:
              "Children Eden Girls' Elegant Rose Floral Print A-Line Party Dress with Ruffled Short Sleeves & Ribbon Bow - Pink & Beige Floral Print, Slim-Fit Waist, Machine Washable, All-Season Wear for Weddings, Easter, Birthdays (Ages 3-10 Years), Special Occasion Outfit, Comfortable Fit",
            sales_tip_text_list: ["56K+", "sold"],
            display_end_time_percent: 15,
            sold_quantity_percent: 9,
            p_rec: {
              skc_id: "17592188909327",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "2059688163",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRCLXquTI1hWYuHultCSXh+YdGTsDaN5I606xRPT1FFUOBZzpTddpGyv737a3r+DY4MQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "8330301376373102717",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "2059688163",
              g: "601099513997024",
              scene_id: "3",
              show_price: "2368",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "87",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "3573691315317301987",
              ts: "1763271940576",
            },
            activity_type: 13,
            mall_id: 135998765440,
            sales_num: "56K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601099513997024&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fcd68d2ee-9d1f-4f4f-9e6f-ecb737853ed6.jpg&spec_id=16057&spec_gallery_id=26&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM2OA&_oak_gallery_order=2059688163%2C74867859%2C1844577947%2C282589807%2C755772721&spec_ids=16057,2,2001,16065,16084,15096,15084&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
            selected_spec_ids: [16057, 2, 2001, 16065, 16084, 15096, 15084],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601099513997024&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fcd68d2ee-9d1f-4f4f-9e6f-ecb737853ed6.jpg&spec_id=16057&spec_gallery_id=26&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM2OA&_oak_gallery_order=2059688163%2C74867859%2C1844577947%2C282589807%2C755772721&spec_ids=16057,2,2001,16065,16084,15096,15084&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112730538850952928",
              sku_extra_param: {
                _oak_gallery_order:
                  "2059688163,74867859,1844577947,282589807,755772721",
              },
            },
            goods_tags: [
              {
                ext_map: {
                  ranking_list_rich_text:
                    '{"text_rich":[{"type":0,"value":"TOP RATED","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Girls\' Dresses","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Top rated","ranking_opt_id":"1084"},"impr":{"ranking_type":"Top rated","ranking_opt_id":"1084"}}}',
                },
                footer: {
                  color: "#555555",
                  text: " in Girls' Dresses",
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
                ranking_id: "1084",
              },
            ],
            show_index: 87,
            price_info: {
              reduction_text: ["-54", "%"],
              market_price_type: 1,
              price_text: ["CA$", "23.68", ""],
              price_str: "CA$23.68",
              price_color: "#FB7701",
              split_price_text: ["CA$", "23", ".68", ""],
              currency_str: "CA$",
              price: 2368,
              market_price_str: "51.61",
              market_price: 5161,
              price_schema: "23.68",
              currency: "CAD",
              reduction: 540,
              market_price_text: ["", "51.61", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1350,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 26,
              url_id: "8330301376373102717",
              url: "https://img.kwcdn.com/product/fancy/cd68d2ee-9d1f-4f4f-9e6f-ecb737853ed6.jpg",
              height: 1800,
            },
            sales_tip: "56K+ sold",
            visible: true,
            goods_id: 601099513997024,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "23", ".68", ""],
                  reduction_text: ["-54", "%"],
                  price: 2368,
                  market_price_str: "51.61",
                  market_price: 5161,
                  price_schema: "23.68",
                  currency: "CAD",
                  price_text: ["CA$", "23.68", ""],
                  price_str: "CA$23.68",
                  price_color: "#FB7701",
                  reduction: 540,
                  market_price_text: ["", "51.61", ""],
                },
                image: {
                  width: 1350,
                  id: 26,
                  url: "https://img.kwcdn.com/product/fancy/cd68d2ee-9d1f-4f4f-9e6f-ecb737853ed6.jpg",
                  height: 1800,
                },
                color: "(255,182,193,1)",
                seo_link_url:
                  "/ca/children-eden-girls-elegant-rose-floral-print-a-line-party-dress-with--short-sleeves-ribbon-bow-pink--print---machine-washable--wear-for-weddings-easter-birthdays-ages--years-special-occasion-outfit--g-601099513997024.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fcd68d2ee-9d1f-4f4f-9e6f-ecb737853ed6.jpg&spec_id=16057&spec_gallery_id=26&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM2OA&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                spec_id: 16057,
                color_image:
                  "https://img.kwcdn.com/product/fancy/ba4d07f0-d73a-46cc-be9c-6c7bb0408a91.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601099513997024&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fcd68d2ee-9d1f-4f4f-9e6f-ecb737853ed6.jpg&spec_id=16057&spec_gallery_id=26&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM2OA&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/cd68d2ee-9d1f-4f4f-9e6f-ecb737853ed6.jpg",
                price_str: "24.13",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "24", ".78", ""],
                  reduction_text: ["-37", "%"],
                  price: 2478,
                  market_price_str: "39.69",
                  market_price: 3969,
                  price_schema: "24.78",
                  currency: "CAD",
                  price_text: ["CA$", "24.78", ""],
                  price_str: "CA$24.78",
                  price_color: "#FB7701",
                  reduction: 370,
                  market_price_text: ["", "39.69", ""],
                },
                image: {
                  width: 1350,
                  id: 40,
                  url: "https://img.kwcdn.com/product/fancy/ce0d2ad2-0510-4767-9be7-64f491f327c5.jpg",
                  height: 1800,
                },
                color: "(255,0,0,1)",
                seo_link_url:
                  "/ca/children-eden-girls-elegant-rose-floral-print-a-line-party-dress-with--short-sleeves-ribbon-bow-pink--print---machine-washable--wear-for-weddings-easter-birthdays-ages--years-special-occasion-outfit--g-601099513997024.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fce0d2ad2-0510-4767-9be7-64f491f327c5.jpg&spec_id=2&spec_gallery_id=40&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjQ3OA&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                spec_id: 2,
                color_image:
                  "https://img.kwcdn.com/product/fancy/67656952-6cf6-42a6-9603-8bc2363d47ea.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601099513997024&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fce0d2ad2-0510-4767-9be7-64f491f327c5.jpg&spec_id=2&spec_gallery_id=40&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjQ3OA&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/ce0d2ad2-0510-4767-9be7-64f491f327c5.jpg",
                price_str: "25.57",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "24", ".98", ""],
                  reduction_text: ["-37", "%"],
                  price: 2498,
                  market_price_str: "39.69",
                  market_price: 3969,
                  price_schema: "24.98",
                  currency: "CAD",
                  price_text: ["CA$", "24.98", ""],
                  price_str: "CA$24.98",
                  price_color: "#FB7701",
                  reduction: 370,
                  market_price_text: ["", "39.69", ""],
                },
                image: {
                  width: 1350,
                  id: 62,
                  url: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/7cbb87e1b72384a794e111e26e40b4a7.jpg",
                  height: 1800,
                },
                color: "(255,255,255,1)",
                seo_link_url:
                  "/ca/children-eden-girls-elegant-rose-floral-print-a-line-party-dress-with--short-sleeves-ribbon-bow-pink--print---machine-washable--wear-for-weddings-easter-birthdays-ages--years-special-occasion-outfit--g-601099513997024.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F7cbb87e1b72384a794e111e26e40b4a7.jpg&spec_id=2001&spec_gallery_id=62&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjQ5OA&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                spec_id: 2001,
                color_image:
                  "https://img.kwcdn.com/product/01c40b84-c956-11ed-81ed-0a580a6961d6.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601099513997024&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F7cbb87e1b72384a794e111e26e40b4a7.jpg&spec_id=2001&spec_gallery_id=62&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjQ5OA&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/7cbb87e1b72384a794e111e26e40b4a7.jpg",
                price_str: "25.77",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "25", ".02", ""],
                  reduction_text: ["-36", "%"],
                  price: 2502,
                  market_price_str: "39.69",
                  market_price: 3969,
                  price_schema: "25.02",
                  currency: "CAD",
                  price_text: ["CA$", "25.02", ""],
                  price_str: "CA$25.02",
                  price_color: "#FB7701",
                  reduction: 360,
                  market_price_text: ["", "39.69", ""],
                },
                image: {
                  width: 1350,
                  id: 67,
                  url: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8a267f711b20486150906b994d17677d.jpg",
                  height: 1800,
                },
                color: "(178,34,34,1)",
                seo_link_url:
                  "/ca/children-eden-girls-elegant-rose-floral-print-a-line-party-dress-with--short-sleeves-ribbon-bow-pink--print---machine-washable--wear-for-weddings-easter-birthdays-ages--years-special-occasion-outfit--g-601099513997024.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F8a267f711b20486150906b994d17677d.jpg&spec_id=16065&spec_gallery_id=67&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUwMg&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                spec_id: 16065,
                color_image:
                  "https://img.kwcdn.com/product/ae2be2e8-c956-11ed-aaa8-0a580a6980e8.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601099513997024&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F8a267f711b20486150906b994d17677d.jpg&spec_id=16065&spec_gallery_id=67&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUwMg&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8a267f711b20486150906b994d17677d.jpg",
                price_str: "25.81",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "25", ".02", ""],
                  reduction_text: ["-36", "%"],
                  price: 2502,
                  market_price_str: "39.69",
                  market_price: 3969,
                  price_schema: "25.02",
                  currency: "CAD",
                  price_text: ["CA$", "25.02", ""],
                  price_str: "CA$25.02",
                  price_color: "#FB7701",
                  reduction: 360,
                  market_price_text: ["", "39.69", ""],
                },
                image: {
                  width: 1350,
                  id: 72,
                  url: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/f3de22ca9b868632c555c96fe3da6258.jpg",
                  height: 1800,
                },
                color: "(68,206,246,1)",
                seo_link_url:
                  "/ca/children-eden-girls-elegant-rose-floral-print-a-line-party-dress-with--short-sleeves-ribbon-bow-pink--print---machine-washable--wear-for-weddings-easter-birthdays-ages--years-special-occasion-outfit--g-601099513997024.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2Ff3de22ca9b868632c555c96fe3da6258.jpg&spec_id=16084&spec_gallery_id=72&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUwMg&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                spec_id: 16084,
                color_image:
                  "https://img.kwcdn.com/product/f0156de6-c956-11ed-b802-0a580a6961d6.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601099513997024&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2Ff3de22ca9b868632c555c96fe3da6258.jpg&spec_id=16084&spec_gallery_id=72&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUwMg&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/f3de22ca9b868632c555c96fe3da6258.jpg",
                price_str: "25.81",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "25", ".04", ""],
                  reduction_text: ["-9", "%"],
                  price: 2504,
                  market_price_str: "27.58",
                  market_price: 2758,
                  price_schema: "25.04",
                  currency: "CAD",
                  price_text: ["CA$", "25.04", ""],
                  price_str: "CA$25.04",
                  price_color: "#FB7701",
                  reduction: 90,
                  market_price_text: ["", "27.58", ""],
                },
                image: {
                  width: 1350,
                  id: 33,
                  url: "https://img.kwcdn.com/product/fancy/2b3fe221-aa03-433a-abeb-49622bfe356b.jpg",
                  height: 1800,
                },
                color: "(148,0,211,1)",
                seo_link_url:
                  "/ca/children-eden-girls-elegant-rose-floral-print-a-line-party-dress-with--short-sleeves-ribbon-bow-pink--print---machine-washable--wear-for-weddings-easter-birthdays-ages--years-special-occasion-outfit--g-601099513997024.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2b3fe221-aa03-433a-abeb-49622bfe356b.jpg&spec_id=15096&spec_gallery_id=33&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUwNA&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                spec_id: 15096,
                color_image:
                  "https://img.kwcdn.com/product/e18f4c6a675bd5b05c148e31a3504fd9.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601099513997024&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2b3fe221-aa03-433a-abeb-49622bfe356b.jpg&spec_id=15096&spec_gallery_id=33&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUwNA&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/2b3fe221-aa03-433a-abeb-49622bfe356b.jpg",
                price_str: "25.84",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "25", ".28", ""],
                  reduction_text: ["-37", "%"],
                  price: 2528,
                  market_price_str: "40.39",
                  market_price: 4039,
                  price_schema: "25.28",
                  currency: "CAD",
                  price_text: ["CA$", "25.28", ""],
                  price_str: "CA$25.28",
                  price_color: "#FB7701",
                  reduction: 370,
                  market_price_text: ["", "40.39", ""],
                },
                image: {
                  width: 1350,
                  id: 57,
                  url: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/92b147cc6e431da7d0402e07a0ed19eb.jpg",
                  height: 1800,
                },
                color: "(0,128,0,1)",
                seo_link_url:
                  "/ca/children-eden-girls-elegant-rose-floral-print-a-line-party-dress-with--short-sleeves-ribbon-bow-pink--print---machine-washable--wear-for-weddings-easter-birthdays-ages--years-special-occasion-outfit--g-601099513997024.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F92b147cc6e431da7d0402e07a0ed19eb.jpg&spec_id=15084&spec_gallery_id=57&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyOA&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                spec_id: 15084,
                color_image:
                  "https://img.kwcdn.com/product/temu-avi/image-crop/a1eb9e7e-2dcf-4b47-a6c3-25e6b878aef7.jpg",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601099513997024&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F92b147cc6e431da7d0402e07a0ed19eb.jpg&spec_id=15084&spec_gallery_id=57&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjUyOA&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/92b147cc6e431da7d0402e07a0ed19eb.jpg",
                price_str: "26.08",
              },
            ],
            spec_ids: "16057,2,2001,16065,16084,15096,15084",
            display_end_time: 1763787599,
            seo_link_url:
              "/ca/children-eden-girls-elegant-rose-floral-print-a-line-party-dress-with--short-sleeves-ribbon-bow-pink--print---machine-washable--wear-for-weddings-easter-birthdays-ages--years-special-occasion-outfit--g-601099513997024.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fcd68d2ee-9d1f-4f4f-9e6f-ecb737853ed6.jpg&spec_id=16057&spec_gallery_id=26&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM2OA&_oak_gallery_order=2059688163%2C74867859%2C1844577947%2C282589807%2C755772721&_oak_mp_inf=EODNhpim1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILGzytmoMw%3D%3D&spec_ids=16057,2,2001,16065,16084,15096,15084",
            queryReleScore: 0.0,
            sales_tip_text: ["56K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.8,
              hidden_comment: false,
              comment_num_tips: "2,040",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/2c2974fe-caa1-4d25-901c-19dad6675ce3.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/2c2974fe-caa1-4d25-901c-19dad6675ce3.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-26%",
            },
            item_type: 0,
            page_alt:
              "2pcs summer dresses casual lace trim round neck sleeveless midi dress with belt solid color non stretch fabric flared hem regular fit   for outdoor themed event graduation party wedding birthday photo shoot family gathering holiday vacation travel casual attire themed event dress sleeveless dress lace trim detail midi length dress belted waist dress nonstretch fabric   outdoor",
            current_sku_id: 17593818415125,
            tags_info: {},
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/goods-video/6c7b47b11aab1d66872809c81b003e1ba939807dgs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/2c2974fe-caa1-4d25-901c-19dad6675ce3.jpg",
              url: "https://img.kwcdn.com/product/192ff81d470331f1d3fd3bcaf8697b2a188516c2.temu.000001.jpeg",
            },
            title:
              "2pcs Summer Dresses/Casual Lace Trim Round Neck Sleeveless Midi Dress with Belt/Solid Color/Non-Stretch Fabric/Flared Hem/Regular Fit/Outdoor Style/for Outdoor/Themed Event/Graduation/Party/Wedding/Birthday/Photo Shoot/Family Gathering/Holiday/Vacation/Travel/Casual Attire/Themed Event Dress/Sleeveless Dress/Lace Trim Detail/Midi Length Dress/Belted Waist Dress/Nonstretch Fabric/Perfect for Outdoor",
            sales_tip_text_list: ["3.2K+", "sold"],
            p_rec: {
              skc_id: "17592642927645",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "723949351",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRDuGbAErHkg364dp77VnYFnsyySgSxB1JrOvBj59b1q8shsOs2LypKqObisY7VwTu8QiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "7560862127600019539",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "723949351",
              g: "601099901561191",
              scene_id: "3",
              show_price: "1092",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "88",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "3401574132873903878",
              ts: "1763271940576",
            },
            mall_id: 634418218413198,
            sales_num: "3.2K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601099901561191&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2c2974fe-caa1-4d25-901c-19dad6675ce3.jpg&spec_id=16062&spec_gallery_id=31700&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA5Mg&_oak_gallery_order=723949351%2C457637891&spec_ids=16062&_oak_mp_inf=EOfS7dCn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D",
            selected_spec_ids: [16062],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601099901561191&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2c2974fe-caa1-4d25-901c-19dad6675ce3.jpg&spec_id=16062&spec_gallery_id=31700&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA5Mg&_oak_gallery_order=723949351%2C457637891&spec_ids=16062&_oak_mp_inf=EOfS7dCn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "723949351,457637891",
              },
            },
            goods_tags: [],
            show_index: 88,
            price_info: {
              split_price_text: ["CA$", "10", ".92", ""],
              currency_str: "CA$",
              reduction_text: ["-26", "%"],
              price: 1092,
              market_price_str: "14.78",
              market_price: 1478,
              market_price_type: 1,
              price_schema: "10.92",
              currency: "CAD",
              price_text: ["CA$", "10.92", ""],
              price_str: "CA$10.92",
              market_price_text: ["", "14.78", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 31700,
              url_id: "7560862127600019539",
              url: "https://img.kwcdn.com/product/fancy/2c2974fe-caa1-4d25-901c-19dad6675ce3.jpg",
              height: 1785,
            },
            sales_tip: "3.2K+ sold",
            visible: true,
            goods_id: 601099901561191,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "10", ".92", ""],
                  reduction_text: [],
                  price: 1092,
                  market_price_str: "14.78",
                  market_price: 1478,
                  price_schema: "10.92",
                  currency: "CAD",
                  price_text: ["CA$", "10.92", ""],
                  price_str: "CA$10.92",
                  market_price_text: ["", "14.78", ""],
                },
                image: {
                  width: 1340,
                  id: 31700,
                  url: "https://img.kwcdn.com/product/fancy/2c2974fe-caa1-4d25-901c-19dad6675ce3.jpg",
                  height: 1785,
                },
                color: "(153,0,0,1)",
                seo_link_url:
                  "/ca/2pcs-summer-dresses-casual-lace-trim-round-neck-sleeveless-midi-dress-with-belt-solid-color-non-stretch-fabric-flared-hem-regular-fit--for-outdoor-themed-event-graduation-party-wedding-birthday-photo-shoot-family-gathering-holiday-vacation-travel-casual-attire-themed-event-dress-sleeveless-dress-lace-trim-detail-midi-length-dress-belted-waist-dress-nonstretch-fabric--outdoor-g-601099901561191.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2c2974fe-caa1-4d25-901c-19dad6675ce3.jpg&spec_id=16062&spec_gallery_id=31700&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA5Mg&_oak_mp_inf=EOfS7dCn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D",
                spec_id: 16062,
                color_image:
                  "https://img.kwcdn.com/product/temu-avi/image-crop/c1bb7546-97e6-4770-a1cd-165b12a50612.jpg",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601099901561191&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2c2974fe-caa1-4d25-901c-19dad6675ce3.jpg&spec_id=16062&spec_gallery_id=31700&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA5Mg&_oak_mp_inf=EOfS7dCn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/2c2974fe-caa1-4d25-901c-19dad6675ce3.jpg",
                price_str: "10.92",
              },
            ],
            spec_ids: "16062",
            seo_link_url:
              "/ca/2pcs-summer-dresses-casual-lace-trim-round-neck-sleeveless-midi-dress-with-belt-solid-color-non-stretch-fabric-flared-hem-regular-fit--for-outdoor-themed-event-graduation-party-wedding-birthday-photo-shoot-family-gathering-holiday-vacation-travel-casual-attire-themed-event-dress-sleeveless-dress-lace-trim-detail-midi-length-dress-belted-waist-dress-nonstretch-fabric--outdoor-g-601099901561191.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2c2974fe-caa1-4d25-901c-19dad6675ce3.jpg&spec_id=16062&spec_gallery_id=31700&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA5Mg&_oak_gallery_order=723949351%2C457637891&_oak_mp_inf=EOfS7dCn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D&spec_ids=16062",
            queryReleScore: 0.0,
            sales_tip_text: ["3.2K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: false,
              comment_num_tips: "223",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/66606eaf-8e4a-489b-87fd-757d867caa16.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/66606eaf-8e4a-489b-87fd-757d867caa16.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-54%",
            },
            item_type: 0,
            page_alt:
              "2pcs girls casual fashion   plaid fleece jacket and solid   shoulder dress set suitable for autumn winter   outdoor winter clothing autumn winter wear plaid pattern medium stretch fabric durable  ",
            current_sku_id: 17610425884368,
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
              video_url: "",
            },
            title:
              "2pcs Girls' Casual Fashion Pocket Design Plaid Fleece Jacket and Solid Color Off-Shoulder Dress Set, Suitable for Autumn/Winter, Perfect for Outdoor, Winter Clothing, Autumn Winter Wear, Plaid Pattern, Medium Stretch Fabric, Durable Kids Wear",
            sales_tip_text_list: ["61", "sold"],
            display_end_time_percent: 23,
            sold_quantity_percent: 29,
            p_rec: {
              skc_id: "17596821888792",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "1",
              mid: "69999906",
              final_creative_id: "1839760583",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRD5DQbg84O9hyVceICb1hyS5Tuw9DKEXFdGNA9F291pqJwTJIBSEFNfqbD8OPv36N4QiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "7244949263788281559",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1839760583",
              g: "601103559926682",
              scene_id: "3",
              show_price: "2028",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "89",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "5411417128802787339",
              ts: "1763271940576",
            },
            activity_type: 13,
            mall_id: 136175906681,
            sales_num: "61",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601103559926682&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F66606eaf-8e4a-489b-87fd-757d867caa16.jpg&spec_id=16057&spec_gallery_id=478166&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyOA&_oak_gallery_order=1839760583%2C1558515732&spec_ids=16057&_oak_mp_inf=EJrHpqG11ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D",
            selected_spec_ids: [16057],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601103559926682&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F66606eaf-8e4a-489b-87fd-757d867caa16.jpg&spec_id=16057&spec_gallery_id=478166&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyOA&_oak_gallery_order=1839760583%2C1558515732&spec_ids=16057&_oak_mp_inf=EJrHpqG11ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112730406705210266",
              sku_extra_param: {
                _oak_gallery_order: "1839760583,1558515732",
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
              reduction_text: ["-54", "%"],
              market_price_type: 2,
              price_text: ["CA$", "20.28", ""],
              price_str: "CA$20.28",
              price_color: "#FB7701",
              split_price_text: ["CA$", "20", ".28", ""],
              currency_str: "CA$",
              price: 2028,
              market_price_str: "44.36",
              market_price: 4436,
              price_schema: "20.28",
              currency: "CAD",
              reduction: 540,
              market_price_text: ["", "44.36", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 478166,
              url_id: "7244949263788281559",
              url: "https://img.kwcdn.com/product/fancy/66606eaf-8e4a-489b-87fd-757d867caa16.jpg",
              height: 1785,
            },
            sales_tip: "61 sold",
            visible: true,
            goods_id: 601103559926682,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "20", ".28", ""],
                  reduction_text: ["-54", "%"],
                  price: 2028,
                  market_price_str: "44.36",
                  market_price: 4436,
                  price_schema: "20.28",
                  currency: "CAD",
                  price_text: ["CA$", "20.28", ""],
                  price_str: "CA$20.28",
                  price_color: "#FB7701",
                  reduction: 540,
                  market_price_text: ["", "44.36", ""],
                },
                image: {
                  width: 1340,
                  id: 478166,
                  url: "https://img.kwcdn.com/product/fancy/66606eaf-8e4a-489b-87fd-757d867caa16.jpg",
                  height: 1785,
                },
                color: "(255,182,193,1)",
                seo_link_url:
                  "/ca/2pcs-girls-casual-fashion--plaid-fleece-jacket-and-solid--shoulder-dress-set-suitable-for-autumn-winter--outdoor-winter-clothing-autumn-winter-wear-plaid-pattern-medium-stretch-fabric-durable--g-601103559926682.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F66606eaf-8e4a-489b-87fd-757d867caa16.jpg&spec_id=16057&spec_gallery_id=478166&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyOA&_oak_mp_inf=EJrHpqG11ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D",
                spec_id: 16057,
                color_image:
                  "https://img.kwcdn.com/product/fancy/835e6122-0aef-4306-9313-a7c60e32ef3f.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601103559926682&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F66606eaf-8e4a-489b-87fd-757d867caa16.jpg&spec_id=16057&spec_gallery_id=478166&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyOA&_oak_mp_inf=EJrHpqG11ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/66606eaf-8e4a-489b-87fd-757d867caa16.jpg",
                price_str: "21.95",
              },
            ],
            spec_ids: "16057",
            display_end_time: 1765256399,
            seo_link_url:
              "/ca/2pcs-girls-casual-fashion--plaid-fleece-jacket-and-solid--shoulder-dress-set-suitable-for-autumn-winter--outdoor-winter-clothing-autumn-winter-wear-plaid-pattern-medium-stretch-fabric-durable--g-601103559926682.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F66606eaf-8e4a-489b-87fd-757d867caa16.jpg&spec_id=16057&spec_gallery_id=478166&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyOA&_oak_gallery_order=1839760583%2C1558515732&_oak_mp_inf=EJrHpqG11ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D&spec_ids=16057",
            queryReleScore: 0.0,
            sales_tip_text: ["61", "sold"],
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
              "https://img.kwcdn.com/product/fancy/a1ac65e6-6a2c-42f9-9aea-85a7e0f6a94d.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/a1ac65e6-6a2c-42f9-9aea-85a7e0f6a94d.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-29%",
            },
            item_type: 0,
            page_alt:
              "girls sleeveless striped bow wedding party dress knee length flared princess party dress with round neck beige navy blue for weddings formal events special occasions wedding guest attire sleeveless formal dress flared skirt dress",
            current_sku_id: 17596729248418,
            tags_info: {
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
                "https://goods-vod.kwcdn.com/goods-video/8146800ee34ac45c203f3ed222728c6d51700bffgs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/a1ac65e6-6a2c-42f9-9aea-85a7e0f6a94d.jpg",
              url: "https://img.kwcdn.com/product/5ce7021ac455696403d4a5339f803fca60d57b39.temu.000001.jpeg",
            },
            title:
              "Girls' Sleeveless Striped Bow Wedding Party Dress - Knee-Length Flared Princess Party Dress with Round Neck, Beige & Navy Blue for Weddings, Formal Events & Special Occasions, Wedding Guest Attire | Sleeveless Formal Dress | Flared Skirt Dress",
            sales_tip_text_list: ["1.5K+", "sold"],
            p_rec: {
              skc_id: "17593463320028",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1102450993",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRA7LK3MTuh3ngxF1BfYBQNY4cD/FrO4Pacqf5mPsB7K3BK55cxMJDIiOMCJcYARxisQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "53151331749014959",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1102450993",
              g: "601100638330118",
              scene_id: "3",
              show_price: "1992",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "90",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "3519664448596192245",
              ts: "1763271940576",
            },
            mall_id: 297126515146,
            sales_num: "1.5K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601100638330118&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa1ac65e6-6a2c-42f9-9aea-85a7e0f6a94d.jpg&spec_id=16091&spec_gallery_id=91190&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTk5Mg&_oak_gallery_order=1102450993%2C1431084518%2C1074846384%2C730486549%2C135368413&spec_ids=16091,15082,16062&_oak_mp_inf=EIa6lrCq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D",
            selected_spec_ids: [16091, 15082, 16062],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601100638330118&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa1ac65e6-6a2c-42f9-9aea-85a7e0f6a94d.jpg&spec_id=16091&spec_gallery_id=91190&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTk5Mg&_oak_gallery_order=1102450993%2C1431084518%2C1074846384%2C730486549%2C135368413&spec_ids=16091,15082,16062&_oak_mp_inf=EIa6lrCq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "1102450993,1431084518,1074846384,730486549,135368413",
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
            show_index: 90,
            price_info: {
              split_price_text: ["CA$", "19", ".92", ""],
              currency_str: "CA$",
              reduction_text: ["-29", "%"],
              price: 1992,
              market_price_str: "28.38",
              market_price: 2838,
              market_price_type: 1,
              price_schema: "19.92",
              currency: "CAD",
              price_text: ["CA$", "19.92", ""],
              price_str: "CA$19.92",
              market_price_text: ["", "28.38", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1350,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 91190,
              url_id: "53151331749014959",
              url: "https://img.kwcdn.com/product/fancy/a1ac65e6-6a2c-42f9-9aea-85a7e0f6a94d.jpg",
              height: 1800,
            },
            sales_tip: "1.5K+ sold",
            visible: true,
            goods_id: 601100638330118,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "19", ".92", ""],
                  reduction_text: [],
                  price: 1992,
                  market_price_str: "28.38",
                  market_price: 2838,
                  price_schema: "19.92",
                  currency: "CAD",
                  price_text: ["CA$", "19.92", ""],
                  price_str: "CA$19.92",
                  market_price_text: ["", "28.38", ""],
                },
                image: {
                  width: 1350,
                  id: 91190,
                  url: "https://img.kwcdn.com/product/fancy/a1ac65e6-6a2c-42f9-9aea-85a7e0f6a94d.jpg",
                  height: 1800,
                },
                color: "(46,78,126,1)",
                seo_link_url:
                  "/ca/girls-sleeveless-striped-bow-wedding-party-dress-knee-length-flared-princess-party-dress-with-round-neck-beige-navy-blue-for-weddings-formal-events-special-occasions-wedding-guest-attire-sleeveless-formal-dress-flared-skirt-dress-g-601100638330118.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa1ac65e6-6a2c-42f9-9aea-85a7e0f6a94d.jpg&spec_id=16091&spec_gallery_id=91190&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTk5Mg&_oak_mp_inf=EIa6lrCq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D",
                spec_id: 16091,
                color_image:
                  "https://img.kwcdn.com/product/fancy/5bc7489f-b4c9-4bf5-b97c-07a40e1594a1.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100638330118&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa1ac65e6-6a2c-42f9-9aea-85a7e0f6a94d.jpg&spec_id=16091&spec_gallery_id=91190&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTk5Mg&_oak_mp_inf=EIa6lrCq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/a1ac65e6-6a2c-42f9-9aea-85a7e0f6a94d.jpg",
                price_str: "19.92",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "19", ".78", ""],
                  reduction_text: [],
                  price: 1978,
                  market_price_str: "28.38",
                  market_price: 2838,
                  price_schema: "19.78",
                  currency: "CAD",
                  price_text: ["CA$", "19.78", ""],
                  price_str: "CA$19.78",
                  market_price_text: ["", "28.38", ""],
                },
                image: {
                  width: 1340,
                  id: 127976,
                  url: "https://img.kwcdn.com/product/fancy/0a0be780-a0b1-42df-b042-92e31de985cc.jpg",
                  height: 1785,
                },
                color: "(0,100,0,1)",
                seo_link_url:
                  "/ca/girls-sleeveless-striped-bow-wedding-party-dress-knee-length-flared-princess-party-dress-with-round-neck-beige-navy-blue-for-weddings-formal-events-special-occasions-wedding-guest-attire-sleeveless-formal-dress-flared-skirt-dress-g-601100638330118.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F0a0be780-a0b1-42df-b042-92e31de985cc.jpg&spec_id=15082&spec_gallery_id=127976&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTk3OA&_oak_mp_inf=EIa6lrCq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D",
                spec_id: 15082,
                color_image:
                  "https://img.kwcdn.com/product/temu-avi/image-crop/edcc7bbc-7009-40f7-a50f-49f57fdfea61.jpg",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100638330118&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F0a0be780-a0b1-42df-b042-92e31de985cc.jpg&spec_id=15082&spec_gallery_id=127976&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTk3OA&_oak_mp_inf=EIa6lrCq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/0a0be780-a0b1-42df-b042-92e31de985cc.jpg",
                price_str: "19.78",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "19", ".92", ""],
                  reduction_text: [],
                  price: 1992,
                  market_price_str: "28.38",
                  market_price: 2838,
                  price_schema: "19.92",
                  currency: "CAD",
                  price_text: ["CA$", "19.92", ""],
                  price_str: "CA$19.92",
                  market_price_text: ["", "28.38", ""],
                },
                image: {
                  width: 1340,
                  id: 367799,
                  url: "https://img.kwcdn.com/product/fancy/4811c464-8b0b-4e92-a6cc-f5884518954f.jpg",
                  height: 1785,
                },
                color: "(153,0,0,1)",
                seo_link_url:
                  "/ca/girls-sleeveless-striped-bow-wedding-party-dress-knee-length-flared-princess-party-dress-with-round-neck-beige-navy-blue-for-weddings-formal-events-special-occasions-wedding-guest-attire-sleeveless-formal-dress-flared-skirt-dress-g-601100638330118.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F4811c464-8b0b-4e92-a6cc-f5884518954f.jpg&spec_id=16062&spec_gallery_id=367799&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTk5Mg&_oak_mp_inf=EIa6lrCq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D",
                spec_id: 16062,
                color_image:
                  "https://img.kwcdn.com/product/temu-avi/image-crop/b69b0594-4373-49bd-985f-86a9fff5d029.jpg",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100638330118&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F4811c464-8b0b-4e92-a6cc-f5884518954f.jpg&spec_id=16062&spec_gallery_id=367799&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTk5Mg&_oak_mp_inf=EIa6lrCq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/4811c464-8b0b-4e92-a6cc-f5884518954f.jpg",
                price_str: "19.92",
              },
            ],
            spec_ids: "16091,15082,16062",
            seo_link_url:
              "/ca/girls-sleeveless-striped-bow-wedding-party-dress-knee-length-flared-princess-party-dress-with-round-neck-beige-navy-blue-for-weddings-formal-events-special-occasions-wedding-guest-attire-sleeveless-formal-dress-flared-skirt-dress-g-601100638330118.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa1ac65e6-6a2c-42f9-9aea-85a7e0f6a94d.jpg&spec_id=16091&spec_gallery_id=91190&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTk5Mg&_oak_gallery_order=1102450993%2C1431084518%2C1074846384%2C730486549%2C135368413&_oak_mp_inf=EIa6lrCq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D&spec_ids=16091,15082,16062",
            queryReleScore: 0.0,
            sales_tip_text: ["1.5K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 5.0,
              hidden_comment: false,
              comment_num_tips: "53",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/d704a5b4-8259-45f0-a046-0e57244c4fec.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/d704a5b4-8259-45f0-a046-0e57244c4fec.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "  bubble sleeve 3d   decorated mesh skirt round neck pullover mesh skirt with full 3d butterflies sweet   girl dress knee length versatile casual dress for   summer dress girls princess dress",
            current_sku_id: 17603024539074,
            tags_info: {},
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/goods-video/3f75d82e719ee40556111ffdf82006a2cd33219a.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/d704a5b4-8259-45f0-a046-0e57244c4fec.jpg",
              url: "https://img.kwcdn.com/product/4c256cc100cb1bc14129576fd3b90fe971c0b859.goods.000001.jpeg",
            },
            title:
              "Summer Princess Bubble Sleeve 3D Butterfly Decorated Mesh Skirt Round Neck Pullover, Mesh Skirt with Full 3D Butterflies, Sweet Fairy Style Girl Dress, Knee-length Versatile Casual Dress For Girls, Girls Summer Dress, Girls Princess Dress",
            sales_tip_text_list: ["681", "sold"],
            p_rec: {
              skc_id: "17595112713843",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "400089208",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRCkdl8yBtGM5kxoKH5rWNyll//Tdb20OPCjQreexFWAZKrlMwvTM7NI/PgqTCBdIVEQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "5420540332938351583",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "400089208",
              g: "601102101799169",
              scene_id: "3",
              show_price: "1268",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "91",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "5945545261899994365",
              ts: "1763271940576",
            },
            mall_id: 5666933738193,
            sales_num: "681",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601102101799169&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd704a5b4-8259-45f0-a046-0e57244c4fec.jpg&spec_id=16057&spec_gallery_id=249194&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTI2OA&_oak_gallery_order=400089208%2C119799625%2C954365432&spec_ids=16057&_oak_mp_inf=EIHCgeqv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D",
            selected_spec_ids: [16057],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601102101799169&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd704a5b4-8259-45f0-a046-0e57244c4fec.jpg&spec_id=16057&spec_gallery_id=249194&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTI2OA&_oak_gallery_order=400089208%2C119799625%2C954365432&spec_ids=16057&_oak_mp_inf=EIHCgeqv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "400089208,119799625,954365432",
              },
            },
            goods_tags: [],
            show_index: 91,
            price_info: {
              split_price_text: ["CA$", "12", ".68", ""],
              currency_str: "CA$",
              reduction_text: [],
              price: 1268,
              price_schema: "12.68",
              currency: "CAD",
              price_text: ["CA$", "12.68", ""],
              price_str: "CA$12.68",
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1350,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 249194,
              url_id: "5420540332938351583",
              url: "https://img.kwcdn.com/product/fancy/d704a5b4-8259-45f0-a046-0e57244c4fec.jpg",
              height: 1800,
            },
            sales_tip: "681 sold",
            visible: true,
            goods_id: 601102101799169,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "12", ".68", ""],
                  reduction_text: [],
                  price: 1268,
                  price_schema: "12.68",
                  currency: "CAD",
                  price_text: ["CA$", "12.68", ""],
                  price_str: "CA$12.68",
                },
                image: {
                  width: 1350,
                  id: 249194,
                  url: "https://img.kwcdn.com/product/fancy/d704a5b4-8259-45f0-a046-0e57244c4fec.jpg",
                  height: 1800,
                },
                color: "(255,182,193,1)",
                seo_link_url:
                  "/ca/-bubble-sleeve-3d--decorated-mesh-skirt-round-neck-pullover-mesh-skirt-with-full-3d-butterflies-sweet--girl-dress-knee-length-versatile-casual-dress-for--summer-dress-girls-princess-dress-g-601102101799169.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd704a5b4-8259-45f0-a046-0e57244c4fec.jpg&spec_id=16057&spec_gallery_id=249194&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTI2OA&_oak_mp_inf=EIHCgeqv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D",
                spec_id: 16057,
                color_image:
                  "https://img.kwcdn.com/product/fancy/0ec28e8f-db0f-4127-965a-de1f7ce07b09.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601102101799169&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd704a5b4-8259-45f0-a046-0e57244c4fec.jpg&spec_id=16057&spec_gallery_id=249194&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTI2OA&_oak_mp_inf=EIHCgeqv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILKzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/d704a5b4-8259-45f0-a046-0e57244c4fec.jpg",
                price_str: "12.68",
              },
            ],
            spec_ids: "16057",
            seo_link_url:
              "/ca/-bubble-sleeve-3d--decorated-mesh-skirt-round-neck-pullover-mesh-skirt-with-full-3d-butterflies-sweet--girl-dress-knee-length-versatile-casual-dress-for--summer-dress-girls-princess-dress-g-601102101799169.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd704a5b4-8259-45f0-a046-0e57244c4fec.jpg&spec_id=16057&spec_gallery_id=249194&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTI2OA&_oak_gallery_order=400089208%2C119799625%2C954365432&_oak_mp_inf=EIHCgeqv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D&spec_ids=16057",
            queryReleScore: 0.0,
            sales_tip_text: ["681", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: false,
              comment_num_tips: "67",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/426babdf-452d-44cd-80b9-87fa3d820532.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/426babdf-452d-44cd-80b9-87fa3d820532.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-40%",
            },
            item_type: 0,
            page_alt:
              "double breasted vintage puff sleeve dress   dress little girls everyday outfit sturdy stitching for   party casual wear for   for outdoor seasonal childrens fashion holiday childrens clothing comfortable",
            current_sku_id: 17597587032316,
            tags_info: {},
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/goods-video/51e6c5c57b6c40298d778e83ac52a5b0a6ae1c52gs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/426babdf-452d-44cd-80b9-87fa3d820532.jpg",
              url: "https://img.kwcdn.com/product/9907fe66ea66ed5c701912de5184ef96a34d6711.temu.000001.jpeg",
            },
            title:
              "Double-Breasted Vintage Puff Sleeve Dress, Elegant Kids Dress, Little Girl's Everyday Outfit, Sturdy Stitching for Playmates, Party, Casual Wear for Kids, Perfect for Outdoor Seasonal Children's Fashion, Holiday Children's Clothing, Comfortable",
            sales_tip_text_list: ["8.4K+", "sold"],
            p_rec: {
              skc_id: "17593751620411",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1913851580",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRCKEiYd9jbdUFUpKB/v+PtTzaz/COhepjzn773yH81mvMtUV5rC8FSbbEBjSshy0tEQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "3278169867983229028",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1913851580",
              g: "601100905988702",
              scene_id: "3",
              show_price: "1115",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "92",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "6803402721697325056",
              ts: "1763271940576",
            },
            mall_id: 634418221175829,
            sales_num: "8.4K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601100905988702&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F426babdf-452d-44cd-80b9-87fa3d820532.jpg&spec_id=15067&spec_gallery_id=119545&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTExNQ&_oak_gallery_order=1913851580%2C775041845&spec_ids=15067&_oak_mp_inf=EN6E56%2Br1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D",
            selected_spec_ids: [15067],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601100905988702&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F426babdf-452d-44cd-80b9-87fa3d820532.jpg&spec_id=15067&spec_gallery_id=119545&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTExNQ&_oak_gallery_order=1913851580%2C775041845&spec_ids=15067&_oak_mp_inf=EN6E56%2Br1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1913851580,775041845",
              },
            },
            goods_tags: [],
            show_index: 92,
            price_info: {
              split_price_text: ["CA$", "11", ".15", ""],
              currency_str: "CA$",
              reduction_text: ["-40", "%"],
              price: 1115,
              market_price_str: "18.78",
              market_price: 1878,
              market_price_type: 1,
              price_schema: "11.15",
              currency: "CAD",
              price_text: ["CA$", "11.15", ""],
              price_str: "CA$11.15",
              market_price_text: ["", "18.78", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1536,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 119545,
              url_id: "3278169867983229028",
              url: "https://img.kwcdn.com/product/fancy/426babdf-452d-44cd-80b9-87fa3d820532.jpg",
              height: 2048,
            },
            sales_tip: "8.4K+ sold",
            visible: true,
            goods_id: 601100905988702,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "11", ".15", ""],
                  reduction_text: [],
                  price: 1115,
                  market_price_str: "18.78",
                  market_price: 1878,
                  price_schema: "11.15",
                  currency: "CAD",
                  price_text: ["CA$", "11.15", ""],
                  price_str: "CA$11.15",
                  market_price_text: ["", "18.78", ""],
                },
                image: {
                  width: 1536,
                  id: 119545,
                  url: "https://img.kwcdn.com/product/fancy/426babdf-452d-44cd-80b9-87fa3d820532.jpg",
                  height: 2048,
                },
                color: "(195,176,145,1)",
                seo_link_url:
                  "/ca/double-breasted-vintage-puff-sleeve-dress--dress-little-girls-everyday-outfit-sturdy-stitching-for--party-casual-wear-for--for-outdoor-seasonal-childrens-fashion-holiday-childrens-clothing-comfortable-g-601100905988702.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F426babdf-452d-44cd-80b9-87fa3d820532.jpg&spec_id=15067&spec_gallery_id=119545&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTExNQ&_oak_mp_inf=EN6E56%2Br1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D",
                spec_id: 15067,
                color_image:
                  "https://img.kwcdn.com/product/fancy/b67ea5ef-06db-4853-be30-88c88c745ca6.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100905988702&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F426babdf-452d-44cd-80b9-87fa3d820532.jpg&spec_id=15067&spec_gallery_id=119545&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTExNQ&_oak_mp_inf=EN6E56%2Br1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/426babdf-452d-44cd-80b9-87fa3d820532.jpg",
                price_str: "11.15",
              },
            ],
            spec_ids: "15067",
            seo_link_url:
              "/ca/double-breasted-vintage-puff-sleeve-dress--dress-little-girls-everyday-outfit-sturdy-stitching-for--party-casual-wear-for--for-outdoor-seasonal-childrens-fashion-holiday-childrens-clothing-comfortable-g-601100905988702.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F426babdf-452d-44cd-80b9-87fa3d820532.jpg&spec_id=15067&spec_gallery_id=119545&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTExNQ&_oak_gallery_order=1913851580%2C775041845&_oak_mp_inf=EN6E56%2Br1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D&spec_ids=15067",
            queryReleScore: 0.0,
            sales_tip_text: ["8.4K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: false,
              comment_num_tips: "645",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/347032d8-6b13-43b2-bb3b-b24c9581114b.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/347032d8-6b13-43b2-bb3b-b24c9581114b.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "-20%",
            },
            item_type: 0,
            page_alt:
              "Girls Christmas A-Line Dress with Doll Collar & Long Sleeves - Soft Breathable Pleated Velvet Dress for 1-5  Range, for party Wedding Christmas Outfit, Machine Washable ( to Little)",
            current_sku_id: 17618207027442,
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
              "Girls' Christmas A-Line Dress with Doll Collar & Long Sleeves - Soft Breathable Pleated Velvet Dress for 1-5Y Age Range, for party Wedding Christmas Outfit, Machine Washable ( to Little)",
            sales_tip_text_list: [],
            p_rec: {
              skc_id: "17598679337483",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1679704312",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRA+RjRnQk4JOXnDBtCfj0jSfqOwkDX9nZesJC43HVqzH2CpGmIM+37Iq5XnnRSygK4QiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "6130397633799180585",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1679704312",
              g: "601105156887970",
              scene_id: "3",
              show_price: "2029",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "93",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "9134520433358059074",
              ts: "1763271940576",
            },
            mall_id: 634418222232724,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601105156887970&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F347032d8-6b13-43b2-bb3b-b24c9581114b.jpg&spec_id=2&spec_gallery_id=542387&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyOQ&_oak_gallery_order=1679704312%2C1561102697%2C852897683%2C984267613%2C362110511&spec_ids=2&_oak_mp_inf=EKKr5Zq71ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D",
            selected_spec_ids: [2],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601105156887970&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F347032d8-6b13-43b2-bb3b-b24c9581114b.jpg&spec_id=2&spec_gallery_id=542387&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyOQ&_oak_gallery_order=1679704312%2C1561102697%2C852897683%2C984267613%2C362110511&spec_ids=2&_oak_mp_inf=EKKr5Zq71ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "1679704312,1561102697,852897683,984267613,362110511",
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
            show_index: 93,
            price_info: {
              split_price_text: ["CA$", "20", ".29", ""],
              currency_str: "CA$",
              reduction_text: ["-20", "%"],
              price: 2029,
              market_price_str: "25.54",
              market_price: 2554,
              market_price_type: 2,
              price_schema: "20.29",
              currency: "CAD",
              price_text: ["CA$", "20.29", ""],
              price_str: "CA$20.29",
              market_price_text: ["", "25.54", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1500,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 542387,
              url_id: "6130397633799180585",
              url: "https://img.kwcdn.com/product/fancy/347032d8-6b13-43b2-bb3b-b24c9581114b.jpg",
              height: 2000,
            },
            sales_tip: "",
            visible: true,
            goods_id: 601105156887970,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "20", ".29", ""],
                  reduction_text: [],
                  price: 2029,
                  market_price_str: "25.54",
                  market_price: 2554,
                  price_schema: "20.29",
                  currency: "CAD",
                  price_text: ["CA$", "20.29", ""],
                  price_str: "CA$20.29",
                  market_price_text: ["", "25.54", ""],
                },
                image: {
                  width: 1500,
                  id: 542387,
                  url: "https://img.kwcdn.com/product/fancy/347032d8-6b13-43b2-bb3b-b24c9581114b.jpg",
                  height: 2000,
                },
                color: "(255,0,0,1)",
                seo_link_url:
                  "/ca/girls-christmas-a-line-dress-with-doll-collar-long-sleeves-soft-breathable-pleated-velvet-dress-for-1-5-range-for-party-wedding-christmas-outfit-machine-washable-to-little-g-601105156887970.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F347032d8-6b13-43b2-bb3b-b24c9581114b.jpg&spec_id=2&spec_gallery_id=542387&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyOQ&_oak_mp_inf=EKKr5Zq71ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D",
                spec_id: 2,
                color_image: "",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601105156887970&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F347032d8-6b13-43b2-bb3b-b24c9581114b.jpg&spec_id=2&spec_gallery_id=542387&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyOQ&_oak_mp_inf=EKKr5Zq71ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/347032d8-6b13-43b2-bb3b-b24c9581114b.jpg",
                price_str: "20.29",
              },
            ],
            spec_ids: "2",
            seo_link_url:
              "/ca/girls-christmas-a-line-dress-with-doll-collar-long-sleeves-soft-breathable-pleated-velvet-dress-for-1-5-range-for-party-wedding-christmas-outfit-machine-washable-to-little-g-601105156887970.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F347032d8-6b13-43b2-bb3b-b24c9581114b.jpg&spec_id=2&spec_gallery_id=542387&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyOQ&_oak_gallery_order=1679704312%2C1561102697%2C852897683%2C984267613%2C362110511&_oak_mp_inf=EKKr5Zq71ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D&spec_ids=2",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/9ff3b7ef-4b41-4ad0-872a-211870c25d46.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/9ff3b7ef-4b41-4ad0-872a-211870c25d46.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-30%",
            },
            item_type: 0,
            page_alt:
              "girls floral print dress with   sleeveless knee length party wedding dress for   white with golden floral patterns pleated design   special occasions wedding guest dress sleeveless knee length dress elegant party attire floral print dress",
            current_sku_id: 17596741985575,
            tags_info: {},
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/goods-video/8784babb5a998a25df0fce39fb2e5354d7937950gs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/9ff3b7ef-4b41-4ad0-872a-211870c25d46.jpg",
              url: "https://img.kwcdn.com/product/268bac61e82d03399cb439645b9fafe3edb3cc72.temu.000001.jpeg",
            },
            title:
              "Girls Floral Print Dress with Golden Bow - Sleeveless Knee-Length Party & Wedding Dress for Youngsters, White with Golden Floral Patterns, Pleated Design, Perfect for Special Occasions, Wedding Guest Dress | Sleeveless Knee-Length Dress | Elegant Party Attire, Floral Print Dress",
            sales_tip_text_list: ["1.2K+", "sold"],
            p_rec: {
              skc_id: "17593467029733",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "2056921391",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRCMzCy7B50iDihTJGfEbiQ/fI3jYLi4UeYfmhYzV0x1yE/wuVm0MiTl2uVvGQfZ8aYQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "3743066711115075659",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "2056921391",
              g: "601100651938857",
              scene_id: "3",
              show_price: "1853",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "94",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "7649509910306486143",
              ts: "1763271940576",
            },
            mall_id: 297126515146,
            sales_num: "1.2K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601100651938857&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9ff3b7ef-4b41-4ad0-872a-211870c25d46.jpg&spec_id=16070&spec_gallery_id=135766&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg1Mw&_oak_gallery_order=2056921391&spec_ids=16070&_oak_mp_inf=EKmI1baq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D",
            selected_spec_ids: [16070],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601100651938857&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9ff3b7ef-4b41-4ad0-872a-211870c25d46.jpg&spec_id=16070&spec_gallery_id=135766&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg1Mw&_oak_gallery_order=2056921391&spec_ids=16070&_oak_mp_inf=EKmI1baq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "2056921391",
              },
            },
            goods_tags: [],
            show_index: 94,
            price_info: {
              split_price_text: ["CA$", "18", ".53", ""],
              currency_str: "CA$",
              reduction_text: ["-30", "%"],
              price: 1853,
              market_price_str: "26.48",
              market_price: 2648,
              market_price_type: 1,
              price_schema: "18.53",
              currency: "CAD",
              price_text: ["CA$", "18.53", ""],
              price_str: "CA$18.53",
              market_price_text: ["", "26.48", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1350,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 135766,
              url_id: "3743066711115075659",
              url: "https://img.kwcdn.com/product/fancy/9ff3b7ef-4b41-4ad0-872a-211870c25d46.jpg",
              height: 1800,
            },
            sales_tip: "1.2K+ sold",
            visible: true,
            goods_id: 601100651938857,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "18", ".53", ""],
                  reduction_text: [],
                  price: 1853,
                  market_price_str: "26.48",
                  market_price: 2648,
                  price_schema: "18.53",
                  currency: "CAD",
                  price_text: ["CA$", "18.53", ""],
                  price_str: "CA$18.53",
                  market_price_text: ["", "26.48", ""],
                },
                image: {
                  width: 1350,
                  id: 135766,
                  url: "https://img.kwcdn.com/product/fancy/9ff3b7ef-4b41-4ad0-872a-211870c25d46.jpg",
                  height: 1800,
                },
                color: "(255,215,0,1)",
                seo_link_url:
                  "/ca/girls-floral-print-dress-with--sleeveless-knee-length-party-wedding-dress-for--white-with-golden-floral-patterns-pleated-design--special-occasions-wedding-guest-dress-sleeveless-knee-length-dress-elegant-party-attire-floral-print-dress-g-601100651938857.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9ff3b7ef-4b41-4ad0-872a-211870c25d46.jpg&spec_id=16070&spec_gallery_id=135766&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg1Mw&_oak_mp_inf=EKmI1baq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D",
                spec_id: 16070,
                color_image:
                  "https://img.kwcdn.com/product/fancy/001065be-1d4d-4ed4-87d1-785d35f6f63b.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100651938857&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9ff3b7ef-4b41-4ad0-872a-211870c25d46.jpg&spec_id=16070&spec_gallery_id=135766&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg1Mw&_oak_mp_inf=EKmI1baq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/9ff3b7ef-4b41-4ad0-872a-211870c25d46.jpg",
                price_str: "18.53",
              },
            ],
            spec_ids: "16070",
            seo_link_url:
              "/ca/girls-floral-print-dress-with--sleeveless-knee-length-party-wedding-dress-for--white-with-golden-floral-patterns-pleated-design--special-occasions-wedding-guest-dress-sleeveless-knee-length-dress-elegant-party-attire-floral-print-dress-g-601100651938857.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9ff3b7ef-4b41-4ad0-872a-211870c25d46.jpg&spec_id=16070&spec_gallery_id=135766&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg1Mw&_oak_gallery_order=2056921391&_oak_mp_inf=EKmI1baq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D&spec_ids=16070",
            queryReleScore: 0.0,
            sales_tip_text: ["1.2K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.8,
              hidden_comment: true,
              comment_num_tips: "44",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/49c09b36-7a17-4bb5-8bc3-f9e5fee700f3.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/49c09b36-7a17-4bb5-8bc3-f9e5fee700f3.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-30%",
            },
            item_type: 0,
            page_alt:
              "girls lace trim collared   solid color woven casual dress with belt two piece set",
            current_sku_id: 17592965795512,
            tags_info: {
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
                "https://goods-vod.kwcdn.com/goods-video/385aa7aafa92739dcfc9a50b924cf468d894f716gs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/49c09b36-7a17-4bb5-8bc3-f9e5fee700f3.jpg",
              url: "https://img.kwcdn.com/product/44e8f7bc1622561b6cd50e9397344fbb6ecff12f.temu.000001.jpeg",
            },
            title:
              "[Girls' Lace Dress Set] Girls' Two-Piece Set | Lace Trim Collared Patchwork Solid Color Woven Casual Dress with Belt",
            sales_tip_text_list: ["11K+", "sold"],
            p_rec: {
              skc_id: "17592418735769",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "279092507",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRCmxRKGAwJKL9dtw1/vjSVBhseBD5/6iBuH2jiYqslrfj/uOWD9NUaEc70+JyYtxW4QiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "8938205644885737129",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "279092507",
              g: "601099713722093",
              scene_id: "3",
              show_price: "1034",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "95",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "1675038514282984682",
              ts: "1763271940576",
            },
            mall_id: 634418218413198,
            sales_num: "11K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601099713722093&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F49c09b36-7a17-4bb5-8bc3-f9e5fee700f3.jpg&spec_id=15082&spec_gallery_id=14256&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTAzNA&_oak_gallery_order=279092507%2C561044365%2C1462085469&spec_ids=15082&_oak_mp_inf=EO3tpPem1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D",
            selected_spec_ids: [15082],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601099713722093&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F49c09b36-7a17-4bb5-8bc3-f9e5fee700f3.jpg&spec_id=15082&spec_gallery_id=14256&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTAzNA&_oak_gallery_order=279092507%2C561044365%2C1462085469&spec_ids=15082&_oak_mp_inf=EO3tpPem1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "279092507,561044365,1462085469",
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
            show_index: 95,
            price_info: {
              split_price_text: ["CA$", "10", ".34", ""],
              currency_str: "CA$",
              reduction_text: ["-30", "%"],
              price: 1034,
              market_price_str: "14.78",
              market_price: 1478,
              market_price_type: 1,
              price_schema: "10.34",
              currency: "CAD",
              price_text: ["CA$", "10.34", ""],
              price_str: "CA$10.34",
              market_price_text: ["", "14.78", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1773,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 14256,
              url_id: "8938205644885737129",
              url: "https://img.kwcdn.com/product/fancy/49c09b36-7a17-4bb5-8bc3-f9e5fee700f3.jpg",
              height: 2364,
            },
            sales_tip: "11K+ sold",
            visible: true,
            goods_id: 601099713722093,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "10", ".34", ""],
                  reduction_text: [],
                  price: 1034,
                  market_price_str: "14.78",
                  market_price: 1478,
                  price_schema: "10.34",
                  currency: "CAD",
                  price_text: ["CA$", "10.34", ""],
                  price_str: "CA$10.34",
                  market_price_text: ["", "14.78", ""],
                },
                image: {
                  width: 1773,
                  id: 14256,
                  url: "https://img.kwcdn.com/product/fancy/49c09b36-7a17-4bb5-8bc3-f9e5fee700f3.jpg",
                  height: 2364,
                },
                color: "(0,100,0,1)",
                seo_link_url:
                  "/ca/girls-lace-trim-collared--solid-color-woven-casual-dress-with-belt-two-piece-set-g-601099713722093.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F49c09b36-7a17-4bb5-8bc3-f9e5fee700f3.jpg&spec_id=15082&spec_gallery_id=14256&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTAzNA&_oak_mp_inf=EO3tpPem1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D",
                spec_id: 15082,
                color_image:
                  "https://img.kwcdn.com/product/fancy/9866b672-a32e-4a42-9a41-d1737ea1d7dc.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601099713722093&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F49c09b36-7a17-4bb5-8bc3-f9e5fee700f3.jpg&spec_id=15082&spec_gallery_id=14256&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTAzNA&_oak_mp_inf=EO3tpPem1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/49c09b36-7a17-4bb5-8bc3-f9e5fee700f3.jpg",
                price_str: "10.34",
              },
            ],
            spec_ids: "15082",
            seo_link_url:
              "/ca/girls-lace-trim-collared--solid-color-woven-casual-dress-with-belt-two-piece-set-g-601099713722093.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F49c09b36-7a17-4bb5-8bc3-f9e5fee700f3.jpg&spec_id=15082&spec_gallery_id=14256&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTAzNA&_oak_gallery_order=279092507%2C561044365%2C1462085469&_oak_mp_inf=EO3tpPem1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILOzytmoMw%3D%3D&spec_ids=15082",
            queryReleScore: 0.0,
            sales_tip_text: ["11K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: false,
              comment_num_tips: "687",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/90fe8f1d-d9bd-4bc8-96f6-9907e6af7b07.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/90fe8f1d-d9bd-4bc8-96f6-9907e6af7b07.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-11%",
            },
            item_type: 0,
            page_alt:
              "elegant girls floral mesh dress with long sleeves and ribbon waist   spring and fall elegant fashion knitted fabric round neck fit and flare design elegant dress floral pattern dress stretchy fabric",
            current_sku_id: 17595140698011,
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
              "Elegant Girls' Floral Mesh Dress with Long Sleeves and Ribbon Waist - Perfect for Spring and Fall, Elegant Fashion, Knitted Fabric, Round Neck, Fit and Flare Design, Elegant Dress|Floral Pattern Dress|Stretchy Fabric",
            sales_tip_text_list: ["779", "sold"],
            display_end_time_percent: 50,
            sold_quantity_percent: 79,
            p_rec: {
              skc_id: "17592987680743",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1715147723",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRDjKhFzFnPStCiVPlLRJFSddVnU+RWlhaOaknWhlL5sg1xYPSp/u9rzqvuzwwQR2sYQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "3706427076846902830",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1715147723",
              g: "601100198221860",
              scene_id: "3",
              show_price: "1487",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "96",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "6502215435997191072",
              ts: "1763271940576",
            },
            activity_type: 13,
            mall_id: 634418211884914,
            sales_num: "779",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601100198221860&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F90fe8f1d-d9bd-4bc8-96f6-9907e6af7b07.jpg&spec_id=17091&spec_gallery_id=73343&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ4Nw&_oak_gallery_order=1715147723&spec_ids=17091&_oak_mp_inf=EKSwqN6o1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
            selected_spec_ids: [17091],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601100198221860&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F90fe8f1d-d9bd-4bc8-96f6-9907e6af7b07.jpg&spec_id=17091&spec_gallery_id=73343&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ4Nw&_oak_gallery_order=1715147723&spec_ids=17091&_oak_mp_inf=EKSwqN6o1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112703944128206884",
              sku_extra_param: {
                _oak_gallery_order: "1715147723",
              },
            },
            goods_tags: [],
            show_index: 96,
            price_info: {
              reduction_text: ["-11", "%"],
              market_price_type: 1,
              price_text: ["CA$", "14.87", ""],
              price_str: "CA$14.87",
              price_color: "#FB7701",
              split_price_text: ["CA$", "14", ".87", ""],
              currency_str: "CA$",
              price: 1487,
              market_price_str: "16.79",
              market_price: 1679,
              price_schema: "14.87",
              currency: "CAD",
              reduction: 110,
              market_price_text: ["", "16.79", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 73343,
              url_id: "3706427076846902830",
              url: "https://img.kwcdn.com/product/fancy/90fe8f1d-d9bd-4bc8-96f6-9907e6af7b07.jpg",
              height: 1785,
            },
            sales_tip: "779 sold",
            visible: true,
            goods_id: 601100198221860,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "14", ".87", ""],
                  reduction_text: ["-11", "%"],
                  price: 1487,
                  market_price_str: "16.79",
                  market_price: 1679,
                  price_schema: "14.87",
                  currency: "CAD",
                  price_text: ["CA$", "14.87", ""],
                  price_str: "CA$14.87",
                  price_color: "#FB7701",
                  reduction: 110,
                  market_price_text: ["", "16.79", ""],
                },
                image: {
                  width: 1340,
                  id: 73343,
                  url: "https://img.kwcdn.com/product/fancy/90fe8f1d-d9bd-4bc8-96f6-9907e6af7b07.jpg",
                  height: 1785,
                },
                color: "",
                seo_link_url:
                  "/ca/elegant-girls-floral-mesh-dress-with-long-sleeves-and-ribbon-waist--spring-and-fall-elegant-fashion-knitted-fabric-round-neck-fit-and-flare-design-elegant-dress-floral-pattern-dress-stretchy-fabric-g-601100198221860.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F90fe8f1d-d9bd-4bc8-96f6-9907e6af7b07.jpg&spec_id=17091&spec_gallery_id=73343&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ4Nw&_oak_mp_inf=EKSwqN6o1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
                spec_id: 17091,
                color_image:
                  "https://img.kwcdn.com/product/fancy/e30b35cb-c020-4eb9-adfc-3fb93a8d5244.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100198221860&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F90fe8f1d-d9bd-4bc8-96f6-9907e6af7b07.jpg&spec_id=17091&spec_gallery_id=73343&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ4Nw&_oak_mp_inf=EKSwqN6o1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/90fe8f1d-d9bd-4bc8-96f6-9907e6af7b07.jpg",
                price_str: "16.31",
              },
            ],
            spec_ids: "17091",
            display_end_time: 1764565199,
            seo_link_url:
              "/ca/elegant-girls-floral-mesh-dress-with-long-sleeves-and-ribbon-waist--spring-and-fall-elegant-fashion-knitted-fabric-round-neck-fit-and-flare-design-elegant-dress-floral-pattern-dress-stretchy-fabric-g-601100198221860.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F90fe8f1d-d9bd-4bc8-96f6-9907e6af7b07.jpg&spec_id=17091&spec_gallery_id=73343&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ4Nw&_oak_gallery_order=1715147723&_oak_mp_inf=EKSwqN6o1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D&spec_ids=17091",
            queryReleScore: 0.0,
            sales_tip_text: ["779", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: false,
              comment_num_tips: "117",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/e0a468a1-0185-4bed-a20a-e051e51d8d88.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/e0a468a1-0185-4bed-a20a-e051e51d8d88.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-42%",
            },
            item_type: 0,
            page_alt:
              "girls christmas party dress casual round neck ruffle sleeve spliced apricot pleated hem princess skirt with bow decoration spring summer girls elegant jumpsuit tight top loose   perfect gift for birthdays daily wear school",
            current_sku_id: 17595496949375,
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
                "https://goods-vod.kwcdn.com/goods-video/daa2aa299021313bd1a326ed1baa14e7224e05a7.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/e0a468a1-0185-4bed-a20a-e051e51d8d88.jpg",
              url: "https://img.kwcdn.com/product/6af67899c23b0b60bede39bbd24dfcef766a9cb0.goods.000001.jpeg",
            },
            title:
              "Girls' Christmas Party Dress, Casual Round Neck Ruffle Sleeve Spliced Apricot Pleated Hem Princess Skirt with Bow Decoration, Spring Summer Girls' Elegant Jumpsuit, Tight Top Loose Umbrella Design, Perfect Gift For Birthdays, Daily Wear & School",
            sales_tip_text_list: ["5.3K+", "sold"],
            display_end_time_percent: 54,
            sold_quantity_percent: 0,
            p_rec: {
              skc_id: "17593088346903",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "542736803",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRBcbUF881+4H36VaeB3a+rzyXx6+cYs4AOi6K8JGWVAmx0Z4L0AWU8yIoZi2M8710wQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "3738966359140333184",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "542736803",
              g: "601099887748404",
              scene_id: "3",
              show_price: "1219",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "97",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "2077629625198906760",
              ts: "1763271940576",
            },
            activity_type: 13,
            mall_id: 634418210620242,
            sales_num: "5.3K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601099887748404&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe0a468a1-0185-4bed-a20a-e051e51d8d88.jpg&spec_id=16062&spec_gallery_id=69348&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTIxOQ&_oak_gallery_order=542736803%2C573154275%2C1826750572%2C519651741%2C861066241&spec_ids=16062,3002,15082&_oak_mp_inf=ELTKosqn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
            selected_spec_ids: [16062, 3002, 15082],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601099887748404&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe0a468a1-0185-4bed-a20a-e051e51d8d88.jpg&spec_id=16062&spec_gallery_id=69348&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTIxOQ&_oak_gallery_order=542736803%2C573154275%2C1826750572%2C519651741%2C861066241&spec_ids=16062,3002,15082&_oak_mp_inf=ELTKosqn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112655530443187508",
              sku_extra_param: {
                _oak_gallery_order:
                  "542736803,573154275,1826750572,519651741,861066241",
              },
            },
            goods_tags: [],
            show_index: 97,
            price_info: {
              reduction_text: ["-42", "%"],
              market_price_type: 2,
              price_text: ["CA$", "12.19", ""],
              price_str: "CA$12.19",
              price_color: "#FB7701",
              split_price_text: ["CA$", "12", ".19", ""],
              currency_str: "CA$",
              price: 1219,
              market_price_str: "21.38",
              market_price: 2138,
              price_schema: "12.19",
              currency: "CAD",
              reduction: 420,
              market_price_text: ["", "21.38", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 69348,
              url_id: "3738966359140333184",
              url: "https://img.kwcdn.com/product/fancy/e0a468a1-0185-4bed-a20a-e051e51d8d88.jpg",
              height: 1785,
            },
            sales_tip: "5.3K+ sold",
            visible: true,
            goods_id: 601099887748404,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "12", ".19", ""],
                  reduction_text: ["-42", "%"],
                  price: 1219,
                  market_price_str: "21.38",
                  market_price: 2138,
                  price_schema: "12.19",
                  currency: "CAD",
                  price_text: ["CA$", "12.19", ""],
                  price_str: "CA$12.19",
                  price_color: "#FB7701",
                  reduction: 420,
                  market_price_text: ["", "21.38", ""],
                },
                image: {
                  width: 1340,
                  id: 69348,
                  url: "https://img.kwcdn.com/product/fancy/e0a468a1-0185-4bed-a20a-e051e51d8d88.jpg",
                  height: 1785,
                },
                color: "(153,0,0,1)",
                seo_link_url:
                  "/ca/girls-christmas-party-dress-casual-round-neck-ruffle-sleeve-spliced-apricot-pleated-hem-princess-skirt-with-bow-decoration-spring-summer-girls-elegant-jumpsuit-tight-top-loose--perfect-gift-for-birthdays-daily-wear-school-g-601099887748404.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe0a468a1-0185-4bed-a20a-e051e51d8d88.jpg&spec_id=16062&spec_gallery_id=69348&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTIxOQ&_oak_mp_inf=ELTKosqn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
                spec_id: 16062,
                color_image:
                  "https://img.kwcdn.com/product/temu-avi/image-crop/beb160c3-63ff-4183-bf1f-6e7decab565a.jpg",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601099887748404&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe0a468a1-0185-4bed-a20a-e051e51d8d88.jpg&spec_id=16062&spec_gallery_id=69348&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTIxOQ&_oak_mp_inf=ELTKosqn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/e0a468a1-0185-4bed-a20a-e051e51d8d88.jpg",
                price_str: "13.15",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "12", ".08", ""],
                  reduction_text: ["-53", "%"],
                  price: 1208,
                  market_price_str: "25.90",
                  market_price: 2590,
                  price_schema: "12.08",
                  currency: "CAD",
                  price_text: ["CA$", "12.08", ""],
                  price_str: "CA$12.08",
                  price_color: "#FB7701",
                  reduction: 530,
                  market_price_text: ["", "25.90", ""],
                },
                image: {
                  width: 1340,
                  id: 35618,
                  url: "https://img.kwcdn.com/product/fancy/17880b78-2066-40a0-bc9d-aed97036f950.jpg",
                  height: 1785,
                },
                color: "(0,0,0,1)",
                seo_link_url:
                  "/ca/girls-christmas-party-dress-casual-round-neck-ruffle-sleeve-spliced-apricot-pleated-hem-princess-skirt-with-bow-decoration-spring-summer-girls-elegant-jumpsuit-tight-top-loose--perfect-gift-for-birthdays-daily-wear-school-g-601099887748404.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F17880b78-2066-40a0-bc9d-aed97036f950.jpg&spec_id=3002&spec_gallery_id=35618&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTIwOA&_oak_mp_inf=ELTKosqn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
                spec_id: 3002,
                color_image:
                  "https://img.kwcdn.com/product/temu-avi/image-crop/c1ef5cd1-2401-4246-9383-d41c5a149726.jpg",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601099887748404&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F17880b78-2066-40a0-bc9d-aed97036f950.jpg&spec_id=3002&spec_gallery_id=35618&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTIwOA&_oak_mp_inf=ELTKosqn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/17880b78-2066-40a0-bc9d-aed97036f950.jpg",
                price_str: "13.02",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "12", ".26", ""],
                  reduction_text: ["-46", "%"],
                  price: 1226,
                  market_price_str: "22.90",
                  market_price: 2290,
                  price_schema: "12.26",
                  currency: "CAD",
                  price_text: ["CA$", "12.26", ""],
                  price_str: "CA$12.26",
                  price_color: "#FB7701",
                  reduction: 460,
                  market_price_text: ["", "22.90", ""],
                },
                image: {
                  width: 1340,
                  id: 69353,
                  url: "https://img.kwcdn.com/product/fancy/7ed32c46-93e5-43fc-91c1-c841c7cd0239.jpg",
                  height: 1785,
                },
                color: "(0,100,0,1)",
                seo_link_url:
                  "/ca/girls-christmas-party-dress-casual-round-neck-ruffle-sleeve-spliced-apricot-pleated-hem-princess-skirt-with-bow-decoration-spring-summer-girls-elegant-jumpsuit-tight-top-loose--perfect-gift-for-birthdays-daily-wear-school-g-601099887748404.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7ed32c46-93e5-43fc-91c1-c841c7cd0239.jpg&spec_id=15082&spec_gallery_id=69353&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTIyNg&_oak_mp_inf=ELTKosqn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
                spec_id: 15082,
                color_image:
                  "https://img.kwcdn.com/product/temu-avi/image-crop/79ce0ae3-7917-4d74-8d99-59dbba7ddd97.jpg",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601099887748404&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7ed32c46-93e5-43fc-91c1-c841c7cd0239.jpg&spec_id=15082&spec_gallery_id=69353&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTIyNg&_oak_mp_inf=ELTKosqn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/7ed32c46-93e5-43fc-91c1-c841c7cd0239.jpg",
                price_str: "13.19",
              },
            ],
            spec_ids: "16062,3002,15082",
            display_end_time: 1764392399,
            seo_link_url:
              "/ca/girls-christmas-party-dress-casual-round-neck-ruffle-sleeve-spliced-apricot-pleated-hem-princess-skirt-with-bow-decoration-spring-summer-girls-elegant-jumpsuit-tight-top-loose--perfect-gift-for-birthdays-daily-wear-school-g-601099887748404.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe0a468a1-0185-4bed-a20a-e051e51d8d88.jpg&spec_id=16062&spec_gallery_id=69348&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTIxOQ&_oak_gallery_order=542736803%2C573154275%2C1826750572%2C519651741%2C861066241&_oak_mp_inf=ELTKosqn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D&spec_ids=16062,3002,15082",
            queryReleScore: 0.0,
            sales_tip_text: ["5.3K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.8,
              hidden_comment: false,
              comment_num_tips: "212",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/cd43594e-4e4c-4048-bc19-26538cfa3c8e.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/cd43594e-4e4c-4048-bc19-26538cfa3c8e.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-49%",
            },
            item_type: 0,
            page_alt:
              "girls   solid color textured fabric bow decorated ruffle hem spliced suspender dress 2pcs set",
            current_sku_id: 17601801140715,
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
                      '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Girls\' Dresses","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"1084"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"1084"}}}',
                  },
                  footer: {
                    color: "#555555",
                    text: " in Girls' Dresses",
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
                  ranking_id: "1084",
                },
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "[Girls' Bow-Decorated Dress] 2pcs Set Girls' Solid Color Textured Fabric Bow-Decorated Ruffle Hem Spliced Suspender Dress",
            sales_tip_text_list: ["3.5K+", "sold"],
            display_end_time_percent: 15,
            sold_quantity_percent: 4,
            p_rec: {
              skc_id: "17594822192936",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1095480533",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRDOan8LdeXMMG0NKCdY2iBe/hK68cSW8FUoxtQBl5XuWnq9BrTD/ltOS4s87k8LCrEQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "3765666716924298909",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1095480533",
              g: "601101851407133",
              scene_id: "3",
              show_price: "1079",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "98",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "1162904527449552455",
              ts: "1763271940577",
            },
            activity_type: 13,
            mall_id: 2087104725695,
            sales_num: "3.5K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601101851407133&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fcd43594e-4e4c-4048-bc19-26538cfa3c8e.jpg&spec_id=71769&spec_gallery_id=239343&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA3OQ&_oak_gallery_order=1095480533%2C607211273&spec_ids=71769&_oak_mp_inf=EJ3mzvKu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
            selected_spec_ids: [71769],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601101851407133&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fcd43594e-4e4c-4048-bc19-26538cfa3c8e.jpg&spec_id=71769&spec_gallery_id=239343&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA3OQ&_oak_gallery_order=1095480533%2C607211273&spec_ids=71769&_oak_mp_inf=EJ3mzvKu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112743415875941149",
              sku_extra_param: {
                _oak_gallery_order: "1095480533,607211273",
              },
            },
            goods_tags: [
              {
                ext_map: {
                  ranking_list_rich_text:
                    '{"text_rich":[{"type":0,"value":"BEST-SELLING ITEM","font_size":12,"pc_font_size":14,"font_color":"#0A8800","font_weight":400,"padding_end":3,"id":1,"corner_left_top":6,"corner_left_bottom":0,"corner_right_top":0,"corner_right_bottom":6,"start_edge":3,"end_edge":3,"top_edge":2,"bottom_edge":2},{"type":0,"value":"in Girls\' Dresses","font_size":13,"pc_font_size":14,"font_color":"#555555","font_weight":400,"id":2}],"track":{"click":{"ranking_type":"Best sellers","ranking_opt_id":"1084"},"impr":{"ranking_type":"Best sellers","ranking_opt_id":"1084"}}}',
                },
                footer: {
                  color: "#555555",
                  text: " in Girls' Dresses",
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
                ranking_id: "1084",
              },
            ],
            show_index: 98,
            price_info: {
              reduction_text: ["-49", "%"],
              market_price_type: 1,
              price_text: ["CA$", "10.79", ""],
              price_str: "CA$10.79",
              price_color: "#FB7701",
              split_price_text: ["CA$", "10", ".79", ""],
              currency_str: "CA$",
              price: 1079,
              market_price_str: "21.39",
              market_price: 2139,
              price_schema: "10.79",
              currency: "CAD",
              reduction: 490,
              market_price_text: ["", "21.39", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 239343,
              url_id: "3765666716924298909",
              url: "https://img.kwcdn.com/product/fancy/cd43594e-4e4c-4048-bc19-26538cfa3c8e.jpg",
              height: 1785,
            },
            sales_tip: "3.5K+ sold",
            visible: true,
            goods_id: 601101851407133,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "10", ".79", ""],
                  reduction_text: ["-49", "%"],
                  price: 1079,
                  market_price_str: "21.39",
                  market_price: 2139,
                  price_schema: "10.79",
                  currency: "CAD",
                  price_text: ["CA$", "10.79", ""],
                  price_str: "CA$10.79",
                  price_color: "#FB7701",
                  reduction: 490,
                  market_price_text: ["", "21.39", ""],
                },
                image: {
                  width: 1340,
                  id: 239343,
                  url: "https://img.kwcdn.com/product/fancy/cd43594e-4e4c-4048-bc19-26538cfa3c8e.jpg",
                  height: 1785,
                },
                color: "",
                seo_link_url:
                  "/ca/girls--solid-color-textured-fabric-bow-decorated-ruffle-hem-spliced-suspender-dress-2pcs-set-g-601101851407133.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fcd43594e-4e4c-4048-bc19-26538cfa3c8e.jpg&spec_id=71769&spec_gallery_id=239343&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA3OQ&_oak_mp_inf=EJ3mzvKu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
                spec_id: 71769,
                color_image:
                  "https://img.kwcdn.com/product/fancy/2c2f9486-4bed-4eca-bf6e-1f74cad06a6e.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101851407133&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fcd43594e-4e4c-4048-bc19-26538cfa3c8e.jpg&spec_id=71769&spec_gallery_id=239343&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA3OQ&_oak_mp_inf=EJ3mzvKu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/cd43594e-4e4c-4048-bc19-26538cfa3c8e.jpg",
                price_str: "11.81",
              },
            ],
            spec_ids: "71769",
            display_end_time: 1763787599,
            seo_link_url:
              "/ca/girls--solid-color-textured-fabric-bow-decorated-ruffle-hem-spliced-suspender-dress-2pcs-set-g-601101851407133.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fcd43594e-4e4c-4048-bc19-26538cfa3c8e.jpg&spec_id=71769&spec_gallery_id=239343&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTA3OQ&_oak_gallery_order=1095480533%2C607211273&_oak_mp_inf=EJ3mzvKu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D&spec_ids=71769",
            queryReleScore: 0.0,
            sales_tip_text: ["3.5K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: false,
              comment_num_tips: "331",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/68e2a598-1f86-44a7-b084-3205f490a8a1.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/68e2a598-1f86-44a7-b084-3205f490a8a1.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "kids young tween girls casual elegant cut out front 2in 1 long sleeve shirt a line dress for autumn winter fall winter suitable for daily wear casual occasions elegant parties or birthday parties for christmas party graduation dress",
            current_sku_id: 17605324955583,
            tags_info: {
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
                "https://goods-vod.kwcdn.com/goods-video/240175b88246b9b641a8272060d87417e006cfb4gs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/68e2a598-1f86-44a7-b084-3205f490a8a1.jpg",
              url: "https://img.kwcdn.com/product/bc41f1da9eff81e0366a935cd819292d5b29aeb6.temu.000001.jpeg",
            },
            title:
              "[2-in-1 Elegant Girls Dress] 2-in-1 Elegant Cut Out Front Long Sleeve Shirt A-Line Dress for Girls | Casual, Party Wear | Autumn Winter, Christmas, Graduation, Birthday",
            sales_tip_text_list: ["620", "sold"],
            p_rec: {
              skc_id: "17595649578049",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "1",
              mid: "69999906",
              final_creative_id: "691308056",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRAOPyWFif8n7qC+J83I4tRanzmmQO1bzHO2smL5/eVFgOjGhUPtbZd1JpaYNeoMWkIQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "6598369424893264437",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "691308056",
              g: "601102566134259",
              scene_id: "3",
              show_price: "2561",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "99",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "1708168588778073466",
              ts: "1763271940577",
            },
            mall_id: 634418216536196,
            sales_num: "620",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601102566134259&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F68e2a598-1f86-44a7-b084-3205f490a8a1.jpg&spec_id=22929&spec_gallery_id=317570&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjU2MQ&_oak_gallery_order=691308056%2C1821196243%2C605890377%2C504409256%2C1422913547&spec_ids=22929&_oak_mp_inf=EPOjtsex1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
            selected_spec_ids: [22929],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601102566134259&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F68e2a598-1f86-44a7-b084-3205f490a8a1.jpg&spec_id=22929&spec_gallery_id=317570&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjU2MQ&_oak_gallery_order=691308056%2C1821196243%2C605890377%2C504409256%2C1422913547&spec_ids=22929&_oak_mp_inf=EPOjtsex1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "691308056,1821196243,605890377,504409256,1422913547",
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
            show_index: 99,
            price_info: {
              split_price_text: ["CA$", "25", ".61", ""],
              currency_str: "CA$",
              reduction_text: [],
              price: 2561,
              price_schema: "25.61",
              currency: "CAD",
              price_text: ["CA$", "25.61", ""],
              price_str: "CA$25.61",
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 317570,
              url_id: "6598369424893264437",
              url: "https://img.kwcdn.com/product/fancy/68e2a598-1f86-44a7-b084-3205f490a8a1.jpg",
              height: 1785,
            },
            sales_tip: "620 sold",
            visible: true,
            goods_id: 601102566134259,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "25", ".61", ""],
                  reduction_text: [],
                  price: 2561,
                  price_schema: "25.61",
                  currency: "CAD",
                  price_text: ["CA$", "25.61", ""],
                  price_str: "CA$25.61",
                },
                image: {
                  width: 1340,
                  id: 317570,
                  url: "https://img.kwcdn.com/product/fancy/68e2a598-1f86-44a7-b084-3205f490a8a1.jpg",
                  height: 1785,
                },
                color: "",
                seo_link_url:
                  "/ca/kids-young-tween-girls-casual-elegant-cut-out-front-2in-1-long-sleeve-shirt-a-line-dress-for-autumn-winter-fall-winter-suitable-for-daily-wear-casual-occasions-elegant-parties-or-birthday-parties-for-christmas-party-graduation-dress-g-601102566134259.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F68e2a598-1f86-44a7-b084-3205f490a8a1.jpg&spec_id=22929&spec_gallery_id=317570&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjU2MQ&_oak_mp_inf=EPOjtsex1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
                spec_id: 22929,
                color_image:
                  "https://img.kwcdn.com/product/fancy/5801e5d4-8311-4b3e-a2cf-f12d4ef5dd3e.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601102566134259&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F68e2a598-1f86-44a7-b084-3205f490a8a1.jpg&spec_id=22929&spec_gallery_id=317570&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjU2MQ&_oak_mp_inf=EPOjtsex1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/68e2a598-1f86-44a7-b084-3205f490a8a1.jpg",
                price_str: "25.61",
              },
            ],
            spec_ids: "22929",
            seo_link_url:
              "/ca/kids-young-tween-girls-casual-elegant-cut-out-front-2in-1-long-sleeve-shirt-a-line-dress-for-autumn-winter-fall-winter-suitable-for-daily-wear-casual-occasions-elegant-parties-or-birthday-parties-for-christmas-party-graduation-dress-g-601102566134259.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F68e2a598-1f86-44a7-b084-3205f490a8a1.jpg&spec_id=22929&spec_gallery_id=317570&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjU2MQ&_oak_gallery_order=691308056%2C1821196243%2C605890377%2C504409256%2C1422913547&_oak_mp_inf=EPOjtsex1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILSzytmoMw%3D%3D&spec_ids=22929",
            queryReleScore: 0.0,
            sales_tip_text: ["620", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: true,
              comment_num_tips: "31",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/open/2024-06-08/1717851154389-794d59de39934fe2a953dcf01dd8b3b4-goods.jpeg",
            thumb_url:
              "https://img.kwcdn.com/product/open/2024-06-08/1717851154389-794d59de39934fe2a953dcf01dd8b3b4-goods.jpeg",
            ware_house_type: 1,
            benefit_text: {
              text: "-19%",
            },
            item_type: 0,
            page_alt:
              "girls patriotic   sleeveless slip dress y2k   print lightweight stretchy polyester pleated a line machine washable for 3 years",
            current_sku_id: 17597982495042,
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
              "Girls' Patriotic Independence Day Sleeveless Slip Dress - Y2K Stars & Stripes Print, Lightweight Stretchy Polyester, Pleated A-Line, Machine Washable for 3+ Years",
            sales_tip_text_list: ["1", "sold"],
            p_rec: {
              skc_id: "17593883057838",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1111163867",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRCIEqdJpe9UyVSxrw/HWo8L8Hws8HtyMA34+kXZCArA5IiIrKpQKB0+HNh6ZXppLsgQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "6485618414179339886",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1111163867",
              g: "601101027226183",
              scene_id: "3",
              show_price: "1511",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "100",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "8176059761877894548",
              ts: "1763271940577",
            },
            mall_id: 634418221079421,
            sales_num: "1",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601101027226183&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-06-08%2F1717851154389-794d59de39934fe2a953dcf01dd8b3b4-goods.jpeg&spec_id=2001&spec_gallery_id=120656&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUxMQ&_oak_gallery_order=1111163867&spec_ids=2001&_oak_mp_inf=EMfkzumr1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
            selected_spec_ids: [2001],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601101027226183&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-06-08%2F1717851154389-794d59de39934fe2a953dcf01dd8b3b4-goods.jpeg&spec_id=2001&spec_gallery_id=120656&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUxMQ&_oak_gallery_order=1111163867&spec_ids=2001&_oak_mp_inf=EMfkzumr1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1111163867",
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
            show_index: 100,
            price_info: {
              split_price_text: ["CA$", "15", ".11", ""],
              currency_str: "CA$",
              reduction_text: ["-19", "%"],
              price: 1511,
              market_price_str: "18.70",
              market_price: 1870,
              market_price_type: 1,
              price_schema: "15.11",
              currency: "CAD",
              price_text: ["CA$", "15.11", ""],
              price_str: "CA$15.11",
              market_price_text: ["", "18.70", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1500,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 120656,
              url_id: "6485618414179339886",
              url: "https://img.kwcdn.com/product/open/2024-06-08/1717851154389-794d59de39934fe2a953dcf01dd8b3b4-goods.jpeg",
              height: 2000,
            },
            sales_tip: "1 sold",
            visible: true,
            goods_id: 601101027226183,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "15", ".11", ""],
                  reduction_text: [],
                  price: 1511,
                  market_price_str: "18.70",
                  market_price: 1870,
                  price_schema: "15.11",
                  currency: "CAD",
                  price_text: ["CA$", "15.11", ""],
                  price_str: "CA$15.11",
                  market_price_text: ["", "18.70", ""],
                },
                image: {
                  width: 1500,
                  id: 120656,
                  url: "https://img.kwcdn.com/product/open/2024-06-08/1717851154389-794d59de39934fe2a953dcf01dd8b3b4-goods.jpeg",
                  height: 2000,
                },
                color: "(255,255,255,1)",
                seo_link_url:
                  "/ca/girls-patriotic--sleeveless-slip-dress-y2k--print-lightweight-stretchy-polyester-pleated-a-line-machine-washable-for-3-years-g-601101027226183.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-06-08%2F1717851154389-794d59de39934fe2a953dcf01dd8b3b4-goods.jpeg&spec_id=2001&spec_gallery_id=120656&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUxMQ&_oak_mp_inf=EMfkzumr1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                spec_id: 2001,
                color_image:
                  "https://img.kwcdn.com/product/fancy/e191df6a-bf04-4e8c-acc2-e218392edc5f.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101027226183&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-06-08%2F1717851154389-794d59de39934fe2a953dcf01dd8b3b4-goods.jpeg&spec_id=2001&spec_gallery_id=120656&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUxMQ&_oak_mp_inf=EMfkzumr1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/open/2024-06-08/1717851154389-794d59de39934fe2a953dcf01dd8b3b4-goods.jpeg",
                price_str: "15.11",
              },
            ],
            spec_ids: "2001",
            seo_link_url:
              "/ca/girls-patriotic--sleeveless-slip-dress-y2k--print-lightweight-stretchy-polyester-pleated-a-line-machine-washable-for-3-years-g-601101027226183.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-06-08%2F1717851154389-794d59de39934fe2a953dcf01dd8b3b4-goods.jpeg&spec_id=2001&spec_gallery_id=120656&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUxMQ&_oak_gallery_order=1111163867&_oak_mp_inf=EMfkzumr1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D&spec_ids=2001",
            queryReleScore: 0.0,
            sales_tip_text: ["1", "sold"],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/d792ae4c-c25a-484e-9fe2-4f690f611c11.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/d792ae4c-c25a-484e-9fe2-4f690f611c11.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "1pc girls sleeveless a line princess dress with   short sleeves like collar lace trim handmade bow belt navy blue white smock dress fitted waist flared for summer weddings parties photo shoots no padding",
            current_sku_id: 17596234499024,
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
              "1pc Girls' Sleeveless A-Line Princess Dress with Ruffled Short Sleeves-like Collar, Lace Trim & Handmade Bow Belt - Navy Blue & White Smock Dress, Fitted Waist, Flared for Summer Weddings, Parties, Photo Shoots (No Padding)",
            sales_tip_text_list: ["11K+", "sold"],
            display_end_time_percent: 15,
            sold_quantity_percent: 50,
            p_rec: {
              skc_id: "17593333911942",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "1",
              mid: "69999906",
              final_creative_id: "434015464",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRCkdl8yBtGM5kxoKH5rWNylQjVqlmXhkGV1msuMf5a1u8tUV5rC8FSbbEBjSshy0tEQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "1498053892042171934",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "434015464",
              g: "601100518635833",
              scene_id: "3",
              show_price: "1776",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "101",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "7116478366300239769",
              ts: "1763271940577",
            },
            activity_type: 13,
            mall_id: 634418212575489,
            sales_num: "11K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601100518635833&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd792ae4c-c25a-484e-9fe2-4f690f611c11.jpg&spec_id=16068&spec_gallery_id=89727&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc3Ng&_oak_gallery_order=434015464%2C443209555%2C309314660%2C1982197371%2C868765314&spec_ids=16068,16072,16086,16057&_oak_mp_inf=ELnyjPep1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
            selected_spec_ids: [16068, 16072, 16086, 16057],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601100518635833&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd792ae4c-c25a-484e-9fe2-4f690f611c11.jpg&spec_id=16068&spec_gallery_id=89727&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc3Ng&_oak_gallery_order=434015464%2C443209555%2C309314660%2C1982197371%2C868765314&spec_ids=16068,16072,16086,16057&_oak_mp_inf=ELnyjPep1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112732539701705017",
              sku_extra_param: {
                _oak_gallery_order:
                  "434015464,443209555,309314660,1982197371,868765314",
              },
            },
            goods_tags: [],
            show_index: 101,
            price_info: {
              split_price_text: ["CA$", "17", ".76", ""],
              currency_str: "CA$",
              reduction_text: [],
              price: 1776,
              price_schema: "17.76",
              currency: "CAD",
              price_text: ["CA$", "17.76", ""],
              price_str: "CA$17.76",
              price_color: "#FB7701",
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 89727,
              url_id: "1498053892042171934",
              url: "https://img.kwcdn.com/product/fancy/d792ae4c-c25a-484e-9fe2-4f690f611c11.jpg",
              height: 1785,
            },
            sales_tip: "11K+ sold",
            visible: true,
            goods_id: 601100518635833,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "17", ".76", ""],
                  reduction_text: [],
                  price: 1776,
                  price_schema: "17.76",
                  currency: "CAD",
                  price_text: ["CA$", "17.76", ""],
                  price_str: "CA$17.76",
                  price_color: "#FB7701",
                },
                image: {
                  width: 1340,
                  id: 89727,
                  url: "https://img.kwcdn.com/product/fancy/d792ae4c-c25a-484e-9fe2-4f690f611c11.jpg",
                  height: 1785,
                },
                color: "(247,238,214,1)",
                seo_link_url:
                  "/ca/1pc-girls-sleeveless-a-line-princess-dress-with--short-sleeves-like-collar-lace-trim-handmade-bow-belt-navy-blue-white-smock-dress-fitted-waist-flared-for-summer-weddings-parties-photo-shoots-no-padding-g-601100518635833.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd792ae4c-c25a-484e-9fe2-4f690f611c11.jpg&spec_id=16068&spec_gallery_id=89727&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc3Ng&_oak_mp_inf=ELnyjPep1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                spec_id: 16068,
                color_image:
                  "https://img.kwcdn.com/product/fancy/176d07d5-599f-4cff-840b-04ea1099543c.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100518635833&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd792ae4c-c25a-484e-9fe2-4f690f611c11.jpg&spec_id=16068&spec_gallery_id=89727&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc3Ng&_oak_mp_inf=ELnyjPep1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/d792ae4c-c25a-484e-9fe2-4f690f611c11.jpg",
                price_str: "18.42",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "17", ".32", ""],
                  reduction_text: ["-13", "%"],
                  price: 1732,
                  market_price_str: "20.11",
                  market_price: 2011,
                  price_schema: "17.32",
                  currency: "CAD",
                  price_text: ["CA$", "17.32", ""],
                  price_str: "CA$17.32",
                  price_color: "#FB7701",
                  reduction: 130,
                  market_price_text: ["", "20.11", ""],
                },
                image: {
                  width: 1340,
                  id: 145920,
                  url: "https://img.kwcdn.com/product/fancy/a342be78-3a13-4033-8a9d-b4350bd16826.jpg",
                  height: 1785,
                },
                color: "(255,255,0,1)",
                seo_link_url:
                  "/ca/1pc-girls-sleeveless-a-line-princess-dress-with--short-sleeves-like-collar-lace-trim-handmade-bow-belt-navy-blue-white-smock-dress-fitted-waist-flared-for-summer-weddings-parties-photo-shoots-no-padding-g-601100518635833.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa342be78-3a13-4033-8a9d-b4350bd16826.jpg&spec_id=16072&spec_gallery_id=145920&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTczMg&_oak_mp_inf=ELnyjPep1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                spec_id: 16072,
                color_image:
                  "https://img.kwcdn.com/product/fancy/db59636d-33f3-4422-9056-fe954e480f4c.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100518635833&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa342be78-3a13-4033-8a9d-b4350bd16826.jpg&spec_id=16072&spec_gallery_id=145920&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTczMg&_oak_mp_inf=ELnyjPep1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/a342be78-3a13-4033-8a9d-b4350bd16826.jpg",
                price_str: "17.85",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "17", ".66", ""],
                  reduction_text: [],
                  price: 1766,
                  price_schema: "17.66",
                  currency: "CAD",
                  price_text: ["CA$", "17.66", ""],
                  price_str: "CA$17.66",
                  price_color: "#FB7701",
                },
                image: {
                  width: 1340,
                  id: 145935,
                  url: "https://img.kwcdn.com/product/fancy/8ad98ea9-a15e-405a-8977-602de0fd1f71.jpg",
                  height: 1785,
                },
                color: "(0,0,255,1)",
                seo_link_url:
                  "/ca/1pc-girls-sleeveless-a-line-princess-dress-with--short-sleeves-like-collar-lace-trim-handmade-bow-belt-navy-blue-white-smock-dress-fitted-waist-flared-for-summer-weddings-parties-photo-shoots-no-padding-g-601100518635833.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8ad98ea9-a15e-405a-8977-602de0fd1f71.jpg&spec_id=16086&spec_gallery_id=145935&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc2Ng&_oak_mp_inf=ELnyjPep1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                spec_id: 16086,
                color_image:
                  "https://img.kwcdn.com/product/fancy/7e0abc09-998b-46bc-b13a-e1e1fe4ebed5.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100518635833&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8ad98ea9-a15e-405a-8977-602de0fd1f71.jpg&spec_id=16086&spec_gallery_id=145935&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc2Ng&_oak_mp_inf=ELnyjPep1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/8ad98ea9-a15e-405a-8977-602de0fd1f71.jpg",
                price_str: "18.19",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "17", ".79", ""],
                  reduction_text: ["-13", "%"],
                  price: 1779,
                  market_price_str: "20.66",
                  market_price: 2066,
                  price_schema: "17.79",
                  currency: "CAD",
                  price_text: ["CA$", "17.79", ""],
                  price_str: "CA$17.79",
                  price_color: "#FB7701",
                  reduction: 130,
                  market_price_text: ["", "20.66", ""],
                },
                image: {
                  width: 1340,
                  id: 145928,
                  url: "https://img.kwcdn.com/product/fancy/d1d99e5c-fff7-4bce-b22b-019298359013.jpg",
                  height: 1785,
                },
                color: "(255,182,193,1)",
                seo_link_url:
                  "/ca/1pc-girls-sleeveless-a-line-princess-dress-with--short-sleeves-like-collar-lace-trim-handmade-bow-belt-navy-blue-white-smock-dress-fitted-waist-flared-for-summer-weddings-parties-photo-shoots-no-padding-g-601100518635833.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd1d99e5c-fff7-4bce-b22b-019298359013.jpg&spec_id=16057&spec_gallery_id=145928&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc3OQ&_oak_mp_inf=ELnyjPep1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                spec_id: 16057,
                color_image:
                  "https://img.kwcdn.com/product/fancy/be7415be-7306-4f57-b268-a883b76e27b2.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100518635833&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd1d99e5c-fff7-4bce-b22b-019298359013.jpg&spec_id=16057&spec_gallery_id=145928&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc3OQ&_oak_mp_inf=ELnyjPep1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/d1d99e5c-fff7-4bce-b22b-019298359013.jpg",
                price_str: "18.32",
              },
            ],
            spec_ids: "16068,16072,16086,16057",
            display_end_time: 1763787599,
            seo_link_url:
              "/ca/1pc-girls-sleeveless-a-line-princess-dress-with--short-sleeves-like-collar-lace-trim-handmade-bow-belt-navy-blue-white-smock-dress-fitted-waist-flared-for-summer-weddings-parties-photo-shoots-no-padding-g-601100518635833.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fd792ae4c-c25a-484e-9fe2-4f690f611c11.jpg&spec_id=16068&spec_gallery_id=89727&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTc3Ng&_oak_gallery_order=434015464%2C443209555%2C309314660%2C1982197371%2C868765314&_oak_mp_inf=ELnyjPep1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D&spec_ids=16068,16072,16086,16057",
            queryReleScore: 0.0,
            sales_tip_text: ["11K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.8,
              hidden_comment: false,
              comment_num_tips: "541",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/bd9f88d3-cd2c-4892-98bc-69a1b6609d2b.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/bd9f88d3-cd2c-4892-98bc-69a1b6609d2b.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-19%",
            },
            item_type: 0,
            page_alt:
              "girls elegant a line denim style dress with belt long sleeve midi length collar lapel jacket like jacket net waist tie for parties weddings machine washable   outfit no stretch",
            current_sku_id: 17601538001526,
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
                "https://goods-vod.kwcdn.com/goods-video/a5a32968416ea9997a3e8a780b7aac234802b930gs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/bd9f88d3-cd2c-4892-98bc-69a1b6609d2b.jpg",
              url: "https://img.kwcdn.com/product/3445d2a6a87962f02fc7e7b6cf944fc2ac4b0179.temu.000001.jpeg",
            },
            title:
              "Girls' Elegant A-Line Denim-Style Dress with Belt - Long Sleeve Midi-Length Collar Lapel Jacket-like Jacket, Net & Waist Tie for, Parties, Weddings - Machine Washable Spring/Fall Outfit (No Stretch)",
            sales_tip_text_list: ["1.5K+", "sold"],
            display_end_time_percent: 54,
            sold_quantity_percent: 62,
            p_rec: {
              skc_id: "17594757901249",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "2031401367",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRBN+Gupj9DmSpexwxcMJLD1rZ5amwDqxPanJZ7q37w0ujGcA8OJuZbMyhkWQ7gI3hEQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "8323669548881463503",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "2031401367",
              g: "601101794623109",
              scene_id: "3",
              show_price: "1501",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "102",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "2453528643726356444",
              ts: "1763271940577",
            },
            activity_type: 13,
            mall_id: 4934716168428,
            sales_num: "1.5K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601101794623109&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbd9f88d3-cd2c-4892-98bc-69a1b6609d2b.jpg&spec_id=16086&spec_gallery_id=232992&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUwMQ&_oak_gallery_order=2031401367%2C1511435329&spec_ids=16086&_oak_mp_inf=EIX9xNeu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
            selected_spec_ids: [16086],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601101794623109&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbd9f88d3-cd2c-4892-98bc-69a1b6609d2b.jpg&spec_id=16086&spec_gallery_id=232992&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUwMQ&_oak_gallery_order=2031401367%2C1511435329&spec_ids=16086&_oak_mp_inf=EIX9xNeu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112690716660743813",
              sku_extra_param: {
                _oak_gallery_order: "2031401367,1511435329",
              },
            },
            goods_tags: [],
            show_index: 102,
            price_info: {
              reduction_text: ["-19", "%"],
              market_price_type: 2,
              price_text: ["CA$", "15.01", ""],
              price_str: "CA$15.01",
              price_color: "#FB7701",
              split_price_text: ["CA$", "15", ".01", ""],
              currency_str: "CA$",
              price: 1501,
              market_price_str: "18.59",
              market_price: 1859,
              price_schema: "15.01",
              currency: "CAD",
              reduction: 190,
              market_price_text: ["", "18.59", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 232992,
              url_id: "8323669548881463503",
              url: "https://img.kwcdn.com/product/fancy/bd9f88d3-cd2c-4892-98bc-69a1b6609d2b.jpg",
              height: 1785,
            },
            sales_tip: "1.5K+ sold",
            visible: true,
            goods_id: 601101794623109,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "15", ".01", ""],
                  reduction_text: ["-19", "%"],
                  price: 1501,
                  market_price_str: "18.59",
                  market_price: 1859,
                  price_schema: "15.01",
                  currency: "CAD",
                  price_text: ["CA$", "15.01", ""],
                  price_str: "CA$15.01",
                  price_color: "#FB7701",
                  reduction: 190,
                  market_price_text: ["", "18.59", ""],
                },
                image: {
                  width: 1340,
                  id: 232992,
                  url: "https://img.kwcdn.com/product/fancy/bd9f88d3-cd2c-4892-98bc-69a1b6609d2b.jpg",
                  height: 1785,
                },
                color: "(0,0,255,1)",
                seo_link_url:
                  "/ca/girls-elegant-a-line-denim-style-dress-with-belt-long-sleeve-midi-length-collar-lapel-jacket-like-jacket-net-waist-tie-for-parties-weddings-machine-washable--outfit-no-stretch-g-601101794623109.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbd9f88d3-cd2c-4892-98bc-69a1b6609d2b.jpg&spec_id=16086&spec_gallery_id=232992&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUwMQ&_oak_mp_inf=EIX9xNeu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                spec_id: 16086,
                color_image:
                  "https://img.kwcdn.com/product/fancy/d1a84a86-ea6b-4f88-8758-b252f53c9210.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101794623109&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbd9f88d3-cd2c-4892-98bc-69a1b6609d2b.jpg&spec_id=16086&spec_gallery_id=232992&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUwMQ&_oak_mp_inf=EIX9xNeu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/bd9f88d3-cd2c-4892-98bc-69a1b6609d2b.jpg",
                price_str: "16.19",
              },
            ],
            spec_ids: "16086",
            display_end_time: 1764392399,
            seo_link_url:
              "/ca/girls-elegant-a-line-denim-style-dress-with-belt-long-sleeve-midi-length-collar-lapel-jacket-like-jacket-net-waist-tie-for-parties-weddings-machine-washable--outfit-no-stretch-g-601101794623109.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbd9f88d3-cd2c-4892-98bc-69a1b6609d2b.jpg&spec_id=16086&spec_gallery_id=232992&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUwMQ&_oak_gallery_order=2031401367%2C1511435329&_oak_mp_inf=EIX9xNeu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D&spec_ids=16086",
            queryReleScore: 0.0,
            sales_tip_text: ["1.5K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: true,
              comment_num_tips: "43",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/ce329e3d-c611-4424-a0db-cd002a5b0bea.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/ce329e3d-c611-4424-a0db-cd002a5b0bea.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-30%",
            },
            item_type: 0,
            page_alt:
              "girls color block fashion korean style dress with lace trim round neck long sleeve princess skirt and beaded hem sweater dress for autumn winter",
            current_sku_id: 17603309072020,
            tags_info: {},
            video: {
              video_url: "",
            },
            title:
              "Girls' Color-Block Fashion Korean Style Dress with Lace Trim, Round Neck Long Sleeve Princess Skirt and Beaded Hem Sweater Dress for Autumn/Winter",
            sales_tip_text_list: ["668", "sold"],
            p_rec: {
              skc_id: "17595178362320",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "716017946",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRD5DQbg84O9hyVceICb1hyS9FOdx+xKQmNpIt2dmm6n9wCjbCorWaujTMZ6ziVJHbEQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "2555777342017402661",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "716017946",
              g: "601102158732912",
              scene_id: "3",
              show_price: "2070",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "103",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "7333364004328995404",
              ts: "1763271940577",
            },
            mall_id: 634418216726954,
            sales_num: "668",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601102158732912&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fce329e3d-c611-4424-a0db-cd002a5b0bea.jpg&spec_id=2&spec_gallery_id=320016&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjA3MA&_oak_gallery_order=716017946%2C2122173239&spec_ids=2,3002&_oak_mp_inf=EPC8lIWw1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
            selected_spec_ids: [2, 3002],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601102158732912&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fce329e3d-c611-4424-a0db-cd002a5b0bea.jpg&spec_id=2&spec_gallery_id=320016&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjA3MA&_oak_gallery_order=716017946%2C2122173239&spec_ids=2,3002&_oak_mp_inf=EPC8lIWw1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "716017946,2122173239",
              },
            },
            goods_tags: [],
            show_index: 103,
            price_info: {
              split_price_text: ["CA$", "20", ".70", ""],
              currency_str: "CA$",
              reduction_text: ["-30", "%"],
              price: 2070,
              market_price_str: "29.59",
              market_price: 2959,
              market_price_type: 1,
              price_schema: "20.70",
              currency: "CAD",
              price_text: ["CA$", "20.70", ""],
              price_str: "CA$20.70",
              market_price_text: ["", "29.59", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 320016,
              url_id: "2555777342017402661",
              url: "https://img.kwcdn.com/product/fancy/ce329e3d-c611-4424-a0db-cd002a5b0bea.jpg",
              height: 1785,
            },
            sales_tip: "668 sold",
            visible: true,
            goods_id: 601102158732912,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "20", ".70", ""],
                  reduction_text: [],
                  price: 2070,
                  market_price_str: "29.59",
                  market_price: 2959,
                  price_schema: "20.70",
                  currency: "CAD",
                  price_text: ["CA$", "20.70", ""],
                  price_str: "CA$20.70",
                  market_price_text: ["", "29.59", ""],
                },
                image: {
                  width: 1340,
                  id: 320016,
                  url: "https://img.kwcdn.com/product/fancy/ce329e3d-c611-4424-a0db-cd002a5b0bea.jpg",
                  height: 1785,
                },
                color: "(255,0,0,1)",
                seo_link_url:
                  "/ca/girls-color-block-fashion-korean-style-dress-with-lace-trim-round-neck-long-sleeve-princess-skirt-and-beaded-hem-sweater-dress-for-autumn-winter-g-601102158732912.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fce329e3d-c611-4424-a0db-cd002a5b0bea.jpg&spec_id=2&spec_gallery_id=320016&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjA3MA&_oak_mp_inf=EPC8lIWw1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                spec_id: 2,
                color_image:
                  "https://img.kwcdn.com/product/fancy/00f39f51-a522-4707-ba98-eb75f0a21c16.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601102158732912&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fce329e3d-c611-4424-a0db-cd002a5b0bea.jpg&spec_id=2&spec_gallery_id=320016&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjA3MA&_oak_mp_inf=EPC8lIWw1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/ce329e3d-c611-4424-a0db-cd002a5b0bea.jpg",
                price_str: "20.70",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "20", ".70", ""],
                  reduction_text: [],
                  price: 2070,
                  market_price_str: "29.59",
                  market_price: 2959,
                  price_schema: "20.70",
                  currency: "CAD",
                  price_text: ["CA$", "20.70", ""],
                  price_str: "CA$20.70",
                  market_price_text: ["", "29.59", ""],
                },
                image: {
                  width: 1340,
                  id: 320021,
                  url: "https://img.kwcdn.com/product/fancy/ddceb5b8-ec20-4fd4-92a6-ec8546df4d7d.jpg",
                  height: 1785,
                },
                color: "(0,0,0,1)",
                seo_link_url:
                  "/ca/girls-color-block-fashion-korean-style-dress-with-lace-trim-round-neck-long-sleeve-princess-skirt-and-beaded-hem-sweater-dress-for-autumn-winter-g-601102158732912.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fddceb5b8-ec20-4fd4-92a6-ec8546df4d7d.jpg&spec_id=3002&spec_gallery_id=320021&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjA3MA&_oak_mp_inf=EPC8lIWw1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                spec_id: 3002,
                color_image:
                  "https://img.kwcdn.com/product/fancy/22c96850-cc99-4c86-9eb2-89cb0f616666.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601102158732912&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fddceb5b8-ec20-4fd4-92a6-ec8546df4d7d.jpg&spec_id=3002&spec_gallery_id=320021&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjA3MA&_oak_mp_inf=EPC8lIWw1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/ddceb5b8-ec20-4fd4-92a6-ec8546df4d7d.jpg",
                price_str: "20.70",
              },
            ],
            spec_ids: "2,3002",
            seo_link_url:
              "/ca/girls-color-block-fashion-korean-style-dress-with-lace-trim-round-neck-long-sleeve-princess-skirt-and-beaded-hem-sweater-dress-for-autumn-winter-g-601102158732912.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fce329e3d-c611-4424-a0db-cd002a5b0bea.jpg&spec_id=2&spec_gallery_id=320016&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjA3MA&_oak_gallery_order=716017946%2C2122173239&_oak_mp_inf=EPC8lIWw1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILWzytmoMw%3D%3D&spec_ids=2,3002",
            queryReleScore: 0.0,
            sales_tip_text: ["668", "sold"],
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
              "https://img.kwcdn.com/product/fancy/6f38a103-97af-4028-887e-419f88458dd9.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/6f38a103-97af-4028-887e-419f88458dd9.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-19%",
            },
            item_type: 0,
            page_alt:
              "summer cartoon dress for girls with bow and puff sleeves   casual wear",
            current_sku_id: 17593954807512,
            tags_info: {
              activity_icon_tags: [{}],
              today_tags: [
                {
                  ext_map: {},
                  tag_id: 1004,
                  text: "Last day",
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
              video_url: "",
            },
            title:
              "Summer Cartoon Dress for Girls with Bow And Puff Sleeves, Perfect for Casual Wear.",
            sales_tip_text_list: ["7.1K+", "sold"],
            display_end_time_percent: 52,
            sold_quantity_percent: 19,
            p_rec: {
              skc_id: "17592678181526",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "2066201838",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRC8/X1m2gmONiVy/EUkTkrE0rt3plI35KqrAKyYoihz6VHoDHjYgClmUAnCW+5Qv4sQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "8338520442089899797",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "2066201838",
              g: "601099854895123",
              scene_id: "3",
              show_price: "1111",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "104",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "1413249233787387940",
              ts: "1763271940577",
            },
            activity_type: 13,
            mall_id: 634418211649436,
            sales_num: "7.1K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601099854895123&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F6f38a103-97af-4028-887e-419f88458dd9.jpg&spec_id=16057&spec_gallery_id=33093&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTExMQ&_oak_gallery_order=2066201838%2C248824992&spec_ids=16057&_oak_mp_inf=EJOwzbqn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D",
            selected_spec_ids: [16057],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601099854895123&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F6f38a103-97af-4028-887e-419f88458dd9.jpg&spec_id=16057&spec_gallery_id=33093&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTExMQ&_oak_gallery_order=2066201838%2C248824992&spec_ids=16057&_oak_mp_inf=EJOwzbqn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112732505157425171",
              sku_extra_param: {
                _oak_gallery_order: "2066201838,248824992",
              },
            },
            goods_tags: [
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
            show_index: 104,
            price_info: {
              reduction_text: ["-19", "%"],
              market_price_type: 1,
              price_text: ["CA$", "11.11", ""],
              price_str: "CA$11.11",
              price_color: "#FB7701",
              split_price_text: ["CA$", "11", ".11", ""],
              currency_str: "CA$",
              price: 1111,
              market_price_str: "13.82",
              market_price: 1382,
              price_schema: "11.11",
              currency: "CAD",
              reduction: 190,
              market_price_text: ["", "13.82", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 33093,
              url_id: "8338520442089899797",
              url: "https://img.kwcdn.com/product/fancy/6f38a103-97af-4028-887e-419f88458dd9.jpg",
              height: 1785,
            },
            sales_tip: "7.1K+ sold",
            visible: true,
            goods_id: 601099854895123,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "11", ".11", ""],
                  reduction_text: ["-19", "%"],
                  price: 1111,
                  market_price_str: "13.82",
                  market_price: 1382,
                  price_schema: "11.11",
                  currency: "CAD",
                  price_text: ["CA$", "11.11", ""],
                  price_str: "CA$11.11",
                  price_color: "#FB7701",
                  reduction: 190,
                  market_price_text: ["", "13.82", ""],
                },
                image: {
                  width: 1340,
                  id: 33093,
                  url: "https://img.kwcdn.com/product/fancy/6f38a103-97af-4028-887e-419f88458dd9.jpg",
                  height: 1785,
                },
                color: "(255,182,193,1)",
                seo_link_url:
                  "/ca/summer-cartoon-dress-for-girls-with-bow-and-puff-sleeves--casual-wear-g-601099854895123.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F6f38a103-97af-4028-887e-419f88458dd9.jpg&spec_id=16057&spec_gallery_id=33093&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTExMQ&_oak_mp_inf=EJOwzbqn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D",
                spec_id: 16057,
                color_image:
                  "https://img.kwcdn.com/product/fancy/59b18b68-de5f-41d9-bb04-c00f6b581e4c.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601099854895123&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F6f38a103-97af-4028-887e-419f88458dd9.jpg&spec_id=16057&spec_gallery_id=33093&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTExMQ&_oak_mp_inf=EJOwzbqn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/6f38a103-97af-4028-887e-419f88458dd9.jpg",
                price_str: "11.72",
              },
            ],
            spec_ids: "16057",
            display_end_time: 1763355599,
            seo_link_url:
              "/ca/summer-cartoon-dress-for-girls-with-bow-and-puff-sleeves--casual-wear-g-601099854895123.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F6f38a103-97af-4028-887e-419f88458dd9.jpg&spec_id=16057&spec_gallery_id=33093&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTExMQ&_oak_gallery_order=2066201838%2C248824992&_oak_mp_inf=EJOwzbqn1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D&spec_ids=16057",
            queryReleScore: 0.0,
            sales_tip_text: ["7.1K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: false,
              comment_num_tips: "433",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/741f23b1-ba87-4d2a-99b1-e993a5cb482f.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/741f23b1-ba87-4d2a-99b1-e993a5cb482f.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-65%",
            },
            item_type: 0,
            page_alt:
              "elegant french country floral   neck lantern sleeve long sleeve a line dress with smocked back detail   birthday parties vacations casual formal wear versatile for   winter ideal for princesses mothers sisters",
            current_sku_id: 17602021084480,
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
              "Elegant French Country Floral Print Square Neck Lantern Sleeve Long Sleeve A-Line Dress with Smocked Back Detail - Perfect for Birthday Parties, Vacations, Casual & Formal Wear - Versatile for Spring, Fall, Winter - Ideal for Princesses, Mothers, Sisters",
            sales_tip_text_list: ["549", "sold"],
            display_end_time_percent: 54,
            sold_quantity_percent: 87,
            p_rec: {
              skc_id: "17594876140801",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1406452253",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRA7oxiMQrehQ1/zoyOJW+FIV5bI/zzBQvZn9QS+cPOwDWyarJdcYsPP9EhAVzvBmacQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "5520556512074369",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1406452253",
              g: "601101898338751",
              scene_id: "3",
              show_price: "1421",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "105",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "6272394561119502331",
              ts: "1763271940577",
            },
            activity_type: 13,
            mall_id: 634418214081469,
            sales_num: "549",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601101898338751&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F741f23b1-ba87-4d2a-99b1-e993a5cb482f.jpg&spec_id=16066&spec_gallery_id=257483&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQyMQ&_oak_gallery_order=1406452253%2C150539060&spec_ids=16066&_oak_mp_inf=EL%2Bj%2F4iv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D",
            selected_spec_ids: [16066],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601101898338751&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F741f23b1-ba87-4d2a-99b1-e993a5cb482f.jpg&spec_id=16066&spec_gallery_id=257483&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQyMQ&_oak_gallery_order=1406452253%2C150539060&spec_ids=16066&_oak_mp_inf=EL%2Bj%2F4iv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112670842345542079",
              sku_extra_param: {
                _oak_gallery_order: "1406452253,150539060",
              },
            },
            goods_tags: [],
            show_index: 105,
            price_info: {
              reduction_text: ["-65", "%"],
              market_price_type: 2,
              price_text: ["CA$", "14.21", ""],
              price_str: "CA$14.21",
              price_color: "#FB7701",
              split_price_text: ["CA$", "14", ".21", ""],
              currency_str: "CA$",
              price: 1421,
              market_price_str: "41.48",
              market_price: 4148,
              price_schema: "14.21",
              currency: "CAD",
              reduction: 650,
              market_price_text: ["", "41.48", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 257483,
              url_id: "5520556512074369",
              url: "https://img.kwcdn.com/product/fancy/741f23b1-ba87-4d2a-99b1-e993a5cb482f.jpg",
              height: 1785,
            },
            sales_tip: "549 sold",
            visible: true,
            goods_id: 601101898338751,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "14", ".21", ""],
                  reduction_text: ["-65", "%"],
                  price: 1421,
                  market_price_str: "41.48",
                  market_price: 4148,
                  price_schema: "14.21",
                  currency: "CAD",
                  price_text: ["CA$", "14.21", ""],
                  price_str: "CA$14.21",
                  price_color: "#FB7701",
                  reduction: 650,
                  market_price_text: ["", "41.48", ""],
                },
                image: {
                  width: 1340,
                  id: 257483,
                  url: "https://img.kwcdn.com/product/fancy/741f23b1-ba87-4d2a-99b1-e993a5cb482f.jpg",
                  height: 1785,
                },
                color: "(255,255,255,0)",
                seo_link_url:
                  "/ca/elegant-french-country-floral--neck-lantern-sleeve-long-sleeve-a-line-dress-with-smocked-back-detail--birthday-parties-vacations-casual-formal-wear-versatile-for--winter-ideal-for-princesses-mothers-sisters-g-601101898338751.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F741f23b1-ba87-4d2a-99b1-e993a5cb482f.jpg&spec_id=16066&spec_gallery_id=257483&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQyMQ&_oak_mp_inf=EL%2Bj%2F4iv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D",
                spec_id: 16066,
                color_image:
                  "https://img.kwcdn.com/product/temu-avi/image-crop/3b52bd41-75e0-49b3-97da-055fbe946082.jpg",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101898338751&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F741f23b1-ba87-4d2a-99b1-e993a5cb482f.jpg&spec_id=16066&spec_gallery_id=257483&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQyMQ&_oak_mp_inf=EL%2Bj%2F4iv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/741f23b1-ba87-4d2a-99b1-e993a5cb482f.jpg",
                price_str: "14.97",
              },
            ],
            spec_ids: "16066",
            display_end_time: 1764392399,
            seo_link_url:
              "/ca/elegant-french-country-floral--neck-lantern-sleeve-long-sleeve-a-line-dress-with-smocked-back-detail--birthday-parties-vacations-casual-formal-wear-versatile-for--winter-ideal-for-princesses-mothers-sisters-g-601101898338751.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F741f23b1-ba87-4d2a-99b1-e993a5cb482f.jpg&spec_id=16066&spec_gallery_id=257483&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQyMQ&_oak_gallery_order=1406452253%2C150539060&_oak_mp_inf=EL%2Bj%2F4iv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D&spec_ids=16066",
            queryReleScore: 0.0,
            sales_tip_text: ["549", "sold"],
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
              "https://img.kwcdn.com/product/fancy/892acf4b-70cb-425f-a18a-3abbe49664e8.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/892acf4b-70cb-425f-a18a-3abbe49664e8.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-55%",
            },
            item_type: 0,
            page_alt:
              "girls elegant french vintage floral print mesh long sleeve dress with puffed sleeves flared skirt black white floral print round neck a line silhouette     parties special occasions dresses for girls party attire",
            current_sku_id: 17608645856090,
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
              video_url: "",
            },
            title:
              "Girls' Elegant French Vintage Floral Print Mesh Long Sleeve Dress with Puffed Sleeves & Flared Skirt - Black & White Floral Print, Round Neck, A-Line Silhouette, Perfect For Spring/fall Parties & Special Occasions, Dresses For Girls, Party Attire",
            sales_tip_text_list: ["391", "sold"],
            display_end_time_percent: 50,
            sold_quantity_percent: 75,
            p_rec: {
              skc_id: "17596415770972",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "1",
              mid: "69999906",
              final_creative_id: "586826934",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRCLXquTI1hWYuHultCSXh+YxKInGuw8hdlorNUBdBiXD9zqr7eJcsUk/9nc9UzpBi0QiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "8374533271799223507",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "586826934",
              g: "601103220324396",
              scene_id: "3",
              show_price: "2101",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "106",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "8927227699993034693",
              ts: "1763271940577",
            },
            activity_type: 100,
            mall_id: 634418221794964,
            sales_num: "391",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601103220324396&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F892acf4b-70cb-425f-a18a-3abbe49664e8.jpg&spec_id=3002&spec_gallery_id=369155&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjEwMQ&_oak_gallery_order=586826934%2C1844322169%2C1768758235%2C1632514750%2C843615082&spec_ids=3002&_oak_mp_inf=EKzwrv%2Bz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D",
            selected_spec_ids: [3002],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601103220324396&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F892acf4b-70cb-425f-a18a-3abbe49664e8.jpg&spec_id=3002&spec_gallery_id=369155&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjEwMQ&_oak_gallery_order=586826934%2C1844322169%2C1768758235%2C1632514750%2C843615082&spec_ids=3002&_oak_mp_inf=EKzwrv%2Bz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112684276709636140",
              sku_extra_param: {
                _oak_gallery_order:
                  "586826934,1844322169,1768758235,1632514750,843615082",
              },
            },
            goods_tags: [],
            show_index: 106,
            price_info: {
              reduction_text: ["-55", "%"],
              market_price_type: 2,
              price_text: ["CA$", "21.01", ""],
              price_str: "CA$21.01",
              split_price_text: ["CA$", "21", ".01", ""],
              currency_str: "CA$",
              price: 2101,
              market_price_str: "47.70",
              market_price: 4770,
              price_schema: "21.01",
              currency: "CAD",
              reduction: 550,
              market_price_text: ["", "47.70", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1350,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 369155,
              url_id: "8374533271799223507",
              url: "https://img.kwcdn.com/product/fancy/892acf4b-70cb-425f-a18a-3abbe49664e8.jpg",
              height: 1800,
            },
            sales_tip: "391 sold",
            visible: true,
            goods_id: 601103220324396,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "21", ".01", ""],
                  reduction_text: ["-55", "%"],
                  price: 2101,
                  market_price_str: "47.70",
                  market_price: 4770,
                  price_schema: "21.01",
                  currency: "CAD",
                  price_text: ["CA$", "21.01", ""],
                  price_str: "CA$21.01",
                  reduction: 550,
                  market_price_text: ["", "47.70", ""],
                },
                image: {
                  width: 1350,
                  id: 369155,
                  url: "https://img.kwcdn.com/product/fancy/892acf4b-70cb-425f-a18a-3abbe49664e8.jpg",
                  height: 1800,
                },
                color: "(0,0,0,1)",
                seo_link_url:
                  "/ca/girls-elegant-french-vintage-floral-print-mesh-long-sleeve-dress-with-puffed-sleeves-flared-skirt-black-white-floral-print-round-neck-a-line-silhouette---parties-special-occasions-dresses-for-girls-party-attire-g-601103220324396.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F892acf4b-70cb-425f-a18a-3abbe49664e8.jpg&spec_id=3002&spec_gallery_id=369155&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjEwMQ&_oak_mp_inf=EKzwrv%2Bz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D",
                spec_id: 3002,
                color_image:
                  "https://img.kwcdn.com/product/fancy/ba73d60b-018d-4893-a2e6-c307eb58acc3.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601103220324396&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F892acf4b-70cb-425f-a18a-3abbe49664e8.jpg&spec_id=3002&spec_gallery_id=369155&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjEwMQ&_oak_mp_inf=EKzwrv%2Bz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/892acf4b-70cb-425f-a18a-3abbe49664e8.jpg",
                price_str: "23.79",
              },
            ],
            spec_ids: "3002",
            display_end_time: 1764565199,
            seo_link_url:
              "/ca/girls-elegant-french-vintage-floral-print-mesh-long-sleeve-dress-with-puffed-sleeves-flared-skirt-black-white-floral-print-round-neck-a-line-silhouette---parties-special-occasions-dresses-for-girls-party-attire-g-601103220324396.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F892acf4b-70cb-425f-a18a-3abbe49664e8.jpg&spec_id=3002&spec_gallery_id=369155&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjEwMQ&_oak_gallery_order=586826934%2C1844322169%2C1768758235%2C1632514750%2C843615082&_oak_mp_inf=EKzwrv%2Bz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D&spec_ids=3002",
            queryReleScore: 0.0,
            sales_tip_text: ["391", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.6,
              hidden_comment: true,
              comment_num_tips: "14",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/82e167f1-b644-4d18-a69d-a460e305d2a0.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/82e167f1-b644-4d18-a69d-a460e305d2a0.jpg",
            ware_house_type: 1,
            benefit_text: {
              text: "-51%",
            },
            item_type: 0,
            page_alt:
              "  to dazzle in our bean pink tulle dress made from 100 polyester this dress is   for any special occasion",
            current_sku_id: 17602302605124,
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
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"MA&BABY","brand_authorized_type":2}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: MA&BABY",
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
                    simply_stock_tag_text: "6 LEFT!",
                  },
                  prompt_tag_text:
                    "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                  marketing_tag_type: 1000,
                  rtl_icon_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                  tag_id: 91004,
                  text: "Only 6 left",
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
              ],
            },
            video: {
              video_url: "",
            },
            title:
              "Get Ready to Dazzle in Our Bean Pink Tulle Dress Made from 100% Polyester, This Dress Is The Perfect Choice for Any Special Occasion",
            sales_tip_text_list: ["10", "sold"],
            display_end_time_percent: 54,
            sold_quantity_percent: 0,
            p_rec: {
              skc_id: "17594945326554",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "1",
              mid: "69999906",
              final_creative_id: "968580030",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRCMzCy7B50iDihTJGfEbiQ/PwyosMLfSqvsUoLYqIrUP08v+Q1VPW+LubyqrksommAQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "2871283521868809744",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "968580030",
              g: "601101959106316",
              scene_id: "3",
              show_price: "1719",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "107",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "3165041223069358098",
              ts: "1763271940577",
            },
            activity_type: 13,
            mall_id: 634418223839042,
            sales_num: "10",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601101959106316&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F82e167f1-b644-4d18-a69d-a460e305d2a0.jpg&spec_id=16057&spec_gallery_id=225652&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTcxOQ&_oak_gallery_order=968580030&spec_ids=16057&_oak_mp_inf=EIye%2FKWv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D",
            selected_spec_ids: [16057],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601101959106316&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F82e167f1-b644-4d18-a69d-a460e305d2a0.jpg&spec_id=16057&spec_gallery_id=225652&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTcxOQ&_oak_gallery_order=968580030&spec_ids=16057&_oak_mp_inf=EIye%2FKWv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112732481929350924",
              sku_extra_param: {
                _oak_gallery_order: "968580030",
              },
            },
            goods_tags: [
              {
                icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                color: "#FB7701",
                ext_map: {
                  stock_type: "1",
                  simply_stock_tag_text: "6 LEFT!",
                },
                prompt_tag_text:
                  "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag.",
                marketing_tag_type: 1000,
                rtl_icon_url:
                  "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                tag_id: 91004,
                text: "Only 6 left",
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
            ],
            show_index: 107,
            price_info: {
              reduction_text: ["-51", "%"],
              market_price_type: 1,
              price_text: ["CA$", "17.19", ""],
              price_str: "CA$17.19",
              price_color: "#FB7701",
              split_price_text: ["CA$", "17", ".19", ""],
              currency_str: "CA$",
              price: 1719,
              market_price_str: "35.33",
              market_price: 3533,
              price_schema: "17.19",
              currency: "CAD",
              reduction: 510,
              market_price_text: ["", "35.33", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1500,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 225652,
              url_id: "2871283521868809744",
              url: "https://img.kwcdn.com/product/fancy/82e167f1-b644-4d18-a69d-a460e305d2a0.jpg",
              height: 2000,
            },
            sales_tip: "10 sold",
            visible: true,
            goods_id: 601101959106316,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "17", ".19", ""],
                  reduction_text: ["-51", "%"],
                  price: 1719,
                  market_price_str: "35.33",
                  market_price: 3533,
                  price_schema: "17.19",
                  currency: "CAD",
                  price_text: ["CA$", "17.19", ""],
                  price_str: "CA$17.19",
                  price_color: "#FB7701",
                  reduction: 510,
                  market_price_text: ["", "35.33", ""],
                },
                image: {
                  width: 1500,
                  id: 225652,
                  url: "https://img.kwcdn.com/product/fancy/82e167f1-b644-4d18-a69d-a460e305d2a0.jpg",
                  height: 2000,
                },
                color: "(255,182,193,1)",
                seo_link_url:
                  "/ca/-to-dazzle-in-our-bean-pink-tulle-dress-made-from-100-polyester-this-dress-is--for-any-special-occasion-g-601101959106316.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F82e167f1-b644-4d18-a69d-a460e305d2a0.jpg&spec_id=16057&spec_gallery_id=225652&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTcxOQ&_oak_mp_inf=EIye%2FKWv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D",
                spec_id: 16057,
                color_image:
                  "https://img.kwcdn.com/product/fancy/dcfb5bc3-aee0-4ca8-ab27-976c32536271.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101959106316&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F82e167f1-b644-4d18-a69d-a460e305d2a0.jpg&spec_id=16057&spec_gallery_id=225652&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTcxOQ&_oak_mp_inf=EIye%2FKWv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/82e167f1-b644-4d18-a69d-a460e305d2a0.jpg",
                price_str: "21.53",
              },
            ],
            spec_ids: "16057",
            display_end_time: 1764392399,
            seo_link_url:
              "/ca/-to-dazzle-in-our-bean-pink-tulle-dress-made-from-100-polyester-this-dress-is--for-any-special-occasion-g-601101959106316.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F82e167f1-b644-4d18-a69d-a460e305d2a0.jpg&spec_id=16057&spec_gallery_id=225652&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTcxOQ&_oak_gallery_order=968580030&_oak_mp_inf=EIye%2FKWv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D&spec_ids=16057",
            queryReleScore: 0.0,
            sales_tip_text: ["10", "sold"],
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
              "https://img.kwcdn.com/product/fancy/2cbd1bd0-37de-45f1-b1ae-938c8180bbb4.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/2cbd1bd0-37de-45f1-b1ae-938c8180bbb4.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "baby s sleeveless princess dress with bow tulle   birthday party wedding christmas outfit a line smock dress with belt for no chest padding",
            current_sku_id: 17602581102007,
            tags_info: {
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
                "https://goods-vod.kwcdn.com/goods-video/18c190f2a084be72805c5632744e92f4d6d77a42gs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/2cbd1bd0-37de-45f1-b1ae-938c8180bbb4.jpg",
              url: "https://img.kwcdn.com/product/726e3f324f38982d636b010dc495abcdb5c6025f.temu.000001.jpeg",
            },
            title:
              "Baby's Sleeveless Princess Dress with Bow & Tulle - All-Season Birthday Party Wedding Christmas Outfit, A-Line Smock Dress with Belt for & (No Chest Padding)",
            sales_tip_text_list: ["678", "sold"],
            p_rec: {
              skc_id: "17595009812705",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "689077196",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRBPhxxOgGI/3zeRdPXsb+3nX3bGNJxC3aEqbd3cMbYwKXw7ZV5q11Qv22KiYk4uJJQQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "7162566733405916372",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "689077196",
              g: "601102014219619",
              scene_id: "3",
              show_price: "3281",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "108",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "5949816817065091204",
              ts: "1763271940577",
            },
            mall_id: 634418221594010,
            sales_num: "678",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601102014219619&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cbd1bd0-37de-45f1-b1ae-938c8180bbb4.jpg&spec_id=16084&spec_gallery_id=260492&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI4MQ&_oak_gallery_order=689077196%2C1473757067%2C1259016678%2C103186719%2C377990297&spec_ids=16084,16060,2&_oak_mp_inf=EOOKoMCv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D",
            selected_spec_ids: [16084, 16060, 2],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601102014219619&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cbd1bd0-37de-45f1-b1ae-938c8180bbb4.jpg&spec_id=16084&spec_gallery_id=260492&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI4MQ&_oak_gallery_order=689077196%2C1473757067%2C1259016678%2C103186719%2C377990297&spec_ids=16084,16060,2&_oak_mp_inf=EOOKoMCv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "689077196,1473757067,1259016678,103186719,377990297",
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
            show_index: 108,
            price_info: {
              split_price_text: ["CA$", "32", ".81", ""],
              currency_str: "CA$",
              reduction_text: [],
              price: 3281,
              price_schema: "32.81",
              currency: "CAD",
              price_text: ["CA$", "32.81", ""],
              price_str: "CA$32.81",
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 2763,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 260492,
              url_id: "7162566733405916372",
              url: "https://img.kwcdn.com/product/fancy/2cbd1bd0-37de-45f1-b1ae-938c8180bbb4.jpg",
              height: 3684,
            },
            sales_tip: "678 sold",
            visible: true,
            goods_id: 601102014219619,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "32", ".81", ""],
                  reduction_text: [],
                  price: 3281,
                  price_schema: "32.81",
                  currency: "CAD",
                  price_text: ["CA$", "32.81", ""],
                  price_str: "CA$32.81",
                },
                image: {
                  width: 2763,
                  id: 260492,
                  url: "https://img.kwcdn.com/product/fancy/2cbd1bd0-37de-45f1-b1ae-938c8180bbb4.jpg",
                  height: 3684,
                },
                color: "(68,206,246,1)",
                seo_link_url:
                  "/ca/baby-s-sleeveless-princess-dress-with-bow-tulle--birthday-party-wedding-christmas-outfit-a-line-smock-dress-with-belt-for-no-chest-padding-g-601102014219619.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cbd1bd0-37de-45f1-b1ae-938c8180bbb4.jpg&spec_id=16084&spec_gallery_id=260492&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI4MQ&_oak_mp_inf=EOOKoMCv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D",
                spec_id: 16084,
                color_image:
                  "https://img.kwcdn.com/product/fancy/9bc5c160-1630-4a00-8548-9504de91a94c.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601102014219619&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cbd1bd0-37de-45f1-b1ae-938c8180bbb4.jpg&spec_id=16084&spec_gallery_id=260492&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI4MQ&_oak_mp_inf=EOOKoMCv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILazytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/2cbd1bd0-37de-45f1-b1ae-938c8180bbb4.jpg",
                price_str: "32.81",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "32", ".40", ""],
                  reduction_text: [],
                  price: 3240,
                  price_schema: "32.40",
                  currency: "CAD",
                  price_text: ["CA$", "32.40", ""],
                  price_str: "CA$32.40",
                },
                image: {
                  width: 2626,
                  id: 260487,
                  url: "https://img.kwcdn.com/product/fancy/47f8a730-4481-47dd-a812-779f7f8886e9.jpg",
                  height: 3502,
                },
                color: "(238,208,216,1)",
                seo_link_url:
                  "/ca/baby-s-sleeveless-princess-dress-with-bow-tulle--birthday-party-wedding-christmas-outfit-a-line-smock-dress-with-belt-for-no-chest-padding-g-601102014219619.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F47f8a730-4481-47dd-a812-779f7f8886e9.jpg&spec_id=16060&spec_gallery_id=260487&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI0MA&_oak_mp_inf=EOOKoMCv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D",
                spec_id: 16060,
                color_image:
                  "https://img.kwcdn.com/product/fancy/854cc51c-3725-4faf-9ecb-24d451a829d4.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601102014219619&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F47f8a730-4481-47dd-a812-779f7f8886e9.jpg&spec_id=16060&spec_gallery_id=260487&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI0MA&_oak_mp_inf=EOOKoMCv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/47f8a730-4481-47dd-a812-779f7f8886e9.jpg",
                price_str: "32.40",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "32", ".40", ""],
                  reduction_text: [],
                  price: 3240,
                  price_schema: "32.40",
                  currency: "CAD",
                  price_text: ["CA$", "32.40", ""],
                  price_str: "CA$32.40",
                },
                image: {
                  width: 2653,
                  id: 260497,
                  url: "https://img.kwcdn.com/product/fancy/17b82f1e-662d-443a-a80e-6d7f6723babf.jpg",
                  height: 3538,
                },
                color: "(255,0,0,1)",
                seo_link_url:
                  "/ca/baby-s-sleeveless-princess-dress-with-bow-tulle--birthday-party-wedding-christmas-outfit-a-line-smock-dress-with-belt-for-no-chest-padding-g-601102014219619.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F17b82f1e-662d-443a-a80e-6d7f6723babf.jpg&spec_id=2&spec_gallery_id=260497&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI0MA&_oak_mp_inf=EOOKoMCv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D",
                spec_id: 2,
                color_image:
                  "https://img.kwcdn.com/product/fancy/0e993b69-3ebf-4f7b-8e06-567f75f454ed.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601102014219619&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F17b82f1e-662d-443a-a80e-6d7f6723babf.jpg&spec_id=2&spec_gallery_id=260497&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI0MA&_oak_mp_inf=EOOKoMCv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/17b82f1e-662d-443a-a80e-6d7f6723babf.jpg",
                price_str: "32.40",
              },
            ],
            spec_ids: "16084,16060,2",
            seo_link_url:
              "/ca/baby-s-sleeveless-princess-dress-with-bow-tulle--birthday-party-wedding-christmas-outfit-a-line-smock-dress-with-belt-for-no-chest-padding-g-601102014219619.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2cbd1bd0-37de-45f1-b1ae-938c8180bbb4.jpg&spec_id=16084&spec_gallery_id=260492&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI4MQ&_oak_gallery_order=689077196%2C1473757067%2C1259016678%2C103186719%2C377990297&_oak_mp_inf=EOOKoMCv1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D&spec_ids=16084,16060,2",
            queryReleScore: 0.0,
            sales_tip_text: ["678", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: false,
              comment_num_tips: "53",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/e21c8f57-b4f6-4fde-97da-3fdacaea5fdb.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/e21c8f57-b4f6-4fde-97da-3fdacaea5fdb.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "girls floral mesh stitching round neck long sleeve midi dress with belt elegant fashionable   dress for   polyester sleeveless casual wear floral detail dress smooth texture",
            current_sku_id: 17598324694060,
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
              "Girls Floral Mesh Stitching Round Neck Long Sleeve Midi Dress with Belt - Elegant Fashionable Spring/Fall Dress for Youngsters, Polyester, Sleeveless, Casual Wear|Floral Detail Dress|Smooth Texture",
            sales_tip_text_list: ["1.4K+", "sold"],
            display_end_time_percent: 54,
            sold_quantity_percent: 95,
            p_rec: {
              skc_id: "17593972253002",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "558166100",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRD5DQbg84O9hyVceICb1hySnsLcs4AJeahUHKMnZ/rSIi8Qt1t6tobZZnvqzM69DmEQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "8910212141519327344",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "558166100",
              g: "601101116299688",
              scene_id: "3",
              show_price: "1654",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "109",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "4584334517490722666",
              ts: "1763271940577",
            },
            activity_type: 13,
            mall_id: 634418222909205,
            sales_num: "1.4K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601101116299688&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe21c8f57-b4f6-4fde-97da-3fdacaea5fdb.jpg&spec_id=3002&spec_gallery_id=152058&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTY1NA&_oak_gallery_order=558166100&spec_ids=3002&_oak_mp_inf=EKizi5Ss1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D",
            selected_spec_ids: [3002],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601101116299688&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe21c8f57-b4f6-4fde-97da-3fdacaea5fdb.jpg&spec_id=3002&spec_gallery_id=152058&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTY1NA&_oak_gallery_order=558166100&spec_ids=3002&_oak_mp_inf=EKizi5Ss1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112701940341463464",
              sku_extra_param: {
                _oak_gallery_order: "558166100",
              },
            },
            goods_tags: [],
            show_index: 109,
            price_info: {
              split_price_text: ["CA$", "16", ".54", ""],
              currency_str: "CA$",
              reduction_text: [],
              price: 1654,
              price_schema: "16.54",
              currency: "CAD",
              price_text: ["CA$", "16.54", ""],
              price_str: "CA$16.54",
              price_color: "#FB7701",
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 152058,
              url_id: "8910212141519327344",
              url: "https://img.kwcdn.com/product/fancy/e21c8f57-b4f6-4fde-97da-3fdacaea5fdb.jpg",
              height: 1785,
            },
            sales_tip: "1.4K+ sold",
            visible: true,
            goods_id: 601101116299688,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "16", ".54", ""],
                  reduction_text: [],
                  price: 1654,
                  price_schema: "16.54",
                  currency: "CAD",
                  price_text: ["CA$", "16.54", ""],
                  price_str: "CA$16.54",
                  price_color: "#FB7701",
                },
                image: {
                  width: 1340,
                  id: 152058,
                  url: "https://img.kwcdn.com/product/fancy/e21c8f57-b4f6-4fde-97da-3fdacaea5fdb.jpg",
                  height: 1785,
                },
                color: "(0,0,0,1)",
                seo_link_url:
                  "/ca/girls-floral-mesh-stitching-round-neck-long-sleeve-midi-dress-with-belt-elegant-fashionable--dress-for--polyester-sleeveless-casual-wear-floral-detail-dress-smooth-texture-g-601101116299688.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe21c8f57-b4f6-4fde-97da-3fdacaea5fdb.jpg&spec_id=3002&spec_gallery_id=152058&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTY1NA&_oak_mp_inf=EKizi5Ss1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D",
                spec_id: 3002,
                color_image:
                  "https://img.kwcdn.com/product/fancy/5f3e5e1f-0b9f-4245-9818-ce90e0101c99.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101116299688&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe21c8f57-b4f6-4fde-97da-3fdacaea5fdb.jpg&spec_id=3002&spec_gallery_id=152058&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTY1NA&_oak_mp_inf=EKizi5Ss1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/e21c8f57-b4f6-4fde-97da-3fdacaea5fdb.jpg",
                price_str: "17.66",
              },
            ],
            spec_ids: "3002",
            display_end_time: 1764392399,
            seo_link_url:
              "/ca/girls-floral-mesh-stitching-round-neck-long-sleeve-midi-dress-with-belt-elegant-fashionable--dress-for--polyester-sleeveless-casual-wear-floral-detail-dress-smooth-texture-g-601101116299688.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fe21c8f57-b4f6-4fde-97da-3fdacaea5fdb.jpg&spec_id=3002&spec_gallery_id=152058&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTY1NA&_oak_gallery_order=558166100&_oak_mp_inf=EKizi5Ss1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D&spec_ids=3002",
            queryReleScore: 0.0,
            sales_tip_text: ["1.4K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: false,
              comment_num_tips: "152",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/b46d0143-5af4-4771-8eb2-32e362f9f93d.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/b46d0143-5af4-4771-8eb2-32e362f9f93d.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "girls floral dress with floral bow accent light beige pastel colors machine washable party everyday outfit for birthdays weddings photo shoots to kids formal attire",
            current_sku_id: 17594907125891,
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
              video_url: "",
            },
            title:
              "Girls' Floral dress with Floral Bow accent - Light Beige & Pastel colors, Machine Washable Party & Everyday Outfit for Birthdays, Weddings, Photo Shoots - to Kids Formal attire",
            sales_tip_text_list: ["1.2K+", "sold"],
            p_rec: {
              skc_id: "17592921026423",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "164244897",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRA26/zJ+irfEvwpUfJJYzVMh2Axqgdq4z3fmabmOksYMZPmerf9onEr6mzSYplWWGcQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "2657982267059401455",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "164244897",
              g: "601100139770251",
              scene_id: "3",
              show_price: "1883",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "110",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "6661299334996904369",
              ts: "1763271940577",
            },
            mall_id: 634418214057699,
            sales_num: "1.2K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601100139770251&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fb46d0143-5af4-4771-8eb2-32e362f9f93d.jpg&spec_id=16068&spec_gallery_id=69644&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg4Mw&_oak_gallery_order=164244897&spec_ids=16068&_oak_mp_inf=EIvjuMKo1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D",
            selected_spec_ids: [16068],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601100139770251&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fb46d0143-5af4-4771-8eb2-32e362f9f93d.jpg&spec_id=16068&spec_gallery_id=69644&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg4Mw&_oak_gallery_order=164244897&spec_ids=16068&_oak_mp_inf=EIvjuMKo1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "164244897",
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
            show_index: 110,
            price_info: {
              split_price_text: ["CA$", "18", ".83", ""],
              currency_str: "CA$",
              reduction_text: [],
              price: 1883,
              price_schema: "18.83",
              currency: "CAD",
              price_text: ["CA$", "18.83", ""],
              price_str: "CA$18.83",
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 69644,
              url_id: "2657982267059401455",
              url: "https://img.kwcdn.com/product/fancy/b46d0143-5af4-4771-8eb2-32e362f9f93d.jpg",
              height: 1785,
            },
            sales_tip: "1.2K+ sold",
            visible: true,
            goods_id: 601100139770251,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "18", ".83", ""],
                  reduction_text: [],
                  price: 1883,
                  price_schema: "18.83",
                  currency: "CAD",
                  price_text: ["CA$", "18.83", ""],
                  price_str: "CA$18.83",
                },
                image: {
                  width: 1340,
                  id: 69644,
                  url: "https://img.kwcdn.com/product/fancy/b46d0143-5af4-4771-8eb2-32e362f9f93d.jpg",
                  height: 1785,
                },
                color: "(247,238,214,1)",
                seo_link_url:
                  "/ca/girls-floral-dress-with-floral-bow-accent-light-beige-pastel-colors-machine-washable-party-everyday-outfit-for-birthdays-weddings-photo-shoots-to-kids-formal-attire-g-601100139770251.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fb46d0143-5af4-4771-8eb2-32e362f9f93d.jpg&spec_id=16068&spec_gallery_id=69644&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg4Mw&_oak_mp_inf=EIvjuMKo1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D",
                spec_id: 16068,
                color_image:
                  "https://img.kwcdn.com/product/fancy/57a793ec-8318-40c3-97d9-2466beb1cf79.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100139770251&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fb46d0143-5af4-4771-8eb2-32e362f9f93d.jpg&spec_id=16068&spec_gallery_id=69644&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg4Mw&_oak_mp_inf=EIvjuMKo1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/b46d0143-5af4-4771-8eb2-32e362f9f93d.jpg",
                price_str: "18.83",
              },
            ],
            spec_ids: "16068",
            seo_link_url:
              "/ca/girls-floral-dress-with-floral-bow-accent-light-beige-pastel-colors-machine-washable-party-everyday-outfit-for-birthdays-weddings-photo-shoots-to-kids-formal-attire-g-601100139770251.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fb46d0143-5af4-4771-8eb2-32e362f9f93d.jpg&spec_id=16068&spec_gallery_id=69644&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTg4Mw&_oak_gallery_order=164244897&_oak_mp_inf=EIvjuMKo1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D&spec_ids=16068",
            queryReleScore: 0.0,
            sales_tip_text: ["1.2K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.8,
              hidden_comment: false,
              comment_num_tips: "72",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/8a2a4383-8ef1-4e15-8b17-7f5f756ed628.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/8a2a4383-8ef1-4e15-8b17-7f5f756ed628.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-70%",
            },
            item_type: 0,
            page_alt:
              "girls 12 under elegant puffy tulle princess dress with layered ruffles ribbon belt   to blue ombre long sleeve like straps round neck formal evening gown for wedding   or pageant   wear hand wash only   fabric",
            current_sku_id: 17606839865293,
            tags_info: {
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
                "https://goods-vod.kwcdn.com/goods-video/14eae7f79f615e5c4fd62409bbe6af45412e595dgs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/8a2a4383-8ef1-4e15-8b17-7f5f756ed628.jpg",
              url: "https://img.kwcdn.com/product/dae3ade9339ab9792396261dcf1bac50db39046a.temu.000001.jpeg",
            },
            title:
              "Girls 12 & Under Elegant Puffy Tulle Princess Dress with Layered Ruffles & Ribbon Belt - Pastel Pink to Blue Ombre Long Sleeve-Like Straps, Round Neck Formal Evening Gown for Wedding Flower Girl or Pageant, All-Season Wear, Hand Wash Only, Highquality Fabric",
            sales_tip_text_list: ["1.1K+", "sold"],
            p_rec: {
              skc_id: "17596002431605",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1963266875",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRBkxnvxg/4VSBWnSkGNmGeexnGO6D8apPf2SP8m7FqDVaPHpPK+df9iTNmhHaJh2GEQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "1621393606931791910",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1963266875",
              g: "601102871548601",
              scene_id: "3",
              show_price: "2346",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "111",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "8908998578133031588",
              ts: "1763271940578",
            },
            mall_id: 5143392647375,
            sales_num: "1.1K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601102871548601&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8a2a4383-8ef1-4e15-8b17-7f5f756ed628.jpg&spec_id=32224&spec_gallery_id=331982&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM0Ng&_oak_gallery_order=1963266875%2C316380458&spec_ids=32224&_oak_mp_inf=ELmlh9my1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D",
            selected_spec_ids: [32224],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601102871548601&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8a2a4383-8ef1-4e15-8b17-7f5f756ed628.jpg&spec_id=32224&spec_gallery_id=331982&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM0Ng&_oak_gallery_order=1963266875%2C316380458&spec_ids=32224&_oak_mp_inf=ELmlh9my1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1963266875,316380458",
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
            show_index: 111,
            price_info: {
              split_price_text: ["CA$", "23", ".46", ""],
              currency_str: "CA$",
              reduction_text: ["-70", "%"],
              price: 2346,
              market_price_str: "79.45",
              market_price: 7945,
              market_price_type: 1,
              price_schema: "23.46",
              currency: "CAD",
              price_text: ["CA$", "23.46", ""],
              price_str: "CA$23.46",
              market_price_text: ["", "79.45", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1350,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 331982,
              url_id: "1621393606931791910",
              url: "https://img.kwcdn.com/product/fancy/8a2a4383-8ef1-4e15-8b17-7f5f756ed628.jpg",
              height: 1800,
            },
            sales_tip: "1.1K+ sold",
            visible: true,
            goods_id: 601102871548601,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "23", ".46", ""],
                  reduction_text: [],
                  price: 2346,
                  market_price_str: "79.45",
                  market_price: 7945,
                  price_schema: "23.46",
                  currency: "CAD",
                  price_text: ["CA$", "23.46", ""],
                  price_str: "CA$23.46",
                  market_price_text: ["", "79.45", ""],
                },
                image: {
                  width: 1350,
                  id: 331982,
                  url: "https://img.kwcdn.com/product/fancy/8a2a4383-8ef1-4e15-8b17-7f5f756ed628.jpg",
                  height: 1800,
                },
                color: "",
                seo_link_url:
                  "/ca/girls-12-under-elegant-puffy-tulle-princess-dress-with-layered-ruffles-ribbon-belt--to-blue-ombre-long-sleeve-like-straps-round-neck-formal-evening-gown-for-wedding--or-pageant--wear-hand-wash-only--fabric-g-601102871548601.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8a2a4383-8ef1-4e15-8b17-7f5f756ed628.jpg&spec_id=32224&spec_gallery_id=331982&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM0Ng&_oak_mp_inf=ELmlh9my1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D",
                spec_id: 32224,
                color_image:
                  "https://img.kwcdn.com/product/fancy/ea622177-fc39-431b-8ce2-8bde6a86653f.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601102871548601&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8a2a4383-8ef1-4e15-8b17-7f5f756ed628.jpg&spec_id=32224&spec_gallery_id=331982&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM0Ng&_oak_mp_inf=ELmlh9my1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/8a2a4383-8ef1-4e15-8b17-7f5f756ed628.jpg",
                price_str: "23.46",
              },
            ],
            spec_ids: "32224",
            seo_link_url:
              "/ca/girls-12-under-elegant-puffy-tulle-princess-dress-with-layered-ruffles-ribbon-belt--to-blue-ombre-long-sleeve-like-straps-round-neck-formal-evening-gown-for-wedding--or-pageant--wear-hand-wash-only--fabric-g-601102871548601.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8a2a4383-8ef1-4e15-8b17-7f5f756ed628.jpg&spec_id=32224&spec_gallery_id=331982&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjM0Ng&_oak_gallery_order=1963266875%2C316380458&_oak_mp_inf=ELmlh9my1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILezytmoMw%3D%3D&spec_ids=32224",
            queryReleScore: 0.0,
            sales_tip_text: ["1.1K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: true,
              comment_num_tips: "31",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/17191057-4b02-45bd-973b-6766450fb28d.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/17191057-4b02-45bd-973b-6766450fb28d.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt: "  girls summer     leaf print dress",
            current_sku_id: 17597293700483,
            tags_info: {
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
              video_url: "",
            },
            title:
              "One Piece Girls' Summer Black Bottom Golden Banana Leaf Print Dress",
            sales_tip_text_list: ["2.7K+", "sold"],
            p_rec: {
              skc_id: "17593648457656",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "995585407",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRCqJ4Zpha5cYE8eOsts8T2Knp8uQJy0AhtvzI2UjOOS+z/uOWD9NUaEc70+JyYtxW4QiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "1309431424054636755",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "995585407",
              g: "601100817503112",
              scene_id: "3",
              show_price: "1515",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "112",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "7971813751130809968",
              ts: "1763271940578",
            },
            mall_id: 634418217669405,
            sales_num: "2.7K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601100817503112&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F17191057-4b02-45bd-973b-6766450fb28d.jpg&spec_id=3002&spec_gallery_id=105440&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUxNQ&_oak_gallery_order=995585407&spec_ids=3002&_oak_mp_inf=EIinzoWr1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D",
            selected_spec_ids: [3002],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601100817503112&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F17191057-4b02-45bd-973b-6766450fb28d.jpg&spec_id=3002&spec_gallery_id=105440&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUxNQ&_oak_gallery_order=995585407&spec_ids=3002&_oak_mp_inf=EIinzoWr1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "995585407",
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
            show_index: 112,
            price_info: {
              split_price_text: ["CA$", "15", ".15", ""],
              currency_str: "CA$",
              reduction_text: [],
              price: 1515,
              price_schema: "15.15",
              currency: "CAD",
              price_text: ["CA$", "15.15", ""],
              price_str: "CA$15.15",
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 105440,
              url_id: "1309431424054636755",
              url: "https://img.kwcdn.com/product/fancy/17191057-4b02-45bd-973b-6766450fb28d.jpg",
              height: 1785,
            },
            sales_tip: "2.7K+ sold",
            visible: true,
            goods_id: 601100817503112,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "15", ".15", ""],
                  reduction_text: [],
                  price: 1515,
                  price_schema: "15.15",
                  currency: "CAD",
                  price_text: ["CA$", "15.15", ""],
                  price_str: "CA$15.15",
                },
                image: {
                  width: 1340,
                  id: 105440,
                  url: "https://img.kwcdn.com/product/fancy/17191057-4b02-45bd-973b-6766450fb28d.jpg",
                  height: 1785,
                },
                color: "(0,0,0,1)",
                seo_link_url:
                  "/ca/-girls-summer---leaf-print-dress-g-601100817503112.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F17191057-4b02-45bd-973b-6766450fb28d.jpg&spec_id=3002&spec_gallery_id=105440&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUxNQ&_oak_mp_inf=EIinzoWr1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D",
                spec_id: 3002,
                color_image:
                  "https://img.kwcdn.com/product/fancy/23a5ea82-a204-4c6d-8642-ead64f2ab7de.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100817503112&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F17191057-4b02-45bd-973b-6766450fb28d.jpg&spec_id=3002&spec_gallery_id=105440&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUxNQ&_oak_mp_inf=EIinzoWr1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/17191057-4b02-45bd-973b-6766450fb28d.jpg",
                price_str: "15.15",
              },
            ],
            spec_ids: "3002",
            seo_link_url:
              "/ca/-girls-summer---leaf-print-dress-g-601100817503112.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F17191057-4b02-45bd-973b-6766450fb28d.jpg&spec_id=3002&spec_gallery_id=105440&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUxNQ&_oak_gallery_order=995585407&_oak_mp_inf=EIinzoWr1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D&spec_ids=3002",
            queryReleScore: 0.0,
            sales_tip_text: ["2.7K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.7,
              hidden_comment: true,
              comment_num_tips: "45",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/47919667-0fba-4615-a516-207e6eece688.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/47919667-0fba-4615-a516-207e6eece688.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "girls yellow maxi dress with elastic like leaf sleeve belted waist line length dress for beach weddings parties summer outfits machine washable solid color dress for teen girls no stretch fabric dresses for women dresses for women elegant classy maxi dresses for women dress for women girls clothes wedding guest dresses women wedding guest dresses for women dresses for women casual elegant dresses for women elegant dresses for women classy",
            current_sku_id: 17596619156362,
            tags_info: {},
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/goods-video/0e53359d2778b69ff45335f715b1935a56224435gs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/47919667-0fba-4615-a516-207e6eece688.jpg",
              url: "https://img.kwcdn.com/product/2f907bdd6a6dcc60e277848fd8473ed70fbc5388.temu.000001.jpeg",
            },
            title:
              "Girls' Yellow Maxi Dress with Elastic-Like Leaf Sleeve & Belted Waist - -Line -Length Dress for Beach Weddings, Parties, Summer Outfits - Machine Washable Solid Color Dress for Teen Girls (No Stretch Fabric), Dresses For Women, Dresses For Women Elegant Classy, Maxi Dresses For Women, Dress For Women, Girls Clothes, Wedding Guest Dresses Women, Wedding Guest Dresses For Women, Dresses For Women Casual, Elegant Dresses For Women, Elegant Dresses For Women Classy,",
            sales_tip_text_list: ["4.1K+", "sold"],
            p_rec: {
              skc_id: "17593441023795",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "1",
              mid: "69999906",
              final_creative_id: "838214824",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRCqutJ09UwBHDPrI9MxwsebQWEewMQtdT3c5pwcQxKy0kp2N3hWpjVgkTaPwJrXu44QiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "8624401998056685720",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "838214824",
              g: "601100625639468",
              scene_id: "3",
              show_price: "2427",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "113",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "3831770094329476203",
              ts: "1763271940578",
            },
            mall_id: 1234092989587,
            sales_num: "4.1K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601100625639468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F47919667-0fba-4615-a516-207e6eece688.jpg&spec_id=16072&spec_gallery_id=96237&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjQyNw&_oak_gallery_order=838214824%2C1236487771%2C1510560703%2C1271545937&spec_ids=16072&_oak_mp_inf=EKzwj6qq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D",
            selected_spec_ids: [16072],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601100625639468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F47919667-0fba-4615-a516-207e6eece688.jpg&spec_id=16072&spec_gallery_id=96237&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjQyNw&_oak_gallery_order=838214824%2C1236487771%2C1510560703%2C1271545937&spec_ids=16072&_oak_mp_inf=EKzwj6qq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order:
                  "838214824,1236487771,1510560703,1271545937",
              },
            },
            goods_tags: [],
            show_index: 113,
            price_info: {
              split_price_text: ["CA$", "24", ".27", ""],
              currency_str: "CA$",
              reduction_text: [],
              price: 2427,
              price_schema: "24.27",
              currency: "CAD",
              price_text: ["CA$", "24.27", ""],
              price_str: "CA$24.27",
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1350,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 96237,
              url_id: "8624401998056685720",
              url: "https://img.kwcdn.com/product/fancy/47919667-0fba-4615-a516-207e6eece688.jpg",
              height: 1800,
            },
            sales_tip: "4.1K+ sold",
            visible: true,
            goods_id: 601100625639468,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "24", ".27", ""],
                  reduction_text: [],
                  price: 2427,
                  price_schema: "24.27",
                  currency: "CAD",
                  price_text: ["CA$", "24.27", ""],
                  price_str: "CA$24.27",
                },
                image: {
                  width: 1350,
                  id: 96237,
                  url: "https://img.kwcdn.com/product/fancy/47919667-0fba-4615-a516-207e6eece688.jpg",
                  height: 1800,
                },
                color: "(255,255,0,1)",
                seo_link_url:
                  "/ca/girls-yellow-maxi-dress-with-elastic-like-leaf-sleeve-belted-waist-line-length-dress-for-beach-weddings-parties-summer-outfits-machine-washable-solid-color-dress-for-teen-girls-no-stretch-fabric-dresses-for-women-dresses-for-women-elegant-classy-maxi-dresses-for-women-dress-for-women-girls-clothes-wedding-guest-dresses-women-wedding-guest-dresses-for-women-dresses-for-women-casual-elegant-dresses-for-women-elegant-dresses-for-women-classy-g-601100625639468.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F47919667-0fba-4615-a516-207e6eece688.jpg&spec_id=16072&spec_gallery_id=96237&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjQyNw&_oak_mp_inf=EKzwj6qq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D",
                spec_id: 16072,
                color_image:
                  "https://img.kwcdn.com/product/fancy/1e21c242-2991-434b-ab59-8ed15d48f397.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100625639468&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F47919667-0fba-4615-a516-207e6eece688.jpg&spec_id=16072&spec_gallery_id=96237&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjQyNw&_oak_mp_inf=EKzwj6qq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/47919667-0fba-4615-a516-207e6eece688.jpg",
                price_str: "24.27",
              },
            ],
            spec_ids: "16072",
            seo_link_url:
              "/ca/girls-yellow-maxi-dress-with-elastic-like-leaf-sleeve-belted-waist-line-length-dress-for-beach-weddings-parties-summer-outfits-machine-washable-solid-color-dress-for-teen-girls-no-stretch-fabric-dresses-for-women-dresses-for-women-elegant-classy-maxi-dresses-for-women-dress-for-women-girls-clothes-wedding-guest-dresses-women-wedding-guest-dresses-for-women-dresses-for-women-casual-elegant-dresses-for-women-elegant-dresses-for-women-classy-g-601100625639468.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F47919667-0fba-4615-a516-207e6eece688.jpg&spec_id=16072&spec_gallery_id=96237&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjQyNw&_oak_gallery_order=838214824%2C1236487771%2C1510560703%2C1271545937&_oak_mp_inf=EKzwj6qq1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D&spec_ids=16072",
            queryReleScore: 0.0,
            sales_tip_text: ["4.1K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: false,
              comment_num_tips: "183",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/open/cd74dac7f3b540c3ac0028bb01baccf4-goods.jpeg",
            thumb_url:
              "https://img.kwcdn.com/product/open/cd74dac7f3b540c3ac0028bb01baccf4-goods.jpeg",
            ware_house_type: 1,
            benefit_text: {
              text: "-28%",
            },
            item_type: 0,
            page_alt:
              "Polka A-Line Dress with Ruffle Sleeves (or Bow Detail) - Round Neck Short Summer Dress, Machine Washable Party Wedding Outfit for  , Easter & Special Occasions - Cute Casual Dress for   wear (if  ",
            current_sku_id: 17618197933930,
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
              mall_tag: [
                {
                  color: "#000000",
                  ext_map: {
                    brand_info:
                      '{"brand_name":"MONYPLAY","brand_authorized_type":2}',
                    brand_tag_text_style: "1",
                  },
                  bg_url:
                    "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                  marketing_tag_type: 2700,
                  width: 39,
                  tag_id: 91007,
                  text: "Brand: MONYPLAY",
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
              "' Polka A-Line Dress with Ruffle Sleeves (or Bow Detail) - Round Neck Short Summer Dress, Machine Washable Party Wedding Outfit for Playdates, Easter & Special Occasions - Cute Casual Dress for all-Season wear (if possible",
            sales_tip_text_list: [],
            display_end_time_percent: 54,
            sold_quantity_percent: 0,
            p_rec: {
              skc_id: "17598676734953",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "19185660",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRCLJt1H0bNynryuRf/P2UVOFPXUSpaVGW6X5t5BQrPvHYJGuhRj1/p3gIsmfmqNc5YQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "7235098863842376589",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "19185660",
              g: "601105155172173",
              scene_id: "3",
              show_price: "2280",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "114",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "7290688393657749610",
              ts: "1763271940578",
            },
            activity_type: 13,
            mall_id: 634418219249145,
            sales_num: "0",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601105155172173&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fcd74dac7f3b540c3ac0028bb01baccf4-goods.jpeg&spec_id=2001&spec_gallery_id=548651&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI4MA&_oak_gallery_order=19185660%2C318550565%2C1683312916%2C1391832055%2C1121489281&spec_ids=2001&_oak_mp_inf=EM3O%2FJm71ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D",
            selected_spec_ids: [2001],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601105155172173&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fcd74dac7f3b540c3ac0028bb01baccf4-goods.jpeg&spec_id=2001&spec_gallery_id=548651&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI4MA&_oak_gallery_order=19185660%2C318550565%2C1683312916%2C1391832055%2C1121489281&spec_ids=2001&_oak_mp_inf=EM3O%2FJm71ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112734716302206797",
              sku_extra_param: {
                _oak_gallery_order:
                  "19185660,318550565,1683312916,1391832055,1121489281",
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
            show_index: 114,
            price_info: {
              reduction_text: ["-28", "%"],
              market_price_type: 2,
              price_text: ["CA$", "22.80", ""],
              price_str: "CA$22.80",
              price_color: "#FB7701",
              split_price_text: ["CA$", "22", ".80", ""],
              currency_str: "CA$",
              price: 2280,
              market_price_str: "31.83",
              market_price: 3183,
              price_schema: "22.80",
              currency: "CAD",
              reduction: 280,
              market_price_text: ["", "31.83", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1500,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 548651,
              url_id: "7235098863842376589",
              url: "https://img.kwcdn.com/product/open/cd74dac7f3b540c3ac0028bb01baccf4-goods.jpeg",
              height: 2000,
            },
            sales_tip: "",
            visible: true,
            goods_id: 601105155172173,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "22", ".80", ""],
                  reduction_text: ["-28", "%"],
                  price: 2280,
                  market_price_str: "31.83",
                  market_price: 3183,
                  price_schema: "22.80",
                  currency: "CAD",
                  price_text: ["CA$", "22.80", ""],
                  price_str: "CA$22.80",
                  price_color: "#FB7701",
                  reduction: 280,
                  market_price_text: ["", "31.83", ""],
                },
                image: {
                  width: 1500,
                  id: 548651,
                  url: "https://img.kwcdn.com/product/open/cd74dac7f3b540c3ac0028bb01baccf4-goods.jpeg",
                  height: 2000,
                },
                color: "(255,255,255,1)",
                seo_link_url:
                  "/ca/polka-a-line-dress-with-ruffle-sleeves-or-bow-detail-round-neck-short-summer-dress-machine-washable-party-wedding-outfit-for--easter-special-occasions-cute-casual-dress-for--wear-if--g-601105155172173.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fcd74dac7f3b540c3ac0028bb01baccf4-goods.jpeg&spec_id=2001&spec_gallery_id=548651&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI4MA&_oak_mp_inf=EM3O%2FJm71ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D",
                spec_id: 2001,
                color_image: "",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601105155172173&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fcd74dac7f3b540c3ac0028bb01baccf4-goods.jpeg&spec_id=2001&spec_gallery_id=548651&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI4MA&_oak_mp_inf=EM3O%2FJm71ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/open/cd74dac7f3b540c3ac0028bb01baccf4-goods.jpeg",
                price_str: "26.40",
              },
            ],
            spec_ids: "2001",
            display_end_time: 1764392399,
            seo_link_url:
              "/ca/polka-a-line-dress-with-ruffle-sleeves-or-bow-detail-round-neck-short-summer-dress-machine-washable-party-wedding-outfit-for--easter-special-occasions-cute-casual-dress-for--wear-if--g-601105155172173.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Fcd74dac7f3b540c3ac0028bb01baccf4-goods.jpeg&spec_id=2001&spec_gallery_id=548651&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI4MA&_oak_gallery_order=19185660%2C318550565%2C1683312916%2C1391832055%2C1121489281&_oak_mp_inf=EM3O%2FJm71ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D&spec_ids=2001",
            queryReleScore: 0.0,
            sales_tip_text: [],
            opt_type: 3,
            comment: {},
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/ec327476-c574-4368-a6a3-29ecf9deaa62.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/ec327476-c574-4368-a6a3-29ecf9deaa62.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "girls solid color knitted round neck bubble sleeve dress with a split   featuring an adorable three dimensional bow comfortable and stylish for spring summer   perfect as a creative gift that girls  ",
            current_sku_id: 17601740200223,
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
              "Girls' solid color knitted round-neck bubble sleeve dress with a split hem design, featuring an adorable three-dimensional bow. Comfortable and stylish for spring/summer outings, perfect as a creative gift that girls will love",
            sales_tip_text_list: ["994", "sold"],
            display_end_time_percent: 15,
            sold_quantity_percent: 2,
            p_rec: {
              skc_id: "17594806713124",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1448388656",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRD32U5MyOWVsj58aH5VTZ0S3R1IauXPzonBPjPcSJh+605PekpjQrodmuouegGUmuMQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "7591761258187277617",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1448388656",
              g: "601101837736781",
              scene_id: "3",
              show_price: "1359",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "115",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "3649737356645545734",
              ts: "1763271940578",
            },
            activity_type: 13,
            mall_id: 1267471491554,
            sales_num: "994",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601101837736781&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fec327476-c574-4368-a6a3-29ecf9deaa62.jpg&spec_id=3002&spec_gallery_id=215762&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTM1OQ&_oak_gallery_order=1448388656%2C322797275&spec_ids=3002&_oak_mp_inf=EM22jOyu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D",
            selected_spec_ids: [3002],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601101837736781&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fec327476-c574-4368-a6a3-29ecf9deaa62.jpg&spec_id=3002&spec_gallery_id=215762&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTM1OQ&_oak_gallery_order=1448388656%2C322797275&spec_ids=3002&_oak_mp_inf=EM22jOyu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112730475743419213",
              sku_extra_param: {
                _oak_gallery_order: "1448388656,322797275",
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
            show_index: 115,
            price_info: {
              split_price_text: ["CA$", "13", ".59", ""],
              currency_str: "CA$",
              reduction_text: [],
              price: 1359,
              price_schema: "13.59",
              currency: "CAD",
              price_text: ["CA$", "13.59", ""],
              price_str: "CA$13.59",
              price_color: "#FB7701",
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1536,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 215762,
              url_id: "7591761258187277617",
              url: "https://img.kwcdn.com/product/fancy/ec327476-c574-4368-a6a3-29ecf9deaa62.jpg",
              height: 2048,
            },
            sales_tip: "994 sold",
            visible: true,
            goods_id: 601101837736781,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "13", ".59", ""],
                  reduction_text: [],
                  price: 1359,
                  price_schema: "13.59",
                  currency: "CAD",
                  price_text: ["CA$", "13.59", ""],
                  price_str: "CA$13.59",
                  price_color: "#FB7701",
                },
                image: {
                  width: 1536,
                  id: 215762,
                  url: "https://img.kwcdn.com/product/fancy/ec327476-c574-4368-a6a3-29ecf9deaa62.jpg",
                  height: 2048,
                },
                color: "(0,0,0,1)",
                seo_link_url:
                  "/ca/girls-solid-color-knitted-round-neck-bubble-sleeve-dress-with-a-split--featuring-an-adorable-three-dimensional-bow-comfortable-and-stylish-for-spring-summer--perfect-as-a-creative-gift-that-girls--g-601101837736781.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fec327476-c574-4368-a6a3-29ecf9deaa62.jpg&spec_id=3002&spec_gallery_id=215762&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTM1OQ&_oak_mp_inf=EM22jOyu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D",
                spec_id: 3002,
                color_image:
                  "https://img.kwcdn.com/product/fancy/8fa0117f-348d-4bd4-a0e4-6cc24fb07e87.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101837736781&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fec327476-c574-4368-a6a3-29ecf9deaa62.jpg&spec_id=3002&spec_gallery_id=215762&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTM1OQ&_oak_mp_inf=EM22jOyu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/ec327476-c574-4368-a6a3-29ecf9deaa62.jpg",
                price_str: "14.05",
              },
            ],
            spec_ids: "3002",
            display_end_time: 1763787599,
            seo_link_url:
              "/ca/girls-solid-color-knitted-round-neck-bubble-sleeve-dress-with-a-split--featuring-an-adorable-three-dimensional-bow-comfortable-and-stylish-for-spring-summer--perfect-as-a-creative-gift-that-girls--g-601101837736781.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fec327476-c574-4368-a6a3-29ecf9deaa62.jpg&spec_id=3002&spec_gallery_id=215762&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTM1OQ&_oak_gallery_order=1448388656%2C322797275&_oak_mp_inf=EM22jOyu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D&spec_ids=3002",
            queryReleScore: 0.0,
            sales_tip_text: ["994", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.7,
              hidden_comment: false,
              comment_num_tips: "59",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/01fd7228-347d-47c3-ac21-79dd8f55e488.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/01fd7228-347d-47c3-ac21-79dd8f55e488.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-29%",
            },
            item_type: 0,
            page_alt:
              "3pcs girls casual floral print and solid color button flutter sleeve dresses   summer daily and outdoor vacation activities gift for kids and girls clothing girls vacation outfit button front dress   dress stretchy",
            current_sku_id: 17601030727095,
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
              "3pcs Girls' Casual Floral Print and Solid Color Button-Flutter Sleeve Dresses/Perfect for Summer Daily and Outdoor Vacation Activities/Gift for Kids and Girls' Clothing/Girls Vacation Outfit/Button Front Dress/Casual Kids Dress/Stretchy",
            sales_tip_text_list: ["2.1K+", "sold"],
            display_end_time_percent: 50,
            sold_quantity_percent: 88,
            p_rec: {
              skc_id: "17594633538181",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "780575834",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRCELDKW/GWHwShZybYzTu0AFd1++xmfnlwPwcRmtrWQDqhhdd+YpD4XCjLs5ee1GwwQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "6949657262420113796",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "780575834",
              g: "601101687164476",
              scene_id: "3",
              show_price: "2770",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "116",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "6549955869543868975",
              ts: "1763271940578",
            },
            activity_type: 13,
            mall_id: 634418214003678,
            sales_num: "2.1K+",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601101687164476&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F01fd7228-347d-47c3-ac21-79dd8f55e488.jpg&spec_id=91367320&spec_gallery_id=224320&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc3MA&_oak_gallery_order=780575834%2C1009684626%2C994000513%2C213525233%2C1221957405&spec_ids=91367320,131718911,123771243,123754947,131727546,131727457&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
            selected_spec_ids: [
              91367320, 131718911, 123771243, 123754947, 131727546, 131727457,
            ],
            extend_fields: {
              sale_fire_flag: true,
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601101687164476&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F01fd7228-347d-47c3-ac21-79dd8f55e488.jpg&spec_id=91367320&spec_gallery_id=224320&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc3MA&_oak_gallery_order=780575834%2C1009684626%2C994000513%2C213525233%2C1221957405&spec_ids=91367320,131718911,123771243,123754947,131727546,131727457&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112712773867966012",
              sku_extra_param: {
                _oak_gallery_order:
                  "780575834,1009684626,994000513,213525233,1221957405",
              },
            },
            goods_tags: [],
            show_index: 116,
            price_info: {
              reduction_text: ["-29", "%"],
              market_price_type: 1,
              price_text: ["CA$", "27.70", ""],
              price_str: "CA$27.70",
              price_color: "#FB7701",
              split_price_text: ["CA$", "27", ".70", ""],
              currency_str: "CA$",
              price: 2770,
              market_price_str: "39.37",
              market_price: 3937,
              price_schema: "27.70",
              currency: "CAD",
              reduction: 290,
              market_price_text: ["", "39.37", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1350,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 224320,
              url_id: "6949657262420113796",
              url: "https://img.kwcdn.com/product/fancy/01fd7228-347d-47c3-ac21-79dd8f55e488.jpg",
              height: 1800,
            },
            sales_tip: "2.1K+ sold",
            visible: true,
            goods_id: 601101687164476,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "27", ".70", ""],
                  reduction_text: ["-29", "%"],
                  price: 2770,
                  market_price_str: "39.37",
                  market_price: 3937,
                  price_schema: "27.70",
                  currency: "CAD",
                  price_text: ["CA$", "27.70", ""],
                  price_str: "CA$27.70",
                  price_color: "#FB7701",
                  reduction: 290,
                  market_price_text: ["", "39.37", ""],
                },
                image: {
                  width: 1350,
                  id: 224320,
                  url: "https://img.kwcdn.com/product/fancy/01fd7228-347d-47c3-ac21-79dd8f55e488.jpg",
                  height: 1800,
                },
                color: "",
                seo_link_url:
                  "/ca/3pcs-girls-casual-floral-print-and-solid-color-button-flutter-sleeve-dresses--summer-daily-and-outdoor-vacation-activities-gift-for-kids-and-girls-clothing-girls-vacation-outfit-button-front-dress--dress-stretchy-g-601101687164476.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F01fd7228-347d-47c3-ac21-79dd8f55e488.jpg&spec_id=91367320&spec_gallery_id=224320&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc3MA&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D",
                spec_id: 91367320,
                color_image:
                  "https://img.kwcdn.com/product/fancy/308c51ba-ef73-4069-9a59-cbafc965f221.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101687164476&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F01fd7228-347d-47c3-ac21-79dd8f55e488.jpg&spec_id=91367320&spec_gallery_id=224320&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc3MA&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILizytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/01fd7228-347d-47c3-ac21-79dd8f55e488.jpg",
                price_str: "30.00",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "27", ".41", ""],
                  reduction_text: ["-30", "%"],
                  price: 2741,
                  market_price_str: "39.39",
                  market_price: 3939,
                  price_schema: "27.41",
                  currency: "CAD",
                  price_text: ["CA$", "27.41", ""],
                  price_str: "CA$27.41",
                  price_color: "#FB7701",
                  reduction: 300,
                  market_price_text: ["", "39.39", ""],
                },
                image: {
                  width: 1350,
                  id: 296303,
                  url: "https://img.kwcdn.com/product/fancy/b841c15d-880a-4aa7-a133-178c888f1bbf.jpg",
                  height: 1800,
                },
                color: "",
                seo_link_url:
                  "/ca/3pcs-girls-casual-floral-print-and-solid-color-button-flutter-sleeve-dresses--summer-daily-and-outdoor-vacation-activities-gift-for-kids-and-girls-clothing-girls-vacation-outfit-button-front-dress--dress-stretchy-g-601101687164476.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fb841c15d-880a-4aa7-a133-178c888f1bbf.jpg&spec_id=131718911&spec_gallery_id=296303&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc0MQ&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                spec_id: 131718911,
                color_image:
                  "https://img.kwcdn.com/product/temu-avi/image-crop/219b5fa5-023a-4964-8253-19a5711cb9fe.jpg",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101687164476&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fb841c15d-880a-4aa7-a133-178c888f1bbf.jpg&spec_id=131718911&spec_gallery_id=296303&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc0MQ&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/b841c15d-880a-4aa7-a133-178c888f1bbf.jpg",
                price_str: "29.72",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "27", ".52", ""],
                  reduction_text: ["-30", "%"],
                  price: 2752,
                  market_price_str: "39.39",
                  market_price: 3939,
                  price_schema: "27.52",
                  currency: "CAD",
                  price_text: ["CA$", "27.52", ""],
                  price_str: "CA$27.52",
                  price_color: "#FB7701",
                  reduction: 300,
                  market_price_text: ["", "39.39", ""],
                },
                image: {
                  width: 1350,
                  id: 296267,
                  url: "https://img.kwcdn.com/product/fancy/750d2117-4f1f-4411-8289-a8922675b0c0.jpg",
                  height: 1800,
                },
                color: "",
                seo_link_url:
                  "/ca/3pcs-girls-casual-floral-print-and-solid-color-button-flutter-sleeve-dresses--summer-daily-and-outdoor-vacation-activities-gift-for-kids-and-girls-clothing-girls-vacation-outfit-button-front-dress--dress-stretchy-g-601101687164476.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F750d2117-4f1f-4411-8289-a8922675b0c0.jpg&spec_id=123771243&spec_gallery_id=296267&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc1Mg&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                spec_id: 123771243,
                color_image:
                  "https://img.kwcdn.com/product/temu-avi/image-crop/a61159b3-efd9-4472-89cc-49d33547922c.jpg",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101687164476&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F750d2117-4f1f-4411-8289-a8922675b0c0.jpg&spec_id=123771243&spec_gallery_id=296267&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc1Mg&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/750d2117-4f1f-4411-8289-a8922675b0c0.jpg",
                price_str: "29.82",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "27", ".70", ""],
                  reduction_text: ["-29", "%"],
                  price: 2770,
                  market_price_str: "39.39",
                  market_price: 3939,
                  price_schema: "27.70",
                  currency: "CAD",
                  price_text: ["CA$", "27.70", ""],
                  price_str: "CA$27.70",
                  price_color: "#FB7701",
                  reduction: 290,
                  market_price_text: ["", "39.39", ""],
                },
                image: {
                  width: 1350,
                  id: 296276,
                  url: "https://img.kwcdn.com/product/fancy/083d21f6-6642-4892-8cd1-8fb359d635be.jpg",
                  height: 1800,
                },
                color: "",
                seo_link_url:
                  "/ca/3pcs-girls-casual-floral-print-and-solid-color-button-flutter-sleeve-dresses--summer-daily-and-outdoor-vacation-activities-gift-for-kids-and-girls-clothing-girls-vacation-outfit-button-front-dress--dress-stretchy-g-601101687164476.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F083d21f6-6642-4892-8cd1-8fb359d635be.jpg&spec_id=123754947&spec_gallery_id=296276&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc3MA&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                spec_id: 123754947,
                color_image:
                  "https://img.kwcdn.com/product/temu-avi/image-crop/5558d181-e7b3-4210-9be2-d424e4047708.jpg",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101687164476&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F083d21f6-6642-4892-8cd1-8fb359d635be.jpg&spec_id=123754947&spec_gallery_id=296276&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc3MA&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/083d21f6-6642-4892-8cd1-8fb359d635be.jpg",
                price_str: "30.00",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "27", ".76", ""],
                  reduction_text: ["-29", "%"],
                  price: 2776,
                  market_price_str: "39.39",
                  market_price: 3939,
                  price_schema: "27.76",
                  currency: "CAD",
                  price_text: ["CA$", "27.76", ""],
                  price_str: "CA$27.76",
                  price_color: "#FB7701",
                  reduction: 290,
                  market_price_text: ["", "39.39", ""],
                },
                image: {
                  width: 1350,
                  id: 296294,
                  url: "https://img.kwcdn.com/product/fancy/7154312f-b301-4d5c-85b5-37ee619292b9.jpg",
                  height: 1800,
                },
                color: "",
                seo_link_url:
                  "/ca/3pcs-girls-casual-floral-print-and-solid-color-button-flutter-sleeve-dresses--summer-daily-and-outdoor-vacation-activities-gift-for-kids-and-girls-clothing-girls-vacation-outfit-button-front-dress--dress-stretchy-g-601101687164476.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7154312f-b301-4d5c-85b5-37ee619292b9.jpg&spec_id=131727546&spec_gallery_id=296294&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc3Ng&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                spec_id: 131727546,
                color_image:
                  "https://img.kwcdn.com/product/temu-avi/image-crop/7fed35bc-6b25-4f54-a676-158cd796aeaa.jpg",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101687164476&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7154312f-b301-4d5c-85b5-37ee619292b9.jpg&spec_id=131727546&spec_gallery_id=296294&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc3Ng&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/7154312f-b301-4d5c-85b5-37ee619292b9.jpg",
                price_str: "30.06",
              },
              {
                price_info: {
                  split_price_text: ["CA$", "27", ".83", ""],
                  reduction_text: [],
                  price: 2783,
                  price_schema: "27.83",
                  currency: "CAD",
                  price_text: ["CA$", "27.83", ""],
                  price_str: "CA$27.83",
                  price_color: "#FB7701",
                },
                image: {
                  width: 1350,
                  id: 296285,
                  url: "https://img.kwcdn.com/product/fancy/0780e290-bfac-4d6a-8da8-fd17f56ad037.jpg",
                  height: 1800,
                },
                color: "",
                seo_link_url:
                  "/ca/3pcs-girls-casual-floral-print-and-solid-color-button-flutter-sleeve-dresses--summer-daily-and-outdoor-vacation-activities-gift-for-kids-and-girls-clothing-girls-vacation-outfit-button-front-dress--dress-stretchy-g-601101687164476.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F0780e290-bfac-4d6a-8da8-fd17f56ad037.jpg&spec_id=131727457&spec_gallery_id=296285&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc4Mw&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                spec_id: 131727457,
                color_image:
                  "https://img.kwcdn.com/product/temu-avi/image-crop/0543606b-5268-4824-b7d3-b2b1d2326d58.jpg",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601101687164476&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F0780e290-bfac-4d6a-8da8-fd17f56ad037.jpg&spec_id=131727457&spec_gallery_id=296285&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc4Mw&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/0780e290-bfac-4d6a-8da8-fd17f56ad037.jpg",
                price_str: "30.13",
              },
            ],
            spec_ids:
              "91367320,131718911,123771243,123754947,131727546,131727457",
            display_end_time: 1764565199,
            seo_link_url:
              "/ca/3pcs-girls-casual-floral-print-and-solid-color-button-flutter-sleeve-dresses--summer-daily-and-outdoor-vacation-activities-gift-for-kids-and-girls-clothing-girls-vacation-outfit-button-front-dress--dress-stretchy-g-601101687164476.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F01fd7228-347d-47c3-ac21-79dd8f55e488.jpg&spec_id=91367320&spec_gallery_id=224320&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc3MA&_oak_gallery_order=780575834%2C1009684626%2C994000513%2C213525233%2C1221957405&_oak_mp_inf=ELycpqSu1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D&spec_ids=91367320,131718911,123771243,123754947,131727546,131727457",
            queryReleScore: 0.0,
            sales_tip_text: ["2.1K+", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.9,
              hidden_comment: false,
              comment_num_tips: "177",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/6d5a2a2e-7c78-4c74-bc9a-61ea7db79431.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/6d5a2a2e-7c78-4c74-bc9a-61ea7db79431.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-18%",
            },
            item_type: 0,
            page_alt:
              "girls elegant long sleeve tulle dress with bow belt beige   collar flared skirt non stretch fabric for weddings parties   thanksgiving   casual to formal wear dresses for girls party attire sophisticated style   design formal attire delicate material formal wear   outdoor for teenager school event attire for halloween for thanksgiving machine washable nonstretch fabric belted waist intricate handcraft",
            current_sku_id: 17604021626397,
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
                "https://goods-vod.kwcdn.com/goods-video/e06637ccf5915961bfbcdf9e74bf839e4947be49gs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/6d5a2a2e-7c78-4c74-bc9a-61ea7db79431.jpg",
              url: "https://img.kwcdn.com/product/3db63009106a18b2d94941a2e1075010e39fdaa5.temu.000001.jpeg",
            },
            title:
              "Girls' Elegant Long Sleeve Tulle Dress with Bow Belt - Beige Ruffled Collar & Flared Skirt, Non-Stretch Fabric for Weddings, Parties, School Events, Thanksgiving - Spring/Fall Casual to Formal Wear, Dresses for Girls, Party Attire, Sophisticated Style, Structured Design, Formal Attire, Delicate Material, Formal Wear, Perfect for Outdoor, for Teenager, School Event Attire, for Halloween, for Thanksgiving - Machine Washable, Nonstretch Fabric, Belted Waist, Intricate Handcraft",
            sales_tip_text_list: ["325", "sold"],
            display_end_time_percent: 50,
            sold_quantity_percent: 61,
            p_rec: {
              skc_id: "17595344418406",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "2050792435",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRCTFgNtSeR/8dsEIo4HREPLyErSx+4zOpCNvhz9F89x4wCP5szCDQRTrjy8kqQi3Y0QiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "729128116902832494",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "2050792435",
              g: "601102300014824",
              scene_id: "3",
              show_price: "1491",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "117",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "2409947857252872555",
              ts: "1763271940578",
            },
            activity_type: 100,
            mall_id: 634418212106553,
            sales_num: "325",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601102300014824&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F6d5a2a2e-7c78-4c74-bc9a-61ea7db79431.jpg&spec_id=15067&spec_gallery_id=354977&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ5MQ&_oak_gallery_order=2050792435&spec_ids=15067&_oak_mp_inf=EOjRw8iw1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
            selected_spec_ids: [15067],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601102300014824&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F6d5a2a2e-7c78-4c74-bc9a-61ea7db79431.jpg&spec_id=15067&spec_gallery_id=354977&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ5MQ&_oak_gallery_order=2050792435&spec_ids=15067&_oak_mp_inf=EOjRw8iw1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112699470357784808",
              sku_extra_param: {
                _oak_gallery_order: "2050792435",
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
            show_index: 117,
            price_info: {
              reduction_text: ["-18", "%"],
              market_price_type: 1,
              price_text: ["CA$", "14.91", ""],
              price_str: "CA$14.91",
              split_price_text: ["CA$", "14", ".91", ""],
              currency_str: "CA$",
              price: 1491,
              market_price_str: "18.38",
              market_price: 1838,
              price_schema: "14.91",
              currency: "CAD",
              reduction: 180,
              market_price_text: ["", "18.38", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 354977,
              url_id: "729128116902832494",
              url: "https://img.kwcdn.com/product/fancy/6d5a2a2e-7c78-4c74-bc9a-61ea7db79431.jpg",
              height: 1785,
            },
            sales_tip: "325 sold",
            visible: true,
            goods_id: 601102300014824,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "14", ".91", ""],
                  reduction_text: ["-18", "%"],
                  price: 1491,
                  market_price_str: "18.38",
                  market_price: 1838,
                  price_schema: "14.91",
                  currency: "CAD",
                  price_text: ["CA$", "14.91", ""],
                  price_str: "CA$14.91",
                  reduction: 180,
                  market_price_text: ["", "18.38", ""],
                },
                image: {
                  width: 1340,
                  id: 354977,
                  url: "https://img.kwcdn.com/product/fancy/6d5a2a2e-7c78-4c74-bc9a-61ea7db79431.jpg",
                  height: 1785,
                },
                color: "(195,176,145,1)",
                seo_link_url:
                  "/ca/girls-elegant-long-sleeve-tulle-dress-with-bow-belt-beige--collar-flared-skirt-non-stretch-fabric-for-weddings-parties--thanksgiving--casual-to-formal-wear-dresses-for-girls-party-attire-sophisticated-style--design-formal-attire-delicate-material-formal-wear--outdoor-for-teenager-school-event-attire-for-halloween-for-thanksgiving-machine-washable-nonstretch-fabric-belted-waist-intricate-handcraft-g-601102300014824.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F6d5a2a2e-7c78-4c74-bc9a-61ea7db79431.jpg&spec_id=15067&spec_gallery_id=354977&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ5MQ&_oak_mp_inf=EOjRw8iw1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                spec_id: 15067,
                color_image:
                  "https://img.kwcdn.com/product/fancy/edb2aeec-384a-42d0-b216-99f8cb0e2944.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601102300014824&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F6d5a2a2e-7c78-4c74-bc9a-61ea7db79431.jpg&spec_id=15067&spec_gallery_id=354977&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ5MQ&_oak_mp_inf=EOjRw8iw1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/6d5a2a2e-7c78-4c74-bc9a-61ea7db79431.jpg",
                price_str: "14.92",
              },
            ],
            spec_ids: "15067",
            display_end_time: 1764565199,
            seo_link_url:
              "/ca/girls-elegant-long-sleeve-tulle-dress-with-bow-belt-beige--collar-flared-skirt-non-stretch-fabric-for-weddings-parties--thanksgiving--casual-to-formal-wear-dresses-for-girls-party-attire-sophisticated-style--design-formal-attire-delicate-material-formal-wear--outdoor-for-teenager-school-event-attire-for-halloween-for-thanksgiving-machine-washable-nonstretch-fabric-belted-waist-intricate-handcraft-g-601102300014824.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F6d5a2a2e-7c78-4c74-bc9a-61ea7db79431.jpg&spec_id=15067&spec_gallery_id=354977&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ5MQ&_oak_gallery_order=2050792435&_oak_mp_inf=EOjRw8iw1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D&spec_ids=15067",
            queryReleScore: 0.0,
            sales_tip_text: ["325", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 4.8,
              hidden_comment: true,
              comment_num_tips: "23",
            },
            adult_goods: false,
          },
          {
            long_thumb_url:
              "https://img.kwcdn.com/product/fancy/08f03f4a-0aac-4272-8482-b4be7c69b341.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/08f03f4a-0aac-4272-8482-b4be7c69b341.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "",
            },
            item_type: 0,
            page_alt:
              "girls elegant and gorgeous pink round neck hanging flower   lace large bow summer new dress suitable for daily wear holidays parties vacations weddings youngsterss party banquets birthday gifts travel campus and other occasions",
            current_sku_id: 17595327541795,
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
              "Girls' Elegant and Gorgeous Pink Round Neck Hanging Flower Print Net Lace Large Bow Summer New Dress Suitable for Daily Wear, Holidays, Parties, Vacations, Weddings, Youngsters's Party Banquets, Birthday Gifts, Travel, Campus and Other Occasions",
            sales_tip_text_list: ["527", "sold"],
            display_end_time_percent: 54,
            sold_quantity_percent: 66,
            p_rec: {
              skc_id: "17593035568260",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "0",
              mid: "69999906",
              final_creative_id: "1648028302",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRAFujgdRPyE7qo3LmdJeYyR5QS8c2bKKC9vlVKHzAWomRK55cxMJDIiOMCJcYARxisQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "7607176620325867125",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1648028302",
              g: "601100242209843",
              scene_id: "3",
              show_price: "1455",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "118",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "1579292099257716906",
              ts: "1763271940578",
            },
            activity_type: 13,
            mall_id: 634418221262934,
            sales_num: "527",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601100242209843&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F08f03f4a-0aac-4272-8482-b4be7c69b341.jpg&spec_id=16057&spec_gallery_id=72275&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ1NQ&_oak_gallery_order=1648028302%2C1395284880%2C1173431918&spec_ids=16057&_oak_mp_inf=ELOYpfOo1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
            selected_spec_ids: [16057],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601100242209843&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F08f03f4a-0aac-4272-8482-b4be7c69b341.jpg&spec_id=16057&spec_gallery_id=72275&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ1NQ&_oak_gallery_order=1648028302%2C1395284880%2C1173431918&spec_ids=16057&_oak_mp_inf=ELOYpfOo1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              detail_id: "112649093117660211",
              sku_extra_param: {
                _oak_gallery_order: "1648028302,1395284880,1173431918",
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
            show_index: 118,
            price_info: {
              split_price_text: ["CA$", "14", ".55", ""],
              currency_str: "CA$",
              reduction_text: [],
              price: 1455,
              price_schema: "14.55",
              currency: "CAD",
              price_text: ["CA$", "14.55", ""],
              price_str: "CA$14.55",
              price_color: "#FB7701",
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1340,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 72275,
              url_id: "7607176620325867125",
              url: "https://img.kwcdn.com/product/fancy/08f03f4a-0aac-4272-8482-b4be7c69b341.jpg",
              height: 1785,
            },
            sales_tip: "527 sold",
            visible: true,
            goods_id: 601100242209843,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "14", ".55", ""],
                  reduction_text: [],
                  price: 1455,
                  price_schema: "14.55",
                  currency: "CAD",
                  price_text: ["CA$", "14.55", ""],
                  price_str: "CA$14.55",
                  price_color: "#FB7701",
                },
                image: {
                  width: 1340,
                  id: 72275,
                  url: "https://img.kwcdn.com/product/fancy/08f03f4a-0aac-4272-8482-b4be7c69b341.jpg",
                  height: 1785,
                },
                color: "(255,182,193,1)",
                seo_link_url:
                  "/ca/girls-elegant-and-gorgeous-pink-round-neck-hanging-flower--lace-large-bow-summer-new-dress-suitable-for-daily-wear-holidays-parties-vacations-weddings-youngsterss-party-banquets-birthday-gifts-travel-campus-and-other-occasions-g-601100242209843.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F08f03f4a-0aac-4272-8482-b4be7c69b341.jpg&spec_id=16057&spec_gallery_id=72275&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ1NQ&_oak_mp_inf=ELOYpfOo1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                spec_id: 16057,
                color_image:
                  "https://img.kwcdn.com/product/temu-avi/image-crop/55f7b6f2-0b10-4179-9fd0-ed3178878c55.jpg",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601100242209843&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F08f03f4a-0aac-4272-8482-b4be7c69b341.jpg&spec_id=16057&spec_gallery_id=72275&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ1NQ&_oak_mp_inf=ELOYpfOo1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/08f03f4a-0aac-4272-8482-b4be7c69b341.jpg",
                price_str: "15.53",
              },
            ],
            spec_ids: "16057",
            display_end_time: 1764392399,
            seo_link_url:
              "/ca/girls-elegant-and-gorgeous-pink-round-neck-hanging-flower--lace-large-bow-summer-new-dress-suitable-for-daily-wear-holidays-parties-vacations-weddings-youngsterss-party-banquets-birthday-gifts-travel-campus-and-other-occasions-g-601100242209843.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F08f03f4a-0aac-4272-8482-b4be7c69b341.jpg&spec_id=16057&spec_gallery_id=72275&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTQ1NQ&_oak_gallery_order=1648028302%2C1395284880%2C1173431918&_oak_mp_inf=ELOYpfOo1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D&spec_ids=16057",
            queryReleScore: 0.0,
            sales_tip_text: ["527", "sold"],
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
              "https://img.kwcdn.com/product/fancy/bcf4276a-f6e6-4841-b482-70c17937c064.jpg",
            thumb_url:
              "https://img.kwcdn.com/product/fancy/bcf4276a-f6e6-4841-b482-70c17937c064.jpg",
            ware_house_type: 0,
            benefit_text: {
              text: "-29%",
            },
            item_type: 0,
            page_alt:
              "2025 new autumn embroidered mesh dress for girls long sleeve   for spring and autumn knit   machine washable stretch candy   rectangular travel formal large size     dress girls cute",
            current_sku_id: 17608277182823,
            tags_info: {},
            video: {
              icon_url:
                "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
              video_url:
                "https://goods-vod.kwcdn.com/goods-video/8d51aae451fc00b22586a20485df96a035c2adfcgs2CV.f30.mp4",
              image_url:
                "https://img.kwcdn.com/product/fancy/bcf4276a-f6e6-4841-b482-70c17937c064.jpg",
              url: "https://img.kwcdn.com/product/c5fdb5f79428990274be446ea8470730d98e3653.temu.000001.jpeg",
            },
            title:
              "2025 New Autumn Embroidered Mesh Dress for Girls, Long-Sleeve Princess Style for Spring And Autumn, Knit, Dry Clean Machine Washable, Stretch Candy Principle Rectangular Travel Formal( Large Size) Principle, Princess Daisy Dress Girls Cute",
            sales_tip_text_list: ["590", "sold"],
            p_rec: {
              skc_id: "17596333874580",
              list_id: "category_list_36456926c2434396bca3105b83f3d83e",
              item_type: "0",
              ad_goods: "1",
              mid: "69999906",
              final_creative_id: "1564002398",
              sort_by_type: "873027542",
              st_model_point:
                "CoAB+fGedEPpzHdma9TCHugLbdEo29dJGbuCe8hpW06W88xE/s+0QTR8pr5jPijYDlO0SChSjx7/sH4Mpdvz3exMRQrROwO1qn1f9MNp9YjQJRA7LK3MTuh3ngxF1BfYBQNY9DX5Ph2Jutrv2hMyZKaDPFaB1UIdL2+3pv2imF+Tc5wQiwEYdCIkMDVmYzZiNWQtZGJjZi00NzA3LTgwOTktMDViYzYyNDI4NzE3",
              scene: "opt",
              image_url_id: "7255009745599172176",
              show_currency: "CAD",
              no_result: "0",
              offset: "80",
              engine_creative_id: "1564002398",
              g: "601103152985836",
              scene_id: "3",
              show_price: "2023",
              opt_id: "1084",
              ts_req: "0",
              version: "5",
              search_id: "9szt0KNfVaid3zIR_mJXPbH1raMLcnQWk3LCRBC_dpM=",
              gin_fallback: "0",
              opt_type: "0",
              goods_source: "rec",
              idx: "119",
              region: "37",
              bid: "69999705",
              cloud_env: "usm1",
              creative_title_id: "7091332281372682486",
              ts: "1763271940578",
            },
            mall_id: 2812072523880,
            sales_num: "590",
            link_url:
              "goods.html?_bg_fs=1&goods_id=601103152985836&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbcf4276a-f6e6-4841-b482-70c17937c064.jpg&spec_id=174881862&spec_gallery_id=353193&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyMw&_oak_gallery_order=1564002398%2C801834740&spec_ids=174881862&_oak_mp_inf=EOztoN%2Bz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
            selected_spec_ids: [174881862],
            extend_fields: {
              floating_link_url:
                "goods.html?_bg_fs=1&goods_id=601103152985836&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbcf4276a-f6e6-4841-b482-70c17937c064.jpg&spec_id=174881862&spec_gallery_id=353193&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyMw&_oak_gallery_order=1564002398%2C801834740&spec_ids=174881862&_oak_mp_inf=EOztoN%2Bz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D&goods_pop_style=1&floating_when_add_to_cart=1",
              support_tag_carousel: true,
              sku_extra_param: {
                _oak_gallery_order: "1564002398,801834740",
              },
            },
            goods_tags: [],
            show_index: 119,
            price_info: {
              split_price_text: ["CA$", "20", ".23", ""],
              currency_str: "CA$",
              reduction_text: ["-29", "%"],
              price: 2023,
              market_price_str: "28.79",
              market_price: 2879,
              market_price_type: 1,
              price_schema: "20.23",
              currency: "CAD",
              price_text: ["CA$", "20.23", ""],
              price_str: "CA$20.23",
              market_price_text: ["", "28.79", ""],
            },
            image: {
              cut_bottom_percent: 0,
              cut_left_percent: 556,
              width: 1350,
              cut_right_percent: 556,
              cut_top_percent: 0,
              id: 353193,
              url_id: "7255009745599172176",
              url: "https://img.kwcdn.com/product/fancy/bcf4276a-f6e6-4841-b482-70c17937c064.jpg",
              height: 1800,
            },
            sales_tip: "590 sold",
            visible: true,
            goods_id: 601103152985836,
            opt_id: 1085,
            skc_list: [
              {
                price_info: {
                  split_price_text: ["CA$", "20", ".23", ""],
                  reduction_text: [],
                  price: 2023,
                  market_price_str: "28.79",
                  market_price: 2879,
                  price_schema: "20.23",
                  currency: "CAD",
                  price_text: ["CA$", "20.23", ""],
                  price_str: "CA$20.23",
                  market_price_text: ["", "28.79", ""],
                },
                image: {
                  width: 1350,
                  id: 353193,
                  url: "https://img.kwcdn.com/product/fancy/bcf4276a-f6e6-4841-b482-70c17937c064.jpg",
                  height: 1800,
                },
                color: "",
                seo_link_url:
                  "/ca/2025-new-autumn-embroidered-mesh-dress-for-girls-long-sleeve--for-spring-and-autumn-knit--machine-washable-stretch-candy--rectangular-travel-formal-large-size---dress-girls-cute-g-601103152985836.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbcf4276a-f6e6-4841-b482-70c17937c064.jpg&spec_id=174881862&spec_gallery_id=353193&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyMw&_oak_mp_inf=EOztoN%2Bz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                spec_id: 174881862,
                color_image:
                  "https://img.kwcdn.com/product/fancy/00436e09-fcdd-4e45-b63a-363f4b0433de.png",
                link_url:
                  "goods.html?_bg_fs=1&goods_id=601103152985836&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbcf4276a-f6e6-4841-b482-70c17937c064.jpg&spec_id=174881862&spec_gallery_id=353193&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyMw&_oak_mp_inf=EOztoN%2Bz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D",
                gallery_url:
                  "https://img.kwcdn.com/product/fancy/bcf4276a-f6e6-4841-b482-70c17937c064.jpg",
                price_str: "20.23",
              },
            ],
            spec_ids: "174881862",
            seo_link_url:
              "/ca/2025-new-autumn-embroidered-mesh-dress-for-girls-long-sleeve--for-spring-and-autumn-knit--machine-washable-stretch-candy--rectangular-travel-formal-large-size---dress-girls-cute-g-601103152985836.html?&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbcf4276a-f6e6-4841-b482-70c17937c064.jpg&spec_id=174881862&spec_gallery_id=353193&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAyMw&_oak_gallery_order=1564002398%2C801834740&_oak_mp_inf=EOztoN%2Bz1ogBGi5jYXRlZ29yeV9saXN0XzM2NDU2OTI2YzI0MzQzOTZiY2EzMTA1YjgzZjNkODNlILmzytmoMw%3D%3D&spec_ids=174881862",
            queryReleScore: 0.0,
            sales_tip_text: ["590", "sold"],
            opt_type: 3,
            comment: {
              goods_score: 5.0,
              hidden_comment: true,
              comment_num_tips: "5",
            },
            adult_goods: false,
          },
        ],
        share_url: "https://share.temu.com/FlaLcQEijo",
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
     const data ={
    "result": {
        "server_time": 1763997832369,
        "data": {
            "popup_map": {},
            "control_param": {
                "preload_size": 24,
                "page_size": 40
            },
            "total_price": {
                "total_price_text": [
                    "Add ",
                    "0",
                    " item to cart",
                    ": ",
                    "",
                    "$",
                    "0"
                ],
                "price": 0,
                "price_text": [
                    "Add ",
                    "0",
                    " item to cart",
                    ": ",
                    "",
                    "$",
                    "0"
                ]
            },
            "call_opt": 0,
            "pattern": 0,
            "filter_region": {
                "p_search": {
                    "offset": "80",
                    "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                    "item_type": "0",
                    "g": "0",
                    "scene_id": "3",
                    "mid": "69999906",
                    "opt_id": "1538",
                    "ts_req": "0",
                    "version": "5",
                    "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                    "scene": "opt",
                    "gin_fallback": "0",
                    "opt_type": "0",
                    "goods_source": "search",
                    "idx": "-1",
                    "region": "211",
                    "no_result": "0",
                    "bid": "69999705",
                    "cloud_env": "udpm1",
                    "ts": "1763997832369"
                },
                "outer_filter": [
                    {
                        "identifier": "100",
                        "side_name": "Sort by",
                        "filter_list": [
                            {
                                "filter": "0:1",
                                "name": "Relevance"
                            },
                            {
                                "filter": "1:1",
                                "name": "Top sales"
                            },
                            {
                                "filter": "3:1",
                                "name": "Most recent"
                            },
                            {
                                "filter": "2:0",
                                "name": "Price low to high"
                            },
                            {
                                "filter": "2:1",
                                "name": "Price high to low"
                            }
                        ],
                        "view_more": 7,
                        "name": "Sort by"
                    }
                ],
                "rank_colum_filter": [
                    {
                        "name": "Relevance",
                        "p_search": {
                            "offset": "80",
                            "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                            "item_type": "0",
                            "g": "0",
                            "scene_id": "3",
                            "mid": "69999906",
                            "opt_id": "1538",
                            "ts_req": "0",
                            "version": "5",
                            "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                            "scene": "opt",
                            "gin_fallback": "0",
                            "opt_type": "0",
                            "goods_source": "search",
                            "idx": "0",
                            "region": "211",
                            "no_result": "0",
                            "bid": "69999705",
                            "cloud_env": "udpm1",
                            "ts": "1763997832369"
                        },
                        "id": 0,
                        "sort": [
                            1
                        ]
                    },
                    {
                        "name": "Top sales",
                        "p_search": {
                            "offset": "80",
                            "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                            "item_type": "0",
                            "g": "0",
                            "scene_id": "3",
                            "mid": "69999906",
                            "opt_id": "1538",
                            "ts_req": "0",
                            "version": "5",
                            "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                            "scene": "opt",
                            "gin_fallback": "0",
                            "opt_type": "0",
                            "goods_source": "search",
                            "idx": "1",
                            "region": "211",
                            "no_result": "0",
                            "bid": "69999705",
                            "cloud_env": "udpm1",
                            "ts": "1763997832369"
                        },
                        "id": 1,
                        "sort": [
                            1
                        ]
                    },
                    {
                        "name": "Most recent",
                        "p_search": {
                            "offset": "80",
                            "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                            "item_type": "0",
                            "g": "0",
                            "scene_id": "3",
                            "mid": "69999906",
                            "opt_id": "1538",
                            "ts_req": "0",
                            "version": "5",
                            "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                            "scene": "opt",
                            "gin_fallback": "0",
                            "opt_type": "0",
                            "goods_source": "search",
                            "idx": "2",
                            "region": "211",
                            "no_result": "0",
                            "bid": "69999705",
                            "cloud_env": "udpm1",
                            "ts": "1763997832369"
                        },
                        "id": 3,
                        "sort": [
                            1
                        ]
                    },
                    {
                        "name": "Price low to high",
                        "p_search": {
                            "offset": "80",
                            "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                            "item_type": "0",
                            "g": "0",
                            "scene_id": "3",
                            "mid": "69999906",
                            "opt_id": "1538",
                            "ts_req": "0",
                            "version": "5",
                            "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                            "scene": "opt",
                            "gin_fallback": "0",
                            "opt_type": "0",
                            "goods_source": "search",
                            "idx": "3",
                            "region": "211",
                            "no_result": "0",
                            "bid": "69999705",
                            "cloud_env": "udpm1",
                            "ts": "1763997832369"
                        },
                        "id": 2,
                        "sort": [
                            0
                        ]
                    },
                    {
                        "name": "Price high to low",
                        "p_search": {
                            "offset": "80",
                            "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                            "item_type": "0",
                            "g": "0",
                            "scene_id": "3",
                            "mid": "69999906",
                            "opt_id": "1538",
                            "ts_req": "0",
                            "version": "5",
                            "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                            "scene": "opt",
                            "gin_fallback": "0",
                            "opt_type": "0",
                            "goods_source": "search",
                            "idx": "4",
                            "region": "211",
                            "no_result": "0",
                            "bid": "69999705",
                            "cloud_env": "udpm1",
                            "ts": "1763997832369"
                        },
                        "id": 2,
                        "sort": [
                            1
                        ]
                    }
                ]
            },
            "quick_look": {
                "icon_url": "https://aimg.kwcdn.com/upload_aimg/transaction/6dbc3f74-d7eb-463e-8397-cc1101ecba8e.png.slim.png",
                "act_border_color": "#222222",
                "back_rgb": "rgba(255,255,255,0.80)",
                "border_color": "#CDCDCD",
                "text": {
                    "color": "#000000",
                    "text": "Quick look"
                },
                "open": true
            },
            "title": "Men's Loafers & Slip-Ons",
            "default_row_cnt": 0,
            "opt_list": [
                {
                    "tab_type": 0,
                    "image_url": "https://img.kwcdn.com/product/1ea26cda5e/30dca07a-2d5f-4c17-9f3d-82748dbac11e_213x213.png",
                    "p_rec": {
                        "offset": "80",
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "g": "0",
                        "scene_id": "3",
                        "mid": "69999906",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "scene": "opt",
                        "gin_fallback": "0",
                        "opt_hash_id": "2140107608",
                        "opt_type": "2",
                        "goods_source": "rec",
                        "idx": "-1",
                        "region": "211",
                        "no_result": "0",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "ts": "1763997832377"
                    },
                    "disable_dup": false,
                    "pattern": 0,
                    "opt_type": 2,
                    "opt_name": "Men's Loafers & Slip-Ons",
                    "priority": 0,
                    "opt_id": 1538,
                    "is_featured": false
                }
            ],
            "goods_list": [
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/ec8f6121-98e8-4e28-95a1-8132f0135426.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-51%"
                    },
                    "item_type": 0,
                    "page_alt": "mens winter snow boots with thick warm rubber sole heavy duty round toe casual outdoor shoes for   and cold   terrain traction compatible with     boots durable synthetic",
                    "current_sku_id": 17605875684398,
                    "tags_info": {
                        "activity_icon_tags": [
                            {
                                "icon_img": "https://aimg.kwcdn.com/upload_aimg_b/search/0f7bbe9c-599b-4380-8c8a-7ea42ba4db03.png",
                                "width": 24,
                                "height": 24
                            }
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "6 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 6 left",
                                "tag_series": 2
                            },
                            {
                                "color": "#555555",
                                "ext_map": {
                                    "lowest_tag_up_flag": "4",
                                    "lowest_price_before_title": "60d lowest"
                                },
                                "marketing_tag_type": 1000,
                                "tag_id": 91048,
                                "text": "Lowest price in 60 days",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/4f4569eded9fb61577e961f46610868ee92efe0cgs2CV.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/fancy/ec8f6121-98e8-4e28-95a1-8132f0135426.jpg",
                        "url": "https://img.kwcdn.com/product/ccd665787df1b65de02511ddee0c077aa707a8b1.temu.000001.jpeg"
                    },
                    "title": "Men's Winter Snow Boots with Thick Warm & Rubber Sole - Heavy-Duty Round Toe Casual Outdoor Shoes for Ice, Snow, and Cold Weather - All-Terrain Traction (Compatible with Smartwool/Sepia Boots) - Durable Synthetic",
                    "sales_tip_text_list": [
                        "353",
                        "sold"
                    ],
                    "display_end_time_percent": 76,
                    "sold_quantity_percent": 0,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "850086279",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6F/AGS4kcFjoevWjrKbuu682M7zpQMaAajn0ZeKtaFjwRBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "1490238731427592144",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "850086279",
                        "g": "601102681056374",
                        "scene_id": "3",
                        "show_price": "3117",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "80",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "9200978660802753187",
                        "ts": "1763997832366"
                    },
                    "activity_type": 2,
                    "mall_id": 634418210366465,
                    "sales_num": "353",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601102681056374&_oak_name_id=9200978660802753187&_oak_mp_inf=EPbInP6x1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIip27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fec8f6121-98e8-4e28-95a1-8132f0135426.jpg&spec_gallery_id=207189726818&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzExNw&_oak_gallery_order=850086279%2C1627537058%2C139927021%2C1794726696%2C2138165182",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601102681056374&_oak_name_id=9200978660802753187&_oak_mp_inf=EPbInP6x1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIip27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fec8f6121-98e8-4e28-95a1-8132f0135426.jpg&spec_gallery_id=207189726818&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzExNw&_oak_gallery_order=850086279%2C1627537058%2C139927021%2C1794726696%2C2138165182&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112754358504858742",
                        "sku_extra_param": {
                            "_oak_gallery_order": "850086279,1627537058,139927021,1794726696,2138165182",
                            "_oak_name_id": "9200978660802753187"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "6 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 6 left",
                            "tag_series": 2
                        },
                        {
                            "color": "#555555",
                            "ext_map": {
                                "lowest_tag_up_flag": "4",
                                "lowest_price_before_title": "60d lowest"
                            },
                            "marketing_tag_type": 1000,
                            "tag_id": 91048,
                            "text": "Lowest price in 60 days",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 80,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "31",
                            ".17",
                            ""
                        ],
                        "reduction_text": [
                            "-51",
                            "%"
                        ],
                        "price": 3117,
                        "market_price_str": "$63.99",
                        "market_price": 6399,
                        "price_schema": "31.17",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "31.17",
                            ""
                        ],
                        "price_str": "$31.17",
                        "price_color": "#FB7701",
                        "reduction": 510,
                        "market_price_text": [
                            "$",
                            "63.99",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 207189726818,
                        "url_id": "1490238731427592144",
                        "url": "https://img.kwcdn.com/product/fancy/ec8f6121-98e8-4e28-95a1-8132f0135426.jpg",
                        "height": 800
                    },
                    "sales_tip": "353 sold",
                    "visible": true,
                    "goods_id": 601102681056374,
                    "opt_id": 1546,
                    "display_end_time": 1764143999,
                    "seo_link_url": "/mens-winter-snow-boots-heavy-duty-thermal-insulated-cold--with-cushioned-insole-arch-support-slip-resistant-rubber-sole--trekking-boots-for--and--wear-ideal-for-hiking-work-and-casual--g-601102681056374.html?&_oak_name_id=9200978660802753187&_oak_mp_inf=EPbInP6x1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIip27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fec8f6121-98e8-4e28-95a1-8132f0135426.jpg&spec_gallery_id=207189726818&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzExNw&_oak_gallery_order=850086279%2C1627537058%2C139927021%2C1794726696%2C2138165182",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "353",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {},
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/a2bdf425-15d8-46cd-9d60-4f9d22a45539.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-72%"
                    },
                    "item_type": 0,
                    "page_alt": "mens solid color split   upper slip on loafer shoes comfy non slip rubber   shoes mens footwear",
                    "current_sku_id": 17592404703713,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "goods_attributes_tags": [
                            {
                                "text": "Split cow leather"
                            }
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#D9001B",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "3 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 3 left",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Men's Solid Color Split Cow Leather Upper Slip On Loafer Shoes, Comfy Non Slip Rubber Sole Walking Shoes, Men's Footwear",
                    "sales_tip_text_list": [
                        "2.9K+",
                        "sold"
                    ],
                    "display_end_time_percent": 29,
                    "sold_quantity_percent": 0,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1736733589",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6HLqjvEa0czOGXwCPDi09zAiO1BztxRmBOp0+UA5aEPxBBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "8305396416140367402",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1736733589",
                        "g": "601099562892436",
                        "scene_id": "3",
                        "show_price": "2427",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "81",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "3364199996151094002",
                        "ts": "1763997832366"
                    },
                    "activity_type": 27,
                    "mall_id": 134879608602,
                    "sales_num": "2.9K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099562892436&_oak_name_id=3364199996151094002&_oak_mp_inf=EJT5rq%2Bm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa2bdf425-15d8-46cd-9d60-4f9d22a45539.jpg&spec_gallery_id=2134742961&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjQyNw&_oak_gallery_order=1736733589%2C45260405%2C50768731%2C2065141360%2C1543471887",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "sales_icon": {
                            "width": 14,
                            "url": "https://aimg.kwcdn.com/upload_aimg/rec/57a4f16e-10c2-41ae-bfb7-3e5de7f02dca.png.slim.png",
                            "height": 14
                        },
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099562892436&_oak_name_id=3364199996151094002&_oak_mp_inf=EJT5rq%2Bm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa2bdf425-15d8-46cd-9d60-4f9d22a45539.jpg&spec_gallery_id=2134742961&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjQyNw&_oak_gallery_order=1736733589%2C45260405%2C50768731%2C2065141360%2C1543471887&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112749973091630228",
                        "sku_extra_param": {
                            "_oak_gallery_order": "1736733589,45260405,50768731,2065141360,1543471887",
                            "_oak_name_id": "3364199996151094002"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#D9001B",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "3 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 3 left",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 81,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "24",
                            ".27",
                            ""
                        ],
                        "reduction_text": [
                            "-72",
                            "%"
                        ],
                        "price": 2427,
                        "market_price_str": "$87.94",
                        "market_price": 8794,
                        "price_schema": "24.27",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "24.27",
                            ""
                        ],
                        "price_str": "$24.27",
                        "price_color": "#D9001B",
                        "reduction": 720,
                        "market_price_text": [
                            "$",
                            "87.94",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 2134742961,
                        "url_id": "8305396416140367402",
                        "url": "https://img.kwcdn.com/product/fancy/a2bdf425-15d8-46cd-9d60-4f9d22a45539.jpg",
                        "height": 800
                    },
                    "sales_tip": "2.9K+ sold",
                    "visible": true,
                    "goods_id": 601099562892436,
                    "opt_id": 1546,
                    "display_end_time": 1764921599,
                    "seo_link_url": "/mens-solid-color-split--upper-slip-on-loafer-shoes-comfy-non-slip-rubber--shoes-mens-footwear-g-601099562892436.html?&_oak_name_id=3364199996151094002&_oak_mp_inf=EJT5rq%2Bm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa2bdf425-15d8-46cd-9d60-4f9d22a45539.jpg&spec_gallery_id=2134742961&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjQyNw&_oak_gallery_order=1736733589%2C45260405%2C50768731%2C2065141360%2C1543471887",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "2.9K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.8,
                        "hidden_comment": true,
                        "comment_num_tips": "38"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/268dfba6-e034-420e-855d-cc3947890c4a.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-41%"
                    },
                    "item_type": 0,
                    "page_alt": "mens plus size fashionable british   casual loafers slip on slip on 8691",
                    "current_sku_id": 17601514542169,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/ad7b8220ae35324445bbd99a84f913294853f971.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/fancy/268dfba6-e034-420e-855d-cc3947890c4a.jpg",
                        "url": "https://img.kwcdn.com/product/2943e751f68bd8efc8f17dd248156d256ffe8e09.goods.000001.jpeg"
                    },
                    "title": "[Business Casual Slip-On] Plus Size Men's British Style Loafers | Fashionable Slip-On 8691",
                    "sales_tip_text_list": [
                        "363",
                        "sold"
                    ],
                    "display_end_time_percent": 78,
                    "sold_quantity_percent": 0,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1920722058",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6H9EZrMbxrt0pPq1WMP4PUjSsQQ1HFcYgGPgyREFJeNBxBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "3760241837593917612",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1920722058",
                        "g": "601101790381438",
                        "scene_id": "3",
                        "show_price": "3727",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "82",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "5757195010463334997",
                        "ts": "1763997832366"
                    },
                    "activity_type": 13,
                    "mall_id": 634418211078144,
                    "sales_num": "363",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601101790381438&_oak_name_id=5757195010463334997&_oak_mp_inf=EP6KwtWu1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F268dfba6-e034-420e-855d-cc3947890c4a.jpg&spec_gallery_id=203822799571&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzcyNw&_oak_gallery_order=1920722058%2C338302833%2C1729254664%2C1789682966%2C1237278223",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601101790381438&_oak_name_id=5757195010463334997&_oak_mp_inf=EP6KwtWu1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F268dfba6-e034-420e-855d-cc3947890c4a.jpg&spec_gallery_id=203822799571&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzcyNw&_oak_gallery_order=1920722058%2C338302833%2C1729254664%2C1789682966%2C1237278223&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112683966767531390",
                        "sku_extra_param": {
                            "_oak_gallery_order": "1920722058,338302833,1729254664,1789682966,1237278223",
                            "_oak_name_id": "5757195010463334997"
                        }
                    },
                    "goods_tags": [],
                    "show_index": 82,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "37",
                            ".27",
                            ""
                        ],
                        "reduction_text": [
                            "-41",
                            "%"
                        ],
                        "price": 3727,
                        "market_price_str": "$63.99",
                        "market_price": 6399,
                        "price_schema": "37.27",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "37.27",
                            ""
                        ],
                        "price_str": "$37.27",
                        "price_color": "#FB7701",
                        "reduction": 410,
                        "market_price_text": [
                            "$",
                            "63.99",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 203822799571,
                        "url_id": "3760241837593917612",
                        "url": "https://img.kwcdn.com/product/fancy/268dfba6-e034-420e-855d-cc3947890c4a.jpg",
                        "height": 800
                    },
                    "sales_tip": "363 sold",
                    "visible": true,
                    "goods_id": 601101790381438,
                    "opt_id": 1546,
                    "display_end_time": 1764575999,
                    "seo_link_url": "/mens-plus-size-fashionable-british--casual-loafers-slip-on-slip-on-8691-g-601101790381438.html?&_oak_name_id=5757195010463334997&_oak_mp_inf=EP6KwtWu1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F268dfba6-e034-420e-855d-cc3947890c4a.jpg&spec_gallery_id=203822799571&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzcyNw&_oak_gallery_order=1920722058%2C338302833%2C1729254664%2C1789682966%2C1237278223",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "363",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 5.0,
                        "hidden_comment": true,
                        "comment_num_tips": "2"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fmket/49c0ab55be1a21972512fe64550c49e0.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-41%"
                    },
                    "item_type": 0,
                    "page_alt": "mens crocodile textured loafers slip   casual shoes breathable comfortable pointed toe   versatile work shoes with rubber sole brown   cover upper   cover insole   cover inner   cover sole  ",
                    "current_sku_id": 17611523631988,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Men'S Crocodile-Textured Loafers - Slip-On Business Casual Shoes, Breathable & Comfortable, Pointed Toe, All-Season Versatile Work Shoes with Rubber Sole, Brown, Faux Cover Upper, Faux Cover Insole, Faux Cover Inner, Faux Cover Sole, Faux",
                    "sales_tip_text_list": [
                        "36",
                        "sold"
                    ],
                    "display_end_time_percent": 83,
                    "sold_quantity_percent": 66,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "1",
                        "mid": "69999906",
                        "final_creative_id": "1389961156",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6Ed2bZ8DGY3l81VDqnLEZbrz5RNDzDinTBjyV3E3mdxMRBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "5481862223131208179",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1389961156",
                        "g": "601103779169768",
                        "scene_id": "3",
                        "show_price": "3526",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "83",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "4913300336699773137",
                        "ts": "1763997832366"
                    },
                    "activity_type": 13,
                    "mall_id": 634418223875537,
                    "sales_num": "36",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601103779169768&_oak_name_id=4913300336699773137&_oak_mp_inf=EOiL7Im21ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F49c0ab55be1a21972512fe64550c49e0.jpg&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzUyNg&_oak_gallery_order=1389961156%2C1153231105%2C1554904516%2C1095577932%2C2023194135",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601103779169768&_oak_name_id=4913300336699773137&_oak_mp_inf=EOiL7Im21ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F49c0ab55be1a21972512fe64550c49e0.jpg&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzUyNg&_oak_gallery_order=1389961156%2C1153231105%2C1554904516%2C1095577932%2C2023194135&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112626846344873448",
                        "sku_extra_param": {
                            "_oak_gallery_order": "1389961156,1153231105,1554904516,1095577932,2023194135",
                            "_oak_name_id": "4913300336699773137"
                        }
                    },
                    "goods_tags": [],
                    "show_index": 83,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "35",
                            ".26",
                            ""
                        ],
                        "reduction_text": [
                            "-41",
                            "%"
                        ],
                        "price": 3526,
                        "market_price_str": "$59.88",
                        "market_price": 5988,
                        "price_schema": "35.26",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "35.26",
                            ""
                        ],
                        "price_str": "$35.26",
                        "price_color": "#FB7701",
                        "reduction": 410,
                        "market_price_text": [
                            "$",
                            "59.88",
                            ""
                        ]
                    },
                    "image": {
                        "width": 2000,
                        "id": 1,
                        "url_id": "5481862223131208179",
                        "url": "https://img.kwcdn.com/product/fmket/49c0ab55be1a21972512fe64550c49e0.jpg",
                        "height": 2000
                    },
                    "sales_tip": "36 sold",
                    "visible": true,
                    "goods_id": 601103779169768,
                    "opt_id": 1546,
                    "display_end_time": 1764403199,
                    "seo_link_url": "/mens-crocodile-textured-loafers-slip--casual-shoes-breathable-comfortable-pointed-toe--versatile-work-shoes-with-rubber-sole-brown--cover-upper--cover-insole--cover-inner--cover-sole--g-601103779169768.html?&_oak_name_id=4913300336699773137&_oak_mp_inf=EOiL7Im21ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F49c0ab55be1a21972512fe64550c49e0.jpg&spec_gallery_id=1&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzUyNg&_oak_gallery_order=1389961156%2C1153231105%2C1554904516%2C1095577932%2C2023194135",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "36",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {},
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/open/70b15c57a1314f25877452e6f4423932-goods.jpeg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-39%"
                    },
                    "item_type": 0,
                    "page_alt": "mens modern driving loafers   design with   textured upper comfortable flat   shoe for business meetings and urban strolling",
                    "current_sku_id": 17603330404746,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "[Driving Loafers] Men's Modern Driving Loafers, Easy Slip-On Design with a Premium Textured Upper, Comfortable Flat Sole Walking Shoe for Business Meetings and Urban Strolling",
                    "sales_tip_text_list": [
                        "27",
                        "sold"
                    ],
                    "display_end_time_percent": 83,
                    "sold_quantity_percent": 60,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "1",
                        "mid": "69999906",
                        "final_creative_id": "782135580",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6EKkLUoeMql6WQ5fukxJDKhy50fV4CBxOYK5em0lVQtARBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "3295515206445465693",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "782135580",
                        "g": "601102162413852",
                        "scene_id": "3",
                        "show_price": "3030",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "84",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "472386898708479446",
                        "ts": "1763997832366"
                    },
                    "activity_type": 13,
                    "mall_id": 634418222969790,
                    "sales_num": "27",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601102162413852&_oak_name_id=472386898708479446&_oak_mp_inf=EJyS9Yaw1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F70b15c57a1314f25877452e6f4423932-goods.jpeg&spec_gallery_id=205552755905&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzAzMA&_oak_gallery_order=782135580%2C2074080723%2C1306941990%2C99053896%2C1384570975",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601102162413852&_oak_name_id=472386898708479446&_oak_mp_inf=EJyS9Yaw1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F70b15c57a1314f25877452e6f4423932-goods.jpeg&spec_gallery_id=205552755905&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzAzMA&_oak_gallery_order=782135580%2C2074080723%2C1306941990%2C99053896%2C1384570975&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112664197016275228",
                        "sku_extra_param": {
                            "_oak_gallery_order": "782135580,2074080723,1306941990,99053896,1384570975",
                            "_oak_name_id": "472386898708479446"
                        }
                    },
                    "goods_tags": [],
                    "show_index": 84,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "30",
                            ".30",
                            ""
                        ],
                        "reduction_text": [
                            "-39",
                            "%"
                        ],
                        "price": 3030,
                        "market_price_str": "$50.36",
                        "market_price": 5036,
                        "price_schema": "30.30",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "30.30",
                            ""
                        ],
                        "price_str": "$30.30",
                        "price_color": "#FB7701",
                        "reduction": 390,
                        "market_price_text": [
                            "$",
                            "50.36",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 205552755905,
                        "url_id": "3295515206445465693",
                        "url": "https://img.kwcdn.com/product/open/70b15c57a1314f25877452e6f4423932-goods.jpeg",
                        "height": 800
                    },
                    "sales_tip": "27 sold",
                    "visible": true,
                    "goods_id": 601102162413852,
                    "opt_id": 1546,
                    "display_end_time": 1764403199,
                    "seo_link_url": "/mens-modern-driving-loafers--design-with--textured-upper-comfortable-flat--shoe-for-business-meetings-and-urban-strolling-g-601102162413852.html?&_oak_name_id=472386898708479446&_oak_mp_inf=EJyS9Yaw1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F70b15c57a1314f25877452e6f4423932-goods.jpeg&spec_gallery_id=205552755905&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzAzMA&_oak_gallery_order=782135580%2C2074080723%2C1306941990%2C99053896%2C1384570975",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "27",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.0,
                        "hidden_comment": true,
                        "comment_num_tips": "1"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8a09c6a3ddb12ca2bf236a733fe853fb.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-63%"
                    },
                    "item_type": 0,
                    "page_alt": "mens casual low top slip on loafer shoes lightweight wear resistant walking    ",
                    "current_sku_id": 17592316647698,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "ext_map": {
                                    "ranking_list_rich_text": "{\"text_rich\":[{\"type\":0,\"value\":\"BEST-SELLING ITEM\",\"font_size\":12,\"pc_font_size\":14,\"font_color\":\"#0A8800\",\"font_weight\":400,\"padding_end\":3,\"id\":1,\"corner_left_top\":6,\"corner_left_bottom\":0,\"corner_right_top\":0,\"corner_right_bottom\":6,\"start_edge\":3,\"end_edge\":3,\"top_edge\":2,\"bottom_edge\":2},{\"type\":0,\"value\":\"in Men's Loafers & Slip-Ons in Blue\",\"font_size\":13,\"pc_font_size\":14,\"font_color\":\"#555555\",\"font_weight\":400,\"id\":2}],\"track\":{\"click\":{\"ranking_type\":\"Best sellers\",\"ranking_opt_id\":\"1538\"},\"impr\":{\"ranking_type\":\"Best sellers\",\"ranking_opt_id\":\"1538\"}}}"
                                },
                                "prompt_tag_text": "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                                "footer": {
                                    "color": "#555555",
                                    "text": " in Men's Loafers & Slip-Ons in Blue",
                                    "font": 14
                                },
                                "marketing_tag_type": 2100,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/goods_details/3a667bf9-184a-4089-9631-4c4c3e6c0c27.png.slim.png",
                                "header": {
                                    "text_style": 2,
                                    "color": "#FFFFFF",
                                    "back_color": "#0A8800",
                                    "text": "BEST-SELLING ITEM",
                                    "font": 12
                                },
                                "tag_id": 91020,
                                "ranking_type": "Best sellers",
                                "ranking_id": "1538"
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Men's Casual Low Top Slip On Loafer Shoes, Lightweight Wear-resistant Walking Shoes For All Seasons",
                    "sales_tip_text_list": [
                        "7.6K+",
                        "sold"
                    ],
                    "display_end_time_percent": 33,
                    "sold_quantity_percent": 13,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1854817904",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6HNtVOxR2woubjL8HaAok3F/xkTKcZsVczxHZjImiUKZRBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "4949064626843807613",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1854817904",
                        "g": "601099540371043",
                        "scene_id": "3",
                        "show_price": "2002",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "85",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "7872170962019514526",
                        "ts": "1763997832366"
                    },
                    "activity_type": 13,
                    "mall_id": 634418212153540,
                    "sales_num": "7.6K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099540371043&_oak_name_id=7872170962019514526&_oak_mp_inf=EOOs0KSm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F8a09c6a3ddb12ca2bf236a733fe853fb.jpg&spec_gallery_id=601099540371043&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAwMg&_oak_gallery_order=1854817904%2C229775573%2C214816251%2C1818504200%2C771587492",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099540371043&_oak_name_id=7872170962019514526&_oak_mp_inf=EOOs0KSm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F8a09c6a3ddb12ca2bf236a733fe853fb.jpg&spec_gallery_id=601099540371043&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAwMg&_oak_gallery_order=1854817904%2C229775573%2C214816251%2C1818504200%2C771587492&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112745554149054051",
                        "sku_extra_param": {
                            "_oak_gallery_order": "1854817904,229775573,214816251,1818504200,771587492",
                            "_oak_name_id": "7872170962019514526"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "ext_map": {
                                "ranking_list_rich_text": "{\"text_rich\":[{\"type\":0,\"value\":\"BEST-SELLING ITEM\",\"font_size\":12,\"pc_font_size\":14,\"font_color\":\"#0A8800\",\"font_weight\":400,\"padding_end\":3,\"id\":1,\"corner_left_top\":6,\"corner_left_bottom\":0,\"corner_right_top\":0,\"corner_right_bottom\":6,\"start_edge\":3,\"end_edge\":3,\"top_edge\":2,\"bottom_edge\":2},{\"type\":0,\"value\":\"in Men's Loafers & Slip-Ons in Blue\",\"font_size\":13,\"pc_font_size\":14,\"font_color\":\"#555555\",\"font_weight\":400,\"id\":2}],\"track\":{\"click\":{\"ranking_type\":\"Best sellers\",\"ranking_opt_id\":\"1538\"},\"impr\":{\"ranking_type\":\"Best sellers\",\"ranking_opt_id\":\"1538\"}}}"
                            },
                            "prompt_tag_text": "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                            "footer": {
                                "color": "#555555",
                                "text": " in Men's Loafers & Slip-Ons in Blue",
                                "font": 14
                            },
                            "marketing_tag_type": 2100,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/goods_details/3a667bf9-184a-4089-9631-4c4c3e6c0c27.png.slim.png",
                            "header": {
                                "text_style": 2,
                                "color": "#FFFFFF",
                                "back_color": "#0A8800",
                                "text": "BEST-SELLING ITEM",
                                "font": 12
                            },
                            "tag_id": 91020,
                            "ranking_type": "Best sellers",
                            "ranking_id": "1538"
                        }
                    ],
                    "show_index": 85,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "20",
                            ".02",
                            ""
                        ],
                        "reduction_text": [
                            "-63",
                            "%"
                        ],
                        "price": 2002,
                        "market_price_str": "$55.48",
                        "market_price": 5548,
                        "price_schema": "20.02",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "20.02",
                            ""
                        ],
                        "price_str": "$20.02",
                        "price_color": "#FB7701",
                        "reduction": 630,
                        "market_price_text": [
                            "$",
                            "55.48",
                            ""
                        ]
                    },
                    "image": {
                        "width": 375,
                        "id": 601099540371043,
                        "url_id": "4949064626843807613",
                        "url": "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8a09c6a3ddb12ca2bf236a733fe853fb.jpg",
                        "height": 375
                    },
                    "sales_tip": "7.6K+ sold",
                    "visible": true,
                    "goods_id": 601099540371043,
                    "opt_id": 1546,
                    "display_end_time": 1764403199,
                    "seo_link_url": "/mens-casual-low-top-slip-on-loafer-shoes-lightweight-wear-resistant-walking---g-601099540371043.html?&_oak_name_id=7872170962019514526&_oak_mp_inf=EOOs0KSm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F8a09c6a3ddb12ca2bf236a733fe853fb.jpg&spec_gallery_id=601099540371043&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAwMg&_oak_gallery_order=1854817904%2C229775573%2C214816251%2C1818504200%2C771587492",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "7.6K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.7,
                        "hidden_comment": false,
                        "comment_num_tips": "154"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/12afee7b-16db-4555-9426-d906e6c8ef2d.jpg",
                    "ware_house_type": 1,
                    "benefit_text": {
                        "text": "-72%"
                    },
                    "item_type": 0,
                    "page_alt": "mens slip on loafers   business casual s with upper round toe design all terrain rubber sole   for office parties vacations minimalist   footwear",
                    "current_sku_id": 17599239294734,
                    "tags_info": {
                        "title_header_tags": [
                            {
                                "color": "#0A8800",
                                "ext_map": {
                                    "local_explanation": "{\"title\":\"Local warehouse\",\"content\":\"Items with the \\\"Local\\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.\",\"button\":{\"text\":\"OK\"}}"
                                },
                                "marketing_tag_type": 1000,
                                "tag_id": 91050,
                                "text": "Local",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/a61386a67702b6d5df238cb4462cc9fd269bbc4a.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/fancy/12afee7b-16db-4555-9426-d906e6c8ef2d.jpg",
                        "url": "https://img.kwcdn.com/product/0f2c9af93d7758c19a2d05f419b71df56eec06ff.goods.000001.jpeg"
                    },
                    "title": "Men's Slip-On Loafers - All-Season Business Casual & s with  Upper, Round Toe Design, All-Terrain Rubber Sole - Easy Wear for Office, Parties, Vacations - Minimalist All-Season Footwear",
                    "sales_tip_text_list": [
                        "138",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "972169236",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6G884xsoyOxj+GcT1Qa0J/gQfg1kimiAXqeC20Cx2UkORBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "7258478370764011067",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "972169236",
                        "g": "601101313206420",
                        "scene_id": "3",
                        "show_price": "3979",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "86",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "2078421598005701179",
                        "ts": "1763997832366"
                    },
                    "mall_id": 634418223213891,
                    "sales_num": "138",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601101313206420&_oak_mp_inf=EJTR%2FfGs1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F12afee7b-16db-4555-9426-d906e6c8ef2d.jpg&spec_gallery_id=201792938222&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk3OQ&_oak_gallery_order=972169236%2C944765815%2C1945962262%2C1574836555%2C514481194",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601101313206420&_oak_mp_inf=EJTR%2FfGs1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F12afee7b-16db-4555-9426-d906e6c8ef2d.jpg&spec_gallery_id=201792938222&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk3OQ&_oak_gallery_order=972169236%2C944765815%2C1945962262%2C1574836555%2C514481194&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "972169236,944765815,1945962262,1574836555,514481194"
                        }
                    },
                    "goods_tags": [],
                    "show_index": 86,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "39",
                            ".79",
                            ""
                        ],
                        "reduction_text": [
                            "-72",
                            "%"
                        ],
                        "price": 3979,
                        "market_price_str": "$147.06",
                        "market_price": 14706,
                        "price_schema": "39.79",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "39.79",
                            ""
                        ],
                        "price_str": "$39.79",
                        "market_price_text": [
                            "$",
                            "147.06",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 201792938222,
                        "url_id": "7258478370764011067",
                        "url": "https://img.kwcdn.com/product/fancy/12afee7b-16db-4555-9426-d906e6c8ef2d.jpg",
                        "height": 800
                    },
                    "sales_tip": "138 sold",
                    "visible": true,
                    "goods_id": 601101313206420,
                    "opt_id": 1546,
                    "seo_link_url": "/men-s-slip-on-loafers--business-casual-s-with-upper-round-toe-design-all-terrain-rubber-sole--for-office-parties-vacations-minimalist--footwear-g-601101313206420.html?&_oak_mp_inf=EJTR%2FfGs1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IImp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F12afee7b-16db-4555-9426-d906e6c8ef2d.jpg&spec_gallery_id=201792938222&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk3OQ&_oak_gallery_order=972169236%2C944765815%2C1945962262%2C1574836555%2C514481194",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "138",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.7,
                        "hidden_comment": true,
                        "comment_num_tips": "25"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/1ea26c78ea/cec1bc2e-ba9b-4581-b88f-aa0d419fa3c8_800x800.jpeg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-75%"
                    },
                    "item_type": 0,
                    "page_alt": "  mens genuine   leather slip on loafers non slip comfortable casual shoes with round toe black rubber sole and   cover lining for   comfortable footwear sleek loafer design durable footwear",
                    "current_sku_id": 17592198437000,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "goods_attributes_tags": [
                            {
                                "text": "Split cow leather"
                            }
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "mall_tag": [
                            {
                                "color": "#FFEFD3",
                                "ext_map": {
                                    "brand_info": "{\"brand_name\":\"CLOHOO\",\"brand_authorized_type\":2}",
                                    "brand_tag_text_style": "1"
                                },
                                "bg_url": "https://aimg.kwcdn.com/upload_aimg/aftersales/f3dba53e-2a7c-4ae2-acf5-6cf50fd53c15.png",
                                "marketing_tag_type": 2700,
                                "width": 39,
                                "tag_id": 91007,
                                "text": "Brand Official Store: CLOHOO",
                                "tag_series": 2,
                                "url": "https://aimg.kwcdn.com/upload_aimg/aftersales/efb13335-b6b6-4984-af7d-a48dbaccb830.png",
                                "height": 39
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#D9001B",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "5 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 5 left",
                                "tag_series": 2
                            },
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#D9001B",
                                "ext_map": {
                                    "ranking_list_rich_text": "{\"text_rich\":[{\"type\":0,\"value\":\"TOP RATED\",\"font_size\":12,\"pc_font_size\":14,\"font_color\":\"#D9001B\",\"font_weight\":400,\"padding_end\":3,\"id\":1,\"corner_left_top\":6,\"corner_left_bottom\":0,\"corner_right_top\":0,\"corner_right_bottom\":6,\"start_edge\":3,\"end_edge\":3,\"top_edge\":2,\"bottom_edge\":2},{\"type\":0,\"value\":\"in Men's Loafers & Slip-Ons\",\"font_size\":13,\"pc_font_size\":14,\"font_color\":\"#555555\",\"font_weight\":400,\"id\":2}],\"track\":{\"click\":{\"ranking_type\":\"Top rated\",\"ranking_opt_id\":\"1538\"},\"impr\":{\"ranking_type\":\"Top rated\",\"ranking_opt_id\":\"1538\"}}}"
                                },
                                "prompt_tag_text": "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                                "footer": {
                                    "color": "#555555",
                                    "text": " in Men's Loafers & Slip-Ons",
                                    "font": 14
                                },
                                "marketing_tag_type": 2100,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/goods_details/3a667bf9-184a-4089-9631-4c4c3e6c0c27.png.slim.png",
                                "header": {
                                    "text_style": 2,
                                    "color": "#FFFFFF",
                                    "back_color": "#0A8800",
                                    "text": "TOP RATED",
                                    "font": 12
                                },
                                "tag_id": 91020,
                                "ranking_type": "Top rated",
                                "ranking_id": "1538"
                            },
                            {
                                "color": "#555555",
                                "ext_map": {
                                    "lowest_tag_up_flag": "2",
                                    "lowest_price_before_title": "6m lowest"
                                },
                                "marketing_tag_type": 1000,
                                "tag_id": 91048,
                                "text": "Lowest price in half year",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/83de5a255ac170c4ba81a86b0e94f6647db76603.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/1ea26c78ea/cec1bc2e-ba9b-4581-b88f-aa0d419fa3c8_800x800.jpeg",
                        "url": "https://img.kwcdn.com/product/2c9c8a3ab617e3e36cb2584e2cf4ddcc5995c190.goods.000001.jpeg"
                    },
                    "title": "CLOHOO Men'S Genuine Faux Leather Slip-On Loafers - Non-Slip Comfortable Casual Shoes with Round Toe, Black, Rubber Sole, and Faux Cover Lining for All Seasons, Comfortable Footwear | Sleek Loafer Design | Durable Footwear",
                    "sales_tip_text_list": [
                        "50K+",
                        "sold"
                    ],
                    "display_end_time_percent": 67,
                    "sold_quantity_percent": 0,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "376746164",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6FvoBNPCA0PlYLUvuIY3Q8fZ8VkuEr154Hj52FqHJqxXhBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "4988575194762437280",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "376746164",
                        "g": "601099512321913",
                        "scene_id": "3",
                        "show_price": "1648",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "87",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "6288985855326901579",
                        "ts": "1763997832366"
                    },
                    "activity_type": 27,
                    "mall_id": 125534834472,
                    "sales_num": "50K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099512321913&_oak_name_id=6288985855326901579&_oak_mp_inf=EPmuoJem1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2F1ea26c78ea%2Fcec1bc2e-ba9b-4581-b88f-aa0d419fa3c8_800x800.jpeg&spec_gallery_id=601099512321913&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTY0OA&_oak_gallery_order=376746164%2C1292176769%2C1380533108%2C625395807%2C796842836",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "sales_icon": {
                            "width": 14,
                            "url": "https://aimg.kwcdn.com/upload_aimg/rec/57a4f16e-10c2-41ae-bfb7-3e5de7f02dca.png.slim.png",
                            "height": 14
                        },
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099512321913&_oak_name_id=6288985855326901579&_oak_mp_inf=EPmuoJem1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2F1ea26c78ea%2Fcec1bc2e-ba9b-4581-b88f-aa0d419fa3c8_800x800.jpeg&spec_gallery_id=601099512321913&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTY0OA&_oak_gallery_order=376746164%2C1292176769%2C1380533108%2C625395807%2C796842836&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112730183383848825",
                        "sku_extra_param": {
                            "_oak_gallery_order": "376746164,1292176769,1380533108,625395807,796842836",
                            "_oak_name_id": "6288985855326901579"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#D9001B",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "5 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 5 left",
                            "tag_series": 2
                        },
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#D9001B",
                            "ext_map": {
                                "ranking_list_rich_text": "{\"text_rich\":[{\"type\":0,\"value\":\"TOP RATED\",\"font_size\":12,\"pc_font_size\":14,\"font_color\":\"#D9001B\",\"font_weight\":400,\"padding_end\":3,\"id\":1,\"corner_left_top\":6,\"corner_left_bottom\":0,\"corner_right_top\":0,\"corner_right_bottom\":6,\"start_edge\":3,\"end_edge\":3,\"top_edge\":2,\"bottom_edge\":2},{\"type\":0,\"value\":\"in Men's Loafers & Slip-Ons\",\"font_size\":13,\"pc_font_size\":14,\"font_color\":\"#555555\",\"font_weight\":400,\"id\":2}],\"track\":{\"click\":{\"ranking_type\":\"Top rated\",\"ranking_opt_id\":\"1538\"},\"impr\":{\"ranking_type\":\"Top rated\",\"ranking_opt_id\":\"1538\"}}}"
                            },
                            "prompt_tag_text": "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                            "footer": {
                                "color": "#555555",
                                "text": " in Men's Loafers & Slip-Ons",
                                "font": 14
                            },
                            "marketing_tag_type": 2100,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/goods_details/3a667bf9-184a-4089-9631-4c4c3e6c0c27.png.slim.png",
                            "header": {
                                "text_style": 2,
                                "color": "#FFFFFF",
                                "back_color": "#0A8800",
                                "text": "TOP RATED",
                                "font": 12
                            },
                            "tag_id": 91020,
                            "ranking_type": "Top rated",
                            "ranking_id": "1538"
                        },
                        {
                            "color": "#555555",
                            "ext_map": {
                                "lowest_tag_up_flag": "2",
                                "lowest_price_before_title": "6m lowest"
                            },
                            "marketing_tag_type": 1000,
                            "tag_id": 91048,
                            "text": "Lowest price in half year",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 87,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "16",
                            ".48",
                            ""
                        ],
                        "reduction_text": [
                            "-75",
                            "%"
                        ],
                        "price": 1648,
                        "market_price_str": "$67.34",
                        "market_price": 6734,
                        "price_schema": "16.48",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "16.48",
                            ""
                        ],
                        "price_str": "$16.48",
                        "price_color": "#D9001B",
                        "reduction": 750,
                        "market_price_text": [
                            "$",
                            "67.34",
                            ""
                        ]
                    },
                    "image": {
                        "width": 375,
                        "id": 601099512321913,
                        "url_id": "4988575194762437280",
                        "url": "https://img.kwcdn.com/product/1ea26c78ea/cec1bc2e-ba9b-4581-b88f-aa0d419fa3c8_800x800.jpeg",
                        "height": 375
                    },
                    "sales_tip": "50K+ sold",
                    "visible": true,
                    "goods_id": 601099512321913,
                    "opt_id": 1546,
                    "display_end_time": 1764575999,
                    "seo_link_url": "/-mens-genuine--leather-slip-on-loafers-non-slip-comfortable-casual-shoes-with-round-toe-black-rubber-sole-and--cover-lining-for--comfortable-footwear-sleek-loafer-design-durable-footwear-g-601099512321913.html?&_oak_name_id=6288985855326901579&_oak_mp_inf=EPmuoJem1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2F1ea26c78ea%2Fcec1bc2e-ba9b-4581-b88f-aa0d419fa3c8_800x800.jpeg&spec_gallery_id=601099512321913&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTY0OA&_oak_gallery_order=376746164%2C1292176769%2C1380533108%2C625395807%2C796842836",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "50K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.8,
                        "hidden_comment": false,
                        "comment_num_tips": "1,742"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/7a544fb87f6fcb664356f7434b584a5a.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-39%"
                    },
                    "item_type": 0,
                    "page_alt": "mens boots   calf loafers with side zipper round toe rubber sole for casual outdoor wear     shoes round toe footwear boots",
                    "current_sku_id": 17592316455402,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "4 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 4 left",
                                "tag_series": 2
                            },
                            {
                                "color": "#555555",
                                "ext_map": {
                                    "lowest_tag_up_flag": "5",
                                    "lowest_price_before_title": "30d lowest"
                                },
                                "marketing_tag_type": 1000,
                                "tag_id": 91048,
                                "text": "Lowest price in 30 days",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/c83c5360839452aeac493a628d8b0c3b43f05cf5gs2CV.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/7a544fb87f6fcb664356f7434b584a5a.jpg",
                        "url": "https://img.kwcdn.com/product/7a1d6187e70157d553c69be42562885fd79d7613.temu.000001.jpeg"
                    },
                    "title": "Men's Boots - Mid-Calf Loafers with Side Zipper, Round Toe, Rubber Sole for Casual & Outdoor Wear, All Seasons, Allseason Shoes | Round Toe Footwear | Boots",
                    "sales_tip_text_list": [
                        "1K+",
                        "sold"
                    ],
                    "display_end_time_percent": 83,
                    "sold_quantity_percent": 0,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "642743842",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6HHhLVphCh9Z1KcJuE8Ai5Z3hMVI7Kn2gPbXq1/DVAQhBBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "1725585013006967718",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "642743842",
                        "g": "601099540330883",
                        "scene_id": "3",
                        "show_price": "4228",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "88",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "1750484270436002980",
                        "ts": "1763997832366"
                    },
                    "activity_type": 13,
                    "mall_id": 634418212667581,
                    "sales_num": "1K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099540330883&_oak_name_id=1750484270436002980&_oak_mp_inf=EIPzzaSm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F7a544fb87f6fcb664356f7434b584a5a.jpg&spec_gallery_id=2197264720&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDIyOA&_oak_gallery_order=642743842%2C528430722%2C1644095724%2C1475835092%2C1768173559",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099540330883&_oak_name_id=1750484270436002980&_oak_mp_inf=EIPzzaSm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F7a544fb87f6fcb664356f7434b584a5a.jpg&spec_gallery_id=2197264720&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDIyOA&_oak_gallery_order=642743842%2C528430722%2C1644095724%2C1475835092%2C1768173559&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112743371626215811",
                        "sku_extra_param": {
                            "_oak_gallery_order": "642743842,528430722,1644095724,1475835092,1768173559",
                            "_oak_name_id": "1750484270436002980"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "4 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 4 left",
                            "tag_series": 2
                        },
                        {
                            "color": "#555555",
                            "ext_map": {
                                "lowest_tag_up_flag": "5",
                                "lowest_price_before_title": "30d lowest"
                            },
                            "marketing_tag_type": 1000,
                            "tag_id": 91048,
                            "text": "Lowest price in 30 days",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 88,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "42",
                            ".28",
                            ""
                        ],
                        "reduction_text": [
                            "-39",
                            "%"
                        ],
                        "price": 4228,
                        "market_price_str": "$69.99",
                        "market_price": 6999,
                        "price_schema": "42.28",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "42.28",
                            ""
                        ],
                        "price_str": "$42.28",
                        "price_color": "#FB7701",
                        "reduction": 390,
                        "market_price_text": [
                            "$",
                            "69.99",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 2197264720,
                        "url_id": "1725585013006967718",
                        "url": "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/7a544fb87f6fcb664356f7434b584a5a.jpg",
                        "height": 800
                    },
                    "sales_tip": "1K+ sold",
                    "visible": true,
                    "goods_id": 601099540330883,
                    "opt_id": 1546,
                    "display_end_time": 1764403199,
                    "seo_link_url": "/mens-boots--calf-loafers-with-side-zipper-round-toe-rubber-sole-for-casual-outdoor-wear---shoes-round-toe-footwear-boots-g-601099540330883.html?&_oak_name_id=1750484270436002980&_oak_mp_inf=EIPzzaSm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F7a544fb87f6fcb664356f7434b584a5a.jpg&spec_gallery_id=2197264720&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDIyOA&_oak_gallery_order=642743842%2C528430722%2C1644095724%2C1475835092%2C1768173559",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "1K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 5.0,
                        "hidden_comment": true,
                        "comment_num_tips": "25"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/open/6c5271df4afa4986ab88c56017dde44d-goods.jpeg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-19%"
                    },
                    "item_type": 0,
                    "page_alt": "mens genuine leather slip on loafers full grain cowhide upper anti slip pu sole cushioned insole   business casual shoes black for office parties daily wear heavy duty round toe dress loafers",
                    "current_sku_id": 17609020044820,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "goods_attributes_tags": [
                            {
                                "text": "Cow leather"
                            }
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "goods_tags": [
                            {
                                "color": "#555555",
                                "ext_map": {
                                    "lowest_tag_up_flag": "1",
                                    "lowest_price_before_title": "Lowest ever"
                                },
                                "marketing_tag_type": 1000,
                                "tag_id": 91048,
                                "text": "Lowest price ever",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Men's Genuine Leather Slip-On Loafers - Full-Grain Cowhide Upper, Anti-Slip PU Sole & Cushioned Insole - All-Season Business Casual Shoes (Black) for Office, Parties, Daily Wear - Heavy-Duty Round-Toe Dress Loafers",
                    "sales_tip_text_list": [
                        "125",
                        "sold"
                    ],
                    "display_end_time_percent": 83,
                    "sold_quantity_percent": 0,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1780730129",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6EsBh8wxAScXGFw0A/4PW0bcvzE9CxqNrbYnaoCzCIQtRBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "8107352013243906201",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1780730129",
                        "g": "601103290433658",
                        "scene_id": "3",
                        "show_price": "2683",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "89",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "2006465784326729188",
                        "ts": "1763997832366"
                    },
                    "activity_type": 13,
                    "mall_id": 634418224576377,
                    "sales_num": "125",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601103290433658&_oak_name_id=2006465784326729188&_oak_mp_inf=EPqA5qC01ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F6c5271df4afa4986ab88c56017dde44d-goods.jpeg&spec_gallery_id=211711763763&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY4Mw&_oak_gallery_order=1780730129%2C2133805085%2C1660159554%2C1272970931%2C1823599637",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601103290433658&_oak_name_id=2006465784326729188&_oak_mp_inf=EPqA5qC01ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F6c5271df4afa4986ab88c56017dde44d-goods.jpeg&spec_gallery_id=211711763763&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY4Mw&_oak_gallery_order=1780730129%2C2133805085%2C1660159554%2C1272970931%2C1823599637&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112697185821229178",
                        "sku_extra_param": {
                            "_oak_gallery_order": "1780730129,2133805085,1660159554,1272970931,1823599637",
                            "_oak_name_id": "2006465784326729188"
                        }
                    },
                    "goods_tags": [
                        {
                            "color": "#555555",
                            "ext_map": {
                                "lowest_tag_up_flag": "1",
                                "lowest_price_before_title": "Lowest ever"
                            },
                            "marketing_tag_type": 1000,
                            "tag_id": 91048,
                            "text": "Lowest price ever",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 89,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "26",
                            ".83",
                            ""
                        ],
                        "reduction_text": [
                            "-19",
                            "%"
                        ],
                        "price": 2683,
                        "market_price_str": "$33.39",
                        "market_price": 3339,
                        "price_schema": "26.83",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "26.83",
                            ""
                        ],
                        "price_str": "$26.83",
                        "price_color": "#FB7701",
                        "reduction": 190,
                        "market_price_text": [
                            "$",
                            "33.39",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 211711763763,
                        "url_id": "8107352013243906201",
                        "url": "https://img.kwcdn.com/product/open/6c5271df4afa4986ab88c56017dde44d-goods.jpeg",
                        "height": 800
                    },
                    "sales_tip": "125 sold",
                    "visible": true,
                    "goods_id": 601103290433658,
                    "opt_id": 1546,
                    "display_end_time": 1764403199,
                    "seo_link_url": "/mens-genuine-leather-slip-on-loafers-full-grain-cowhide-upper-anti-slip-pu-sole-cushioned-insole--business-casual-shoes-black-for-office-parties-daily-wear-heavy-duty-round-toe-dress-loafers-g-601103290433658.html?&_oak_name_id=2006465784326729188&_oak_mp_inf=EPqA5qC01ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F6c5271df4afa4986ab88c56017dde44d-goods.jpeg&spec_gallery_id=211711763763&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjY4Mw&_oak_gallery_order=1780730129%2C2133805085%2C1660159554%2C1272970931%2C1823599637",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "125",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {},
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fmket/08f91d66d8fc758c760ebcf51e36bc32.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-62%"
                    },
                    "item_type": 0,
                    "page_alt": "mens slip on loafers brown   casual shoes with rubber sole round toe fabric lining     for driving streetwear daily wear versatile footwear sleek   durable traction footwear men loafer shoe for men men loafer shoe brown men shoe loafer big size shoe for men loafer shoe for men men shoe loafer men mens loafers mens shoes moccasin for men",
                    "current_sku_id": 17603368326226,
                    "tags_info": {},
                    "video": {
                        "video_url": ""
                    },
                    "title": "[Men's Slip-On Loafers] Men's Slip-On Loafers - Brown Faux Casual Shoes with Rubber Sole, Round Toe & Fabric Lining, All-Season Comfort for Driving, Streetwear & Daily Wear, Versatile Footwear, Sleek Shoe Design, Durable Traction Footwear, Men Loafer Shoe For Men, Men Loafer Shoe Brown, Men Shoe Loafer, Big Size Shoe For Men, Loafer Shoe For Men, Men Shoe, Loafer Men, Men's Loafers, Men's Shoes, Moccasin For Men",
                    "sales_tip_text_list": [
                        "74",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1611398457",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6GgTpMJjDRor0KUE1zr2WwYrJWiHJPmHpk2PHHTNpDZShBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "6450600501022870933",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1611398457",
                        "g": "601102169887615",
                        "scene_id": "3",
                        "show_price": "3368",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "90",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "275976362353204114",
                        "ts": "1763997832366"
                    },
                    "mall_id": 634418210416345,
                    "sales_num": "74",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601102169887615&_oak_name_id=275976362353204114&_oak_mp_inf=EP%2BmvYqw1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F08f91d66d8fc758c760ebcf51e36bc32.jpg&spec_gallery_id=2&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzM2OA&_oak_gallery_order=1611398457%2C909233897%2C1949045195%2C1587832120%2C246752360",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601102169887615&_oak_name_id=275976362353204114&_oak_mp_inf=EP%2BmvYqw1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F08f91d66d8fc758c760ebcf51e36bc32.jpg&spec_gallery_id=2&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzM2OA&_oak_gallery_order=1611398457%2C909233897%2C1949045195%2C1587832120%2C246752360&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "1611398457,909233897,1949045195,1587832120,246752360",
                            "_oak_name_id": "275976362353204114"
                        }
                    },
                    "goods_tags": [],
                    "show_index": 90,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "33",
                            ".68",
                            ""
                        ],
                        "reduction_text": [
                            "-62",
                            "%"
                        ],
                        "price": 3368,
                        "market_price_str": "$89.46",
                        "market_price": 8946,
                        "price_schema": "33.68",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "33.68",
                            ""
                        ],
                        "price_str": "$33.68",
                        "market_price_text": [
                            "$",
                            "89.46",
                            ""
                        ]
                    },
                    "image": {
                        "width": 2000,
                        "id": 2,
                        "url_id": "6450600501022870933",
                        "url": "https://img.kwcdn.com/product/fmket/08f91d66d8fc758c760ebcf51e36bc32.jpg",
                        "height": 2000
                    },
                    "sales_tip": "74 sold",
                    "visible": true,
                    "goods_id": 601102169887615,
                    "opt_id": 1546,
                    "seo_link_url": "/mens-slip-on-loafers-brown--casual-shoes-with-rubber-sole-round-toe-fabric-lining---for-driving-streetwear-daily-wear-versatile-footwear-sleek--durable-traction-footwear-men-loafer-shoe-for-men-men-loafer-shoe-brown-men-shoe-loafer-big-size-shoe-for-men-loafer-shoe-for-men-men-shoe-loafer-men-mens-loafers-mens-shoes-moccasin-for-men-g-601102169887615.html?&_oak_name_id=275976362353204114&_oak_mp_inf=EP%2BmvYqw1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F08f91d66d8fc758c760ebcf51e36bc32.jpg&spec_gallery_id=2&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzM2OA&_oak_gallery_order=1611398457%2C909233897%2C1949045195%2C1587832120%2C246752360",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "74",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 5.0,
                        "hidden_comment": true,
                        "comment_num_tips": "1"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/ca19a61d-9eba-4749-9cf8-cda326ac419b.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-25%"
                    },
                    "item_type": 0,
                    "page_alt": "mens plus size business casual loafers stylish brown synthetic cover with braided detail durable rubber sole comfortable   lining for office daily wear   stylish loafers synthetic cover shoes",
                    "current_sku_id": 17599168493599,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/0faad642cad71289370d08a46d655865161fe95d.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/fancy/ca19a61d-9eba-4749-9cf8-cda326ac419b.jpg",
                        "url": "https://img.kwcdn.com/product/7410b4317ac5cf280b412ed665a8964590541570.goods.000001.jpeg"
                    },
                    "title": "Men'S Plus Size Business Casual Loafers - Stylish Brown Synthetic Cover with Braided Detail, Durable Rubber Sole, Comfortable Faux Lining for Office & Daily Wear, Office Shoes | Stylish Loafers | Synthetic Cover Shoes",
                    "sales_tip_text_list": [
                        "590",
                        "sold"
                    ],
                    "display_end_time_percent": 78,
                    "sold_quantity_percent": 0,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1793545231",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6EJF5Bvw3S5OMvDwhweEH+SuO75gFnXpXykm5c/8C6H4xBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "6530053707094815852",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1793545231",
                        "g": "601101299511585",
                        "scene_id": "3",
                        "show_price": "3954",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "91",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "6379961386816011455",
                        "ts": "1763997832367"
                    },
                    "activity_type": 13,
                    "mall_id": 634418211078144,
                    "sales_num": "590",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601101299511585&_oak_name_id=6379961386816011455&_oak_mp_inf=EKHiueus1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fca19a61d-9eba-4749-9cf8-cda326ac419b.jpg&spec_gallery_id=201771075609&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk1NA&_oak_gallery_order=1793545231%2C2061779522%2C1367810417%2C517829204%2C2035180051",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601101299511585&_oak_name_id=6379961386816011455&_oak_mp_inf=EKHiueus1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fca19a61d-9eba-4749-9cf8-cda326ac419b.jpg&spec_gallery_id=201771075609&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk1NA&_oak_gallery_order=1793545231%2C2061779522%2C1367810417%2C517829204%2C2035180051&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112683991958516001",
                        "sku_extra_param": {
                            "_oak_gallery_order": "1793545231,2061779522,1367810417,517829204,2035180051",
                            "_oak_name_id": "6379961386816011455"
                        }
                    },
                    "goods_tags": [],
                    "show_index": 91,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "39",
                            ".54",
                            ""
                        ],
                        "reduction_text": [
                            "-25",
                            "%"
                        ],
                        "price": 3954,
                        "market_price_str": "$53.37",
                        "market_price": 5337,
                        "price_schema": "39.54",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "39.54",
                            ""
                        ],
                        "price_str": "$39.54",
                        "price_color": "#FB7701",
                        "reduction": 250,
                        "market_price_text": [
                            "$",
                            "53.37",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 201771075609,
                        "url_id": "6530053707094815852",
                        "url": "https://img.kwcdn.com/product/fancy/ca19a61d-9eba-4749-9cf8-cda326ac419b.jpg",
                        "height": 800
                    },
                    "sales_tip": "590 sold",
                    "visible": true,
                    "goods_id": 601101299511585,
                    "opt_id": 1546,
                    "display_end_time": 1764575999,
                    "seo_link_url": "/mens-plus-size-business-casual-loafers-stylish-brown-synthetic-cover-with-braided-detail-durable-rubber-sole-comfortable--lining-for-office-daily-wear--stylish-loafers-synthetic-cover-shoes-g-601101299511585.html?&_oak_name_id=6379961386816011455&_oak_mp_inf=EKHiueus1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fca19a61d-9eba-4749-9cf8-cda326ac419b.jpg&spec_gallery_id=201771075609&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk1NA&_oak_gallery_order=1793545231%2C2061779522%2C1367810417%2C517829204%2C2035180051",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "590",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 5.0,
                        "hidden_comment": true,
                        "comment_num_tips": "1"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/43c56414-d383-4b0a-9b4a-1518b0849efe.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-21%"
                    },
                    "item_type": 0,
                    "page_alt": "mens casual loafers breathable mesh lining slip   round toe fabric upper ideal for walking driving outdoor activities     wea",
                    "current_sku_id": 17596121422862,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#D9001B",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "7 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 7 left",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Men'S Casual Loafers - Breathable Mesh Lining, Slip-On Design, Round Toe, Fabric Upper, Ideal for Walking, Driving & Outdoor Activities - Non-Slip Sole, All-Season Wea",
                    "sales_tip_text_list": [
                        "659",
                        "sold"
                    ],
                    "display_end_time_percent": 77,
                    "sold_quantity_percent": 0,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "189984652",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6F89s4GjZCah+sQaqHDmOgBQ66YiwvYnIaWRflxgwyXVBBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "1437815229072546460",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "189984652",
                        "g": "601100477513058",
                        "scene_id": "3",
                        "show_price": "1806",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "92",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "6922607633072573411",
                        "ts": "1763997832367"
                    },
                    "activity_type": 27,
                    "mall_id": 634418216020319,
                    "sales_num": "659",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601100477513058&_oak_name_id=6922607633072573411&_oak_mp_inf=EOL6vuOp1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F43c56414-d383-4b0a-9b4a-1518b0849efe.jpg&spec_gallery_id=200883622105&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTgwNg&_oak_gallery_order=189984652%2C433211606%2C1167148179%2C596810078%2C1209670475",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601100477513058&_oak_name_id=6922607633072573411&_oak_mp_inf=EOL6vuOp1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F43c56414-d383-4b0a-9b4a-1518b0849efe.jpg&spec_gallery_id=200883622105&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTgwNg&_oak_gallery_order=189984652%2C433211606%2C1167148179%2C596810078%2C1209670475&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112727955512212834",
                        "sku_extra_param": {
                            "_oak_gallery_order": "189984652,433211606,1167148179,596810078,1209670475",
                            "_oak_name_id": "6922607633072573411"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#D9001B",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "7 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 7 left",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 92,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "18",
                            ".06",
                            ""
                        ],
                        "reduction_text": [
                            "-21",
                            "%"
                        ],
                        "price": 1806,
                        "market_price_str": "$22.94",
                        "market_price": 2294,
                        "price_schema": "18.06",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "18.06",
                            ""
                        ],
                        "price_str": "$18.06",
                        "price_color": "#D9001B",
                        "reduction": 210,
                        "market_price_text": [
                            "$",
                            "22.94",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 200883622105,
                        "url_id": "1437815229072546460",
                        "url": "https://img.kwcdn.com/product/fancy/43c56414-d383-4b0a-9b4a-1518b0849efe.jpg",
                        "height": 800
                    },
                    "sales_tip": "659 sold",
                    "visible": true,
                    "goods_id": 601100477513058,
                    "opt_id": 1546,
                    "display_end_time": 1764403199,
                    "seo_link_url": "/mens-casual-loafers-breathable-mesh-lining-slip--round-toe-fabric-upper-ideal-for-walking-driving-outdoor-activities---wea-g-601100477513058.html?&_oak_name_id=6922607633072573411&_oak_mp_inf=EOL6vuOp1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F43c56414-d383-4b0a-9b4a-1518b0849efe.jpg&spec_gallery_id=200883622105&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTgwNg&_oak_gallery_order=189984652%2C433211606%2C1167148179%2C596810078%2C1209670475",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "659",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.9,
                        "hidden_comment": true,
                        "comment_num_tips": "19"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/open/acf0f83bf2c54023ba8643b34ff84f35-goods.jpeg",
                    "ware_house_type": 1,
                    "benefit_text": {
                        "text": "-86%"
                    },
                    "item_type": 0,
                    "page_alt": "mens casual dress shoes slip resistant comfortable walking sneakers for   travel     non slip thick soled boots 7 sizes     versatile footwear cushioned insole durable rubber sole",
                    "current_sku_id": 17608954593488,
                    "tags_info": {
                        "goods_attributes_tags": [
                            {
                                "text": "Split cow leather"
                            }
                        ],
                        "title_header_tags": [
                            {
                                "color": "#0A8800",
                                "ext_map": {
                                    "local_explanation": "{\"title\":\"Local warehouse\",\"content\":\"Items with the \\\"Local\\\" tag are items that are shipped from local warehouses within your country/region. These items are more likely to reach you faster.\",\"button\":{\"text\":\"OK\"}}"
                                },
                                "marketing_tag_type": 1000,
                                "tag_id": 91050,
                                "text": "Local",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Men's Casual Dress Shoes - Slip-Resistant Comfortable Walking Sneakers for Business, Office, Travel& Outdoor Training, All-Season Non-Slip Thick-Soled Boots, 7 Sizes Available, Classic Design, Versatile Footwear, Cushioned Insole, Durable Rubber Sole",
                    "sales_tip_text_list": [
                        "3",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "310113461",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6HQL8usf099V4TOJlx6HPb3qkZtbv10JwUvq/bkjFhM2xBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "2301382671694916559",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "310113461",
                        "g": "601103278859219",
                        "scene_id": "3",
                        "show_price": "3979",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "93",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "8744061565917390933",
                        "ts": "1763997832367"
                    },
                    "mall_id": 634418225671337,
                    "sales_num": "3",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601103278859219&_oak_mp_inf=ENPHo5u01ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Facf0f83bf2c54023ba8643b34ff84f35-goods.jpeg&spec_gallery_id=209691513576&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk3OQ&_oak_gallery_order=310113461%2C60777100%2C438542847%2C45076428%2C1189736731",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601103278859219&_oak_mp_inf=ENPHo5u01ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Facf0f83bf2c54023ba8643b34ff84f35-goods.jpeg&spec_gallery_id=209691513576&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk3OQ&_oak_gallery_order=310113461%2C60777100%2C438542847%2C45076428%2C1189736731&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "310113461,60777100,438542847,45076428,1189736731"
                        }
                    },
                    "goods_tags": [],
                    "show_index": 93,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "39",
                            ".79",
                            ""
                        ],
                        "reduction_text": [
                            "-86",
                            "%"
                        ],
                        "price": 3979,
                        "market_price_str": "$299.00",
                        "market_price": 29900,
                        "price_schema": "39.79",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "39.79",
                            ""
                        ],
                        "price_str": "$39.79",
                        "market_price_text": [
                            "$",
                            "299.00",
                            ""
                        ]
                    },
                    "image": {
                        "width": 1024,
                        "id": 209691513576,
                        "url_id": "2301382671694916559",
                        "url": "https://img.kwcdn.com/product/open/acf0f83bf2c54023ba8643b34ff84f35-goods.jpeg",
                        "height": 1024
                    },
                    "sales_tip": "3 sold",
                    "visible": true,
                    "goods_id": 601103278859219,
                    "opt_id": 1546,
                    "seo_link_url": "/men-s-casual-dress-shoes-slip-resistant-comfortable-walking-sneakers-for--travel---non-slip-thick-soled-boots-7-sizes---versatile-footwear-cushioned-insole-durable-rubber-sole-g-601103278859219.html?&_oak_mp_inf=ENPHo5u01ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIqp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Facf0f83bf2c54023ba8643b34ff84f35-goods.jpeg&spec_gallery_id=209691513576&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzk3OQ&_oak_gallery_order=310113461%2C60777100%2C438542847%2C45076428%2C1189736731",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "3",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {},
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/open/2022-09-01/1662005380100-9598e425cd534a3a8c8cd404337be8da-goods.jpeg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-65%"
                    },
                    "item_type": 0,
                    "page_alt": "mens stitched causal   top shoes retro trendy casual shoes with zipper",
                    "current_sku_id": 281474976963658,
                    "tags_info": {
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "ext_map": {
                                    "ranking_list_rich_text": "{\"text_rich\":[{\"type\":0,\"value\":\"TOP RATED\",\"font_size\":12,\"pc_font_size\":14,\"font_color\":\"#0A8800\",\"font_weight\":400,\"padding_end\":3,\"id\":1,\"corner_left_top\":6,\"corner_left_bottom\":0,\"corner_right_top\":0,\"corner_right_bottom\":6,\"start_edge\":3,\"end_edge\":3,\"top_edge\":2,\"bottom_edge\":2},{\"type\":0,\"value\":\"in Men's Loafers & Slip-Ons\",\"font_size\":13,\"pc_font_size\":14,\"font_color\":\"#555555\",\"font_weight\":400,\"id\":2}],\"track\":{\"click\":{\"ranking_type\":\"Top rated\",\"ranking_opt_id\":\"1538\"},\"impr\":{\"ranking_type\":\"Top rated\",\"ranking_opt_id\":\"1538\"}}}"
                                },
                                "prompt_tag_text": "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                                "footer": {
                                    "color": "#555555",
                                    "text": " in Men's Loafers & Slip-Ons",
                                    "font": 14
                                },
                                "marketing_tag_type": 2100,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/goods_details/3a667bf9-184a-4089-9631-4c4c3e6c0c27.png.slim.png",
                                "header": {
                                    "text_style": 2,
                                    "color": "#FFFFFF",
                                    "back_color": "#0A8800",
                                    "text": "TOP RATED",
                                    "font": 12
                                },
                                "tag_id": 91020,
                                "ranking_type": "Top rated",
                                "ranking_id": "1538"
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Men's Mid Top Retro Trendy Casual Shoes with Zipper, Stitched Causal",
                    "sales_tip_text_list": [
                        "18K+",
                        "sold"
                    ],
                    "display_end_time_percent": 83,
                    "sold_quantity_percent": 30,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1410123116",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6HEe07XPggSlcs70KmRounNxkrQ3JHzZXS15Bgg8KMyARBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "4844949712870386054",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "206102703",
                        "g": "6017592186091091",
                        "scene_id": "3",
                        "show_price": "2924",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "94",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "1182706645343605001",
                        "ts": "1763997832367"
                    },
                    "activity_type": 100,
                    "mall_id": 37931616213,
                    "sales_num": "18K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=6017592186091091&_oak_name_id=1182706645343605001&_oak_mp_inf=ENPsnuX9ntgKGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIup27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2022-09-01%2F1662005380100-9598e425cd534a3a8c8cd404337be8da-goods.jpeg&spec_gallery_id=6017592186091091&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjkyNA&_oak_gallery_order=206102703%2C1290734324%2C1814664808%2C513601443%2C430345044",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "support_tag_carousel": true,
                        "detail_id": "112749954015934035",
                        "sku_extra_param": {
                            "_oak_gallery_order": "206102703,1290734324,1814664808,513601443,430345044",
                            "_oak_name_id": "1182706645343605001"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "ext_map": {
                                "ranking_list_rich_text": "{\"text_rich\":[{\"type\":0,\"value\":\"TOP RATED\",\"font_size\":12,\"pc_font_size\":14,\"font_color\":\"#0A8800\",\"font_weight\":400,\"padding_end\":3,\"id\":1,\"corner_left_top\":6,\"corner_left_bottom\":0,\"corner_right_top\":0,\"corner_right_bottom\":6,\"start_edge\":3,\"end_edge\":3,\"top_edge\":2,\"bottom_edge\":2},{\"type\":0,\"value\":\"in Men's Loafers & Slip-Ons\",\"font_size\":13,\"pc_font_size\":14,\"font_color\":\"#555555\",\"font_weight\":400,\"id\":2}],\"track\":{\"click\":{\"ranking_type\":\"Top rated\",\"ranking_opt_id\":\"1538\"},\"impr\":{\"ranking_type\":\"Top rated\",\"ranking_opt_id\":\"1538\"}}}"
                            },
                            "prompt_tag_text": "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                            "footer": {
                                "color": "#555555",
                                "text": " in Men's Loafers & Slip-Ons",
                                "font": 14
                            },
                            "marketing_tag_type": 2100,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/goods_details/3a667bf9-184a-4089-9631-4c4c3e6c0c27.png.slim.png",
                            "header": {
                                "text_style": 2,
                                "color": "#FFFFFF",
                                "back_color": "#0A8800",
                                "text": "TOP RATED",
                                "font": 12
                            },
                            "tag_id": 91020,
                            "ranking_type": "Top rated",
                            "ranking_id": "1538"
                        }
                    ],
                    "show_index": 94,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "29",
                            ".24",
                            ""
                        ],
                        "reduction_text": [
                            "-65",
                            "%"
                        ],
                        "price": 2924,
                        "market_price_str": "$85.41",
                        "market_price": 8541,
                        "price_schema": "29.24",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "29.24",
                            ""
                        ],
                        "price_str": "$29.24",
                        "reduction": 650,
                        "market_price_text": [
                            "$",
                            "85.41",
                            ""
                        ]
                    },
                    "image": {
                        "width": 375,
                        "id": 6017592186091091,
                        "url_id": "4844949712870386054",
                        "url": "https://img.kwcdn.com/product/open/2022-09-01/1662005380100-9598e425cd534a3a8c8cd404337be8da-goods.jpeg",
                        "height": 375
                    },
                    "sales_tip": "18K+ sold",
                    "visible": true,
                    "goods_id": 6017592186091091,
                    "opt_id": 1546,
                    "display_end_time": 1764403199,
                    "seo_link_url": "/mens-stitched-causal--top-shoes-retro-trendy-casual-shoes-with-zipper-g-6017592186091091.html?&_oak_name_id=1182706645343605001&_oak_mp_inf=ENPsnuX9ntgKGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIup27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2022-09-01%2F1662005380100-9598e425cd534a3a8c8cd404337be8da-goods.jpeg&spec_gallery_id=6017592186091091&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjkyNA&_oak_gallery_order=206102703%2C1290734324%2C1814664808%2C513601443%2C430345044",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "18K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.8,
                        "hidden_comment": false,
                        "comment_num_tips": "1,489"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/21a33e1b-ed2e-4c31-8e60-d0dda0ec76a5.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-78%"
                    },
                    "item_type": 0,
                    "page_alt": "mens vintage slip on loafers brown   casual shoes with rubber sole round toe fabric lining for business outdoor and casual attire outdoor footwear vintage loafers durable footwear",
                    "current_sku_id": 17610994805923,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "mall_tag": [
                            {
                                "color": "#000000",
                                "ext_map": {
                                    "brand_info": "{\"brand_name\":\"GEAINO\",\"brand_authorized_type\":2}",
                                    "brand_tag_text_style": "1"
                                },
                                "bg_url": "https://aimg.kwcdn.com/upload_aimg/temu/d9f58cd6-4b52-4932-a295-abc9aae28a87.jpg.slim.jpeg",
                                "marketing_tag_type": 2700,
                                "width": 39,
                                "tag_id": 91007,
                                "text": "Brand: GEAINO",
                                "tag_series": 2,
                                "height": 39
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Men'S Vintage Slip-On Loafers - Brown Faux Casual Shoes with Rubber Sole, Round Toe & Fabric Lining for Business, Outdoor, and Casual Attire, Outdoor Footwear | Vintage Loafers | Durable Footwear",
                    "sales_tip_text_list": [
                        "2",
                        "sold"
                    ],
                    "display_end_time_percent": 83,
                    "sold_quantity_percent": 20,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "1",
                        "mid": "69999906",
                        "final_creative_id": "221168288",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6EOje9xRxyS0Yplj4oSRgMx/Y4t/qWeqE69opcKtguxHhBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "3375203552365120878",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "221168288",
                        "g": "601103674910967",
                        "scene_id": "3",
                        "show_price": "3318",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "95",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "5939503553788325217",
                        "ts": "1763997832367"
                    },
                    "activity_type": 13,
                    "mall_id": 146603178664,
                    "sales_num": "2",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601103674910967&_oak_mp_inf=EPfRkNi11ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIup27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F21a33e1b-ed2e-4c31-8e60-d0dda0ec76a5.jpg&spec_gallery_id=211720915316&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzMxOA&_oak_gallery_order=221168288%2C1187893902%2C1262331881%2C441871994%2C1284266547",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601103674910967&_oak_mp_inf=EPfRkNi11ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIup27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F21a33e1b-ed2e-4c31-8e60-d0dda0ec76a5.jpg&spec_gallery_id=211720915316&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzMxOA&_oak_gallery_order=221168288%2C1187893902%2C1262331881%2C441871994%2C1284266547&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112725752588216567",
                        "sku_extra_param": {
                            "_oak_gallery_order": "221168288,1187893902,1262331881,441871994,1284266547"
                        }
                    },
                    "goods_tags": [],
                    "show_index": 95,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "33",
                            ".18",
                            ""
                        ],
                        "reduction_text": [
                            "-78",
                            "%"
                        ],
                        "price": 3318,
                        "market_price_str": "$152.68",
                        "market_price": 15268,
                        "price_schema": "33.18",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "33.18",
                            ""
                        ],
                        "price_str": "$33.18",
                        "price_color": "#FB7701",
                        "reduction": 780,
                        "market_price_text": [
                            "$",
                            "152.68",
                            ""
                        ]
                    },
                    "image": {
                        "width": 1600,
                        "id": 211720915316,
                        "url_id": "3375203552365120878",
                        "url": "https://img.kwcdn.com/product/fancy/21a33e1b-ed2e-4c31-8e60-d0dda0ec76a5.jpg",
                        "height": 1600
                    },
                    "sales_tip": "2 sold",
                    "visible": true,
                    "goods_id": 601103674910967,
                    "opt_id": 1546,
                    "display_end_time": 1764403199,
                    "seo_link_url": "/mens-vintage-slip-on-loafers-brown--casual-shoes-with-rubber-sole-round-toe-fabric-lining-for-business-outdoor-and-casual-attire-outdoor-footwear-vintage-loafers-durable-footwear-g-601103674910967.html?&_oak_mp_inf=EPfRkNi11ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIup27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F21a33e1b-ed2e-4c31-8e60-d0dda0ec76a5.jpg&spec_gallery_id=211720915316&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzMxOA&_oak_gallery_order=221168288%2C1187893902%2C1262331881%2C441871994%2C1284266547",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "2",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {},
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/fb70735f-caa8-4493-9e80-968ad8f2f72f.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-58%"
                    },
                    "item_type": 0,
                    "page_alt": "mens   slip on loafers breathable canvas upper   md sole with insole round toe   casual walking driving beige minimalist style lightweight slip on shoes   versatile wear lightweight structure casual sneakers",
                    "current_sku_id": 17604939608500,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "4 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 4 left",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "[Breathable Slip-On Loafers] Lightweight & Breathable Men's All-Season Slip-On Loafers | Comfort MD Sole with Insole, Round Toe Design for Business Casual, Walking & Driving | Beige, Minimalist Style, Classic Fit, Versatile Wear, Casual Sneakers",
                    "sales_tip_text_list": [
                        "530",
                        "sold"
                    ],
                    "display_end_time_percent": 78,
                    "sold_quantity_percent": 46,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "730093682",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6G9coc2L7bpRB1Rk0cFFIWAeR+JEeyPXskek+anSfdq1hBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "7957323782606867249",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "730093682",
                        "g": "601102485347280",
                        "scene_id": "3",
                        "show_price": "2721",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "96",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "8630893310443701912",
                        "ts": "1763997832367"
                    },
                    "activity_type": 13,
                    "mall_id": 300586281496,
                    "sales_num": "530",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601102485347280&_oak_name_id=8630893310443701912&_oak_mp_inf=ENC386Cx1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIup27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffb70735f-caa8-4493-9e80-968ad8f2f72f.jpg&spec_gallery_id=601102485347280&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcyMQ&_oak_gallery_order=730093682%2C1402530552%2C972664781%2C1668237288%2C876532348",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601102485347280&_oak_name_id=8630893310443701912&_oak_mp_inf=ENC386Cx1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIup27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffb70735f-caa8-4493-9e80-968ad8f2f72f.jpg&spec_gallery_id=601102485347280&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcyMQ&_oak_gallery_order=730093682%2C1402530552%2C972664781%2C1668237288%2C876532348&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112705968995818448",
                        "sku_extra_param": {
                            "_oak_gallery_order": "730093682,1402530552,972664781,1668237288,876532348",
                            "_oak_name_id": "8630893310443701912"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "4 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 4 left",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 96,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "27",
                            ".21",
                            ""
                        ],
                        "reduction_text": [
                            "-58",
                            "%"
                        ],
                        "price": 2721,
                        "market_price_str": "$65.99",
                        "market_price": 6599,
                        "price_schema": "27.21",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "27.21",
                            ""
                        ],
                        "price_str": "$27.21",
                        "price_color": "#FB7701",
                        "reduction": 580,
                        "market_price_text": [
                            "$",
                            "65.99",
                            ""
                        ]
                    },
                    "image": {
                        "width": 375,
                        "id": 601102485347280,
                        "url_id": "7957323782606867249",
                        "url": "https://img.kwcdn.com/product/fancy/fb70735f-caa8-4493-9e80-968ad8f2f72f.jpg",
                        "height": 375
                    },
                    "sales_tip": "530 sold",
                    "visible": true,
                    "goods_id": 601102485347280,
                    "opt_id": 1546,
                    "display_end_time": 1764575999,
                    "seo_link_url": "/mens--slip-on-loafers-breathable-canvas-upper--md-sole-with-insole-round-toe--casual-walking-driving-beige-minimalist-style-lightweight-slip-on-shoes--versatile-wear-lightweight-structure-casual-sneakers-g-601102485347280.html?&_oak_name_id=8630893310443701912&_oak_mp_inf=ENC386Cx1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIup27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffb70735f-caa8-4493-9e80-968ad8f2f72f.jpg&spec_gallery_id=601102485347280&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjcyMQ&_oak_gallery_order=730093682%2C1402530552%2C972664781%2C1668237288%2C876532348",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "530",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.5,
                        "hidden_comment": true,
                        "comment_num_tips": "12"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/6fff3760-7999-43b0-9f98-f60215a5206b.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": ""
                    },
                    "item_type": 0,
                    "page_alt": "mens slip on loafers slip r   sole soft cushioned insole business formal casual shoes lightweight pu upper non slip rubber outsole   closure   in   office meetings casual attire slip re  work shoes simple elegant design",
                    "current_sku_id": 17599875755856,
                    "tags_info": {},
                    "video": {
                        "video_url": ""
                    },
                    "title": "Black & Brown Men's Slip-On Loafers - Slip Resistant Sole, Soft Cushioned Insole - Business Formal & Casual Shoes - Lightweight PU Upper & Non-Slip Rubber Outsole - Easy Slip-On Closure - Office, Meetings, Casual Attire, Slip Resistant Work Shoes, Simple Elegant Design",
                    "sales_tip_text_list": [
                        "34",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "1",
                        "mid": "69999906",
                        "final_creative_id": "753462555",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6HAIINgTCM3Ib9mU6cxX6pkczjFFYQoBdwRa1bnJQkcwRBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "8599058964403762121",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1845058495",
                        "g": "601101443239141",
                        "scene_id": "3",
                        "show_price": "5210",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "97",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "3868195421241502623",
                        "ts": "1763997832367"
                    },
                    "mall_id": 14300179188,
                    "sales_num": "34",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601101443239141&_oak_name_id=3868195421241502623&_oak_mp_inf=EOWZ%2Fq%2Bt1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIup27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F6fff3760-7999-43b0-9f98-f60215a5206b.jpg&spec_gallery_id=202497305004&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTIxMA&_oak_gallery_order=1845058495%2C722159595%2C776283477%2C148946346%2C733004894",
                    "extend_fields": {
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "1845058495,722159595,776283477,148946346,733004894",
                            "_oak_name_id": "3868195421241502623"
                        }
                    },
                    "goods_tags": [],
                    "show_index": 97,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "52",
                            ".10",
                            ""
                        ],
                        "reduction_text": [],
                        "price": 5210,
                        "price_schema": "52.10",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "52.10",
                            ""
                        ],
                        "price_str": "$52.10"
                    },
                    "image": {
                        "width": 800,
                        "id": 202497305004,
                        "url_id": "8599058964403762121",
                        "url": "https://img.kwcdn.com/product/fancy/6fff3760-7999-43b0-9f98-f60215a5206b.jpg",
                        "height": 800
                    },
                    "sales_tip": "34 sold",
                    "visible": true,
                    "goods_id": 601101443239141,
                    "opt_id": 1546,
                    "seo_link_url": "/mens-slip-on-loafers-slip-resistant-sole-soft-cushioned-insole-business-formal-casual-shoes-lightweight-pu-upper-non-slip-rubber-outsole--closure--in--office-meetings-casual-attire-slip-resistant-work-shoes-simple-elegant-design-g-601101443239141.html?&_oak_name_id=3868195421241502623&_oak_mp_inf=EOWZ%2Fq%2Bt1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIup27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F6fff3760-7999-43b0-9f98-f60215a5206b.jpg&spec_gallery_id=202497305004&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NTIxMA&_oak_gallery_order=1845058495%2C722159595%2C776283477%2C148946346%2C733004894",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "34",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {},
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/271ab47e-6934-4bfb-81ae-2103b8e239d7.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-79%"
                    },
                    "item_type": 0,
                    "page_alt": "mens slip on loafers full grain upper glossy rubber sole black pu cushioned insole   casual business shoes with arch support comfortable round toe design for formal casual attire versatile dress shoes for men durable easy clean slip resistant traction suitable for office semi formal leisure activities     comfy loafer shoes for men sneakers for men high quality men plus size dress shoes sandals for men",
                    "current_sku_id": 17606192974456,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "goods_attributes_tags": [
                            {
                                "text": "Split cow leather"
                            }
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Men's Slip-On Loafers - Full-Grain Upper & Glossy Rubber Sole, Black PU Cushioned Insole, All-Season Casual & Business Shoes with Arch Support, Comfortable Round Toe Design for Formal & Casual Attire - Versatile Dress Shoes for Men, Durable & Easy-Clean, Slip-Resistant Traction, Suitable for Office, Semi-Formal & Leisure Activities, Available Black & Brown, Comfy Loafer Shoes for Men, Sneakers for Men High Quality, Men Plus Size Dress Shoes, Sandals for Men,",
                    "sales_tip_text_list": [
                        "3",
                        "sold"
                    ],
                    "display_end_time_percent": 83,
                    "sold_quantity_percent": 20,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1231954238",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6EcalC7eo9LN2EzECl9fAYsLQYx33GPC3kb/FY8GtS8sBBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "3380621873851346451",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1231954238",
                        "g": "601102746355566",
                        "scene_id": "3",
                        "show_price": "3828",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "98",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "8213730723797470148",
                        "ts": "1763997832367"
                    },
                    "activity_type": 13,
                    "mall_id": 634418211185801,
                    "sales_num": "3",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601102746355566&_oak_name_id=8213730723797470148&_oak_mp_inf=EO6Orp2y1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIup27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F271ab47e-6934-4bfb-81ae-2103b8e239d7.jpg&spec_gallery_id=209104259400&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgyOA&_oak_gallery_order=1231954238%2C587959878%2C883934756%2C119519899%2C2080282345",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601102746355566&_oak_name_id=8213730723797470148&_oak_mp_inf=EO6Orp2y1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIup27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F271ab47e-6934-4bfb-81ae-2103b8e239d7.jpg&spec_gallery_id=209104259400&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgyOA&_oak_gallery_order=1231954238%2C587959878%2C883934756%2C119519899%2C2080282345&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112626791835731822",
                        "sku_extra_param": {
                            "_oak_gallery_order": "1231954238,587959878,883934756,119519899,2080282345",
                            "_oak_name_id": "8213730723797470148"
                        }
                    },
                    "goods_tags": [],
                    "show_index": 98,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "38",
                            ".28",
                            ""
                        ],
                        "reduction_text": [
                            "-79",
                            "%"
                        ],
                        "price": 3828,
                        "market_price_str": "$189.00",
                        "market_price": 18900,
                        "price_schema": "38.28",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "38.28",
                            ""
                        ],
                        "price_str": "$38.28",
                        "price_color": "#FB7701",
                        "reduction": 790,
                        "market_price_text": [
                            "$",
                            "189.00",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 209104259400,
                        "url_id": "3380621873851346451",
                        "url": "https://img.kwcdn.com/product/fancy/271ab47e-6934-4bfb-81ae-2103b8e239d7.jpg",
                        "height": 800
                    },
                    "sales_tip": "3 sold",
                    "visible": true,
                    "goods_id": 601102746355566,
                    "opt_id": 1546,
                    "display_end_time": 1764403199,
                    "seo_link_url": "/mens-slip-on-loafers-full-grain-upper-glossy-rubber-sole-black-pu-cushioned-insole--casual-business-shoes-with-arch-support-comfortable-round-toe-design-for-formal-casual-attire-versatile-dress-shoes-for-men-durable-easy-clean-slip-resistant-traction-suitable-for-office-semi-formal-leisure-activities---comfy-loafer-shoes-for-men-sneakers-for-men-high-quality-men-plus-size-dress-shoes-sandals-for-men-g-601102746355566.html?&_oak_name_id=8213730723797470148&_oak_mp_inf=EO6Orp2y1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIup27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F271ab47e-6934-4bfb-81ae-2103b8e239d7.jpg&spec_gallery_id=209104259400&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzgyOA&_oak_gallery_order=1231954238%2C587959878%2C883934756%2C119519899%2C2080282345",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "3",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {},
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/48ad1e2d-893d-4bcc-ad21-4021427fa0bc.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-60%"
                    },
                    "item_type": 0,
                    "page_alt": "mens summer breathable loafers anti odor hole design lightweight   leather slip on shoes for casual outdoor wear round toe rubber sole solid color spring summer essential summer casual shoes classic slipon shoes durable rubber sole cute shoes",
                    "current_sku_id": 17597462212386,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "goods_attributes_tags": [
                            {
                                "text": "Cow leather"
                            }
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "6 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 6 left",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/c8ae2ed2e2fcd1a2b9db162449ebc7441d69cedf.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/fancy/48ad1e2d-893d-4bcc-ad21-4021427fa0bc.jpg",
                        "url": "https://img.kwcdn.com/product/ef77f2aac4e4573e6ac3969522c98226e0538b26.goods.000001.jpeg"
                    },
                    "title": "Men'S Summer Breathable Loafers - Anti-Odor, Hole Design, Lightweight Faux Leather Slip-On Shoes for Casual & Outdoor Wear, Round Toe, Rubber Sole, Solid Color, Spring/Summer Essential, Summer Casual Shoes | Classic Slipon Shoes | Durable Rubber Sole, Cute Shoes",
                    "sales_tip_text_list": [
                        "251",
                        "sold"
                    ],
                    "display_end_time_percent": 83,
                    "sold_quantity_percent": 50,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1599481262",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6ELNE/z3pPKjKsQhciudvOMD/tTvpBjOvJV6JosSTEl4BBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "2712346078924638940",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1599481262",
                        "g": "601100867793011",
                        "scene_id": "3",
                        "show_price": "2142",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "99",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "6525403063351425494",
                        "ts": "1763997832367"
                    },
                    "activity_type": 13,
                    "mall_id": 634418222271920,
                    "sales_num": "251",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601100867793011&_oak_name_id=6525403063351425494&_oak_mp_inf=EPPgy52r1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F48ad1e2d-893d-4bcc-ad21-4021427fa0bc.jpg&spec_gallery_id=202271284715&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjE0Mg&_oak_gallery_order=1599481262%2C2012382969%2C1859549201%2C1925183751%2C1206712200",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601100867793011&_oak_name_id=6525403063351425494&_oak_mp_inf=EPPgy52r1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F48ad1e2d-893d-4bcc-ad21-4021427fa0bc.jpg&spec_gallery_id=202271284715&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjE0Mg&_oak_gallery_order=1599481262%2C2012382969%2C1859549201%2C1925183751%2C1206712200&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112622432150351987",
                        "sku_extra_param": {
                            "_oak_gallery_order": "1599481262,2012382969,1859549201,1925183751,1206712200",
                            "_oak_name_id": "6525403063351425494"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "6 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 6 left",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 99,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "21",
                            ".42",
                            ""
                        ],
                        "reduction_text": [
                            "-60",
                            "%"
                        ],
                        "price": 2142,
                        "market_price_str": "$53.99",
                        "market_price": 5399,
                        "price_schema": "21.42",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "21.42",
                            ""
                        ],
                        "price_str": "$21.42",
                        "price_color": "#FB7701",
                        "reduction": 600,
                        "market_price_text": [
                            "$",
                            "53.99",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 202271284715,
                        "url_id": "2712346078924638940",
                        "url": "https://img.kwcdn.com/product/fancy/48ad1e2d-893d-4bcc-ad21-4021427fa0bc.jpg",
                        "height": 800
                    },
                    "sales_tip": "251 sold",
                    "visible": true,
                    "goods_id": 601100867793011,
                    "opt_id": 1546,
                    "display_end_time": 1764403199,
                    "seo_link_url": "/mens-summer-breathable-loafers-anti-odor-hole-design-lightweight--leather-slip-on-shoes-for-casual-outdoor-wear-round-toe-rubber-sole-solid-color-spring-summer-essential-summer-casual-shoes-classic-slipon-shoes-durable-rubber-sole-cute-shoes-g-601100867793011.html?&_oak_name_id=6525403063351425494&_oak_mp_inf=EPPgy52r1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F48ad1e2d-893d-4bcc-ad21-4021427fa0bc.jpg&spec_gallery_id=202271284715&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjE0Mg&_oak_gallery_order=1599481262%2C2012382969%2C1859549201%2C1925183751%2C1206712200",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "251",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 5.0,
                        "hidden_comment": true,
                        "comment_num_tips": "3"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/383c1f9f-2c4f-411c-9821-24f2821fde57.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-57%"
                    },
                    "item_type": 0,
                    "page_alt": "mens premium loafers casual slip on shoes with   breathable microfiber lining rubber sole for  ",
                    "current_sku_id": 17592471712553,
                    "tags_info": {
                        "goods_attributes_tags": [
                            {
                                "text": "Cow leather"
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "5 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 5 left",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/95a8ca535f15a5d6ec0fa16d80b40b0880f0b1da.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/fancy/383c1f9f-2c4f-411c-9821-24f2821fde57.jpg",
                        "url": "https://img.kwcdn.com/product/c4af2086c17453c552272e1ac7b3a8f19675466e.goods.000001.jpeg"
                    },
                    "title": "Men's Premium Loafers - Casual Slip-On Shoes with Embossed Design, Breathable Microfiber Lining & Rubber Sole for All Seasons",
                    "sales_tip_text_list": [
                        "2.7K+",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "2050026618",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6E4s+6b+7/4r0x9VmrFXoZ/oTxdtulXRSQSpy/WdMbR0BBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "3211801300399786377",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "2050026618",
                        "g": "601099582453952",
                        "scene_id": "3",
                        "show_price": "10012",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "100",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "4246535024274679109",
                        "ts": "1763997832367"
                    },
                    "mall_id": 50152043580,
                    "sales_num": "2.7K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099582453952&_oak_name_id=4246535024274679109&_oak_mp_inf=EMDx2Lim1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F383c1f9f-2c4f-411c-9821-24f2821fde57.jpg&spec_gallery_id=2211014292&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTAwMTI&_oak_gallery_order=2050026618%2C157922283%2C560846104%2C808862845%2C1279831290",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099582453952&_oak_name_id=4246535024274679109&_oak_mp_inf=EMDx2Lim1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F383c1f9f-2c4f-411c-9821-24f2821fde57.jpg&spec_gallery_id=2211014292&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTAwMTI&_oak_gallery_order=2050026618%2C157922283%2C560846104%2C808862845%2C1279831290&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "2050026618,157922283,560846104,808862845,1279831290",
                            "_oak_name_id": "4246535024274679109"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "5 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 5 left",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 100,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "100",
                            ".12",
                            ""
                        ],
                        "reduction_text": [
                            "-57",
                            "%"
                        ],
                        "price": 10012,
                        "market_price_str": "$237.54",
                        "market_price": 23754,
                        "price_schema": "100.12",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "100.12",
                            ""
                        ],
                        "price_str": "$100.12",
                        "market_price_text": [
                            "$",
                            "237.54",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 2211014292,
                        "url_id": "3211801300399786377",
                        "url": "https://img.kwcdn.com/product/fancy/383c1f9f-2c4f-411c-9821-24f2821fde57.jpg",
                        "height": 800
                    },
                    "sales_tip": "2.7K+ sold",
                    "visible": true,
                    "goods_id": 601099582453952,
                    "opt_id": 1546,
                    "seo_link_url": "/mens-premium-loafers-casual-slip-on-shoes-with--breathable-microfiber-lining-rubber-sole-for--g-601099582453952.html?&_oak_name_id=4246535024274679109&_oak_mp_inf=EMDx2Lim1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F383c1f9f-2c4f-411c-9821-24f2821fde57.jpg&spec_gallery_id=2211014292&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTAwMTI&_oak_gallery_order=2050026618%2C157922283%2C560846104%2C808862845%2C1279831290",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "2.7K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.8,
                        "hidden_comment": false,
                        "comment_num_tips": "50"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/5bba966a-f801-4547-8f6d-e8d267a1003c.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-73%"
                    },
                    "item_type": 0,
                    "page_alt": "mens casual slip on loafers soft microfiber  able tpr sole breathable durable   driving everyday     shoes slipon loafers durable footwear",
                    "current_sku_id": 17592487759306,
                    "tags_info": {
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "6 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 6 left",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Men'S Casual Slip-On Loafers - Soft Microfiber, Comfortable TPR Sole, Breathable & Durable, Perfect for Driving & Everyday Wear, Everyday Comfort Shoes|Slipon Loafers|Durable Footwear",
                    "sales_tip_text_list": [
                        "2.5K+",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1444564156",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6GfBr9n88oT2KQJGLNNpshtQZhZy6i5TBpjWZEWsMKY/BBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "5716113691410462544",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1444564156",
                        "g": "601099587135637",
                        "scene_id": "3",
                        "show_price": "1154",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "101",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "3741516892712071776",
                        "ts": "1763997832367"
                    },
                    "mall_id": 634418213469535,
                    "sales_num": "2.5K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099587135637&_oak_name_id=3741516892712071776&_oak_mp_inf=EJXR9rqm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F5bba966a-f801-4547-8f6d-e8d267a1003c.jpg&spec_gallery_id=2266418463&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTE1NA&_oak_gallery_order=1444564156%2C980059001%2C296246495%2C1946573983",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099587135637&_oak_name_id=3741516892712071776&_oak_mp_inf=EJXR9rqm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F5bba966a-f801-4547-8f6d-e8d267a1003c.jpg&spec_gallery_id=2266418463&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTE1NA&_oak_gallery_order=1444564156%2C980059001%2C296246495%2C1946573983&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "1444564156,980059001,296246495,1946573983",
                            "_oak_name_id": "3741516892712071776"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "6 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 6 left",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 101,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "11",
                            ".54",
                            ""
                        ],
                        "reduction_text": [
                            "-73",
                            "%"
                        ],
                        "price": 1154,
                        "market_price_str": "$43.66",
                        "market_price": 4366,
                        "price_schema": "11.54",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "11.54",
                            ""
                        ],
                        "price_str": "$11.54",
                        "market_price_text": [
                            "$",
                            "43.66",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 2266418463,
                        "url_id": "5716113691410462544",
                        "url": "https://img.kwcdn.com/product/fancy/5bba966a-f801-4547-8f6d-e8d267a1003c.jpg",
                        "height": 800
                    },
                    "sales_tip": "2.5K+ sold",
                    "visible": true,
                    "goods_id": 601099587135637,
                    "opt_id": 1546,
                    "seo_link_url": "/mens-casual-slip-on-loafers-soft-microfiber-able-tpr-sole-breathable-durable--driving-everyday---shoes-slipon-loafers-durable-footwear-g-601099587135637.html?&_oak_name_id=3741516892712071776&_oak_mp_inf=EJXR9rqm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F5bba966a-f801-4547-8f6d-e8d267a1003c.jpg&spec_gallery_id=2266418463&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTE1NA&_oak_gallery_order=1444564156%2C980059001%2C296246495%2C1946573983",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "2.5K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.7,
                        "hidden_comment": true,
                        "comment_num_tips": "42"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/beee16cb-5b6c-405e-a54e-b53654f769c0.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-13%"
                    },
                    "item_type": 0,
                    "page_alt": "mens genuine leather slip on loafers   casual shoes with arch support   outdoor trekking office daily walking shoes round toe tpr hiking outdoor footwear hiking footwear   durable footwear",
                    "current_sku_id": 17599453991289,
                    "tags_info": {
                        "goods_attributes_tags": [
                            {
                                "text": "Cow leather"
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "4 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 4 left",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/06179733eaf45c26355ba36d0a7f2163373979a6.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/fancy/beee16cb-5b6c-405e-a54e-b53654f769c0.jpg",
                        "url": "https://img.kwcdn.com/product/ec1ded7d65c2ceaf9b1f6cb8a398ec80b06ab251.goods.000001.jpeg"
                    },
                    "title": "Men'S Genuine Leather Slip-On Loafers - Breathable Comfort Casual Shoes with Arch Support, All-Season Outdoor Trekking, Office & Daily Walking Shoes - Round Toe TPR, Hiking & Outdoor Footwear, Hiking Footwear, Minimalist Design, Durable Footwear",
                    "sales_tip_text_list": [
                        "481",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "1",
                        "mid": "69999906",
                        "final_creative_id": "1436565730",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6F3CfxBPlWXLnrO9cH9DYcVe22/PjEzwbIixTDYWISq3RBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "4271920027510741266",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1436565730",
                        "g": "601101355939584",
                        "scene_id": "3",
                        "show_price": "3579",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "102",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "1445268931040212672",
                        "ts": "1763997832367"
                    },
                    "mall_id": 634418214479537,
                    "sales_num": "481",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601101355939584&_oak_name_id=1445268931040212672&_oak_mp_inf=EIDurYat1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbeee16cb-5b6c-405e-a54e-b53654f769c0.jpg&spec_gallery_id=601101355939584&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzU3OQ&_oak_gallery_order=1436565730%2C1178371965%2C1141535536%2C477952416%2C830033072",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601101355939584&_oak_name_id=1445268931040212672&_oak_mp_inf=EIDurYat1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbeee16cb-5b6c-405e-a54e-b53654f769c0.jpg&spec_gallery_id=601101355939584&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzU3OQ&_oak_gallery_order=1436565730%2C1178371965%2C1141535536%2C477952416%2C830033072&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "1436565730,1178371965,1141535536,477952416,830033072",
                            "_oak_name_id": "1445268931040212672"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "4 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 4 left",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 102,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "35",
                            ".79",
                            ""
                        ],
                        "reduction_text": [
                            "-13",
                            "%"
                        ],
                        "price": 3579,
                        "market_price_str": "$41.53",
                        "market_price": 4153,
                        "price_schema": "35.79",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "35.79",
                            ""
                        ],
                        "price_str": "$35.79",
                        "market_price_text": [
                            "$",
                            "41.53",
                            ""
                        ]
                    },
                    "image": {
                        "width": 375,
                        "id": 601101355939584,
                        "url_id": "4271920027510741266",
                        "url": "https://img.kwcdn.com/product/fancy/beee16cb-5b6c-405e-a54e-b53654f769c0.jpg",
                        "height": 375
                    },
                    "sales_tip": "481 sold",
                    "visible": true,
                    "goods_id": 601101355939584,
                    "opt_id": 1546,
                    "seo_link_url": "/mens-genuine--leather-slip-on-loafers-slip-resistant-tpr-sole----for-outdoor-hiking-casual-wear-durable-easy-clean-round-toe-fabric-lining-everyday-shoes-sleek-style-soft-texture-versatile-footwear--minimalist-style-durable-construction-slipon-shoes-urban--g-601101355939584.html?&_oak_name_id=1445268931040212672&_oak_mp_inf=EIDurYat1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbeee16cb-5b6c-405e-a54e-b53654f769c0.jpg&spec_gallery_id=601101355939584&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzU3OQ&_oak_gallery_order=1436565730%2C1178371965%2C1141535536%2C477952416%2C830033072",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "481",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.0,
                        "hidden_comment": true,
                        "comment_num_tips": "1"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/ab0b5f3b-223e-484a-83cd-253bb42d1eae.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-33%"
                    },
                    "item_type": 0,
                    "page_alt": "mens street   match casual shoes comfortable thin soled non slip loafers",
                    "current_sku_id": 17592821235610,
                    "tags_info": {
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "9 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 9 left",
                                "tag_series": 2
                            },
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "ext_map": {
                                    "ranking_list_rich_text": "{\"text_rich\":[{\"type\":0,\"value\":\"BEST-SELLING ITEM\",\"font_size\":12,\"pc_font_size\":14,\"font_color\":\"#0A8800\",\"font_weight\":400,\"padding_end\":3,\"id\":1,\"corner_left_top\":6,\"corner_left_bottom\":0,\"corner_right_top\":0,\"corner_right_bottom\":6,\"start_edge\":3,\"end_edge\":3,\"top_edge\":2,\"bottom_edge\":2},{\"type\":0,\"value\":\"in Men's Loafers & Slip-Ons in Black\",\"font_size\":13,\"pc_font_size\":14,\"font_color\":\"#555555\",\"font_weight\":400,\"id\":2}],\"track\":{\"click\":{\"ranking_type\":\"Best sellers\",\"ranking_opt_id\":\"1538\"},\"impr\":{\"ranking_type\":\"Best sellers\",\"ranking_opt_id\":\"1538\"}}}"
                                },
                                "prompt_tag_text": "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                                "footer": {
                                    "color": "#555555",
                                    "text": " in Men's Loafers & Slip-Ons in Black",
                                    "font": 14
                                },
                                "marketing_tag_type": 2100,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/goods_details/3a667bf9-184a-4089-9631-4c4c3e6c0c27.png.slim.png",
                                "header": {
                                    "text_style": 2,
                                    "color": "#FFFFFF",
                                    "back_color": "#0A8800",
                                    "text": "BEST-SELLING ITEM",
                                    "font": 12
                                },
                                "tag_id": 91020,
                                "ranking_type": "Best sellers",
                                "ranking_id": "1538"
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/9637398e2d8deab93247ee97795c9a56a2bc8eb9gs2CV.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/fancy/ab0b5f3b-223e-484a-83cd-253bb42d1eae.jpg",
                        "url": "https://img.kwcdn.com/product/42a7559b5b651a06ea8299b3fe072c1cd4dbfa4c.temu.000001.jpeg"
                    },
                    "title": "Men'S Street Fashion All-Match Casual Shoes Comfortable Thin-Soled Non-Slip Loafers",
                    "sales_tip_text_list": [
                        "4.7K+",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1663333872",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eEx6+IGEUz7YAS77MYvhhyQqdz+jh+aW/BD7CsBAsO1j+TmNI5ugO/pL+fPsLTTtMxBnGEgiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "4600506477641084809",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1663333872",
                        "g": "601099676706562",
                        "scene_id": "3",
                        "show_price": "2753",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "103",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "1002240691082443221",
                        "ts": "1763997832367"
                    },
                    "mall_id": 634418213604282,
                    "sales_num": "4.7K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099676706562&_oak_name_id=1002240691082443221&_oak_mp_inf=EILO0eWm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fab0b5f3b-223e-484a-83cd-253bb42d1eae.jpg&spec_gallery_id=2457983046&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc1Mw&_oak_gallery_order=1663333872%2C1286627028",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099676706562&_oak_name_id=1002240691082443221&_oak_mp_inf=EILO0eWm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fab0b5f3b-223e-484a-83cd-253bb42d1eae.jpg&spec_gallery_id=2457983046&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc1Mw&_oak_gallery_order=1663333872%2C1286627028&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "1663333872,1286627028",
                            "_oak_name_id": "1002240691082443221"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "9 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 9 left",
                            "tag_series": 2
                        },
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "ext_map": {
                                "ranking_list_rich_text": "{\"text_rich\":[{\"type\":0,\"value\":\"BEST-SELLING ITEM\",\"font_size\":12,\"pc_font_size\":14,\"font_color\":\"#0A8800\",\"font_weight\":400,\"padding_end\":3,\"id\":1,\"corner_left_top\":6,\"corner_left_bottom\":0,\"corner_right_top\":0,\"corner_right_bottom\":6,\"start_edge\":3,\"end_edge\":3,\"top_edge\":2,\"bottom_edge\":2},{\"type\":0,\"value\":\"in Men's Loafers & Slip-Ons in Black\",\"font_size\":13,\"pc_font_size\":14,\"font_color\":\"#555555\",\"font_weight\":400,\"id\":2}],\"track\":{\"click\":{\"ranking_type\":\"Best sellers\",\"ranking_opt_id\":\"1538\"},\"impr\":{\"ranking_type\":\"Best sellers\",\"ranking_opt_id\":\"1538\"}}}"
                            },
                            "prompt_tag_text": "Best-Selling Item means that this product has ranked among the top-selling products in its product category over the past 14 days. The products are ranked within each category using a combination of factors including sales and the number of buyers.",
                            "footer": {
                                "color": "#555555",
                                "text": " in Men's Loafers & Slip-Ons in Black",
                                "font": 14
                            },
                            "marketing_tag_type": 2100,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/goods_details/3a667bf9-184a-4089-9631-4c4c3e6c0c27.png.slim.png",
                            "header": {
                                "text_style": 2,
                                "color": "#FFFFFF",
                                "back_color": "#0A8800",
                                "text": "BEST-SELLING ITEM",
                                "font": 12
                            },
                            "tag_id": 91020,
                            "ranking_type": "Best sellers",
                            "ranking_id": "1538"
                        }
                    ],
                    "show_index": 103,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "27",
                            ".53",
                            ""
                        ],
                        "reduction_text": [
                            "-33",
                            "%"
                        ],
                        "price": 2753,
                        "market_price_str": "$41.39",
                        "market_price": 4139,
                        "price_schema": "27.53",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "27.53",
                            ""
                        ],
                        "price_str": "$27.53",
                        "market_price_text": [
                            "$",
                            "41.39",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 2457983046,
                        "url_id": "4600506477641084809",
                        "url": "https://img.kwcdn.com/product/fancy/ab0b5f3b-223e-484a-83cd-253bb42d1eae.jpg",
                        "height": 800
                    },
                    "sales_tip": "4.7K+ sold",
                    "visible": true,
                    "goods_id": 601099676706562,
                    "opt_id": 1546,
                    "seo_link_url": "/mens-street--match-casual-shoes-comfortable-thin-soled-non-slip-loafers-g-601099676706562.html?&_oak_name_id=1002240691082443221&_oak_mp_inf=EILO0eWm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fab0b5f3b-223e-484a-83cd-253bb42d1eae.jpg&spec_gallery_id=2457983046&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjc1Mw&_oak_gallery_order=1663333872%2C1286627028",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "4.7K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.9,
                        "hidden_comment": false,
                        "comment_num_tips": "402"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/b37e463c-9239-4cb3-8ec7-3b5174b9de66.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-68%"
                    },
                    "item_type": 0,
                    "page_alt": "mens genuine leather slip on loafers british style moccasin s brown   tan   round toe business casual formal wear elastic closure durable pu rubber sole versatile driving shoes",
                    "current_sku_id": 17592452658216,
                    "tags_info": {
                        "goods_attributes_tags": [
                            {
                                "text": "Split cow leather"
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "9 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 9 left",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Men's Genuine Leather Slip-On Loafers - British Style Moccasin s, Brown (Dark/Black/Tan) - All-Season Round Toe Business Casual & Formal Wear, Elastic Closure, Durable PU & Rubber Sole - Versatile Driving Shoes",
                    "sales_tip_text_list": [
                        "3K+",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1269750255",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6EXvVTxMfEi0jRofVWJU4rvDwwKYUeI4dVqQfbo8qoI6RBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "1161037117555797321",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1269750255",
                        "g": "601099549294711",
                        "scene_id": "3",
                        "show_price": "2931",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "104",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "2712015574456139698",
                        "ts": "1763997832367"
                    },
                    "mall_id": 634418213396375,
                    "sales_num": "3K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099549294711&_oak_name_id=2712015574456139698&_oak_mp_inf=EPeA8aim1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fb37e463c-9239-4cb3-8ec7-3b5174b9de66.jpg&spec_gallery_id=601099549294711&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk5OA&_oak_gallery_order=1269750255%2C1647780920%2C1404959681%2C665373960%2C229846835",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "market_map": {
                            "220001": {
                                "showTag": false,
                                "couponBatchSn": "",
                                "marketingToolType": 220001,
                                "endTime": 1764345599000,
                                "savingPrice": 67,
                                "appliedPrice": true,
                                "promotionId": "A00049C-4697535886324223895175924526582160"
                            }
                        },
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099549294711&_oak_name_id=2712015574456139698&_oak_mp_inf=EPeA8aim1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fb37e463c-9239-4cb3-8ec7-3b5174b9de66.jpg&spec_gallery_id=601099549294711&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk5OA&_oak_gallery_order=1269750255%2C1647780920%2C1404959681%2C665373960%2C229846835&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "1269750255,1647780920,1404959681,665373960,229846835",
                            "_oak_name_id": "2712015574456139698"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "9 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 9 left",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 104,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "29",
                            ".31",
                            ""
                        ],
                        "reduction_text": [
                            "-68",
                            "%"
                        ],
                        "price": 2931,
                        "market_price_str": "$94.26",
                        "market_price": 9426,
                        "price_schema": "$29.31",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "29.31",
                            ""
                        ],
                        "price_str": "$29.31",
                        "price_color": "#000000",
                        "reduction": 689,
                        "market_price_text": [
                            "$",
                            "94.26",
                            ""
                        ]
                    },
                    "image": {
                        "width": 375,
                        "id": 601099549294711,
                        "url_id": "1161037117555797321",
                        "url": "https://img.kwcdn.com/product/fancy/b37e463c-9239-4cb3-8ec7-3b5174b9de66.jpg",
                        "height": 375
                    },
                    "sales_tip": "3K+ sold",
                    "visible": true,
                    "goods_id": 601099549294711,
                    "opt_id": 1546,
                    "seo_link_url": "/mens-slip-on-loafers-genuine-leather-business-casual-shoes-with-metallic--accent-lightweight--round-toe-design-rubber-sole-for-office-driving-daily-wear-dressy-shoes-g-601099549294711.html?&_oak_name_id=2712015574456139698&_oak_mp_inf=EPeA8aim1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fb37e463c-9239-4cb3-8ec7-3b5174b9de66.jpg&spec_gallery_id=601099549294711&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjk5OA&_oak_gallery_order=1269750255%2C1647780920%2C1404959681%2C665373960%2C229846835",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "3K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.8,
                        "hidden_comment": false,
                        "comment_num_tips": "91"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/a365cfc6-a39b-4fe2-9773-ca96a3046a16.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": ""
                    },
                    "item_type": 0,
                    "page_alt": "xdj8788 mens slip on loafers slip resistant sole cushioned insole formal casual shoes   everyday special occasion footwear easy clean like upper",
                    "current_sku_id": 17602420937867,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "XDJ8788 Men's Slip-On Loafers - Slip-Resistant Sole, Cushioned Insole - Formal & Casual Shoes - All-Season Everyday & Special Occasion Footwear - Easy-Clean -like Upper -",
                    "sales_tip_text_list": [
                        "21",
                        "sold"
                    ],
                    "display_end_time_percent": 9,
                    "sold_quantity_percent": 1,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "1",
                        "mid": "69999906",
                        "final_creative_id": "1952515522",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6HGf5uprQju/wyK7AzmwpMuTnns/2TyzWyjsnRINMtFpxBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "6973915117045920887",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1952515522",
                        "g": "601101983152341",
                        "scene_id": "3",
                        "show_price": "4811",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "105",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "4356616114472338957",
                        "ts": "1763997832367"
                    },
                    "activity_type": 27,
                    "mall_id": 634418219101899,
                    "sales_num": "21",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601101983152341&_oak_name_id=4356616114472338957&_oak_mp_inf=ENXxt7Gv1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa365cfc6-a39b-4fe2-9773-ca96a3046a16.jpg&spec_gallery_id=204273990755&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDgxMQ&_oak_gallery_order=1952515522%2C1965073006%2C788080781%2C1506030126%2C385464189",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601101983152341&_oak_name_id=4356616114472338957&_oak_mp_inf=ENXxt7Gv1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa365cfc6-a39b-4fe2-9773-ca96a3046a16.jpg&spec_gallery_id=204273990755&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDgxMQ&_oak_gallery_order=1952515522%2C1965073006%2C788080781%2C1506030126%2C385464189&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112732359397210325",
                        "sku_extra_param": {
                            "_oak_gallery_order": "1952515522,1965073006,788080781,1506030126,385464189",
                            "_oak_name_id": "4356616114472338957"
                        }
                    },
                    "goods_tags": [],
                    "show_index": 105,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "48",
                            ".11",
                            ""
                        ],
                        "reduction_text": [],
                        "price": 4811,
                        "price_schema": "48.11",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "48.11",
                            ""
                        ],
                        "price_str": "$48.11",
                        "price_color": "#D9001B"
                    },
                    "image": {
                        "width": 800,
                        "id": 204273990755,
                        "url_id": "6973915117045920887",
                        "url": "https://img.kwcdn.com/product/fancy/a365cfc6-a39b-4fe2-9773-ca96a3046a16.jpg",
                        "height": 800
                    },
                    "sales_tip": "21 sold",
                    "visible": true,
                    "goods_id": 601101983152341,
                    "opt_id": 1546,
                    "display_end_time": 1765094399,
                    "seo_link_url": "/xdj8788-mens-slip-on-loafers-slip-resistant-sole-cushioned-insole-formal-casual-shoes--everyday-special-occasion-footwear-easy-clean-like-upper-g-601101983152341.html?&_oak_name_id=4356616114472338957&_oak_mp_inf=ENXxt7Gv1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fa365cfc6-a39b-4fe2-9773-ca96a3046a16.jpg&spec_gallery_id=204273990755&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=NDgxMQ&_oak_gallery_order=1952515522%2C1965073006%2C788080781%2C1506030126%2C385464189",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "21",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {},
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/2bcbfa95-ede7-4a55-9a70-8d1a7013f08f.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-58%"
                    },
                    "item_type": 0,
                    "page_alt": "mens vintage style slip on loafers solid color microfiber synthetic upper with rubber sole round toe casual business       dark brown options decorative   strap design retro   comfortable pu insole versatile for semi formal and casual occasions",
                    "current_sku_id": 17592299043032,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "8 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 8 left",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/03cf857aa656735d29b59f807a3e1501135c7935.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/fancy/2bcbfa95-ede7-4a55-9a70-8d1a7013f08f.jpg",
                        "url": "https://img.kwcdn.com/product/39aa61773f3676eb467e90d7387e1aaf02e3fc3e.goods.000001.jpeg"
                    },
                    "title": "BACK VUITN Men's Slip-On Loafers - Solid Color Retro Business Casual, Round Toe All-Season Sneakes with  Upper & Cushioned  Insole, Slip-Resistant Rubber Sole for Office, Semi-Formal Wear (/Navy//Grey)",
                    "sales_tip_text_list": [
                        "5K+",
                        "sold"
                    ],
                    "display_end_time_percent": 83,
                    "sold_quantity_percent": 0,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "1",
                        "mid": "69999906",
                        "final_creative_id": "1893516960",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6F5J3u3g6cp4CBTwdhmVQNXOrMiIEm7+hZ7Z+5qBb3zRBBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "2948147926433309739",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1893516960",
                        "g": "601099536135570",
                        "scene_id": "3",
                        "show_price": "2898",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "106",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "3348498599302695843",
                        "ts": "1763997832368"
                    },
                    "activity_type": 13,
                    "mall_id": 634418211113433,
                    "sales_num": "5K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099536135570&_oak_mp_inf=EJLrzaKm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2bcbfa95-ede7-4a55-9a70-8d1a7013f08f.jpg&spec_gallery_id=2095987316&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjg5OA&_oak_gallery_order=1893516960%2C30962603%2C1629139169%2C342584634%2C1863406440",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099536135570&_oak_mp_inf=EJLrzaKm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2bcbfa95-ede7-4a55-9a70-8d1a7013f08f.jpg&spec_gallery_id=2095987316&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjg5OA&_oak_gallery_order=1893516960%2C30962603%2C1629139169%2C342584634%2C1863406440&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112745545894688146",
                        "sku_extra_param": {
                            "_oak_gallery_order": "1893516960,30962603,1629139169,342584634,1863406440"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "8 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 8 left",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 106,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "28",
                            ".98",
                            ""
                        ],
                        "reduction_text": [
                            "-58",
                            "%"
                        ],
                        "price": 2898,
                        "market_price_str": "$69.99",
                        "market_price": 6999,
                        "price_schema": "28.98",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "28.98",
                            ""
                        ],
                        "price_str": "$28.98",
                        "price_color": "#FB7701",
                        "reduction": 580,
                        "market_price_text": [
                            "$",
                            "69.99",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 2095987316,
                        "url_id": "2948147926433309739",
                        "url": "https://img.kwcdn.com/product/fancy/2bcbfa95-ede7-4a55-9a70-8d1a7013f08f.jpg",
                        "height": 800
                    },
                    "sales_tip": "5K+ sold",
                    "visible": true,
                    "goods_id": 601099536135570,
                    "opt_id": 1546,
                    "display_end_time": 1764403199,
                    "seo_link_url": "/mens-vintage-style-slip-on-loafers-solid-color-microfiber-synthetic-upper-with-rubber-sole-round-toe-casual-business----dark-brown-options-decorative--strap-design-retro--comfortable-pu-insole-versatile-for-semi-formal-and-casual-occasions-g-601099536135570.html?&_oak_mp_inf=EJLrzaKm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4IIyp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F2bcbfa95-ede7-4a55-9a70-8d1a7013f08f.jpg&spec_gallery_id=2095987316&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mjg5OA&_oak_gallery_order=1893516960%2C30962603%2C1629139169%2C342584634%2C1863406440",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "5K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.8,
                        "hidden_comment": false,
                        "comment_num_tips": "142"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/38e9efee-f396-46b5-9fd7-05e6920cf267.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-79%"
                    },
                    "item_type": 0,
                    "page_alt": "mens   slip on loafers durable non slip outdoor shoes for   wear   and autumn dressy shoes",
                    "current_sku_id": 17592437309973,
                    "tags_info": {
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "4 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 4 left",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/5001052717f39984df20c3b05b2c277a65e2e96c.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/fancy/38e9efee-f396-46b5-9fd7-05e6920cf267.jpg",
                        "url": "https://img.kwcdn.com/product/aa0da7b17b13a9bdf03d9edf688d37a69a660dc8.goods.000001.jpeg"
                    },
                    "title": "Men's All-Season Slip-On Loafers, Durable Non-Slip Outdoor Shoes for Daily Office Wear in Spring and Autumn, Dressy Shoes",
                    "sales_tip_text_list": [
                        "2.4K+",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1106767621",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6EuIkNqjp0abxIaItOudh5+dMs3Y5jjotOTKKbwUtT0sBBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "5554081500106579151",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1414444631",
                        "g": "601099572700370",
                        "scene_id": "3",
                        "show_price": "3663",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "107",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "4162303755764983025",
                        "ts": "1763997832368"
                    },
                    "mall_id": 634418212533941,
                    "sales_num": "2.4K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099572700370&_oak_name_id=4162303755764983025&_oak_mp_inf=ENLJhbSm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F38e9efee-f396-46b5-9fd7-05e6920cf267.jpg&spec_gallery_id=2136064175&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY2Mw&_oak_gallery_order=1414444631%2C202613%2C913348493%2C1051433855%2C1977466044",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099572700370&_oak_name_id=4162303755764983025&_oak_mp_inf=ENLJhbSm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F38e9efee-f396-46b5-9fd7-05e6920cf267.jpg&spec_gallery_id=2136064175&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY2Mw&_oak_gallery_order=1414444631%2C202613%2C913348493%2C1051433855%2C1977466044&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "1414444631,202613,913348493,1051433855,1977466044",
                            "_oak_name_id": "4162303755764983025"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "4 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 4 left",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 107,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "36",
                            ".63",
                            ""
                        ],
                        "reduction_text": [
                            "-79",
                            "%"
                        ],
                        "price": 3663,
                        "market_price_str": "$179.00",
                        "market_price": 17900,
                        "price_schema": "36.63",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "36.63",
                            ""
                        ],
                        "price_str": "$36.63",
                        "market_price_text": [
                            "$",
                            "179.00",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 2136064175,
                        "url_id": "5554081500106579151",
                        "url": "https://img.kwcdn.com/product/fancy/38e9efee-f396-46b5-9fd7-05e6920cf267.jpg",
                        "height": 800
                    },
                    "sales_tip": "2.4K+ sold",
                    "visible": true,
                    "goods_id": 601099572700370,
                    "opt_id": 1546,
                    "seo_link_url": "/mens--slip-on-loafers-durable-non-slip-outdoor-shoes-for--wear--and-autumn-dressy-shoes-g-601099572700370.html?&_oak_name_id=4162303755764983025&_oak_mp_inf=ENLJhbSm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F38e9efee-f396-46b5-9fd7-05e6920cf267.jpg&spec_gallery_id=2136064175&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzY2Mw&_oak_gallery_order=1414444631%2C202613%2C913348493%2C1051433855%2C1977466044",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "2.4K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.6,
                        "hidden_comment": false,
                        "comment_num_tips": "74"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/1d65867038/65d887a6-657b-490b-8fdf-93dac2d32c13_800x800.jpeg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-69%"
                    },
                    "item_type": 0,
                    "page_alt": "  mens slip on loafers genuine like upper second layer cowhide pu cushioned insole rubber sole   black round toe s for business casual office semi formal wear comfortable loafers no",
                    "current_sku_id": 17592196860632,
                    "tags_info": {
                        "goods_attributes_tags": [
                            {
                                "text": "Split cow leather"
                            }
                        ],
                        "mall_tag": [
                            {
                                "color": "#FFEFD3",
                                "ext_map": {
                                    "brand_info": "{\"brand_name\":\"CLOHOO\",\"brand_authorized_type\":2}",
                                    "brand_tag_text_style": "1"
                                },
                                "bg_url": "https://aimg.kwcdn.com/upload_aimg/aftersales/f3dba53e-2a7c-4ae2-acf5-6cf50fd53c15.png",
                                "marketing_tag_type": 2700,
                                "width": 39,
                                "tag_id": 91007,
                                "text": "Brand Official Store: CLOHOO",
                                "tag_series": 2,
                                "url": "https://aimg.kwcdn.com/upload_aimg/aftersales/efb13335-b6b6-4984-af7d-a48dbaccb830.png",
                                "height": 39
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "7 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 7 left",
                                "tag_series": 2
                            },
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "ext_map": {
                                    "ranking_list_rich_text": "{\"text_rich\":[{\"type\":0,\"value\":\"TOP RATED\",\"font_size\":12,\"pc_font_size\":14,\"font_color\":\"#0A8800\",\"font_weight\":400,\"padding_end\":3,\"id\":1,\"corner_left_top\":6,\"corner_left_bottom\":0,\"corner_right_top\":0,\"corner_right_bottom\":6,\"start_edge\":3,\"end_edge\":3,\"top_edge\":2,\"bottom_edge\":2},{\"type\":0,\"value\":\"in Men's Loafers & Slip-Ons\",\"font_size\":13,\"pc_font_size\":14,\"font_color\":\"#555555\",\"font_weight\":400,\"id\":2}],\"track\":{\"click\":{\"ranking_type\":\"Top rated\",\"ranking_opt_id\":\"1538\"},\"impr\":{\"ranking_type\":\"Top rated\",\"ranking_opt_id\":\"1538\"}}}"
                                },
                                "prompt_tag_text": "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                                "footer": {
                                    "color": "#555555",
                                    "text": " in Men's Loafers & Slip-Ons",
                                    "font": 14
                                },
                                "marketing_tag_type": 2100,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/goods_details/3a667bf9-184a-4089-9631-4c4c3e6c0c27.png.slim.png",
                                "header": {
                                    "text_style": 2,
                                    "color": "#FFFFFF",
                                    "back_color": "#0A8800",
                                    "text": "TOP RATED",
                                    "font": 12
                                },
                                "tag_id": 91020,
                                "ranking_type": "Top rated",
                                "ranking_id": "1538"
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/d5992364efa57c1e4990b4aa30b35c22bf7f0bbe.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/1d65867038/65d887a6-657b-490b-8fdf-93dac2d32c13_800x800.jpeg",
                        "url": "https://img.kwcdn.com/product/e84e07e4adb2d43ee34df4f4a52c8dd05429455b.goods.000001.jpeg"
                    },
                    "title": "CLOHOO Men's Slip-On Loafers - Genuine -like Upper (Second-Layer Cowhide), PU Cushioned Insole & Rubber Sole, All-Season Black Round-Toe s for Business Casual, Office, Semi-Formal Wear - Comfortable Loafers (No",
                    "sales_tip_text_list": [
                        "47K+",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "16173748",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6Gj8CTGEBzZG80+S6wmT05vTc0FU7rtntLv/jzRjXoOFBBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "6593584948434241791",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "16173748",
                        "g": "601099512353888",
                        "scene_id": "3",
                        "show_price": "2149",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "108",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "681498097741551203",
                        "ts": "1763997832368"
                    },
                    "mall_id": 125534834472,
                    "sales_num": "47K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099512353888&_oak_name_id=681498097741551203&_oak_mp_inf=EOCoopem1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2F1d65867038%2F65d887a6-657b-490b-8fdf-93dac2d32c13_800x800.jpeg&spec_gallery_id=601099512353888&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjE0OQ&_oak_gallery_order=16173748%2C110415931%2C1149334431%2C1291906846%2C1386287712",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099512353888&_oak_name_id=681498097741551203&_oak_mp_inf=EOCoopem1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2F1d65867038%2F65d887a6-657b-490b-8fdf-93dac2d32c13_800x800.jpeg&spec_gallery_id=601099512353888&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjE0OQ&_oak_gallery_order=16173748%2C110415931%2C1149334431%2C1291906846%2C1386287712&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "16173748,110415931,1149334431,1291906846,1386287712",
                            "_oak_name_id": "681498097741551203"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "7 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 7 left",
                            "tag_series": 2
                        },
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "ext_map": {
                                "ranking_list_rich_text": "{\"text_rich\":[{\"type\":0,\"value\":\"TOP RATED\",\"font_size\":12,\"pc_font_size\":14,\"font_color\":\"#0A8800\",\"font_weight\":400,\"padding_end\":3,\"id\":1,\"corner_left_top\":6,\"corner_left_bottom\":0,\"corner_right_top\":0,\"corner_right_bottom\":6,\"start_edge\":3,\"end_edge\":3,\"top_edge\":2,\"bottom_edge\":2},{\"type\":0,\"value\":\"in Men's Loafers & Slip-Ons\",\"font_size\":13,\"pc_font_size\":14,\"font_color\":\"#555555\",\"font_weight\":400,\"id\":2}],\"track\":{\"click\":{\"ranking_type\":\"Top rated\",\"ranking_opt_id\":\"1538\"},\"impr\":{\"ranking_type\":\"Top rated\",\"ranking_opt_id\":\"1538\"}}}"
                            },
                            "prompt_tag_text": "Top Rated means that this product has an average rating of 4 stars or above. The products are ranked within each category based on factors including sales and number of buyers.",
                            "footer": {
                                "color": "#555555",
                                "text": " in Men's Loafers & Slip-Ons",
                                "font": 14
                            },
                            "marketing_tag_type": 2100,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/goods_details/3a667bf9-184a-4089-9631-4c4c3e6c0c27.png.slim.png",
                            "header": {
                                "text_style": 2,
                                "color": "#FFFFFF",
                                "back_color": "#0A8800",
                                "text": "TOP RATED",
                                "font": 12
                            },
                            "tag_id": 91020,
                            "ranking_type": "Top rated",
                            "ranking_id": "1538"
                        }
                    ],
                    "show_index": 108,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "21",
                            ".49",
                            ""
                        ],
                        "reduction_text": [
                            "-69",
                            "%"
                        ],
                        "price": 2149,
                        "market_price_str": "$69.92",
                        "market_price": 6992,
                        "price_schema": "21.49",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "21.49",
                            ""
                        ],
                        "price_str": "$21.49",
                        "market_price_text": [
                            "$",
                            "69.92",
                            ""
                        ]
                    },
                    "image": {
                        "width": 375,
                        "id": 601099512353888,
                        "url_id": "6593584948434241791",
                        "url": "https://img.kwcdn.com/product/1d65867038/65d887a6-657b-490b-8fdf-93dac2d32c13_800x800.jpeg",
                        "height": 375
                    },
                    "sales_tip": "47K+ sold",
                    "visible": true,
                    "goods_id": 601099512353888,
                    "opt_id": 1546,
                    "seo_link_url": "/-mens-comfortable-slip--loafers-soft-sole-split-leather-upper--for--pu-inner-lining-rubber-outsole-g-601099512353888.html?&_oak_name_id=681498097741551203&_oak_mp_inf=EOCoopem1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2F1d65867038%2F65d887a6-657b-490b-8fdf-93dac2d32c13_800x800.jpeg&spec_gallery_id=601099512353888&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjE0OQ&_oak_gallery_order=16173748%2C110415931%2C1149334431%2C1291906846%2C1386287712",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "47K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.8,
                        "hidden_comment": false,
                        "comment_num_tips": "2,919"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/aisc_image/fancy/2024-07-24/2f470f17-28db-4b81-91fe-55916d6dff18_1721816838.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-45%"
                    },
                    "item_type": 0,
                    "page_alt": "Men s Handmade Slip-On Moccasin Sneakers - Seamless  , Breathable Upper & Cushioned PVC - Lightweight TPR Sole for, Camping, Beach - Spring-Ready Sizes   (Casual Outdoor Shoes)",
                    "current_sku_id": 17592603938476,
                    "tags_info": {
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "4 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 4 left",
                                "tag_series": 2
                            },
                            {
                                "color": "#555555",
                                "ext_map": {
                                    "lowest_tag_up_flag": "3",
                                    "lowest_price_before_title": "90d lowest"
                                },
                                "marketing_tag_type": 1000,
                                "tag_id": 91048,
                                "text": "Lowest price in 90 days",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Men's Handmade Slip-On Moccasin Sneakers - Seamless Slide Design, Breathable  Upper & Cushioned PVC - Lightweight TPR Sole for, Camping, Beach - Spring-Ready Sizes Available (Casual Outdoor Shoes)",
                    "sales_tip_text_list": [
                        "1.5K+",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "530790438",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6HV8G4O1A0PkajIxk7826qlMFP8vJ93S4YJnv/bV20FVxBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "6536079007082666601",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "530790438",
                        "g": "601099620917652",
                        "scene_id": "3",
                        "show_price": "2035",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "109",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "1324356175948488429",
                        "ts": "1763997832368"
                    },
                    "mall_id": 634418215089039,
                    "sales_num": "1.5K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099620917652&_oak_mp_inf=EJTDhMum1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Faisc_image%2Ffancy%2F2024-07-24%2F2f470f17-28db-4b81-91fe-55916d6dff18_1721816838.jpg&spec_gallery_id=5457926079&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAzNQ&_oak_gallery_order=530790438%2C41918498%2C1682830266%2C1442505490%2C591768348",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099620917652&_oak_mp_inf=EJTDhMum1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Faisc_image%2Ffancy%2F2024-07-24%2F2f470f17-28db-4b81-91fe-55916d6dff18_1721816838.jpg&spec_gallery_id=5457926079&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAzNQ&_oak_gallery_order=530790438%2C41918498%2C1682830266%2C1442505490%2C591768348&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "530790438,41918498,1682830266,1442505490,591768348"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "4 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 4 left",
                            "tag_series": 2
                        },
                        {
                            "color": "#555555",
                            "ext_map": {
                                "lowest_tag_up_flag": "3",
                                "lowest_price_before_title": "90d lowest"
                            },
                            "marketing_tag_type": 1000,
                            "tag_id": 91048,
                            "text": "Lowest price in 90 days",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 109,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "20",
                            ".35",
                            ""
                        ],
                        "reduction_text": [
                            "-45",
                            "%"
                        ],
                        "price": 2035,
                        "market_price_str": "$37.00",
                        "market_price": 3700,
                        "price_schema": "20.35",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "20.35",
                            ""
                        ],
                        "price_str": "$20.35",
                        "market_price_text": [
                            "$",
                            "37.00",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 5457926079,
                        "url_id": "6536079007082666601",
                        "url": "https://img.kwcdn.com/product/aisc_image/fancy/2024-07-24/2f470f17-28db-4b81-91fe-55916d6dff18_1721816838.jpg",
                        "height": 800
                    },
                    "sales_tip": "1.5K+ sold",
                    "visible": true,
                    "goods_id": 601099620917652,
                    "opt_id": 1546,
                    "seo_link_url": "/mens-handmade-slip-on-moccasin-sneakers-seamless--breathable-upper-cushioned-pvc-lightweight-tpr-sole-for-camping-beach-spring-ready-sizes--casual-outdoor-shoes-g-601099620917652.html?&_oak_mp_inf=EJTDhMum1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Faisc_image%2Ffancy%2F2024-07-24%2F2f470f17-28db-4b81-91fe-55916d6dff18_1721816838.jpg&spec_gallery_id=5457926079&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjAzNQ&_oak_gallery_order=530790438%2C41918498%2C1682830266%2C1442505490%2C591768348",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "1.5K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 5.0,
                        "hidden_comment": true,
                        "comment_num_tips": "2"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/c67072cc-4abe-498c-94f1-b68bf314c881.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-50%"
                    },
                    "item_type": 0,
                    "page_alt": "mens solid color lightweight split   upper loafer shoes comfy non slip rubber sole durable walking shoes mens footwear",
                    "current_sku_id": 17592447715178,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "goods_attributes_tags": [
                            {
                                "text": "Split cow leather"
                            }
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#D9001B",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "8 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 8 left",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Men's Solid Color Lightweight Split Cow Leather Upper Loafer Shoes, Comfy Non Slip Rubber Sole Durable Walking Shoes, Men's Footwear",
                    "sales_tip_text_list": [
                        "1.9K+",
                        "sold"
                    ],
                    "display_end_time_percent": 29,
                    "sold_quantity_percent": 0,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1816318579",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6HnV69HxZmJeEL0COjl5jQEAJuS8Ifi0OUGkOocCgKbPhBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "4774899534815757098",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1816318579",
                        "g": "601099575588321",
                        "scene_id": "3",
                        "show_price": "2226",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "110",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "5796158982251763558",
                        "ts": "1763997832368"
                    },
                    "activity_type": 27,
                    "mall_id": 134879608602,
                    "sales_num": "1.9K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099575588321&_oak_name_id=5796158982251763558&_oak_mp_inf=EOHrtbWm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc67072cc-4abe-498c-94f1-b68bf314c881.jpg&spec_gallery_id=2152928643&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjIyNg&_oak_gallery_order=1816318579%2C879090280%2C1554933567%2C1118583884%2C691944415",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "sales_icon": {
                            "width": 14,
                            "url": "https://aimg.kwcdn.com/upload_aimg/rec/57a4f16e-10c2-41ae-bfb7-3e5de7f02dca.png.slim.png",
                            "height": 14
                        },
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099575588321&_oak_name_id=5796158982251763558&_oak_mp_inf=EOHrtbWm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc67072cc-4abe-498c-94f1-b68bf314c881.jpg&spec_gallery_id=2152928643&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjIyNg&_oak_gallery_order=1816318579%2C879090280%2C1554933567%2C1118583884%2C691944415&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112749975205541345",
                        "sku_extra_param": {
                            "_oak_gallery_order": "1816318579,879090280,1554933567,1118583884,691944415",
                            "_oak_name_id": "5796158982251763558"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#D9001B",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "8 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 8 left",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 110,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "22",
                            ".26",
                            ""
                        ],
                        "reduction_text": [
                            "-50",
                            "%"
                        ],
                        "price": 2226,
                        "market_price_str": "$44.77",
                        "market_price": 4477,
                        "price_schema": "22.26",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "22.26",
                            ""
                        ],
                        "price_str": "$22.26",
                        "price_color": "#D9001B",
                        "reduction": 500,
                        "market_price_text": [
                            "$",
                            "44.77",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 2152928643,
                        "url_id": "4774899534815757098",
                        "url": "https://img.kwcdn.com/product/fancy/c67072cc-4abe-498c-94f1-b68bf314c881.jpg",
                        "height": 800
                    },
                    "sales_tip": "1.9K+ sold",
                    "visible": true,
                    "goods_id": 601099575588321,
                    "opt_id": 1546,
                    "display_end_time": 1764921599,
                    "seo_link_url": "/mens-solid-color-lightweight-split--upper-loafer-shoes-comfy-non-slip-rubber-sole-durable-walking-shoes-mens-footwear-g-601099575588321.html?&_oak_name_id=5796158982251763558&_oak_mp_inf=EOHrtbWm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc67072cc-4abe-498c-94f1-b68bf314c881.jpg&spec_gallery_id=2152928643&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjIyNg&_oak_gallery_order=1816318579%2C879090280%2C1554933567%2C1118583884%2C691944415",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "1.9K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 5.0,
                        "hidden_comment": true,
                        "comment_num_tips": "25"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/eb7b35d9-57f3-45af-92dd-472acccf9be6.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-53%"
                    },
                    "item_type": 0,
                    "page_alt": "  mens slip on loafers soft upper durable rubber sole comfortable round toe design   casual shoes for driving walking outdoor daily wear loafer shoes for men shoes for men high quality sneakers for men shoes for men casual shoes for man",
                    "current_sku_id": 17605641940064,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "mall_tag": [
                            {
                                "color": "#FFEFD3",
                                "ext_map": {
                                    "brand_info": "{\"brand_name\":\"CLOHOO\",\"brand_authorized_type\":2}",
                                    "brand_tag_text_style": "1"
                                },
                                "bg_url": "https://aimg.kwcdn.com/upload_aimg/aftersales/f3dba53e-2a7c-4ae2-acf5-6cf50fd53c15.png",
                                "marketing_tag_type": 2700,
                                "width": 39,
                                "tag_id": 91007,
                                "text": "Brand Official Store: CLOHOO",
                                "tag_series": 2,
                                "url": "https://aimg.kwcdn.com/upload_aimg/aftersales/efb13335-b6b6-4984-af7d-a48dbaccb830.png",
                                "height": 39
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "4 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 4 left",
                                "tag_series": 2
                            },
                            {
                                "color": "#555555",
                                "ext_map": {
                                    "lowest_tag_up_flag": "5",
                                    "lowest_price_before_title": "30d lowest"
                                },
                                "marketing_tag_type": 1000,
                                "tag_id": 91048,
                                "text": "Lowest price in 30 days",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "CLOHOO Men's Slip-On Loafers - Soft Upper & Durable Rubber Sole, Comfortable Round Toe Design, All-Season Casual Shoes for Driving, Walking, Outdoor & Daily Wear, Loafer Shoes for Men, Shoes for Men High Quality, Sneakers for Men, Shoes for Men Casual, Shoes for Man",
                    "sales_tip_text_list": [
                        "85",
                        "sold"
                    ],
                    "display_end_time_percent": 33,
                    "sold_quantity_percent": 0,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "2066339842",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6FH6txoh7lU8nd5fJrxXMlIX8VNpJX989JH4VzTI5NfDhBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "8487374444442336933",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "2066339842",
                        "g": "601102633023041",
                        "scene_id": "3",
                        "show_price": "2267",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "111",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "5339856957408013923",
                        "ts": "1763997832368"
                    },
                    "activity_type": 13,
                    "mall_id": 634418220288050,
                    "sales_num": "85",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601102633023041&_oak_name_id=5339856957408013923&_oak_mp_inf=EMHsqOex1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Feb7b35d9-57f3-45af-92dd-472acccf9be6.jpg&spec_gallery_id=601102633023041&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2Nw&_oak_gallery_order=2066339842%2C696671636%2C1895628590%2C1267923962%2C540810551",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601102633023041&_oak_name_id=5339856957408013923&_oak_mp_inf=EMHsqOex1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Feb7b35d9-57f3-45af-92dd-472acccf9be6.jpg&spec_gallery_id=601102633023041&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2Nw&_oak_gallery_order=2066339842%2C696671636%2C1895628590%2C1267923962%2C540810551&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112749985070528065",
                        "sku_extra_param": {
                            "_oak_gallery_order": "2066339842,696671636,1895628590,1267923962,540810551",
                            "_oak_name_id": "5339856957408013923"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "4 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 4 left",
                            "tag_series": 2
                        },
                        {
                            "color": "#555555",
                            "ext_map": {
                                "lowest_tag_up_flag": "5",
                                "lowest_price_before_title": "30d lowest"
                            },
                            "marketing_tag_type": 1000,
                            "tag_id": 91048,
                            "text": "Lowest price in 30 days",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 111,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "22",
                            ".67",
                            ""
                        ],
                        "reduction_text": [
                            "-53",
                            "%"
                        ],
                        "price": 2267,
                        "market_price_str": "$48.64",
                        "market_price": 4864,
                        "price_schema": "22.67",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "22.67",
                            ""
                        ],
                        "price_str": "$22.67",
                        "price_color": "#FB7701",
                        "reduction": 530,
                        "market_price_text": [
                            "$",
                            "48.64",
                            ""
                        ]
                    },
                    "image": {
                        "width": 375,
                        "id": 601102633023041,
                        "url_id": "8487374444442336933",
                        "url": "https://img.kwcdn.com/product/fancy/eb7b35d9-57f3-45af-92dd-472acccf9be6.jpg",
                        "height": 375
                    },
                    "sales_tip": "85 sold",
                    "visible": true,
                    "goods_id": 601102633023041,
                    "opt_id": 1546,
                    "display_end_time": 1764403199,
                    "seo_link_url": "/-mens-slip-on-loafers-soft-upper-durable-rubber-sole-comfortable-round-toe-design--casual-shoes-for-driving-walking-outdoor-daily-wear-loafer-shoes-for-men-shoes-for-men-high-quality-sneakers-for-men-shoes-for-men-casual-shoes-for-man-g-601102633023041.html?&_oak_name_id=5339856957408013923&_oak_mp_inf=EMHsqOex1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II2p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Feb7b35d9-57f3-45af-92dd-472acccf9be6.jpg&spec_gallery_id=601102633023041&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI2Nw&_oak_gallery_order=2066339842%2C696671636%2C1895628590%2C1267923962%2C540810551",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "85",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {},
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/8d4021ff-911e-4218-821b-ebf32dae8be6.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-33%"
                    },
                    "item_type": 0,
                    "page_alt": "  mens slip on casual loafers with elastic sides soft rubber   shoes upper round toe   season wear     footwear sleek loafer design durable grip sole",
                    "current_sku_id": 17592376390680,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "mall_tag": [
                            {
                                "color": "#FFEFD3",
                                "ext_map": {
                                    "brand_info": "{\"brand_name\":\"CLOHOO\",\"brand_authorized_type\":2}",
                                    "brand_tag_text_style": "1"
                                },
                                "bg_url": "https://aimg.kwcdn.com/upload_aimg/aftersales/f3dba53e-2a7c-4ae2-acf5-6cf50fd53c15.png",
                                "marketing_tag_type": 2700,
                                "width": 39,
                                "tag_id": 91007,
                                "text": "Brand Official Store: CLOHOO",
                                "tag_series": 2,
                                "url": "https://aimg.kwcdn.com/upload_aimg/aftersales/efb13335-b6b6-4984-af7d-a48dbaccb830.png",
                                "height": 39
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#D9001B",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "4 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 4 left",
                                "tag_series": 2
                            },
                            {
                                "color": "#555555",
                                "ext_map": {
                                    "lowest_tag_up_flag": "5",
                                    "lowest_price_before_title": "30d lowest"
                                },
                                "marketing_tag_type": 1000,
                                "tag_id": 91048,
                                "text": "Lowest price in 30 days",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "CLOHOO Men's Slip-On Casual Loafers with Elastic Sides - Soft Rubber Sole Comfort Shoes, Upper, Round Toe Design for All-Season Wear (Brown/Black), Allseason Footwear | Sleek Loafer Design | Durable Grip Sole",
                    "sales_tip_text_list": [
                        "1.3K+",
                        "sold"
                    ],
                    "display_end_time_percent": 72,
                    "sold_quantity_percent": 0,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "805999132",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6FcS00rowocykD8goTyEv4wA1ukEgMShPK7bU8CxMOzSRBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "3590367458997734309",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "805999132",
                        "g": "601099555098563",
                        "scene_id": "3",
                        "show_price": "3253",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "112",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "912895066771983743",
                        "ts": "1763997832368"
                    },
                    "activity_type": 27,
                    "mall_id": 125534834472,
                    "sales_num": "1.3K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099555098563&_oak_name_id=912895066771983743&_oak_mp_inf=EMOf06um1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8d4021ff-911e-4218-821b-ebf32dae8be6.jpg&spec_gallery_id=2106231636&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI1Mw&_oak_gallery_order=805999132%2C1180194132%2C152972611%2C1266901357%2C6832553",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "sales_icon": {
                            "width": 14,
                            "url": "https://aimg.kwcdn.com/upload_aimg/rec/57a4f16e-10c2-41ae-bfb7-3e5de7f02dca.png.slim.png",
                            "height": 14
                        },
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099555098563&_oak_name_id=912895066771983743&_oak_mp_inf=EMOf06um1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8d4021ff-911e-4218-821b-ebf32dae8be6.jpg&spec_gallery_id=2106231636&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI1Mw&_oak_gallery_order=805999132%2C1180194132%2C152972611%2C1266901357%2C6832553&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112727997119713219",
                        "sku_extra_param": {
                            "_oak_gallery_order": "805999132,1180194132,152972611,1266901357,6832553",
                            "_oak_name_id": "912895066771983743"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#D9001B",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "4 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 4 left",
                            "tag_series": 2
                        },
                        {
                            "color": "#555555",
                            "ext_map": {
                                "lowest_tag_up_flag": "5",
                                "lowest_price_before_title": "30d lowest"
                            },
                            "marketing_tag_type": 1000,
                            "tag_id": 91048,
                            "text": "Lowest price in 30 days",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 112,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "32",
                            ".53",
                            ""
                        ],
                        "reduction_text": [
                            "-33",
                            "%"
                        ],
                        "price": 3253,
                        "market_price_str": "$48.64",
                        "market_price": 4864,
                        "price_schema": "32.53",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "32.53",
                            ""
                        ],
                        "price_str": "$32.53",
                        "price_color": "#D9001B",
                        "reduction": 330,
                        "market_price_text": [
                            "$",
                            "48.64",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 2106231636,
                        "url_id": "3590367458997734309",
                        "url": "https://img.kwcdn.com/product/fancy/8d4021ff-911e-4218-821b-ebf32dae8be6.jpg",
                        "height": 800
                    },
                    "sales_tip": "1.3K+ sold",
                    "visible": true,
                    "goods_id": 601099555098563,
                    "opt_id": 1546,
                    "display_end_time": 1764489599,
                    "seo_link_url": "/-mens-slip-on-casual-loafers-with-elastic-sides-soft-rubber--shoes-upper-round-toe--season-wear---footwear-sleek-loafer-design-durable-grip-sole-g-601099555098563.html?&_oak_name_id=912895066771983743&_oak_mp_inf=EMOf06um1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F8d4021ff-911e-4218-821b-ebf32dae8be6.jpg&spec_gallery_id=2106231636&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzI1Mw&_oak_gallery_order=805999132%2C1180194132%2C152972611%2C1266901357%2C6832553",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "1.3K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.6,
                        "hidden_comment": true,
                        "comment_num_tips": "37"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/145dcaab-cb46-4d94-91f2-596953625726.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-48%"
                    },
                    "item_type": 0,
                    "page_alt": "mens solid color slip on loafer shoes comfy non slip rubber sole durable walking shoes mens footwear",
                    "current_sku_id": 17592415343758,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#D9001B",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "8 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 8 left",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "[Comfy Slip On Loafer] Comfy Men's Solid Color Slip On Loafer Shoes - Non Slip Rubber Sole Durable Walking Shoes",
                    "sales_tip_text_list": [
                        "3.8K+",
                        "sold"
                    ],
                    "display_end_time_percent": 29,
                    "sold_quantity_percent": 0,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "1",
                        "mid": "69999906",
                        "final_creative_id": "791257092",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6FBG2pBUtR3rWeO/boNjpTb9V3wQSqowyZXqUWw2NOK8BBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "6505303619427028284",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "791257092",
                        "g": "601099565831908",
                        "scene_id": "3",
                        "show_price": "2069",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "113",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "6408852789493966287",
                        "ts": "1763997832368"
                    },
                    "activity_type": 27,
                    "mall_id": 634418214137945,
                    "sales_num": "3.8K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099565831908&_oak_name_id=6408852789493966287&_oak_mp_inf=EOSt4rCm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F145dcaab-cb46-4d94-91f2-596953625726.jpg&spec_gallery_id=2125118690&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjA2OQ&_oak_gallery_order=791257092%2C1460497412%2C974367586%2C1088324300%2C244103990",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "sales_icon": {
                            "width": 14,
                            "url": "https://aimg.kwcdn.com/upload_aimg/rec/57a4f16e-10c2-41ae-bfb7-3e5de7f02dca.png.slim.png",
                            "height": 14
                        },
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099565831908&_oak_name_id=6408852789493966287&_oak_mp_inf=EOSt4rCm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F145dcaab-cb46-4d94-91f2-596953625726.jpg&spec_gallery_id=2125118690&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjA2OQ&_oak_gallery_order=791257092%2C1460497412%2C974367586%2C1088324300%2C244103990&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112749983527048932",
                        "sku_extra_param": {
                            "_oak_gallery_order": "791257092,1460497412,974367586,1088324300,244103990",
                            "_oak_name_id": "6408852789493966287"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#D9001B",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "8 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 8 left",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 113,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "20",
                            ".69",
                            ""
                        ],
                        "reduction_text": [
                            "-48",
                            "%"
                        ],
                        "price": 2069,
                        "market_price_str": "$39.99",
                        "market_price": 3999,
                        "price_schema": "20.69",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "20.69",
                            ""
                        ],
                        "price_str": "$20.69",
                        "price_color": "#D9001B",
                        "reduction": 480,
                        "market_price_text": [
                            "$",
                            "39.99",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 2125118690,
                        "url_id": "6505303619427028284",
                        "url": "https://img.kwcdn.com/product/fancy/145dcaab-cb46-4d94-91f2-596953625726.jpg",
                        "height": 800
                    },
                    "sales_tip": "3.8K+ sold",
                    "visible": true,
                    "goods_id": 601099565831908,
                    "opt_id": 1546,
                    "display_end_time": 1764921599,
                    "seo_link_url": "/mens-solid-color-slip-on-loafer-shoes-comfy-non-slip-rubber-sole-durable-walking-shoes-mens-footwear-g-601099565831908.html?&_oak_name_id=6408852789493966287&_oak_mp_inf=EOSt4rCm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F145dcaab-cb46-4d94-91f2-596953625726.jpg&spec_gallery_id=2125118690&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjA2OQ&_oak_gallery_order=791257092%2C1460497412%2C974367586%2C1088324300%2C244103990",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "3.8K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.8,
                        "hidden_comment": false,
                        "comment_num_tips": "123"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/9270ff34-32d4-427d-a5c4-c2aa6c952350.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-76%"
                    },
                    "item_type": 0,
                    "page_alt": "mens slip on loafers genuine second layer upper   business casual s with   round toe pu   formal semi formal wear no laces ties",
                    "current_sku_id": 17592549170543,
                    "tags_info": {
                        "goods_attributes_tags": [
                            {
                                "text": "Split cow leather"
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/1c29db5d7041436e82242a49f4ff06b5eec15e9c.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/fancy/9270ff34-32d4-427d-a5c4-c2aa6c952350.jpg",
                        "url": "https://img.kwcdn.com/product/d182ff3a0b394a3ff81bb6767679b413a1d86653.goods.000001.jpeg"
                    },
                    "title": "Men's Slip-On Loafers - Genuine Second-Layer Upper, Glossy Black Business Casual s with Elastic Fit, Round Toe & PU - All-Season Formal & Semi-Formal Wear (No Laces/Ties)",
                    "sales_tip_text_list": [
                        "25K+",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "462709132",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6FSXr5LHCaL22fxJNRidassowJr49LJgZ6WnU3RJDCsSRBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "1252112122373371791",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "462709132",
                        "g": "601099604944519",
                        "scene_id": "3",
                        "show_price": "2616",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "114",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "5812039281841251126",
                        "ts": "1763997832368"
                    },
                    "mall_id": 2452897346009,
                    "sales_num": "25K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099604944519&_oak_name_id=5812039281841251126&_oak_mp_inf=EIfNtcOm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9270ff34-32d4-427d-a5c4-c2aa6c952350.jpg&spec_gallery_id=601099604944519&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjYxNg&_oak_gallery_order=462709132%2C1141024524%2C70898200%2C2015918450%2C1486267540",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099604944519&_oak_name_id=5812039281841251126&_oak_mp_inf=EIfNtcOm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9270ff34-32d4-427d-a5c4-c2aa6c952350.jpg&spec_gallery_id=601099604944519&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjYxNg&_oak_gallery_order=462709132%2C1141024524%2C70898200%2C2015918450%2C1486267540&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "462709132,1141024524,70898200,2015918450,1486267540",
                            "_oak_name_id": "5812039281841251126"
                        }
                    },
                    "goods_tags": [],
                    "show_index": 114,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "26",
                            ".16",
                            ""
                        ],
                        "reduction_text": [
                            "-76",
                            "%"
                        ],
                        "price": 2616,
                        "market_price_str": "$110.80",
                        "market_price": 11080,
                        "price_schema": "26.16",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "26.16",
                            ""
                        ],
                        "price_str": "$26.16",
                        "market_price_text": [
                            "$",
                            "110.80",
                            ""
                        ]
                    },
                    "image": {
                        "width": 375,
                        "id": 601099604944519,
                        "url_id": "1252112122373371791",
                        "url": "https://img.kwcdn.com/product/fancy/9270ff34-32d4-427d-a5c4-c2aa6c952350.jpg",
                        "height": 375
                    },
                    "sales_tip": "25K+ sold",
                    "visible": true,
                    "goods_id": 601099604944519,
                    "opt_id": 1546,
                    "seo_link_url": "/mens-genuine-leather-loafers-sleek-black-slip-on-dress-shoes-for-business-casual-wear-round-toe-rubber-sole-smooth-leather-upper--office-or-outdoor-events-office-loafers-stylish-slipon-durable-rubber-sole-g-601099604944519.html?&_oak_name_id=5812039281841251126&_oak_mp_inf=EIfNtcOm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F9270ff34-32d4-427d-a5c4-c2aa6c952350.jpg&spec_gallery_id=601099604944519&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjYxNg&_oak_gallery_order=462709132%2C1141024524%2C70898200%2C2015918450%2C1486267540",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "25K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.8,
                        "hidden_comment": false,
                        "comment_num_tips": "332"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/734a6a2b-be27-4499-9d0c-ac13b3965f87.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-59%"
                    },
                    "item_type": 0,
                    "page_alt": "mens slip on loafers comfortable casual shoes for walking hiking casual attire durable synthetic upper with eva sole beige tan color versatile business outdoor footwear casual footwear vintageinspired shoes  ",
                    "current_sku_id": 17592372154886,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "8 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 8 left",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Men's Slip-On Loafers - Luxury Tennis Brand Casual & s, All-Season Round-Toe Sneakers with Cushioned Sole, Slip-Resistant Traction,  Upper (///Navy) for Business, Driving & Outdoor Wear",
                    "sales_tip_text_list": [
                        "3.6K+",
                        "sold"
                    ],
                    "display_end_time_percent": 83,
                    "sold_quantity_percent": 2,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1028918613",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6GkelUvqvi/MbuXOetmb1nMZcFTjjFPyinPgz388HOGXhBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "8809725067301271866",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1028918613",
                        "g": "601099553933841",
                        "scene_id": "3",
                        "show_price": "1537",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "115",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "4674887249896614689",
                        "ts": "1763997832368"
                    },
                    "activity_type": 13,
                    "mall_id": 25733854348,
                    "sales_num": "3.6K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099553933841&_oak_name_id=4674887249896614689&_oak_mp_inf=EJGUjKum1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F734a6a2b-be27-4499-9d0c-ac13b3965f87.jpg&spec_gallery_id=2202220305&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUzNw&_oak_gallery_order=1028918613%2C763310569%2C64837895%2C1250061624%2C1757272749",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099553933841&_oak_name_id=4674887249896614689&_oak_mp_inf=EJGUjKum1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F734a6a2b-be27-4499-9d0c-ac13b3965f87.jpg&spec_gallery_id=2202220305&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUzNw&_oak_gallery_order=1028918613%2C763310569%2C64837895%2C1250061624%2C1757272749&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112622406548261393",
                        "sku_extra_param": {
                            "_oak_gallery_order": "1028918613,763310569,64837895,1250061624,1757272749",
                            "_oak_name_id": "4674887249896614689"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "8 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 8 left",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 115,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "15",
                            ".37",
                            ""
                        ],
                        "reduction_text": [
                            "-59",
                            "%"
                        ],
                        "price": 1537,
                        "market_price_str": "$37.99",
                        "market_price": 3799,
                        "price_schema": "15.37",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "15.37",
                            ""
                        ],
                        "price_str": "$15.37",
                        "price_color": "#FB7701",
                        "reduction": 590,
                        "market_price_text": [
                            "$",
                            "37.99",
                            ""
                        ]
                    },
                    "image": {
                        "width": 1600,
                        "id": 2202220305,
                        "url_id": "8809725067301271866",
                        "url": "https://img.kwcdn.com/product/fancy/734a6a2b-be27-4499-9d0c-ac13b3965f87.jpg",
                        "height": 1600
                    },
                    "sales_tip": "3.6K+ sold",
                    "visible": true,
                    "goods_id": 601099553933841,
                    "opt_id": 1546,
                    "display_end_time": 1764403199,
                    "seo_link_url": "/mens-slip-on-loafers-comfortable-casual-shoes-for-walking-hiking-casual-attire-durable-synthetic-upper-with-eva-sole-beige-tan-color-versatile-business-outdoor-footwear-casual-footwear-vintageinspired-shoes--g-601099553933841.html?&_oak_name_id=4674887249896614689&_oak_mp_inf=EJGUjKum1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F734a6a2b-be27-4499-9d0c-ac13b3965f87.jpg&spec_gallery_id=2202220305&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTUzNw&_oak_gallery_order=1028918613%2C763310569%2C64837895%2C1250061624%2C1757272749",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "3.6K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.8,
                        "hidden_comment": false,
                        "comment_num_tips": "72"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fmket/5de6c8e56966de92df72927cc4eb7297.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-11%"
                    },
                    "item_type": 0,
                    "page_alt": "mens casual sports sneakers solid color   daily casual wear lace up closure   cover upper rubber sole eva insole slip   leisure footwear   shoes durable rubber sol",
                    "current_sku_id": 17597718343637,
                    "tags_info": {
                        "activity_icon_tags": [
                            {}
                        ],
                        "title_header_tags": [
                            {
                                "ext_map": {
                                    "discount_promotion_tag": "{\"text_dx\":0.0,\"text_color\":\"#ffffff\",\"width\":73.0,\"height\":18.0,\"bg_url\":\"https://aimg.kwcdn.com/upload_aimg/commodity/fda9b9b5-19d6-44be-8fd0-7a40b06436d5.png\"}"
                                },
                                "marketing_tag_type": 2000
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "[Daily & Casual Wear Shoes] Men's Casual Sneakers - Sports, Solid Color, All-Season | Lace-Up, Faux Cover Upper, Rubber Sole, EVA Insole | Slip-On, Leisure Footwear, Durable",
                    "sales_tip_text_list": [
                        "211",
                        "sold"
                    ],
                    "display_end_time_percent": 88,
                    "sold_quantity_percent": 30,
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1313192500",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6GAEKottirPeevpuo2Gnv+q8Rx/e+qn/2M8sZI6A0cBnhBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "9005521146927726042",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1313192500",
                        "g": "601100941428065",
                        "scene_id": "3",
                        "show_price": "2290",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "116",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "2172114620274587988",
                        "ts": "1763997832368"
                    },
                    "activity_type": 27,
                    "mall_id": 634418222600061,
                    "sales_num": "211",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601100941428065&_oak_name_id=2172114620274587988&_oak_mp_inf=EOGK2sCr1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F5de6c8e56966de92df72927cc4eb7297.jpg&spec_gallery_id=8&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI5MA&_oak_gallery_order=1313192500%2C2142843024%2C474400728%2C1022551319%2C920071750",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601100941428065&_oak_name_id=2172114620274587988&_oak_mp_inf=EOGK2sCr1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F5de6c8e56966de92df72927cc4eb7297.jpg&spec_gallery_id=8&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI5MA&_oak_gallery_order=1313192500%2C2142843024%2C474400728%2C1022551319%2C920071750&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "detail_id": "112736764423013729",
                        "sku_extra_param": {
                            "_oak_gallery_order": "1313192500,2142843024,474400728,1022551319,920071750",
                            "_oak_name_id": "2172114620274587988"
                        }
                    },
                    "goods_tags": [],
                    "show_index": 116,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "22",
                            ".90",
                            ""
                        ],
                        "reduction_text": [
                            "-11",
                            "%"
                        ],
                        "price": 2290,
                        "market_price_str": "$25.99",
                        "market_price": 2599,
                        "price_schema": "22.90",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "22.90",
                            ""
                        ],
                        "price_str": "$22.90",
                        "price_color": "#D9001B",
                        "reduction": 110,
                        "market_price_text": [
                            "$",
                            "25.99",
                            ""
                        ]
                    },
                    "image": {
                        "width": 1080,
                        "id": 8,
                        "url_id": "9005521146927726042",
                        "url": "https://img.kwcdn.com/product/fmket/5de6c8e56966de92df72927cc4eb7297.jpg",
                        "height": 1080
                    },
                    "sales_tip": "211 sold",
                    "visible": true,
                    "goods_id": 601100941428065,
                    "opt_id": 1546,
                    "display_end_time": 1764143999,
                    "seo_link_url": "/mens-casual-sports-sneakers-solid-color--daily-casual-wear-lace-up-closure--cover-upper-rubber-sole-eva-insole-slip--leisure-footwear--shoes-durable-rubber-sol-g-601100941428065.html?&_oak_name_id=2172114620274587988&_oak_mp_inf=EOGK2sCr1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffmket%2F5de6c8e56966de92df72927cc4eb7297.jpg&spec_gallery_id=8&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjI5MA&_oak_gallery_order=1313192500%2C2142843024%2C474400728%2C1022551319%2C920071750",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "211",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 5.0,
                        "hidden_comment": true,
                        "comment_num_tips": "3"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/f87d96db-1208-4180-b178-35898274f778.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-82%"
                    },
                    "item_type": 0,
                    "page_alt": "mens loafers for men casual shoes driving mens pu dress boat shoe handmade   brown grey size male formal",
                    "current_sku_id": 17594056286721,
                    "tags_info": {},
                    "video": {
                        "video_url": ""
                    },
                    "title": "[Men's Loafers] Handmade Men's Loafers | Casual Shoes for Driving, PU Dress Boat Shoe, Black Brown Grey, Formal, Male",
                    "sales_tip_text_list": [
                        "316",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1424017413",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6GzmQqWoU7GlzjKGZammA3XRQTy1MJnCTbWa+wS6s1yxBBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "8726148321975211417",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1424017413",
                        "g": "601099953605357",
                        "scene_id": "3",
                        "show_price": "3218",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "117",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "7205824403893991658",
                        "ts": "1763997832368"
                    },
                    "mall_id": 634418211213759,
                    "sales_num": "316",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099953605357&_oak_name_id=7205824403893991658&_oak_mp_inf=EO2V1umn1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ff87d96db-1208-4180-b178-35898274f778.jpg&spec_gallery_id=3633781003&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzIxOA&_oak_gallery_order=1424017413%2C1582512855%2C31822664%2C1253409134%2C538117164",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099953605357&_oak_name_id=7205824403893991658&_oak_mp_inf=EO2V1umn1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ff87d96db-1208-4180-b178-35898274f778.jpg&spec_gallery_id=3633781003&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzIxOA&_oak_gallery_order=1424017413%2C1582512855%2C31822664%2C1253409134%2C538117164&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "1424017413,1582512855,31822664,1253409134,538117164",
                            "_oak_name_id": "7205824403893991658"
                        }
                    },
                    "goods_tags": [],
                    "show_index": 117,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "32",
                            ".18",
                            ""
                        ],
                        "reduction_text": [
                            "-82",
                            "%"
                        ],
                        "price": 3218,
                        "market_price_str": "$179.00",
                        "market_price": 17900,
                        "price_schema": "32.18",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "32.18",
                            ""
                        ],
                        "price_str": "$32.18",
                        "market_price_text": [
                            "$",
                            "179.00",
                            ""
                        ]
                    },
                    "image": {
                        "width": 800,
                        "id": 3633781003,
                        "url_id": "8726148321975211417",
                        "url": "https://img.kwcdn.com/product/fancy/f87d96db-1208-4180-b178-35898274f778.jpg",
                        "height": 800
                    },
                    "sales_tip": "316 sold",
                    "visible": true,
                    "goods_id": 601099953605357,
                    "opt_id": 1546,
                    "seo_link_url": "/mens-loafers-for-men-casual-shoes-driving-mens-pu-dress-boat-shoe-handmade--brown-grey-size-male-formal-g-601099953605357.html?&_oak_name_id=7205824403893991658&_oak_mp_inf=EO2V1umn1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ff87d96db-1208-4180-b178-35898274f778.jpg&spec_gallery_id=3633781003&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MzIxOA&_oak_gallery_order=1424017413%2C1582512855%2C31822664%2C1253409134%2C538117164",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "316",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {},
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/5c6fc453-8e6d-454d-9b5a-e7af2a23c5dd.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": "-63%"
                    },
                    "item_type": 0,
                    "page_alt": "  mens solid casual mesh loafers breathable non slip slip on shoes for outdoor walking and driving spring summer and autumn",
                    "current_sku_id": 17592315027518,
                    "tags_info": {
                        "goods_attributes_tags": [
                            {
                                "text": "Split cow leather"
                            }
                        ],
                        "mall_tag": [
                            {
                                "color": "#FFEFD3",
                                "ext_map": {
                                    "brand_info": "{\"brand_name\":\"CLOHOO\",\"brand_authorized_type\":2}",
                                    "brand_tag_text_style": "1"
                                },
                                "bg_url": "https://aimg.kwcdn.com/upload_aimg/aftersales/f3dba53e-2a7c-4ae2-acf5-6cf50fd53c15.png",
                                "marketing_tag_type": 2700,
                                "width": 39,
                                "tag_id": 91007,
                                "text": "Brand Official Store: CLOHOO",
                                "tag_series": 2,
                                "url": "https://aimg.kwcdn.com/upload_aimg/aftersales/efb13335-b6b6-4984-af7d-a48dbaccb830.png",
                                "height": 39
                            }
                        ],
                        "goods_tags": [
                            {
                                "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                                "color": "#FB7701",
                                "ext_map": {
                                    "stock_type": "1",
                                    "simply_stock_tag_text": "4 LEFT!"
                                },
                                "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                                "marketing_tag_type": 1000,
                                "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                                "tag_id": 91004,
                                "text": "Only 4 left",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/35218716-bd3d-4f5a-8877-9771d5140ddd.png.slim.png",
                        "video_url": "https://goods-vod.kwcdn.com/goods-video/3b73c9928558b028161f295533444e83b66cedb2.f30.mp4",
                        "image_url": "https://img.kwcdn.com/product/fancy/5c6fc453-8e6d-454d-9b5a-e7af2a23c5dd.jpg",
                        "url": "https://img.kwcdn.com/product/794e7e2a41477106942f5f115dda0279ac56a7c7.goods.000001.jpeg"
                    },
                    "title": "CLOHOO Mens Solid Casual Mesh Loafers - Lightweight & Fashionable Slip-Ons with Air-Permeable Design for All-Day Comfort, Anti-Skid Soles Perfect for Outdoor Walking, Driving & Travel - Ideal for Spring, Summer, and Autumn",
                    "sales_tip_text_list": [
                        "22K+",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "1016848222",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6FVYKj5519mF2TbtHa2nwZmgK5M2TRxFGquzgMFcCOB4hBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "8155739436196041879",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "1016848222",
                        "g": "601099540010731",
                        "scene_id": "3",
                        "show_price": "2100",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "118",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "2537688135201847643",
                        "ts": "1763997832368"
                    },
                    "mall_id": 125534834472,
                    "sales_num": "22K+",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099540010731&_oak_name_id=2537688135201847643&_oak_mp_inf=EOutuqSm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F5c6fc453-8e6d-454d-9b5a-e7af2a23c5dd.jpg&spec_gallery_id=601099540010731&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjEwMA&_oak_gallery_order=1016848222%2C1595802116%2C311559607%2C1509355665%2C259763579",
                    "extend_fields": {
                        "sale_fire_flag": true,
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099540010731&_oak_name_id=2537688135201847643&_oak_mp_inf=EOutuqSm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F5c6fc453-8e6d-454d-9b5a-e7af2a23c5dd.jpg&spec_gallery_id=601099540010731&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjEwMA&_oak_gallery_order=1016848222%2C1595802116%2C311559607%2C1509355665%2C259763579&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "1016848222,1595802116,311559607,1509355665,259763579",
                            "_oak_name_id": "2537688135201847643"
                        }
                    },
                    "goods_tags": [
                        {
                            "icon_url": "https://aimg.kwcdn.com/upload_aimg/commodity/9aad9159-3b27-4530-95a1-f01a6a3b4ce7.png.slim.png",
                            "color": "#FB7701",
                            "ext_map": {
                                "stock_type": "1",
                                "simply_stock_tag_text": "4 LEFT!"
                            },
                            "prompt_tag_text": "The tag means that the inventory of an item corresponds to the number of units shown in the tag. The tag refers to the item currently selected. Sellers are responsible for inventory allocation and decide whether to display the tag. A product with this inventory label may be restocked later by the seller.",
                            "marketing_tag_type": 1000,
                            "rtl_icon_url": "https://aimg.kwcdn.com/upload_aimg/temu/c34873d8-3ccb-4599-bedf-4dd1dbb2f5c7.png.slim.png",
                            "tag_id": 91004,
                            "text": "Only 4 left",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 118,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "21",
                            ".00",
                            ""
                        ],
                        "reduction_text": [
                            "-63",
                            "%"
                        ],
                        "price": 2100,
                        "market_price_str": "$58.13",
                        "market_price": 5813,
                        "price_schema": "21.00",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "21.00",
                            ""
                        ],
                        "price_str": "$21.00",
                        "market_price_text": [
                            "$",
                            "58.13",
                            ""
                        ]
                    },
                    "image": {
                        "width": 375,
                        "id": 601099540010731,
                        "url_id": "8155739436196041879",
                        "url": "https://img.kwcdn.com/product/fancy/5c6fc453-8e6d-454d-9b5a-e7af2a23c5dd.jpg",
                        "height": 375
                    },
                    "sales_tip": "22K+ sold",
                    "visible": true,
                    "goods_id": 601099540010731,
                    "opt_id": 1546,
                    "seo_link_url": "/-mens-solid-casual-mesh-loafers-breathable-non-slip-slip-on-shoes-for-outdoor-walking-and-driving-spring-summer-and-autumn-g-601099540010731.html?&_oak_name_id=2537688135201847643&_oak_mp_inf=EOutuqSm1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II6p27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F5c6fc453-8e6d-454d-9b5a-e7af2a23c5dd.jpg&spec_gallery_id=601099540010731&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MjEwMA&_oak_gallery_order=1016848222%2C1595802116%2C311559607%2C1509355665%2C259763579",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "22K+",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 4.7,
                        "hidden_comment": false,
                        "comment_num_tips": "916"
                    },
                    "adult_goods": false
                },
                {
                    "thumb_url": "https://img.kwcdn.com/product/fancy/72587ebb-3566-40d0-ba80-fdb68454d20e.jpg",
                    "ware_house_type": 0,
                    "benefit_text": {
                        "text": ""
                    },
                    "item_type": 0,
                    "page_alt": "sneakers for men trail running shoes mens athletic mens casua fashion shoe male   walkingl hiking man",
                    "current_sku_id": 17593006944795,
                    "tags_info": {
                        "goods_tags": [
                            {
                                "color": "#555555",
                                "ext_map": {
                                    "lowest_tag_up_flag": "2",
                                    "lowest_price_before_title": "6m lowest"
                                },
                                "marketing_tag_type": 1000,
                                "tag_id": 91048,
                                "text": "Lowest price in half year",
                                "tag_series": 2
                            }
                        ]
                    },
                    "video": {
                        "video_url": ""
                    },
                    "title": "Sneakers for Men Trail Running Shoes Men'S Athletic Mens Casua Fashion Shoe Male Tennis Sport Walkingl Hiking Man",
                    "sales_tip_text_list": [
                        "164",
                        "sold"
                    ],
                    "p_rec": {
                        "list_id": "category_list_8c048e0579a14723bccd082fe0b206f8",
                        "item_type": "0",
                        "ad_goods": "0",
                        "mid": "69999906",
                        "final_creative_id": "411010595",
                        "sort_by_type": "873027542",
                        "st_model_point": "ClCr777yL9ZOIZQocgLTj1qDfwm6JlwuJdm/WB1/nX04eLZ/cMHjY0zFVcDq/CJaS6E1dX+9hmbVaz0CFqm/rW4qhGPeENo7SrsbagZao14jMRBnGEkiJDA1ZmM2YjVkLWRiY2YtNDcwNy04MDk5LTA1YmM2MjQyODcxNw==",
                        "scene": "opt",
                        "image_url_id": "3298240040393849954",
                        "show_currency": "USD",
                        "no_result": "0",
                        "offset": "80",
                        "engine_creative_id": "411010595",
                        "g": "601099723335720",
                        "scene_id": "3",
                        "show_price": "3754",
                        "opt_id": "1538",
                        "ts_req": "0",
                        "version": "5",
                        "search_id": "5YXo_F8MAq42aZzUFJiOBej7Qiyru0zwgpDW2Z2OPis=",
                        "gin_fallback": "0",
                        "opt_type": "0",
                        "goods_source": "rec",
                        "idx": "119",
                        "region": "211",
                        "bid": "69999705",
                        "cloud_env": "udpm1",
                        "creative_title_id": "7909585699690686660",
                        "ts": "1763997832368"
                    },
                    "mall_id": 634418211213759,
                    "sales_num": "164",
                    "link_url": "goods.html?_bg_fs=1&goods_id=601099723335720&_oak_name_id=7909585699690686660&_oak_mp_inf=EKjQ7%2Fum1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II%2Bp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F72587ebb-3566-40d0-ba80-fdb68454d20e.jpg&spec_gallery_id=2617881484&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzc1NA&_oak_gallery_order=411010595%2C1042878346%2C625488049%2C505169976%2C689967177",
                    "extend_fields": {
                        "floating_link_url": "goods.html?_bg_fs=1&goods_id=601099723335720&_oak_name_id=7909585699690686660&_oak_mp_inf=EKjQ7%2Fum1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II%2Bp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F72587ebb-3566-40d0-ba80-fdb68454d20e.jpg&spec_gallery_id=2617881484&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzc1NA&_oak_gallery_order=411010595%2C1042878346%2C625488049%2C505169976%2C689967177&goods_pop_style=1&floating_when_add_to_cart=1",
                        "support_tag_carousel": true,
                        "sku_extra_param": {
                            "_oak_gallery_order": "411010595,1042878346,625488049,505169976,689967177",
                            "_oak_name_id": "7909585699690686660"
                        }
                    },
                    "goods_tags": [
                        {
                            "color": "#555555",
                            "ext_map": {
                                "lowest_tag_up_flag": "2",
                                "lowest_price_before_title": "6m lowest"
                            },
                            "marketing_tag_type": 1000,
                            "tag_id": 91048,
                            "text": "Lowest price in half year",
                            "tag_series": 2
                        }
                    ],
                    "show_index": 119,
                    "price_info": {
                        "split_price_text": [
                            "$",
                            "37",
                            ".54",
                            ""
                        ],
                        "reduction_text": [],
                        "price": 3754,
                        "price_schema": "37.54",
                        "currency": "USD",
                        "price_text": [
                            "$",
                            "37.54",
                            ""
                        ],
                        "price_str": "$37.54"
                    },
                    "image": {
                        "width": 800,
                        "id": 2617881484,
                        "url_id": "3298240040393849954",
                        "url": "https://img.kwcdn.com/product/fancy/72587ebb-3566-40d0-ba80-fdb68454d20e.jpg",
                        "height": 800
                    },
                    "sales_tip": "164 sold",
                    "visible": true,
                    "goods_id": 601099723335720,
                    "opt_id": 1546,
                    "seo_link_url": "/sneakers-for-men-trail-running-shoes-mens-athletic-mens-casua-fashion-shoe-male--walkingl-hiking-man-g-601099723335720.html?&_oak_name_id=7909585699690686660&_oak_mp_inf=EKjQ7%2Fum1ogBGi5jYXRlZ29yeV9saXN0XzhjMDQ4ZTA1NzlhMTQ3MjNiY2NkMDgyZmUwYjIwNmY4II%2Bp27OrMw%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F72587ebb-3566-40d0-ba80-fdb68454d20e.jpg&spec_gallery_id=2617881484&refer_page_sn=10012&refer_source=0&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=Mzc1NA&_oak_gallery_order=411010595%2C1042878346%2C625488049%2C505169976%2C689967177",
                    "queryReleScore": 0.0,
                    "sales_tip_text": [
                        "164",
                        "sold"
                    ],
                    "opt_type": 3,
                    "comment": {
                        "goods_score": 5.0,
                        "hidden_comment": true,
                        "comment_num_tips": "4"
                    },
                    "adult_goods": false
                }
            ],
            "share_url": "https://share.temu.com/idZKK3Z1jSC",
            "extend_fields": {},
            "home_opt_module_list": [],
            "text_cart_button": false,
            "jump_type": 0,
            "recent_word": 0,
            "shield_all": false
        },
        "has_more": true
    },
    "success": true,
    "message": ""
}
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

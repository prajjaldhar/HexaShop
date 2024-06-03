// ProductData.js
const products = [
  {
    id: 1,
    title: "Product 2 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl: [
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1699426704/Croma%20Assets/CMS/Bank%20banners/Nov%202023/HP_Highlights_cromaacquisition_8nov2023_liehjw.png?tr=w-720",
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701192435/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/265843_0_f57bcl.png?tr=w-1000",
    ],
    category: "featured",
  },
  {
    id: 2,
    title: "Product 2 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1699450250/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Gifting%20Catalogue/Updated-8th/HP%20Highlights/HP_Highlights_CromaGiftingStore_Hero_MainBanner_4Nov2023_b4lhlr.jpg?tr=w-720",
    category: "featured",
  },
  {
    id: 3,
    title: "Product 3 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1692683867/Croma%20Assets/CMS/LP%20Page%20Banners/2023/KBC/HP_Highlights_KBC_21Aug2023_oktfmw.jpg?tr=w-720",
    category: "popular",
  },
  {
    id: 4,
    title: "Product 4 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698837489/Croma%20Assets/CMS/LP%20Page%20Banners/2023/CROMA%20STORE/November/Highlights/HP_Highlights_CromaOL_12oct2023-_1_yveflz.jpg?tr=w-720",
    category: "popular",
  },
  {
    id: 5,
    title: "Product 5 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1699676921/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Gift%20Card/HP_Highlights_giftingstore_9Nov2023_p4ci7m.jpg?tr=w-720",
    category: "featured",
  },
  {
    id: 6,
    title: "Product 6 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690798700/Croma%20Assets/CMS/Homepage%20Banners/Highlight2/HP_Highlights_Indulge_31July2023_sc84ea.png?tr=w-720",
    category: "popular",
  },
  {
    id: 7,
    title: "Product 7 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690220194/Croma%20Assets/CMS/LP%20Page%20Banners/2023/UNBOXED/UPDATE/2407/Unboxed_banner_24July23_njx30f.png?tr=w-480",
    category: "featured",
  },
  {
    id: 8,
    title: "Product 8 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683800225/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/HP%20Bugs/HP_Highlights_EMIStore_22Feb2023_qvegoj.jpg?tr=w-480",
    category: "popular",
  },
  {
    id: 9,
    title: "Product 8 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://i.pinimg.com/564x/3b/7a/28/3b7a28803e3cad213d34c871d202e911.jpg",
    category: "popular",
  },
  {
    id: 10,
    title: "Product 8 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://i.pinimg.com/564x/62/4a/fb/624afb41da7c57b9ca73ffd4b3e458ba.jpg",
    category: "popular",
  },
  {
    id: 11,
    title: "Product 8 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://i.pinimg.com/564x/70/8c/db/708cdb72ba0380133cd1cc10d168f211.jpg",
    category: "popular",
  },
  {
    id: 12,
    title: "Product 8 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://i.pinimg.com/564x/ba/0d/87/ba0d876cd9184c6096ee61dea8ae9de9.jpg",
    category: "popular",
  },
  {
    id: 13,
    title: "Product 13 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683109301/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/HP%20Bugs/Highlight_aw8gip.png?tr=w-720",
    category: "featured",
  },

  {
    id: 14,
    title: "Product 14 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1668170086/Croma%20Assets/CMS/HP_Highlights_E-Waste_11Nov2022_2_z19bgl.png?tr=w-720",
    category: "featured",
  },

  {
    id: 15,
    title: "Product 15 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://i.pinimg.com/564x/bf/d8/34/bfd834bd83682d49178b81c4c67d6957.jpg",
    category: "featured",
  },

  {
    id: 16,
    title: "Product 16 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://i.pinimg.com/564x/0a/5f/1a/0a5f1addc06d89fc3343c4024701015f.jpg",
    category: "featured",
  },
  {
    id: 17,
    title: "Product 17 Title",
    oldPrice: 79.99,
    price: 1019.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127791/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Budget/pcp_budget_Below30_16May2023_hp2unw.png?tr=w-720",
    category: "featured",
  },
  {
    id: 18,
    title: "Product 2 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127789/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Budget/pcp_budget_30-50_16May2023_xzlg6o.png?tr=w-720",
    category: "featured",
  },
  {
    id: 19,
    title: "Product 3 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127794/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Your%20laptop%20Your%20use/PCP_4split_LP_NC_Uses_Gaming_16May2023_albe3u.png?tr=w-720",
    category: "popular",
  },
  {
    id: 20,
    title: "Product 4 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698837489/Croma%20Assets/CMS/LP%20Page%20Banners/2023/CROMA%20STORE/November/Highlights/HP_Highlights_CromaOL_12oct2023-_1_yveflz.jpg?tr=w-720",
    category: "popular",
  },
  {
    id: 21,
    title: "Product 5 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127789/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Budget/pcp_budget_50-75_16May2023_fg0076.png?tr=w-720",
    category: "featured",
  },
  {
    id: 22,
    title: "Product 6 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      " https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683800225/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/HP%20Bugs/HP_Highlights_EMIStore_22Feb2023_qvegoj.jpg?tr=w-480",
    category: "popular",
  },
  {
    id: 23,
    title: "Product 7 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127790/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Budget/pcp_budget_75-100_16May2023_rc4ujc.png?tr=w-720",
    category: "featured",
  },
  {
    id: 24,
    title: "Product 8 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127794/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Your%20laptop%20Your%20use/PCP_4split_LP_NC_Uses_CC_16May2023_gwlxlt.png?tr=w-720",
    category: "popular",
  },
  {
    id: 25,
    title: "Product 8 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698293568/Croma%20Assets/CMS/Homepage%20Banners/Highlights/HP_Highlights_Zipcare_15Sept2023_urhyjg.jpg?tr=w-720",
    category: "popular",
  },
  {
    id: 26,
    title: "Product 8 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698229079/Croma%20Assets/CMS/PCP/Oct-2023/25-10-2023/Laptop%20PCP%20Your%20Laptop%2C%20Your%20Use/Desktop/pcp_laptops_EverydayUse_25Oct2023_fs1cn1.png?tr=w-720",
    category: "popular",
  },
  {
    id: 27,
    title: "Product 8 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127794/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Your%20laptop%20Your%20use/PCP_4split_LP_NC_Uses_Entertainment_16May2023_nxyxlu.png?tr=w-720",
    category: "popular",
  },
  {
    id: 28,
    title: "Product 8 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684236445/Croma%20Assets/CMS/Homepage%20Banners/Highlight2/HP_Highlights_DealsCorner_15Feb2023_vh0dcu.jpg?tr=w-720",
    category: "popular",
  },
  {
    id: 29,
    title: "Product 13 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1699676921/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Gift%20Card/HP_Highlights_giftingstore_9Nov2023_p4ci7m.jpg?tr=w-720",
    category: "featured",
  },

  {
    id: 30,
    title: "Product 14 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127789/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Budget/pcp_budget_100-200_16May2023_rhidob.png?tr=w-720",
    category: "featured",
  },

  {
    id: 31,
    title: "Product 15 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1688127791/Croma%20Assets/CMS/PCP/June%20-2023/30-06-2023/Laptop%20PCP/Desktop/Budget/pcp_budget_Above200_16May2023_nfvc99.png?tr=w-720",
    category: "featured",
  },

  {
    id: 32,
    title: "Product 16 Title",
    oldPrice: 79.99,
    price: 49.99,
    imageUrl:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1699450250/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Gifting%20Catalogue/Updated-8th/HP%20Highlights/HP_Highlights_CromaGiftingStore_Hero_MainBanner_4Nov2023_b4lhlr.jpg?tr=w-720",
    category: "featured",
  },
];

export default products;

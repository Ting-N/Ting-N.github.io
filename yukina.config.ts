import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Chobits.",
  subTitle: "Catch you catch me~",
  brandTitle: "Chobits.",

  description: "Ting-N Blog",

  site: 'https://ting-n.github.io/',

  locale: "zh-CN", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/Ting-N",
    },
  ],

  username: "Ting-N",
  sign: "~connect 心的连接~",
  avatarUrl: "https://raw.githubusercontent.com/Ting-N/Ting-N.github.io/master/src/images/avatar_pinkluo.jpg",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/Ting-N",
    },
    {
      icon: "mingcute:bilibili-line",
      link: "https://space.bilibili.com/354845425",
    }
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
  "https://raw.githubusercontent.com/Ting-N/Ting-N.github.io/master/src/images/banner_xiachong.jpg",
  "https://raw.githubusercontent.com/Ting-N/Ting-N.github.io/master/src/images/banner_ling.jpg",
  "https://raw.githubusercontent.com/Ting-N/Ting-N.github.io/master/src/images/banner_xinyinhe.jpg",
  "https://raw.githubusercontent.com/Ting-N/Ting-N.github.io/master/src/images/banner_zheguang.jpg",    
  "https://raw.githubusercontent.com/Ting-N/Ting-N.github.io/master/src/images/banner_qinxinyixia.jpg",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;

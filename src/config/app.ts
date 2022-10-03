export const i18nConfig = {
  LANGUAGES: {
    EN: "en",
  },
  CACHE: {
    LOCAL_STORAGE: "i18nextLang",
  },
};

type SubmenuType = {
  icon: string;
  name: string;
  link: string;
};

type SidebarList = {
  mainMenu: string;
  subMenu: SubmenuType[];
};

export const APP_ROUTES = {
  LOGIN: "/login",
  PURCHASE_CENTER: "/purchase-center",
  PAYMENT_CENTER: "/payment-center",
};

export const SIDEBAR_TOP_MENUS: SidebarList[] = [
  {
    mainMenu: "My Purchases",
    subMenu: [
      { icon: "", name: "Purchase Center", link: APP_ROUTES.PURCHASE_CENTER },
      { icon: "", name: "Payment Center", link: APP_ROUTES.PAYMENT_CENTER },
    ],
  },
  {
    mainMenu: "My Account",
    subMenu: [
      { icon: "", name: "Account Settings", link: "/account-settings" },
      { icon: "", name: "Document Center", link: "/document-center" },
      { icon: "", name: "Logout", link: "/logout" },
    ],
  },
];

export const SIDEBAR_BOTTOM_MENUS: SidebarList[] = [
  {
    mainMenu: "My Apps",
    subMenu: [
      { icon: "", name: "App store", link: "" },
      { icon: "", name: "Play store", link: "" },
    ],
  },
  {
    mainMenu: "Support",
    subMenu: [{ name: "contact", icon: "", link: "" }],
  },
];

import { BannerSlide, MenuCategory } from "./types";

export const MOCK_BANNERS: BannerSlide[] = [
  {
    id: "b1",
    title: "NEW ARRIVALS",
    subtitle: "RAMADAN EXCLUSIVE DEAL",
    bgColor: "#d31212",
    accentColor: "#fde047",
    image: require("../../../../assets/images/bannerImages/banner.png"),
  },
  {
    id: "b2",
    title: "50% OFF",
    subtitle: "MIDNIGHT CRAVINGS",
    bgColor: "#1e3a8a",
    accentColor: "#ffffff",
    image: require("../../../../assets/images/bannerImages/banner.png"),
  },
];

export const MOCK_CATEGORIES: MenuCategory[] = [
  {
    id: "c1",
    name: "Ramadan Exclusive Deal",
    bannerLabel: "RAMADAN FEAST",
    bannerColor: "#d31212",
    items: [
      {
        id: "i1",
        name: "RAMADAN EXCLUSIVE DEAL",
        description: "GET ANY LARGE PIZZA IN JUST 1299 pkr",
        price: 1299,
      },
    ],
  },
  {
    id: "c2",
    name: "Appetizers",
    bannerLabel: "APPETIZERS",
    bannerColor: "#d31212",
    items: [
      {
        id: "i2",
        name: "KABAB POPPERS (6 PCS)",
        description:
          "Juicy Kabab wrapped in pizza dough drenched in pizza sauce.",
        price: 650,
      },
      {
        id: "i3",
        name: "CHEESY GARLIC BREAD",
        description: "Freshly baked bread topped with rich mozzarella cheese.",
        price: 450,
      },
    ],
  },
  {
    id: "c3",
    name: "NEW ARRIVAL",
    bannerLabel: "NEW ARRIVALS",
    bannerColor: "#b45309",
    items: [
      {
        id: "i4",
        name: "BEEF STUFFED BURGER",
        description: "Juicy beef patty stuffed with cheese and special sauce.",
        price: 850,
      },
      {
        id: "i5",
        name: "LASAGNE FLORENTINE",
        description: "Rich layers of pasta, beef sauce and creamy cheese.",
        price: 1100,
      },
    ],
  },
  {
    id: "c4",
    name: "Crown Pizza",
    bannerLabel: "CROWN PIZZA",
    bannerColor: "#1e3a8a",
    items: [
      {
        id: "i6",
        name: "CHICKEN TIKKA CROWN",
        description:
          "Crown crust filled with kabab, topped with chicken tikka.",
        price: 1850,
      },
    ],
  },
  {
    id: "c5",
    name: "Pasta",
    bannerLabel: "PASTA",
    bannerColor: "#d31212",
    items: [
      {
        id: "i7",
        name: "CHICKEN ALFREDO",
        description:
          "Creamy fettuccine pasta with grilled chicken and mushrooms.",
        price: 950,
      },
    ],
  },
  {
    id: "c6",
    name: "Burgers",
    bannerLabel: "BURGERS",
    bannerColor: "#d31212",
    items: [
      {
        id: "i8",
        name: "ZINGER BURGER",
        description: "Crispy chicken thigh with fresh lettuce and mayo.",
        price: 650,
      },
    ],
  },
  {
    id: "c7",
    name: "Sandwiches",
    bannerLabel: "SANDWICHES",
    bannerColor: "#d31212",
    items: [
      {
        id: "i9",
        name: "CLUB SANDWICH",
        description: "Triple decker sandwich with chicken, egg, and cheese.",
        price: 750,
      },
    ],
  },
  {
    id: "c8",
    name: "Deals",
    bannerLabel: "DEALS",
    bannerColor: "#b45309",
    items: [
      {
        id: "i10",
        name: "FAMILY DEAL 1",
        description: "2 Large Pizzas, 1.5L Drink, Garlic Bread.",
        price: 3500,
      },
    ],
  },
  {
    id: "c9",
    name: "Drinks",
    bannerLabel: "DRINKS",
    bannerColor: "#1e3a8a",
    items: [
      {
        id: "i11",
        name: "PEPSI (1.5L)",
        description: "Chilled Pepsi 1.5 Liter.",
        price: 250,
      },
    ],
  },
  {
    id: "c10",
    name: "Desserts",
    bannerLabel: "DESSERTS",
    bannerColor: "#d31212",
    items: [
      {
        id: "i12",
        name: "MOLTEN LAVA CAKE",
        description: "Warm chocolate cake with a gooey chocolate center.",
        price: 550,
      },
    ],
  },
];

import { ImageSourcePropType } from 'react-native';

export interface MenuItemData {
  id: string;
  name: string;
  description: string;
  price: number;
  badge?: string; // e.g. "NEW", "HOT"
}

export interface MenuCategory {
  id: string;
  name: string;
  bannerColor: string;
  bannerLabel: string;
  items: MenuItemData[];
}

export interface BannerSlide {
  id: string;
  title: string;
  subtitle: string;
  bgColor: string;
  accentColor: string;
  image?: ImageSourcePropType; // optional local/remote image
}

import { COLORS } from "@/core/ui/theme";
import { verticalScale } from "@/core/utils/scale";
import React from "react";
import { Animated, FlatList, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader } from "./HomeHeader";
import { styles } from "./HomeScreenStyles";
import { CarouselBanner } from "./components/CarouselBanner";
import { CategoryTabs } from "./components/CategoryTabs";
import { MenuItem } from "./components/MenuItem";
import { MenuSectionHeader } from "./components/MenuSectionHeader";
import { BannerSlide, MenuCategory, MenuItemData } from "./types";

const TABS_HEIGHT = verticalScale(48);

export type ListItem =
  | { type: "header"; id: string; category: MenuCategory }
  | { type: "item"; id: string; item: MenuItemData; categoryId: string };

export type HomeScreenProps = {
  // Header
  locationName: string;
  searchText: string;
  onSearchChange: (text: string) => void;
  onHamburgerPress: () => void;
  onLogoPress: () => void;
  onLocationPress: () => void;
  // Data
  banners: BannerSlide[];
  categories: MenuCategory[];
  listData: ListItem[];
  activeCategoryId: string;
  // Animated
  flatListRef: React.RefObject<FlatList<ListItem>>;
  scrollY: Animated.Value;
  carouselHeight: number;
  tabsTranslateY: Animated.AnimatedInterpolation<number>;
  // Handlers
  onCarouselLayout: (height: number) => void;
  onCategoryPress: (category: MenuCategory) => void;
  onAddItem: (item: MenuItemData) => void;
  onViewableItemsChanged: (info: { viewableItems: any[] }) => void;
  viewabilityConfig: { itemVisiblePercentThreshold: number; minimumViewTime: number };
  onScrollToIndexFailed: (info: { index: number; averageItemLength: number }) => void;
};

export function HomeScreen({
  locationName,
  searchText,
  onSearchChange,
  onHamburgerPress,
  onLogoPress,
  onLocationPress,
  banners,
  categories,
  listData,
  activeCategoryId,
  flatListRef,
  scrollY,
  carouselHeight,
  tabsTranslateY,
  onCarouselLayout,
  onCategoryPress,
  onAddItem,
  onViewableItemsChanged,
  viewabilityConfig,
  onScrollToIndexFailed,
}: HomeScreenProps) {
  const renderItem = ({ item }: { item: ListItem }) => {
    if (item.type === "header")
      return <MenuSectionHeader category={item.category} />;
    if (item.type === "item")
      return <MenuItem item={item.item} onAddPress={onAddItem} />;
    return null;
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.headerBg} />
      <SafeAreaView style={styles.safe} edges={["top"]}>
        {/* ① FIXED — App Header never moves */}
        <HomeHeader
          locationName={locationName}
          searchText={searchText}
          onSearchChange={onSearchChange}
          onHamburgerPress={onHamburgerPress}
          onLogoPress={onLogoPress}
          onLocationPress={onLocationPress}
        />

        {/* ② Scroll area — overflow:hidden clips carousel overlay at this
            boundary so it disappears at HomeHeader's bottom, not above it. */}
        <View style={{ flex: 1, overflow: "hidden" }}>
          {/* ③ FlatList — paddingTop reserves space for the overlays above */}
          <Animated.FlatList
            ref={flatListRef as any}
            data={listData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            style={styles.scrollView}
            contentContainerStyle={[
              styles.scrollContent,
              { paddingTop: carouselHeight + TABS_HEIGHT },
            ]}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            scrollEventThrottle={16}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            onScrollToIndexFailed={onScrollToIndexFailed}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={21}
            removeClippedSubviews={false}
          />

          {/* ④ Carousel overlay — translates up with scroll, disappears */}
          {banners.length > 0 && (
            <Animated.View
              pointerEvents="box-none"
              onLayout={(e) => onCarouselLayout(e.nativeEvent.layout.height)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                transform: [{ translateY: tabsTranslateY }],
              }}
            >
              <CarouselBanner data={banners} />
              <View style={styles.bannerSpacer} />
            </Animated.View>
          )}

          {/* ⑤ CategoryTabs overlay — follows carousel, sticks at top */}
          {categories.length > 0 && (
            <Animated.View
              style={{
                position: "absolute",
                top: carouselHeight,
                left: 0,
                right: 0,
                elevation: 4,
                transform: [{ translateY: tabsTranslateY }],
              }}
            >
              <CategoryTabs
                categories={categories}
                activeCategoryId={activeCategoryId}
                onCategoryPress={onCategoryPress}
              />
            </Animated.View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

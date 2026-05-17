import React, { useCallback, useMemo, useRef, useState } from "react";
import { Animated, FlatList, ViewToken } from "react-native";
import { HomeScreen, ListItem } from "./HomeScreen";
import { MOCK_BANNERS, MOCK_CATEGORIES } from "./mockData";
import { MenuCategory, MenuItemData } from "./types";

// ─── Container ────────────────────────────────────────────────────────────────

export default function HomeScreenContainer() {
  // ── Header state ────────────────────────────────────────────────────────────
  const [searchText, setSearchText] = useState("");
  const [locationName] = useState("Kababjees Pizza Blo...");

  // ── Scroll / animation refs ─────────────────────────────────────────────────
  const flatListRef = useRef<FlatList<ListItem>>(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [carouselHeight, setCarouselHeight] = useState(200);

  const tabsTranslateY = useMemo(
    () =>
      scrollY.interpolate({
        inputRange: [0, carouselHeight],
        outputRange: [0, -carouselHeight],
        extrapolate: "clamp",
      }),
    [carouselHeight, scrollY],
  );

  // ── Scroll-spy state ────────────────────────────────────────────────────────
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    MOCK_CATEGORIES[0]?.id || "",
  );
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ── Derived: flat list data ─────────────────────────────────────────────────
  const listData = useMemo<ListItem[]>(() => {
    const data: ListItem[] = [];
    MOCK_CATEGORIES.forEach((category) => {
      data.push({ type: "header", id: `header-${category.id}`, category });
      category.items.forEach((item) => {
        data.push({
          type: "item",
          id: `item-${item.id}`,
          item,
          categoryId: category.id,
        });
      });
    });
    return data;
  }, []);

  // ── Viewability config (stable ref, never recreated) ────────────────────────
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 10,
    minimumViewTime: 50,
  }).current;

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleHamburgerPress = useCallback(() => {
    console.log("Hamburger pressed");
    // TODO: open drawer/brand menu
  }, []);

  const handleLogoPress = useCallback(() => {
    console.log("Logo pressed");
    // TODO: navigate to brand home
  }, []);

  const handleLocationPress = useCallback(() => {
    console.log("Location picker pressed");
    // TODO: open location picker modal
  }, []);

  const handleCarouselLayout = useCallback((height: number) => {
    setCarouselHeight(height);
  }, []);

  const handleAddItem = useCallback((item: MenuItemData) => {
    console.log("Add item:", item.name);
    // TODO: dispatch add to cart action
  }, []);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (isProgrammaticScrollRef.current || !viewableItems.length) return;
      const top = viewableItems.find(
        (v) => v.item.type === "header" || v.item.type === "item",
      );
      if (top) {
        const id =
          top.item.type === "header"
            ? top.item.category.id
            : top.item.categoryId;
        if (id !== activeCategoryId) setActiveCategoryId(id);
      }
    },
    [activeCategoryId],
  );

  const handleCategoryPress = useCallback(
    (category: MenuCategory) => {
      isProgrammaticScrollRef.current = true;
      setActiveCategoryId(category.id);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 800);
      const idx = listData.findIndex(
        (item) => item.type === "header" && item.category.id === category.id,
      );
      if (idx !== -1 && flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: idx,
          animated: true,
          viewPosition: 0,
        });
      }
    },
    [listData],
  );

  const onScrollToIndexFailed = useCallback(
    (info: { index: number; averageItemLength: number }) => {
      flatListRef.current?.scrollToOffset({
        offset: info.averageItemLength * info.index,
        animated: true,
      });
      setTimeout(() => {
        flatListRef.current?.scrollToIndex({
          index: info.index,
          animated: true,
          viewPosition: 0,
        });
      }, 100);
    },
    [],
  );

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <HomeScreen
      // Header
      locationName={locationName}
      searchText={searchText}
      onSearchChange={setSearchText}
      onHamburgerPress={handleHamburgerPress}
      onLogoPress={handleLogoPress}
      onLocationPress={handleLocationPress}
      // Data
      banners={MOCK_BANNERS}
      categories={MOCK_CATEGORIES}
      listData={listData}
      activeCategoryId={activeCategoryId}
      // Animated
      flatListRef={flatListRef}
      scrollY={scrollY}
      carouselHeight={carouselHeight}
      tabsTranslateY={tabsTranslateY}
      // Handlers
      onCarouselLayout={handleCarouselLayout}
      onCategoryPress={handleCategoryPress}
      onAddItem={handleAddItem}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      onScrollToIndexFailed={onScrollToIndexFailed}
    />
  );
}

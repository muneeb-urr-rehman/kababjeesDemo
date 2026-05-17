import { Text } from "@/core/ui";
import { COLORS } from "@/core/ui/theme";
import { moderateScale, scale, verticalScale } from "@/core/utils/scale";
import React, { useEffect, useRef } from "react";
import {
  Dimensions,
  LayoutChangeEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { MenuCategory } from "../types";

const { width: windowWidth } = Dimensions.get("window");

interface Props {
  categories: MenuCategory[];
  activeCategoryId: string;
  onCategoryPress: (category: MenuCategory) => void;
}

export function CategoryTabs({
  categories,
  activeCategoryId,
  onCategoryPress,
}: Props) {
  const scrollViewRef = useRef<ScrollView>(null);
  const tabLayouts = useRef<{ [id: string]: { x: number; width: number } }>({});

  const scrollToActiveTab = () => {
    const layout = tabLayouts.current[activeCategoryId];
    if (layout && scrollViewRef.current) {
      const centerPosition = layout.x + layout.width / 2;
      const scrollPosition = Math.max(0, centerPosition - windowWidth / 2);

      scrollViewRef.current.scrollTo({
        x: scrollPosition,
        animated: true,
      });
    }
  };

  // Precise auto-scroll to center the active tab
  useEffect(() => {
    // We add a small timeout to ensure the UI has finished any layout changes
    // and the scrollView is fully ready to accept scrollTo commands.
    const timeout = setTimeout(() => {
      scrollToActiveTab();
    }, 50);
    return () => clearTimeout(timeout);
  }, [activeCategoryId]);

  const handleTabLayout = (id: string, event: LayoutChangeEvent) => {
    tabLayouts.current[id] = event.nativeEvent.layout;
    if (id === activeCategoryId) {
      scrollToActiveTab();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;
          return (
            <Pressable
              key={category.id}
              style={styles.tab}
              onLayout={(e) => handleTabLayout(category.id, e)}
              onPress={() => onCategoryPress(category)}
            >
              <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                {category.name}
              </Text>
              {isActive && <View style={styles.indicator} />}
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
  },
  scrollContent: {
    paddingHorizontal: scale(8),
  },
  tab: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(14),
    position: "relative",
  },
  tabText: {
    color: COLORS.textSecondary,
    fontSize: moderateScale(14),
    fontWeight: "500",
  },
  activeTabText: {
    color: COLORS.textPrimary,
    fontWeight: "800",
  },
  indicator: {
    position: "absolute",
    bottom: -1, // cover the bottom border of the container
    left: scale(16), // perfectly align with text
    right: scale(16),
    height: verticalScale(3),
    backgroundColor: COLORS.brand1,
    borderTopLeftRadius: scale(3),
    borderTopRightRadius: scale(3),
  },
});

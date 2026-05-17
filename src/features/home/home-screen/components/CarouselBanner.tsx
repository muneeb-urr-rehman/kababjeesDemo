import { Text } from "@/core/ui";
import { COLORS } from "@/core/ui/theme";
import { moderateScale, scale, verticalScale } from "@/core/utils/scale";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";
import { BannerSlide } from "../types";

const { width: windowWidth } = Dimensions.get("window");

interface Props {
  data: BannerSlide[];
  autoPlayInterval?: number;
}

export function CarouselBanner({ data, autoPlayInterval = 3000 }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (data.length <= 1) return;

    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= data.length) {
        nextIndex = 0;
      }
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [activeIndex, data.length, autoPlayInterval]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollPositionRef.current = event.nativeEvent.contentOffset.x;
  };

  const onMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const renderItem = ({ item }: { item: BannerSlide }) => (
    <View style={styles.slideContainer}>
      <View style={[styles.card, { backgroundColor: item.bgColor }]}>
        {item.image ? (
          <Image
            source={item.image}
            style={styles.fullBannerImage}
            resizeMode="stretch"
          />
        ) : (
          <View style={styles.fallbackContainer}>
            <Text style={styles.imageEmoji}>🍔</Text>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        onMomentumScrollEnd={onMomentumScrollEnd}
        scrollEventThrottle={16}
        getItemLayout={(_, index) => ({
          length: windowWidth,
          offset: windowWidth * index,
          index,
        })}
      />

      {/* Pagination Dots */}
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: verticalScale(180),
    backgroundColor: COLORS.cardBorder, // match the background of the screen
    position: "relative",
    paddingTop: verticalScale(12),
  },
  slideContainer: {
    width: windowWidth,
    height: "100%",
    paddingHorizontal: scale(16),
  },
  card: {
    flex: 1,
    borderRadius: scale(12),
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(20),
    justifyContent: "center",
    overflow: "hidden",
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fullBannerImage: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  imageEmoji: {
    fontSize: moderateScale(80),
  },
  paginationContainer: {
    position: "absolute",
    bottom: verticalScale(16),
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: scale(6),
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: scale(3),
    backgroundColor: "rgba(255,255,255,0.4)",
  },
  activeDot: {
    backgroundColor: COLORS.headerBg,
    width: scale(16),
  },
});

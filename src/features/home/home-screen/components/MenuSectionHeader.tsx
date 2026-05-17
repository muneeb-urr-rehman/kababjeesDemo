import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@/core/ui';
import { COLORS } from '@/core/ui/theme';
import { scale, verticalScale, moderateScale } from '@/core/utils/scale';
import { MenuCategory } from '../types';

interface Props {
  category: MenuCategory;
}

export const MenuSectionHeader = memo(function MenuSectionHeader({ category }: Props) {
  return (
    <View style={[styles.banner, { backgroundColor: category.bannerColor }]}>
      <Text style={styles.bannerLabel}>{category.bannerLabel}</Text>
      <View style={styles.bannerAccent}>
        <Text style={styles.bannerAccentText}>🍕</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  banner: {
    height: verticalScale(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    marginHorizontal: scale(16),
    marginTop: verticalScale(16),
    marginBottom: verticalScale(12),
    borderRadius: scale(12),
    overflow: 'hidden',
  },
  bannerLabel: {
    color: COLORS.white,
    fontSize: moderateScale(26),
    letterSpacing: moderateScale(1),
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  bannerAccent: {
    width: scale(72),
    height: scale(72),
    borderRadius: scale(36),
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerAccentText: {
    fontSize: moderateScale(36),
  },
});

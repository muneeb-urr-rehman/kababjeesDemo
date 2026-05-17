import React, { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from '@/core/ui';
import { COLORS } from '@/core/ui/theme';
import { scale, verticalScale, moderateScale } from '@/core/utils/scale';
import { MenuItemData } from '../types';

interface Props {
  item: MenuItemData;
  onAddPress?: (item: MenuItemData) => void;
}

export const MenuItem = memo(function MenuItem({ item, onAddPress }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.textBlock}>
        <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.description} variant="caption" numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.price} bold>Rs. {item.price.toLocaleString()}</Text>
      </View>

      <View style={styles.rightBlock}>
        {/* Colored thumbnail placeholder */}
        <View style={styles.thumbnail}>
          <Text style={styles.thumbnailEmoji}>🍽️</Text>
        </View>
        <Pressable
          style={styles.addBtn}
          onPress={() => onAddPress?.(item)}
          hitSlop={8}
        >
          <Text style={styles.addBtnText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    marginHorizontal: scale(16),
    marginBottom: verticalScale(12),
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(12),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  textBlock: {
    flex: 1,
    paddingRight: scale(12),
    justifyContent: 'center',
    gap: verticalScale(3),
  },
  name: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  description: {
    color: COLORS.textSecondary,
    lineHeight: moderateScale(17),
  },
  price: {
    color: COLORS.brand1,
    fontSize: moderateScale(14),
    marginTop: verticalScale(4),
  },
  rightBlock: {
    position: 'relative',
    justifyContent: 'center',
  },
  thumbnail: {
    width: scale(90),
    height: scale(90),
    borderRadius: scale(8),
    backgroundColor: COLORS.searchBg,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  thumbnailEmoji: {
    fontSize: moderateScale(40),
  },
  addBtn: {
    position: 'absolute',
    bottom: -scale(4),
    right: -scale(4),
    backgroundColor: '#eab308', // kababjees yellow
    width: scale(28),
    height: scale(28),
    borderRadius: scale(14),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  addBtnText: {
    color: COLORS.white,
    fontSize: moderateScale(20),
    lineHeight: moderateScale(22),
    fontWeight: '600',
  },
});

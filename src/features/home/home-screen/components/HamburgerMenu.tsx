import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from '@/core/ui';
import { COLORS } from '@/core/ui/theme';
import { scale, verticalScale, moderateScale } from '@/core/utils/scale';

type Props = {
  onPress?: () => void;
};

export function HamburgerMenu({ onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.container} hitSlop={8}>
      <View style={styles.iconWrapper}>
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
      </View>
      <Text style={styles.label}>CHANGE{'\n'}BRAND</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },
  iconWrapper: {
    gap: verticalScale(4),
    justifyContent: 'center',
  },
  bar: {
    width: scale(20),
    height: 2,
    backgroundColor: COLORS.white,
    borderRadius: 2,
  },
  label: {
    color: COLORS.white,
    fontSize: moderateScale(10),
    fontWeight: '700',
    letterSpacing: moderateScale(0.5),
    lineHeight: moderateScale(14),
  },
});

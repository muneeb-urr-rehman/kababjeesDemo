import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text } from '@/core/ui';
import { COLORS } from '@/core/ui/theme';
import { scale, verticalScale, moderateScale } from '@/core/utils/scale';

type Props = {
  locationName: string;
  onPress?: () => void;
};

export function LocationPicker({ locationName, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.container} hitSlop={8}>
      <Text style={styles.label}>Change Location</Text>
      <Text style={styles.locationName} numberOfLines={1}>
        {locationName}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    maxWidth: scale(120),
  },
  label: {
    color: COLORS.white,
    fontSize: moderateScale(10),
    fontWeight: '400',
    marginBottom: verticalScale(2),
    opacity: 0.9,
  },
  locationName: {
    color: COLORS.white,
    fontSize: moderateScale(12),
    fontWeight: '700',
  },
});

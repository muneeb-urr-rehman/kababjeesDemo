import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';
import { Text } from './Text';
import { COLORS } from '@/core/ui/theme';
import { scale, verticalScale, moderateScale } from '@/core/utils/scale';

interface FeatureRowProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureRow({ icon, title, description }: FeatureRowProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  return (
    <Pressable
      onPressIn={() => Animated.spring(scaleAnim, { toValue: 0.97, friction: 8, useNativeDriver: true }).start()}
      onPressOut={() => Animated.spring(scaleAnim, { toValue: 1, friction: 8, useNativeDriver: true }).start()}
    >
      <Animated.View style={[styles.featureRow, { transform: [{ scale: scaleAnim }] }]}>
        <View style={styles.featureIconWrapper}>
          <Text style={styles.featureIcon}>{icon}</Text>
        </View>
        <View style={styles.featureText}>
          <Text style={styles.featureTitle} bold>{title}</Text>
          <Text style={styles.featureDesc} variant="caption">{description}</Text>
        </View>
        <Text style={styles.featureChevron} variant="h3">›</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(14),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
    gap: scale(12),
  },
  featureIconWrapper: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(10),
    backgroundColor: COLORS.brandLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureIcon: { fontSize: moderateScale(20) },
  featureText: { flex: 1 },
  featureTitle: {
    fontSize: moderateScale(15),
    marginBottom: verticalScale(2),
  },
  featureDesc: {
    fontSize: moderateScale(12),
  },
  featureChevron: {
    color: COLORS.textSecondary,
    fontWeight: '300',
  },
});

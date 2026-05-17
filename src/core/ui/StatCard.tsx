import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { Text } from './Text';
import { COLORS } from '@/core/ui/theme';
import { scale, verticalScale, moderateScale } from '@/core/utils/scale';

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const onPress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 0.94, duration: 80, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 4, useNativeDriver: true }),
    ]).start();
  };

  return (
    <Pressable onPress={onPress} style={styles.statCardWrapper}>
      <Animated.View style={[styles.statCard, { transform: [{ scale: scaleAnim }] }]}>
        <Text style={styles.statValue} bold>{value}</Text>
        <Text style={styles.statLabel} variant="caption">{label}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  statCardWrapper: { flex: 1 },
  statCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: scale(16),
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    padding: scale(16),
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
  },
  statValue: {
    color: COLORS.brand1,
    fontSize: moderateScale(22),
    marginBottom: verticalScale(4),
  },
  statLabel: {
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: moderateScale(0.8),
  },
});

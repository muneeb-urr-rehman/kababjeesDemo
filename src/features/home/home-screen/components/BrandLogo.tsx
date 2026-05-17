import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { COLORS } from '@/core/ui/theme';
import { scale } from '@/core/utils/scale';

type Props = {
  onPress?: () => void;
};

export function BrandLogo({ onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.logoBox}>
        <Image
          source={require('@/assets/images/splash-icon.png')}
          style={styles.logo}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  logoBox: {
    width: scale(64),
    height: scale(64),
    borderRadius: scale(12),
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  logo: {
    width: scale(56),
    height: scale(56),
    resizeMode: 'contain',
  },
});

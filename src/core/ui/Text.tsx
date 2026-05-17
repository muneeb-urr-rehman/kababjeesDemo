import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { COLORS } from '@/core/ui/theme';
import { moderateScale } from '@/core/utils/scale';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption';

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
  color?: string;
  bold?: boolean;
}

export function Text({
  children,
  variant = 'body',
  color,
  bold,
  style,
  ...props
}: TextProps) {
  const getStyleForVariant = (v: TextVariant) => {
    switch (v) {
      case 'h1':
        return styles.h1;
      case 'h2':
        return styles.h2;
      case 'h3':
        return styles.h3;
      case 'caption':
        return styles.caption;
      case 'body':
      default:
        return styles.body;
    }
  };

  const baseStyle = getStyleForVariant(variant);
  const flattenedStyle = StyleSheet.flatten([baseStyle, style]) || {};
  
  let fontWeight = flattenedStyle.fontWeight || (bold ? '700' : '400');
  let fontFamily = 'Inter_400Regular';
  
  if (['h1', 'h2', 'h3'].includes(variant)) {
    // Oswald family
    if (fontWeight === '700' || fontWeight === '800' || fontWeight === '900' || fontWeight === 'bold') {
      fontFamily = 'Oswald_700Bold';
    } else if (fontWeight === '600') {
      fontFamily = 'Oswald_600SemiBold';
    } else if (fontWeight === '500') {
      fontFamily = 'Oswald_500Medium';
    } else {
      fontFamily = 'Oswald_400Regular';
    }
  } else {
    // Inter family
    if (fontWeight === '700' || fontWeight === '800' || fontWeight === '900' || fontWeight === 'bold') {
      fontFamily = 'Inter_700Bold';
    } else if (fontWeight === '600') {
      fontFamily = 'Inter_600SemiBold';
    } else if (fontWeight === '500') {
      fontFamily = 'Inter_500Medium';
    } else {
      fontFamily = 'Inter_400Regular';
    }
  }

  // Remove fontWeight to avoid Android font conflicts, apply our calculated fontFamily
  const finalStyle = { ...flattenedStyle, fontFamily, color: color || flattenedStyle.color };
  delete finalStyle.fontWeight;

  return (
    <RNText
      style={finalStyle}
      {...props}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: moderateScale(32),
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  h2: {
    fontSize: moderateScale(26),
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  h3: {
    fontSize: moderateScale(17),
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  body: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: COLORS.textPrimary,
  },
  caption: {
    fontSize: moderateScale(11),
    fontWeight: '400',
    color: COLORS.textSecondary,
  },
});

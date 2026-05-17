import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale, SIZES } from '@/core/utils/scale';
import { COLORS } from '@/core/ui/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripple: {
    position: 'absolute',
    width: SIZES.width * 1.5,
    height: SIZES.width * 1.5,
    borderRadius: SIZES.width,
    backgroundColor: COLORS.brandLight, // Light ripple
  },
  logoWrapper: {
    marginBottom: verticalScale(24),
  },
  logoImage: {
    width: scale(200),
    height: scale(200),
    resizeMode: 'contain',
  },
  appName: {
    fontSize: moderateScale(32),
    fontWeight: '700',
    color: COLORS.brand1, // Red text for Kababjees
    letterSpacing: moderateScale(1.2),
    marginBottom: verticalScale(12),
  },
  tagline: {
    fontSize: moderateScale(15),
    color: COLORS.textSecondary,
    letterSpacing: moderateScale(0.5),
    fontWeight: '400',
  },
  dotsRow: {
    flexDirection: 'row',
    gap: scale(8),
    marginTop: verticalScale(40),
    position: 'absolute',
    bottom: verticalScale(60),
  },
  dot: {
    width: scale(7),
    height: scale(7),
    borderRadius: scale(4),
    backgroundColor: COLORS.cardBorder,
  },
  dotActive: {
    backgroundColor: COLORS.brand1,
    width: scale(20),
  },
});

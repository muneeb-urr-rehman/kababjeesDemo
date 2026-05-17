import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Baseline dimensions based on standard mobile device (e.g., iPhone 11)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

/**
 * Scales a value proportionally based on screen width.
 * Best used for widths, horizontal margins/padding, and overall layout sizing.
 */
export const scale = (size: number) => (width / guidelineBaseWidth) * size;

/**
 * Scales a value proportionally based on screen height.
 * Best used for heights and vertical margins/padding.
 */
export const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

/**
 * Non-linear scaling factor. Good for font sizes to prevent them from becoming
 * massively oversized on tablets.
 * @param factor - Determines how aggressive the scaling is (0.5 is default).
 */
export const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor;

/**
 * Window dimension constants for quick reference.
 */
export const SIZES = {
  width,
  height,
};

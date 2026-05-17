import { COLORS } from "@/core/ui/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  safe: {
    flex: 1,
    backgroundColor: COLORS.headerBg,
  },
  scrollView: {
    flex: 1,
    backgroundColor: COLORS.cardBorder, // light grey gap between sections
  },
  scrollContent: {
    paddingBottom: 40,
  },
  // Gap between banner and first section
  bannerSpacer: {
    height: 12,
    backgroundColor: COLORS.cardBorder,
  }
});

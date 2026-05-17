import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '@/core/ui/theme';
import { scale, verticalScale } from '@/core/utils/scale';
import { HamburgerMenu } from './components/HamburgerMenu';
import { BrandLogo } from './components/BrandLogo';
import { LocationPicker } from './components/LocationPicker';
import { SearchBar } from './components/SearchBar';

type Props = {
  locationName: string;
  searchText: string;
  onSearchChange: (text: string) => void;
  onHamburgerPress?: () => void;
  onLogoPress?: () => void;
  onLocationPress?: () => void;
};

export function HomeHeader({
  locationName,
  searchText,
  onSearchChange,
  onHamburgerPress,
  onLogoPress,
  onLocationPress,
}: Props) {
  return (
    <View style={styles.wrapper}>
      {/* Top row: hamburger | logo | location */}
      <View style={styles.topRow}>
        <HamburgerMenu onPress={onHamburgerPress} />
        <BrandLogo onPress={onLogoPress} />
        <LocationPicker locationName={locationName} onPress={onLocationPress} />
      </View>

      {/* Search bar */}
      <SearchBar
        value={searchText}
        onChangeText={onSearchChange}
        placeholder="Search Your Favourite Food"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.headerBg,
    paddingTop: verticalScale(12),
    paddingBottom: verticalScale(4),
    paddingHorizontal: scale(16),
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(4),
  },
});

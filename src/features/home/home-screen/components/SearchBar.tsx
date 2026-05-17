import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Text } from '@/core/ui';
import { COLORS } from '@/core/ui/theme';
import { scale, verticalScale, moderateScale } from '@/core/utils/scale';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export function SearchBar({ value, onChangeText, placeholder = 'Search Your Favourite Food' }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔍</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textSecondary}
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.searchBg,
    marginHorizontal: scale(12),
    marginVertical: verticalScale(10),
    borderRadius: scale(10),
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(10),
    gap: scale(8),
  },
  icon: {
    fontSize: moderateScale(16),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(14),
    color: COLORS.textPrimary,
    padding: 0,
  },
});

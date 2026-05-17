import React from 'react';

/**
 * AppContainer — top-level provider wrapper.
 *
 * NOTE: Do NOT add NavigationContainer here. Expo Router already provides
 * it internally via expo-router/entry. Adding a second one will throw
 * "Another navigation context was found".
 *
 * Add any app-wide providers here as the project grows:
 *   - Zustand store provider
 *   - Theme / color scheme context
 *   - Toast / modal portals
 *   - QueryClientProvider (React Query)
 */
export default function AppContainer({ children }: { children?: React.ReactNode }) {
  // Example — wrap with providers as needed:
  // return <ThemeProvider><QueryClientProvider>{children}</QueryClientProvider></ThemeProvider>
  return <>{children}</>;
}

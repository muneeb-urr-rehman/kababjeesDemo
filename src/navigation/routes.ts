/**
 * Constant definitions for all screen routes in the app.
 * Use these instead of hardcoded strings for navigation.
 */

export const ROUTES = {
  SPLASH: '/' as const,
  HOME: '/home' as const,
};

export type AppRoutes = typeof ROUTES[keyof typeof ROUTES];

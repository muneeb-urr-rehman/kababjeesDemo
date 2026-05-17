/**
 * RootNavigator — route definitions & screen options for the app.
 *
 * This project uses Expo Router (file-based routing).
 * The physical route files live in src/app/:
 *
 *   src/app/_layout.tsx  →  Stack shell (headerShown: false, animation: fade)
 *   src/app/index.tsx    →  re-exports features/auth/SplashScreen  (route: "/")
 *   src/app/home.tsx     →  re-exports features/home/HomeScreen     (route: "/home")
 *
 * Screen components live in their feature folders:
 *   src/features/auth/SplashScreen.tsx
 *   src/features/home/HomeScreen.tsx
 *
 * To add a new route:
 *   1. Create src/app/<name>.tsx  and re-export from the feature folder.
 *   2. Add the route type below so TypeScript catches bad hrefs.
 */

export { AppRoutes, ROUTES } from './routes';

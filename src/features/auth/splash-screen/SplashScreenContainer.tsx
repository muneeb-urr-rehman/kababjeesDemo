import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import { ROUTES } from "@/navigation/routes";
import { SplashScreen } from "./SplashScreen";

export default function SplashScreenContainer() {
  // Animation values
  const logoScale = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const taglineY = useRef(new Animated.Value(20)).current;
  const circleScale = useRef(new Animated.Value(0)).current;
  const circleOpacity = useRef(new Animated.Value(0.6)).current;
  const screenOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      // 1. Ripple burst
      Animated.parallel([
        Animated.timing(circleScale, {
          toValue: 1,
          duration: 600,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
        Animated.timing(circleOpacity, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),

      // 2. Logo spring in
      Animated.parallel([
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 5,
          tension: 80,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),

      // 3. Tagline slide-up
      Animated.parallel([
        Animated.timing(taglineOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(taglineY, {
          toValue: 0,
          duration: 400,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]),

      // 4. Hold for 10 seconds
      Animated.delay(1000),

      // 5. Fade out
      Animated.timing(screenOpacity, {
        toValue: 0,
        duration: 500,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigate to Home and remove Splash from the stack
      router.replace(ROUTES.HOME);
    });
  }, []);

  return (
    <SplashScreen
      screenOpacity={screenOpacity}
      circleOpacity={circleOpacity}
      circleScale={circleScale}
      logoOpacity={logoOpacity}
      logoScale={logoScale}
      taglineOpacity={taglineOpacity}
      taglineY={taglineY}
    />
  );
}

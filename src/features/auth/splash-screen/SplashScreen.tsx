import React from "react";
import { Animated, Image } from "react-native";
import { Text } from "@/core/ui";
import { styles } from "./SplashScreenStyles";

const AnimatedText = Animated.createAnimatedComponent(Text);

export type SplashScreenProps = {
  screenOpacity: Animated.Value;
  circleOpacity: Animated.Value;
  circleScale: Animated.Value;
  logoOpacity: Animated.Value;
  logoScale: Animated.Value;
  taglineOpacity: Animated.Value;
  taglineY: Animated.Value;
};

export function SplashScreen({
  screenOpacity,
  circleOpacity,
  circleScale,
  logoOpacity,
  logoScale,
  taglineOpacity,
  taglineY,
}: SplashScreenProps) {
  return (
    <Animated.View style={[styles.container, { opacity: screenOpacity }]}>
      {/* Ripple circle */}
      <Animated.View
        style={[
          styles.ripple,
          { opacity: circleOpacity, transform: [{ scale: circleScale }] },
        ]}
      />

      {/* Logo mark */}
      <Animated.View
        style={[
          styles.logoWrapper,
          { opacity: logoOpacity, transform: [{ scale: logoScale }] },
        ]}
      >
        <Image
          source={require("@/assets/images/splash-icon.png")}
          style={styles.logoImage}
        />
      </Animated.View>

      {/* App name */}
      <AnimatedText
        style={[
          styles.appName,
          { opacity: logoOpacity, transform: [{ scale: logoScale }] },
        ]}
      >
        KABABJEES
      </AnimatedText>

      {/* Tagline */}
      <Animated.View
        style={{
          opacity: taglineOpacity,
          transform: [{ translateY: taglineY }],
        }}
      >
        <Text style={styles.tagline}>Powered By Indolj.</Text>
      </Animated.View>

      {/* Pagination dots */}
      {/* <Animated.View style={[styles.dotsRow, { opacity: taglineOpacity }]}>
        {[0, 1, 2].map((i) => (
          <View key={i} style={[styles.dot, i === 1 && styles.dotActive]} />
        ))}
      </Animated.View> */}
    </Animated.View>
  );
}

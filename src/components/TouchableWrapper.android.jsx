import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { theme } from "../theme";

export const TouchableWrapper = ({ children, ...props }) => {
  return (
    <View style={styles.container}>
    <Pressable style={{borderRadius:80}} android_ripple={{ color: theme.colors.secondary, borderless: false}} {...props}>
      {children}
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 80,
    overflow:"hidden",
  },
});

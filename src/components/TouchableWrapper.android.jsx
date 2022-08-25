import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { theme } from "../theme";

export const TouchableWrapper = ({ children, borderRadius, ...props }) => {
  return (
    <View style={styles({ borderRadius }).container}>
      <Pressable
        style={{ borderRadius: borderRadius }}
        android_ripple={{ color: theme.colors.secondary, borderless: false }}
        {...props}
      >
        {children}
      </Pressable>
    </View>
  );
};

const styles = ({ borderRadius }) => {
  return StyleSheet.create({
    container: {
      overflow: "hidden",
      borderRadius: borderRadius,
    },
  });
};

import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { theme } from "../theme";

export const TouchableWrapper = ({
  style = {},
  children,
  borderRadius,
  ...props
}) => {
  const touchableWrapperStyle = [styles({ borderRadius }).container, style];

  return (
    <View style={touchableWrapperStyle}>
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

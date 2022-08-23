import { StyleSheet, Text } from "react-native";
import { theme } from "../theme";

// Inicializar style en un objeto vacío para evitar errores
export const StyledText = ({
  fontWeight,
  fontSize,
  children,
  color,
  alignSelf,
  style = {},
  ...props
}) => {
  const textStyles = [
    styles.text,
    color === "textPrimaryColor" && styles.textPrimaryColor,
    color === "textSecondaryColor" && styles.textSecondaryColor,
    color === "primaryColor" && styles.primaryColor,
    color === "secondaryColor" && styles.secondaryColor,
    // color === "textPrimary" && styles.textPrimary,
    fontWeight === "bold" && styles.bold,
    fontWeight === "thin" && styles.thin,
    fontSize === "mainTitle" && styles.mainTitle,
    fontSize === "title" && styles.title,
    fontSize === "subTitle" && styles.subtitle,
    fontSize === "body" && styles.body,
    fontSize === "details" && styles.details,
    fontSize === "small" && styles.small,
    alignSelf && { alignSelf: alignSelf },
    style,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
  },
  textPrimaryColor: {
    color: theme.colors.textPrimary,
  },

  textSecondaryColor: {
    color: theme.colors.textSecondary,
  },

  primaryColor: {
    color: theme.colors.secondary,
  },
  secondaryColor: {
    color: theme.colors.secondary,
  },
  // Weights
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  thin: {
    fontWeight: theme.fontWeights.thin,
  },
  // Sizes
  mainTitle: {
    fontSize: theme.fontSizes.mainTitle,
  },
  title: {
    fontSize: theme.fontSizes.title,
  },
  subtitle: {
    fontSize: theme.fontSizes.subtitle,
  },
  body: {
    fontSize: theme.fontSizes.body,
  },
  details: {
    fontSize: theme.fontSizes.details,
  },
  small: {
    fontSize: theme.fontSizes.small,
  },
});

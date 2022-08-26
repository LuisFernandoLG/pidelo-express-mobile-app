import { Platform } from "react-native";

export const theme = {
  statusBar: {
    bgColor: "#f7f8fa",
    textColor: "#423734",
  },
  colors: {
    textPrimary: "#000000",
    textSecondary: "#a59886",
    primary: "#24CE85",
    secondary: "#C4C4C4",
    touchable: "#DDDDDD",
    tertiary: "#F0F0F0",
    white: "#ffffff",
    background: "#f7f8fa",
    tableStatuses: {
      free: "#24CE85",
      pending: "#C4C4C4",
      inProcess: "#ff9800",
      completed: "#2196f5",
    },
    dishStatuses: {
      pending: "#C4C4C4",
      inProcess: "#ff9800",
      delivering: "#2196f5",
      completed: "#24CE85",
    },
  },
  card: {
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#000",
    shadowOpacity: 1,
    elevation: 2, // changed to a greater value

    borderRadius:5
  },
  border:{
    borderRadius:5
  },
  fontSizes: {
    mainTitle: 25,
    title: 24,
    subtitle: 18,
    body: 14,
    details: 14,
    small: 12,
  },
  fontWeights: {
    bold: "800",
    normal: "400",
    thin: "300",
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
};

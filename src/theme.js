import { Platform } from "react-native";

export const theme = {
  statusBar: {
    bgColor: "#ffff",
    textColor: "#423734",
  },
  colors: {
    textPrimary: "#45392f",
    textSecondary: "#a59886",
    primary:"#24CE85",
    secondary:"#C4C4C4",
    tertiary:"#F0F0F0",
    white: "#fff",
    background: "#edf7ff",
    tableStatuses : {
      free: "#24CE85",
      pending: "#C4C4C4",
      inProcess : "#ff9800",
      completed: "#2196f5"
    },
    dishStatuses:{
      pending: "#C4C4C4",
      inProcess : "#ff9800",
      delivering: "#2196f5",
      completed: "#24CE85",
    }
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

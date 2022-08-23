import { StyleSheet } from "react-native";
import { theme } from "../theme";
import { StyledText } from "./StyledText";

export const TableStatus = ({ children, id, name, ...props }) => {
  return (
    <StyledText style={[styles.status, styles[name]]} {...props}>
      {children}
    </StyledText>
  );
};

const styles = StyleSheet.create({
  status: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  Libre: {
    color: theme.colors.textPrimary,
    backgroundColor: theme.colors.primary,
  }, // Libre --- For table
  Pendiente: {
    color: theme.colors.textPrimary,
    backgroundColor: theme.colors.tableStatuses.pending,
  }, // Pendiente --- for table and order
  "En proceso": {
    color: theme.colors.textPrimary,
    backgroundColor: theme.colors.tableStatuses.inProcess,
  }, // En proceso --- for table and order
  Completada: {
    color: theme.colors.textPrimary,
    backgroundColor: theme.colors.tableStatuses.completed,
  }, // Completada --- for table and order
});

import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import { StatusBar } from "./StatusBar";
import { Routes, Route } from "react-router-native";
import { HomePage } from "../routes/HomePage";
import { OrdersPage } from "../routes/OrdersPage";
import { theme } from "../theme";
import { TakingOrderPage } from "../routes/TakingOrderPage";
import { AvailableTablesPage } from "../routes/AvailableTablesPage";

export const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<AvailableTablesPage />} />
          <Route path="/:tableId" element={<TakingOrderPage />} />
        </Route>
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});

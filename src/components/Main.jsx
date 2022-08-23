import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import { StatusBar } from "./StatusBar";
import { Routes, Route } from "react-router-native";
import { HomePage } from "../routes/HomePage";
import { OrdersPage } from "../routes/OrdersPage";
import { theme } from "../theme";

export const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/orders" element={<OrdersPage/>}/>
      </Routes>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:theme.colors.background
  }
})
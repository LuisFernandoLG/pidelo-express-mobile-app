import { View } from "react-native";
import { Link } from "react-router-native";
import { StatusBar } from "./StatusBar";
import { Routes, Route } from "react-router-native";
import { HomePage } from "../routes/HomePage";
import { OrdersPage } from "../routes/OrdersPage";

export const Main = () => {
  return (
    <View>
      <StatusBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/orders" element={<OrdersPage/>}/>
      </Routes>
    </View>
  );
};

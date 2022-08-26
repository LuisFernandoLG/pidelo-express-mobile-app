import { FlatList, StyleSheet } from "react-native";
import { WaiterDishItem } from "./WaiterDishItem";

export const WaiterDishList = ({ dishes }) => {
  return (
    <FlatList
      data={dishes}
      style={{ flexGrow: 1 }}
      renderItem={({ item: dish }) => <WaiterDishItem {...dish} />}
    />
  );
};

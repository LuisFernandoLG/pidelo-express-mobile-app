import { FlatList } from "react-native";
import { DishItemManager } from "./DishItemManager";

export const DishListManager = ({dishes}) => {
  return (
    <FlatList
      style={{ margin: 10, flexGrow: 1 }}
      numColumns={2}
      data={dishes}
      renderItem={({ item }) => (
        <DishItemManager
          key={item.dish._id}
          dish={item.dish.id}
          status={item.dish.status}
          clientKey={item.client.clientKey}
          courseMealKey={item.courseMeal.courseMealKey}
          dishKey={item.dish.dishKey}
        />
      )}
    />
  );
};

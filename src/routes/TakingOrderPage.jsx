import { StyledText } from "../components/StyledText";
import { useLocation } from "react-router-native";
import { FlatList, View } from "react-native";
import { CategoryDishCarrousel } from "../components/CategoryDishCarrousel";
import { useEffect, useState } from "react";
import { WaiterDishList } from "../components/WaiterDishList";
import { api } from "../services/api";
import { Loader } from "../components/Loader";

export const TakingOrderPage = () => {
  const location = useLocation();
  const [dishes, setDishes] = useState(null);
  const [categorySelected, setCategorySelected] = useState(null);

  const fetchDishes = async () => {
    const dishItems = await api().getDishes();
    setDishes(dishItems);
  };

  const fetchDishesByCategory = async ({ categoryId }) => {
    const dishItems = await api().getDishesByCategory({ categoryId });
    setDishes(dishItems);
  };

  useEffect(() => {
    if (categorySelected) {
      fetchDishesByCategory({ categoryId: categorySelected._id });
    } else {
      fetchDishes();
    }
  }, [categorySelected]);

  return (
    <View style={{ flex: 1 }}>
      <CategoryDishCarrousel
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
      />

      {dishes ? <WaiterDishList dishes={dishes} /> : <Loader/>}
    </View>
  );
};

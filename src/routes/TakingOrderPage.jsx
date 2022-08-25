import { StyledText } from "../components/StyledText";
import { useLocation } from "react-router-native";
import { View } from "react-native";
import { CategoryDishCarrousel } from "../components/CategoryDishCarrousel";
import { useState } from "react";

export const TakingOrderPage = () => {
  const location = useLocation();
  const { tableItem } = location.state;

  const [categorySelected, setCategorySelected] = useState(null);

  return (
    <View>
      <CategoryDishCarrousel
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
      />
    </View>
  );
};

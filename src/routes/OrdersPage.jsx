import { FlexContainer } from "../components/FlexContainer";
import { Loader } from "../components/Loader";
import { Select } from "../components/Select";
import { useSelectFilters } from "../hooks/useSelectFilters";
import { DishListManager } from "../components/DishListManager";
import { View } from "react-native";
import { GroupBox } from "../components/GroupBox";

export const OrdersPage = () => {
  const {
    courseMeals,
    clients,
    dishes,
    orderSelected,
    setOrderSelected,
    courseMealSelected,
    setCourseMealSelected,
    clientSelected,
    setClientSelected,
    orders,
  } = useSelectFilters();

  return (
    <View style={{ flex: 1 }}>
      {orders && (
        <GroupBox
        title="Ordenes"  
          items={orders}
          selectedValue={orderSelected}
          setSelectedValue={setOrderSelected}
        />
      )}
      {courseMeals && (
        <GroupBox
        title="Tiempos"  
          items={courseMeals}
          selectedValue={courseMealSelected}
          setSelectedValue={setCourseMealSelected}
        />
      )}
      {clients && (
        <GroupBox
        title="Clientes"  
        items={clients}
          selectedValue={clientSelected}
          setSelectedValue={setClientSelected}
        />
      )}
      <FlexContainer flex={1}>
        {dishes && <DishListManager dishes={dishes} />}
      </FlexContainer>
    </View>
  );
};

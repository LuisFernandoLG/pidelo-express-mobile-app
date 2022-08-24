import { FlexContainer } from "../components/FlexContainer";
import { Loader } from "../components/Loader";
import { Select } from "../components/Select";
import { useSelectFilters } from "../hooks/useSelectFilters";
import { DishListManager } from "../components/DishListManager";
import { View } from "react-native";

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
      <FlexContainer pd={30}>
        {orders ? (
          <Select
            label="Orden"
            zIndex={500}
            selectedColor="red"
            items={orders}
            selectedValue={orderSelected}
            setSelectedValue={setOrderSelected}
          />
        ) : (
          <Loader />
        )}
        {courseMeals && (
          <Select
            zIndex={300}
            label="Tiempo"
            // bgColor={"#8e8e8e"}
            items={courseMeals}
            selectedValue={courseMealSelected}
            setSelectedValue={setCourseMealSelected}
          />
        )}
        {clients && (
          <Select
            zIndex={100}
            label="Cliente"
            // bgColor={"#9e9e9e"}
            items={clients}
            selectedValue={clientSelected}
            setSelectedValue={setClientSelected}
          />
        )}
      </FlexContainer>
      <FlexContainer flex={1}>
        {dishes && <DishListManager dishes={dishes} />}
      </FlexContainer>
    </View>
  );
};

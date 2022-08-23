import { FlatList, View } from "react-native";
import { FlexContainer } from "../components/FlexContainer";
import { StyledText } from "../components/StyledText";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useWebSocketsIO } from "../hooks/useWebSocketsIO";
import { DishItem } from "../components/DishItem";
import { Loader } from "../components/Loader";
import { Select } from "../components/Select";

const waiterId = "62fd0d6d71ae00cba4d87407";

export const OrdersPage = () => {
  const { socket } = useWebSocketsIO();

  const [orders, setOrders] = useState(null);
  const [courseMeals, setCourseMeals] = useState(null);
  const [clients, setClients] = useState(null);
  const [dishes, setDishes] = useState();

  const [orderSelected, setOrderSelected] = useState("");
  const [courseMealSelected, setCourseMealSelected] = useState("");
  const [clientSelected, setClientSelected] = useState("");

  const filterOrdersById = ({ orders }) =>
    orders.map((order, index) => ({
      id: order._id,
      name: order.tableId.name,
      index: index,
      ...order,
    }));

  const filterCourseMealsById = () => {
    return Object.values(orderSelected.courseMeals).map(
      (courseMeal, index) => ({
        id: courseMeal._id,
        name: courseMeal.name,
        index: index,
        ...courseMeal,
      })
    );
  };

  const filterClientsById = () => {
    return Object.values(courseMealSelected.clients).map((client, index) => ({
      id: client._id,
      name: client.name,
      index: index,
      ...client,
    }));
  };

  useEffect(() => {
    socket.emit("client:waiter:getOrders", waiterId, (res) => {
      const onlyOrderValues = filterOrdersById({ orders: res.orders });
      console.log({ onlyOrderValues });
      setOrders(onlyOrderValues);
    });

    socket.on("server:orders", (orders) => {
      setOrders(orders);
    });
  }, []);

  useEffect(() => {
    // Podría guardar la key cada vez que se elige un select y así actualizar los platillos nuevamente.
    // const newDi       m  shes = orders.courseMeals[]
  }, [orders]);

  const filterDishesByOrderId = ({ orderId }) => {
    let dishesFound = [];

    const orderFound = orders.find((order) => order.id === orderId);
    // Agregar orderId, courseMealIndex, clientIndex and DishIndex
    Object.entries(orderFound.courseMeals).forEach(
      ([courseMealKey, courseMeal]) => {
        Object.entries(courseMeal.clients).forEach(([clientKey, client]) => {
          Object.entries(client.dishes).forEach(([dishKey, dish]) => {
            dish.id.id = dishKey;
            dishesFound.push({
              dish,
              courseMeal: { id: courseMealKey, name: courseMeal.name },
              client: { id: clientKey, name: client.name },
            });
          });
        });
      }
    );

    return dishesFound;
  };

  const filterDishesByIdAndCourseMealoId = ({ courseMeal }) => {
    let dishesFound = [];
    // const orderFound = orders.find((order) => order.id === orderSelected.id);
    // const courseMealFound = Object.values(orderFound.courseMeals)[
    //   courseMealSelected.index
    // ];
    Object.entries(courseMeal.clients).forEach(([clientKey, client]) => {
      Object.entries(client.dishes).forEach(([dishKey, dish]) => {
        dish.id.id = dishKey;
        dishesFound.push({
          dish,
          courseMeal: {
            id: courseMealSelected.index,
            name: courseMealSelected.name,
          },
          client: { id: clientKey, name: client.name },
        });
      });
    });

    return dishesFound;
  };

  const filterDishesByClientId = () => {
    return Object.values(clientSelected.dishes).map((dish, index) => ({
      dish,
      courseMeal: {
        courseMeal: courseMealSelected.index,
        name: courseMealSelected.name,
      },
      client: { id: clientSelected.index, name: clientSelected.name },
    }));
  };

  useEffect(() => {
    if (orderSelected !== "") {
      const dishesFound = filterDishesByOrderId({ orderId: orderSelected.id });
      setDishes(dishesFound);
      const courseMealValues = filterCourseMealsById();
      setCourseMeals(courseMealValues);
    } else {
      setCourseMeals(null);
      setDishes(null);
      setClients(null)
    }
  }, [orderSelected]);

  useEffect(() => {
    // console.log({ courseMealSelected });
    if (courseMealSelected !== "") {
      const dishesFound = filterDishesByIdAndCourseMealoId({
        courseMeal: courseMealSelected,
      });
      setDishes(dishesFound);
      const clientsFound = filterClientsById();
      setClients(clientsFound);
    } else {
      if (orderSelected !== "") {
        const dishesFound = filterDishesByOrderId({
          orderId: orderSelected.id,
        });
        setDishes(dishesFound);
        setClients(null);
      }
    }
  }, [courseMealSelected]);

  useEffect(() => {
    if (clientSelected !== "") {
      const dishesValues = filterDishesByClientId();
      setDishes(dishesValues);
    } else {
      if (courseMealSelected !== "") {
        const dishesFound = filterDishesByIdAndCourseMealoId({
          courseMeal: courseMealSelected,
        });
        setDishes(dishesFound);
        setClients(null);
      }
    }
  }, [clientSelected]);

  return (
    <View style={{ flex: 1 }}>
      <FlexContainer pd={30}>
        {orders ? (
          <Select
            label="Orden"
            items={orders}
            selectedValue={orderSelected}
            setSelectedValue={setOrderSelected}
          />
        ) : (
          <Loader />
        )}

        {/* ---------- */}
        {courseMeals && (
          <Select
            label="Tiempo"
            items={courseMeals}
            selectedValue={courseMealSelected}
            setSelectedValue={setCourseMealSelected}
          />
        )}

        {/* ---------- */}

        {clients && (
          <Select
            label="Cliente"
            items={clients}
            selectedValue={clientSelected}
            setSelectedValue={setClientSelected}
          />
        )}
      </FlexContainer>
      <FlexContainer>
        {dishes && (
          <FlatList
            style={{ margin: 10 }}
            numColumns={2}
            data={dishes}
            renderItem={({ item }) => (
              <DishItem
                key={item.dish._id}
                dish={item.dish.id}
                status={item.dish.status}
              />
            )}
          />
        )}
      </FlexContainer>
    </View>
  );
};

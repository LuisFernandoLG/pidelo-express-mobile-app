import { useEffect, useState } from "react";
import { useWebSocketsIO } from "../hooks/useWebSocketsIO";

const waiterId = "62fd0d6d71ae00cba4d87407";

export const useSelectFilters = () => {
  const [orders, setOrders] = useState(null);
  const [courseMeals, setCourseMeals] = useState(null);
  const [clients, setClients] = useState(null);
  const [dishes, setDishes] = useState();

  const [orderSelected, setOrderSelected] = useState("");
  const [courseMealSelected, setCourseMealSelected] = useState("");
  const [clientSelected, setClientSelected] = useState("");

  const { socket } = useWebSocketsIO();

  const formataValuesAndSet = (orders)=>{
    const onlyOrderValues = filterOrdersById({ orders });
    setOrders(onlyOrderValues);   
  }

  useEffect(() => {
    socket.emit("client:waiter:getOrders", waiterId, (res) => {
      const onlyOrderValues = filterOrdersById({ orders: res.orders });
      setOrders(onlyOrderValues);
    });

    socket.on("server:orders", formataValuesAndSet);

    return ()=>{
      console.log("server:orders")
      socket.off("server:orders", formataValuesAndSet)
    }
  }, []);

  useEffect(() => {
    if (
      orderSelected !== "" &&
      courseMealSelected !== "" &&
      clientSelected !== ""
    ) {
      const newDishes = filterDishesByClientId();
      console.log({ newDishes, msg: "Todo seleccionado" });
      setDishes(newDishes);
    } else if (orderSelected !== "" && courseMealSelected !== "") {
      const newDishes = filterDishesByIdAndCourseMealoId({
        courseMeal: courseMealSelected,
      });
      console.log({ newDishes, msg: "orden y course seleccionados" });
      setDishes(newDishes);
    } else if (orderSelected !== "") {
      const newDishes = filterDishesByOrderId({ orderId: orderSelected.id });
      console.log({ newDishes });
      setDishes(newDishes);
      console.log({ newDishes, msg: "order seleccionada" });
    }
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
              dish: { ...dish, dishKey },
              courseMeal: { courseMealKey, name: courseMeal.name },
              client: { clientKey, name: client.name },
              order: { orderKey: orderId },
            });
          });
        });
      }
    );

    return dishesFound;
  };

  const filterDishesByIdAndCourseMealoId = ({ courseMeal }) => {
    let dishesFound = [];
    const orderFound = orders.find((order) => order.id === orderSelected.id);
    console.log({ orderFound });
    const courseMealFound = Object.values(orderFound.courseMeals).find(
      (item) => item._id === courseMealSelected.id
    );

    Object.entries(courseMealFound.clients).forEach(([clientKey, client]) => {
      Object.entries(client.dishes).forEach(([dishKey, dish]) => {
        dish.id.id = dishKey;
        dishesFound.push({
          dish: { ...dish, dishKey },
          courseMeal: {
            courseMealKey: courseMealSelected.index,
            id: courseMealSelected.index,
            name: courseMealSelected.name,
          },
          client: { clientKey, name: client.name },
          order: { orderKey: orderSelected._id },
        });
      });
    });

    return dishesFound;
  };

  const filterDishesByClientId = () => {
    const orderFound = orders.find((order) => order.id === orderSelected.id);
    console.log({ orderFound });
    const courseMealFound = Object.values(orderFound.courseMeals).find(
      (item) => item._id === courseMealSelected.id
    );

    const clientFound = Object.values(courseMealFound.clients).find(
      (item) => item._id === clientSelected.id
    );

    return Object.entries(clientFound.dishes).map(([dishKey, dish]) => ({
      dish: {
        ...dish,
        dishKey,
      },
      courseMeal: {
        courseMealKey: courseMealSelected.index,
        courseMeal: courseMealSelected.index,
        name: courseMealSelected.name,
      },
      client: {
        clientKey: clientSelected.index,
        id: clientSelected.index,
        name: clientSelected.name,
      },
      order: { orderKey: orderSelected._id },
    }));
  };

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
    console.log({ orderSelected });
    if (orderSelected !== "") {
      const dishesFound = filterDishesByOrderId({ orderId: orderSelected.id });
      setDishes(dishesFound);
      const courseMealValues = filterCourseMealsById();
      setCourseMeals(courseMealValues);
    } else {
      setCourseMeals(null);
      setDishes(null);
      setClients(null);
    }
  }, [orderSelected]);

  useEffect(() => {
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

  return {
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
  };
};

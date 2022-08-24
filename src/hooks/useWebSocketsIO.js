import { useContext } from "react";
import { socketContext } from "../context/socketContext";

export const useWebSocketsIO = () => {
  const { socket } = useContext(socketContext);

  const setDishReadyOnBD = ({ orderId, courseMealId, clientId, dishId }) => {
    socket.emit(
      "client:waiter:setDishReady",
      { orderId, courseMealId, clientId, dishId },
      (res) => {}
    );
  };

  const setDishDeliveredOnDB = ({
    orderId,
    courseMealId,
    clientId,
    dishId,
  }) => {
    socket.emit(
      "client:waiter:setDishDelivered",
      { orderId, courseMealId, clientId, dishId },
      (res) => {}
    );
  };

  const getTablesFromDBEmit = (cb) => {
    socket.emit("client:waiter:getTables", (res) => {
      cb(res.tables);
    });
  };

  const listenForTables = (cb) => {
    socket.on("server:tables", (tables) => {
      cb(tables);
    });
  };

  const removeListenerForTables = () => {
    // socket.off("server:tables", () => {});
  };

  const getOrdersForWaiters = (cb) => {
    const waiterId = "62fd0d6d71ae00cba4d87407";
    socket.emit("client:waiter:getOrders", waiterId, (res) => {
      cb(res.orders);
    });
  };

  const listenForOrders = (cb) => {
    socket.on("server:orders", (orders) => {
      cb(orders);
    });
  };

  const removeListenerForOrders = (cb) => {
    // socket.off("server:orders", () => {});
  };

  return {
    setDishReadyOnBD,
    setDishDeliveredOnDB,
    getTablesFromDBEmit,
    listenForTables,
    removeListenerForTables,
    getOrdersForWaiters,
    listenForOrders,
    removeListenerForOrders,
  };
};

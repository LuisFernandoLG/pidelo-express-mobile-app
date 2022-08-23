import { useEffect, useState } from "react";
import io from "socket.io-client";

const SOCKET_URL = "http://192.168.1.64:5000";


export const useTableList = () => {
  const [tables, setTables] = useState(null);
  
  const socket = io.connect(SOCKET_URL, {
    transports: ["websocket"],
    reconnectionAttempts: 15, //Nombre de fois qu'il doit réessayer de se connecter
  });

  const recieveTables = (tables) => {
    setTables(newTables);
  };

  useEffect(() => {
    console.log("Home Page rendered!");
    socket.emit("client:waiter:getTables", (res) => {
      setTables(res.tables);
    });

    socket.on("server:tables", recieveTables);

    return () => {
      return socket.off("server:tables", recieveTables);
    };
  }, []);

  return { tables };
};

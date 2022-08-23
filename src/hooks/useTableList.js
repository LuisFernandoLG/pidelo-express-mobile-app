import { useEffect, useState } from "react";
import { useWebSocketsIO } from "./useWebSocketsIO";

const data = [
  {
    id: "123131",
    name: "#1",
    status: {
      id: "23oi",
      name: "Libre",
    },
  },

  {
    id: "1wdw23131",
    name: "#2",
    status: {
      id: "23owi",
      name: "Libre",
    },
  },
  {
    id: "123131323",
    name: "#3",
    status: {
      id: "23oi",
      name: "Libre",
    },
  },
  {
    id: "12313232231",
    name: "#4",
    status: {
      id: "23oei",
      name: "Libre",
    },
  },
  {
    id: "12313eqw1",
    name: "#5",
    status: {
      id: "23oi",
      name: "Libre",
    },
  },
  {
    id: "1231d23d31",
    name: "#6",
    status: {
      id: "23o3e2i",
      name: "Libre",
    },
  },
  {
    id: "12313f23321",
    name: "#7",
    status: {
      id: "23oi32d32",
      name: "Libre",
    },
  },
  {
    id: "12313egege1",
    name: "#8",
    status: {
      id: "23oi",
      name: "Libre",
    },
  },
  {
    id: "12313d23d1",
    name: "#9",
    status: {
      id: "23oiwd",
      name: "Libre",
    },
  },
  {
    id: "12313dwqd1",
    name: "#10",
    status: {
      id: "23oi",
      name: "Libre",
    },
  },
  {
    id: "1231313",
    name: "#11",
    status: {
      id: "23oi",
      name: "Libre",
    },
  },
];

export const useTableList = () => {
  const [tables, setTables] = useState(null);

  const { socket } = useWebSocketsIO();

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

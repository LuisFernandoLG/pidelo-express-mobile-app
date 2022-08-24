import { createContext } from "react";
import io from "socket.io-client";

const SOCKET_URL = "http://192.168.1.64:5000";

const socketContext = createContext();

const SocketProvider = ({ children }) => {
  const socket = io.connect(SOCKET_URL, {
    transports: ["websocket"],
    reconnectionAttempts: 15,
  });

  const value = {
    socket,
  };

  return (
    <socketContext.Provider value={value}>{children}</socketContext.Provider>
  );
};

// export default SocketProvider;
export { socketContext, SocketProvider };

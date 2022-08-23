import io from "socket.io-client";

const SOCKET_URL = "http://192.168.1.64:5000";

export const useWebSocketsIO = () => {
  const socket = io.connect(SOCKET_URL, {
    transports: ["websocket"],
    reconnectionAttempts: 15,
  });

  return { socket };
};

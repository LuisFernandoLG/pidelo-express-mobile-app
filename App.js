import { Main } from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { SocketProvider } from "./src/context/socketContext";

export default function App() {
  return (
    <SocketProvider>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </SocketProvider>
  );
}

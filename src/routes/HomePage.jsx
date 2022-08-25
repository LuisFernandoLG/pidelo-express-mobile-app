import { FlexContainer } from "../components/FlexContainer";
import { Outlet } from "react-router-native";

export const HomePage = () => {
  return (
    <FlexContainer flex={1}>
        <Outlet/>
    </FlexContainer>
  );
};

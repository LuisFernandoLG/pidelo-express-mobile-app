import { View } from "react-native";
import { FlexContainer } from "../components/FlexContainer";
import { TableList } from "../components/TableList";

export const HomePage = () => {
  return (
    <View>
      <FlexContainer flex_ai_c pd={20}>
        <TableList />
      </FlexContainer>
    </View>
  );
};

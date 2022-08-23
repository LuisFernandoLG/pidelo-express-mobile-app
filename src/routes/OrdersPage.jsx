import { View } from "react-native";
import { FlexContainer } from "../components/FlexContainer";
import { StyledText } from "../components/StyledText";

export const OrdersPage = () => {
  return (
    <View>
      <FlexContainer flex_jc_c flex_ai_c pd={20}>
        <StyledText fontSize="title">Orders building</StyledText>
        <StyledText fontSize="title">🛠</StyledText>
      </FlexContainer>
    </View>
  );
};

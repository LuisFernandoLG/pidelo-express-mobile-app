import { StyleSheet } from "react-native";
import { theme } from "../theme";
import { FlexContainer } from "./FlexContainer";
import { StyledImage } from "./StyledImage";
import { StyledText } from "./StyledText";
import { WaiterDishCounter } from "./WaiterDishItemCounter";

export const WaiterDishItem = ({ _id, name, tag, image, price }) => {
  const EXCHANGE = "MX";
  return (
    <FlexContainer
      style={[theme.card, styles.container]}
      flex_direction_r
      flex_jc_sb
      flex_ai_c
      pdHorizontal={10}
    >
      <FlexContainer>
        <StyledImage uri={image} width={65} heigh={80} resizeMode="contain" />
      </FlexContainer>
      <FlexContainer>
        <StyledText alignSelf="center" fontSize="subTitle" fontWeight="bold">
          {name}
        </StyledText>
        <StyledText fontSize="body" fontWeight="bold">
          ${price} {EXCHANGE}
        </StyledText>
      </FlexContainer>
      <WaiterDishCounter/>
    </FlexContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.border.borderRadius,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

import { StyleSheet } from "react-native";
import { theme } from "../theme";
import { FlexContainer } from "./FlexContainer";
import { StyledImage } from "./StyledImage";
import { StyledText } from "./StyledText";
import { TouchableWrapper } from "./TouchableWrapper";

export const CategoryDishCarrouselItem = ({
  category,
  isSelected,
  setCategorySelected,
}) => {
  return (
    <TouchableWrapper onPress={() => setCategorySelected(category)}>
      <FlexContainer
        style={[theme.card, styles.container, isSelected && styles.isSelected]}
        flexGrow={1}
      >
        <StyledImage
          uri={category.image}
          width={130}
          heigh={100}
          resizeMode="cover"
        />
        <StyledText alignSelf={"center"} fontSize="details" fontWeight="bold">
          {category.name}
        </StyledText>
      </FlexContainer>
    </TouchableWrapper>
  );
};

const styles = StyleSheet.create({
  container: {

    marginRight: 10,
    marginVertical: 10,
    paddingBottom: 10,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: theme.colors.white,
  },
  isSelected: {
    backgroundColor: "red",
  },
});

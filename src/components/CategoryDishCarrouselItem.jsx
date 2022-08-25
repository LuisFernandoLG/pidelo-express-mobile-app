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
        style={[styles.container, isSelected && styles.isSelected]}
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
    marginHorizontal: 10,
    marginVertical: 10,
    paddingBottom: 10,
    borderRadius: 5,

    overflow: "hidden",
    backgroundColor: theme.colors.white,

    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 2, // changed to a greater value
  },
  isSelected: {
    backgroundColor: "red",
  },
});

import { useState } from "react";
import { StyleSheet } from "react-native";
import { theme } from "../theme";
import { FlexContainer } from "./FlexContainer";
import { StyledText } from "./StyledText";
import { TouchableWrapper } from "./TouchableWrapper.android";

export const WaiterDishCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <FlexContainer flex_direction_r flex_jc_c flex_ai_c>
      <TouchableWrapper
        borderRadius={80}
        style={[styles.button, styles.removeButton]}
        onPress={decrement}
      >
        <StyledText
          style={styles.buttonText}
          fontSize="title"
          fontWeight="bold"
        >
          -
        </StyledText>
      </TouchableWrapper>
      <StyledText style={styles.counter} fontSize="subTitle" fontWeight="bold">
        {counter}
      </StyledText>
      <TouchableWrapper
        borderRadius={80}
        style={[styles.button, styles.addButton]}
        onPress={increment}
      >
        <StyledText
          style={styles.buttonText}
          fontSize="title"
          fontWeight="bold"
        >
          +
        </StyledText>
      </TouchableWrapper>
    </FlexContainer>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: theme.colors.white,
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  addButton: {
    backgroundColor: theme.colors.primary,
  },
  counter: {
    marginHorizontal: 5,
  },
  removeButton: {
    backgroundColor: "red",
  },
});

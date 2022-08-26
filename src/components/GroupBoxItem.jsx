import { StyleSheet } from "react-native";
import { theme } from "../theme";
import { FlexContainer } from "./FlexContainer";
import { StyledText } from "./StyledText";
import { TouchableWrapper } from "./TouchableWrapper.android";

export const GroupBoxItem = ({
  id,
  label,
  value,
  isSelected,
  setSelectedValue,
  selectedValue,
}) => {
  const hanldeOnPress = () => {
    if (selectedValue?.name === label) {
      setSelectedValue("");
    } else {
      setSelectedValue(value);
    }
  };

  return (
    <FlexContainer style={styles.groupBoxItem}>
      <TouchableWrapper
        style={[theme.card, isSelected && styles.active, {padding:10}]}
        onPress={hanldeOnPress}
      >
        <StyledText>{label}</StyledText>
      </TouchableWrapper>
    </FlexContainer>
  );
};

const styles = StyleSheet.create({
  groupBoxItem: {
    marginRight: 10,
  },

  active: {
    backgroundColor: theme.colors.primary,
  },
});

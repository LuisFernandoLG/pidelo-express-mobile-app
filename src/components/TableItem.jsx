import { StyleSheet } from "react-native";
import { theme } from "../theme";
import { FlexContainer } from "./FlexContainer";
import { StyledText } from "./StyledText";
import { TableStatus } from "./TableStatus";

export const TableItem = ({ name, status }) => {
  console.log({ status });
  return (
    <FlexContainer style={styles.container} flex_jc_c flex_ai_c>
      <StyledText fontSize="subTitle" fontWeight="bold">
        {name}
      </StyledText>
      <TableStatus fontSize="small" fontWeight="bold" name={status.name}/>
    </FlexContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    margin: 5,
    borderRadius: 100,
    borderColor: theme.colors.textPrimary,
    borderWidth: 5,
  },
});

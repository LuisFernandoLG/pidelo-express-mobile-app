import { StyleSheet } from "react-native";
import { theme } from "../theme";
import { FlexContainer } from "./FlexContainer";
import { StyledText } from "./StyledText";
import { TableStatus } from "./TableStatus";
import { TouchableWrapper } from "./TouchableWrapper";

export const TableItem = ({ name, status }) => {
 

  return (
    <TouchableWrapper>
      <FlexContainer style={styles.container} flex_jc_c flex_ai_c>
        <StyledText fontSize="subTitle" fontWeight="bold">
          {name}
        </StyledText>
        <TableStatus fontSize="small" fontWeight="bold" name={status.name}>
          {status.name}
        </TableStatus>
      </FlexContainer>
    </TouchableWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    margin: 5,
    padding: 20,
    borderWidth: 5,
    borderColor: theme.colors.textPrimary,
    borderRadius: 100,

  },
});

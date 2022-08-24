import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { theme } from "../theme";
import { StyledText } from "./StyledText";
import { StyledImage } from "./StyledImage";
import { FlexContainer } from "./FlexContainer";
import { StatusBarTab } from "./StatusBarTab";

const uri =
  "https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg";

export const StatusBar = () => {
  return (
    <FlexContainer style={styles.container}>
      <FlexContainer flex_direction_r flex_jc_sb>
        <StyledText fontSize="mainTitle" fontWeight="bold">
          Pídelo express
        </StyledText>
        <StyledImage width={50} heigh={50} uri={uri} circle />
      </FlexContainer>
      <FlexContainer flex_direction_r flex_jc_se>
        <StatusBarTab to="/" style={{flexGrow:1}}>Mesas</StatusBarTab>
        <StatusBarTab to="/orders"  style={{flexGrow:1}}>Ordenes</StatusBarTab>
      </FlexContainer>
    </FlexContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.statusBar.bgColor,
    paddingTop: Constants.statusBarHeight + 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    // borderBottomColor: theme.colors.secondary,
  },
  title: {
    color: theme.statusBar.textColor,
  },
});

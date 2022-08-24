import { StyledText } from "./StyledText";
import { Link, useLocation } from "react-router-native";
import { StyleSheet, View } from "react-native";
import { FlexContainer } from "./FlexContainer";
import { theme } from "../theme";

export const StatusBarTab = ({ to, style = {}, children, ...rest }) => {
  let location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} {...rest} underlayColor="transparent">
      <View>
        <StyledText
          fontSize="subTitle"
          fontWeight="bold"
          alignSelf="center"
          style={{ padding: 10 }}
          color={isActive ? "textPrimaryColor" : "secondaryColor"}
        >
          {children}
        </StyledText>
        <StyledText
          style={[styles.tab, isActive && styles.activeTab]}
        ></StyledText>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  link: {
    underlayColor:"red"
  },
  tab: {
    width: 150,
    height: 5,
    borderRadius: 10,
    backgroundColor: theme.colors.secondary,
    marginHorizontal:20
  },
  activeTab: {
    backgroundColor: theme.colors.primary,
  },
});

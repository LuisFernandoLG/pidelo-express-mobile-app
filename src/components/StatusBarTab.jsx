import { StyledText } from "./StyledText";
import { useLocation } from "react-router-native";
import { StyleSheet, View } from "react-native";
import { theme } from "../theme";
import { TouchableWrapper } from "./TouchableWrapper.ios";
import { StyledLink } from "./StyledLink";

export const StatusBarTab = ({ to, style = {}, children }) => {
  
  let location = useLocation();
  const isActive = to === location.pathname;

  return (
    <TouchableWrapper>
      <StyledLink to={to}>
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
      </StyledLink>
    </TouchableWrapper>
  );
};

const styles = StyleSheet.create({
  link: {
    // underlayColor: "red",
  },
  tab: {
    width: 150,
    height: 5,
    borderRadius: 10,
    paddingHorizontal:10,
    // backgroundColor: theme.colors.secondary,
    // marginHorizontal: 20,
  },
  activeTab: {
    backgroundColor: theme.colors.primary,
  },
});

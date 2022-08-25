import { Link } from "react-router-native";
import { theme } from "../theme";


export const StyledLink = ({ children, to, isActive, ...rest }) => {
  return <Link to={to} {...rest} underlayColor={theme.colors.touchable}>
    {children}
  </Link>;
};

import { useState } from "react";
import { TouchableNativeFeedback } from "react-native";
import { theme } from "../theme";

export const TouchableWrapper = ({ children }) => {
  const [rippleOverflow, setRippleOverflow] = useState(false);
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(
        theme.colors.secondary,
        rippleOverflow
      )}
      onPress={() => {
        setRippleOverflow(!rippleOverflow);
      }}
    >
      {children}
    </TouchableNativeFeedback>
  );
};

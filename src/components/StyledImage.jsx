import { Image, StyleSheet } from "react-native";

export const StyledImage = ({
  rounded,
  uri,
  width,
  heigh,
  circle,
  ...props
}) => {
  const imageStyle = [
    styles.image,
    { width: width },
    { height: heigh },
    rounded,
    circle && styles.circle,
  ];

  return <Image style={imageStyle} source={{ uri: uri }} {...props} />;
};

const styles = StyleSheet.create({
  image: {},

  circle: {
    borderRadius: 80,
  },
});

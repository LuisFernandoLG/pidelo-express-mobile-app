import { Image, StyleSheet } from "react-native";

export const StyledImage = ({ rounded, uri, width, heigh, circle }) => {
  const imageStyle = [
    styles.image,
    { width: width },
    { height: heigh },
    rounded,
    circle && styles.circle,
  ];

  return <Image style={imageStyle} source={{ uri: uri }} />;
};

const styles = StyleSheet.create({
  image: {},
  circle: {
    borderRadius: 30,
  },
});

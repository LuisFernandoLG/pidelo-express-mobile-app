import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "../theme";
import { FlexContainer } from "./FlexContainer";
import { StyledImage } from "./StyledImage";
import { StyledText } from "./StyledText";

import { Picker } from "@react-native-picker/picker";

const dishStates = [
  { id: "62fc6794771920e088f6ad22", name: "Pendiente" }, // Pendiente
  { id: "62fc6794771920e088f6ad23", name: "En proceso" }, // En proceso
  { id: "62fc6794771920e088f6ad24", name: "Por entregar" }, // Por entregar
  { id: "62fc6794771920e088f6ad25", name: "Entregada" }, // Entregada
];

export const DishItem = ({ dish, status }) => {
  const [selectedStatus, setSelectedStatus] = useState();

  // console.log({dish})

  // console.log({ status });
  return (
    <FlexContainer style={styles.container} flex={1}>
      <FlexContainer flex_jc_c flex_ai_c>
        <StyledImage
          resizeMode="center"
          circle
          uri={dish.image}
          width={100}
          heigh={100}
        />
        <StyledText fontSize="subtitle">{dish.name}</StyledText>
        <StyledText fontSize="title" fontWeight="bold">
          ${dish.price}
        </StyledText>
      </FlexContainer>
      <FlexContainer style={{width:"100%"}}>
        <Picker
          selectedValue={selectedStatus}
          onValueChange={(itemValue, itemIndex) => setSelectedStatus(itemValue)}
        >
          <Picker.Item key={0} label={status.name} value={status._id} />
          {dishStates.map((item) => (
            <Picker.Item key={item.id} label={item.name} value={item} />
          ))}
        </Picker>
      </FlexContainer>
    </FlexContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    marginHorizontal:10,
    marginTop:10,
    alignSelf: "flex-start",
    borderRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1.0,
    shadowRadius: 3,
    elevation: 0.5,
    shadowColor: "#52006A",
  },
});

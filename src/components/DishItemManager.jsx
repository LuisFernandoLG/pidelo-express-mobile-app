import { StyleSheet } from "react-native";
import { theme } from "../theme";
import { FlexContainer } from "./FlexContainer";
import { StyledImage } from "./StyledImage";
import { StyledText } from "./StyledText";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";

const dishStates = [
  { id: "62fc6794771920e088f6ad22", name: "Pendiente" }, // Pendiente
  { id: "62fc6794771920e088f6ad23", name: "En proceso" }, // En proceso
  { id: "62fc6794771920e088f6ad24", name: "Por entregar" }, // Por entregar
  { id: "62fc6794771920e088f6ad25", name: "Entregada" }, // Entregada
];

export const DishItemManager = ({
  dish,
  status,
  clientKey,
  dishKey,
  courseMealKey,
}) => {
  // console.log({ courseMealKey, clientKey, dishKey, status });
  const [currenStatus, setCurrentStatus] = useState();

  console.log("rendering");

  useEffect(() => {
    console.log("manager redering");
    const newStatus = dishStates.find((item) => item.id === status._id);
    setCurrentStatus(newStatus);
  }, []);

  useEffect(() => {
    console.log({ currenStatus });
  }, [currenStatus]);

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
      {currenStatus && (
        <FlexContainer
          style={[styles.pickerContainer, styles[currenStatus.name]]}
        >
          <Picker
            style={styles.picker}
            // placeholder="sss"
            selectedValue={currenStatus.name}
            onValueChange={(itemValue, itemIndex) => {
              setCurrentStatus(itemValue);
            }}
          >
            {}
            <Picker.Item
              key={0}
              label={currenStatus.name}
              value={currenStatus}
            />
            {dishStates.map((item) => (
              <Picker.Item key={item.id} label={item.name} value={item} />
            ))}
          </Picker>
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    marginHorizontal: 10,
    marginTop: 10,
    alignSelf: "flex-start",
    borderRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1.0,
    shadowRadius: 3,
    elevation: 0.5,
    shadowColor: "#52006A",
  },
  Pendiente: {
    backgroundColor: theme.colors.dishStatuses.pending,
  },
  "En proceso": {
    backgroundColor: theme.colors.dishStatuses.inProcess,
  },
  "Por entregar": {
    backgroundColor: theme.colors.dishStatuses.delivering,
  },
  Entregada: {
    backgroundColor: theme.colors.dishStatuses.completed,
  },
  pickerContainer: {
    marginTop: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  picker: {
    color: theme.colors.white,
  },
});

import { StyleSheet } from "react-native";
import { theme } from "../theme";
import { FlexContainer } from "./FlexContainer";
import { StyledImage } from "./StyledImage";
import { StyledText } from "./StyledText";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { useDishItemManager } from "../hooks/useDishItemManager";

const onlyCookerDishStatuses = [
  { id: "62fc6794771920e088f6ad22", name: "Pendiente" }, // Pendiente
  { id: "62fc6794771920e088f6ad23", name: "En proceso" }, // En proceso
];

const onlyWaiterDishStatuses = [
  { id: "62fc6794771920e088f6ad24", name: "Por entregar" }, // Por entregar
  { id: "62fc6794771920e088f6ad25", name: "Entregada" }, // Entregada
];

const dishStates = [...onlyCookerDishStatuses, ...onlyWaiterDishStatuses];

const dishStatusForWaiter = ({ NoIncludeDishId }) => {
  const statusesToReturn = [];
  dishStates.forEach((dishState) => {
    if (
      dishState.id !== "62fc6794771920e088f6ad22" &&
      !NoIncludeDishId.includes(dishState.id) &&
      dishState.id !== "62fc6794771920e088f6ad23"
    ) {
      statusesToReturn.push(dishState);
    }
  });

  // console.log({ statusesToReturn, NoIncludeDishId });
  return statusesToReturn;
};

export const DishItemManager = ({
  dish,
  status,
  clientKey,
  dishKey,
  courseMealKey,
  orderKey,
}) => {
  const { currenStatus, hanldeChangeValue } = useDishItemManager({
    initialStatus: status,
    dishKey,
    clientKey,
    courseMealKey,
  });

  const isEnable = (status) => {
    const onlyWaiter = onlyWaiterDishStatuses.some(
      (item) => item.id === status._id
    );
    return onlyWaiter;
  };

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
          style={[
            styles.pickerContainer,
            styles[currenStatus.name],
            // !isEnable && styles.containerDisable,
          ]}
        >
          <Picker
            enabled={isEnable(status)}
            style={styles.picker}
            selectedValue={currenStatus.name}
            onValueChange={(itemValue, itemIndex) => {
              hanldeChangeValue({
                newStatus: itemValue,
                orderKey,
                courseMealKey,
                clientKey,
                dishKey,
              });
            }}
          >
            <Picker.Item
              key={0}
              label={currenStatus.name}
              value={currenStatus}
            />
            {dishStatusForWaiter({
              NoIncludeDishId: [currenStatus._id],
            }).map((item) => (
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
  containerDisable: {
    backgroundColor: "red",
  },
  isActive: {
    backgroundColor: "transparent",
  },
  picker: {
    color: theme.colors.white,
  },
});

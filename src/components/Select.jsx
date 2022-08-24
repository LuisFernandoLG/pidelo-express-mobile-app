import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";
import { theme } from "../theme";

export const Select = ({
  label,
  items,
  setSelectedValue,
  selectedValue,
  selectedColor,
}) => {
  const pickerStyle = [
    styles.picker,
    selectedValue !== "" && styles.pickerActive,
  ];
  const containerStyle = [
    styles.container,
    selectedValue !== "" && styles.containerActive,
  ];

  return (
    <>
      <View style={containerStyle}>
        <Picker
          style={pickerStyle}
          selectedValue={selectedValue}
          onValueChange={(itemValue, index) =>
            setSelectedValue(itemValue, index)
          }
        >
          <Picker.Item key={0} label={label} value={""} />
          {items.map((item) => (
            <Picker.Item key={item.id} label={item.name} value={item} />
          ))}
        </Picker>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderTopColor: theme.colors.textSecondary,
    borderBottomColor: theme.colors.textSecondary,
    borderRightColor: theme.colors.textSecondary,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  containerActive: {
    borderLeftWidth:10,
    borderLeftColor:theme.colors.textPrimary,

  },
  picker: {
    color: theme.colors.textSecondary,
  },
  pickerActive: {
    color: theme.colors.textPrimary,
  },
});

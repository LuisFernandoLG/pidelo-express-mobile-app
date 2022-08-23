import { Picker } from "@react-native-picker/picker";

export const Select = ({ label, items, setSelectedValue, selectedValue }) => {
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue, index) => setSelectedValue(itemValue, index)}
    >
      <Picker.Item key={0} label={label} value={""} />
      {items.map((item) => (
        <Picker.Item key={item.id} label={item.name} value={item} />
      ))}
    </Picker>
  );
};

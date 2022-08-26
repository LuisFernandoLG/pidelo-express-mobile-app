import { FlatList } from "react-native";
import { FlexContainer } from "./FlexContainer";
import { GroupBoxItem } from "./GroupBoxItem";
import { StyledText } from "./StyledText";

export const GroupBox = ({ title, items, selectedValue, setSelectedValue }) => {
  return (
    <FlexContainer mHorizontal={20}>
      <StyledText fontSize={"subTitle"} fontWeight="bold">{title}</StyledText>
      <FlatList
        data={items}
        style={{marginTop:5}}
        horizontal={true}
        renderItem={({ item: order }) => (
          <GroupBoxItem setSelectedValue={setSelectedValue} selectedValue={selectedValue}  isSelected={order.id === selectedValue.id} id={order.id} label={order.name} value={order} />
        )}
      />
    </FlexContainer>
  );
};
import { FlatList } from "react-native";
import { TableItem } from "../components/TableItem";
import { StyledText } from "../components/StyledText";
import { useTableList } from "../hooks/useTableList";


export const TableList = () => {
  const {tables} = useTableList()

  return (
    <>
      {tables ? (
        <FlatList
          data={tables}
          numColumns={2}
          renderItem={({ item: table }) => {
            return (
              <TableItem
                key={table.id}
                name={table.name}
                status={table.status}
              />
            );
          }}
        />
      ) : (
        <StyledText>Loading</StyledText>
      )}
    </>
  );
};

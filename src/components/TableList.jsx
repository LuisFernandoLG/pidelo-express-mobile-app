import {  FlatList, StyleSheet } from "react-native";
import { TableItem } from "../components/TableItem";
import { useTableList } from "../hooks/useTableList";
import { FlexContainer } from "./FlexContainer";
import { Loader } from "./Loader";

export const TableList = () => {
  const { tables } = useTableList();

  return (
    <>
      {tables ? (
        <FlexContainer>
        <FlatList
          style={styles.flatList}
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
      </FlexContainer>
      ) : (
        <Loader/>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  flatList: {

  },
});

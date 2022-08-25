import { FlexContainer } from "../components/FlexContainer";
import { TableList } from "../components/TableList";

export const AvailableTablesPage = () => {
  return (
    <FlexContainer flex={1} flex_ai_c flex_jc_c pdTop={20}>
      <TableList />
    </FlexContainer>
  );
};

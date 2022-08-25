import { FlatList, StyleSheet } from "react-native";
import { CategoryDishCarrouselItem } from "./CategoryDishCarrouselItem";
import { FlexContainer } from "./FlexContainer";
import { StyledLink } from "./StyledLink";
import { StyledText } from "./StyledText";

const categories = [
  {
    image:
      "https://a.cdn-hotels.com/gdcs/production193/d1584/e9aee6b0-7118-4b33-9967-0aff8473cae2.jpg",
    id: "oei2nfio2efeo",
    name: "Mexicana",
  },
  {
    image:
      "https://animalgourmet.com/wp-content/uploads/2019/05/background-3470205_1920.jpg",
    id: "oei2nfio2ewfeo",
    name: "Refrescos",
  },
  {
    image:
      "https://www.china-admissions.com/wp-content/uploads/2020/02/Chinese-food.jpg",
    id: "oei2nwewefio2o",
    name: "China",
  },

  {
    image:
      "https://i.insider.com/53b57929eab8eae9587418bd?width=889&format=jpeg",
    id: "oeiwe2nfdqdio2o",
    name: "USA",
  },
  {
    image:
      "https://www.eatthis.com/wp-content/uploads/sites/4/2022/03/Chicken-Tikka-Masala.jpg?quality=82&strip=1",
    id: "oei2nfiqwdwqo2o",
    name: "Indian",
  },
];

export const CategoryDishCarrousel = ({
  setCategorySelected,
  categorySelected,
}) => {
  return (
    <FlexContainer>
      <FlexContainer flex_direction_r flex_jc_sb flex_ai_c pdHorizontal={20}>
        <StyledText fontSize="title" fontWeight="bold">
          Categorías
        </StyledText>
        {categorySelected && (
          <StyledText
            style={styles.selectedItem}
            fontWeight="bold"
            fontSize="subTitle"
          >
            {categorySelected.name}
          </StyledText>
        )}
      </FlexContainer>

      <FlatList
        data={categories}
        style={styles.carrousel}
        horizontal={true}
        scr
        renderItem={({ item: category }) => {
          return (
            <CategoryDishCarrouselItem
              key={category.id}
              isSelected={categorySelected?.id === category.id}
              setCategorySelected={setCategorySelected}
              category={category}
            />
          );
        }}
      />
    </FlexContainer>
  );
};

const styles = StyleSheet.create({
  carrousel: {
    flexDirection: "row",
  },
  selectedItem: {},
});

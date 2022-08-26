const URI = "http://192.168.1.64:5000/api/v1";
const endPointDishes = `${URI}/dishes`;
const endPointDishesByCategory = `${URI}/dishes/tag`;
const endPointCategories = `${URI}/tags`;

export const api = () => {
  const getDishes = async () => {
    try {
      const res = await fetch(endPointDishes); // No sé cuanto tiempo tardará esta cosa en devolver la respuesta, pero el AWAIT hace que espere.
      const data = await res.json();
      return data.dishes;
    } catch (error) {
      console.log(error);
    }
  };

  const getDishesByCategory = async ({ categoryId }) => {
    try {
      const res = await fetch(`${endPointDishesByCategory}/${categoryId}`);
     console.log(`${endPointDishesByCategory}/${categoryId}`)
      const data = await res.json();
      return data.dishesFiltered;
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await fetch(endPointCategories);
      const data = await res.json();
      return data.tags;
    } catch (error) {
      console.log(error);
    }
  };

  return { getDishes, getCategories, getDishesByCategory };
};

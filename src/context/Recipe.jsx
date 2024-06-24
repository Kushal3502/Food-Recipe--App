import { createContext, useState } from "react";

export const RecipeContext = createContext(null);

export const RecipeProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favouriteList, setFavouriteList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const result = await response.json();
      // console.log(result);
      if (result?.data?.recipes) {
        setLoading(false);
        setRecipeList(result.data.recipes);
        // console.log(recipeList);
        setSearchParam("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  };

  const handleFavourite = (currItem) => {
    let cpy = [...favouriteList];
    const idx = cpy.findIndex((item) => item.id === currItem.id);

    if (idx == -1) cpy.push(currItem);
    else cpy.splice(idx, 1);

    setFavouriteList(cpy);
  };

  console.log(recipeList);
  console.log(favouriteList);

  return (
    <RecipeContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        recipeList,
        loading,
        recipeDetails,
        setRecipeDetails,
        handleFavourite,
        favouriteList,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../../context/Recipe";

function Details() {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, handleFavourite, favouriteList } =
    useContext(RecipeContext);

  const getRecipeDetails = async () => {
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const result = await response.json();
      console.log(result.data.recipe);
      if (result?.data?.recipe) {
        setRecipeDetails(result.data.recipe);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {recipeDetails ? (
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-2xl w-full mx-4">
          <div>
            <img
              src={recipeDetails.image_url}
              alt={recipeDetails.title}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="p-6">
            <span className="text-gray-400 text-sm">
              {recipeDetails.publisher}
            </span>
            <h3 className="text-2xl font-bold text-gray-100 mt-2">
              {recipeDetails.title}
            </h3>
            <button
              className="mt-4 px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
              onClick={() => {
                handleFavourite(recipeDetails);
              }}
            >
              {favouriteList &&
              favouriteList.length > 0 &&
              favouriteList.findIndex(
                (item) => item.id === recipeDetails?.id
              ) !== -1
                ? "Remove from Favourites"
                : "Add to Favourites"}
            </button>
            <div className="mt-6">
              <span className="block text-gray-400 font-medium">
                Ingredients:
              </span>
              <ul className="mt-2 list-disc list-inside">
                {recipeDetails.ingredients.map((item, index) => (
                  <li key={index} className="text-gray-100">
                    {item.quantity} {item.unit} {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-100">Loading...</p>
      )}
    </div>
  );
}

export default Details;

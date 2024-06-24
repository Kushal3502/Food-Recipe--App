import React, { useContext } from "react";
import { RecipeContext } from "../../context/Recipe";
import RecipeItem from "../Recipe/RecipeItem";

function Home() {
  const { recipeList, loading } = useContext(RecipeContext);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white text-2xl">
        Loading...
      </div>
    );

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white flex justify-center items-center">
      <div className="w-full">
        {recipeList && recipeList.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 justify-items-center w-full">
            {recipeList.map((item, index) => (
              <RecipeItem key={index} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64 text-xl">
            Nothing to show...
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

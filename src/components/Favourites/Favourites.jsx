import React, { useContext } from "react";
import { RecipeContext } from "../../context/Recipe";
import RecipeItem from "../Recipe/RecipeItem";

function Favourites() {
  const { favouriteList } = useContext(RecipeContext);
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white flex justify-center items-center">
      <div className="w-full">
        {favouriteList && favouriteList.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 justify-items-center w-full">
            {favouriteList.map((item, index) => (
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

export default Favourites;

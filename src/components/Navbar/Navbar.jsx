import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RecipeContext } from "../../context/Recipe";

function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(RecipeContext);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between p-6 bg-gray-800 text-white shadow-lg">
      <h2 className="text-3xl font-bold">
        <NavLink
          to={"/"}
          className="hover:text-yellow-400 transition duration-300"
        >
          FoodPanda
        </NavLink>
      </h2>
      <form onSubmit={onSubmit} className="w-full md:w-1/3">
        <input
          className="w-full px-4 py-2 mb-4 md:mb-0 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md "
          type="text"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Enter recipe name..."
        />
      </form>
      <ul className="flex space-x-6">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `font-medium text-2xl ${
                isActive
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400 "
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className={({ isActive }) =>
              `font-medium text-2xl ${
                isActive
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400 "
              }`
            }
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

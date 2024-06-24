import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Favourites from "./components/Favourites/Favourites.jsx";
import Details from "./components/Details/Details.jsx";
import { RecipeProvider } from "./context/Recipe.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="favourites" element={<Favourites />} />
      <Route path="recipe/:id" element={<Details />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecipeProvider>
      <RouterProvider router={route} />
    </RecipeProvider>
  </React.StrictMode>
);

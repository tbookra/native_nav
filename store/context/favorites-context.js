import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealId, setFavoriteMealId] = useState([]);
  const addFavorite = (id) => {
    setFavoriteMealId((prev) => [...prev, id]);
  };
  const removeFavorite = (id) => {
    setFavoriteMealId((prev) => prev.filter((mealId) => mealId !== id));
  };
  const value={
    ids:favoriteMealId,
    addFavorite,
    removeFavorite
  }
  return <FavoritesContext.Provider value={value} >{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;

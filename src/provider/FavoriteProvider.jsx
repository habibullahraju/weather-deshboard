import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("Favorite", []);

  const addToFavorite = (latitude, longitude, location) => {
    setFavorites([
      ...favorites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };
  const removeFromFavorite = (location) => {
    const restFavorite = favorites.filter((fav) => fav.location !== location);
    setFavorites(restFavorite);
  };

  return (
    <FavoriteContext.Provider
      value={{ addToFavorite, removeFromFavorite, favorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;

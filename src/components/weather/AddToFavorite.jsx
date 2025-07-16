import { useContext, useEffect, useState } from "react";
import redHeartIcon from "../../assets/heart-red.svg";
import heartIcon from "../../assets/heart.svg";
import { FavoriteContext, WeatherContext } from "../../context";
export default function AddToFavorite() {
  const [isFavorite, toggleFavorite] = useState(false);
  const { addToFavorite, removeFromFavorite, favorites } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;
  const handleFavoriteClick = () => {
    const found = favorites.find((fav) => fav.location === location);
    if (!found) {
      addToFavorite(latitude, longitude, location);
    } else {
      removeFromFavorite(location);
    }

    toggleFavorite(!isFavorite);
  };
  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    toggleFavorite(found);
  }, []);
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavoriteClick}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavorite ? redHeartIcon : heartIcon} alt="heart icon" />
        </button>
      </div>
    </div>
  );
}

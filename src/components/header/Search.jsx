import { useContext } from "react";
import searchLogo from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationsByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";

export default function Search() {
  const { setSelectedLocation } = useContext(LocationContext);

  const doSearch = useDebounce((term) => {
    const fetchedLocation = getLocationsByName(term);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required=""
          onChange={handleChange}
        />
        <button type="submit">
          <img src={searchLogo} />
        </button>
      </div>
    </form>
  );
}

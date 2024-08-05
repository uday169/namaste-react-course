import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { SWIGGY_URL, PROXY_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);

    const restaurants = await data.json();
    console.log("restaurants", restaurants);
    const json =
      restaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(json);
    setFilteredRestaurants(json);
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-body">
      <div className="filter">
        <input
          type="text"
          name="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredRest = listOfRestaurants.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRest);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

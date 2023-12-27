import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL, PROXY_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const [resInfo, setResInfo] = useState(null);
  const [menuData, setMenuData] = useState(null);

  console.log("menuData", menuData);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    setResInfo(json?.data?.cards[0]?.card?.card?.info);
    setMenuData(json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards);
  };

  return (
    <div>
      <div className="res-info">
        <div className="res-menu1">
          <h2>{resInfo?.name}</h2>
          <p>{resInfo?.cuisines.join(", ")}</p>
          <p>
            {resInfo?.areaName}, {resInfo?.city}
          </p>
        </div>
        <div className="res-menu2">
          <h2>{resInfo?.avgRating} Stars</h2>
          <p>{resInfo?.totalRatingsString}</p>
        </div>
      </div>
      <div className="menu-section">
        {menuData?.map((item, index) => (
          <div key={index}>
            <h4>{item?.card?.card?.title}</h4>
            {(item?.card?.card?.itemCards || item?.card?.card?.categories)?.map(
              (ele, innerIndex) => (
                <ul key={innerIndex} className="item-list">
                  <li>
                    {ele?.card?.info?.name} - ₹
                    {ele?.card?.info?.price / 100 ||
                      ele?.card?.info?.defaultPrice / 100}
                  </li>
                  <p> -- {ele?.card?.info?.description}</p>
                </ul>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;

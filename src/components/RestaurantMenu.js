import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_URL + resId);
        const { data } = await response.json();

        const restaurantInfo = data?.cards[2]?.card?.card?.info;
        const menuItems =
          data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards;
        console.log("restaurantData", data);
        setResInfo(restaurantInfo);
        setMenuData(menuItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [resId]);

  return (
    <div>
      <div className="res-info">
        <div className="res-menu1">
          <h2>{resInfo?.name}</h2>
          <p>{resInfo?.cuisines?.join(", ")}</p>
          <p>{`${resInfo?.areaName}, ${resInfo?.city}`}</p>
        </div>
        <div className="res-menu2">
          <h2>{`${resInfo?.avgRating} Stars`}</h2>
          <p>{resInfo?.totalRatingsString}</p>
        </div>
      </div>
      <div className="menu-header">
        <h2>Menu</h2>
      </div>
      <div className="menu-section">
        <div className="menu-items">
          {menuData?.map((item, index) => (
            <div key={index} className="menu-item">
              <h3>
                {item?.card?.card?.title}{" "}
                {item?.card?.card?.itemCards?.length > 0 &&
                  `(${item?.card?.card?.itemCards?.length})`}
              </h3>
              {(
                item?.card?.card?.itemCards ||
                item?.card?.card?.categories ||
                []
              ).map((ele, innerIndex) => (
                <ul key={innerIndex} className="item-list">
                  <li>
                    {ele?.card?.info?.name && (
                      <li>
                        {ele.card.info.name} - ₹
                        {(ele.card.info.price || ele.card.info.defaultPrice) /
                          100}
                      </li>
                    )}
                    <div className="inner-menu-items">
                      <h5 className="inner-title">
                        {ele.title}{" "}
                        {ele.itemCards?.length > 0 &&
                          `(${ele.itemCards?.length})`}
                      </h5>
                      {(ele?.itemCards || []).map((innerEle, index) => (
                        <div key={index} className="inner-menu-item">
                          <ul className="inner-item-list">
                            <li>
                              {innerEle?.card?.info?.name} - ₹
                              {(innerEle?.card?.info?.price ||
                                innerEle?.card?.info?.defaultPrice) / 100}
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </li>
                  <p>{ele?.card?.info?.description}</p>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

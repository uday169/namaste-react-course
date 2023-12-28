import { CDN_RES_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, areaName, avgRating, cuisines, costForTwo } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-image"
        src={`${CDN_RES_URL}/${cloudinaryImageId}`}
        alt="rest image"
      />
      <div className="res-card-info">
        <h3>{name}</h3>
        <p>{areaName}</p>
        <h4>{cuisines.join(", ")}</h4>
        <h4>
          {avgRating} stars {costForTwo}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

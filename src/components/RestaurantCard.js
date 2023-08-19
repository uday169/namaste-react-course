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
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;

/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItemCard from "../FoodItemCard/FoodItemCard";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  console.log(category);
  return (
    <div className="pothe__pothe__food__display__container">
      <h2>Top dishes near you</h2>
      <div className="pothe__pothe__food__display__list">
        {food_list?.map((item, index) => {
          return <FoodItemCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

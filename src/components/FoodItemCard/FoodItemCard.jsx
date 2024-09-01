/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./FoodItemCard.css";
import { StoreContext } from "../../context/StoreContext";
const FoodItemCard = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const { _id, name, image, description, price } = item;
  return (
    <div className="pothe__pothe__food__item__card__container">
      <div className="item__card__img__container">
        <img
          className="item__card__img"
          src={`http://localhost:5000/images/${image}`}
          alt=""
        />
        {!cartItems[_id] ? (
          <img
            className="item__card__add"
            onClick={() => addToCart(_id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="item__card__counter">
            <img
              onClick={() => removeFromCart(_id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[_id]} </p>
            <img
              onClick={() => addToCart(_id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="item__card__info__container">
        <div className="item__card__name__rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="item__card__desc">{description}</p>
        <p className="item__card__price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItemCard;

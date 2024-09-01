import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="pothe__pothe__cart__container">
      <div className="pothe__pothe__cart__items__container">
        <div className="cart__items__title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div
                  className="cart__items__item cart__items__title"
                  key={index}
                >
                  <img
                    src={`http://localhost:5000/images/${item?.image}`}
                    alt=""
                  />
                  <p>{item?.name}</p>
                  <p>${item?.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${Number(cartItems[item._id]) * item?.price}</p>
                  <p>
                    <RxCross2
                      onClick={() => removeFromCart(item._id)}
                      className="cross"
                    />
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="pothe__pothe__sub__total__container">
        <div className="pothe__pothe__sub__total__content">
          <h2>Cart Totals</h2>
          <div>
            <div className="sub__total__details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="sub__total__details">
              <p>Delivery free</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
            </div>
            <hr />
            <div className="sub__total__details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/place-order")}>
            proceed to checkout
          </button>
        </div>
        <div className="cart__promocode__container">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart__promocode__input">
              <input type="text" placeholder="PROMOCODE" />
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
  const { food_list, cartItems, removeFromCart } = useContext(StoreContext);
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
                  <img src={item?.image} alt="" />
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
              <p>{0}</p>
            </div>
            <hr />
            <div className="sub__total__details">
              <p>Delivery free</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="sub__total__details">
              <b>Total</b>
              <b>{0}</b>
            </div>
          </div>
          <button>proceed to checkout</button>
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

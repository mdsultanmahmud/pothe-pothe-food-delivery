import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="pothe__pothe__place__order__container">
      <form className="pothe__pothe__place__order__form">
        <div className="place__order__left">
          <p className="place__order__title">Delivery Information</p>
          <div className="place__multi__input__fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Street" />
          <div className="place__multi__input__fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="place__multi__input__fields">
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="place__order__right">
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
            <button>proceed to payment</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;

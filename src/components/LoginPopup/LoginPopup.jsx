/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLoginPopup }) => {
  const [currentState, setCurrentState] = useState("login");
  const popupRef = useRef();
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowLoginPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [setShowLoginPopup]);
  return (
    <div className="pothe__pothe__login__popup__container">
      <div className="pothe__pothe__login__popup__content" ref={popupRef}>
        <div className="popup__login__title__container">
          <h1 className="login__popup__title">{currentState}</h1>
          <img
            onClick={() => setShowLoginPopup(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <form className="login__popup__form__container">
          <div className="input__field">
            {currentState === "Sign Up" && (
              <>
                <input type="text" placeholder="Your Name" required />
              </>
            )}
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Your Password" required />
          </div>
          <button className="login__popup__btn">
            {currentState === "Sign Up" ? "Create Account" : "Sign In"}
          </button>
          {currentState === "login" ? (
            <p>
              Do you have not any account?{" "}
              <span
                className="login__popup__link"
                onClick={() => setCurrentState("Sign Up")}
              >
                {" "}
                Create Account
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                className="login__popup__link"
                onClick={() => setCurrentState("login")}
              >
                Sign In
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;

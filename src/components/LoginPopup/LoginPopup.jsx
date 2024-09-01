/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { url } from "../../utils/getUrl";
import axios from "axios";
import toast from "react-hot-toast";
import { saveToken } from "../../utils/saveToken";
import { StoreContext } from "../../context/StoreContext";
const LoginPopup = ({ setShowLoginPopup }) => {
  const { setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("login");
  const popupRef = useRef();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let newURL = url?.baseURL || url?.deploymentURL;
      if (currentState === "login") {
        newURL += "/user/login";
      } else {
        newURL += "/user/register";
      }

      const response = await axios.post(newURL, data);
      if (response.data.success) {
        toast.success(response.data.message);
        saveToken(response.data.authtoken);
        setToken(response.data.authtoken);
        setShowLoginPopup(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  // remove popup by clicking outside
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
        <form onSubmit={handleLogin} className="login__popup__form__container">
          <div className="input__field">
            {currentState === "Sign Up" && (
              <>
                <input
                  onChange={(e) => handleInputChange(e)}
                  type="text"
                  placeholder="Your Name"
                  required
                  name="name"
                />
              </>
            )}
            <input
              onChange={(e) => handleInputChange(e)}
              type="email"
              placeholder="Your Email"
              required
              name="email"
            />
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              placeholder="Your Password"
              required
              name="password"
            />
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

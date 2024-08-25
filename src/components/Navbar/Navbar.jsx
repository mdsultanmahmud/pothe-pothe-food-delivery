import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginPopup from "../LoginPopup/LoginPopup";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [showloginPopup, setShowLoginPopup] = useState(false);
  const handleScrolling = (element) => {
    const ele = document.getElementById(element);
    if (ele) {
      ele.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {showloginPopup && <LoginPopup setShowLoginPopup={setShowLoginPopup}/>}
      <div className="pothe__pothe__navbar__container">
        <div className="pothe__pothe__navbar__logo__container">
          <Link to={"/"}>
            <img src={assets.logo} alt="" />
          </Link>
        </div>
        <ul className="pothe__pothe__navbar__menu__container">
          <li
            onClick={() => setMenu("home")}
            className={`${menu == "home" ? "active" : ""}`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => {
              handleScrolling("explore_menu");
              setMenu("menu");
            }}
            className={`${menu == "menu" ? "active" : ""}`}
          >
            Menu
          </li>
          <li
            onClick={() => {
              handleScrolling("mobile-app");
              setMenu("mobile_app");
            }}
            className={`${menu == "mobile_app" ? "active" : ""}`}
          >
            <Link to="/">Mobile App</Link>
          </li>
          <li
            onClick={() => setMenu("contact_us")}
            className={`${menu == "contact_us" ? "active" : ""}`}
          >
            <Link to="/contact">Contact US</Link>
          </li>
        </ul>
        <div className="pothe__pothe__navbar__right">
          <img src={assets.search_icon} alt="" />
          <div className="pothe__pothe__navbar__basket__icon">
            <Link to={"/cart"}>
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className="pothe__pothe__search__dot"></div>
          </div>

          <button
            onClick={() => setShowLoginPopup(true)}
            className="pothe__pothe__navbar__sign__in__btn"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

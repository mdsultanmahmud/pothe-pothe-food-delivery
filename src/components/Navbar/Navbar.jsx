import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="pothe__pothe__navbar__container">
      <div className="pothe__pothe__navbar__logo__container">
        <img src={assets.logo} alt="" />
      </div>
      <ul className="pothe__pothe__navbar__menu__container">
        <li
          onClick={() => setMenu("home")}
          className={`${menu == "home" ? "active" : ""}`}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={`${menu == "menu" ? "active" : ""}`}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile_app")}
          className={`${menu == "mobile_app" ? "active" : ""}`}
        >
          Mobile App
        </li>
        <li
          onClick={() => setMenu("contact_us")}
          className={`${menu == "contact_us" ? "active" : ""}`}
        >
          Contact US
        </li>
      </ul>
      <div className="pothe__pothe__navbar__right">
        <img src={assets.search_icon} alt="" />
        <div className="pothe__pothe__navbar__basket__icon">
          <img src={assets.basket_icon} alt="" />
          <div className="pothe__pothe__search__dot"></div>
        </div>
        <button className="pothe__pothe__navbar__sign__in__btn">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;

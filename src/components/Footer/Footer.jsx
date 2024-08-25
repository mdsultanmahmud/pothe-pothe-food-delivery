import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="pothe__pothe__footer__container" id="footer">
        <div className="pothe__pothe__footer__content">
            <div className="pothe__pothe__footer__content__left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, debitis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, provident.</p>
                <div className="footer__social__icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="pothe__pothe__footer__content__center">
                <h2>company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>delivery</li>
                    <li>Privace policy</li>
                </ul>
            </div>
            <div className="pothe__pothe__footer__content__right">
                <h2>get in touch</h2>
                <ul>
                    <li>+8801584*****</li>
                    <li>pothepothe@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer__copyright">Copyright 2024 &copy; pothepothe.com -- All Right Reserved</p>
    </div>
  );
};

export default Footer;

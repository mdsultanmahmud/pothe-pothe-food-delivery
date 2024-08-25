import { assets } from "../../assets/assets";
import "./AppDownLoad.css";
const AppDownLoad = () => {
  return (
    <div className="pothe__pothe__app__download__container">
      <p>
        For Better Experience Download <br />
        PothePothe App
      </p>
      <div className="app__download__platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownLoad;

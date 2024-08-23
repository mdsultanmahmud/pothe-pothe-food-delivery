import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets.js";
// eslint-disable-next-line react/prop-types
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="pothe__pothe__explore__menu__container" id="explore_menu">
      <h1>Explore our menu!</h1>
      <p className="pothe__pothe__explore__menu__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        distinctio consectetur impedit alias asperiores praesentium beatae
        doloribus pariatur eveniet veniam.
      </p>
      <div className="pothe__pothe__explore__menu__list">
        {menu_list?.map((item, index) => {
          return (
            <div
              key={index}
              className="pothe__pothe__explore__menu__list__item"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img className={`${category === item.menu_name ? 'active':""}`} src={item?.menu_image} alt="" />
              <p>{item?.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

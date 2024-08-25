import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownLoad from "../../components/AppDownLoad/AppDownLoad";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Banner />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownLoad />
    </div>
  );
};

export default Home;

import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Banner />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;

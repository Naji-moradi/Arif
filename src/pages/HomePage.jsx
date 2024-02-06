import React from "react";

import Cards from "../components/Cards";
import News from "../components/News";
import TopHeader from "../components/TopHeader";

const HomePage = () => {
  return (
    <div>
      <TopHeader />
      <Cards />
      <News />
    </div>
  );
};

export default HomePage;

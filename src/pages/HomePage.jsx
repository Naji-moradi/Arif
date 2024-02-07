import React from "react";
import Cards from "../components/Cards";
import News from "../components/News";
import HeroSection from "../components/HeroSection";
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Cards />
      <News />
    </div>
  );
};

export default HomePage;

import React from "react";
import Header from "../components/TopHeader";
import Cards from "../components/Cards";
import News from "../components/News";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Cards />
      <News />
      <Footer />
    </div>
  );
};

export default HomePage;

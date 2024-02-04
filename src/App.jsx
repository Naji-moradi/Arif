import { useState } from "react";

import "./App.css";
// import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Cards from "./components/Cards";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Cards />
      <News />
      <Footer />
    </>
  );
}

export default App;

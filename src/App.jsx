import { useState } from "react";

import "./App.css";
// import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Cards from "./components/Cards";
import News from "./components/News";

function App() {
  return (
    <>
      <Header />
      <Cards />
      <News />
    </>
  );
}

export default App;

import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/TopHeader";

import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TopHeader from "./components/TopHeader";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import WhyEntop from "./components/WhyEntop";

function App() {
  return (
    <Router>
      <TopHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/entop" element={<WhyEntop />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

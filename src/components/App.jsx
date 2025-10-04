import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";
import Vans from "./Vans";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

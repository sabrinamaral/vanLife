import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

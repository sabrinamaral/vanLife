import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/host/Dashboard";
import Home from "./pages/Home";
import HostLayout from "./components/HostLayout";
import Income from "./pages/host/Income";
import Layout from "./components/Layout";
import Reviews from "./pages/host/Reviews";
import Vans from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />

          <Route path="/host" element={<HostLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/host/Dashboard";
import Home from "./pages/Home";
import HostVans from "./pages/host/HostVans";
import HostVanDetail from "./pages/host/HostVanDetail";
import Income from "./pages/host/Income";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Reviews from "./pages/host/Reviews";
import Vans from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail";
import HostVansInfo from "./pages/host/HostVansInfo";
import HostVansPricing from "./pages/host/HostVansPricing";
import HostVansPhotos from "./pages/host/HostVansPhotos";
import AuthRequired from "./components/AuthRequired";
import HostLayout from "./components/HostLayout";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/login" element={<Login />} />
          <Route element={<AuthRequired />}>
            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />

              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVansInfo />} />
                <Route path="pricing" element={<HostVansPricing />} />
                <Route path="photos" element={<HostVansPhotos />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

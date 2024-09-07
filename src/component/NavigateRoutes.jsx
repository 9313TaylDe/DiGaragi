import Cart from "../pages/Cart";
import Home from "../component/Home";

import { Route, Routes } from "react-router-dom";
const NavigateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default NavigateRoutes;

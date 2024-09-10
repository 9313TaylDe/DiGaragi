// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Products from "./component/Products";
import Cart from "./pages/Cart";
import NavigateRoutes from "./component/NavigateRoutes";
import "./App.css";
import Home from "./component/Home";
import CartProvider from "./pages/CartProvider";
import Whatsapp from "./pages/Whatsapp";
import ProductView from "./pages/ProductDetails";
import PaymentCode from "./pages/PaymentCode";
import InputSearch from "./component/InputSearch";
import ListaProducts from "./component/ListaProducts";
const App = () => {
  return (
    <CartProvider>
      <Layout>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment-code" element={<Cart />} />
            <Route
              path="/"
              element={
                <InputSearch products={ListaProducts} placeholder="Buscar" />
              }
            />
            <Route path={`/product/:id`} element={<ProductView />} />
          </Routes>
        </div>
      </Layout>
    </CartProvider>
  );
};

export default App;

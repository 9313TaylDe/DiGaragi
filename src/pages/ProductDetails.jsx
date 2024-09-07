import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../pages/CartProvider";
import CardProduct from "../component/CardProduct";

const ProductDetails = () => {
  const { products } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-list">
      <CardProduct title={"tenis"} price={"R$20,00"} />
      <div>
        <p>Descrição</p>
        <p>ACOMPANHA CARNE, QUEIJO, PRESUNTO, ALFACE, MILHO COM ERVILHA</p>
        <p>Descrição</p>
        <p>ACOMPANHA CARNE, QUEIJO, PRESUNTO, ALFACE, MILHO COM ERVILHA</p>
        <p>Descrição</p>
        <p>ACOMPANHA CARNE, QUEIJO, PRESUNTO, ALFACE, MILHO COM ERVILHA</p>
      </div>
    </div>
  );
};

export default ProductDetails;

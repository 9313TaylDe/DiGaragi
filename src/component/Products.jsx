import React, { useState, useContext } from "react";
import CardProduct from "./CardProduct";
import ListaProducts from "./ListaProducts";
import { CartContext } from "../pages/CartProvider";
import "../Card.css";

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  // Função para mostrar mais produtos
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  // Função para mostrar menos produtos
  const showLess = () => {
    setVisibleCount((prevCount) => Math.max(4, prevCount - 4));
  };

  // Função para verificar se o produto está no carrinho
  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div className="container-products">
      {ListaProducts.slice(0, visibleCount).map((produto) => (
        <CardProduct
          key={produto.id}
          id={produto.id}
          title={produto.title}
          price={produto.price}
          newprice={produto.newprice}
          discount={produto.discount}
          image={produto.image}
          category={produto.category}
          description={produto.description}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isAdded={isProductInCart(produto.id)} // Passa o estado do produto no carrinho
        />
      ))}

      <div className="vermaismenos">
        {visibleCount < ListaProducts.length && (
          <button className="ver-mais" onClick={loadMore}>
            Mostrar +
          </button>
        )}
        {visibleCount > 4 && (
          <button className="ver-menor" onClick={showLess}>
            Mostrar -
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;

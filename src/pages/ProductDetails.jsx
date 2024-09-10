import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../component/CardProduct";
import ListaProducts from "../component/ListaProducts";
import { CartContext } from "../pages/CartProvider";
import "../ProductDetails.css";

const ProductDetails = (products = []) => {
  const { id } = useParams(); // Pegando o id da URL
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [sugestions, setSugestions] = useState([]);

  // const handleClickDeatails = () => {
  //   setSugestions([]);
  // };
  // // Encontrando o produto na lista de produtos pelo id
  const product = ListaProducts.find((item) => item.id === parseInt(id));

  // if (!product) {
  //   return <h2>Produto não encontrado</h2>;
  // }
  return (
    <div className="product-details">
      <CardProduct
        key={product.id}
        id={product.id}
        title={product.title}
        image={product.image}
        price={product.price}
        description={product.description}
        // newprice={product.newprice}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <section>
        <span className="tituloPrincipal">
          <h2>Hamburguer</h2>
        </span>
        {product.description.split("\n").map((item, index) => (
          <li className="descriptionPage" key={index}>
            {item}
          </li>
        ))}
      </section>
    </div>
  );
};

export default ProductDetails;

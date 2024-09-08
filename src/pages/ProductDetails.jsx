import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../component/CardProduct";
import ListaProducts from "../component/ListaProducts";
import { CartContext } from "../pages/CartProvider";

const ProductDetails = () => {
  const { id } = useParams(); // Pegando o id da URL
  const { addToCart, removeFromCart } = useContext(CartContext);

  // Encontrando o produto na lista de produtos pelo id
  const product = ListaProducts.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Produto não encontrado</h2>;
  }

  return (
    <div className="product-details">
      <CardProduct
        id={product.id}
        title={product.title}
        image={product.image}
        price={product.price}
        newprice={product.newprice}
        description={product.description}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default ProductDetails;

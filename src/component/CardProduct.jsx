import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import imgProduct from "../assets/images/product.png";
import { CartContext } from "../pages/CartProvider";

const CardProduct = ({
  taxaEntrega,
  id,
  title,
  image,
  category,
  description,
  price,
  discount,
  newprice,
  addToCart,
  removeFromCart,
  products = [],
}) => {
  const { productId } = useParams(); // Captura o ID da URL
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const [sugestions, setSugestions] = useState([]);

  const handleClickDeatails = () => {};

  useEffect(() => {
    // Verifique se o produto está no carrinho
    const productInCart = cart.some((product) => product.id === id);
    setIsAdded(productInCart);
  }, [id, cart]);

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      image,
      category,
      description,
      price,
      discount,
      newprice,
    });
    setIsAdded(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
    setIsAdded(false);
  };

  const HandlePageClick = () => {
    navigate(`/product/${id}/`);
    setSugestions([]);
  };

  return (
    <div className="card-products">
      <div className="card-img">
        <i className="pi pi-info-circle" onClick={HandlePageClick}></i>
        {discount && <span className="discount-badge">{discount}</span>}
        <img className="imgProduct" src={imgProduct} alt={title} />
      </div>
      <div className="container-infos">
        <p className="title">{title}</p>
        <div className="prices">
          <p className="price">{price}</p>
          <p className="newprice">{newprice}</p>
        </div>
        {isAdded ? (
          <>
            <Link onClick={handleRemoveFromCart} className="pi pi-trash"></Link>{" "}
            <Link
              id="iconcartlink"
              className="pi pi-shopping-cart"
              to="/cart"
            />
          </>
        ) : (
          <Link className="pi-icones" onClick={handleAddToCart}>
            <i className="pi pi-plus-circle"></i>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardProduct;

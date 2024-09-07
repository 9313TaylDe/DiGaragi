// src/pages/CartProvider.js
import React, { createContext, useState, useEffect, useCallback } from "react";

// Criação do contexto
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Inicializa como um array vazio
  const [cart, setCart] = useState([]);

  // Recuperar o estado do cart e dos produtos do localStorage quando o componente for montado
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
        setCart([]);
      }
    }

    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      try {
        setProducts(JSON.parse(savedProducts));
      } catch (error) {
        console.error("Failed to parse products from localStorage", error);
        setProducts([]);
      }
    }
  }, []);

  // Salvar o estado no localStorage sempre que o estado do cart ou dos produtos mudar
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Função para adicionar um item ao cart
  const addToCart = useCallback((product) => {
    if (product && product.id) {
      setCart((prevCart) => [...prevCart, product]);
    } else {
      console.warn("Invalid product: ", product);
    }
  }, []);

  // Função para remover um item do cart com base no id
  const removeFromCart = useCallback((id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }, []);

  // Função para limpar o cart
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

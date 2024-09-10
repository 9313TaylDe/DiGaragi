import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import CardProduct from "../component/CardProduct";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // Função para calcular o total da compra
  const calculateTotal = () => {
    const total = cart.reduce((total, item) => {
      const itemPrice = item.newprice || item.price || 0; // Considera preço novo ou original
      return total + parseFloat(itemPrice);
    }, 0);
    return total;
  };

  // Função para gerar e copiar o link PIX com o valor total
  const generatePixPaymentLink = () => {
    const taxaEntrega = 6.0; // Atualize a taxa de entrega conforme necessário
    const totalSemTaxa = calculateTotal(); // Calcula o total dos itens no carrinho
    const totalComTaxa = totalSemTaxa + taxaEntrega; // Soma a taxa de entrega ao total

    // Formatação do valor total com duas casas decimais
    const valorTotalFormatado = (totalComTaxa * 100)
      .toString()
      .padStart(12, "0"); // Valor em centavos e com 12 dígitos

    // Link PIX fornecido com o valor total
    const pixLinkBase = `00020126360014br.gov.bcb.pix0136f3ab3f33-15d8-4f4d-8a31-fd73bf30c1c45204000053039865802BR5925Francisco Expedito Nascim6009Sao Paulo620705036304D11`;

    navigator.clipboard
      .writeText(pixLinkBase)
      .then(() => {
        toast.success("Link PIX copiado com sucesso!");
      })
      .catch((err) => {
        toast.error("Erro ao copiar o link.");
      });
  };

  return (
    <div className="cart-container">
      <h3>Total: R$ {calculateTotal().toFixed(2)}</h3>
      {cart.length === 0 ? (
        <p>Adicione produtos.</p>
      ) : (
        <>
          <button className="realizar-compra" onClick={generatePixPaymentLink}>
            Gerar link PIX
          </button>
          <div className="cart-container-cont">
            {cart.map((product) => (
              <CardProduct
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                newprice={product.newprice}
                discount={product.discount}
                removeFromCart={removeFromCart}
                cart={cart}
              />
            ))}
          </div>
        </>
      )}
      <ToastContainer /> {/* Componente para exibir notificações */}
    </div>
  );
};

export default Cart;

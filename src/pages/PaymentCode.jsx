import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Cart.css";

const PaymentCode = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const total = location.state?.totalComTaxa || 0;

  // Função para gerar o código Pix com o valor formatado
  const generatePixCode = (valor) => {
    // Formatar o valor com duas casas decimais e sem vírgula
    const valorFormatado = (valor * 100).toString().padStart(12, "0"); // Valor em centavos e com 12 dígitos

    // Montar o código Pix (exemplo fictício e simplificado)
    const codigoPix = `00020126360014BR.GOV.BCB.PIX0114+55889931397445204000053039865802BR5925FRANCISCO EXPEDITO NASCIM6009SAO PAULO622605226304D11`;

    return codigoPix;
  };

  const copyCode = () => {
    const pixCode = generatePixCode(total);

    const textArea = document.createElement("textarea");
    textArea.value = pixCode;
    document.body.appendChild(textArea);
    textArea.className = "copiarCodigo";
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Código copiado para a área de transferência!");
  };

  return (
    <div>
      <h2>Código de Pagamento</h2>
      <div className="copiarCodigo">{generatePixCode(total)}</div>
      <p>Total a pagar: R$ {total.toFixed(2)}</p>
      <button onClick={copyCode}>Copiar Código</button>
      <button onClick={() => navigate("/")}>Voltar à página inicial</button>
    </div>
  );
};

export default PaymentCode;

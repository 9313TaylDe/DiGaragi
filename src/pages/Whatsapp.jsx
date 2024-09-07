import React from "react";
import { Link } from "react-router-dom";
import "../Footer.css";
const openWhatsApp = (phoneNumber, message) => {
  // Codifica a mensagem para ser usada na URL
  const encodedMessage = encodeURIComponent(message);
  // Cria o link completo para o WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Abre o link em uma nova aba
  window.open(whatsappLink, "_blank");
};

const openIntagram = (user, message) => {
  const instagramLink = "https://www.instagram.com/_hiddenpersons/";
  window.open(instagramLink, "_blank");
};

const WhatsappButton = () => {
  // Dados do telefone e mensagem
  const phoneNumber = "5588993139744"; // Substitua pelo número desejado (sem o código do país +55)
  const message = "Olá, gostaria de realizar o meu pedido";

  const OpenGithub = () => {
    const githubLink = "https://github.com/9313TaylDe";
    window.open(githubLink, "_blank");
  };
  return (
    <div className="sociais-footer">
      <Link
        onClick={() => openWhatsApp(phoneNumber, message)}
        className="linkss"
      >
        <i className={`pi pi-whatsapp icon-link`} id="link-whatsapp"></i>
      </Link>
      <Link onClick={openIntagram} className="linkss">
        <i className={`pi pi-instagram icon-link`} id="link-instagram"></i>
      </Link>
      <Link onClick={OpenGithub}>
        <i className={`pi pi-github icon-link`} id="link-github"></i>
      </Link>
    </div>
  );
};

export default WhatsappButton;

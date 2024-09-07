import product1 from "../assets/images/product.png";
import product2 from "../assets/images/fotoSapato.png";
import "../Footer.css";
import WhatsappButton from "../pages/Whatsapp";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <span className="footer-main">
          <p className="descricao-digaraggi">
            DiGarragi surgiu em 2019 com o intuito
            <br /> de ser uma das grandes oções de
            <br />
            lanchonetes da região
          </p>
          <span className="icones">
            <WhatsappButton />
          </span>
        </span>
        <p className="rodapee">
          Todos os direiros resrvados a @Digaragi &copy;
        </p>
      </footer>
    </>
  );
};

export default Footer;

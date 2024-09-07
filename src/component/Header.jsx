import { useState } from "react";
import MenuMobile from "./MenuMobile";
import "primeicons/primeicons.css";
import "../Header.css";
import { Link } from "react-router-dom";
import logoDiGarage from "../assets/images/logoDiGarage.jpeg";
export const Header = () => {
  return (
    <>
      <header className="header">
        <MenuMobile />
        <img className="logodigarage" src={logoDiGarage} alt="" />

        <ul className="container-menumain">
          <li>
            <button>
              <Link className="links" to="/">
                <i>Home</i>
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link className="links" to="/cart">
                <i>Carrinho</i>
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link className="links" to="/sobre">
                <i>Sobre</i>
              </Link>
            </button>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;

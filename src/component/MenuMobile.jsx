import { useState } from "react";
import "primeicons/primeicons.css";
import { Link } from "react-router-dom";
import "../ButtonSandwich.css";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState();

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      {isOpen ? (
        <div className="menu-hambueger" onClick={toggleMenu}>
          <button
            onClick={toggleMenu}
            className={`pi ${isOpen && "pi-angle-left"}`}
            id="button-open-menu"
          ></button>

          <ul className="menu-mobile-elements-show">
            <li>
              <Link className="link" to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/cart" onClick={toggleMenu}>
                Cart
              </Link>
            </li>
            <li>
              <Link className="link" to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <button
          onClick={toggleMenu}
          className={`pi ${!isOpen && "pi-bars"}`}
          id="button-close-menu"
        ></button>
      )}
    </>
  );
};

export default MenuMobile;

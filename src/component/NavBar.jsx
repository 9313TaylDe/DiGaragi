import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="navbar-list">
          <li>
            {" "}
            <NavLink to="/perfil">Perfil</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/perfil">Perfil</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/perfil">Perfil</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/perfil">Perfil</NavLink>
          </li>

          <li>
            {" "}
            <NavLink to="/perfil">Perfil</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/perfil">Perfil</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;

import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img className="logo" src="/img/logo.png" alt="Logo Kasa" />
      <nav>
        <div className="nav">
          <ul className="menu">
            <li>
              <Link to="/" className="lien">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/about" className="lien">
                A Propos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

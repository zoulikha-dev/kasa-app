import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo-container">
        <img className="logo2" src="/img/logo-2.png" alt="Logo Kasa" />
        <img
          className="logo-footer"
          src="/img/logo-footer.png"
          alt="Tous droits réservés"
        />
      </div>
    </footer>
  );
};

export default Footer;

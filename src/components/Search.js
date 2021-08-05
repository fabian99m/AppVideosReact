import React from "react";

import "./styles/Search.css";

const Header = () => {
  return (
    <section className="main">
      <h2 className="main__titulo">¿Qué quieres ver hoy?</h2>
      <input className="main__input" type="text" placeholder="Buscar..." />
    </section>
  );
};

export default Header;


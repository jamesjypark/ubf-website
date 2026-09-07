import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="SiteHeader">
      <a className="Brand" href="#top">
        UBF <span className="BrandDot">·</span> Victoria
      </a>
      <nav className="SiteNav">
        <a href="#about">About</a>
        <a href="#gather">Gather</a>
        <a href="#visit">Visit</a>
        <a href="#connect">Connect</a>
      </nav>
    </header>
  );
};

export default Header;

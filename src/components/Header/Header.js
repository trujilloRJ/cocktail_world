import React from "react";
import "./Header.scss";
import Logo from "../../img/logo.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav__hero">
            <div className="nav__hero__logo">
              <img src={Logo} alt="" />
            </div>
            <div className="nav__hero__name">
              Cocktail World
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

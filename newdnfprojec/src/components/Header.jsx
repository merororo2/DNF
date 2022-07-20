import React from "react";
import "../asset/css/header.css";
import mainLogo from "../asset/images/logo.jpg";
function Header() {
  return (
    <div className="mainName">
      <a href="/">
        <img src={mainLogo} alt="" />
      </a>
    </div>
  );
}

export default Header;

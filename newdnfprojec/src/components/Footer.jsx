import React from "react";
// import "../asset/css/footer.css";
import footerlogo from "../asset/images/logo.png";

function Footer() {
  return (
    <footer>
      <a href="https://developers.neople.co.kr/">
        <img src={footerlogo} alt="사진없어" />
      </a>
    </footer>
  );
}

export default Footer;

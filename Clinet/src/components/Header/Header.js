import React from "react";
import "../../css/Header/header.css";
import {words} from "../../staticfile";


const Header = () => {
  return <header>
      <h1>{words.headerTitle}</h1>
  </header>;
};

export default Header;

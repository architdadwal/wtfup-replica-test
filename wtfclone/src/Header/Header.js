import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
function header() {
  return (
    <header>
      <NavLink>
        <img src="/Navbar/logo.png" alt="blank" />
      </NavLink>
      <Navbar />
    </header>
  );
}

export default header;

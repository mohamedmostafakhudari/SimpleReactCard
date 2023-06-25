import React from "react";
import imgUrl from "../assets/images/React_logo.png";
export default function Navbar() {
  return (
    <nav className="nav--container">
      <img src={imgUrl} className="nav--icon" alt="React logo" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}

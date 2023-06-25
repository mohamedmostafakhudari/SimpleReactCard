import React from "react";

export default function Navbar() {
  return (
    <nav className="nav--container">
      <img
        src="src/assets/images/React_logo.png"
        className="nav--icon"
        alt="React logo"
      />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}

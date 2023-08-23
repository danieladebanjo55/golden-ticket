import React from "react";
import "./NavBar.scss";
import { useRef } from "react";
import { useState } from "react";

export default function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3 className="logo">Golden Ticket</h3>
      <nav ref={navRef}>
        <a href="/">About</a>
        <a href="/">Algorithm</a>
        <a href="/">How To Play</a>
        <a href="/">Tokenomics</a>
        <a href="/">Community</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <i className="fa fa-times"></i>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <i className="fa fa-bars"></i>
      </button>
    </header>
  );
}

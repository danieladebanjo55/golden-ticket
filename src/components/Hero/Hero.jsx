import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-text">Welcome to Golden Ticket</h1>
          <p className="hero-subtext">A Unique & Gamified Raffle System</p>
          <button className="explore-button">Explore</button>
        </div>
      </div>
    </>
  );
}

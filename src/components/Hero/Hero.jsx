import React from "react";
import "./Hero.scss";
import Lottie from "lottie-react";
import animationLottie from "../assets/animation_llqox8n0.json";
import animationWin from "../assets/win.mp4.lottie.json";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="lottie_animation">
            <Lottie animationData={animationLottie} />;
          </div>
          <h1 className="hero-text">Welcome to Golden Ticket</h1>
          <p className="hero-subtext">A Unique & Gamified Raffle System</p>
          <button className="explore-button">Explore</button>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { motion } from "framer-motion";
import candyman from "../assets/candy.png";
import "./About.scss";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <>
      <section className="about">
        <div className="left_side">
          <div className="image_container">
            <img src={candyman} />
          </div>
        </div>
        <div className="right_side">
          <h2 className="about-text">About Golden Ticket</h2>
          <p className="about-subtext">
            Our core is the $TICKET token, the heart of our algorithmic raffle
            system. To join, users buy $TICKET tokens. Each purchase gives a 1
            in 10 shot at a share of the Golden Ticket prize pool, fueled by
            taxes from token transactions. Our unique system rewards winners and
            keeps everyone engaged. Every $TICKET token purchase triggers the
            Golden Ticket Telegram bot. If a user wins, the bot posts the Golden
            Ticket image in our Telegram group with prize details, the current
            pool, and a transaction link. Winning ETH is sent directly to their
            wallet via our smart contract. Winners also keep their $TICKET
            tokens. Non-winners aren't left out. They still get updates on
            potential wins, the pool size, and transaction links.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </section>
    </>
  );
}

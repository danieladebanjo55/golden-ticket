import React from "react";
import Card from "./Card/Card";
import "./Tokenomics.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Tokenomics() {
  AOS.init();
  return (
    <>
      <section className="token__container">
        <div className="token-overlay"></div>
        <div className="token__content">
          <h2
            className="title"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            Tokenomics
          </h2>
          <div
            className="card__container"
            data-aos="slide-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="1100"
            data-aos-once="false"
          >
            <Card title="Name" subtitle="Golden Ticket" />
            <Card title="Symbol" subtitle="$TICKET" />
            <Card title="Chain" subtitle="Ethereum" />
            <Card title="Supply" subtitle="1,000,000,000" />
            <Card title="Buy & Sell Tax" subtitle="5%" />
            <Card
              title="Taxes Distribution"
              subtitle="80% To The Price Pool & 20% To Marketing"
            />
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import Card from "./Card/Card";
import "./Tokenomics.scss";

export default function Tokenomics() {
  return (
    <>
      <section className="token__container">
        <div className="token-overlay"></div>
        <div className="token__content">
          <h2 className="title">Tokenomics</h2>
          <div className="card__container">
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

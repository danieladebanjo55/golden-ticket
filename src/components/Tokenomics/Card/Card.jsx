import React from "react";
import "./Card.scss";

export default function Card({ title, subtitle }) {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </>
  );
}

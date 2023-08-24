import React from "react";
import "./Community.scss";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Website from "../assets/website.png";

export default function Community() {
  return (
    <>
      <section className="my_container">
        <h2 className="my_title">Our Golden Community</h2>
        <div className="community_content">
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Website} alt="website" />
        </div>
        <div className="my_footer">
          <p className="footer_text">
            All Rights Reservered | Golden Ticket Lottery
          </p>
        </div>
      </section>
    </>
  );
}

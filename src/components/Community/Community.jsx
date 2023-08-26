import React from "react";
import "./Community.scss";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Website from "../assets/website.png";

export default function Community() {
  return (
    <>
      <section className="my_container" id="Community">
        <h2 className="my_title">Our Golden Community</h2>
        <div className="community_content">
          <a href="#">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={Twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={Website} alt="website" />
          </a>
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

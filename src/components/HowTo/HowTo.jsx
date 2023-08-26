import React from "react";
import "./HowTo.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import Animation from "./Animation";

export default function HowTo() {
  AOS.init();
  return (
    <>
      <section className="how__container" id="HowTo">
        <Animation />
        <h2
          className="title"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          How To Play
        </h2>

        <p
          className="how_content"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
        >
          Playing Golden Ticket presents an opportunity that goes beyond a
          standard raffle experience. Participants enter by purchasing $TICKET
          tokens, with every purchase offering a 1 in 10 chance to win a portion
          of the Golden Ticket prize pool. Importantly, participants retain
          their tokens regardless of winning. There is no minimum or maximum of
          tokens that need to be purchased to enter into the Golden Ticket
          raffle. The percentage of the prize pool that a participant can win is
          calculated based on the proportion of $TICKET tokens bought in a
          transaction, which is then amplified by a dynamically calculated
          Winning Multiplier. The transparency of the Golden Ticket system is
          enhanced by our real-time notification system, powered by the Golden
          Ticket Telegram bot, which is activated with every token purchase.
          Winning the Golden Ticket triggers an immediate announcement, along
          with key details including the amount won, current prize pool, and a
          transaction link. Winners receive their winnings in ETH directly to
          their wallets, courtesy of our smart contract. Non-winners also
          receive an update, showcasing their potential winnings and the current
          prize pool.
        </p>
      </section>
    </>
  );
}

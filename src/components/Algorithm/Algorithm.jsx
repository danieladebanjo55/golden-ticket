import React from "react";
import "./Algorithm.scss";
import "./Video.scss";
import { useState } from "react";
import Modal from "react-modal";

export default function Algorithm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <section className="main__container">
        <div className="overlay"></div>
        <div className="container">
          <div className="title">
            <h2>Winning Multiplier Algorithm</h2>
          </div>
          <div className="content">
            The Golden Ticket Winning Multiplier (WM) algorithm plays a crucial
            role in our project's sustainability, attractiveness, and fairness.
            Serving several purposes, the algorithm encourages buying pressure,
            sustains the project's longevity, and integrates an anti-cheat
            mechanism. The Winning Multiplier is recalculated after each buy and
            sell transaction, based on the formula: <br />
            <b>
              WM = ((Token Price * TP * N * (1 - LP)) / Prize Pool Amount) *
              Total Supply
            </b>
          </div>
          <div className="buttons">
            <div className="btn-1">
              <button onClick={() => setModalIsOpen(true)}>WIN</button>

              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Video Popup"
              >
                <video autoPlay controls>
                  <source src="./win.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Modal>
            </div>
            <div className="btn-2">
              <button onClick={() => setModalIsOpen(true)}>LOSS</button>

              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Video Popup"
              >
                <video autoPlay controls>
                  <source src="./win.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

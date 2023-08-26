import React from "react";
import "./Algorithm.scss";
import "./Video.scss";
import { useState } from "react";
import Modal from "react-modal";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoSlider from "./SlideShow/Slideshow";

export default function Algorithm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  AOS.init();

  return (
    <>
      <section className="main__container">
        <div className="overlay"></div>
        <div className="container">
          <div
            className="title"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-easing="ease-in"
          >
            <h2>Winning Multiplier Algorithm</h2>
          </div>
          <div
            className="content"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-easing="ease-in"
            data-aos-duration="800"
          >
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
          {/* <div className="buttons">
            <div
              className="btn-1"
              data-aos="flip-left"
              data-aos-once="false"
              data-aos-easing="ease-in"
            >
              <button onClick={() => setModalIsOpen(true)}>WIN</button>

              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Video Popup"
              >
                <video autoPlay controls>
                  <source
                    src="https://crimson-salty-eagle-867.mypinata.cloud/ipfs/QmWg5wfz5GcT8togYffjpNQ5BNurnVDsSfGAtrJTsTdyDn"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </Modal>
            </div>
            <div
              className="btn-2"
              data-aos="flip-right"
              data-aos-once="false"
              data-aos-easing="ease-in"
            >
              <button onClick={() => setModalIsOpen(true)}>LOSS</button>

              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Video Popup"
              >
                <video autoPlay controls>
                  <source
                    src="https://crimson-salty-eagle-867.mypinata.cloud/ipfs/QmVD73XRajPP3wpZKmjCpdzGWzKo3vc8G8w9T5zQKsxZ66"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </Modal>
            </div>
          </div> */}
          <div className="video_container">
            <video autoPlay="true" controls>
              <source
                src="https://crimson-salty-eagle-867.mypinata.cloud/ipfs/QmWg5wfz5GcT8togYffjpNQ5BNurnVDsSfGAtrJTsTdyDn"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video autoPlay controls>
              <source
                src="https://crimson-salty-eagle-867.mypinata.cloud/ipfs/QmWg5wfz5GcT8togYffjpNQ5BNurnVDsSfGAtrJTsTdyDn"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}

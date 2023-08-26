import React from "react";
import Slider from "react-slick";
import "./Slideshow.scss";

import Win from "./win.mp4";
import Loss from "./Loss.mp4";

export default function Slideshow() {
  const VideoSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <div className="video-slider">
          <Slider {...settings}>
            <div className="video-slide">
              <video controls>
                <source src={Win} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-slide">
              <video controls>
                <source
                  src="https://crimson-salty-eagle-867.mypinata.cloud/ipfs/QmWg5wfz5GcT8togYffjpNQ5BNurnVDsSfGAtrJTsTdyDn"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Slider>
        </div>
      </>
    );
  };
}

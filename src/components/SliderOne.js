import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const SliderOne = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <section className="slider-area">
      <div className="homepage-slide1">
        <Swiper getSwiper={setSwiper}>
          <div className="single-slide-item slide-bg1">
            <div className="slide-item-table">
              <div className="slide-item-tablecell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="slider-heading">
                        <p className="slider__meta">welcome to ESFORZ</p>
                        <h2 className="slider__title">
                          Lend the helping hand get involved
                        </h2>
                        <a href="/about" className="theme-btn">
                          discover more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slide-item slide-bg2">
            <div className="slide-item-table">
              <div className="slide-item-tablecell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="slider-heading">
                        <p className="slider__meta">welcome to ESFORZ</p>
                        <h2 className="slider__title">
                          Lend the helping hand get involved
                        </h2>
                        <a href="/about" className="theme-btn">
                          discover more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slide-item slide-bg3">
            <div className="slide-item-table">
              <div className="slide-item-tablecell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="slider-heading">
                        <p className="slider__meta">welcome to ESFORZ</p>
                        <h2 className="slider__title">
                          Lend the helping hand get involved
                        </h2>
                        <a href="/about" className="theme-btn">
                          discover more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Swiper>
        <div className="owl-dots">
          <div
            role="button"
            onClick={goPrev}
            onKeyDown={goPrev}
            tabIndex="0"
            className="owl-dot"
          >
            <span></span>
          </div>
          <div
            role="button"
            onClick={goNext}
            className="owl-dot"
            onKeyUp={goNext}
            tabIndex="0"
          >
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderOne;

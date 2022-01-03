import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import clientLogo from "../images/client-logo.png";

const ClientsLogoTwo = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 5,
      },
    },
  };

  return (
    <section className="clientlogo-area clientlogo-area2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="client-logo">
              <Swiper {...params}>
                <div className="client-logo-item">
                  <img src={clientLogo} alt="brand post" />
                </div>
                <div className="client-logo-item">
                  <img src={clientLogo} alt="brand post" />
                </div>
                <div className="client-logo-item">
                  <img src={clientLogo} alt="brand post" />
                </div>
                <div className="client-logo-item">
                  <img src={clientLogo} alt="brand post" />
                </div>
                <div className="client-logo-item">
                  <img src={clientLogo} alt="brand post" />
                </div>
                <div className="client-logo-item">
                  <img src={clientLogo} alt="brand post" />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsLogoTwo;

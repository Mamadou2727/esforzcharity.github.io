import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import sectionIcon from "../images/section-icon.png";
import galleryImage1 from "../images/gallery-img.jpg";
import galleryImage2 from "../images/gallery-img2.jpg";
import galleryImage3 from "../images/gallery-img3.jpg";
import galleryImage4 from "../images/gallery-img.jpg";
import galleryImage5 from "../images/gallery-img2.jpg";
import galleryImage6 from "../images/gallery-img.jpg";
import galleryImage7 from "../images/gallery-img2.jpg";
import galleryImage8 from "../images/gallery-img3.jpg";
const GalleryCarousel = () => {
  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      1499: {
        slidesPerView: 3,
      },

      991: {
        slidesPerView: 2,
      },

      767: {
        slidesPerView: 1,
      },

      575: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <section className="gallery-area text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading">
              <div className="section-icon">
                <img src={sectionIcon} alt="section-icon" />
              </div>
              <h2 className="section__title text__white">Check Our Gallery</h2>
              <p className="section__meta">photography</p>
            </div>
          </div>
        </div>
        <div className="row gallery-wrap">
          <div className="col-lg-12">
            <div className="gallery-carousel">
              <Swiper {...params}>
                <div className="gallery-item">
                  <img src={galleryImage1} alt="" />
                  <a href={galleryImage1} className="glightbox">
                    <span className="gallery-icon"></span>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src={galleryImage2} alt="" />
                  <a href={galleryImage2} className="glightbox">
                    <span className="gallery-icon"></span>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src={galleryImage3} alt="" />
                  <a href={galleryImage3} className="glightbox">
                    {" "}
                    <span className="gallery-icon"></span>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src={galleryImage4} alt="" />
                  <a href={galleryImage4} className="glightbox">
                    <span className="gallery-icon"></span>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src={galleryImage5} alt="" />
                  <a href={galleryImage5} className="glightbox">
                    {" "}
                    <span className="gallery-icon"></span>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src={galleryImage6} alt="" />
                  <a href={galleryImage6} className="glightbox">
                    <span className="gallery-icon"></span>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src={galleryImage7} alt="" />
                  <a href={galleryImage7} className="glightbox">
                    {" "}
                    <span className="gallery-icon"></span>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src={galleryImage8} alt="" />
                  <a href={galleryImage8} className="glightbox">
                    {" "}
                    <span className="gallery-icon"></span>
                  </a>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;

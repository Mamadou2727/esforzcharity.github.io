import React from "react";
import galleryImage1 from "../images/gallery-img4.jpg";
import galleryImage2 from "../images/gallery-img5.jpg";
import galleryImage3 from "../images/gallery-img6.jpg";
import galleryImage4 from "../images/gallery-img7.jpg";
import galleryImage5 from "../images/gallery-img8.jpg";
import galleryImage6 from "../images/gallery-img9.jpg";
import galleryImage7 from "../images/gallery-img10.jpg";
import galleryImage8 from "../images/gallery-img11.jpg";
import galleryImage9 from "../images/gallery-img12.jpg";
const Gallery = () => {
  return (
    <section className="gallery-area2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src={galleryImage1} alt="" />
              <a href={galleryImage1} className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src={galleryImage2} alt="" />
              <a href={galleryImage2} className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src={galleryImage3} alt="" />
              <a href={galleryImage3} className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src={galleryImage4} alt="" />
              <a href={galleryImage4} className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src={galleryImage5} alt="" />
              <a href={galleryImage5} className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src={galleryImage6} alt="" />
              <a href={galleryImage6} className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src={galleryImage7} alt="" />
              <a href={galleryImage7} className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src={galleryImage8} alt="" />
              <a href={galleryImage8} className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="gallery-item">
              <img src={galleryImage9} alt="" />
              <a href={galleryImage9} className="glightbox">
                <span className="gallery-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

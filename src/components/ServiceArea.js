import React from "react";
import heartIcon1 from "../images/heart-icon1.png";
import heartIcon2 from "../images/heart-icon2.png";
import heartIcon3 from "../images/heart-icon3.png";
import heartIcon4 from "../images/heart-icon4.png";
import heartIcon5 from "../images/heart-icon5.png";
import heartIcon6 from "../images/heart-icon6.png";
import heartIcon7 from "../images/heart-icon7.png";
import heartIcon8 from "../images/heart-icon8.png";
import heartIcon9 from "../images/heart-icon9.png";
import heartIcon10 from "../images/heart-icon10.png";
import heartIcon11 from "../images/heart-icon11.png";
import sectionIcon from "../images/section-icon.png";

const ServiceArea = () => {
  return (
    <section className="service-area text-center">
      <img src={heartIcon1} alt="" className="heart-icon heart-icon-1" />
      <img src={heartIcon2} alt="" className="heart-icon heart-icon-2" />
      <img src={heartIcon3} alt="" className="heart-icon heart-icon-3" />
      <img src={heartIcon4} alt="" className="heart-icon heart-icon-4" />
      <img src={heartIcon5} alt="" className="heart-icon heart-icon-5" />
      <img src={heartIcon6} alt="" className="heart-icon heart-icon-6" />
      <img src={heartIcon7} alt="" className="heart-icon heart-icon-7" />
      <img src={heartIcon8} alt="" className="heart-icon heart-icon-8" />
      <img src={heartIcon9} alt="" className="heart-icon heart-icon-9" />
      <img src={heartIcon10} alt="" className="heart-icon heart-icon-10" />
      <img src={heartIcon11} alt="" className="heart-icon heart-icon-11" />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading service-heading">
              <div className="section-icon">
                <img src={sectionIcon} alt="section-icon" />
              </div>
              <h2 className="section__title">
                We Believe that We can Save More Lifes with you
              </h2>
              <p className="section__meta">help us now</p>
            </div>
          </div>
        </div>
        <div className="row service-wrap">
          <div className="col">
            <div className="service-item service-item1">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="icon-peace-1"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">hope</h4>
                  <p className="service__desc">
                    Lorem ipsum is simply free text available in the market
                    wesbites.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item2">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="icon-praying"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">prayers</h4>
                  <p className="service__desc">
                    Lorem ipsum is simply free text available in the market
                    wesbites.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item3">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="icon-peace"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">peace</h4>
                  <p className="service__desc">
                    Lorem ipsum is simply free text available in the market
                    wesbites.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item4">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className="icon-heart"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">donation</h4>
                  <p className="service__desc">
                    Lorem ipsum is simply free text available in the market
                    wesbites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="button-shared">
              <a href="/donate" className="theme-btn">
                donate now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;

import React from "react";
import sectionIcon from "../images/section-icon.png";
import worldImage1 from "../images/makeworld_img1.jpg";
import worldImage2 from "../images/makeworld_img2.jpg";
import worldImage3 from "../images/makeworld_img3.jpg";
const MakeWorldArea = () => {
  return (
    <section className="make-world-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading text-center">
              <div className="section-icon">
                <img src={sectionIcon} alt="section-icon" />
              </div>
              <h2 className="section__title">Make World Happier</h2>
              <p className="section__meta">help us now</p>
            </div>
          </div>
        </div>
        <div className="row world-static-wrap">
          <div className="col-lg-4">
            <div className="world-item">
              <div className="world-img-box">
                <img src={worldImage1} alt="" />
              </div>
              <div className="world-img-bg world-img-bg1"></div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="world-item">
              <div className="world-img-box">
                <img src={worldImage2} alt="" />
              </div>
              <div className="world-img-bg world-img-bg2"></div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="world-item">
              <div className="world-img-box">
                <img src={worldImage3} alt="" />
              </div>
              <div className="world-img-bg world-img-bg3"></div>
            </div>
          </div>
        </div>
        <div className="row world-static-wrap2">
          <div className="col-lg-5">
            <div className="world-content">
              <h3 className="world__title">
                See how you can make a difference in families lives with just{" "}
                <strong>$10 a month</strong>
              </h3>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="world-content">
              <p className="world__desc">
                Tincidunt elit magnis nulla facilisis sagittis is maecenas.
                Sapien nunced amet ultrices, dolores sit ipsum velit purus
                aliquet, massa fringilla leo orci. Lorem ipsum dolor sit amet,
                consectetur adipisi cing elit dolo rem consequ untur natus
                laudantium commodie adipis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeWorldArea;

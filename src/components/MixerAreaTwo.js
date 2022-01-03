import React from "react";
import { Link } from "gatsby";
import sectionIcon from "../images/section-icon.png";
const MixerAreaTwo = () => {
  return (
    <section className="mixer-area mixer-area3 text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading mixer-heading">
              <div className="section-icon">
                <img src={sectionIcon} alt="section-icon" />
              </div>
              <h2 className="section__title text__white">
                Our fingerprints on the lives we touch never fade
              </h2>
              <Link className="theme-btn" to="/donate">
                start donation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MixerAreaTwo;

import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import sectionIcon from "../images/section-icon.png";
import mixVideo from "../images/mixer-img.jpg";
class MixerAreaThree extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <React.Fragment>
        <section className="mixer-area mixer-area3 mixer-area4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-heading">
                  <div className="section-icon">
                    <img src={sectionIcon} alt="section-icon" />
                  </div>
                  <h2 className="section__title text__white">
                    We Make a Difference in their Life
                  </h2>
                  <p className="section__meta">news and updates</p>
                  <p className="section__desc text__white">
                    Tincidunt elit magnis nulla facilisis sagittis is maecenas.
                    Sapien nunced amet ultrices, dolores sit ipsum velit purus
                    aliquet, massa fringilla leo orci.
                  </p>
                  <a href="#none" className="theme-btn">
                    learn more
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mixer-video-content">
                  <img src={mixVideo} alt="" />

                  <div
                    onClick={this.openModal}
                    role="button"
                    onKeyUp={this.openModal}
                    tabIndex="0"
                    className="mfp-iframe video-play-btn"
                    title="Play Video"
                  >
                    <i className="fa fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="RQu7jpcNUWI"
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    );
  }
}

export default MixerAreaThree;

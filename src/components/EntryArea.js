import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import sectionImage from "../images/section-icon.png";
import videoImage from "../images/entry-video-img.jpg";
import "react-modal-video/css/modal-video.min.css";

class EntryArea extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <React.Fragment>
        <section className="entry-area">
          <div className="container">
            <div className="row entry-static-wrap">
              <div className="col-lg-3">
                <div className="entry-static-box entry-static-box1">
                  <div className="section-icon">
                    <img src={sectionImage} alt="section-icon" />
                  </div>
                  <h4 className="entry__title">Lack of education is stalking world</h4>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="entry-static-box entry-static-box2 d-flex align-items-center">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="entry-video-img">
                        <img src={videoImage} alt="entry-video-img" />

                        <div
                          onClick={this.handleModal}
                          onKeyUp={this.handleModal}
                          role="button"
                          tabIndex="0"
                          className="mfp-iframe video-play-btn"
                          title="Play Video"
                        >
                          <i className="fa fa-play"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="entry-video-text">
                        <h4 className="entry__title">
                        We are here to support you in the education and improvement of the living conditions of children.
                        </h4>
                        <p className="entry__text">
                        Watch to see the conditions of the poor children.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="PbUxi2Lx8x8"
          onClose={this.handleModal}
        />
      </React.Fragment>
    );
  }
}

export default EntryArea;

import React from "react";
import { Link } from "gatsby";
import blogImage1 from "../images/img7.jpg";
import blogImage2 from "../images/img8.jpg";
import blogImage3 from "../images/img9.jpg";
import blogImage4 from "../images/img16.jpg";
import blogImage5 from "../images/img17.jpg";
import blogImage6 from "../images/img18.jpg";

const Events = () => {
  return (
    <section className="causes-area upcoming-event-area upcoming-event-area2">
      <div className="container">
        <div className="row blog-content-wrap">
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item1">
                <div className="blog-img">
                  <img src={blogImage1} alt="" />
                  <span className="blog__tag blog__tag1">
                    <span className="date__num-text">6</span>
                    <span className="date__mon-text">may</span>
                  </span>
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link to="/events-detail">Save the planets</Link>
                  </h3>
                  <ul className="blog__list">
                    <li className="blog__dot-active">8:00am to 2:00pm</li>
                    <li>San marcos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item2">
                <div className="blog-img">
                  <img src={blogImage2} alt="" />
                  <span className="blog__tag blog__tag2">
                    <span className="date__num-text">9</span>
                    <span className="date__mon-text">mar</span>
                  </span>
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link to="/events-detail">Play for the world</Link>
                  </h3>
                  <ul className="blog__list">
                    <li className="blog__dot-active">8:00am to 2:00pm</li>
                    <li>San marcos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item3">
                <div className="blog-img">
                  <img src={blogImage3} alt="" />
                  <span className="blog__tag blog__tag3">
                    <span className="date__num-text">4</span>
                    <span className="date__mon-text">mar</span>
                  </span>
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link to="/events-detail">Water for charity</Link>
                  </h3>
                  <ul className="blog__list">
                    <li className="blog__dot-active">8:00am to 2:00pm</li>
                    <li>San marcos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item4">
                <div className="blog-img">
                  <img src={blogImage4} alt="" />
                  <span className="blog__tag blog__tag4">
                    <span className="date__num-text">2</span>
                    <span className="date__mon-text">mar</span>
                  </span>
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link to="/events-detail">Help for education</Link>
                  </h3>
                  <ul className="blog__list">
                    <li className="blog__dot-active">8:00am to 2:00pm</li>
                    <li>San marcos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item1">
                <div className="blog-img">
                  <img src={blogImage5} alt="" />
                  <span className="blog__tag blog__tag1">
                    <span className="date__num-text">22</span>
                    <span className="date__mon-text">mar</span>
                  </span>
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link to="/events-detail">Protect eco system</Link>
                  </h3>
                  <ul className="blog__list">
                    <li className="blog__dot-active">8:00am to 2:00pm</li>
                    <li>San marcos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item2">
                <div className="blog-img">
                  <img src={blogImage6} alt="" />
                  <span className="blog__tag blog__tag2">
                    <span className="date__num-text">11</span>
                    <span className="date__mon-text">fed</span>
                  </span>
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link to="/events-detail">Fight for right cause</Link>
                  </h3>
                  <ul className="blog__list">
                    <li className="blog__dot-active">8:00am to 2:00pm</li>
                    <li>San marcos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

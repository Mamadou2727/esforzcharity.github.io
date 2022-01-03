import React from "react";
import { Link } from "gatsby";
import blogImage1 from "../images/img1.jpg";
import blogImage2 from "../images/img2.jpg";
import blogImage3 from "../images/img3.jpg";
import blogImage4 from "../images/img10.jpg";
import blogImage5 from "../images/img2.jpg";
import blogImage6 from "../images/img11.jpg";

const Causes = () => {
  return (
    <section className="causes-area causes-area2">
      <div className="container">
        <div className="row blog-content-wrap">
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item1">
                <div className="blog-img">
                  <img src={blogImage1} alt="" />
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link to="/causes-detail">Save Poor Childrens</Link>
                  </h3>
                  <p className="blog__desc">
                    Aliq is notm hendr erit a augue insu image pellen tes.
                  </p>
                  <ul className="blog__list">
                    <li>
                      <i className="icon-target"></i> Goal: <span>$30,000</span>
                    </li>
                    <li>
                      <i className="fa fa-line-chart"></i> Raised:{" "}
                      <span>25,270</span>
                    </li>
                  </ul>
                  <Link className="theme-btn" to="/donate">
                    donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item2">
                <div className="blog-img">
                  <img src={blogImage2} alt="" />
                  <span className="blog__tag">
                    <i className="fa fa-flash"></i> trending
                  </span>
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link to="/causes-detail">They Want to Study</Link>
                  </h3>
                  <p className="blog__desc">
                    Aliq is notm hendr erit a augue insu image pellen tes.
                  </p>
                  <ul className="blog__list">
                    <li>
                      <i className="icon-target"></i> Goal: <span>$30,000</span>
                    </li>
                    <li>
                      <i className="fa fa-line-chart"></i> Raised:{" "}
                      <span>25,270</span>
                    </li>
                  </ul>
                  <Link to="/donate" className="theme-btn">
                    donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item3">
                <div className="blog-img">
                  <img src={blogImage3} alt="" />
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link to="/causes-detail">Healthy Food for All</Link>
                  </h3>
                  <p className="blog__desc">
                    Aliq is notm hendr erit a augue insu image pellen tes.
                  </p>
                  <ul className="blog__list">
                    <li>
                      <i className="icon-target"></i> Goal: <span>$30,000</span>
                    </li>
                    <li>
                      <i className="fa fa-line-chart"></i> Raised:{" "}
                      <span>25,270</span>
                    </li>
                  </ul>
                  <Link to="/donate" className="theme-btn">
                    donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item4">
                <div className="blog-img">
                  <img src={blogImage4} alt="" />
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link to="/causes-detail">Need Educations</Link>
                  </h3>
                  <p className="blog__desc">
                    Aliq is notm hendr erit a augue insu image pellen tes.
                  </p>
                  <ul className="blog__list">
                    <li>
                      <i className="icon-target"></i> Goal: <span>$30,000</span>
                    </li>
                    <li>
                      <i className="fa fa-line-chart"></i> Raised:{" "}
                      <span>25,270</span>
                    </li>
                  </ul>
                  <Link to="/donate" className="theme-btn">
                    donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item1">
                <div className="blog-img">
                  <img src={blogImage5} alt="" />
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link to="/causes-detail">Clean Water Issues</Link>
                  </h3>
                  <p className="blog__desc">
                    Aliq is notm hendr erit a augue insu image pellen tes.
                  </p>
                  <ul className="blog__list">
                    <li>
                      <i className="icon-target"></i> Goal: <span>$30,000</span>
                    </li>
                    <li>
                      <i className="fa fa-line-chart"></i> Raised:{" "}
                      <span>25,270</span>
                    </li>
                  </ul>
                  <Link to="/donate" className="theme-btn">
                    donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item2">
                <div className="blog-img">
                  <img src={blogImage6} alt="" />
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link to="/causes-detail">Help the Eco System</Link>
                  </h3>
                  <p className="blog__desc">
                    Aliq is notm hendr erit a augue insu image pellen tes.
                  </p>
                  <ul className="blog__list">
                    <li>
                      <i className="icon-target"></i> Goal: <span>$30,000</span>
                    </li>
                    <li>
                      <i className="fa fa-line-chart"></i> Raised:{" "}
                      <span>25,270</span>
                    </li>
                  </ul>
                  <Link to="/donate" className="theme-btn">
                    donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Causes;

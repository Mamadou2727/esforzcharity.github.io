import React from "react";
import { Link } from "gatsby";
import blogImage1 from "../images/blog-img.jpg";
import blogImage2 from "../images/blog-img5.jpg";
import blogImage3 from "../images/blog-img6.jpg";
import blogImage4 from "../images/blog-img7.jpg";
import blogImage5 from "../images/blog-img8.jpg";
import blogImage6 from "../images/blog-img9.jpg";

const News = () => {
  return (
    <section className="blog-area blog-area2">
      <div className="container">
        <div className="row recent-post-wrap">
          <div className="col-lg-6 col-sm-6">
            <div className="recent-item">
              <div className="recent__img">
                <span className="meta__date-date">09 mar, 2019</span>
                <img src={blogImage1} alt="service-post" />
              </div>
              <div className="news__content">
                <h3 className="news__content-title">
                  <Link to="/single-news">
                    A place where start new life with peace
                  </Link>
                </h3>
                <ul className="news__content-list">
                  <li className="news__content-active__dot">
                    <a href="#none">mike hardson</a>
                  </li>
                  <li>
                    <a href="#none">3 comments</a>
                  </li>
                </ul>
                <p className="news__content-text">
                  Aliq is notm hendr erit a augue insu image pellen tes que id
                  erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur
                  adipiscing ullam blandit hendrerit faucibus suspendisse.
                </p>
                <Link to="/single-news" className="theme-btn">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="recent-item">
              <div className="recent__img">
                <span className="meta__date-date meta__date-date2">
                  07 mar, 2019
                </span>
                <img src={blogImage2} alt="service-post" />
              </div>
              <div className="news__content">
                <h3 className="news__content-title">
                  <Link to="/single-news">
                    We can make a difference in families lives
                  </Link>
                </h3>
                <ul className="news__content-list">
                  <li className="news__content-active__dot">
                    <a href="#none">jessica brown</a>
                  </li>
                  <li>
                    <a href="#none">2 comments</a>
                  </li>
                </ul>
                <p className="news__content-text">
                  Aliq is notm hendr erit a augue insu image pellen tes que id
                  erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur
                  adipiscing ullam blandit hendrerit faucibus suspendisse.
                </p>
                <Link to="/single-news" className="theme-btn">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="recent-item">
              <div className="recent__img">
                <span className="meta__date-date meta__date-date3">
                  04 mar, 2019
                </span>
                <img src={blogImage3} alt="service-post" />
              </div>
              <div className="news__content">
                <h3 className="news__content-title">
                  <Link to="/single-news">Build school for poor childrens</Link>
                </h3>
                <ul className="news__content-list">
                  <li className="news__content-active__dot">
                    <a href="#none">john smith</a>
                  </li>
                  <li>
                    <a href="#none">0 comments</a>
                  </li>
                </ul>
                <p className="news__content-text">
                  Aliq is notm hendr erit a augue insu image pellen tes que id
                  erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur
                  adipiscing ullam blandit hendrerit faucibus suspendisse.
                </p>
                <Link to="/single-news" className="theme-btn">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="recent-item">
              <div className="recent__img">
                <span className="meta__date-date meta__date-date4">
                  30 feb, 2019
                </span>
                <img src={blogImage4} alt="service-post" />
              </div>
              <div className="news__content">
                <h3 className="news__content-title">
                  <Link to="/single-news">Learn how access to clean water</Link>
                </h3>
                <ul className="news__content-list">
                  <li className="news__content-active__dot">
                    <a href="#none">kevin hart</a>
                  </li>
                  <li>
                    <a href="#none">4 comments</a>
                  </li>
                </ul>
                <p className="news__content-text">
                  Aliq is notm hendr erit a augue insu image pellen tes que id
                  erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur
                  adipiscing ullam blandit hendrerit faucibus suspendisse.
                </p>
                <Link to="/single-news" className="theme-btn">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="recent-item">
              <div className="recent__img">
                <span className="meta__date-date">26 feb, 2019</span>
                <img src={blogImage5} alt="service-post" />
              </div>
              <div className="news__content">
                <h3 className="news__content-title">
                  <Link to="/single-news">
                    Do something crazy to raise money
                  </Link>
                </h3>
                <ul className="news__content-list">
                  <li className="news__content-active__dot">
                    <a href="#none">christine eve</a>
                  </li>
                  <li>
                    <a href="#none">2 comments</a>
                  </li>
                </ul>
                <p className="news__content-text">
                  Aliq is notm hendr erit a augue insu image pellen tes que id
                  erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur
                  adipiscing ullam blandit hendrerit faucibus suspendisse.
                </p>
                <Link to="/single-news" className="theme-btn">
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="recent-item">
              <div className="recent__img">
                <span className="meta__date-date meta__date-date2">
                  20 feb, 2019
                </span>
                <img src={blogImage6} alt="service-post" />
              </div>
              <div className="news__content">
                <h3 className="news__content-title">
                  <Link to="/single-news">
                    Together to help the world better
                  </Link>
                </h3>
                <ul className="news__content-list">
                  <li className="news__content-active__dot">
                    <a href="#none">mike hardson</a>
                  </li>
                  <li>
                    <a href="#none">0 comments</a>
                  </li>
                </ul>
                <p className="news__content-text">
                  Aliq is notm hendr erit a augue insu image pellen tes que id
                  erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur
                  adipiscing ullam blandit hendrerit faucibus suspendisse.
                </p>
                <Link to="/single-news" className="theme-btn">
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

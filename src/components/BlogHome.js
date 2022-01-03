import React from "react";
import sectionIcon from "../images/section-icon.png";
import blogImage1 from "../images/blog-img.jpg";
import blogImage2 from "../images/blog-img2.jpg";
import blogImage3 from "../images/blog-img3.jpg";
import blogImage4 from "../images/blog-img4.jpg";

const BlogHome = () => {
  return (
    <section className="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="section-heading blog-heading">
              <div className="section-icon">
                <img src={sectionIcon} alt="section-icon" />
              </div>
              <h2 className="section__title">Recent Blog Posts</h2>
              <p className="section__meta">news and updates</p>
            </div>
          </div>
        </div>
        <div className="row recent-post-wrap">
          <div className="col-lg-6">
            <div className="recent-item">
              <div className="recent__img">
                <span className="meta__date-date">09 mar, 2019</span>
                <img src={blogImage1} alt="service-post" />
              </div>
              <div className="news__content">
                <h3 className="news__content-title">
                  <a href="/single-news">
                    A place where start new life with peace
                  </a>
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
                <a href="single-news" className="theme-btn">
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="third-recent-box">
              <ul className="third-recent-item">
                <li>
                  <div className="recent__img">
                    <a href="/single-news">
                      <img src={blogImage2} alt="" />
                    </a>
                  </div>
                  <div className="recent__content">
                    <span>07 mar, 2019</span>
                    <h4>
                      <a href="single-news.html">
                        Let’s together provide them a healthy food
                      </a>
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="recent__img">
                    <a href="/single-news">
                      <img src={blogImage3} alt="" />
                    </a>
                  </div>
                  <div className="recent__content">
                    <span>04 mar, 2019</span>
                    <h4>
                      <a href="/single-news">
                        Building clean water system for poor
                      </a>
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="recent__img">
                    <a href="/single-news">
                      <img src={blogImage4} alt="" />
                    </a>
                  </div>
                  <div className="recent__content">
                    <span>30 feb, 2019</span>
                    <h4>
                      <a href="single-news.html">
                        Become a volunteer you will feel the benefits{" "}
                      </a>
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHome;

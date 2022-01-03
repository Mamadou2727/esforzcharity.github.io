import React, { Component } from "react";
import { Link } from "gatsby";
import logoImage from "../images/logo2.png";
class NavTwo extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 100) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".mobile-menu-toggle");
    let mainNav = document.querySelector(".side-nav-container");

    mainNavToggler.addEventListener("click", function () {
      mainNav.classList.add("active");
    });

    //Close Mobile Menu
    let closeMenu = document.querySelector(".side-menu-close");
    closeMenu.addEventListener("click", function () {
      mainNav.classList.remove("active");
    });
  };

  render() {
    return (
      <header className="header-area header-area2">
        <div className="header-top-action">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="top-action-content">
                  <div className="info-box info-box-1 d-flex align-items-center">
                    <ul className="d-flex align-items-center">
                      <li>
                        <a href="#none">
                          <i className="fa fa-envelope"></i>needhelp@oxpitan.com
                        </a>
                      </li>
                      <li>
                        <a href="#none">
                          <i className="fa fa-phone-square"></i>666 888 0000
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="top-action-content info-action-content">
                  <div className="info-box info-box-2 d-flex align-items-center justify-content-end">
                    <ul className="top-action-list d-flex align-items-center">
                      <li className="action__text">
                        <a href="#none">login</a>
                      </li>
                      <li className="action__text">
                        <a href="#none">register</a>
                      </li>
                      <li>
                        <a href="#none">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#none">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#none">
                          <i className="fa fa-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#none">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`header-top header-menu-action ${
            this.state.sticky ? "header-fixed" : ""
          }`}
        >
          <div className="container">
            <div className="row ostion-top-wrap">
              <div className="col-lg-5 col-sm-5 site-branding">
                <div className="logo-action d-flex align-items-center">
                  <div className="ostion-logo">
                    <Link to="/">
                      <img src={logoImage} alt="Oxpitan" title="Oxpitan" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-sm-7 ostion-menu">
                <div className="ostion-menu-innner">
                  <div className="ostion-menu-content">
                    <div className="navigation-top">
                      <nav className="main-navigation">
                        <ul>
                          <li className="active">
                            <Link to="/">Home</Link>
                            <ul className="dropdown-menu-item">
                              <li>
                                <Link to="/">Home 1</Link>
                              </li>
                              <li>
                                <Link to="/index2">Home 2</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#none">causes</a>
                            <ul className="dropdown-menu-item">
                              <li>
                                <Link to="/causes">causes</Link>
                              </li>
                              <li>
                                <Link to="/causes-detail">causes detail</Link>
                              </li>
                              <li>
                                <Link to="/donate">donate now</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#none">events</a>
                            <ul className="dropdown-menu-item">
                              <li>
                                <Link to="/events">events</Link>
                              </li>
                              <li>
                                <Link to="/events-detail">events detail</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#none">news</a>
                            <ul className="dropdown-menu-item">
                              <li>
                                <Link to="/news">news</Link>
                              </li>
                              <li>
                                <Link to="/single-news">news detail</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#none">pages</a>
                            <ul className="dropdown-menu-item">
                              <li>
                                <Link to="/about">about</Link>
                              </li>
                              <li>
                                <Link to="/gallery">gallery</Link>
                              </li>
                              <li>
                                <Link to="/volunteer">become a volunteer</Link>
                              </li>
                              <li>
                                <Link to="/team">our team</Link>
                              </li>
                              <li>
                                <Link to="/sponsor">sponsors</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/contact">contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="mobile-menu-toggle">
                    <i className="fa fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-nav-container">
          <div className="humburger-menu">
            <div className="humburger-menu-lines side-menu-close"></div>
          </div>
          <div className="side-menu-wrap">
            <ul className="side-menu-ul">
              <li className="sidenav__item">
                <a href="/">home</a>
                <span className="menu-plus-icon"></span>
                <ul className="side-sub-menu">
                  <li>
                    <Link to="/">Home 1</Link>
                  </li>
                  <li>
                    <Link to="/index2">Home 2</Link>
                  </li>
                </ul>
              </li>
              <li className="sidenav__item">
                <a href="#none">causes</a>
                <span className="menu-plus-icon"></span>
                <ul className="side-sub-menu">
                  <li>
                    <Link to="/causes">causes</Link>
                  </li>
                  <li>
                    <Link to="/causes-detail">causes detail</Link>
                  </li>
                  <li>
                    <Link to="/donate">donate now</Link>
                  </li>
                </ul>
              </li>
              <li className="sidenav__item">
                <a href="#none">event</a>
                <span className="menu-plus-icon"></span>
                <ul className="side-sub-menu">
                  <li>
                    <Link to="/events">events</Link>
                  </li>
                  <li>
                    <Link to="/events-detail">events detail</Link>
                  </li>
                </ul>
              </li>
              <li className="sidenav__item">
                <a href="#none">news</a>
                <span className="menu-plus-icon"></span>
                <ul className="side-sub-menu">
                  <li>
                    <Link to="/news">news</Link>
                  </li>
                  <li>
                    <Link to="/single-news">news detail</Link>
                  </li>
                </ul>
              </li>
              <li className="sidenav__item">
                <a href="#none">pages</a>
                <span className="menu-plus-icon"></span>
                <ul className="side-sub-menu">
                  <li>
                    <Link to="/about">about</Link>
                  </li>
                  <li>
                    <Link to="/gallery">gallery</Link>
                  </li>
                  <li>
                    <Link to="/volunteer">become a volunteer</Link>
                  </li>
                  <li>
                    <Link to="/team">our team</Link>
                  </li>
                  <li>
                    <Link to="/sponsor">sponsors</Link>
                  </li>
                </ul>
              </li>
              <li className="sidenav__item">
                <Link to="/contact">contact</Link>
              </li>
            </ul>
            <ul className="side-social">
              <li>
                <a href="#none">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#none">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#none">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </li>
              <li>
                <a href="#none">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
            </ul>
            <div className="side-btn">
              <Link className="theme-btn" to="/donate">
                donate now
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavTwo;

import React from "react";
import AccordionBox from "../components/AccordionBox";
import sectionIcon from "../images/section-icon.png";
import faqImage from "../images/faq-img.jpg";

const accordionData = [
  {
    title: "Make a difference in the life of a child",
    text:
      "Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper  vulputate vitae sodales commodo nisl. Nulla facilisi.  Pellentesque est metus. There are many variations of eration in some form.",
    status: true,
  },
  {
    title: "Let’s do the right thing now",
    text:
      "Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper  vulputate vitae sodales commodo nisl. Nulla facilisi.  Pellentesque est metus. There are many variations of eration in some form.",
    status: false,
  },
  {
    title: "Join your hand with us for a better life",
    text:
      "Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper  vulputate vitae sodales commodo nisl. Nulla facilisi.  Pellentesque est metus. There are many variations of eration in some form.",
    status: false,
  },
];

const FaqArea = () => {
  return (
    <section className="faq-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <div className="section-icon">
                <img src={sectionIcon} alt="section-icon" />
              </div>
              <h2 className="section__title">Have any Question?</h2>
              <p className="section__meta">frequently asked questions</p>
            </div>
            <div className="faq-img-box">
              <img src={faqImage} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion-container">
              {accordionData.map(({ title, text, status }, index) => (
                <AccordionBox
                  title={title}
                  text={text}
                  status={status}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqArea;

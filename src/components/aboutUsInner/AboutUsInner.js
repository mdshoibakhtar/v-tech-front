import CommonBanner from "../common/comonBanner/ComonBanner";
import imgAbout from "../../assets/img/aboutUs/about-img.jpg";
import mission from "../../assets/img/aboutUs/mission.png";

import "./AboutUsInner.css";
function AboutUsInner() {
  const commonName = { title: "About Us" };
  return (
    <>
      <CommonBanner commonName={commonName.title} />
      <section
        className="about-area pt-100 grey-bg tp-box-space pb-20 pb-85-P"
        style={{ background: "#fff" }}
      >
        <div className="about-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-content  mb-60 wow fadeInRight"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="tp-section">
                    <span className="tp-section__sub-title left-line mb-15">
                      About Us
                    </span>
                    <h3 className="tp-section__title mb-30">
                      Welcome To V Tech Solutions
                    </h3>
                    <p className="mr-20 mb-20">
                      V Tech Solutions is a leading provider of rental and
                      trading services for branded computer desktops, laptops,
                      mobile workstations, servers, etc. We are highly preferred
                      by our customers for being a one stop center for all the
                      office IT equipment. We have been promptly and adequately
                      delivering computer hardware solutions since 2013.
                    </p>
                    <p className="mr-20 mb-30">
                      With a strong focus on customer satisfaction and
                      cutting-edge technology we specialize in offering flexible
                      and cost-effective solutions to meet the diverse
                      technology needs of your businesses. With a commitment to
                      quality and reliability, we offer a wide range of
                      high-performance computing solutions to your businesses.
                      Our extensive inventory, exceptional customer service, and
                      flexible rental and trading options make us the preferred
                      choice in the industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-12 about-img">
                <img
                  src={imgAbout}
                  style={{ width: "100%" }}
                  alt="about-thumb"
                />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-content  mb-60 wow fadeInRight"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="tp-section">
                    <span className="tp-section__sub-title left-line mb-15">
                      Mission
                    </span>

                    <p className="mr-20 mb-30">
                      With a strong focus on customer satisfaction and
                      cutting-edge technology we specialize in offering flexible
                      and cost-effective solutions to meet the diverse
                      technology needs of your businesses. With a commitment to
                      quality and reliability, we offer a wide range of
                      high-performance computing solutions to your businesses.
                      Our extensive inventory, exceptional customer service, and
                      flexible rental and trading options make us the preferred
                      choice in the industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-12 about-img">
                <img
                  src={mission}
                  style={{ width: "100%" }}
                  className="aboutus-fram"
                  alt="about-thumb"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutUsInner;

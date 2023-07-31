import imgAbout from "../../../assets/img/aboutUs/about-img.jpg";

import "./AboutUs.css";
function AboutUs() {
  return (
    <>
      <section
        className="about-area pt-30 grey-bg tp-box-space pb-20"
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
                      Welcome To V Tech Solutions{" "}
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
                  <div className="about-content__btn">
                    <a href="about-us" id="headbtn" className="tp-btn">
                      More About Us &nbsp;
                      <i
                        className="fas fa-angle-double-right"
                        style={{
                          fontSize: "15px! important",
                          position: "relative",
                          top: 1,
                        }}
                      />{" "}
                    </a>
                    {/* &nbsp; <img src="assets/img/homeison-logo.png" style={{ position: 'relative', top: '-15px' }} /> */}
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
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutUs;

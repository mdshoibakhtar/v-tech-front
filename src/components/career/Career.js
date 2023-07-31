import grop from "../../assets/img/career/group-discus.jpg";
import "./Career.css";
function Career() {
  return (
    <>
      <section className=" elementor-top-sec">
        <div className="elementor-sec">
          <h1 className="career-heading">Careers</h1>
        </div>
        <div className="back-link">
          <ul className="d-flex">
            <li className="me-2">
              <a href="">Home</a>
            </li>

            <li>
              <a href="">Career</a>
            </li>
          </ul>
        </div>
      </section>
      <div className="about-wrapper mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12 col-12">
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
                    A Place to Grow
                  </span>
                  {/* <h3 className="tp-section__title mb-30">
                      Welcome To V Tech Solutions {" "}
                    </h3> */}
                  <p className="mr-20 mb-20">
                    We are constantly working to build solutions that are
                    meaningful and lasting for our clients to realize their
                    business goals. At CJPL, We measure success by the value we
                    create for them. Through the past 25+ years of working with
                    the best minds in the industry, we have been successful in
                    identifying and nurturing a highly-skilled, agile,
                    collaborative, and motivated talent pool. Working alongside
                    them can be a fantastic opportunity for you to build your
                    career and constantly progress.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-12 about-img">
              <div className="img-sec">
                <img
                  src={grop}
                  style={{ width: "100%", height: "450px" }}
                  alt="about-thumb"
                  className="group-disc"
                />
                <div className="overlay"></div>
              </div>

              {/* <div className="img-slider career-slider"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Career;

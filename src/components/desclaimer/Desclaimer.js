import CommonBanner from "../common/comonBanner/ComonBanner";
import imgAbout from "../../assets/img/aboutUs/about-img.jpg";
import "./Desclaimer.css";
function Desclaimer() {
  const commonName = { title: "Desclaimer" };
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
                      Desclaimer
                    </span>
                    {/* <h3 className="tp-section__title mb-30">
                      Welcome To V Tech Solutions {" "}
                    </h3> */}
                    <p className="mr-20 mb-20">
                      Information provided on this website is genral in nature
                      and is Informationaln in nature.Nothing on this website is
                      intended to constitude technical advoice.
                    </p>
                    <p>
                      A disclaimer is generally any statement intended to
                      specify or restrict the scope of rights and obligations
                      that may be exercised and enforced by parties in a
                      legally-recognized relationship. By posting your
                      disclaimer prominently and by having the specific legal
                      language you need for your website, the viewer agrees to
                      the terms of the disclaimer. This agreement should include
                      that the visitor assumes any and all risks associated with
                      viewing and/or using any of the information contained on
                      your website.
                    </p>
                    <p>
                      V Tech Solutions is a leading provider of desclaimer and
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
                      flexible desclaimer and trading options make us the
                      preferred choice in the industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-12 about-img">
                {/* <img
                  src={imgAbout}
                  style={{ width: "100%", height: "560px" }}
                  alt="about-thumb"
                /> */}
                <div className="img-slider"></div>
              </div>
            </div>
          </div>
          <div className="container mt-5 mb-5">
            <div className="row des-row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12 desclaimer-card-left">
                <h3>
                  <small style={{ fontSize: "20px", fontWeight: "600" }}>
                    GENERAL INFORMATION
                  </small>
                </h3>
                <p>
                  This Website may contain typographical errors or mistakes, and
                  we entirely disclaim any responsibility for such errors and
                  you agree to hold us harmless from any legal responsibility
                  for such errors.
                </p>
                <h3>
                  <small style={{ fontSize: "20px", fontWeight: "600" }}>
                    UPDATES TO THIS DISCLAIMER
                  </small>
                </h3>
                <p>
                  We may update this Disclaimer from time to time for legal or
                  regulatory reasons or to allow the proper operation of the
                  Website. Any changes will be notified to you via a suitable
                  announcement on the Website. The changes will apply to the use
                  of the Website after we have given you notice. If you do not
                  wish to accept the new Disclaimer you should not continue to
                  use the Website. If you continue to use the Website after the
                  date on which the change comes into effect, your use of the
                  Website indicates your agreement to be bound by the new
                  Disclaimer.
                </p>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-12 desclaimer-card-right"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Desclaimer;

import CommonBanner from "../common/comonBanner/ComonBanner";
import "../contactUs/contactUs.css";
import c1 from "../../assets/img/contactUs/map.png";
import c2 from "../../assets/img/contactUs/email.png";
import c3 from "../../assets/img/contactUs/24-hours.png";
import c4 from "../../assets/img/contactUs/help-desk.png";
import { Link } from "react-router-dom";
function ContactUs() {
  const commonName = { title: "Contact us" };
  return (
    <>
      <CommonBanner commonName={commonName.title} />
      <section className="contact-area grey-bg pt-130 pb-85 pb-85-P">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-5 col-12 wow fadeInLeft"
              data-wow-delay=".4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInLeft",
              }}
            >
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src={c1} alt />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Office Address</h4>
                    <span>
                      <a href="contact-us">
                        Raviraj CRU Mall,Office No-210,2nd Floor,Above Fedral
                        Bank Gangadham Chowk,Marketyard,Pune-411037.
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src={c2} alt />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Phone / Email</h4>
                    <span>
                      <Link to="tel:+91-98909 38555">
                        <li>Phone Email No:- 9890938555</li>
                        {/* <strong>Support No:-</strong>+91-85309 80555{" "} */}
                      </Link>
                    </span>

                    <span style={{ marginTop: 8 }}>
                      <a href="mailto:v.laddha@vtechsolutions.co.in">
                        v.laddha@vtechsolutions.co.in
                      </a>
                    </span>
                    <span>
                      <a href="">www.vtechsolution.co.in</a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src={c3} alt />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Operating Hours</h4>
                    <span>
                      Moday - Friday <br />
                      09:00 AM - 06:00 PM
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="tpcontact__item ">
                  <div className="tpcontact__icon mb-20">
                    <img src={c4} alt />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15 text-center">
                      Support Us
                    </h4>
                    <ul className="text-left supportus">
                      <li></li>
                      <li>Support No:- 8530297555</li>
                      <li>
                        Support Email ID:-
                        <a href="">support@vtechsolutions.co.in</a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div
                className="contactform wow fadeInRight"
                data-wow-delay=".4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInRight",
                }}
              >
                <h4 className="contactform__title mb-35">
                  Send us a Massage :
                </h4>
                <div className="contactform__list mb-60">
                  <form action="mail1.php" method="post">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="contactform__input mb-30">
                          <input
                            name="name"
                            required
                            type="text"
                            placeholder="Your Name"
                            fdprocessedid="r6bb2"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contactform__input mb-30">
                          <input
                            name="telphon"
                            required
                            type="text"
                            placeholder="Your number"
                            fdprocessedid="hdtqc"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contactform__input mb-30">
                          <input
                            name="email"
                            type="email"
                            placeholder="Your mail"
                            fdprocessedid="6wzreb"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contactform__input mb-30">
                          <input
                            name="sub"
                            required
                            type="text"
                            placeholder="Your Subject"
                            fdprocessedid="htrkdq"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contactform__input mb-30">
                          <textarea
                            name="msg"
                            required
                            style={{ background: "#fff" }}
                            placeholder="Your Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contactform__input mb-30-btn">
                          <button
                            type="submit"
                            name="submaildata"
                            className="tp-btn"
                            fdprocessedid="hotac"
                          >
                            Send Massage
                          </button>
                        </div>
                        <p className="ajax-response" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tpcontactmap">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.0381561317577!2d73.87406831489218!3d18.48193078743148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea9cd061f61f%3A0x319bc6af4cc90317!2sRaviraj%20Cru!5e0!3m2!1sen!2sin!4v1687609244398!5m2!1sen!2sin"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ContactUs;

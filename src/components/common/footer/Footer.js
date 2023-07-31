import { Link } from "react-router-dom";

import { LuPhoneCall } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import "./Footer.css";
function Footer() {
  return (
    <>
      <section className="footer-sec">
        <footer className="footer-container">
          <div className="footer-area pt-80">
            <div className="tp-footer-top py-10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-3 col-md-6">
                    <div
                      className="tp-footer-widget footer-2-col-1 mb-40 wow fadeInUp"
                      data-wow-delay=".2s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.2s",
                        animationName: "fadeInUp",
                      }}
                    >
                      {/* <div className="tp-footer-widget__content mb-95 mb-2">
                      <i style={{ color: "#fff" }}>FEEL FREE TO CONTACT US</i>
                    </div> */}
                      <div className="tp-footer-widget__sub-sec">
                        <span
                          className="tp-footer-widget__sub-title mb-2"
                          style={{ fontSize: "19px! important" }}
                        >
                          About Us
                        </span>
                        <p style={{ color: "#fff" }}>
                          V Tech Solutions is a leading provider of rental and
                          trading services for branded computer desktops,
                          laptops, mobile workstations, servers, etc. We are
                          highly preferred by our customers for being a one stop
                          center for all the office IT equipment.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6">
                    <div
                      className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                      data-wow-delay=".4s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.4s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <span
                        className="tp-footer-widget__title mb-15"
                        style={{ color: "#fff", fontSize: "19px! important" }}
                      >
                        Useful links
                      </span>
                      <div className="tp-footer-widget__links mb-35">
                        <ul className="fottrlinks">
                          <li>
                            <Link to="home" style={{ color: "#fff" }}>
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link to="about-us" style={{ color: "#fff" }}>
                              About Us
                            </Link>
                          </li>

                          <li>
                            <a href="#" style={{ color: "#fff" }}>
                              Product
                            </a>
                          </li>

                          <li>
                            <Link to="blog-list" style={{ color: "#fff" }}>
                              Blogs
                            </Link>
                          </li>
                          {/* <li>
                            <Link to="faq" style={{ color: "#fff" }}>
                              FAQ
                            </Link>
                          </li>
                          <li>
                            <Link to="gallery" style={{ color: "#fff" }}>
                              Photos
                            </Link>
                          </li>
                          <li>
                            <Link to="video" style={{ color: "#fff" }}>
                              Videos
                            </Link>
                          </li> */}
                          <li>
                            <Link to="career" style={{ color: "#fff" }}>
                              Career
                            </Link>
                          </li>

                          <li>
                            <Link href="contact-us" style={{ color: "#fff" }}>
                              Contact Us
                            </Link>
                          </li>

                          {/* <li>
                          <Link
                            to="blog-list-nosidebar"
                            style={{ color: "#fff" }}
                          >
                            Blog List No Sidebar
                          </Link>
                        </li> */}

                          {/* <li>
                          <Link to="blog-details" style={{ color: "#fff" }}>
                            Blog Details
                          </Link>
                        </li> */}

                          {/* <li> <a href="contact-us" style={{ color: '#fff' }}>Get a quote</a></li> */}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div
                      className="tp-footer-widget footer-2-col-3 mb-20  wow fadeInUp"
                      data-wow-delay=".6s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.6s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <span
                        className="tp-footer-widget__title mb-7"
                        style={{ color: "#fff", fontSize: "19px! important" }}
                      >
                        Our Service
                      </span>
                      <div className="tp-footer-widget__links">
                        <ul className="fottrlinks">
                          <li>
                            <Link
                              to="hardware-services"
                              style={{ color: "#fff" }}
                            >
                              Hardware Services{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to=""
                              style={{ color: "#fff" }}
                            >
                              Trading Services{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="networking-services"
                              style={{ color: "#fff" }}
                            >
                              Networking Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="rental-services"
                              style={{ color: "#fff" }}
                            >
                              Rental Services
                            </Link>
                          </li>
                          <li>
                            <a href="contact-us" style={{ color: "#fff" }}>
                              Get A Quote
                            </a>
                          </li>

                          {/* <li><a href="network-security" style={{ color: '#fff' }}>Network Security</a></li>
                                                <li><a href="data-backup-recovery" style={{ color: '#fff' }}>Data Backup Recovery</a></li> */}
                          {/* <li><a href="server-desktop-virtualization" style={{ color: '#fff' }}>Server  Virtualization</a></li> */}
                        </ul>
                      </div>
                    </div>
                    <div
                      className="tp-footer-widget footer-2-col-3 mb-30  wow fadeInUp"
                      data-wow-delay=".6s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.6s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <span
                        className="tp-footer-widget__title mb-8"
                        style={{ color: "#fff", fontSize: "19px! important" }}
                      >
                        Other Services
                      </span>
                      <div className="tp-footer-widget__links">
                        <ul className="fottrlinks">
                          <li>
                            <Link to="privacy-policy" style={{ color: "#fff" }}>
                              Privacy Policy
                            </Link>
                          </li>
                          <li>
                            <Link to="term-condition" style={{ color: "#fff" }}>
                              Terms and Conditions
                            </Link>
                          </li>

                          <li>
                            <Link to="desclaimer" style={{ color: "#fff" }}>
                              Disclaimer
                            </Link>
                          </li>
                          <li>
                            <Link to="career" style={{ color: "#fff" }}>
                              Career
                            </Link>
                          </li>

                          {/* <li><a href="network-security" style={{ color: '#fff' }}>Network Security</a></li>
                                                <li><a href="data-backup-recovery" style={{ color: '#fff' }}>Data Backup Recovery</a></li> */}
                          {/* <li><a href="server-desktop-virtualization" style={{ color: '#fff' }}>Server  Virtualization</a></li> */}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-3 col-md-6 focontsec"
                    style={{ padding: 0 }}
                  >
                    <div
                      className="tp-footer-widget footer-2-col-4 mb-40 wow fadeInUp"
                      data-wow-delay=".8s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.8s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <span
                        className="tp-footer-widget__title mb-15"
                        style={{ color: "#fff", fontSize: "19px! important" }}
                      >
                        Contact Info
                      </span>
                      <div
                        className="tp-footer-widget__links mb-90"
                        style={{ padding: "0px! important" }}
                      >
                        <ul style={{ color: "#fff", paddingLeft: "0px" }}>
                          <li
                            className="mb-20"
                            style={{ color: "#fff", marginBottom: 10 }}
                          >
                            Raviraj CRU Mall,Office No-210,2nd Floor,Above
                            Fedral Bank Gangadham Chowk,Marketyard,Pune-411037.
                          </li>
                          <li
                            className="mb-20"
                            style={{ color: "#fff", marginBottom: 0 }}
                          >
                            <a
                              href="tel:+91-98909 38555"
                              style={{ color: "#fff" }}
                            >
                              {" "}
                              +91 9890938555
                            </a>
                          </li>

                          <li
                            className="mb-20"
                            style={{ color: "#fff", marginBottom: 10 }}
                          >
                            {" "}
                            <a
                              href="mailto: v.laddha@vtechsolutions.co.in"
                              style={{ color: "#fff" }}
                            >
                              v.laddha(@)vtechsolutions.co.in
                            </a>
                          </li>
                          <li
                            className="mb-20"
                            style={{ color: "#fff", marginBottom: 10 }}
                          >
                            <a href="" style={{ color: "#fff" }}>
                              www.vtechsolution.co.in
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>


      </section>
    </>
  );
}
export default Footer;

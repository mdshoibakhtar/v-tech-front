import FaqAccordion from "./faqAccordion/FaqAccordion";
import faqimg from "../../assets/img/faq/3241d3_7170ae6f70d947558d33c5e065b45730~mv2.webp";
import "./Faq.css";
function Faq() {
  return (
    <>
      <div className="faq-container">
        <div className="img-sec">
          <img src={faqimg} alt="" />

          <div className="frequent-ask">
            <h1>Frequently asked questions</h1>
          </div>
        </div>
        <div className="accor-container mt-5 mb-5">
          <FaqAccordion />
        </div>
      </div>
      <div className="column-strip mt-5 mb-5">
        <div className="wixui-rich-text">
          <h1>Do you have more questions?</h1>
          <p style={{ color: "whitesmoke" }}>
            <a href="">
              <span style={{ color: "#93CB0F" }}>Contact us</span>
            </a>{" "}
            with any questions, we're more than happy to help.
          </p>
        </div>
      </div>

      <div className="accordion-any-qes mt-5 mb-5">
        <div className="qus-form-container">
          <h4 className="quote">GET A QUOTE</h4>
          <form>
            <div className="row">
              <div className="mb-3 col-lg-6">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label faq-form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-3 col-lg-6">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label faq-form-label"
                >
                  Email
                </label>
                <input
                  type="Email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-lg-6">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label faq-form-label"
                >
                  Phone
                </label>
                <input
                  type="Number"
                  className="form-control"
                  placeholder="Number"
                />
              </div>
              <div className="mb-3 col-lg-6">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label faq-form-label"
                >
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                />
              </div>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-warning">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Faq;

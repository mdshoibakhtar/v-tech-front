import r1 from "../../assets/img/rental/r-1.jpeg";
import r2 from "../../assets/img/rental/r-2.jpeg";
import r3 from "../../assets/img/rental/r-3.jpeg";
import r4 from "../../assets/img/rental/r-4.jpeg";
import r5 from "../../assets/img/rental/r-5.png";
import r6 from "../../assets/img/rental/r-6.jpeg";
import r7 from "../../assets/img/rental/r-7.jpeg";
import r8 from "../../assets/img/rental/r-8.jpeg";
import r9 from "../../assets/img/rental/r-9.jpeg";
import CommonBanner from "../common/comonBanner/ComonBanner";
import "../rental/rental.css";
function Rental() {
  const commonName = { title: "Why Rental " };
  return (
    <>
      <CommonBanner commonName={commonName.title} />
      <section className="services py-3 4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div class="full">
                <div class="main_heading text_align_center">
                  <h2 style={{ color: "#004EA2", fontWeight: "700" }}>
                    RENTING -A FINANCIALLY SAMRT OPTION
                    {/* <span className="financial-opt">
                      "A FINANCIALLY SAMRT OPTION"
                    </span> */}
                  </h2>
                  <p class="subtext">
                    Show below text on after Why Rental Banner with each
                    services images with proper points highlight.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sevice-priview sevice-priview-2">
                <a href="#">
                  <div className="service-image">
                    <img src={r1} alt="img" />
                  </div>
                </a>
                <div className="service-preview-copy-wrap">
                  <a href="#">
                    <h4 class="service-preview-title title">COST SAVING</h4>
                    <p>
                      Renting IT equipment is often more cost-effective than
                      buying it outright for your business. This is especially
                      true for businesses that need latest technology as they
                      only need to pay the rental as per the small, medium or
                      long term project and can return the equipment{" "}
                    </p>
                  </a>
                  {/* <a href="#" className="read-more">Read more</a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sevice-priview sevice-priview-2">
                <a href="#">
                  <div className="service-image">
                    <img src={r2} alt="img" />
                  </div>
                </a>
                <div className="service-preview-copy-wrap">
                  <a href="#">
                    <h4 class="service-preview-title title">
                      Cash Flow Benefit
                    </h4>
                    <p>
                      You can tailor your payment schemes at your specific cash
                      flow or budget needs. The rent can be paid in advance,
                      monthly or quarterly as per our mutually convenient.
                      Renting IT equipment allows businesses to conserve their
                      cash flow for other important investments.
                    </p>
                  </a>
                  {/* <a href="#" className="read-more">Read more</a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sevice-priview sevice-priview-2">
                <a href="#">
                  <div className="service-image">
                    <img src={r3} alt="img" />
                  </div>
                </a>
                <div className="service-preview-copy-wrap">
                  <a href="#">
                    <h4 class="service-preview-title title">
                      Obsolescence Protection
                    </h4>
                    <p>
                      We provide Servers such as Rack Mount, Tower, Blade, SUN,
                      UNIX, AIX & Data Base Server on Rent for all your
                      important projects like Application Testing, Data Centres,
                      and other IT Related Tasks.
                    </p>
                  </a>
                  {/* <a href="#" className="read-more">Read more</a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sevice-priview sevice-priview-2">
                <a href="#">
                  <div className="service-image">
                    <img src={r4} alt="img" />
                  </div>
                </a>
                <div className="service-preview-copy-wrap">
                  <a href="#">
                    <h4 class="service-preview-title title">
                      Freedom to choose Latest Technology
                    </h4>
                    <p>
                      By renting IT equipment, you can have access to the latest
                      technology and can upgrade to newer equipment more
                      frequently.
                    </p>
                  </a>
                  {/* <a href="#" className="read-more">Read more</a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sevice-priview sevice-priview-2">
                <a href="#">
                  <div className="service-image">
                    <img src={r5} alt="img" />
                  </div>
                </a>
                <div className="service-preview-copy-wrap">
                  <a href="#">
                    <h4 class="service-preview-title title">
                      Reduce total cost of Ownership (TCO)
                    </h4>
                    <p>
                      Acquisition costs, opting for direct outright purchase get
                      enlarged by costs of installation, deployment,
                      decommissioning and trouble-shooting, etc. Renting option
                      thus works out cost-effective, reducing the TCO.
                    </p>
                  </a>
                  {/* <a href="#" className="read-more">Read more</a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sevice-priview sevice-priview-2">
                <a href="#">
                  <div className="service-image">
                    <img src={r6} alt="img" />
                  </div>
                </a>
                <div className="service-preview-copy-wrap">
                  <a href="#">
                    <h4 class="service-preview-title title">
                      Shielding from Inflation
                    </h4>
                    <p>
                      Every business has indirect other expenses such as
                      employee salaries, administrative expenses, utilities,
                      etc. but IT hardware equipment rental payments are fixed
                      and do not amplify overtime. This allows more precise
                      profit and cash-flow planning.
                    </p>
                  </a>
                  {/* <a href="#" className="read-more">Read more</a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sevice-priview sevice-priview-2">
                <a href="#">
                  <div className="service-image">
                    <img src={r7} alt="img" />
                  </div>
                </a>
                <div className="service-preview-copy-wrap">
                  <a href="#">
                    <h4 class="service-preview-title title">
                      Reduce maintenance costs
                    </h4>
                    <p>
                      With rented IT equipment, hardware maintenance and repair
                      costs are covered with us. This reduces the burden on the
                      renter and helps them to save money on maintenance costs.
                    </p>
                  </a>
                  {/* <a href="#" className="read-more">Read more</a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sevice-priview sevice-priview-2">
                <a href="#">
                  <div className="service-image">
                    <img src={r8} alt="img" />
                  </div>
                </a>
                <div className="service-preview-copy-wrap">
                  <a href="#">
                    <h4 class="service-preview-title title">
                      Project Based Requirement
                    </h4>
                    <p>
                      Renting of IT hardware is available for duration ranging
                      from 1 month to 3 years
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sevice-priview sevice-priview-2">
                <a href="#">
                  <div className="service-image">
                    <img src={r9} alt="img" />
                  </div>
                </a>
                <div className="service-preview-copy-wrap">
                  <a href="#">
                    <h4 class="service-preview-title title">Tax Saving</h4>
                    <p>
                      Rented equipment is considered not as a liability, but an
                      expense. Equipment renting payments are considered
                      external expenses and are therefore deductible from the
                      company's taxable profit.
                    </p>
                  </a>
                  {/* <a href="#" className="read-more">Read more</a> */}
                </div>
              </div>
            </div>
            {/* <div className="product_price text-center mt-2">
              <a href="about-us" id="headbtn" className="tp-btn">
                View More &nbsp;
                <i
                  className="fas fa-angle-double-right"
                  style={{ position: "relative", top: 1 }}
                />{" "}
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
export default Rental;

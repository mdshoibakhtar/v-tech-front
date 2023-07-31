
import banner2 from "../../../assets/img/banner/newBanner3.png";
function Banner() {
  return (
    <>
      <section
        className="hero-area hero-bg"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="container">
          <div className="row">
            {/* <div className='col-lg-3'></div> */}
            <div className="col-lg-8">
              <div className="tpherotext">
                <div className="slider-content pt-70 slider-content-2 ">
                  <h2
                    className="slider-content__title mb-25"
                    style={{ color: "#fff" }}
                  >
                    Empower your productivity with our advanced IT Equipment
                    Solutions
                  </h2>
                  <p style={{ color: "#fff" }}>
                    Simplify your technology with our IT equipment. From Branded
                    Desktops, Laptops to Servers.
                  </p>
                  <div className="slider-content__btn mb-165">
                    <a className="tp-btn" id="headbtn-10" href="cyber-security">
                      Read More &nbsp;
                      <i
                        className="fas fa-angle-double-right"
                        style={{
                          fontSize: "15px! important",
                          position: "relative",
                          top: 1,
                        }}
                      />
                    </a>
                    {/*<a class="tp-btn-second ml-25" href="about.html">About us</a>*/}
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
export default Banner;

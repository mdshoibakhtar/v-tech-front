import "../topHeader/topHeader.css";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
function TopHeader() {
  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-4 col-left">
              <div className="full">
                <div className="topbar-left">
                  <ul className="list-inline">
                    <li>
                      <span className="topbar-label">
                        <Link to="home">
                          <i className="fa fa-home" />
                        </Link>
                      </span>{" "}
                      <span className="topbar-hightlight">
                        Raviraj CRU Mall,Office No-210,2nd Floor,Above Fedral
                        Bank Gangadham Chowk,Marketyard,Pune-411037.
                      </span>
                    </li>
                    {/* <li>
                      <span className="topbar-label">
                        <i className="fa fa-envelope-o" />
                      </span>{" "}
                      <span className="topbar-hightlight">
                        <a href="#">v.laddha@vtechsolutions.co.in</a>
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-8 col-right right_section_header_top">
              {/* <div className="float-left ">
                <div className="social_icon">
                  <ul className="list-inline">
                    <li>
                      <a href="#" />
                      <BiLogoFacebook className="globle-user" />
                    </li>
                    <li>
                      <a href="#" />
                      <AiOutlineGooglePlus className="globle-user" />
                    </li>
                    <li>
                      <a href="#" />
                      <AiOutlineTwitter className="globle-user" />
                    </li>
                    <li>
                      <a href="#" />
                      <BsInstagram className="globle-user" />
                    </li>
                    <li>
                      <a href="#" />
                      <BiLogoLinkedin className="globle-user" />
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* <div className="float-right">
                <div className="make_appo">
                  <Link className="btn white_btn" to="contact-us">
                    GET A QUOTE
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TopHeader;

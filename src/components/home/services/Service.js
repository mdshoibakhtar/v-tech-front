import "../services/service.css";
import s1 from "../../../assets/img/service/si1.png";
import s2 from "../../../assets/img/service/si2.png";
import s3 from "../../../assets/img/service/si3.png";
import s4 from "../../../assets/img/service/si4.png";
import s5 from "../../../assets/img/service/si5.png";
import s6 from "../../../assets/img/service/si6.png";

import serv from "../../../assets/img/service/dark_bg_img.jpg";

const serviceData = {
  serviceHeading: {
    title: "WHY US...",
    des: "Easy and Effective way to gey your device Prepaired",
  },
  allData: [
    {
      id: "1",
      name: "Fast Service",
      details:
        "Exerci tation ullamcorper suscipit lobortis nisl utaliquip ex ea commodo",
      img: s1,
    },
    {
      id: "2",
      name: "Secure Payment",
      details:
        "Exerci tation ullamcorper suscipit lobortis nisl utaliquip ex ea commodo",
      img: s2,
    },
    {
      id: "3",
      name: "Expert Team",
      details:
        "Exerci tation ullamcorper suscipit lobortis nisl utaliquip ex ea commodo",
      img: s3,
    },
    {
      id: "4",
      name: "Affordable Services",
      details:
        "Exerci tation ullamcorper suscipit lobortis nisl utaliquip ex ea commodo",
      img: s4,
    },
    {
      id: "5",
      name: "90 Days Warrenty",
      details:
        "Exerci tation ullamcorper suscipit lobortis nisl utaliquip ex ea commodo",
      img: s5,
    },
    {
      id: "6",
      name: "Award Winning",
      details:
        "Exerci tation ullamcorper suscipit lobortis nisl utaliquip ex ea commodo",
      img: s6,
    },
  ],
};
function Service() {
  return (
    <>
      <div className="main-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="full">
              <div className="main_heading ">
                <h2>{serviceData.serviceHeading.title}</h2>
                <p className="large">{serviceData.serviceHeading.des}</p>
              </div>
            </div>
            <div className=" services-row">
              <div className="col">
                <div className="row">
                  {serviceData.allData.map((item) => {
                    console.log(item);
                    return (
                      <div className="col-lg-4 col-md-6">
                        <div className="full">
                          <div className="service_blog_inner">
                            <div className="icon text_align_left">
                              <img src={item.img} />
                            </div>
                            <h4 className="service-heading">{item.name}</h4>
                            <p>{item.details}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="product_price text-center mt-2">
                    <a href="about-us" id="headbtn" className="tp-btn">
                      View More &nbsp;
                      <i
                        className="fas fa-angle-double-right"
                        style={{ position: "relative", top: 1 }}
                      />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="process-img"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Service;

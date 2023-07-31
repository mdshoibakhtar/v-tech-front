import galleryImg1 from "../../assets/img/gallery/gallery-img-1.jpg";
import galleryImg2 from "../../assets/img/gallery/gallery-img-2.jpg";
import galleryImg3 from "../../assets/img/gallery/gallery-img-3.jpg";
import galleryImg4 from "../../assets/img/gallery/gallery-img-4.jpg";
import galleryImg5 from "../../assets/img/gallery/gallery-img-5.jpg";
import galleryImg6 from "../../assets/img/gallery/gallery-img-6.jpg";
import galleryImg7 from "../../assets/img/gallery/gallery-img-7.jpg";
import galleryImg8 from "../../assets/img/gallery/gallery-img-8.jpg";
import galleryImg9 from "../../assets/img/gallery/gallery-img-9.jpg";

import "./Gallery.css";

function Gallery() {
  return (
    <>
      <section className="gallery-sec">
        <div className=" elementor-gallery-sec">
          <h1 className="career-heading">Photo Gallery</h1>
        </div>
        <div className="back-link">
          <ul className="d-flex">
            <li className="me-2">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="gallery-container mt-4 mb-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <img src={galleryImg1} className="gallery-img" />
              <img src={galleryImg2} className="gallery-img" />
              <img src={galleryImg3} className="gallery-img" />
            </div>
            <div className="col-lg-4 col-md-4">
              <img src={galleryImg4} className="gallery-img" />
              <img src={galleryImg5} className="gallery-img" />
              <img src={galleryImg6} className="gallery-img" />
            </div>
            <div className="col-lg-4 col-md-4">
              <img src={galleryImg7} className="gallery-img" />
              <img src={galleryImg8} className="gallery-img" />
              <img src={galleryImg9} className="gallery-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Gallery;

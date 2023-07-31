import blogimg from "../../assets/img/blogList/blog-details/blog-min.jpg";

import "./BlogDetails.css";
function BlogDetails() {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12">
            <div className="details-container">
              <div className="heading-text">
                <h2>Blog Details</h2>
                <p>
                  A blog (short for “weblog”) is an online journal or
                  informational website run by an individual
                </p>
              </div>
              <div className="blog-img">
                <img src={blogimg} alt="" className="details-img" />
              </div>

              <div className="sec-blog-text mt-4 py-3">
                <h5>
                  <strong>
                    Having Experience with creative studio and it's the ultimate
                    creative factory version this planet.
                  </strong>
                </h5>
                <p>
                  Proin ac lorem facilisis, porta sem id, efficitur quam.
                  Phasellus vehicula iaculis enim, eget ultrices magna eleifend
                  eget. Nulla ac tempus diam. Nunc rutrum luctus orci non
                  dapibus.Donec vel lacus rutrum, pulvinar metus sit amet,
                  ullamcorper dui. Cras fermentum dapibus posuere. Aenean tempor
                  dictum scelerisque. Sed varius fringilla quam, eu molestie mi
                  tempus eget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogDetails;

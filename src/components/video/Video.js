import "./Video.css";
function Video() {
  return (
    <>
      <section className="gallery-sec">
        <div className="elementor-sec">
          <h1 className="career-heading">Video Gallery</h1>
          <div className="back-link">
            <ul className="d-flex">
              <li className="me-2">
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Video</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="gallery-container mt-4 mb-5 col-sm-12">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <iframe
                className="video-container"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/2ulvxgL_UxM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <iframe
                className="video-container"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/GNKEV1i-Ccw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <iframe
                className="video-container"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ay2RT_2VaBg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Video;

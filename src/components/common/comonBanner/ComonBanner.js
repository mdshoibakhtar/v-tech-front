import "../comonBanner/comonBanner.css";
import commonBanner from "../../../assets/img/commonBanner/commonBanner.jpg"


function CommonBanner(props) {
  return (
    <>
      <div className="page-header">
        <div className="page-header-image-wrap">
          <img
            src={commonBanner}
            width={2000}
            height={599}
            alt="Computer Repair"
            sizes="(max-width: 2000px) 100vw, 2000px"
          />
        </div>
        <div className="page-title-wrap">
          <div className="container container-container">
            <h1 className="page-title">{props.commonName}</h1>
            <div
              className="breadcrumbs"
              typeof="BreadcrumbList"
              vocab="http://schema.org/"
            >
              <span property="itemListElement" typeof="ListItem">
                <a
                  property="item"
                  typeof="WebPage"
                  title="Go to Computer Repair."
                  href="home"
                  className="home"
                >
                  <span property="name">Home</span>
                </a>
                <meta property="position" content={1} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CommonBanner;

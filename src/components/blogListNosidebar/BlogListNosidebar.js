// import cloudThumb from "../../assets/img/blogList/blog-nosidebar/blog-noside-1.jpg"

import './BlogListNosidebar.css'

function BlogListNosidebar() {
  return (
    <>
      <div className="blog-section container">
        <div className="site_content-left content-area col-12">
          <article>
            <header className="entry-header">
              <h1 className="entry-title">
                Why Should Your Business Move to the Cloud?
              </h1>
              <div className="entry-meta">
                <small>June 13, 2023</small>
              </div>
            </header>
            <div className="featured-image page-header-image-single">
              {/* <img src={cloudThumb} alt="" className="cloud-thumb" /> */}
              <div className="cloud-thumb"></div>
            </div>
            <div className="entry-content">
              <p>
                Is your business still relying on a dusty old server sitting in
                one of your back closets? Are you tired of dealing with clunky
                hardware that’s constantly breaking? Or just wish you could work
                remotely without emailing files back and forth?
              </p>
              <p>Then it’s time to move your business to the cloud.</p>
              <p>
                Cloud migration is a lot like a physical move from a smaller
                office into a bigger one. But instead of moving all your
                computers and servers into a different building, you’re moving
                your digital assets – like your data, applications, and IT
                resources – into the cloud.
              </p>

              <center className="blog-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/xNRJwmlRBNU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="blog-video"
                ></iframe>
              </center>

              <h2 className="mt-5">Benefits of Moving to the Cloud</h2>
              <p>
                What’s so great about moving to the cloud? Here are a few big
                benefits:
              </p>
              <ol>
                <li>
                  <strong>Reliability</strong>– You can stop worrying about
                  failing hard drives or flaky equipment. Cloud platforms mean
                  your data and apps are available 24/7 and most providers have
                  99% uptime guarantees.
                </li>
                <li>
                  <strong>Security </strong>– Hackers, natural disasters, and
                  even power outages can cause massive data loss if you’re
                  storing everything in-house. Cloud backups are a safer way to
                  store your data and prevent a data disaster.
                </li>
                <li>
                  <strong>Flexibility </strong>– You don’t have to be tied to
                  your physical office anymore. Cloud services let you access
                  your data and apps over the internet, giving you the freedom
                  to work from anywhere.
                </li>
                <li>
                  <strong>Cost savings</strong>– When you move to the cloud, you
                  don’t have to maintain expensive servers and physical
                  equipment. Plus, cloud services offer affordable plans for
                  small businesses, so you’re only paying for what you need.
                </li>
              </ol>
              <h2 className="wp-block-heading mt-5">
                Cloud Migration Made EZ!
              </h2>
              <p>
                We can make it easy for your business to move to the cloud and
                enjoy the benefits of cloud computing. We offer a range of cloud
                services including data backup, Microsoft 365, and VoIP phone
                systems that make it easy to access your data and email, make
                calls, and collaborate with your team–anytime, anywhere.
              </p>
              <p>
                Contact us today to schedule a consultation and get a free
                quote.
              </p>
              <div className="wp-block-btn">
                <a href="" className="wp-block-button__link ">
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
export default BlogListNosidebar;

import CommonBanner from "../common/comonBanner/ComonBanner"
import '../services/service.css'
import s1 from '../../assets/img/servicesInner/s-1.jpg'
import s2 from '../../assets/img/servicesInner/s-2.jpg'
import s3 from '../../assets/img/servicesInner/s-3.jpg'
import s4 from '../../assets/img/servicesInner/s-4.jpg'
import s5 from '../../assets/img/servicesInner/s-5.jpg'
import s6 from '../../assets/img/servicesInner/s-6.jpg'
function Services () {
    const commonName = {title:'Hardware Services'}
    return (
        <>
        <CommonBanner commonName={commonName.title}/>
        <section className="services py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div class="full"><div class="main_heading text_align_center"><h2>Hardware Services </h2><p class="large">We package the service with best services to make you a happy customer.</p></div></div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sevice-priview">
                            <a href="#">
                                <div className="service-image">
                                    <img src={s1} alt="img" />
                                </div>
                            </a>
                            <div className="service-preview-copy-wrap">
                                <a href="#">
                                <h4 class="service-preview-title title">Data recovery</h4>
                                <p>Praesent tortor massa, hendrerit vel ultricies a, vulputate et turpis. Quisque vitae congue risus, eget porttitor leo.</p>
                                </a>
                                {/* <a href="#" className="read-more">Read more</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sevice-priview">
                            <a href="#">
                                <div className="service-image">
                                    <img src={s2} alt="img" />
                                </div>
                            </a>
                            <div className="service-preview-copy-wrap">
                                <a href="#">
                                <h4 class="service-preview-title title">MACBOOK REPAIR</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis tristique, gravida purus non, mollis erat.</p>
                                </a>
                                {/* <a href="#" className="read-more">Read more</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sevice-priview">
                            <a href="#">
                                <div className="service-image">
                                    <img src={s3} alt="img" />
                                </div>
                            </a>
                            <div className="service-preview-copy-wrap">
                                <a href="#">
                                <h4 class="service-preview-title title">BATTERY REPLACEMENT</h4>
                                <p>Praesent tortor massa, hendrerit vel ultricies a, vulputate et turpis. Quisque vitae congue risus, eget porttitor leo.</p>
                                </a>
                                {/* <a href="#" className="read-more">Read more</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sevice-priview">
                            <a href="#">
                                <div className="service-image">
                                    <img src={s4} alt="img" />
                                </div>
                            </a>
                            <div className="service-preview-copy-wrap">
                                <a href="#">
                                <h4 class="service-preview-title title">LAPTOP REPAIR</h4>
                                <p>Morbi ipsum turpis, ullamcorper ut nulla nec, ultricies sagittis tortor. Praesent sit amet diam nec lacus varius tincidunt sed eu nibh.</p>
                                </a>
                                {/* <a href="#" className="read-more">Read more</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sevice-priview">
                            <a href="#">
                                <div className="service-image">
                                    <img src={s5} alt="img" />
                                </div>
                            </a>
                            <div className="service-preview-copy-wrap">
                                <a href="#">
                                <h4 class="service-preview-title title">SCREEN REPLACEMENT</h4>
                                <p>Duis luctus elit augue, et venenatis tellus rhoncus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </a>
                                {/* <a href="#" className="read-more">Read more</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sevice-priview">
                            <a href="#">
                                <div className="service-image">
                                    <img src={s6} alt="img" />
                                </div>
                            </a>
                            <div className="service-preview-copy-wrap">
                                <a href="#">
                                <h4 class="service-preview-title title">VIRUS PROTECTION</h4>
                                <p>Maecenas ut neque nec felis cursus vestibulum sit amet sit amet sapien. Integer eu risus ut ex mollis elementum.</p>
                                </a>
                                {/* <a href="#" className="read-more">Read more</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="product_price text-center mt-2"><a href="about-us" id="headbtn" className="tp-btn">View More  &nbsp;<i className="fas fa-angle-double-right" style={{position: 'relative', top: 1}} /> </a></div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Services
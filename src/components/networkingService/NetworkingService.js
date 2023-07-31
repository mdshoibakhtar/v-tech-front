
import '../networkingService/networkingService.css'
import n1 from '../../assets/img/network/n-1.jpg'
import n2 from '../../assets/img/network/n-2.webp'
import n3 from '../../assets/img/network/n-3.jpg'
import n4 from '../../assets/img/network/n-4.jpg'
import n5 from '../../assets/img/network/n-5.png'
import CommonBanner from '../common/comonBanner/ComonBanner'
function NetworkingService () {
    const commonName = {title:'Networking Services'}
    return (
        <>
        <CommonBanner commonName={commonName.title}/>
        <section className="services py-5 pb-85-P">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div class="full"><div class="main_heading text_align_center"><h2>Networking Services </h2><p class="large">We package the networking service with best services to make you a happy customer.</p></div></div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sevice-priview">
                            <a href="#">
                                <div className="service-image">
                                    <img src={n1} alt="img" />
                                </div>
                            </a>
                            <div className="service-preview-copy-wrap">
                                <a href="#">
                                <h4 class="service-preview-title title">LAN, Wired Networking</h4>
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
                                    <img src={n2} alt="img" />
                                </div>
                            </a>
                            <div className="service-preview-copy-wrap">
                                <a href="#">
                                <h4 class="service-preview-title title"> WAN Technologies</h4>
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
                                    <img src={n3} alt="img" />
                                </div>
                            </a>
                            <div className="service-preview-copy-wrap">
                                <a href="#">
                                <h4 class="service-preview-title title">Network Services | V-Tech Solutions</h4>
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
                                    <img src={n4} alt="img" />
                                </div>
                            </a>
                            <div className="service-preview-copy-wrap">
                                <a href="#">
                                <h4 class="service-preview-title title">Wireless Networks</h4>
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
                                    <img src={n5} alt="img" />
                                </div>
                            </a>
                            <div className="service-preview-copy-wrap">
                                <a href="#">
                                <h4 class="service-preview-title title">AMC for IT Infrastructure</h4>
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
                                    <img src={n1} alt="img" />
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
export default NetworkingService
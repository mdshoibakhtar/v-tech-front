import { useState } from "react";

function MobileStickeyHeader() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
    
    }
    return (
        <>
            <div id="header-mob-sticky" className="tp-mobile-header-area pt-15 pb-15 d-xl-none">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 col-10">
                            <div className="tp-mob-logo">
                                <a href="index"><img src="assets/img/logo.png" alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-md-8 col-2">
                            <div className="tp-mobile-bar d-flex align-items-center justify-content-end">
                                <div className="tp-bt-btn-banner d-none d-md-block d-xl-none mr-30">
                                    <a className="tp-bt-btn" href="tel:123456">
                                        <svg width={14} height={19} viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="#0E63FF" /><circle cx={7} cy={2} r={2} fill="#0E63FF" /><circle cx={12} cy={2} r={2} fill="#0E63FF" /><circle cx={12} cy={7} r={2} fill="#0E63FF" /><circle cx={12} cy={12} r={2} fill="#0E63FF" /><circle cx={7} cy={7} r={2} fill="#0E63FF" /><circle cx={7} cy={12} r={2} fill="#0E63FF" /><circle cx={7} cy={17} r={2} fill="#0E63FF" /><circle cx={2} cy={7} r={2} fill="#0E63FF" /><circle cx={2} cy={12} r={2} fill="#0E63FF" /></svg><span>Help Desk :</span>+91 590 088 55
                                    </a>
                                </div>
                                <button className="tp-menu-toggle" onClick={handleClick}><i className="far fa-bars" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='tpsideinfo tp-side-info-area'>
                <button className="tpsideinfo__close"><i className="fal fa-times" /></button>
                <div className="tpsideinfo__logo mb-40">
                    {/*<a href="index"><img src="assets/img/logo-mobile.jpg" alt="logo"></a>*/}
                </div>
                <div className="mobile-menu mean-container"><div className="mean-bar"><a href="#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}><span><span><span /></span></span></a><nav className="mean-nav">
                    <ul style={{ display: 'none' }}>
                        <li><a href="index">Home</a></li>
                        <li className="has-dropdown"><a href="about-us">About Us</a>
                            <ul className="sub-menu" style={{ display: 'none' }}>
                                <li><a href="about-us">About Us</a></li>
                                <li><a href="about-us#directorcorner">Director Corner</a></li>
                            </ul>
                            <a className="mean-expand" href="#" style={{ fontSize: 18 }}><i className="fal fa-plus" /></a></li>
                        <li className="has-dropdown"><a href="managed-it-services">Managed Services</a>
                            <ul className="sub-menu" style={{ display: 'none' }}>
                                <li><a href="managed-it-services">Managed IT Services</a></li>
                                <li><a href="network-security">Network Security</a></li>
                                <li><a href="data-backup-recovery">Data Backup Recovery</a></li>
                                <li><a href="server-desktop-virtualization">Server Desktop Virtualization</a></li>
                            </ul>
                            <a className="mean-expand" href="#" style={{ fontSize: 18 }}><i className="fal fa-plus" /></a></li>
                        <li className="has-dropdown"><a href="cyber-security">Expertise</a>
                            <ul className="sub-menu" style={{ display: 'none' }}>
                                <li><a href="cyber-security">Cyber Security</a></li>
                                <li><a href="it-consulting">IT Consulting</a></li>
                                <li><a href="cloud-integration">Cloud Integration</a></li>
                            </ul>
                            <a className="mean-expand" href="#" style={{ fontSize: 18 }}><i className="fal fa-plus" /></a></li>
                        <li><a href="rental-services">Rentals</a></li>
                        <li><a href="products">Products</a></li>
                        <li className="mean-last"><a href="contact-us">Contact </a></li>
                    </ul>
                </nav></div></div>
                <div className="tpsideinfo__content mb-60">
                    <span>Contact Us</span>
                    <a href="contact-us"><i className="fa-solid fa-star" />484/1+31+32, Parvati Swargate, Pune – 411009, MH </a>
                    <a href="tel:09960466699"><i className="fa-solid fa-star" />+91 9960466699</a>
                    <a href="mailto:sales@saiyash.in"><i className="fa-solid fa-star" />sales@saiyash.in</a>
                </div>
                <div className="tpsideinfo__socialicon">
                    <a href="https://www.facebook.com/saiyashtechnologies/" target="_blank"><i className="fa-brands fa-facebook-f" /></a>
                    <a href="https://twitter.com/sytpl1" target="_blank"><i className="fa-brands fa-twitter" /></a>
                    <a href="https://www.linkedin.com/company/saiyash-technologies/" target="_blank"><i className="fa-brands fa-linkedin" /></a>
                </div>
            </div>


        </>
    )
}
export default MobileStickeyHeader
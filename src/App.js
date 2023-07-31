import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/swiper-bundle.css";
import "./assets/css/slick.css";
import "./assets/css/aos.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/font-awesome-pro.css";
import "./assets/css/flaticon.css";
import "./assets/css/spacing.css";
import "./assets/css/nice-select.css";
import "./assets/css/meanmenu.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home";
import TopHeader from "./components/common/header/topHeader/TopHeader";
import ServicePage from "./pages/services/Index";
import NetworkingServicePage from "./pages/networkingService/Index";
// import AboutUs from "./components/home/about/AboutUs";
import ContactUsPage from "./pages/contactUs/Index";
import RentalPage from "./pages/rental/Index";
import AboutUsInnerPage from "./pages/aboutUsInner/Index";
import ProductInnerPage from "./pages/productInner/Index";
// import MobileStickeyHeader from "./components/common/mobileStickyHeader/MobileStickyHeader";
import BlogListPage from "./pages/BlogList";
import BlogDetailsPage from "./pages/blogDetails";
import FaqPage from "./pages/faq";
import PrivacyPolicyPage from "./pages/privacyPolicy";
import DesclaimerPage from "./pages/disclaimer";
import BlogListNosidebarPage from "./pages/blogListNosidebar";
import CareerPage from "./pages/career";
import GalleryPage from "./pages/gallery";
import VideoPage from "./pages/video";
import TermsConditionPage from "./pages/termsCondition";
import RentalProductPage from "./pages/rentalProduct";
import Boucher from "./components/boucherDload/Boucher";
import SocialMedia from "./components/socialMedia/SocialMedia";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      {/* <MobileStickeyHeader/> */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="hardware-services" element={<ServicePage />} />
        <Route path="networking-services" element={<NetworkingServicePage />} />
        <Route path="about-us" element={<AboutUsInnerPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="rental-services" element={<RentalPage />} />
        <Route path="our-product" element={<ProductInnerPage />} />
        <Route path="blog-list" element={<BlogListPage />} />
        <Route path="blog-list-nosidebar" element={<BlogListNosidebarPage />} />

        <Route path="blog-details" element={<BlogDetailsPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="desclaimer" element={<DesclaimerPage />} />
        <Route path="career" element={<CareerPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="video" element={<VideoPage />} />
        <Route path="term-condition" element={<TermsConditionPage />} />
        <Route path="rental-products" element={<RentalProductPage />} />
      </Routes>
      <SocialMedia />
      <Boucher />
      <Footer />
    </>
  );
}

export default App;

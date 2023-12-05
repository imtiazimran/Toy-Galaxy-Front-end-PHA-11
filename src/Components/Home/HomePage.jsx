import { useEffect } from "react";
import 'aos/dist/aos.css';
import Slider from "./Carousel";
import ImageGallary from "./ImageGallary";
import NewArrivel from "./NewArrivel";
import ToyBrandLogos from "./OurPartnars";
import Tab from "./Tab";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { title } from "../../CustomHook/ChangeTitle";
import ContactUs from "./ContactUs";
import PopulerProducts from "./PopulerProducts";
import FromSellers from "./FromSellers";
import Review from "./Review";
import VideoSlide from "./VideoSlide";
import FAQ from "./FAQ";




const HomePage = () => {
        title("ToyGalaxy | Home")
    useEffect(() => {
        AOS.init({
            duration: 2000,
            offset: 100,
        });
    }, []);

    return (
        <div className="w-10/12 mx-auto">
            <Slider></Slider>
            <NewArrivel data-aos="fade-up"></NewArrivel>
            <Tab data-aos="fade-up"></Tab>
            <PopulerProducts/>
            <FromSellers/>
            <ImageGallary data-aos="fade-up" data-aos-delay="200"></ImageGallary>
            <ContactUs/>
            <Review/>
            <VideoSlide/>
            <ToyBrandLogos data-aos="fade-up"></ToyBrandLogos>
            <FAQ/>
        </div>
    );
};

export default HomePage;
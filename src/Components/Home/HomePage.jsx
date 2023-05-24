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




const HomePage = () => {
        title("ToyGalaxy | Home")
    useEffect(() => {
        AOS.init({
            duration: 6000,
            offset: 100,
        });
    }, []);

    return (
        <div className="w-10/12 mx-auto">
            <Slider data-aos="fade-up"></Slider>
            <ImageGallary data-aos="fade-up" data-aos-delay="200"></ImageGallary>
            <Tab data-aos="fade-up"></Tab>
            <NewArrivel data-aos="fade-up"></NewArrivel>
            <ToyBrandLogos data-aos="fade-up"></ToyBrandLogos>
        </div>
    );
};

export default HomePage;
import Slider from "./Carousel";
import ImageGallary from "./ImageGallary";
import NewArrivel from "./NewArrivel";
import ToyBrandLogos from "./OurPartnars";
import Tab from "./Tab";



const HomePage = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Slider></Slider>
            <ImageGallary></ImageGallary>
            <Tab></Tab>
            <NewArrivel></NewArrivel>
            <ToyBrandLogos></ToyBrandLogos>
        </div>
    );
};

export default HomePage;
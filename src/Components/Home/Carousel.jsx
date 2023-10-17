/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "flowbite-react";


const Slider = () => {
    return (
        <div data-aos="fade-up" className=" md:h-[44rem]  md:block relative">
        <Carousel slideInterval={5000}>
            <div
                id="item1"
                className={`relative h-3/4 carousel-item w-full `}
            >
                <img
                    src="https://images.unsplash.com/photo-1556707752-481d500a2c58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    className="w-full h-full "
                    alt="Carousel Item 1"
                />
                <div className="carousel-overlay bg-gradient-to-bl from-transparent via-blue-600 to-slate-950 w-full h-full absolute flex flex-col  text-white md:p-4">
                    <h3 className="md:text-5xl  font-bold mb-2">Kid's Loves Our Toys</h3>
                </div>
            </div>
            <div
                id="item2"
                className={`relative h-3/4 carousel-item w-full`}
            >
                <img
                    src="https://images.unsplash.com/photo-1623039902375-29258147f39e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    className="w-full h-full "
                    alt="Carousel Item 2"
                />
                <div className="carousel-overlay bg-gradient-to-bl from-transparent via-green-500 to-slate-950 w-full h-full absolute flex flex-col  text-white md:p-4">
                    <h3 className="md:text-5xl  font-bold mb-2">All kind of toy's here</h3>
                </div>
            </div>
            <div
                id="item3"
                className={`relative h-3/4 carousel-item w-full`}
            >
                <img
                    src="https://images.unsplash.com/photo-1668381868969-64447587238f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    className="w-full h-full "
                    alt="Carousel Item 3"
                />
                <div className="carousel-overlay bg-gradient-to-bl from-transparent via-red-600 to-slate-950 w-full h-full absolute flex flex-col  text-white md:p-4">
                    <h3 className="text-5xl  font-bold mb-2">Visit Our shop </h3>
                </div>
            </div>
            <div
                id="item4"
                className={`relative h-3/4 carousel-item w-full`}
            >
                <img
                    src="https://images.unsplash.com/photo-1550479023-2a811e19dfd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
                    className="w-full h-full "
                    alt="Carousel Item 4"
                />
                <div className="carousel-overlay bg-gradient-to-bl from-transparent via-amber-500 to-slate-950 w-full h-full absolute flex flex-col  text-white md:p-4">
                    <h3 className="md:text-5xl  font-bold mb-2">Authentic toy's</h3>
                </div>
            </div>
        </Carousel>
    </div>
    );
};

export default Slider;
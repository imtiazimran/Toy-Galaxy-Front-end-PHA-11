import { Carousel } from "flowbite-react";


const NewArrivel = () => {

    return (
        <div className="mt-10 hidden md:block md:pt-8 h-56">
            <h1 className="flex justify-center p-5 text-5xl bg-gray-800  text-amber-300  font-bold">New Arrivel</h1>
            <div className="md:grid  grid-cols-1 md:grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">

                <Carousel>
                    <img
                    className="w-[600px] h-[450px]"
                        src="https://i.ibb.co/Bcj73YM/e76279f5c770db76c51cd77929c61eed-removebg-preview.png"
                        alt="..."
                    />
                    
                    <img
                        src="https://i.ibb.co/4pYxLCT/photo-1558507334-57300f59f0bd-ixlib-rb-4-0.jpg"
                        alt="..."
                    />
                    <img
                        src="https://i.ibb.co/gtQHKnY/batman-arkham-city-batman-arkham-knight-lego-batman-the-videogame-injustice-gods-among-us-png-favpng.png"
                        alt="..."
                    />
                </Carousel>
                <Carousel indicators={true}>
                    <img
                    className="w-[600px]"
                        src="https://i.ibb.co/r7LYZsK/desktop-wallpaper-marvel-s-spider-man-2-coming-to-ps5-with-miles-morales-in-2020-somag-news-removebg.png"
                        alt="..."
                    />
                    
                    <img
                        src="https://i.ibb.co/pyQ23NZ/pexels-photo-264905.jpg"
                        alt="..."
                    />
                    <img
                        src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="..."
                    />
                </Carousel>
            </div>
        </div>
    );
};

export default NewArrivel;
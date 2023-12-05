import { Carousel } from 'flowbite-react';
import React from 'react';

const VideoSlide = () => {
    return (
        <div>
            <h1 className="flex justify-center p-5 md:text-5xl bg-gray-800  text-amber-300  text-center font-bold capitalize">Kids Enjoy playing <br /> with Our toys</h1>
            <div className='h-[500px] w-2/4 mx-auto'>
                <Carousel slide={false}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Jj56yCjJEck?autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/DpQdJl6c0UU?si=h6p9BaoYhU9n2B5B"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/d-InpzjEgoU?si=ExzueO1AZp9fJwmI"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Jj56yCjJEck?autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Jj56yCjJEck?autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Jj56yCjJEck?autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </Carousel>
            </div>
        </div>
    );
};

export default VideoSlide;

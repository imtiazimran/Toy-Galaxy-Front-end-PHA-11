import axios from 'axios';
import { Avatar, Card, Carousel } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';

const Review = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9999/review")
            .then(res => {
                setReview(res.data)
            })
    }, [])
    return (
        <div data-aos="fade-up" className=" md:h-[500px]">
            <Carousel pauseOnHover>
                {
                    review.map(item => (
                        <div className="flex w-1/3 h-full items-center justify-center bg-slate-800 dark:text-white">
                            <Card>
                                <div className="flex flex-col items-center pb-10">
                                    <Avatar rounded={true} />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                        {item.name}
                                    </h5>
                                    <p>{item.review}</p>
                                    <ReactStarsRating className="flex" value={item.rating} />
                                </div>
                            </Card>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default Review;
import axios from 'axios';
import { Avatar, Card, Carousel } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';

const Review = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        axios.get("https://toy-market-server-itpuzoalc-toygalaxy.vercel.app/review")
            .then(res => {
                setReview(res.data)
            })
    }, [])
    return (
        <div data-aos="fade-up">
        <h1 className="flex justify-center p-5 text-5xl bg-gray-800  text-amber-300  font-bold"> Customar Review</h1>
        <div className=" h-[500px] md:w-1/3 mx-auto my-14">
             <Carousel pauseOnHover>
                {
                    review.map(item => (
                        <div className="flex  h-full items-center justify-center bg-slate-800 dark:text-white">
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
        </div>
    );
};

export default Review;
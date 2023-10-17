import axios from 'axios';
import { Card } from 'flowbite-react';
import ReactStarsRating from 'react-awesome-stars-rating';
import React, { useEffect, useState } from 'react';

const PopulerProducts = () => {
    const [populerCollection, setPopulerCollection] = useState([])

    useEffect(() => {
        axios.get('https://toy-market-server-liart.vercel.app/allToys')
            .then((res) => {
                // Assuming your API returns an array of toys with an 'items' field
                const allToys = res.data;

                // Filter the data to select only items with 'items' field set to 'popular'
                const populerToys = allToys.filter((toy) => toy.items === 'popular');

                // Set the filtered data to the state
                setPopulerCollection(populerToys);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className='py-10'>
            <h1 className="flex justify-center p-5 text-5xl bg-gray-800  text-amber-300  font-bold">Populer Items</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 max-w-6xl gap-10 mx-auto py-10'>
                {
                    populerCollection.map(item => (
                        <Card
                            className='p-4'
                            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                            imgSrc={item.image}
                        >
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    <p>
                                        {item.name}
                                    </p>
                                </h5>
                            </a>
                            <div className="mb-5 mt-2.5 flex items-center">

                                <ReactStarsRating className="flex" value={populerCollection.rating} />
                                <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semiboldtext-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                    <p>
                                        {populerCollection.rating}
                                    </p>
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                    ${item.price}
                                </span>
                                <a
                                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                    href="#"
                                >
                                    <p>
                                        Add to cart
                                    </p>
                                </a>
                            </div>
                        </Card>
                    ))
                }

            </div>
        </div>
    );
};

export default PopulerProducts;
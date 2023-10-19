import { Button, Card, Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import ReactStarsRating from 'react-awesome-stars-rating';
import useCartPost from '../../CustomHook/useCartPost';

const FromSellers = () => {

    const { addToCart, loading } = useCartPost()
    const [addedToys, setAddedToys] = useState([])
    useEffect(() => {
        fetch(`https://toy-market-server-liart.vercel.app/insertItem/All`)
            .then(res => res.json())
            .then(data => setAddedToys(data))
    }, [])

    return (
        <div>

            <h1 className="flex justify-center p-5 text-5xl bg-gray-800  text-amber-300  font-bold">Sellers Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-6xl gap-10 mx-auto py-10'>
                {
                    addedToys.map(item => (
                        <Card
                            className='p-4'
                            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                            imgSrc={item.photoLink && item.photoLink}
                        >
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    <p>
                                        {item.name}
                                    </p>
                                </h5>
                                <small className='text-slate-600'>{item.sellerName}</small>
                            </a>
                            <div className="mb-5 mt-2.5 flex items-center">

                                <ReactStarsRating className="flex" value={item?.rating} />
                                <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semiboldtext-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                    <p>
                                        {item?.rating}
                                    </p>
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <Button
                                    onClick={() => addToCart(item)}
                                >

                                    {
                                        loading ?
                                            <div>
                                                <Spinner
                                                    aria-label="Spinner button example"
                                                    size="sm"
                                                />
                                                <span className="pl-3">
                                                    Loading...
                                                </span>
                                            </div>
                                            :
                                            <div className='flex'>
                                                <HiShoppingCart className="mr-2 h-5 w-5" />
                                                <p>
                                                    Buy now
                                                </p>
                                            </div>

                                    }
                                </Button>
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                    ${item.price}
                                </span>
                            </div>
                        </Card>
                    ))
                }
            </div>


        </div>
    );
};

export default FromSellers;
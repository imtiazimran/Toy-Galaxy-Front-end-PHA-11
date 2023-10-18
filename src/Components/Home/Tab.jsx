import { Button, Card, Rating, Tabs } from 'flowbite-react';
import { useEffect, useState } from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';
import useCartPost from '../../CustomHook/useCartPost';

const Tab = () => {

    const { addToCart, loading } = useCartPost()

    const [allToys, setAllToys] = useState([])

    useEffect(() => {
        fetch('https://toy-market-server-liart.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [])
    return (
        // ----------------------------------------Tab Section------------------------------------------------------------
        <div data-aos="zoom-out-bottom" className='mt-72'>
            <h1 className="flex justify-center p-5 text-5xl bg-gray-800  text-amber-300  font-bold">Category</h1>
            {
                loading ? <div className="text-center w-full flex justify-center">
                    <img src="https://cdn.dribbble.com/users/1961926/screenshots/5660764/flash.gif" alt="" />
                </div>
                    :
                    <Tabs.Group
                        aria-label="Full width tabs"
                        style="fullWidth"
                        className="bg-gray-800"
                    >
                        <Tabs.Item title="Marvel">
                            <div className=" grid grid-cols-1 md:grid-cols-3 max-w-6xl gap-10 mx-auto">
                                {
                                    allToys.filter(item => item.category === "marvel")?.map(toy => (
                                        <Card className='p-4' key={toy._id} imgSrc={toy.picture}>
                                            <div className='flex justify-center items-center gap-4'>
                                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    {toy.toy_name}
                                                </h5>
                                                <p className="font-normal text-yellow-400">
                                                    {toy.price}
                                                </p>
                                            </div>
                                            <div className='flex  justify-between items-center gap-4'>
                                                <Button
                                                    onClick={() => addToCart(toy)}
                                                    className="rounded-lg bg-cyan-700  px-2 py-1 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"

                                                >
                                                    <p>
                                                        Add to cart
                                                    </p>
                                                </Button>
                                                <p className="font-normal text-yellow-400">

                                                    <ReactStarsRating className="flex" value={toy.rating}></ReactStarsRating>
                                                </p>
                                            </div>
                                        </Card>
                                    ))
                                }

                            </div>
                        </Tabs.Item>


                        <Tabs.Item title="DC">
                            <div className=' grid grid-cols-1 md:grid-cols-3 max-w-6xl gap-10 mx-auto'>
                                {
                                    allToys.filter(item => item.category === "dc")?.map(toy => (
                                        <Card className='p-4' key={toy._id} imgSrc={toy.picture}>
                                            <div className='flex justify-center items-center gap-4'>
                                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    {toy.toy_name}
                                                </h5>
                                                <p className="font-normal text-yellow-400">
                                                    {toy.price}
                                                </p>
                                            </div>
                                            <div className='flex  justify-between items-center gap-4'>
                                                <Button
                                                    onClick={() => addToCart(toy)}
                                                    className="rounded-lg bg-cyan-700  px-2 py-1 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"

                                                >
                                                    <p>
                                                        Add to cart
                                                    </p>
                                                </Button>
                                                <Rating>
                                                    <Rating.Star />
                                                    <Rating.Star />
                                                    <Rating.Star />
                                                    <Rating.Star />
                                                    <Rating.Star filled={false} />
                                                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                        {toy.rating}
                                                    </p>
                                                </Rating>
                                            </div>
                                        </Card>
                                    ))
                                }
                            </div>
                        </Tabs.Item>
                        <Tabs.Item title="StarWars">
                            <div className=' grid grid-cols-1 md:grid-cols-3 max-w-6xl gap-10 mx-auto'>
                                {
                                    allToys.filter(item => item.category === "starWars")?.map(toy => (
                                        <Card className='p-4' key={toy._id} imgSrc={toy.picture}>
                                            <div className='flex justify-center items-center gap-4'>
                                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    {toy.toy_name}
                                                </h5>
                                                <p className="font-normal text-yellow-400">
                                                    {toy.price}
                                                </p>
                                            </div>
                                            <div className='flex  justify-between items-center gap-4'>
                                                <Button
                                                    onClick={() => addToCart(toy)}
                                                    className="rounded-lg bg-cyan-700 px-2 py-1 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"

                                                >
                                                    <p>
                                                        Add to cart
                                                    </p>
                                                </Button> <Rating>
                                                    <Rating.Star />
                                                    <Rating.Star />
                                                    <Rating.Star />
                                                    <Rating.Star />
                                                    <Rating.Star filled={false} />
                                                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                        {toy.rating}
                                                    </p>
                                                </Rating>
                                            </div>
                                        </Card>
                                    ))
                                }
                            </div>
                        </Tabs.Item>
                    </Tabs.Group>
            }
        </div>
    );
};

export default Tab;
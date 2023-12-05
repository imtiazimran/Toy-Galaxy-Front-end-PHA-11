import { Button, Card, Rating, Tabs } from 'flowbite-react';
import { useEffect, useState } from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';
import useCartPost from '../../CustomHook/useCartPost';
import { HiShoppingCart } from 'react-icons/hi';

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
                                        <Card key={toy._id} imgSrc={toy.picture}>
                                            <div className='flex justify-center div-1 items-center gap-4'>
                                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    {toy.toy_name}
                                                </h5>
                                                <p className="font-normal text-yellow-400">
                                                    {toy.price}
                                                </p>
                                            </div>
                                            <div className='flex justify-between div-2 items-center gap-4'>
                                                <Button
                                                    onClick={() => addToCart(toy)}
                                                >
                                                    <HiShoppingCart className="mr-2 h-5 w-5" />
                                                    <p>
                                                        Buy now
                                                    </p>
                                                </Button>
                                                <div className="mb-5 mt-2.5 flex items-center">
                                                    <ReactStarsRating className="flex w-28" value={toy.rating} />
                                                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semiboldtext-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                                        <p>
                                                            {toy.rating}
                                                        </p>
                                                    </span>
                                                </div>
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
                                                >
                                                    <HiShoppingCart className="mr-2 h-5 w-5" />
                                                    <p>
                                                        Buy now
                                                    </p>
                                                </Button>
                                                <div className="mb-5 mt-2.5 flex items-center">
                                                    <ReactStarsRating className="flex w-28" value={toy.rating} />
                                                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semiboldtext-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                                        <p>
                                                            {toy.rating}
                                                        </p>
                                                    </span>
                                                </div>
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
                                                >
                                                    <HiShoppingCart className="mr-2 h-5 w-5" />
                                                    <p>
                                                        Buy now
                                                    </p>
                                                </Button>
                                                <div className="mb-5 mt-2.5 flex items-center">
                                                    <ReactStarsRating className="flex w-28" value={toy.rating} />
                                                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semiboldtext-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                                        <p>
                                                            {toy.rating}
                                                        </p>
                                                    </span>
                                                </div>
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
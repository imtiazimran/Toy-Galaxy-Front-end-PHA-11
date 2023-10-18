import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useCartGet = () => {
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get("https://toy-market-server-jvo2uifn4-toygalaxy.vercel.app/cart")
            .then(res => {
                setLoading(false)
                setCart(res.data)
            })
    }, [])

    return { cart, loading }; // Return the cart data from the hook
};

export default useCartGet; // Export the hook


import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useCartGet = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        axios.get("https://toy-market-server-liart.vercel.app/cart")
            .then(res => {
                setCart(res.data)
            })
    }, [cart])

    return cart; // Return the cart data from the hook
};

export default useCartGet; // Export the hook


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Components/Authorization/AuthProvider';

const useCartGet = () => {
    const { user } = useContext(AuthContext)
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:9999/cart/${user.email}`)
            .then(res => {
                setLoading(false)
                setCart(res.data)
            })
    }, [])

    return { cart, loading }; // Return the cart data from the hook
};

export default useCartGet; // Export the hook


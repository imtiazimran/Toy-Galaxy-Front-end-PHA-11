import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const useCartPost = () => {
  const [loading, setLoading] = useState(false);

  const addToCart = (item) => {
    setLoading(true);
    axios
      .post("https://toy-market-server-jvo2uifn4-toygalaxy.vercel.app/cart", { ...item, qty: 1 })
      .then((res) => {
        if (res.data.acknowledged) {
          setLoading(false);
          Swal.fire(
            'success!',
            'Added to cart.',
            'success'
          );
        }
      });
  };

  return { loading, addToCart };
};

export default useCartPost;

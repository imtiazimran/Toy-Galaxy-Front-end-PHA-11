import { useContext, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../Components/Authorization/AuthProvider';

const useCartPost = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext)

  const addToCart = (item) => {
    setLoading(true);
    axios
      .post("https://toy-market-server-nvegs8v2y-toygalaxy.vercel.app/cart", { ...item, qty: 1, user: user.email })
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

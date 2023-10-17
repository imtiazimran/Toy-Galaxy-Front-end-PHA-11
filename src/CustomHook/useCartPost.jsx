import axios from 'axios';

const useCartPost = (item) => {
    axios.post("https://toy-market-server-liart.vercel.app/cart", item)
        .then(res => {
            console.log(res.data);
        })
    return;
};

export default useCartPost;
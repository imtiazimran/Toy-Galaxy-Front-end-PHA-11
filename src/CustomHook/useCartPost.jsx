import axios from 'axios';

const useCartPost = (item) => {
    axios.post("https://toy-market-server-1060um1oj-toygalaxy.vercel.app/cart", item)
        .then(res => {
            console.log(res.data);
        })
    return;
};

export default useCartPost;
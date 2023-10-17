import axios from 'axios';

const useCartPost = (item) => {
    axios.post("http://localhost:9999/cart", item)
        .then(res => {
            console.log(res.data);
        })
    return;
};

export default useCartPost;
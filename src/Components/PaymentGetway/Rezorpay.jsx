import axios from "axios"
import { Button } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../Authorization/AuthProvider";

const Rezorpay = ({ amount }) => {
    const { user } = useContext(AuthContext)
    const handlePayment = async () => {
        const initPayment = ({ amount, currency, id }) => {
            const options = {
                key: "rzp_test_Qy64aTScwkjJAj",
                amount: amount,
                currency: currency,
                order_id: id,
                handler: async (response) => {
                    try {
                        const verifyUrl = "http://localhost:3000/api/v1/payments/varify";
                        const { data } = await axios.post(verifyUrl, { ...response, amount: amount });
                        console.log(data);
                    } catch (error) {
                        console.log(error);
                    }
                },
                theme: {
                    color: "#700C15",
                },
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        }

        try {
            const { data } = await axios.post("http://localhost:3000/api/v1/payments/create-order", { amount: parseInt(amount) })
            initPayment(data)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Button onClick={handlePayment} gradientMonochrome="failure">Pay</Button>
        </div>
    )
};

export default Rezorpay;
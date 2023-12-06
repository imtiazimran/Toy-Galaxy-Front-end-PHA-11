import axios from "axios";
import { Button } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../Authorization/AuthProvider";

const Rezorpay = ({ amount }) => {
    const { user } = useContext(AuthContext);

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
                    console.log(data, response);
                } catch (error) {
                    console.log(error);
                }
            },
            "prefill": {
                "name": user.name || "Imran Hossain", // Fallback to default value if user name doesn't exist
                "email": user.email || "Imran.Hossain@example.com", // Fallback to default value if user email doesn't exist
                "contact": user.contact || "9000090000" // Fallback to default value if user contact doesn't exist
            },
            theme: {
                color: "#700C15",
            },
        };
        const razorpayModal = new window.Razorpay(options);
        razorpayModal.open();
        razorpayModal.on('payment.failed', function (response){
            console.log(response.error);
        });
    };

    const handlePayment = async () => {
        try {
            const { data } = await axios.post("http://localhost:3000/api/v1/payments/create-order", { amount: parseInt(amount) });
            initPayment(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Button onClick={handlePayment} gradientMonochrome="failure">Pay</Button>
        </div>
    );
};

export default Rezorpay;

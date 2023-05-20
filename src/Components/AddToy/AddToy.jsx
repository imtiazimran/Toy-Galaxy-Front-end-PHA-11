import { Label, Select, TextInput, Textarea, } from "flowbite-react";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Authorization/AuthProvider";

const AddToy = () => {

    const { user } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const photoLink = form.photoURL.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellarEmail = form.sellarEmail.value;
        const category = form.selected.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const qty = form.qty.value;
        const details = form.details.value;

        const addToy = {
            photoLink,
            name,
            sellerName,
            sellarEmail,
            category,
            price,
            rating,
            qty,
            details
        }

        fetch('http://localhost:9999/insertItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.acknowledged)
                if (data.acknowledged) {
                    toast.success("Item Added Successfully", {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            })
            .catch(error => {
                console.error(error.code);
                toast.error("An error occurred while inserting the data.", {
                    position: toast.POSITION.TOP_CENTER
                });
            });




    }


    return (
        <div className="bg-gradient-to-r from-green-500 to-rose-500">
            <ToastContainer></ToastContainer>
            <form onSubmit={handleSubmit} className=" mx-auto p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input1"
                                value="Your Toy Photo URL"
                            />
                        </div>
                        <TextInput
                            name="photoURL"
                            id="input1"
                            type="text"
                            placeholder="https//www.example.com/img/yourToyPhoto.png"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input2"
                                value="Item Name"
                            />
                        </div>
                        <TextInput
                            name="name"
                            id="input2"
                            type="text"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input3"
                                value="Seller Name"
                            />
                        </div>
                        <TextInput
                            defaultValue={user.displayName}
                            name="sellerName"
                            id="input3"
                            type="text"
                            placeholder="Funco Pops"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input4"
                                value="Seller Email"
                            />
                        </div>
                        <TextInput
                            name="sellarEmail"
                            id="input4"
                            type="email"
                            defaultValue={user.email}
                            required={true}
                        />
                    </div>
                    <div>
                        <div id="select">
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="countries"
                                    value="Select Category"
                                />
                            </div>
                            <Select
                                name="selected"
                                id="countries"
                                required={true}
                            >
                                <option>
                                    Action Figures
                                </option>
                                <option>
                                    Role-Playing
                                </option>
                                <option>
                                    Accessories
                                </option>
                                <option>
                                    Costumes
                                </option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input5"
                                value="Price"
                            />
                        </div>
                        <TextInput
                            name="price"
                            id="input5"
                            type="text"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input6"
                                value="Ratings"
                            />
                        </div>
                        <TextInput
                            name="rating"
                            id="input6"
                            type="text"
                            placeholder="4.7"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input7"
                                value="Available Quantity"
                            />
                        </div>
                        <TextInput
                            name="qty"
                            id="input7"
                            type="text"
                            required={true}
                        />
                    </div>
                </div>
                <div id="textarea">
                    <div className="mb-2 block mt-5">
                        <Label
                            htmlFor="comment"
                            value="Details About The Product"
                        />
                    </div>
                    <Textarea
                        name="details"
                        id="comment"
                        placeholder="Write Something About Your Product . . . . . . . . . ."
                        required={true}
                        rows={4}
                    />
                </div>
                <div className="mb-2 block mt-5">
                    <input className="btn hover:cursor-pointer bg-blue-700 w-full p-3 text-white font-bold rounded md:text-2xl" type="submit" value="Submit" />
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddToy;
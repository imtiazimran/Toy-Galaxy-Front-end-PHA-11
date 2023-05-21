/* eslint-disable react/prop-types */
import { Modal, Button, TextInput, Textarea } from "flowbite-react";

const UpdateToy = ({ toy, onClose, editModalOpen, myToys, setMyToys }) => {


  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target
    const price = form.price.value;
    const qty = form.quantity.value;
    const details = form.description.value
    const updatedValues = {
        price,
        qty,
        details
    }

    fetch(`https://toy-market-server-liart.vercel.app/insertItem/${toy._id}`,{
        method:"PATCH",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({updatedValues})
    })
    .then(res => res.json())
    .then(data =>{
        if(data.modifiedCount > 0){
            const previousData = myToys.filter(preToy => preToy._id !== toy._id)
            const updatedInfo = myToys.find(preToy => preToy._id === toy._id)
            updatedInfo.price = updatedValues.price
            updatedInfo.qty = updatedValues.qty
            updatedInfo.details = updatedValues.details
            const updatedToysData = [updatedInfo, ...previousData]
            setMyToys(updatedToysData)
            console.log(myToys)
        }
    })
    .catch(err =>console.log(err))

    // Perform the necessary actions with the updated toy data
    // For example, send it to an API or update it in the state

    onClose();
  };

  return (
    <Modal show={editModalOpen} size="md" popup={true} onClose={onClose}>
      <Modal.Header>Edit Toy</Modal.Header>
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <label htmlFor="price" className="font-medium text-gray-900 dark:text-white">
                  Price:
                </label>
              </div>
              <TextInput
              defaultValue={toy?.price}
                id="price"
                name="price"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <label htmlFor="quantity" className="font-medium text-gray-900 dark:text-white">
                  Available Quantity:
                </label>
              </div>
              <TextInput
              defaultValue={toy?.qty}
                id="quantity"
                name="quantity"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <label htmlFor="description" className="font-medium text-gray-900 dark:text-white">
                  Detail Description:
                </label>
              </div>
              <Textarea
                id="description"
                name="description"
                defaultValue={toy.details}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" gradientDuoTone="pinkToOrange">
                Save
              </Button>
              <Button onClick={onClose} outline={true} className="ml-2">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateToy;

import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const toyDetails = useLoaderData()
    console.log(toyDetails)
    return (
        <div>
            
        </div>
    );
};

export default ViewDetails;
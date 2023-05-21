/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";


const PriveteRoute = ({children}) => {
    
    const from = useLocation()
    console.log(from)

    const {user, isLoading} = useContext(AuthContext)

    if(user){
        return children
    }

    if(isLoading){
        return <div className="bg-white text-center"><Spinner aria-label="Center-aligned spinner example" /></div>
    }

    return <Navigate to="/login" state={from}></Navigate>;
};

export default PriveteRoute;
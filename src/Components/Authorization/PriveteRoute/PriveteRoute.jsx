/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PriveteRoute = ({children}) => {
    
    const from = useLocation()
    console.log(from)

    const {user} = useContext(AuthContext)

    if(user){
        return children
    }

    return <Navigate to="/login" state={from}></Navigate>;
};

export default PriveteRoute;
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PriveteRoute = ({children}) => {
    
    const from = useLocation()

    const {user, isLoading} = useContext(AuthContext)

    if(user){
        return children
    }

    if(isLoading){
        return <div className="bg-white text-center"><img src="https://cdn.dribbble.com/users/1961926/screenshots/5660764/flash.gif" alt="" /></div>
    }

    return <Navigate to="/login" state={from}></Navigate>;
};

export default PriveteRoute;
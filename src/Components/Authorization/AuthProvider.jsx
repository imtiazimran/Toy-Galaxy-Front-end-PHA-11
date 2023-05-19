/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../../Firebase/firebase.config";

const auth = getAuth(app)
const googleAuthentication = new GoogleAuthProvider(auth)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const registration = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSingIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth,googleAuthentication)
    }

    const logOut = () => signOut(auth)

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setIsLoading(false)
        })
        return () =>{
            return unsubscribe()
        }
    },[isLoading])


    const AuthInfo = {
        user,
        isLoading,
        registration,
        login,
        googleSingIn,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
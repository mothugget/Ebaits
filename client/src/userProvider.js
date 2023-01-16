import { createContext, useState, useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import apiService from './apiService';


const UserContext = createContext()

function UserProvider({ children }) {
    const { user, isAuthenticated, } = useAuth0();
    const [currUser, setCurrUser] = useState({});

    useEffect(()=>{console.log(user); console.log(isAuthenticated)}, []);
    console.log('hello')
    return (
        <UserContext.Provider value={{ currUser }}>
            {children}
        </UserContext.Provider>
    )
}
export { UserContext, UserProvider }
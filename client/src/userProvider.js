import { createContext, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const AuthContext = createContext()

function UserProvider({ children }) {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    
    const [userMetadata, setUserMetadata] = useState({});

    return (
        <UserContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </UserContext.Provider>
    )
}
export { UserContext, UserProvider }
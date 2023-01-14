import { createContext, useState } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthContext, AuthProvider }
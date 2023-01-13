import { createContext, useState } from 'react'

const Context = createContext()

function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <Context.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </Context.Provider>
    )
}
export { Context, AuthProvider }
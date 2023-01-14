import { createContext, useState } from 'react'

const OverlayContext = createContext()

function OverlayProvider({ children }) {
    const [overlay, setOverlay] = useState('Navbar');


    return (
        <OverlayContext.Provider value={{ overlay, setOverlay}}>
            {children}
        </OverlayContext.Provider>
    )
}
export { OverlayContext, OverlayProvider }
import { createContext, useState } from 'react'

const OverlayContext = createContext()

function OverlayProvider({ children }) {
    const [overlay, setOverlay] = useState('Navbar');
    const [deletePost, setDeletePost] = useState({});

    return (
        <OverlayContext.Provider value={{ overlay, setOverlay, deletePost, setDeletePost }}>
            {children}
        </OverlayContext.Provider>
    )
}
export { OverlayContext, OverlayProvider }
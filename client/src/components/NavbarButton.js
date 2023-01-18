import { useContext } from 'react';

import { OverlayContext } from '../overlayProvider'

export default function NavbarButton(props) {

    const { setOverlay } = useContext(OverlayContext);

    function returnToNavbar() {
        setOverlay('Navbar')
    }

    return (
        <button className="navbar-button" onClick={returnToNavbar}> </button>
    )
}
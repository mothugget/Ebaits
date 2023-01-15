import { useState, useEffect, useContext } from 'react';

import { OverlayContext } from '../overlayProvider'

export default function NavbarButton(props) {
    
    const { setOverlay } = useContext(OverlayContext);

    function returnToNavbar() {
        setOverlay('Navbar')
    }

	return (
		<div className="navbar-button" onClick={returnToNavbar}> </div>
	)
}
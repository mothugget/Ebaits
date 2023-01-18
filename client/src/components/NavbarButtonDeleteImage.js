import { useState, useEffect, useContext } from 'react';

import { OverlayContext } from '../overlayProvider'
import apiService from '../apiService';

export default function NavbarButtonDeleteImage(props) {
    
    const { setOverlay } = useContext(OverlayContext);



    function returnToNavbar() {
        apiService.deleteImg(props.imgURL).then(setOverlay('Navbar'))
    }

	return (
		<button className="navbar-button-delete-image" onClick={returnToNavbar}>Cancel</button>
	)
}
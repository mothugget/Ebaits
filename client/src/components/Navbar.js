import { useState, useEffect, useContext } from 'react';

import logo from '../images/default/logo.png';
import hamburger from '../images/default/hamburger.png';
import { ContentContext } from '../contentProvider'
import { OverlayContext } from '../overlayProvider'

export default function Navbar(props) {
	const { setContent, setBlur } = useContext(ContentContext);
	const { setOverlay } = useContext(OverlayContext);

	const homeClick	= () => {
		setContent('Dashboard');
	}

	const hamburgerClick = () => {
		setOverlay('Menu');
		setBlur('Content-blur')
	}

	return (
		<div className="Navbar">
			<div className="header">
				<button className="logo-home-button" onClick={homeClick}>
					<img className="logo-image" src={logo} alt="Ebait logo" />
				</button>
			</div>
			<div className='footer'>
				<button className="hamburger-button" onClick={hamburgerClick}>
					<img className="hamburger-image" src={hamburger} alt="Hamburger menu" />
				</button>
			</div>
		</div>
	)
}
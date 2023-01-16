import { useState, useEffect, useContext } from 'react'

import SearchInput from "./SearchInput";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { ContentContext } from '../contentProvider'
import { OverlayContext } from '../overlayProvider'

export default function Menu(props) {
	const { setContent,  } = useContext(ContentContext);
	const { setOverlay } = useContext(OverlayContext);

	function logIn() {
		
	}

	function register() {
		
	}

	const homeClick = () => {
		setContent('Dashboard');
		setOverlay('Navbar')
	}

	return (
		<div className="Menu">
			<SearchInput/>
			<LoginButton/>
			<LogoutButton/>
			<button onClick={homeClick}>Home</button>
		</div>
	)
}
import { useState, useEffect, useContext } from 'react'
import SearchInput from "./SearchInput";
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
			<button onClick={logIn}>Log in</button>
			<button onClick={register}>Register</button>
			<button onClick={homeClick}>Home</button>
		</div>
	)
}
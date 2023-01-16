import { useState, useEffect, useContext } from 'react'
import { useAuth0 } from "@auth0/auth0-react";


import SearchInput from "./SearchInput";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { ContentContext } from '../contentProvider'
import { OverlayContext } from '../overlayProvider'


export default function Menu(props) {
	const { setContent, } = useContext(ContentContext);
	const { setOverlay } = useContext(OverlayContext);
	const { isAuthenticated } = useAuth0();

	function logIn() {

	}

	function register() {

	}

	const homeClick = () => {
		setContent('Dashboard');
		setOverlay('Navbar')
	}
	
	const createPostClick = () => {
		setOverlay('NewPost')
	}

	return (
		<div className="Menu">
			<SearchInput />
			<LoginButton />
			<LogoutButton />
			{isAuthenticated && <button onClick={createPostClick}>Create post</button>}
			<button onClick={homeClick}>Home</button>
		</div>
	)
}
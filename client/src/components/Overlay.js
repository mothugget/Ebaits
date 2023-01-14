import { useState, useEffect, useContext } from 'react';

import { OverlayContext } from '../overlayProvider'
import Navbar from "./Navbar";
import Menu from './Menu';
import SearchResults from './SearchResults';
import NewPost from './NewPost';
import SignUp from './SignUp';
import LogIn from './LogIn';
import EditUser from './EditUser';
import DeletePrompt from './DeletePrompt';

export default function Overlay(props) {
	const { overlay, setOverlay } = useContext(OverlayContext);

	switch (overlay) {
		case 'Navbar':
			return (
				<div className="Overlay">
					<Navbar />
				</div>
			)
		case 'Menu':
			return (
				<div className="Overlay">
					<Menu />
				</div>
			)
		case 'SearchResults':
			return (
				<div className="Overlay">
					<SearchResults />
				</div>
			)
		case 'NewPost':
			return (
				<div className="Overlay">
					<NewPost />
				</div>
			)
		case 'SignUp':
			return (
				<div className="Overlay">
					<SignUp />
				</div>
			)
		case 'LogIn':
			return (
				<div className="Overlay">
					<LogIn />
				</div>
			)
		case 'EditUser':
			return (
				<div className="Overlay">
					<EditUser />
				</div>
			)
		case 'DeletePrompt':
			return (
				<div className="Overlay">
					<DeletePrompt />
				</div>
			)

	}
}
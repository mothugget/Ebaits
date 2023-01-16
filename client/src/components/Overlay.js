import { useState, useEffect, useContext } from 'react';

import { OverlayContext } from '../overlayProvider'
import Navbar from "./Navbar";
import NavbarButton from './NavbarButton';
import Menu from './Menu';
import NewPost from './NewPost';
import Register from './Register';
import EditUser from './EditUser';
import DeletePrompt from './DeletePrompt';

export default function Overlay(props) {
	const { overlay, setOverlay } = useContext(OverlayContext);

	switch (overlay) {
		case 'Navbar':
			return (
				<div className="Overlay-navbar">
					<Navbar />
				</div>
			)
		case 'Menu':
			return (
				<div className="Overlay">
					<NavbarButton />
					<Menu/>	
				</div>
			)
		case 'NewPost':
			return (
				<div className="Overlay">
					<NewPost />
				</div>
			)
		case 'Register':
			return (
				<div className="Overlay">
					<NavbarButton />
					<Register />
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
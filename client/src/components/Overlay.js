import { useState, useEffect, useContext } from 'react';

import { OverlayContext } from '../overlayProvider'
import Navbar from "./Navbar";
import NavbarButton from './NavbarButton';
import Menu from './Menu';
import NewPost from './NewPost';
import Register from './Register';
import DeletePostPrompt from './DeletePostPrompt';
import DeleteUserPrompt from './DeleteUserPrompt';

export default function Overlay(props) {
	const { overlay } = useContext(OverlayContext);

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
					<NavbarButton />
					<NewPost />
				</div>
			)
		case 'Register':
			return (
				<div className="Overlay">
					<Register />
				</div>
			)
		case 'DeletePostPrompt':
			return (
				<div className="Overlay">
					<NavbarButton />
					<DeletePostPrompt />
				</div>
			)
		case 'DeleteUserPrompt':
			return (
				<div className="Overlay">
					<NavbarButton />
					<DeleteUserPrompt />
				</div>
			)
	}
}
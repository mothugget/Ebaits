import { useState, useEffect, useContext } from 'react';

import { OverlayContext } from '../overlayProvider'
import Navbar from "./Navbar";


export default function Overlay(props) {
	const { overlay, setOverlay } = useContext(OverlayContext);
	console.log(overlay)
	switch (overlay) {
		case 'Navbar':
	return (
		<div className="Overlay">
			<Navbar />
		</div>
	)
	}
}
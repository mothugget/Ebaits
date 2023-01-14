import { useState, useEffect, useContext } from 'react';

import logo from '../images/default/logo.png';
import { ContentContext } from '../contentProvider'

export default function Navbar(props) {
	const { content, setContent } = useContext(ContentContext);

	const homeClick	= () => {
		setContent('Dashboard');
	}

	return (
		<div className="Navbar">
			<div className="header">
				<button className="logo-home-button" onClick={homeClick}>
					<img className="thumbnail-image" src={logo} alt="Ebait logo" />
				</button>
			</div>
			<div className='footer'>

			</div>
		</div>
	)
}
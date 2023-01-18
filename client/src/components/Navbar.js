import { useContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import logo from '../images/default/logo.png';
import hamburger from '../images/default/hamburger.png';
import defaultProfileImg from '../images/default/altProfilePic.jpg'
import apiService from '../apiService';
import { ContentContext } from '../contentProvider'
import { OverlayContext } from '../overlayProvider'
import LoginButton from './LoginButton';

export default function Navbar(props) {
	const {
		setContent,
		setProfile,
		currUser
	} = useContext(ContentContext);
	const { setOverlay } = useContext(OverlayContext);
	const { isAuthenticated } = useAuth0();

	const homeClick = () => {
		setContent('Dashboard');
	}

	const hamburgerClick = () => {
		setOverlay('Menu');
	}

	const image = currUser.picid ||= defaultProfileImg;

	function updateProfile(username) {
		apiService.getProfile(username).then(
			(res) => {
				setProfile(res);
				setContent('Profile');
			}
		)
	}

	return (
		<div className="Navbar">
			<div className="header">
				<button className="logo-home-button" onClick={homeClick}>
					<img className="logo-image" src={logo} alt="Ebait logo" />
				</button>
				{isAuthenticated ?
					<button className='header-profile-button' onClick={() => updateProfile(currUser.username)}>
						<img className='header-profile-button-image' src={image} alt='profile pic' />
					</button>
					: <LoginButton />
				}
			</div>

			{/* 			CONTENT			 */}

			<div className='footer'>
				<button className="hamburger-button" onClick={hamburgerClick}>
					<img className="hamburger-image" src={hamburger} alt="Hamburger menu" />
				</button>
			</div>
		</div>
	)
}
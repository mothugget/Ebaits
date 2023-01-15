import { useState, useContext } from "react";

import apiService from '../apiService'
import { ContentContext } from '../contentProvider'
import { OverlayContext } from '../overlayProvider'

export default function SearchInput(props) {
	const [error, setError] = useState(' ');

	const { setProfile, setContent } = useContext(ContentContext);
	const { setOverlay } = useContext(OverlayContext);

	function handleSubmit(event) {
		event.preventDefault();
		event.target[0].value === '' || 
		apiService.getProfile(event.target[0].value).then(
			(res) => {
				if (res.error) {
					setError(res.error);
				} else {
					setError(' ');
					setOverlay('Navbar');
					setProfile(res);
					setContent('Profile')
				}
			}
		);
	}

	return (
		<div className="SearchInput">
			<form className="seach-form" onSubmit={handleSubmit}>
				<input type="text" name="search" placeholder="Baitmaker" />
				<button type="submit"> Search </button>
			</form>
			<div className="search-error">
				{error}
			</div>
		</div>
	)
}
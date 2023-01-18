import { useContext } from 'react'

import { OverlayContext } from '../overlayProvider'
import { ContentContext } from '../contentProvider';

import apiService from '../apiService'



export default function DeletePrompt(props) {
	const { deletePost, setDeletePost, setOverlay } = useContext(OverlayContext);
	const { profile, setProfile, setContent } = useContext(ContentContext);

	function updateProfile(username) {
		apiService.getProfile(username).then(
			(res) => {
				setOverlay('Navbar');
				setProfile(res);
				setContent('Profile');
			}
		)
	}

	function returnToNavbar() {
		setOverlay('Navbar')
	}

	function confirmDeleteClick() {
		apiService.deletePost(deletePost)
			.then((res) => {
				setDeletePost({});
				updateProfile(profile.username)
			})
			.catch((err) => updateProfile(profile.username))
	}

	return (
		<div className="DeletePostPrompt Menu">
			<h3 className="title-text"> Are you sure you want to delete this post? </h3>
			<button className="confirm-delete" onClick={confirmDeleteClick}>Delete post</button>
			<button onClick={returnToNavbar}>Cancel</button>
		</div>
	)
}
import { useContext } from 'react'

import { OverlayContext } from '../overlayProvider'
import { ContentContext } from '../contentProvider';

import apiService from '../apiService'


export default function DeletePrompt(props) {
	const { deletePost, setOverlay } = useContext(OverlayContext);
	const { setContent } = useContext(ContentContext);

	function confirmDeleteClick(){
		apiService.deletePost(deletePost)
		.then(
			setContent('Dashboard'),
			setOverlay('Navbar'),
		)
	}

	return (
		<div className="DeletePrompt Menu">
			<h3 className="title-text"> Are you sure you want to delete this post? </h3>
			<button className="confirm-delete">Delete post</button>
		</div>
	)
}
import { useContext, useState } from 'react';

import countries from '../countries';
import apiService from '../apiService'
import LogoutButton from './LogoutButton'
import { ContentContext } from '../contentProvider';
import { OverlayContext } from '../overlayProvider';

export default function NewPost(props) {
	const [error, setError] = useState('')

	const {
		currUser,
		setPost,
		setContent
	} = useContext(ContentContext);
	const { setOverlay } = useContext(OverlayContext);

	function handleSubmit(event) {

		event.preventDefault();

		const newPost = {
			newPost: {
				user: currUser._id,
				name: event.target[0].value,
				type: event.target[1].value,
				length: event.target[2].value,
				weight: event.target[3].value,
				imgid: [],
			}
		}
		apiService.createPost(newPost)
			.then(res => {
				setPost(res);
				setContent('Post');
				setOverlay('Navbar');
			})
	}

	return (
		<div className="NewPost Menu">
			<form className='post-form' onSubmit={handleSubmit}>
				<div className='title-text'>Post your bait</div>
				<input type="text" name='Name' placeholder='Name' />
				<input type="text" name='Type' placeholder='Type' />
				<input type="number" name='Length' placeholder='Length (cm)' />
				<input type="number" name='Weight' placeholder='Weight (g)' />
				<button type="submit"> Create post </button>
			</form>
		</div>
	)
}
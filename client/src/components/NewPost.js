import { useContext, useState } from 'react';


import apiService from '../apiService'
import { ContentContext } from '../contentProvider';
import { OverlayContext } from '../overlayProvider';
import UploadWidget from './UploadWidget';

export default function NewPost(props) {
	const [imageURL, setImageURL] = useState('')

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
				imgid: [imageURL],
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
			<div className='title-text'>Post your bait</div>
			<UploadWidget setImageURL={setImageURL} />
			<form className='post-form' onSubmit={handleSubmit}>
				<input type="text" name='Name' placeholder='Name' />
				<input type="text" name='Type' placeholder='Type' />
				<input type="number" name='Length' placeholder='Length (cm)' />
				<input type="number" name='Weight' placeholder='Weight (g)' />
				<button type="submit"> Create post </button>
			</form>
		</div>
	)
}
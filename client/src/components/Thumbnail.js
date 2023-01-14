import { useState, useEffect, useContext } from 'react';

import defaultThumbnailImg from '../images/default/altPostImg.jpg'
import { ContentContext } from '../contentProvider'

export default function Thumbnail(props) {
	const { setContent, setPost} = useContext(ContentContext);
	const thumbnailClick = () => {
		setContent('Post');
		setPost(props.post);
	}

	return (
		<div className="Thumbnail">
			<button className='thumbnail-button' onClick={thumbnailClick}>
				{props.post.country}
				<img className="thumbnail-image" src={defaultThumbnailImg} alt="Thumbnail" />
			</button>
		</div>
	)
}
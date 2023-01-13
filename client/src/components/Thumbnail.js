import { useState, useEffect, useContext } from 'react';

import defaultThumbnailImg from '../images/default/altPostImg.jpg'
import { ContentContext } from '../contentProvider'

export default function Thumbnail(props) {
	const { content, setContent, setPostId} = useContext(ContentContext);
	const thumbnailClick = () => {
		setContent('Post');
		setPostId(props.postId);
	}

	return (
		<div className="Thumbnail">
			<button className='thumbnail-button' onClick={thumbnailClick}>
				{props.postId}
				<img className="thumbnail-image" src={defaultThumbnailImg} alt="Thumbnail image" />
			</button>
		</div>
	)
}
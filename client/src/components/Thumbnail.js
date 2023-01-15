import { useState, useEffect, useContext } from 'react';

import defaultThumbnailImg from '../images/default/altPostImgBlack.jpg'
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
				<img className="thumbnail-image" src={defaultThumbnailImg} alt="Thumbnail" />
				<div className='country-emoji'>{props.post.user.country}</div>
			</button>
		</div>
	)
}
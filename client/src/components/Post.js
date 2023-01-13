import { useState, useEffect, useContext } from 'react';

import defaultThumbnailImg from '../images/default/altPostImg.jpg'
import { ContentContext } from '../contentProvider'

export default function Post(props) {
	const { content, setContent, postId, setProfileId } = useContext(ContentContext);

	return (
		<div className="Post">
			{postId}
			<img className="post-image" src={defaultThumbnailImg} alt="Thumbnail image" />
		</div>
	)
}
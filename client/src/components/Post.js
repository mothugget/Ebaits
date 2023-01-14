import { useState, useEffect, useContext } from 'react';

import defaultThumbnailImg from '../images/default/altPostImg.jpg'
import { ContentContext } from '../contentProvider'

export default function Post(props) {
	const { setContent, post, setProfileId } = useContext(ContentContext);

	return (
		<div className="Post">
			{post.user.country}
			<img className="post-image" src={defaultThumbnailImg} alt="Post" />
		</div>
	)
}
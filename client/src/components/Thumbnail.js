import { useState, useEffect, useContext } from 'react';

import countries from '../countries'
import defaultThumbnailImg from '../images/default/altPostImg.jpg'
import { ContentContext } from '../contentProvider'

export default function Thumbnail(props) {
	const { setContent, setPost} = useContext(ContentContext);
	const thumbnailClick = () => {
		setContent('Post');
		setPost(props.post);
	}

	// getFlagEmoji function yoinked from https://dev.to/jorik/country-code-to-flag-emoji-a21

	function getFlagEmoji(countryCode) {
		const codePoints = countryCode
			.toUpperCase()
			.split('')
			.map(char => 127397 + char.charCodeAt());
		return String.fromCodePoint(...codePoints);
	}
	
	let emoji = getFlagEmoji(countries[props.post.user.country])
	
	return (
		<div className="Thumbnail">
			<button className='thumbnail-button' onClick={thumbnailClick}>
				<img className="thumbnail-image" src={defaultThumbnailImg} alt="Thumbnail" />
				{props.source==='dash'&&<div className='country-emoji'>{emoji}</div>}
			</button>
		</div>
	)
}
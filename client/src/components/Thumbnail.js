import { useContext } from 'react';

import countries from '../utils/countries'
import defaultThumbnailImg from '../images/default/altPostImg.jpg'
import DeletePostButton from './DeletePostButton';
import { ContentContext } from '../contentProvider'

export default function Thumbnail(props) {
	const {
		setContent,
		setPost,
		profile,
		currUser
	} = useContext(ContentContext);
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
	const image = props.post.imgid[0] ||= defaultThumbnailImg;

	let emoji = props.source === 'dash' && getFlagEmoji(countries[props.post.user.country])

	return (
		<div className="Thumbnail">

			<button className='thumbnail-button' onClick={thumbnailClick}>
				<img className="thumbnail-image" src={image} alt="Thumbnail" />
				{props.source === 'dash' && <div className='country-emoji'>{emoji}</div>}
			</button>
			{props.source !== 'dash' && profile._id === currUser._id && <DeletePostButton post={props.post} />}
		</div>
	)
}
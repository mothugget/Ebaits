import { useContext } from 'react';

import defaultProfileImg from '../images/default/altProfilePic.jpg'
import { ContentContext } from '../contentProvider'

import ThumbnailList from './ThumbnailList';


export default function Profile(props) {
	const { profile } = useContext(ContentContext);

	const image = profile.picid ||= defaultProfileImg;
	return (
		<div className="Profile">
			<div className="profile-info-container">
				<img className='profile-image' src={image} alt='profile' />
				<div className='profile-info'>
					<span className='title-text'>{profile.username}</span> <br /><br />
					<span className='category-text'>Country: </span> {profile.country} <br />
				</div>
			</div>
			<ThumbnailList posts={profile.posts}/>
		</div>
	)
}
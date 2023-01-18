import { useContext, useState } from 'react';

import countries from '../utils/countries';
import apiService from '../apiService'
import LogoutButton from './LogoutButton'
import UploadWidget from './UploadWidget';
import { ContentContext } from '../contentProvider';
import { OverlayContext } from '../overlayProvider';


export default function Register(props) {
	const [error, setError] = useState('')
	const [imageURL, setImageURL] = useState('')

	const {
		currUser, setCurrUser,
		setProfile,
		setContent
	} = useContext(ContentContext);
	const { setOverlay } = useContext(OverlayContext);



	function handleSubmit(event) {
		event.preventDefault();
		setError('');
		const newUser = {
			newUser: {
				username: event.target[0].value,
				email: currUser.email,
				country: event.target[1].value,
				posts: [],
				picid: imageURL
			},
		}
		newUser.newUser.username ?
			apiService.createUser(newUser)
				.then(res => {
					if(res.username){
						setCurrUser(res);
						setProfile(res);
						setContent('Profile');
						setOverlay('Navbar')

					}else{
						setError('Username taken')
					}
				})
			: setError('You need a username');
	}
	return (
		<div className="Register Menu" >
			{imageURL && <img src={imageURL} className={'uploaded-image'} alt='uploaded image' />}
			<div className='title-text'>Register</div>
			<UploadWidget setImageURL={setImageURL}/>
			<form className='registration-form' onSubmit={handleSubmit}>

				<input type="text" name='Username' placeholder='Username' />
				<select name='Country' placeholder='Country'>
					{Object.keys(countries).map(el => {
						return <option key={el} value={el}>
							{el}
						</option>
					})}
				</select>
				<div className='register-error'>{error}</div>
				<button type="submit"> Create User </button>
				<LogoutButton />
			</form>
		</div>
	)
}
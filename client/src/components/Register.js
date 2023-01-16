import { useContext } from 'react';
import countryCodes from 'country-codes-list'

import apiService from '../apiService'
import LogoutButton from './LogoutButton'
import { ContentContext } from '../contentProvider';

export default function Register(props) {

	const { currUser } = useContext(ContentContext);

	const countryCodesObject = countryCodes.customList('countryNameEn', '{countryCode}')

	function handleSubmit(event) {
		event.preventDefault();
		const newUser = {
			newUser: {
				username: event.target[0].value,
				email: currUser.email,
				country: event.target[1].value,
				posts: [],
				picid: ''
			}
		}
		console.log(newUser)

	}
	return (
		<div className="Register" className="Menu" >
			<form className='registration-form' onSubmit={handleSubmit}>
				<div className='title-text'>Register</div>
				<input type="text" name='Username' placeholder='Username' />
				<select name='Country' placeholder='Country'>
					{Object.keys(countryCodesObject).map(el => {
						return <option key ={el} value={countryCodesObject[el]}>
							{el}
						</option>
					})}
				</select>
				<button type="submit"> Create User </button>
				<LogoutButton />
			</form>
		</div>
	)
}
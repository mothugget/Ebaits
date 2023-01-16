import countryCodes from 'country-codes-list'

import LogoutButton from './LogoutButton'

export default function Register(props) {

	const countryCodesObject = countryCodes.customList('countryNameEn', '{countryCode}')
	return (
		<div className="Register" className="Menu">
			<form className='registration-form' >
				<div className='title-text'>Register</div>
				<input type="text" placeholder='Username'/>
				<input type="text" placeholder='Country'/>
				<button type="submit"> Create User </button>
				<LogoutButton/>
			</form>
		</div>
	)
}
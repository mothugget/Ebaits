const countryCodes = require('country-codes-list')

export default function SignUp(props) {

	const countryCodesObject = countryCodes.customList('countryNameEn', '{countryCode}')
	console.log(countryCodesObject)
	return (
		<div className="SignUp">SignUp</div>
	)
}
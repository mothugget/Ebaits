import logo from '../images/default/altPostImg.jpg';
// import logo from '/Users/karlfredriksson/ebaitSoloProject/Ebaits/client/src/images/default/altPostImg.jpg'

export default function Navbar(props) {
	return (
		<div className="Navbar">
			<div className="header">
				<button className="logo-home-button">
					<img scr={logo} alt="Ebait logo"/>
				</button>
			</div>
			<div className='footer'>

			</div>
		</div>
	)
}
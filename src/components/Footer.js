import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container footer-container'>
				<p className='company-name'>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>
				<div className='footer-icons'>
					<FontAwesomeIcon icon={faTwitter} color='white' className='twitter' />
					<FontAwesomeIcon icon={faFacebook} color='white' />
				</div>
			</div>
		</footer>
	);
};

export default Footer;

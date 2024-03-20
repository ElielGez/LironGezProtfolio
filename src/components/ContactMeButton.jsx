import constants from '../util/constants';
import Button from './Button';

const ContactMeButton = () => {
	return (
		<Button className='contact-me-btn' onClick={() => window.open(constants.myEmail)}>
			Contact Me
		</Button>
	);
};
export default ContactMeButton;

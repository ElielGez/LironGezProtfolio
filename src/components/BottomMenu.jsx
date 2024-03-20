import GradientBase from './GradientBase';
import './BottomMenu.scss';
import Linkedin from '../assets/linkedin.svg?react';
import Gmail from '../assets/gmail.svg?react';
import constants from '../util/constants';

const menuItems = [
	{
		name: <Linkedin />,
		onClick: () => window.open(constants.myLinkedin),
	},
	{
		name: <Gmail />,
		onClick: () => window.open(constants.myEmail),
	},
];
const BottomMenu = () => {
	return (
		<GradientBase className={'bottom-menu'} borderSize='2' borderRadius='290px' innerTransparent>
			{menuItems.map((item, index) => (
				<div key={index} className={`menu-item selected`} onClick={item.onClick}>
					{item.name}
				</div>
			))}
		</GradientBase>
	);
};
export default BottomMenu;

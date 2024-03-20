import GradientBase from './GradientBase';
import './BottomMenu.scss';
import constants from '../util/constants';
import RenderImageAsset from './RenderImageAsset';

const menuItems = [
	{
		name: <RenderImageAsset name={'linkedin.svg'} />,
		onClick: () => window.open(constants.myLinkedin),
	},
	{
		name: <RenderImageAsset name={'gmail.svg'} />,
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

import { useLocation, useNavigate } from 'react-router-dom';
import GradientBase from './GradientBase';
import './Menu.scss';
import { useLayoutContext } from '../contexts/LayoutContext';
import RenderImageAsset from './RenderImageAsset';

const menuItems = [
	{
		name: 'Home',
		page: '/',
	},
	{
		name: 'Projects',
		page: ['/projects/recipeit', '/projects/babysitter', '/projects/teperberg'],
	},
	{
		name: 'About',
		page: '/about',
	},
	{
		name: 'CV',
		page: '/cv',
	},
];
const Menu = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { deviceMode } = useLayoutContext();
	const menuItemsRender = menuItems.map(item => {
		const isArray = Array.isArray(item.page);
		return (
			<div
				key={item.name}
				className={`menu-item ${
					(
						isArray
							? item.page.some(page => page.includes(location.pathname) && location.pathname.length > 1)
							: location.pathname === item.page
					)
						? 'selected'
						: ''
				}`}
				onClick={() => navigate(Array.isArray(item.page) ? item.page[0] : item.page)}>
				<span>{item.name}</span>
			</div>
		);
	});
	return (
		<GradientBase className={`menu ${deviceMode || ''}`} borderSize='2' borderRadius='290px' innerTransparent>
			{deviceMode === 'mobile' ? <RenderImageAsset name={'humburger.svg'} className='menu-item selected' /> : menuItemsRender}
		</GradientBase>
	);
};
export default Menu;

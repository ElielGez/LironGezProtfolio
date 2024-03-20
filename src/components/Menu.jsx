import { useLocation, useNavigate } from 'react-router-dom';
import GradientBase from './GradientBase';
import './Menu.scss';
import { useLayoutContext } from '../contexts/LayoutContext';
import Humburger from '../assets/humburger.svg?react';

const menuItems = [
	{
		name: 'Home',
		page: '/',
	},
	{
		name: 'Projects',
		page: '/projects',
	},
	{
		name: 'About',
		page: '/about',
	},
];
const Menu = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { deviceMode } = useLayoutContext();
	const menuItemsRender = menuItems.map(item => (
		<div key={item.name} className={`menu-item ${location.pathname === item.page ? 'selected' : ''}`} onClick={() => navigate(item.page)}>
			<span>{item.name}</span>
		</div>
	));
	return (
		<GradientBase className={`menu ${deviceMode || ''}`} borderSize='2' borderRadius='290px' innerTransparent>
			{deviceMode === 'mobile' ? <Humburger className='menu-item selected' /> : menuItemsRender}
		</GradientBase>
	);
};
export default Menu;

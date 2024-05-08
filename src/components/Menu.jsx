import { useLocation, useNavigate } from 'react-router-dom';
import GradientBase from './GradientBase';
import './Menu.scss';
import { useLayoutContext } from '../contexts/LayoutContext';
import RenderImageAsset from './RenderImageAsset';
import MenuSelect from './MenuSelect';
import { useRef } from 'react';
import { dialogClsoeByBackdrop } from '../util/functions';

const menuItems = [
	{
		name: 'Home',
		page: '/',
	},
	{
		name: 'Projects',
		page: '/projects/recipeit',
		pages: [
			{
				label: 'Recipe It',
				value: '/projects/recipeit',
			},
			{ label: 'BabySitter', value: '/projects/babysitter' },
			{ label: 'Teperberg', value: '/projects/teperberg' },
		],
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
	const dialogRef = useRef();
	const openDialog = () => {
		dialogRef.current.showModal();
	};

	const menuItemsRender = menuItems.map(item => {
		const isArray = Array.isArray(item.pages);
		return (
			<div
				key={item.name}
				className={`menu-item ${
					(
						isArray
							? item.pages.some(item => item.value.includes(location.pathname) && location.pathname.length > 1)
							: location.pathname === item.page
					)
						? 'selected'
						: ''
				}${isArray ? ' menu-select' : ''}`}
				onClick={() => !isArray && navigate(item.page)}>
				<span>
					{item.name} {isArray && <RenderImageAsset name='arrow-down.svg' />}
				</span>
				{isArray && <MenuSelect items={item.pages} />}
			</div>
		);
	});
	return (
		<>
			<GradientBase className={`menu ${deviceMode || ''}`} borderSize='2' borderRadius='290px' innerTransparent>
				{deviceMode === 'mobile' ? (
					<RenderImageAsset name={'humburger.svg'} onClick={openDialog} className='menu-item selected' />
				) : (
					menuItemsRender
				)}
			</GradientBase>
			{deviceMode === 'mobile' && (
				<dialog
					className='mobile-menu-dialog slide-down'
					ref={dialogRef}
					onClick={event => {
						dialogClsoeByBackdrop(dialogRef, event);
					}}>
					<div className='mobile-menu'>
						<RenderImageAsset name='close.svg' className='close-icon' onClick={() => dialogRef.current.close()} />
						<div className='items'>
							{menuItems.map((item, index) => {
								return (
									<div
										key={index}
										onClick={() => {
											navigate(item.page);
											dialogRef.current.close();
										}}>
										{item.name}
									</div>
								);
							})}
						</div>
					</div>
				</dialog>
			)}
		</>
	);
};
export default Menu;

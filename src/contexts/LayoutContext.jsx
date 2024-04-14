import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { isTablet, isMobile } from 'react-device-detect';
import { useLocation } from 'react-router-dom';
import Menu from '../components/Menu';
import ContactMeButton from '../components/ContactMeButton';
import BottomMenu from '../components/BottomMenu';
import RenderImageAsset from '../components/RenderImageAsset';

const LayoutContext = createContext({});
const MOBILE_BREAKPOINT = 800;
const calculateDeviceModeByWidth = () => {
	if (window.outerWidth <= MOBILE_BREAKPOINT || window.innerWidth <= MOBILE_BREAKPOINT || isMobile) return 'mobile';
	else if (isTablet) return 'tablet';
	return 'desktop';
};

const LayoutContextProvider = ({ children }) => {
	const [deviceMode, setDeviceMode] = useState();
	const [orientation, setOrientation] = useState();
	const location = useLocation();
	const handleWindowResize = () => {
		const mode = calculateDeviceModeByWidth();
		if (mode === 'mobile') {
			document.body.classList.add('mobile');
			document.body.classList.remove('desktop');
			document.documentElement.style.setProperty(`--max-width`, '375px');
		} else {
			document.body.classList.add('desktop');
			document.body.classList.remove('mobile');
			document.documentElement.style.setProperty(`--max-width`, '1440px');
		}
		setDeviceMode(mode);
	};
	const updateOrientation = matches => {
		if (matches) {
			setOrientation('portrait');
		} else {
			setOrientation('landscape');
		}
	};
	useEffect(() => {
		const portrait = window.matchMedia('(orientation: portrait)');
		handleWindowResize();
		updateOrientation(portrait.matches);
		portrait.addEventListener('change', e => updateOrientation(e.matches));
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
			portrait.removeEventListener('change', updateOrientation);
		};
	}, []);
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);
	return (
		<LayoutContext.Provider value={{ deviceMode }}>
			{(orientation === 'portrait' && deviceMode === 'tablet') || (orientation === 'landscape' && deviceMode === 'mobile') ? (
				<div className='centered-absoulte'>
					<RenderImageAsset name={'rotate-tablet.png'} />
				</div>
			) : (
				<>
					<div className={`header ${deviceMode || ''}`}>
						<Menu />
						{deviceMode !== 'mobile' && <ContactMeButton />}
					</div>
					<div className='content'>{children}</div>
					<div className='footer'>
						<BottomMenu />
					</div>
				</>
			)}
		</LayoutContext.Provider>
	);
};
export default LayoutContextProvider;

export const useLayoutContext = () => useContext(LayoutContext);

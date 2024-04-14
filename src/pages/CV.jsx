import ContactMeButton from '../components/ContactMeButton';
import RenderImageAsset, { useRenderImageManifest } from '../components/RenderImageAsset';
import { useLayoutContext } from '../contexts/LayoutContext';
import { downloadFile } from '../util/functions';
import './CV.scss';
import './shared.scss';

const CV = () => {
	const { deviceMode } = useLayoutContext();
	const { getAsset } = useRenderImageManifest();
	const cvLink = getAsset('liron-gez-cv.pdf');
	return (
		<div className='CV'>
			<div className='intro padding-left'>
				{deviceMode === 'desktop' && <RenderImageAsset name={'spark2.svg'} className='big-title-with-spark' />}
				<h1>CV</h1>
				<div className='overlay-container' style={{ marginBottom: '40px' }}>
					<div className='overlay'>
						<div onClick={() => window.open(cvLink, '_blank')}>
							<RenderImageAsset name={'open.svg'} />
							<div className='title'>Open in new tab</div>
						</div>
						<div onClick={() => downloadFile(cvLink, 'Liron Gez CV.pdf')}>
							<RenderImageAsset name={'download.svg'} />
							<div className='title'>Download</div>
						</div>
					</div>
					<RenderImageAsset className='main-img' name={'CV.png'} />
				</div>
				<ContactMeButton />
			</div>
			<RenderImageAsset name={'about.png'} className='illustration1' />
		</div>
	);
};
export default CV;

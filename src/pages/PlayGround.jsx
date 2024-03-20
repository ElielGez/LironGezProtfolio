import GradientBase from '../components/GradientBase';
import RenderImageAsset from '../components/RenderImageAsset';
const PlayGround = () => {
	return (
		<div style={{ display: 'flex', gap: '30px' }}>
			<RenderImageAsset name={'star.svg'} />
			<RenderImageAsset name={'press.svg'} />
			<RenderImageAsset name={'humburger.svg'} />
			<RenderImageAsset name={'spark1.svg'} />
			<RenderImageAsset name={'bubble1.png'} />
			<GradientBase
				borderSize='1.5'
				borderRadius='72px'
				style={{ width: '170px', height: '55px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				Concat Me
			</GradientBase>
			<GradientBase
				borderSize='1.5'
				borderRadius='290px'
				innerTransparent
				style={{
					width: '415px',
					height: '55px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				Home
			</GradientBase>
			<GradientBase
				borderSize='2'
				borderRadius='50px'
				innerTransparent
				reverseGradients
				style={{
					width: '56px',
					height: '56px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				1
			</GradientBase>
		</div>
	);
};

export default PlayGround;

import GradientBase from '../components/GradientBase';
import Star from '../assets/star.svg?react';
import Press from '../assets/press.svg?react';
import Humburger from '../assets/humburger.svg?react';
import Spark1 from '../assets/spark1.svg?react';
import bubble1 from '../assets/bubble1.png';
const PlayGround = () => {
	return (
		<div style={{ display: 'flex', gap: '30px' }}>
			<Star />
			<Press />
			<Humburger />
			<Spark1 />
			<img src={bubble1} />
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

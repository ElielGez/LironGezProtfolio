import './Home.scss';
import Star from '../assets/star.svg?react';
import Spark1 from '../assets/spark1.svg?react';
import Spark2 from '../assets/spark2.svg?react';
import One from '../assets/1.svg?react';
import Two from '../assets/2.svg?react';
import Three from '../assets/3.svg?react';
import GradientBase from '../components/GradientBase';
import ContactMeButton from '../components/ContactMeButton';
import { useLayoutContext } from '../contexts/LayoutContext';

const Home = () => {
	const { deviceMode } = useLayoutContext();
	const steps = [
		{
			title: 'Step 1: Product design Research',
			text: 'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.',
			icon: <One />,
		},
		{
			title: 'Step 2: Design planning & wireframes',
			text: 'The second step involves defining the goal, and planning the architecture and information hierarchy and creating the wireframes.',
			icon: <Two />,
		},
		{
			title: 'Step 3: UI design in figma',
			text: 'The third step involves the final design- clean and minimalistic design and intuitive prototyping. ',
			icon: <Three />,
		},
	];
	return (
		<div className='home'>
			<div className='intro padding-left'>
				<Spark2 className='big-title-with-spark' />
				<div className='hey'>Hi, I’m Liron</div>
				<h1 className='ux-ui'>UX/UI designer</h1>
				<h4 className='design'>Design for the magic of a user-first experience, combined with clean and minimalistic design.</h4>
				<ContactMeButton />
			</div>
			<div className='line'></div>
			<div className='tools'>
				<Star />
				<div>Figma</div>
				<Star />
				<div>Photoshop</div>
				<Star />
				<div>illustrator</div>
				<Star />
			</div>
			<div className='line'></div>
			<div className='process padding-left'>
				<div className='title-with-icon'>
					<h3>My process to design</h3>
					<Spark1 />
				</div>
				<div className='steps'>
					{steps.map((step, index) => {
						return (
							<div key={index} className='step'>
								<div className='left'>
									<GradientBase
										borderSize='2'
										borderRadius='50px'
										innerTransparent
										reverseGradients
										style={{
											width: deviceMode === 'desktop' ? '56px' : '37px',
											height: deviceMode === 'desktop' ? '56px' : '37px',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
										}}>
										{step.icon}
									</GradientBase>
									<div className='line'></div>
								</div>
								<div className='right'>
									<h4>{step.title}</h4>
									<h5>{step.text}</h5>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='work-together padding-left'>
				<div className='title'>
					<div className='title-with-icon'>
						<h3>{`Let's work together!`}</h3>
						<Spark1 />
					</div>
					<h6>If you’re looking for an ambitious designer-I’d like to hear from you!</h6>
				</div>
				<ContactMeButton />
			</div>
		</div>
	);
};

export default Home;

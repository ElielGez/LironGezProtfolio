import './Home.scss';
import './shared.scss';
import GradientBase from '../components/GradientBase';
import ContactMeButton from '../components/ContactMeButton';
import { useLayoutContext } from '../contexts/LayoutContext';
import RenderImageAsset from '../components/RenderImageAsset';
import { useState } from 'react';
import { useLongPress } from 'use-long-press';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const { deviceMode } = useLayoutContext();
	const navigate = useNavigate();
	const [activeProject, setActiveProject] = useState();
	const longPressBind = useLongPress(
		(event, { context }) => {
			setActiveProject(context);
		},
		{
			onFinish: () => setActiveProject(),
			onCancel: () => setActiveProject(),
			threshold: 100, // In milliseconds
			captureEvent: true, // Event won't get cleared after React finish processing it
			cancelOnMovement: 25, // Square side size (in pixels) inside which movement won't cancel long press
			cancelOutsideElement: true, // Cancel long press when moved mouse / pointer outside element while pressing
			detect: 'pointer', // Default option
		},
	);
	const steps = [
		{
			title: 'Step 1: Product design Research',
			text: 'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.',
			icon: <RenderImageAsset name={'1.svg'} />,
		},
		{
			title: 'Step 2: Design planning & wireframes',
			text: 'The second step involves defining the goal, and planning the architecture and information hierarchy and creating the wireframes.',
			icon: <RenderImageAsset name={'2.svg'} />,
		},
		{
			title: 'Step 3: UI design in figma',
			text: 'The third step involves the final design- clean and minimalistic design and intuitive prototyping. ',
			icon: <RenderImageAsset name={'3.svg'} />,
		},
	];
	const projects = [
		{
			title: 'Recipe it',
			text: 'A convenient application for easily uploading and searching recipes',
			backgroundImage: 'reciepe-it-scene.png',
			onClick: () => navigate('/projects/recipeit'),
		},
		{
			title: 'BabySitter',
			text: 'Secure app for searching a babysitter',
			backgroundImage: 'babysitter-scene.png',
			onClick: () => navigate('/projects/babysitter'),
		},
		{
			title: 'Teperberg',
			text: 'Vision collection by Teperberg winery',
			subtext: '*Redesign',
			backgroundImage: 'teperberg-scene.png',
			onClick: () => navigate('/projects/teperberg'),
		},
	];
	return (
		<div className='home template1'>
			<div className='intro padding-left'>
				<RenderImageAsset name={'spark2.svg'} className='big-title-with-spark' />
				<div className='hey'>Hi, I’m Liron</div>
				<h1 className='title'>UX/UI designer</h1>
				<h4 className='subtitle'>Design for the magic of a user-first experience, combined with clean and minimalistic design.</h4>
				<ContactMeButton />
			</div>
			<div className='line'></div>
			<div className='tools'>
				<RenderImageAsset name={'star.svg'} />
				<div>Figma</div>
				<RenderImageAsset name={'star.svg'} />
				<div>Photoshop</div>
				<RenderImageAsset name={'star.svg'} />
				<div>illustrator</div>
				<RenderImageAsset name={'star.svg'} />
			</div>
			<div className='line'></div>
			<div className='process padding-left'></div>
			{/* <div className='process padding-left'>
				<div className='title-with-icon'>
					<h3>My process to design</h3>
					<RenderImageAsset name={'spark1.svg'} />
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
			</div> */}
			<div className='projects padding-left'>
				<div className='title-with-icon'>
					<h3>Some Featured projects</h3>
					<RenderImageAsset name={'spark1.svg'} />
				</div>
				<div className='boxes'>
					{projects.map((project, index) => {
						return (
							<div
								key={index}
								className={`box ${project.title === activeProject ? 'active' : ''}`}
								onClick={project.onClick}
								{...longPressBind(project.title)}>
								<RenderImageAsset className='bubble-icon' name={`bubble${index + 1}.png`} />
								<h2>{project.title}</h2>
								<h5>{project.text}</h5>
								{project.subtext && <h6>{project.subtext}</h6>}
								{deviceMode !== 'desktop' && <RenderImageAsset className='press-icon' name={'press.svg'} />}
								<div className={`anim-scene`}>
									<RenderImageAsset name={project.backgroundImage} />
								</div>
								<div className='scene-gradient'></div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='work-together padding-left'>
				<div className='title'>
					<div className='title-with-icon'>
						<h3>{`Let's work together!`}</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<h6>If you’re looking for an ambitious designer-I’d like to hear from you!</h6>
				</div>
				<ContactMeButton />
			</div>
		</div>
	);
};

export default Home;

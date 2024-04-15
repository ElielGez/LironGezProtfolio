import './shared.scss';
import RenderImageAsset from '../components/RenderImageAsset';
import Button from '../components/Button';
import { useRef, useState } from 'react';
import { dialogClsoeByBackdrop } from '../util/functions';
import { useNavigate } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Babysitter = () => {
	const navigate = useNavigate();
	const [selectedPersona, setSelectedPersona] = useState();
	const dialogRef = useRef();
	const openDialog = persona => {
		setSelectedPersona(persona);
		dialogRef.current.showModal();
	};
	return (
		<div className='babysitter template1'>
			<div className='intro padding-left'>
				<RenderImageAsset name={'spark2.svg'} className='big-title-with-spark' />
				<h1 className='title'>Babysitter</h1>
				<h4 className='subtitle'>Secure app for searching a babysitter</h4>
				<Button
					onClick={() =>
						window.open(
							'https://www.figma.com/proto/EdQjtTyYe44GVz8QDj0yzZ/BabySitter-app?type=design&node-id=139-142&t=blwwDsKUYc5QH0B5-1&scaling=scale-down&page-id=126%3A1691&starting-point-node-id=139%3A142',
							'_blank',
						)
					}>
					Prototype
				</Button>
			</div>
			<div className='line'></div>
			<div className='tools'>
				<RenderImageAsset name={'star.svg'} />
				<div>Secure</div>
				<RenderImageAsset name={'star.svg'} />
				<div>Immediately</div>
				<RenderImageAsset name={'star.svg'} />
				<div>Vetted</div>
				<RenderImageAsset name={'star.svg'} />
			</div>
			<div className='line'></div>
			<div className='process padding-left'>
				<div className='section limit-width'>
					<div className='title-with-icon'>
						<h3>
							About <span style={{ color: 'rgb(99 161 208)' }}>BabySitter</span>
						</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<h6>
						{`I’ve designed a reliable and secure application that allows parents to find a babysitter immediately or on a long-term and regular
						basis. While my focus has been on optimizing the babysitter search process, I've taken care to ensure that the application is secure
						for both parties. The platform is equally safe for babysitters searching for jobs and for parents searching for babysitters.`}
					</h6>
				</div>
				<div className='section limit-width'>
					<div className='title-with-icon'>
						<h3>Problem</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<h6>
						{`There are numerous apps available for finding a babysitter, but most of them do not offer the option to find an immediate
						babysitter. Additionally, the security checks conducted by these apps are not comprehensive for both parties.
						The recommendations for babysitters on these platforms are limited and do not provide detailed information about their conduct.
						Moreover, there are no age limits or comprehensive filtering criteria for parents to choose from.
						Finally, it is not possible to search for a babysitter immediately based on your location, which can be particularly problematic if you
						are on vacation and require a babysitter.`}
					</h6>
				</div>
				<div className='section limit-width'>
					<div className='title-with-icon'>
						<h3>Solution</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<h6>
						{`An app that provides parents easily find babysitters in any location they desire.
						The app provides the option of booking a babysitter for a short-term or long-term period.
						To ensure the safety of both parties, the app incorporates several security measures. The babysitters are all carefully vetted
						and come with detailed recommendations.
						Additionally, the app can sync with your contacts to check if someone you know has also booked the same babysitter.
						To further verify the babysitter's identity, there is also an option of conducting a phone or video call.`}
					</h6>
				</div>
				<div className='section limit-width'>
					<div className='title-with-icon'>
						<h3>The users</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<h6>
						{`Boys, girls, and anyone who seeking a job as a babysitter.
						Additionally, parents who are in immediate need of a babysitter for short or long-term care.
						Parents that away from home and require the services of a babysitter but don't know anyone in the area where they are.`}
					</h6>
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>Research findings</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<div className='findings'>
						<AnimationOnScroll animateIn='animate__fadeInDown' animatePreScroll={false}>
							<div className='finding'>
								<RenderImageAsset className='title' name={'location.svg'} />
								<h6>Numerous people are unaware of local babysitters</h6>
							</div>
						</AnimationOnScroll>
						<AnimationOnScroll animateIn='animate__fadeInDown' animatePreScroll={false} delay={500}>
							<div className='finding'>
								<RenderImageAsset className='title' name={'call-dismiss.svg'} />
								<h6>Many times the babysitter cannot respond immediately when the parent requires a response urgently.</h6>
							</div>
						</AnimationOnScroll>
						<AnimationOnScroll animateIn='animate__fadeInDown' animatePreScroll={false} delay={1000}>
							<div className='finding'>
								<RenderImageAsset className='title' name={'verified.svg'} />
								<h6>
									People want a trustworthy and organized application that can display all necessary information and allow them to
									select based on their preferences.
								</h6>
							</div>
						</AnimationOnScroll>
						<div className='finding'></div>
					</div>
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>User persona</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<div className='persona-container'>
						<AnimationOnScroll animateIn='animate__slideInLeft' duration={0.5} animatePreScroll={false}>
							<div className='overlay-container'>
								<div className='overlay' onClick={() => openDialog('persona-tami.png')}>
									<RenderImageAsset className='centered-absoulte' name={'magnifying.svg'} />
								</div>
								<RenderImageAsset style={{ width: '100%' }} name={'persona-tami.png'} />
							</div>
						</AnimationOnScroll>
						<AnimationOnScroll animateIn='animate__slideInRight' delay={500} duration={0.5} animatePreScroll={false}>
							<div className='overlay-container'>
								<div className='overlay' onClick={() => openDialog('persona-noa.png')}>
									<RenderImageAsset className='centered-absoulte' name={'magnifying.svg'} />
								</div>
								<RenderImageAsset style={{ width: '100%' }} name={'persona-noa.png'} />
							</div>
						</AnimationOnScroll>
					</div>
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>Information architecture</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<RenderImageAsset className='width80' name={'architecture-babysitter.png'} />
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>User flow</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<RenderImageAsset className='width80' name={'user-flow-babysitter.png'} />
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>Wireframes</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<RenderImageAsset className='width80' name={'wireframe-babysitter.png'} />
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>Final design</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<RenderImageAsset className='width80' name={'design-babysitter.png'} />
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>Style guide</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<div className='style-guide'>
						<div className='typography manrope'>
							<h4>Typography</h4>
							<div style={{ fontSize: '24px', fontWeight: '600' }}>H1 Manrope SemiBold 24</div>
							<div style={{ fontSize: '20px', fontWeight: '400' }}>Sub-H1 Manrope Regular 20</div>
							<div style={{ fontSize: '22px', fontWeight: '500' }}>H2 Manrope Medium 22</div>
							<div style={{ fontSize: '20px', fontWeight: '600' }}>H3 Manrope SemiBold 20 </div>
							<div style={{ fontSzie: '16px', fontWeight: '600' }}>H4 Manrope SemiBold 16</div>
							<div style={{ fontSize: '16px', fontWeight: '500' }}>Sub-H4 Manrope Medium 16</div>
							<div style={{ fontSize: '14px', fontWeight: '600' }}>H5 Manrope SemiBold 14</div>
							<div style={{ fontSize: '13px', fontWeight: '500' }}>Sub-H5 Manrope Medium 12</div>
							<div style={{ fontSize: '18px', fontWeight: '600' }}>Notification Manrope SemiBold 18</div>
						</div>
						<RenderImageAsset style={{ objectFit: 'contain', maxWidth: '300px' }} name={'style-guide-babysitter.png'} />
						<div style={{ flex: 0.5 }}></div>
					</div>
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>Thanks for watching</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
				</div>
				<div className='section'>
					<h4>More projects</h4>
					<div className='more-projects width80'>
						<RenderImageAsset name={'more-project-recipe-it.png'} onClick={() => navigate('/projects/recipeit')} />
						<RenderImageAsset name={'more-project-teperberg.png'} onClick={() => navigate('/projects/teperberg')} />
					</div>
				</div>
			</div>
			<dialog
				className='persona-dialog pop-fade'
				ref={dialogRef}
				onClick={event => {
					dialogClsoeByBackdrop(dialogRef, event);
				}}>
				<RenderImageAsset className='close-icon' name={'close.svg'} onClick={() => dialogRef.current.close()} />
				<RenderImageAsset key={selectedPersona} disableBlurAnim style={{ width: '100%' }} name={selectedPersona} />
			</dialog>
		</div>
	);
};

export default Babysitter;

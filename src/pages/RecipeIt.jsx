import './shared.scss';
import RenderImageAsset from '../components/RenderImageAsset';
import Button from '../components/Button';
import { useRef, useState } from 'react';
import { dialogClsoeByBackdrop } from '../util/functions';
import { useNavigate } from 'react-router-dom';

const RecipeIt = () => {
	const navigate = useNavigate();
	const [selectedPersona, setSelectedPersona] = useState();
	const dialogRef = useRef();
	const openDialog = persona => {
		setSelectedPersona(persona);
		dialogRef.current.showModal();
	};
	return (
		<div className='recipe-it template1'>
			<div className='intro padding-left'>
				<RenderImageAsset name={'spark2.svg'} className='big-title-with-spark' />
				<h1 className='title'>Recipe it</h1>
				<h4 className='subtitle'>A convenient application for easily uploading and searching recipes</h4>
				<Button
					onClick={() =>
						window.open(
							'https://www.figma.com/proto/hSZusvUnfNu4GV0yaSSiml/Recipe-It?type=design&node-id=616-2187&t=dh5bQ1WaTenqbPnl-1&scaling=scale-down&page-id=150%3A3278&starting-point-node-id=150%3A4144&mode=design&fuid=963713945158297857',
							'_blank',
						)
					}>
					Prototype
				</Button>
			</div>
			<div className='line'></div>
			<div className='tools'>
				<RenderImageAsset name={'star.svg'} />
				<div>Easy</div>
				<RenderImageAsset name={'star.svg'} />
				<div>Accessible</div>
				<RenderImageAsset name={'star.svg'} />
				<div>Qualitative</div>
				<RenderImageAsset name={'star.svg'} />
			</div>
			<div className='line'></div>
			<div className='process padding-left'>
				<div className='section limit-width'>
					<div className='title-with-icon'>
						<h3>
							About <span style={{ color: 'rgba(191, 65, 64, 1)' }}>Recipe it</span>
						</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<h6>
						{`I’ve designed a social application for sharing recipes with ease.
						The application offers a user-friendly experience for both recipe sharers and those searching for recipes to prepare. During the
						design process, I focused on improving the recipe uploading process to make it more easy and efficient.`}
					</h6>
				</div>
				<div className='section limit-width'>
					<div className='title-with-icon'>
						<h3>Problem</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<h6>
						{`There are many recipe apps and websites available today, but most of them only display pre-selected recipes and not possible for
						sharing. For those that is possible uploads recipe, the process is often time-consuming and requires extensive writing and
						planning. Additionally, these websites do not provide calorie calculations or the ability to adjust ingredient quantities based on
						serving size that the user wants to prepare. The recipe pages are often cluttered with advertisements and text, making it difficult to navigate while cooking.`}
					</h6>
				</div>
				<div className='section limit-width'>
					<div className='title-with-icon'>
						<h3>Solution</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<h6>
						{`The application is designed to enable anyone to share their recipes with ease.
						Uploading a recipe is simple and accessible, without the need for extensive writing.
						The application calculates the nutritional values, and adjusts the amount of ingredients according to the user's desired serving size, in relation to the amount in the recipe.  
						The recipe display is visually clean and well-organized to avoid visual overload. The preparation of the recipe is divided into convenient steps with clear instructions, including the ingredients, and can easily be navigated by clicking or swiping.
						Moreover, the application also has voice control for hands-free usage.`}
					</h6>
				</div>
				<div className='section limit-width'>
					<div className='title-with-icon'>
						<h3>The users</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<h6>
						{`Men and women aged from 16 to 50+.
						Chefs, food bloggers, recipe lovers and also people who are looking for something to eat and prepare.`}
					</h6>
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>Research findings</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<div className='findings'>
						<div className='finding'>
							<div className='title'>45+</div>
							<h6>Uploading a recipe takes more than 45 minutes</h6>
						</div>
						<div className='finding'>
							<RenderImageAsset className='title' name={'emoji.svg'} />
							<h6>The difficulty in uploading the recipe is the long writing of the ingredients and preparation instructions.</h6>
						</div>
						<div className='finding'>
							<div className='title'>96%</div>
							<h6>96% of the users would like an app that makes the content accessible and is easy and convenient to operate.</h6>
						</div>
						<div className='finding'>
							<RenderImageAsset className='title' name={'celebrate.svg'} />
							<h6>Most users who share recipes do so as a hobby for their own enjoyment.</h6>
						</div>
					</div>
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>User persona</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<div className='persona-container'>
						<div className='overlay-container'>
							<div className='overlay' onClick={() => openDialog('persona-tomer.png')}>
								<RenderImageAsset className='centered-absoulte' name={'magnifying.svg'} />
							</div>
							<RenderImageAsset name={'persona-tomer.png'} />
						</div>
						<div className='overlay-container'>
							<div className='overlay' onClick={() => openDialog('persona-elizabeth.png')}>
								<RenderImageAsset className='centered-absoulte' name={'magnifying.svg'} />
							</div>
							<RenderImageAsset name={'persona-elizabeth.png'} />
						</div>
					</div>
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>Information architecture</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<RenderImageAsset className='width80' name={'architecture-recipe-it.png'} />
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>User flow</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<RenderImageAsset className='width80' name={'user-flow-recipe-it.png'} />
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>Wireframes</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<RenderImageAsset className='width80' name={'wireframe-recipe-it.png'} />
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>Final design</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<h4>Dark mode</h4>
					<RenderImageAsset className='width80' name={'dark-mode-recipe-it.png'} />
					<br />
					<br />
					<h4>Light mode</h4>
					<RenderImageAsset className='width80' name={'light-mode-recipe-it.png'} />
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>Style guide</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<div className='style-guide'>
						<div className='typography manrope'>
							<h4>Typography</h4>
							<div style={{ fontSize: '24px', fontWeight: '800' }}>H1 Manrope ExtraBold 24</div>
							<div style={{ fontSize: '14px', fontWeight: '400' }}>Sub-H1 Manrope Regular 14</div>
							<div style={{ fontSize: '18px', fontWeight: '600' }}>H2 Manrope SemiBold 18</div>
							<div style={{ fontSize: '14px', fontWeight: '700' }}>H3 Manrope Bold 14</div>
							<div style={{ fontSzie: '13px', fontWeight: '700' }}>H4 Manrope Bold 13</div>
							<div style={{ fontSize: '13px', fontWeight: '400' }}>Sub-H4 Manrope Regular 13</div>
							<div style={{ fontSize: '12px', fontWeight: '700' }}>H5 Manrope Bold 12</div>
							<div style={{ fontSize: '10px', fontWeight: '500' }}>Sub-H5 Manrope Medium 10</div>
							<div style={{ fontSize: '13px', fontWeight: '500' }}>Button text Manrope Medium 13</div>
							<div style={{ fontSize: '12px', fontWeight: '400' }}>Body2 Manrope Regular 12</div>
						</div>
						<RenderImageAsset style={{ objectFit: 'contain', width: '300px' }} name={'style-guide-recipe-it.png'} />
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
						<RenderImageAsset name={'more-project-babysitter.png'} onClick={() => navigate('/projects/babysitter')} />
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

export default RecipeIt;

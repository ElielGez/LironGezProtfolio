import './shared.scss';
import RenderImageAsset from '../components/RenderImageAsset';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Teperberg = () => {
	const navigate = useNavigate();
	return (
		<div className='teperberg template1'>
			<div className='intro padding-left'>
				<RenderImageAsset name={'spark2.svg'} className='big-title-with-spark' />
				<h1 className='title'>Teperberg</h1>
				<h4 className='subtitle'>Redesign for VISION collection by Teperberg winery</h4>
				<div style={{ display: 'flex', gap: '10px' }}>
					<Button
						onClick={() =>
							window.open(
								'https://www.figma.com/proto/Y6EU7VnQ5g1EiLdXygg2bN/Teperberg-project?type=design&node-id=113-20&t=xTDHeDLvlVzsCx75-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=113%3A20&mode=design&fuid=963713945158297857',
								'_blank',
							)
						}>
						Web prototype
					</Button>
					<Button
						onClick={() =>
							window.open(
								'https://www.figma.com/proto/Y6EU7VnQ5g1EiLdXygg2bN/Teperberg-project?type=design&node-id=305-361&t=ZTmrVPgaS7xC2M3Y-1&scaling=scale-down&page-id=1%3A3&starting-point-node-id=305%3A361',
								'_blank',
							)
						}>
						Mobile prototype
					</Button>
				</div>
			</div>
			<div className='line'></div>
			<div className='tools'>
				<RenderImageAsset name={'star.svg'} />
				<div>Fancy</div>
				<RenderImageAsset name={'star.svg'} />
				<div>Young</div>
				<RenderImageAsset name={'star.svg'} />
				<div>Qualitative</div>
				<RenderImageAsset name={'star.svg'} />
			</div>
			<div className='line'></div>
			<div className='process padding-left'>
				<div className='section limit-width'>
					<div className='title-with-icon'>
						<h3>
							About <span style={{ color: 'rgb(123 51 53)' }}>Teperberg</span>
						</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<h6>
						{`"Vision" collection is a youthful and refreshing collection of wines,  produced from vineyards located in the Judean Lowlands
						For this redesign, the deep color of the high-quality red grapes was chosen, in order to convey the prestige and quality of the wines.`}
					</h6>
				</div>
				<div className='section'>
					<div className='title-with-icon'>
						<h3>Style guide</h3>
						<RenderImageAsset name={'spark1.svg'} />
					</div>
					<div className='style-guide'>
						<div className='typography assistant'>
							<h4>Web twypography</h4>
							<div style={{ fontSize: '35px', fontWeight: '400' }}>H1 Assistant Regular 35</div>
							<div style={{ fontSize: '20px', fontWeight: '300' }}>Sub-H1 Assistant Light 20</div>
							<div style={{ fontSize: '30px', fontWeight: '300' }}>H2 Assistant Light 30</div>
							<div style={{ fontSize: '20px', fontWeight: '600' }}>H3 Assistant SemiBold 20</div>
							<div style={{ fontSzie: '28px', fontWeight: '700' }}>H4 Assistant Bold 28</div>
							<div style={{ fontSize: '20px', fontWeight: '600' }}>Navigate bar - Assistant SemiBold 20</div>
							<div style={{ fontSize: '20px', fontWeight: '600' }}>Keep reading Assistant Bold 20</div>
						</div>
						<div className='typography assistant'>
							<h4>Mobile twypography</h4>
							<div style={{ fontSize: '25px', fontWeight: '600' }}>H1 Assistant SemiBold 25</div>
							<div style={{ fontSize: '18px', fontWeight: '300' }}>Sub-H1 Assistant Light 18</div>
							<div style={{ fontSize: '23px', fontWeight: '300' }}>H2 Assistant Light 23</div>
							<div style={{ fontSize: '20px', fontWeight: '600' }}>H3 Assistant SemiBold 20</div>
							<div style={{ fontSzie: '22px', fontWeight: '700' }}>H4 Assistant Bold 22</div>
							<div style={{ fontSize: '27px', fontWeight: '400' }}>Menu - Assistant Regular 27</div>
							<div style={{ fontSize: '18px', fontWeight: '600' }}>Keep reading Assistant SemiBold 18</div>
						</div>
						<RenderImageAsset style={{ objectFit: 'contain', width: '300px' }} name={'style-guide-teperberg.png'} />
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
						<RenderImageAsset name={'more-project-babysitter.png'} onClick={() => navigate('/projects/babysitter')} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Teperberg;

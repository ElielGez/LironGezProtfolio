import ContactMeButton from '../components/ContactMeButton';
import './About.scss';
import './shared.scss';
import { useLayoutContext } from '../contexts/LayoutContext';
import RenderImageAsset from '../components/RenderImageAsset';

const About = () => {
	const { deviceMode } = useLayoutContext();
	return (
		<div className='about'>
			<div className='intro texts padding-left'>
				{deviceMode === 'desktop' && <RenderImageAsset name={'spark2.svg'} className='big-title-with-spark' />}
				<h1>About Me</h1>
				<h4 className='long-text' style={{ '--n': '800' }}>{`Hi, i’m Liron.
                UX/UI designer based in Israel.

Design for the magic of a user-first experience, combined with clean and
minimalistic design.

As a UX designer, my main goal is to improve user experiences by understanding their needs and aspirations, then translating those insights into intuitive and engaging designs.

I love to create products that are useful, usable, and enjoyable for users.

I’m always striving to improve my skills and stay up-to-date with the latest design trends and technologies.

I believe that great design can have a positive impact on people's lives, and I’m grateful to be a part of this exciting and constantly evolving field.

I’m highly motivated and looking to join a team who shares the same passion as I do.`}</h4>
				<ContactMeButton />
			</div>
			<RenderImageAsset name={'about.png'} className='illustration1' />
		</div>
	);
};
export default About;

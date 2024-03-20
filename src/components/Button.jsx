import GradientBase from './GradientBase';
import './Button.scss';

const Button = ({ children, className = '', ...restProps }) => {
	return (
		<GradientBase borderSize='1.5' borderRadius='72px' className={`btn-primary ${className}`} {...restProps}>
			{children}
		</GradientBase>
	);
};

export default Button;

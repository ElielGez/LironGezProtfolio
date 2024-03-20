import './GradientBase.scss';

const GradientBase = ({
	children,
	className = '',
	style: restStyle,
	borderSize = 2,
	borderRadius = '5px',
	innerTransparent,
	reverseGradients,
	...restProps
}) => {
	return (
		<div
			className={`gradient-base ${className} ${innerTransparent ? 'inner-transparent' : ''} ${reverseGradients ? 'reverse-gradients' : ''}`}
			style={{
				'--border-size': `-${borderSize}px`,
				'--border-radius': borderRadius,
				'cursor': restProps.onClick ? 'pointer' : 'default',
				...restStyle,
			}}
			{...restProps}>
			{children}
		</div>
	);
};
export default GradientBase;

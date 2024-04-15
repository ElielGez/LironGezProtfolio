import './MenuSelect.scss';
import { useNavigate } from 'react-router-dom';

const MenuSelect = props => {
	const { items } = props;
	const navigate = useNavigate();
	return (
		<div className='menu-select-inner'>
			{items.map((item, index) => {
				return (
					<div key={index} onClick={() => navigate(item.value)} className='item'>
						{item.label}
					</div>
				);
			})}
		</div>
	);
};

export default MenuSelect;

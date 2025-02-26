import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div>
			<Button>
				<Link to='/'>Animals</Link>
			</Button>
			<Button>
				<Link to='/new-animal'>New animal</Link>
			</Button>
		</div>
	);
};

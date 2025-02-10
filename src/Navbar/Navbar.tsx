import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className='navbar'>
			<Button>
				<Link to={'/register'}>Register</Link>
			</Button>
			<Button>
				<Link to={'/login'}>Login</Link>
			</Button>
			<Button>
				<Link to={'/admin'}>Account settings</Link>
			</Button>
		</nav>
	);
};

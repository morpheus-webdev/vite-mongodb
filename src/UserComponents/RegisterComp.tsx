import { Button, TextField } from '@mui/material';
import { defaultNewUser, INewUser, newUserSchema } from '../util';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import users from '../users.json';
import write, { writeFile } from 'fs';
export const RegisterComp = () => {
	const [newUser, setNewUser] = useState<INewUser>(defaultNewUser);
	/* useEffect(() => {
		console.log(newUser);
	}, [newUser]); */
	async function handleRegister() {
		const isValid = await newUserSchema.isValid(newUser);
		if (isValid) {
			//TODO handle db interaction
			let usersCopy = users as INewUser[];
			usersCopy.push(newUser);
			writeFile('../users.json', JSON.stringify(usersCopy), () => {});
			console.log('Succesful register');
		} else {
			console.error('Unsuccesful validation');
		}
		console.log(newUser);
	}
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '40%',
				gap: '2rem',
			}}>
			<TextField
				required
				placeholder='Username...'
				onChange={(e) => setNewUser({ ...newUser, userName: e.target.value })}
			/>
			<TextField
				required
				placeholder='Password...'
				onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
			/>
			<TextField
				required
				placeholder='Email...'
				onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
			/>
			<TextField
				required
				placeholder='Address...'
				onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
			/>
			<DatePicker
				selected={new Date(2006, 1, 1)}
				onChange={(date) => setNewUser({ ...newUser, dob: date! })}
			/>
			<Button variant='outlined' onClick={handleRegister}>
				Register
			</Button>
		</div>
	);
};

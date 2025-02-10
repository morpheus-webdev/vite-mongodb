import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { RegisterComp } from './UserComponents/RegisterComp';
import { LoginComp } from './UserComponents/LoginComp';
import { AdminComp } from './UserComponents/AdminComp';
function App() {
	/* useEffect(() => {
		testUser();
	}, []); */
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/register' element={<RegisterComp />}></Route>
				<Route path='/login' element={<LoginComp />}></Route>
				<Route path='/admin' element={<AdminComp />}></Route>
			</Routes>
		</>
	);
}

export default App;

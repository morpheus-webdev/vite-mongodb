import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import Animals, { NewAnimal } from './components/Animals';
import { useEffect } from 'react';
function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Animals />} />
				<Route path='/new-animal' element={<NewAnimal />} />
			</Routes>
		</div>
	);
}

export default App;

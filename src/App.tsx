import { useEffect, useState } from 'react';
import './App.css';
function App() {
	const [animals, setAnimals] = useState<any[]>([]);
	useEffect(() => {
		let tmpFn = async function () {
			let a = await fetch('127.0.0.1/:8000').then((data) => data.json());
			setAnimals(a);
		};
		tmpFn();
	}, []);
	return (
		<>
			{animals.map((a) => {
				return <p key={`animal-${a.name}`}>{a.name}</p>;
			})}
		</>
	);
}

export default App;

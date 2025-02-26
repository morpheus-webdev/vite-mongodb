import { useContext, useEffect } from 'react';
import { IAnimal } from '../util/util';
import { AnimalContext } from '../contexts/AnimalContext';

const Animals = () => {
	const { initAnimals, animals } = useContext(AnimalContext);
	useEffect(() => {
		initAnimals();
	}, []);
	return (
		<div>
			{animals.map((a) => {
				return <p key={a.name}>{a.name}</p>;
			})}
		</div>
	);
};
export default Animals;

export const NewAnimal = () => {
	return <div>New Animal</div>;
};

import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';
import { IAnimal } from '../util/util';

//interface
interface IAnimalContext {
	animals: IAnimal[];
	initAnimals: () => void;
	addAnimal: (animal: IAnimal) => void;
	likeAnimal: (interaction: boolean) => void;
}
//defaultObj
const defaultAnimalContext: IAnimalContext = {
	animals: [],
	initAnimals: () => {},
	addAnimal: (animal) => {},
	likeAnimal: (interaction) => {},
};

//Context
export const AnimalContext =
	createContext<IAnimalContext>(defaultAnimalContext);

//Context Provider

export const AnimalContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [animals, setAnimals] = useState<IAnimal[]>([]);
	async function initAnimals() {
		let allAnimals = await fetch('127.0.0.1:5173/api/animals').then(
			(
				data //TODO fix fetch
			) => data.json()
		);
		console.log(allAnimals);
		setAnimals(allAnimals);
	}
	function addAnimal(animal: IAnimal) {
		//TODO
	}
	function likeAnimal(interaction: boolean) {
		//TODO
	}
	return (
		<AnimalContext.Provider
			value={{ animals, addAnimal, likeAnimal, initAnimals }}>
			{children}
		</AnimalContext.Provider>
	);
};

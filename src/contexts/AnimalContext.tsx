import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';
import { IAnimal, MyResponse } from '../util/util';

//interface
interface IAnimalContext {
	animals: IAnimal[];
	initAnimals: () => void;
	addAnimal: (animal: IAnimal) => Promise<Response>;
	likeAnimal: (interaction: boolean) => void;
}
//defaultObj
const defaultAnimalContext: IAnimalContext = {
	animals: [],
	initAnimals: () => {},
	addAnimal: async (animal): Promise<Response> => {
		return new Response('OK', { status: 200 });
	},
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
		let allAnimals: IAnimal[] = await fetch('/api/animals').then((data) =>
			data.json()
		);
		console.log(allAnimals);

		setAnimals(allAnimals);
	}
	async function addAnimal(animal: IAnimal): Promise<Response> {
		console.log(animal);
		let res = await fetch('/api/new-animal', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(animal),
		});

		return res;
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

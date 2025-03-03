import { useContext, useEffect, useState } from 'react';
import { BiomeType, ClassType, defaultAnimal, IAnimal } from '../util/util';
import { AnimalContext } from '../contexts/AnimalContext';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {
	Button,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
} from '@mui/material';

const Animals = () => {
	const { initAnimals, animals } = useContext(AnimalContext);
	useEffect(() => {
		initAnimals();
	}, []);
	return (
		<div className='flex flex-row flex-wrap gap-4'>
			{animals.map((a) => {
				return <Animal key={`animal-${a.animalia}`} animal={a} />;
			})}
		</div>
	);
};
export default Animals;

export const Animal = (props: { animal: IAnimal }) => {
	//const animal = props.animal;//ref az animal-re
	const { biome, name, animalia, legs, isPredator, img, url, like, dislike } =
		props.animal;

	const getCardColor = (cl: ClassType) => {
		switch (cl) {
			case 'Mammals':
				return 'green';
			case 'Fish':
				return 'lightblue';
			case 'Reptiles':
				return '#FAEBD7';
			case 'Birds':
				return '#D2691E';
			default:
				console.error('Bad input');
				break;
		}
	};
	return (
		<div
			className='w-[400px] h-[632px] bg-amber-500 rounded-2xl flex flex-col flex-nowrap items-center'
			style={{ background: getCardColor(props.animal.class) }}>
			<h1 className='text-3xl mb-0 bg-amber-200 w-full text-center mt-6'>
				<a href={url} target='_blank'>
					{name}
				</a>
			</h1>
			<h2 className='text-2xl mt-0 bg-amber-200 w-full text-center mb-6'>
				{animalia}
			</h2>
			<img src={img} className='w-full aspect-video object-cover' />
			<h2 className='text-xl mb-0 bg-amber-200 w-full text-center'>
				{props.animal.class}
			</h2>
			<h2 className='text-xl mt-0 bg-amber-200 w-full text-center mb-6'>
				{biome}
			</h2>
			<h1 className='text-4xl font-black'>Legs: {legs}</h1>
			<h1 className='text-4xl'>{isPredator ? 'Predator' : 'Herbivore'}</h1>

			<div className='w-full h-20 flex flex-row flex-nowrap'>
				<button className='w-1/2'>
					<ThumbUpIcon /> {like}
				</button>
				<button className='w-1/2'>
					<ThumbDownIcon /> {dislike}
				</button>
			</div>
		</div>
	);
};

export const NewAnimal = () => {
	const { addAnimal } = useContext(AnimalContext);
	const [newAnimal, setNewAnimal] = useState<IAnimal>(defaultAnimal);

	function changeKey(inp: string | boolean, keyName: string) {
		if (typeof inp === 'boolean' && keyName === 'isPredator') {
			setNewAnimal({ ...newAnimal, isPredator: inp });
		} else if (typeof inp === 'string') {
			switch (keyName) {
				case 'name':
					setNewAnimal({ ...newAnimal, name: inp });
					break;
				case 'animalia':
					setNewAnimal({ ...newAnimal, animalia: inp });
					break;
				case 'class':
					setNewAnimal({ ...newAnimal, class: inp as ClassType });
					break;
				case 'biome':
					setNewAnimal({ ...newAnimal, biome: inp as BiomeType });
					break;
				case 'legs':
					setNewAnimal({ ...newAnimal, legs: parseInt(inp) });
					break;
				case 'img':
					setNewAnimal({ ...newAnimal, img: inp });
					break;
				case 'url':
					setNewAnimal({ ...newAnimal, url: inp });
					break;
				default:
					console.error('Unexpected input');
			}
		}
	}

	function changeClass(e: SelectChangeEvent) {
		changeKey(e.target.value, 'class');
	}

	function changeBiome(e: SelectChangeEvent) {
		changeKey(e.target.value, 'biome');
	}

	function handleRegister() {
		addAnimal(newAnimal);
	}

	return (
		<div>
			<Select value={newAnimal.class} onChange={changeClass}>
				<MenuItem value='Mammals'>Mammals</MenuItem>
				<MenuItem value='Fish'>Fish</MenuItem>
				<MenuItem value='Reptiles'>Reptiles</MenuItem>
				<MenuItem value='Birds'>Birds</MenuItem>
			</Select>
			<Select value={newAnimal.biome} onChange={changeBiome}>
				<MenuItem value='Marine'>Marine</MenuItem>
				<MenuItem value='Freshwater'>Freshwater</MenuItem>
				<MenuItem value='Desert'>Desert</MenuItem>
				<MenuItem value='Forest'>Forest</MenuItem>
				<MenuItem value='Savanna'>Savanna</MenuItem>
				<MenuItem value='Tundra'>Tundra</MenuItem>
				<MenuItem value='Arctic'>Arctic</MenuItem>
			</Select>
			<TextField
				placeholder='Name...'
				onChange={(e) => changeKey(e.target.value, 'name')}
			/>
			<TextField
				placeholder='Animalia...'
				onChange={(e) => changeKey(e.target.value, 'animalia')}
			/>
			<TextField
				placeholder='Number of legs...'
				type='number'
				onChange={(e) => changeKey(e.target.value, 'legs')}
			/>
			<TextField
				placeholder='Image url...'
				onChange={(e) => changeKey(e.target.value, 'img')}
			/>
			<TextField
				placeholder='Wikipedia url...'
				onChange={(e) => changeKey(e.target.value, 'url')}
			/>
			{
				//TODO add predator
			}
			<Button onClick={handleRegister}>Register new animal</Button>
		</div>
	);
};

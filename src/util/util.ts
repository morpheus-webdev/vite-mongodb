export type ClassType = 'Mammals' | 'Fish' | 'Reptiles' | 'Birds';
export type BiomeType =
	| 'Marine'
	| 'Freshwater'
	| 'Desert'
	| 'Forest'
	| 'Savanna'
	| 'Tundra'
	| 'Arctic';

export interface IAnimal {
	class: ClassType;
	biome: BiomeType;
	name: string;
	animalia: string;
	legs: number;
	isPredator: boolean;
	img: string;
	url: string;
	like: number;
	dislike: number;
}

export const defaultAnimal: IAnimal = {
	class: "Mammals",
	biome: "Arctic",
	name: '',
	animalia: '',
	legs: 0,
	isPredator: false,
	img: '',
	url: '',
	like: 0,
	dislike: 0

}
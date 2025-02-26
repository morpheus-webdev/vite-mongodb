type ClassType = 'Mammals' | 'Fish' | 'Reptiles' | 'Birds';
type BiomeType =
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
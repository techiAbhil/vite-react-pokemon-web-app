import { API_STATUS } from './common.model';

export interface IPokemonModel {
	name: string;
	url: string;
}

export interface IPokemonTypes {
	slot: number;
	type: {
		name: string;
		url: string;
	};
}

export interface IPokemonStats {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
}

export interface IPokemonDetailsModel {
	name: string;
	height: number | undefined;
	weight: number | undefined;
	base_experience: number | undefined;
	sprites: string[];
	types: IPokemonTypes[];
	stats: IPokemonStats[];
}

export interface ISelectedPokemonModel {
	status: API_STATUS;
	error: string | undefined;
	pokemonDetails: IPokemonDetailsModel;
}

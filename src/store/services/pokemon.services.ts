import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPokemonDetailsModel } from '../../models/pokemon.model';

export const getAllPokemon: any = createAsyncThunk(
	'pokemon/getAll',
	async (url?: string) => {
		const response = await fetch(url ?? 'https://pokeapi.co/api/v2/pokemon/');
		const data = await response.json();
		return data;
	}
);

export const fetchPokemonByName: any = createAsyncThunk(
	'pokemon/fetchByName',
	async (url: string) => {
		const response = await fetch(url);
		const data = await response.json();
		const { height, weight, name, base_experience, sprites, types, stats } =
			data;

		const filtredSprites: string[] = [];

		Object.keys(sprites)?.forEach((key: string) => {
			if (typeof sprites[key] === 'string') {
				filtredSprites.push(sprites[key]);
			}
		});
		const mappedResult: IPokemonDetailsModel = {
			name,
			height,
			weight,
			base_experience,
			types,
			stats,
			sprites: filtredSprites,
		};
		return mappedResult;
	}
);

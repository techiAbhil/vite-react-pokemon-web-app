import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API_STATUS } from '../../models/common.model';
import {
	IPokemonDetailsModel,
	ISelectedPokemonModel,
} from '../../models/pokemon.model';
import pokemonDetails from '../../pages/pokemon-details';
import { fetchPokemonByName } from '../services/pokemon.services';

const initialState: ISelectedPokemonModel = {
	error: undefined,
	status: API_STATUS.IDLE,
	pokemonDetails: {
		base_experience: undefined,
		height: undefined,
		weight: undefined,
		name: 'NA',
		sprites: [],
		types: [],
		stats: [],
	},
};

const selectedPokemonSlice = createSlice({
	name: 'selected-pokemon-slice',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPokemonByName.pending, (state) => {
				state.status = API_STATUS.PENDING;
			})
			.addCase(
				fetchPokemonByName.fulfilled,
				(state, { payload }: PayloadAction<IPokemonDetailsModel>) => {
					state.status = API_STATUS.FULFILLED;
					state.pokemonDetails = payload;
				}
			)
			.addCase(fetchPokemonByName.rejected, (state, { error }) => {
				state.status = API_STATUS.REJECTED;
				state.error = error.message ?? '';
			});
	},
});

export const selectedPokemonReducer = selectedPokemonSlice.reducer;

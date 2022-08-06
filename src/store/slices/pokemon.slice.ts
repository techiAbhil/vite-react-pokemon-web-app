import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { API_STATUS } from '../../models/common.model';
import { IPokemonModel } from '../../models/pokemon.model';
import { getAllPokemon } from '../services/pokemon.services';

const pokemonEntityAdapter = createEntityAdapter<IPokemonModel>({
	selectId: (pokemon) => pokemon.name,
});

const pokemonSlice = createSlice({
	name: 'pokemon-slice',
	initialState: pokemonEntityAdapter.getInitialState<{
		status: API_STATUS;
		error: string | undefined;
		next: string | undefined;
		previous: string | undefined;
	}>({
		status: API_STATUS.IDLE,
		error: undefined,
		next: undefined,
		previous: undefined,
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllPokemon.pending, (state) => {
				state.status = API_STATUS.PENDING;
			})
			.addCase(getAllPokemon.fulfilled, (state, { payload }) => {
				state.status = API_STATUS.FULFILLED;
				state.next = payload.next;
				state.previous = payload.previous;
				pokemonEntityAdapter.setAll(state, payload.results);
			})
			.addCase(getAllPokemon.rejected, (state, { error }) => {
				state.status = API_STATUS.REJECTED;
				state.error = error.message ?? '';
			});
	},
});

export const pokemonReducer = pokemonSlice.reducer;

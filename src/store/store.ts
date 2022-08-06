import { configureStore } from '@reduxjs/toolkit';
import { pokemonReducer } from './slices/pokemon.slice';
import { selectedPokemonReducer } from './slices/selected-pokemon.slice';

const store = configureStore({
	reducer: {
		pokemons: pokemonReducer,
		selectedPokemon: selectedPokemonReducer,
	},
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

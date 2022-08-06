import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page';
import { Provider } from 'react-redux';
import store from './store/store';
import PokemonDetails from './pages/pokemon-details';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="pokemon" element={<PokemonDetails />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;

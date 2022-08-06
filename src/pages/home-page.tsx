import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../hooks/store-hooks';
import { API_STATUS } from '../models/common.model';
import { getAllPokemon } from '../store/services/pokemon.services';
import loadingGif from '../assets/loading.gif';
import { Link } from 'react-router-dom';

const HomePage = () => {
	const dispatch = useAppDispatch();
	const {
		ids: pokemonIDs,
		error,
		entities,
		status,
		next,
		previous,
	} = useAppSelector((state) => state.pokemons);

	useEffect(() => {
		if (Object.keys(entities).length > 0) return;
		dispatch(getAllPokemon());
	}, []);

	const paginationHandler = (url: string | undefined) => {
		if (!url) return;
		dispatch(getAllPokemon(url));
	};
	return (
		<div className="container">
			<header>
				<h1>Pokedex</h1>
			</header>
			<main>
				{status === API_STATUS.PENDING && (
					<img src={loadingGif} alt="loading...!" />
				)}
				{status === API_STATUS.REJECTED && (
					<h2 className="text-danger">{error}</h2>
				)}
				{status === API_STATUS.FULFILLED && (
					<div>
						{pokemonIDs.map((pokemonID) => {
							const pokemonDetails = entities[pokemonID];
							return (
								<Link
									key={pokemonDetails?.name}
									className="pokemon-link-btn"
									to={`pokemon?url=${pokemonDetails?.url}`}
								>
									{pokemonDetails?.name}
								</Link>
							);
						})}
					</div>
				)}
			</main>
			{(previous || next) && (
				<div className="row py-20">
					<button
						disabled={!previous}
						className="img-buttons mx-5"
						onClick={() => paginationHandler(previous)}
					>
						Prev
					</button>
					<button
						disabled={!next}
						className="img-buttons mx-5"
						onClick={() => paginationHandler(next)}
					>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default HomePage;

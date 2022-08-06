import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/store-hooks';
import { API_STATUS } from '../models/common.model';
import { fetchPokemonByName } from '../store/services/pokemon.services';
import loadingGif from '../assets/loading.gif';
import PokemonDetailsRow from '../components/pokemon-details-row';
import PokemonImagePreview from '../components/pokemon-image-preview';
import PokemonDetailsTypes from '../components/pokemon-details-types';
import PokemonDetailsStats from '../components/pokemon-details-stats';

const PokemonDetails = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const url = searchParams.get('url');
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchPokemonByName(url));
	}, [url]);

	const { error, status, pokemonDetails } = useAppSelector(
		(state) => state.selectedPokemon
	);

	return (
		<div className="container">
			<h1>Pokemon details</h1>

			<main>
				{status === API_STATUS.PENDING && (
					<img src={loadingGif} alt="loading...!" />
				)}
				{status === API_STATUS.REJECTED && (
					<h2 className="text-danger">{error}</h2>
				)}
				{status === API_STATUS.FULFILLED && (
					<div className="center">
						<button className="img-buttons" onClick={() => navigate('/')}>
							{' '}
							Go to Home Page🏠
						</button>

						<PokemonImagePreview images={pokemonDetails.sprites} />
						<p className="heading-blue">{pokemonDetails.name}</p>
						<div className="row">
							<PokemonDetailsRow
								label={'Height'}
								text={pokemonDetails.height}
							/>
							<PokemonDetailsRow label={'Width'} text={pokemonDetails.weight} />
							<PokemonDetailsRow
								label={'Base Experience'}
								text={pokemonDetails.base_experience}
							/>
						</div>
						<section className="center">
							<h3 className="title-blue">Types</h3>
							{pokemonDetails.types.map(({ slot, type }) => {
								return (
									<PokemonDetailsTypes key={type.url} slot={slot} type={type} />
								);
							})}
						</section>

						<section className="center">
							<h3 className="title-blue">Stats</h3>
							{pokemonDetails.stats.map(({ base_stat, stat, effort }) => {
								return (
									<PokemonDetailsStats
										key={stat.url}
										base_stat={base_stat}
										stat={stat}
										effort={effort}
									/>
								);
							})}
						</section>
					</div>
				)}
			</main>
		</div>
	);
};

export default PokemonDetails;

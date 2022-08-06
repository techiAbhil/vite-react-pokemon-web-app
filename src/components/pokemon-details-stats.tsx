import { IPokemonStats } from '../models/pokemon.model';

const PokemonDetailsStats = ({ base_stat, effort, stat }: IPokemonStats) => {
	return (
		<>
			<div className="flex">
				<div className="px-20">
					<p className="text-grey">Base Start</p>
					<p className="text-blue">{base_stat}</p>
				</div>
				<div className="px-20">
					<p className="text-grey">Effort</p>
					<p className="text-blue">{effort}</p>
				</div>

				<div className="px-20">
					<p className="text-grey">Stat Name</p>

					<a className="link-btn" target="_blank" href={stat.url}>
						{stat.name}
					</a>
				</div>
			</div>
		</>
	);
};

export default PokemonDetailsStats;

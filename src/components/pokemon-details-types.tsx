import { IPokemonTypes } from '../models/pokemon.model';

const PokemonDetailsTypes = ({ slot, type }: IPokemonTypes) => {
	return (
		<>
			<div className="flex">
				<div className="px-20">
					<p className="text-grey">Slot</p>
					<p className="text-blue">{slot}</p>
				</div>
				<div className="px-20">
					<p className="text-grey">Type</p>
					<p className="text-blue">{type.name}</p>
				</div>
				<div className="px-20">
					<p className="text-grey">Url</p>

					<a className="link-btn" target="_blank" href={type.url}>
						{type.url}
					</a>
				</div>
			</div>
		</>
	);
};

export default PokemonDetailsTypes;

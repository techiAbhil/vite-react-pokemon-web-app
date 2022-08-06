const PokemonDetailsRow = ({
	label,
	text,
}: {
	label: string;
	text: string | number | undefined;
}) => {
	return (
		<div className="row p-10">
			<p className="text-grey">{label}</p>
			<p className="text-blue pl-5">{text ?? 'NA'}</p>
		</div>
	);
};

export default PokemonDetailsRow;

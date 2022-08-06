import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonImagePreview = ({ images }: { images: string[] }) => {
	const [activeImg, setActiveImg] = useState<
		| {
				acitveImgeIndex: number;
				imageSrc: string;
		  }
		| undefined
		| null
	>(undefined);

	useEffect(() => {
		if (images[0]) {
			setActiveImg({
				acitveImgeIndex: 0,
				imageSrc: images[0],
			});
		} else {
			setActiveImg(null);
		}
	}, []);

	const onBtnClickHandler = (action: 'PREV' | 'NEXT') => {
		if (!activeImg) return;
		if (action === 'PREV') {
			setActiveImg({
				acitveImgeIndex: activeImg.acitveImgeIndex - 1,
				imageSrc: images[activeImg.acitveImgeIndex - 1],
			});
		} else if (action === 'NEXT') {
			setActiveImg({
				acitveImgeIndex: activeImg.acitveImgeIndex + 1,
				imageSrc: images[activeImg.acitveImgeIndex + 1],
			});
		}
	};

	return (
		<div>
			{activeImg && (
				<div className="row">
					<button
						className="img-buttons"
						onClick={() => onBtnClickHandler('PREV')}
						disabled={activeImg.acitveImgeIndex === 0}
						title={activeImg.acitveImgeIndex === 0 ? 'No Previous Image' : ''}
					>
						Prev
					</button>
					<div>
						<img
							className="pokemon-img"
							src={activeImg.imageSrc}
							alt="pokemon-pic"
						/>
					</div>
					<button
						className="img-buttons"
						onClick={() => onBtnClickHandler('NEXT')}
						disabled={activeImg.acitveImgeIndex === images.length - 1}
						title={
							activeImg.acitveImgeIndex === images.length - 1
								? 'No Next Image'
								: ''
						}
					>
						Next
					</button>
				</div>
			)}
			{activeImg === null && (
				<p className="heading-blue">No image preview avialable!</p>
			)}
			{activeImg === undefined && <p className="heading-blue">Loading...!</p>}
		</div>
	);
};
export default PokemonImagePreview;

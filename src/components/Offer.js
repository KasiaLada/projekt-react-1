import './Offer.css';

const Offer = () => {
	const items = [
		{ label: 'oferta 1', isNew: true },
		{ label: 'oferta 2', isNew: false },
		{ label: 'oferta 3', isNew: false },
		{ label: 'oferta 4', isNew: false },
		{ label: 'oferta 5', isNew: false },
		{ label: 'oferta 6', isNew: false },
	];
	return (
		<section className='offer'>
			<div className='container'>
				<h2 className='offer-title'>Czym zajmuje się nasza firma? </h2>
				<ul className='box-wrapper'>
					{items.map((offer) => (
						<li className='box'>
							{offer.label}
							{offer.isNew ? <div className='new'></div> : null}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
	// return (
	// 	<ul>
	// 		<li>Usługa 1 (nowość)</li>
	// 		<li>Usługa 2</li>
	// 		<li>Usługa 3</li>
	// 		<li>Usługa 4</li>
	// 		<li>Usługa 5</li>
	// 		<li>Usługa 6</li>
	// 	</ul>
	// );
};

export default Offer;

import './AboutUs.css';

const AboutUs = () => {
	return (
		<div className='about' id='about'>
			<div className='container'>
				<h2 className='specialists'>Nasi specjaliści</h2>
				<section className='specialist'>
					<div class='image'></div>
					<div className='member'>
						<h3 className='member-name'>Imię Nazwisko [dział]</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non
							magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum
							lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt
						</p>
					</div>
				</section>
				<section className='specialist'>
					<div class='image'></div>
					<div className='member'>
						<h3 className='member-name'>Imię Nazwisko [dział]</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non
							magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum
							lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt
						</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AboutUs;

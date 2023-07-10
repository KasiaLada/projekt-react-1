import './Navigation.css';

const Navigation = () => {
	return (
		<header>
			<div className='navigation'>
				<div className='container navigation-content'>
					<p className='my'>moja firma</p>
					<ul className='navigation-list'>
						<li>
							<a href='#about' className='nav-about'>o nas</a>
						</li>
						<li>
							<a href='#offer' className='offer'>
								oferta
							</a>
						</li>
						<li>
							<a href="#contact" className='contact'>kontakt</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Navigation;

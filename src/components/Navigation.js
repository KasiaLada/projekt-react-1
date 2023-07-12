import './Navigation.css';

const Navigation = () => {
	return (
		<nav>
			<div className='navigation'>
				<div className='container navigation-content'>
					<p className='my'>moja firma</p>
					<ul className='navigation-list'>
						<li>
							<a href='#about' className='nav-link'>
								o nas
							</a>
						</li>
						<li>
							<a href='#offer' className='nav-link'>
								oferta
							</a>
						</li>
						<li>
							<a href='#contact' className='nav-link nav-link-disabled'>
								kontakt
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;

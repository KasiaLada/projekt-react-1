import './Navigation.css';

const Navigation = () => {
	return (
		<header>
			<div className='navigation'>
				<div className='container navigation-content'>
					<p className='my'>moja firma</p>
					<ul className='navigation-list'>
						<li>
							<p>o nas</p>
						</li>
						<li>
							<p>oferta</p>
						</li>
						<li>
							<p>kontakt</p>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Navigation;

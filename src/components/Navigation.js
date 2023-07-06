import './Navigation.css';

const App = () => {
	return (
		<header>
			<div className='container'>
				<div className='navigation'>
					<p className="my">moja firma</p>
					<ul className = "navigation-list">
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

export default App;

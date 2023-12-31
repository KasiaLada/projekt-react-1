import './Header.css';

const Header = () => {
	return (
		<header>
			<div className='main-block'>
				<div className='container'>
					<h1 className='main-text'>Nasza firma oferuje najwyższej jakości produkty.</h1>
					<h3 className='h3-text'>Nie wierz nam na słowo - sprawdź</h3>
					<div className='main-button'>
						<a href='#offer' className='link-button'>
							Oferta
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;

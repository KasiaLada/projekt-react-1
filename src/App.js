import './reset.css';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

import Offer from './components/Offer';

const App = () => {
	return (
		<>
			<Navigation />
			<Header />
			<main>
				<AboutUs />
				<Offer />
			</main>
			<Footer />
		</>
	);
};

export default App;

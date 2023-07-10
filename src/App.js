import './reset.css';
import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
// import Reset from './utils/Reset.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

import Offer from './components/Offer';

const App = () => {
	return (
		<div>
			<Navigation />
			<Main />
			<AboutUs />
			<Offer />
			<Footer />
		</div>
	);
};

export default App;

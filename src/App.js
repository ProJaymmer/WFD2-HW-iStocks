import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Stocks from './Stocks';
import About from './About';
import stocks from './Stock-data';
import Stock from './Stock';

function App() {
	console.log(stocks);
	return (
		<div className='App'>
			<nav>
				<Link to='/homepage'>
					<h2>iStocks</h2>
				</Link>
				<Link to='/stocks'>
					<p>Stocks</p>
				</Link>
				<Link to='/about'>
					<p>About</p>
				</Link>
			</nav>
			<main>
				<Route path='/homepage' exact component={Home} />
				<Route path='/stocks' exact render={() => <Stocks stocks={stocks} />} />
				<Route path='/about' exact component={About} />
				<Route path='/Stock:stuff' component={Stock} />
			</main>
		</div>
	);
}

export default App;

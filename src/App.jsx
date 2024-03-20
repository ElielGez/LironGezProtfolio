import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlayGround from './pages/PlayGround';
import About from './pages/About';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/playground' element={<PlayGround />} />
		</Routes>
	);
}

export default App;

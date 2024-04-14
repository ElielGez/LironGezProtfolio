import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlayGround from './pages/PlayGround';
import About from './pages/About';
import RecipeIt from './pages/RecipeIt';
import Babysitter from './pages/Babysitter';
import Teperberg from './pages/Teperberg';
import CV from './pages/CV';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/projects/recipeit' element={<RecipeIt />} />
			<Route path='/projects/babysitter' element={<Babysitter />} />
			<Route path='/projects/teperberg' element={<Teperberg />} />
			<Route path='/cv' element={<CV />} />
			<Route path='/playground' element={<PlayGround />} />
		</Routes>
	);
}

export default App;

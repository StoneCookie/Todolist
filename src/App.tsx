import './Reset.css';
import './Variables.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='contacts' element={<Contacts />} />
			</Route>
		</Routes>
	);
}

export default App;

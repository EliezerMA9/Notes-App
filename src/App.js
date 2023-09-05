import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './Components/Login';
import { useState, useEffect } from 'react';
import MainScreen from './Components/MainScreen';

function App() {
	let [width, setWidth] = useState(0);

	let handleResizeChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResizeChange);
		return () => {
			window.removeEventListener('resize', handleResizeChange);
		};
	}, []);

	const isMobile = width <= 768;

	return (
		<Fragment>
			<CssBaseline />
			<MainScreen mobile={isMobile} />
			<Login mobile={isMobile} />
		</Fragment>
	);
}

export default App;

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './Components/Login';
import Topbar from './Components/TopBar';

function App() {
	return (
		<Fragment>
			<CssBaseline />
			<Topbar />
			<Login></Login>
		</Fragment>
	);
}

export default App;

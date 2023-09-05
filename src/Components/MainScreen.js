import { Container } from '@mui/material';

export default function MainScreen(props) {
	return (
		<Container className='container' id='mainscreen'>
			<Container>
				<p>{props.mobile ? 'true' : 'false'}</p>
			</Container>
		</Container>
	);
}

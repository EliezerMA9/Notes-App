import { Container, TextField, Button, Grid } from '@mui/material';

export default function Login(props) {
	return (
		<Container>
			<Grid
				container
				direction='column'
				alignContent='center'
				alignItems='center'
			>
				<TextField id='username' label='Username' variant='outlined' />
				<TextField id='password' label='Password' variant='outlined' />
				<Button variant='outlined'>login</Button>
			</Grid>
		</Container>
	);
}

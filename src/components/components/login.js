import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
//MaterialUI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "../css/login.css";
import "../css/home.css";
import Nav from './nav.js';
// const useStyles = makeStyles((theme) => ({
// 	paper: {
// 		marginTop: theme.spacing(8),
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 	},
// 	avatar: {
// 		margin: theme.spacing(1),
// 		backgroundColor: theme.palette.secondary.main,
// 	},
// 	form: {
// 		width: '100%', // Fix IE 11 issue.
// 		marginTop: theme.spacing(1),
// 	},
// 	submit: {
// 		margin: theme.spacing(3, 0, 2),
// 	},
// }));

export default function SignIn() {
	const history = useHistory();
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				history.push('/home');
				//console.log(res);
				//console.log(res.data);
			});
	};

	// const classes = useStyles();

	return (
<>
		<Container  component="main" maxWidth="xs">
			
			<CssBaseline />
			<div class='formdiv' >
				
				{/* <Avatar> </Avatar> */}
				<Typography class='s1'component="h1" variant="h5">
					Sign in
				</Typography>
				<form class='myform' noValidate>
					<TextField
					class='text'
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						// label="Email Address"
						name="email"
						autoComplete="email"
						placeholder='email'
						autoFocus
						onChange={handleChange}
					/>
					<TextField
					class='text2'
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						// label="Password"
						placeholder='Password'
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleChange}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
					class='mybutton'
						type="submit"
						fullWidth
						variant="contained"
						color="dark"
					
						onClick={handleSubmit}
					>
						Sign In
					</Button>
					<Grid container>
						{/* <Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid> */}
						<Grid class='dont' item>
							<Link href="/register" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			
			{/* <Footer /> */}
		</Container>
		<Nav />
</>
	);
}

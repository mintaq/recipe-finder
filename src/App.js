import React, { useEffect, useState } from 'react';
import keys from './config/keys';
import Recipes from './components/Recipes/Recipes';
import DetailRecipe from './components/Recipes/DetailRecipe/DetailRecipe';
import { Grid, AppBar, Toolbar, Typography, Button, IconButton, makeStyles, Modal } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './App.module.css';

function App() {
	const [recipes, setRecipes] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [query, setQuery] = useState('chicken');
	const [showModal, setShowModal] = useState(false);
	const [pickedRecipe, setPickedRecipe] = useState({});

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${keys.APPLICATION_ID}&app_key=${keys.APPLICATION_KEYS}`
		);
		const data = await response.json();
		console.log(data.hits);
		setRecipes(data.hits);
	};

	const getSearch = e => {
		e.preventDefault();
		setQuery(searchInput);
		setSearchInput('');
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const handleOpen = recipe => {
		setPickedRecipe(recipe);
		setShowModal(true);
	};

	const getModalStyle = () => {
		const top = 50;
		const left = 50;

		return {
			top: `${top}%`,
			left: `${left}%`,
			transform: `translate(-${top}%, -${left}%)`,
		};
	};



	const [modalStyle] = React.useState(getModalStyle);

	return (
		<div className={styles.App}>
			<Grid container>
				{/* <Grid item className={styles.Logo}>
					<img src="/image/49dcf0e9-32ff-4979-8371-9a19e674ac9f_200x200.png" alt="logo" />
				</Grid> */}
				<Grid item>
					<AppBar position="fixed" className={styles.App_Bar}>
						<Toolbar>
							<Typography variant="h6" className={styles.Typo}>
								Recipe Finder
							</Typography>
						</Toolbar>
					</AppBar>
				</Grid>
				<Grid item className={styles.Search_Form}>
					<form onSubmit={getSearch}>
						<input
							className={styles.Search_Bar}
							type="text"
							value={searchInput}
							onChange={e => setSearchInput(e.target.value)}
						/>
						<button className={styles.Search_Button}>Search</button>
					</form>
				</Grid>
				<Grid item className={styles.Recipes}>
					{<Recipes recipes={recipes} query={query} handleOpen={handleOpen} />}
				</Grid>
			</Grid>
			<Modal open={showModal} onClose={handleClose}>
				{<DetailRecipe recipe={pickedRecipe}  />}
			</Modal>
		</div>
	);
}

export default App;

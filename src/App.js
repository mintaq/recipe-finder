import React, { useEffect, useState } from 'react';
import keys from './config/keys';
import Recipes from './components/Recipes/Recipes';
import { Container } from '@material-ui/core/';
import styles from './App.module.css';

function App() {
	const [recipes, setRecipes] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [query, setQuery] = useState('chicken');

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

	return (
		<div className={styles.App}>
			<form onSubmit={getSearch} className={styles.Search_Form}>
				<input
					className="search-bar"
					type="text"
					value={searchInput}
					onChange={e => setSearchInput(e.target.value)}
				/>
				<button className="search-button">Search</button>
			</form>
			<div className={styles.Container}> {<Recipes recipes={recipes} />}</div>
		</div>
	);
}

export default App;

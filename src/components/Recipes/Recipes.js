import React from 'react';
import Recipe from './Recipe/Recipe';
import { Grid } from '@material-ui/core';
import styles from './Recipes.module.css';

const Recipes = ({ recipes }) => {
	const mapRecipe = () => {
		return recipes.map(({ recipe }, index) => (
			<Grid key={index} xs={12} sm={6} item>
				<Recipe recipe={recipe} />
			</Grid>
		));
	};

	return (
		<div className={styles.root}>
			<Grid className={styles.root} container spacing={10}>
				{recipes.map(({ recipe }, index) => (
					<Grid key={index} xs={12} sm={6} item>
						<Recipe recipe={recipe} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Recipes;

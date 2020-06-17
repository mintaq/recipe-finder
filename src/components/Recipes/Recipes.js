import React, { useState } from 'react';
import Recipe from './Recipe/Recipe';
import { Grid, Container, Typography } from '@material-ui/core';
import styles from './Recipes.module.css';

const Recipes = ({ recipes, query,handleOpen }) => {
	
	return (
		<Container maxWidth="xl">
			<Grid className={styles.root} container alignItems="center" spacing={4}>
				<Grid item xs={12} sm={12} container justify="flex-start" alignItems="flex-start">
					<Typography variant="body1" gutterBottom>
						Kết quả cho: "{query}"
					</Typography>
				</Grid>
				{recipes.map(({ recipe }, index) => (
					<Grid key={index} xs={12} sm={3} item >
						<Recipe recipe={recipe}  handleOpen={handleOpen}/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Recipes;

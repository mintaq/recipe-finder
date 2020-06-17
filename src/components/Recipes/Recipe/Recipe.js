import React, { useState } from 'react';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	CircularProgress,
	Modal,
} from '@material-ui/core/';
import DetailRecipe from '../DetailRecipe/DetailRecipe';
import styles from './Recipe.module.css';

const Recipe = ({ recipe, handleOpen }) => {
	const renderProgress = () => {
		return <CircularProgress />;
	};

	const renderCard = () => {
		return (
			<div>
				<Card className={styles.root} onClick={() => handleOpen(recipe)}>
					<CardActionArea>
						<CardMedia className={styles.media} image={recipe.image} title={recipe.label} />
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{recipe.label}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Source: {recipe.source}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				
			</div>
		);
	};

	return recipe ? renderCard() : renderProgress();
};

export default Recipe;

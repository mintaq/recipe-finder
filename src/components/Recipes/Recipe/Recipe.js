import React from 'react';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	CircularProgress,
} from '@material-ui/core/';

import styles from './Recipe.module.css';

const Recipe = ({ recipe }) => {
	const renderProgress = () => {
		return <CircularProgress />;
	};

	const renderCard = () => {
		return (
			<Card className={styles.root}>
				<CardActionArea>
					<CardMedia className={styles.media} image={recipe.image} title={recipe.label} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{recipe.label}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							Calories: {recipe.calories}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
		);
	};

	return recipe ? renderCard() : renderProgress();
};

export default Recipe;

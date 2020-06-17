import React from 'react';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	makeStyles,
} from '@material-ui/core/';

import styles from './DetailRecipe.module.css';

const DetailCard = ({ recipe }) => {
	const useStyles = makeStyles(theme => ({
		paper: {
			position: 'absolute',
			width: 700,
			backgroundColor: theme.palette.background.paper,
			border: '2px solid #000',
			boxShadow: theme.shadows[5],
			// padding: theme.spacing(2, 4, 3),
		},
	}));

	const getModalStyle = () => {
		const top = 45;
		const left = 50;

		return {
			top: `${top}%`,
			left: `${left}%`,
			transform: `translate(-${top}%, -${left}%)`,
		};
	};

	const [modalStyle] = React.useState(getModalStyle);
	const classes = useStyles();

	return (
		<Card style={modalStyle} className={classes.paper}>
			<CardActionArea>
				<CardMedia className={styles.media} image={recipe.image} title={recipe.label} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2" id="simple-modal-title">
						{recipe.label}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p" id="simple-modal-description">
						Calories: {Number(recipe.calories).toFixed(2)} kcal
					</Typography>
					{recipe.ingredients.map(ing => {
						return (
							<Typography variant="body2" color="textSecondary" component="p" id="simple-modal-description">
								- {ing.text}, ({Math.round((Number)(ing.weight))} g)
							</Typography>
						);
					})}
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default DetailCard;

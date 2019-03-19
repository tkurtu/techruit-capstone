import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import wiggle from './wiggle.svg';
import Search from '../Searchbar/Search'


const Hero = props => {
	const { classes } = props;
	return (
		<div className={classes.layout}>
			<div className={classes.hero}>
				<img className={classes.backgroundImage} src={wiggle} alt="background" />
				<Grid container>
					<div>
						<Typography clcassName={classes.header} variant="h3">
							Find.Connect.Collaborate
						</Typography>
						<Typography clcassName={classes.subtitle}>Search your field</Typography>
            <Search searchJob={props.searchJob}/>
					</div>
					<div>
					</div>
				</Grid>
			</div>
		</div>
	);
};

const styles = themes => ({
	layout: {
		width: 'auto',
		backgroundColor: themes.palette.secondary.contrastText,
	},

	hero: {
		height: 500,
	},

	backgroundImage: {
		position: 'absolute',
	},

	subtitle: {
		color: themes.palette.primary.light
	}
});

export default withStyles(styles)(Hero);



//<Search
// searchJob={this.searchJob}
// jobs={this.state.jobs} 
// />
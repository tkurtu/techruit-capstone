import React from 'react';
import './Hero.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Search from '../Searchbar/Search';
//grid has flex 

const Hero = props => {
  const { classes } = props;
  return (
    <section className='background-image'>
      <Grid className={classes.container}>
          <Typography className={classes.slogan} variant="h2">
          Find.
          Connect.
          Collaborate.
          </Typography>
          <Search 
          searchJob={props.searchJob} 
           />
      </Grid>
    </section>
  );
};

const styles = themes => ({

  container: {
    display: 'inline-block',
    boxShadow: 'none',
    border: 'none',
  },
  slogan: {
    backgroundColor: themes.palette.primary.dark,
    color: themes.palette.secondary.contrastText,
    fontSize: '4.5rem',
  }
});

export default withStyles(styles)(Hero);

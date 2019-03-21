import React from 'react';
import './Hero.css';
import Typography from '@material-ui/core/Typography';
// import CardMedia from '@material-ui/core/CardMedia';
// import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Search from '../Searchbar/Search';
//grid has flex 

const Hero = props => {
  const { classes } = props;
  return (
    <section className='background-image'>
      <Grid className={classes.container}>
          <Typography className={classes.title} variant="h2">
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
  title: {
    backgroundColor: themes.palette.primary.dark,
    color: themes.palette.secondary.contrastText,
  }

  // overlay: {
  //   position: 'absolute',
  //   top: '20px',
  //   left: '20px',
  //   color: 'black',
  //   backgroundColor: 'white'
  // }


});

export default withStyles(styles)(Hero);

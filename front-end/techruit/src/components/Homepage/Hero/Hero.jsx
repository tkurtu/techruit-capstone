import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, withTheme } from '@material-ui/core/styles';
import wiggle from './wiggle.svg';
import Search from '../Searchbar/Search';
//grid has flex 

const Hero = props => {
  const { classes } = props;
  return (
    <section className={classes.layout}>
        <Grid container> 
          <div className={classes.text}>
            <Typography className={classes.fontColor}
            variant="h3">Find.Connect.Collaborate</Typography>
            <Search searchJob={props.searchJob} jobs={props.jobs} />
          </div>
          <div className={classes.backgroundImage}>
            <img className={classes.backgroundImage} src={wiggle} alt="background" />
          </div>
        </Grid>
    </section>
  );
};

const styles = themes => ({
  repeat: {
    backgroundImage: { wiggle }
  },

  layout: {
    width: 'auto',
    backgroundColor: themes.palette.primary.main,
    height: 500,
    display: 'flex',
  },

  backgroundImage: {
    position: 'absolute',
  },

  text: {
    backgroundColor: themes.palette.primary.dark,
    alignSelf: "center",
  },

  fontColor: {
    color: "white",
  }
});

export default withStyles(styles)(Hero);

{
  /* <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}/> */
}

//<Search
// searchJob={this.searchJob}
// jobs={this.state.jobs}
// />

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import searchJob from './images/search.svg';
import searchRecruiters from './images/recruiters.svg';
import makeConnections from './images/connect.svg';
import CardContent from '@material-ui/core/CardContent';
import Search from '../Searchbar/Search';

const Info = props => {
  const { classes } = props;
  return (
    <div>
      <Search searchJob={props.searchJob} />
      <Typography className={classes.grow} variant="h2">
        how it works
      </Typography>
      <Grid align="center">
        <Grid className={classes.grid}
          container
          justify="space-around"
          alignItems="center">
          <CardContent className={classes.cardWidth}>
            <img className={classes.img} alt="complex" src={searchJob} />
            <Typography variant="h6">Find a Job</Typography>
            <Typography variant="body1" className={classes.paragraph}>
              Search through our database to find the work that fits your skills
            </Typography>
          </CardContent>

          <CardContent className={classes.cardWidth}>
            <img className={classes.img} alt="complex" src={searchRecruiters} />
            <Typography variant="h6">Search Recruiters & Freelancers</Typography>
            <Typography variant="body1" className={classes.paragraph}>
              Find a company that's looking to hire someone of your skillset
            </Typography>
          </CardContent>

          <CardContent className={classes.cardWidth}>
            <img className={classes.img} alt="complex" src={makeConnections} />
            <Typography variant="h6">Connect & Collab</Typography>
            <Typography variant="body1" className={classes.paragraph}>
              Build meaningful connections with recruiters and freelancers just like you
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

const styles = themes => ({
  grow: {
    flexGrow: 1,
    color: themes.palette.primary.main,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: '60px',
    marginBottom: '60px',
    [themes.breakpoints.down('xs')]: {
      fontSize: '3rem'
    }
  },

  grid: {
    [themes.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },

  img: {
    width: 200,
    height: 200,
    // margin: 'auto'
  },

  cardWidth: {
    width: 200,
    [themes.breakpoints.down('sm')]: {
      width: 175
    },
  },

  paragraph: {
    width: '75%'
  }
});

export default withStyles(styles)(Info);

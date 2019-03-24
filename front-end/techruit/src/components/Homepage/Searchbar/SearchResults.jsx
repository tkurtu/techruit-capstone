import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import Search from './Search';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { borders } from '@material-ui/system';


const SearchResults = props => {
  const { classes } = props;
  return (
    <section className={classes.containerFlex} borders>
        <Paper>
        <Typography boxShadow="none" dangerouslySetInnerHTML={{ __html: props.title }} />
        </Paper>
        <Paper className={classes.description}>
          <Typography>{props.description}</Typography>
          {/* <Typography>{props.location}</Typography> */}
          <Typography>{props.redirect_url}</Typography>
        </Paper>
    </section>
  );
};

const styles = themes => ({
  containerFlex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderBottom: '1px solid #ff9871',
  },

  description: {
    width: '50%',
    boxShadow: 'none',
  }

});

export default withStyles(styles)(SearchResults);


import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '../Homepage/Main/Grid/Grid'

class Confirm extends Component {
  render () {
  const { classes } = this.props;

    return (
      <div>
        <Typography className={classes.subTitle} variant='h4'> thank you for signing up </Typography>
        <Typography className={classes.title} variant='h2'> Get Started </Typography>
        <Grid />
      </div>
    )
  }

}

const styles = themes => ({
  formCenter: {
    textAlign: "center",
  },

  subTitle: {
    color: themes.palette.primary.main,
    paddingTop: 15,
  },

  title: {
    color: themes.palette.primary.main,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '50px',
  }
})

export default withStyles(styles)(Confirm);
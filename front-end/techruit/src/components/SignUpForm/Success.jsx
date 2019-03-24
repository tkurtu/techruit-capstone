import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Confirm extends Component {
  // continue = e => {
  //   e.preventDefault();
  //   //SQL LINK DATABASE
  //   this.props.nextStep();
  // };

  // back = e => {
  //   e.preventDefault();
  //   this.props.prevStep();
  // }

  render () {
  const { classes } = this.props;
  // const { values: { name, email, company, occupation, location } } = this.props;

    return (
      <div>
        <Typography> thank you </Typography>
       
      </div>
    )
  }

}

const styles = themes => ({

  // continueButton: {
  //   margin: 15,
  //   backgroundColor:themes.palette.primary.light,
  // },

  // backButton: {
  //   margin: 15,
  //   backgroundColor:themes.palette.secondary.light,
  // }
})

export default withStyles(styles)(Confirm);
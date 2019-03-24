import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class FormMiscDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render () {
  const { classes } = this.props;
  const { values, handleChange } = this.props;

    return (
      <div>
        <Typography> Enter Profile Details</Typography>
        <TextField
          placeholder="Enter your comapany name"
          label="Company Name"
          onChange={handleChange('company')}
          defaultValue={values.company}
        />
        <br/>
         <TextField
          placeholder="Enter your Occupation"
          label="Occupation"
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
        />
        <br/>
         <TextField
          placeholder="Enter your location"
          label="Location"
          onChange={handleChange('location')}
          defaultValue={values.location}
        />
        <br/>
        <Button
          label='Back'
          className={classes.backButton}
          onClick={this.back}
        >
        Back
        </Button>
        
        <Button
          label='Next'
          className={classes.continueButton}
          onClick={this.continue}
        >
        Continue
        </Button>
      </div>
    )
  }

}

const styles = themes => ({

  continueButton: {
    margin: 15,
    backgroundColor:themes.palette.primary.light,
  },

  backButton: {
    margin: 15,
    backgroundColor:themes.palette.secondary.light,
  }
})

export default withStyles(styles)(FormMiscDetails);
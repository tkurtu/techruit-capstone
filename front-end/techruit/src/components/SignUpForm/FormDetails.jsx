import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render () {
  const { classes } = this.props;
  const { values, handleChange } = this.props;

    return (
      <div className={classes.formCenter}>
        <Typography> Enter User Details</Typography>
        <TextField className={classes.formWidth}
          placeholder="Enter your name"
          label="Name"
          onChange={handleChange('name')}
          defaultValue={values.name}
        />
        <br/>
         <TextField className={classes.formWidth}
          placeholder="Enter your email"
          label="Email"
          onChange={handleChange('email')}
          defaultValue={values.email}
        />
        <br/>
        <Button
          label='Continue'
          className={classes.button}
          onClick={this.continue}
        >
        Next
        </Button>
      </div>
    )
  }

}

const styles = themes => ({

  button: {
    margin: 15,
    backgroundColor:themes.palette.primary.light,
  },

  formWidth: {
    width: "50%",
    marginBottom: '2%',
    marginTop: '2%'
  },

  formCenter: {
    textAlign: "center",
  }
})

export default withStyles(styles)(FormDetails);
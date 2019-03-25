import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';

const addUser = `http://localhost:8080/signup`;

class FormMiscDetails extends Component {
  continue = e => {
    e.preventDefault();
    axios
    .post(addUser, {
      name: this.props.name,
      email: this.props.email,
      company: this.props.company,
      occupation: this.props.occupation,
      location: this.props.location,
  }).then(response => {
    console.log('sent!');
  })
  this.props.nextStep()
  }
  

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render () {
  const { classes } = this.props;
  const { values: { name, email, company, occupation, location } } = this.props;

    return (
      <div className={classes.formCenter}>
        <Typography> Confirm your details</Typography>
        <List>
          <ListItem className={classes.formCenter}>
            <ListItemText
              primary="Full Name" 
              secondary={ name }
            />
          </ListItem >
          <ListItem className={classes.formCenter}>
            <ListItemText 
              primary="Email" 
              secondary={ email }
            />
          </ListItem>
          <ListItem className={classes.formCenter}>
            <ListItemText 
              primary="Company" 
              secondary={ company }
            />
          </ListItem>
          <ListItem className={classes.formCenter}>
            <ListItemText 
              primary="Occupation" 
              secondary={ occupation }
            />
          </ListItem>
          <ListItem className={classes.formCenter}>
            <ListItemText 
              primary="Location" 
              secondary={ location }
            />
          </ListItem>
        </List>
     
        <Button
          label='Back'
          className={classes.backButton}
          onClick={this.back}
        >
        
        Back
        </Button>
        
        <Button
          label='Submit'
          className={classes.continueButton}
          onClick={this.continue}
        >
        Submit
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
  },

  formCenter: {
    textAlign: "center",
    marginBottom: '2%',
    marginTop: '2%'
  },
})

export default withStyles(styles)(FormMiscDetails);
import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



class FormMiscDetails extends Component {
  continue = e => {
    e.preventDefault();
    //SQL LINK DATABASE
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render () {
  const { classes } = this.props;
  const { values: { name, email, company, occupation, location } } = this.props;

    return (
      <div>
        <Typography> Confirm your details</Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Full Name" 
              secondary={ name }
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Email" 
              secondary={ email }
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Company" 
              secondary={ company }
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Occupation" 
              secondary={ occupation }
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Location" 
              secondary={ location }
            />
          </ListItem>

        </List>
        <Button
          label='Back'
          // primary={true}
          className={classes.backButton}
          onClick={this.back}
        >
        Back
        </Button>
        
        <Button
          label='Submit'
          // primary={true}
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
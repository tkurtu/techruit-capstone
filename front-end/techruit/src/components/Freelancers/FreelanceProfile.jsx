import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class FreelanceProfile extends React.Component {
render() {
  const { classes } = this.props;
  console.log(this.props.freelancers)
  const currentFreelancer = this.props.freelancers.filter(freelancer => {
    return freelancer.id === this.props.match.params.id
  });
  console.log(currentFreelancer[0]);
  const freelancer = currentFreelancer[0];
  console.log(freelancer)

  // const profile = currentRecruiter
  // console.log(profile)

    return (
      <div className={classes.wrapper}>
        <Typography className={classes.title} variant="h4">{freelancer.name}</Typography>
        <Card>
        <Paper>
          contact: 
        </Paper>
          {freelancer.email}
        <Paper>
          about us:
        </Paper>
        {freelancer.description}
        </Card>
        email
        <Button className={classes.button}>
          reach out to {freelancer.name}
        </Button>
      </div>
    );
  }
}

const styles = themes => ({ 
  wrapper: {
    backgroundColor: themes.palette.secondary.constrastText,
  },
  
  title: {
    color: themes.palette.secondary.dark,
    padding: 30
  },

  button: {
    backgroundColor:themes.palette.secondary.light
  }

})


export default withStyles(styles)(FreelanceProfile);

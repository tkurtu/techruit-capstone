import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';


class RecruiterProfile extends React.Component {
render() {
  const { classes } = this.props;
  const currentRecruiter = this.props.recruiters.filter(recruiter => {
    return recruiter.id === this.props.match.params.id
  });
  console.log(currentRecruiter[0]);
  const profile = currentRecruiter[0];

    return (
      <div className={classes.wrapper}>
        <Typography className={classes.title} variant="h4">{profile.companyName}</Typography>
        <Card>
        <Paper>
          contact: 
        </Paper>
          {profile.email}
        <Paper>
          about us:
        </Paper>
        {profile.description}
        </Card>
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

  
})


export default withStyles(styles)(RecruiterProfile);
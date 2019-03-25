import React from 'react';
import Recruiter from './Recruiter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



class AllRecruiters extends React.Component {
render() {
  const { classes } = this.props;
  const recruitersSearch = this.props.recruiters.map(recruiter => {
  return <Recruiter 
    companyName={recruiter.companyName}
    description={recruiter.description}
    lookingFor={recruiter.lookingFor}
    id={recruiter.id}
    />
  })
  console.log(recruitersSearch)
    return (
      <div>
         <Typography variant="h3" className={classes.title}>
            search recruiters
        </Typography>
        <Grid item xs={6} padding={30}>
        {recruitersSearch}
        </Grid>
      </div>
    );
  }
}

const styles = themes => ({ 
  title: {
    color: themes.palette.primary.main,
    padding: 30,
  },
})


export default withStyles(styles)(AllRecruiters);



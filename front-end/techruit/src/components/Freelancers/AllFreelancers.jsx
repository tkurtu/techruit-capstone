import React from 'react';
import Freelancer from './Freelancer';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class AllFreelancers extends React.Component {
render() {
  const { classes } = this.props;
  const freelancerSearch = this.props.freelancers.map(user => {
  return <Freelancer 
    name={user.name}
    description={user.description}
    occupation={user.occupation}
    id={user.id}
    />
  })

    return (
      <div>
          <Typography variant="h3" className={classes.title}>
          search freelancers
        </Typography>
        <div className={classes.list}>{freelancerSearch}</div>
      </div>
    );
  }
}

const styles = themes => ({
  title: {
    color: themes.palette.primary.main,
    padding: 30
  },

  list: {
    padding: '0 40px',
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // marginBottom: 10
  }
});

export default withStyles(styles)(AllFreelancers);




import React from 'react';
import Recruiter from './RecruiterDetails/Recruiter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProfileModal from './ProfileModal/ProfileModal';

class AllRecruiters extends React.Component {
// should have handleOnClikc func
// should have open state
// should render porfilemodal
// open={this.state.open} onClose={this.handleClose}

  state = {
  open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

render() {
  const { classes } = this.props;
  const recruitersSearch = this.props.recruiters.map(recruiter => {
  return <Recruiter 
    companyName={recruiter.companyName}
    description={recruiter.description}
    lookingFor={recruiter.lookingFor}
    id={recruiter.id}
    handleOpen={this.handleOpen}
    />
  
  })
  console.log(recruitersSearch)
    return (
      <div>
         <ProfileModal 
         handleClose={this.handleClose}
         open={this.state.open}
         />
         <Typography variant="h3" className={classes.title}>
            search recruiters
        </Typography>
      <div className={classes.list}>
        {recruitersSearch}
      </div>
      </div>
    );
  }
}

const styles = themes => ({ 
  title: {
    color: themes.palette.primary.main,
    padding: 30,
  },

  list: {
    padding: '0 30px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  }
})


export default withStyles(styles)(AllRecruiters);



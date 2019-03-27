import React from 'react';
import Recruiter from './RecruiterDetails/Recruiter';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProfileModal from './ProfileModal/ProfileModal';

class AllRecruiters extends React.Component {
  state = {
    open: false,
    selectedRecruiter: null
  };

  handleOpen = recruiter => {
    
    this.setState({ open: true, selectedRecruiter: recruiter });
  };

  handleClose = () => {
    this.setState({ open: false, selectedRecruiter: null });
  };

  render() {

    const { classes, recruiters } = this.props;
    const { open, selectedRecruiter } = this.state
  
    return (
      <div>
        <Typography variant="h3" className={classes.title}>
          search recruiters
        </Typography>
        <div className={classes.list}>
          {recruiters.map(recruiter => (
            <Recruiter
              recruiter={recruiter}
              handleOpen={this.handleOpen}
            />
          ))}
        </div>
        <ProfileModal
          handleClose={this.handleClose}
          open={open}
          selectedRecruiter={selectedRecruiter}
        />
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
    padding: '0 30px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10
  }
});

export default withStyles(styles)(AllRecruiters);
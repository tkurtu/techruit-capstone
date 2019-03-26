import React from 'react';
import Recruiter from './RecruiterDetails/Recruiter';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProfileModal from './ProfileModal/ProfileModal';

class AllRecruiters extends React.Component {
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
      return (
        <Recruiter
          companyName={recruiter.companyName}
          description={recruiter.description}
          lookingFor={recruiter.lookingFor}
          id={recruiter.id}
          handleOpen={this.handleOpen}
        />
      );
    });

    return (
      <div>
        
        <ProfileModal
          handleClose={this.handleClose}
          open={this.state.open}
          recruiters={this.props.recruiters}
        />
        <Typography variant="h3" className={classes.title}>
          search recruiters
        </Typography>
        <div className={classes.list}>{recruitersSearch}</div>
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


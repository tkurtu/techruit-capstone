import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProfileModal from './ProfileModal';

class MappingProfile extends React.Component {
  render() {
    console.log(this.props.recruiters)
    const modalProfile = this.props.recruiters.map(profile => {
      return (
        <ProfileModal
          companyName={profile.companyName}
          description={profile.description}
          lookingFor={profile.lookingFor}
          id={profile.id}
        />
      );
    });
    console.log(modalProfile)

    
    return (
      <div>
        <div>{modalProfile}</div>
      </div>
    );
  }
}

const styles = themes => ({
  
});

export default withStyles(styles)(MappingProfile);

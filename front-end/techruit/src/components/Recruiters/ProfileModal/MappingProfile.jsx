import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ProfileModal from './ProfileModal';

class MappingProfile extends React.Component {
  render() {
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

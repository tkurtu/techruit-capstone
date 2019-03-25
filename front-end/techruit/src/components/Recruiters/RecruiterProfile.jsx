import React from 'react';
import Typography from '@material-ui/core/Typography';


class RecruiterProfile extends React.Component {
render() {
  console.log(this.props.recruiters)
  const currentRecruiter = this.props.recruiters.filter(recruiter => {
    return recruiter.id === this.props.match.params.id
  });
  console.log(currentRecruiter[0]);
  const profile = currentRecruiter[0];
  console.log(profile)

    return (
      <div>

        <Typography variant="h4">{profile.companyName}</Typography>
        <Typography>
          contact: 
        </Typography>
          {profile.email}
        <Typography>
          about us:
        </Typography>
        {profile.description}
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


export default RecruiterProfile;
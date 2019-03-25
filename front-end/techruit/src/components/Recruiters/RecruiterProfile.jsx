import React from 'react';

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
        <h2>{profile.companyName}</h2>
        <p>
          {profile.email}
        </p>
      </div>
    );
  }
}

export default RecruiterProfile;
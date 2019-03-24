import React from 'react';

class RecruiterProfile extends React.Component {
render() {
  console.log(this.props.recruiters)
  const currentRecruiter = this.props.recruiters.filter(recruiter => {
    return recruiter.id === this.props.match.params.id
  });
  console.log(currentRecruiter[0]);
  const profile = currentRecruiter
  console.log(profile)

    return (
      <div>
        <h2>name</h2>
        <p>
       email
        </p>
      </div>
    );
  }
}

export default RecruiterProfile;
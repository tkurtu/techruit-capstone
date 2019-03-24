import React from 'react';

class FreelanceProfile extends React.Component {
render() {
  console.log(this.props.freelancers)
  const currentFreelancer = this.props.freelancers.filter(freelancer => {
    return freelancer.id === this.props.match.params.id
  });
  console.log(currentFreelancer[0]);

  // const profile = currentRecruiter
  // console.log(profile)

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

export default FreelanceProfile;
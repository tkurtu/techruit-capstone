import React from 'react';
import Recruiter from './Recruiter';
import { Link } from 'react-router-dom';


class RecruiterProfile extends React.Component {

render() {
  console.log(this.props.recruiters)
  const currentRecruiter = this.props.recruiters.filter(recruiter => {
    return recruiter.id === this.props.match.params.id
  });
  console.log(currentRecruiter[0]);

  // const profile = currentRecruiter
  // console.log(profile)


    return (
      <div>
        <h2>{currentRecruiter[0].companyName}</h2>
        <p>
        {currentRecruiter[0].email}
        </p>
      </div>
    );
  }
}

export default RecruiterProfile;

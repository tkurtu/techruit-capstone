import React from 'react';
import Recruiter from './Recruiter';
import { Link } from 'react-router-dom';

class AllRecruiters extends React.Component {
render() {
  const recruitersSearch = this.props.recruiters.map(recruiter => {
  return <Recruiter 
    companyName={recruiter.companyName}
    description={recruiter.description}
    lookingFor={recruiter.lookingFor}
    id={recruiter.id}
    />
  })

    return (
      <div>
        <h1>search recruiters</h1>
        <ul>{recruitersSearch}</ul>
      </div>
    );
  }
}

export default AllRecruiters;
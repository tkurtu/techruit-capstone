import React from 'react';
import Recruiter from './Recruiter';
import { Link } from 'react-router-dom';

class AllRecruiters extends React.Component {


render() {
  console.log(this.props.recruiters)
  const recruitersSearch = this.props.recruiters.map(recruiter => {
  return <Recruiter 
    companyName={recruiter.companyName}
    description={recruiter.description}
    lookingFor={recruiter.lookingFor}
    id={recruiter.id}
    />
  })
  console.log(this.props.recruiters)
  console.log(recruitersSearch)

    return (
      <div>
        <h1>search recruiters</h1>
        <ul>{recruitersSearch}</ul>
      </div>
    );
  }
}

export default AllRecruiters;


  // componentDidUpdate (prevProps) {
  //   if (this.props.recruiters !== prevProps.match.params.id  ) {
  //     return true
  //   }
  // }
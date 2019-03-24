import React from 'react';
import Freelancer from './Freelancer';

class AllFreelancers extends React.Component {
render() {
  console.log(this.props.freelancers)
  const freelancerSearch = this.props.freelancers.map(user => {
  return <Freelancer 
    name={user.name}
    description={user.description}
    occupation={user.occupation}
    id={user.id}
    />
  })

    return (
      <div>
        <h1>search freelancers</h1>
        <ul>{freelancerSearch}</ul>
      </div>
    );
  }
}

export default AllFreelancers;




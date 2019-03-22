import React from 'react';

const Recruiter = (props) => {
  return (
    <section> 
        <h2>{props.companyName}</h2>
          <span>{props.email}</span>
        <div>
          <p>Searching for: {props.lookingFor}</p>
          <p>{props.description}</p>
        </div>
        <button>Check us out!</button>
    </section>
  )
}

export default Recruiter

//apply here, link to website , link to profile
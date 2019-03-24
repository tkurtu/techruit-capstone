import React from 'react';
import { Link } from 'react-router-dom';

const Recruiter = (props) => {
  return (
    <section> 
        <h2>{props.companyName}</h2>
          <span>{props.email}</span>
        <div>
          <p>Searching for: {props.lookingFor}</p>
          <p>{props.description}</p>
        </div>
        <Link to={`/recruiters/${props.id}`}>
          <button>Check us out!</button>
        </Link>
    </section>
  )
}

export default Recruiter

//apply here, link to website , link to profile
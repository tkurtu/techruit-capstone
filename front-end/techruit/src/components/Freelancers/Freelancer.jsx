import React from 'react';
import { Link } from 'react-router-dom';

const Freelancer = (props) => {
  return (
    <section> 
        <h2>{props.name}</h2>
          <span>{props.occupation}</span>
        <div>
          <p>{props.description}</p>
        </div>
        <Link to={`/freelancers/${props.id}`}>
          <button>find out more about!</button>
        </Link>
    </section>
  )
}

export default Freelancer
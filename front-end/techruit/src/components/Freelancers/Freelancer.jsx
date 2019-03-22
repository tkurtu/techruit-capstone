import React from 'react';

const Freelancer = (props) => {
  return (
    <section> 
        <h2>{props.name}</h2>
          <span>{props.occupation}</span>
        <div>
          <p>{props.description}</p>
        </div>
    </section>
  )
}

export default Freelancer
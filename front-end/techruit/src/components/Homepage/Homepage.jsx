import React from 'react';
import Hero from './Hero/Hero';

const Homepage = (props) => {
  return (
    <div>
       <Hero 
       searchJob={props.searchJob}
       jobs={props.jobs}
       />
    </div>
    )
  }



export default Homepage
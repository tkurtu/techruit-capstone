import React from 'react';
import Hero from './Hero/Hero';
import Main from './Main/Main'

const Homepage = (props) => {
  return (
    <div>
       <Hero 
       searchJob={props.searchJob}
       jobs={props.jobs}
       />
       <Main />
    </div>
    )
  }



export default Homepage
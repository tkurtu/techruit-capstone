import React from 'react';
import Hero from './Hero/Hero';
import Main from './Main/Main';
import Info from './InfoSection/Info'

const Homepage = (props) => {
  return (
    <div>
       <Hero 
       searchJob={props.searchJob}
       />
      <Info />
      <Main />
    </div>
    )
  }



export default Homepage
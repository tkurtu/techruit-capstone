import React from 'react';
import Hero from './Hero/Hero';

class Homepage extends React.Component {
render () {
  return (
    <div>
       <Hero searchJob={this.props.searchJob}/>

    </div>

    )
  }
}


export default Homepage
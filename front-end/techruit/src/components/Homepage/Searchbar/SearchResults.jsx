import React from 'react';
// import { Link } from 'react-router-dom';

const SearchResults = (props) => {
  return (
    <section> 
        <div>{props.title}</div>
        <div className="jobDescription">
          <p>{props.description}</p>
        </div>
      
    </section>
  )
}

export default SearchResults

//search results styling here
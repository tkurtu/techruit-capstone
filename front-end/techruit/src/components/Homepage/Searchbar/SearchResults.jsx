import React from 'react';

const color = {
  color: 'blue',
}

const SearchResults = (props) => {
  return (
    <section> 
        <div>{props.title} </div>
        <div className="jobDescription">
          <p>{props.description}</p>
          <p style={color}>{props.location}</p>
        </div>
      
    </section>
  )
}

export default SearchResults

//search results styling here


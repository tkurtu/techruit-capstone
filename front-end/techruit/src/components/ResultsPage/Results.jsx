import React from 'react';
import SearchResults from '../Homepage/Searchbar/SearchResults';


class Results extends React.Component {
render() {
  const jobSearch = this.props.jobs.map(job => {
  return (
    <SearchResults 
      title={job.title}
      description={job.description}
      location={job.redirect_url}
    />
  )
  })
    return (
      <div>
        <h1>RESULTS</h1>
        <ul>{jobSearch}</ul>
      </div>
    );
  }
}

export default Results;





// class Results extends React.Component {
//   render() {
//     const jobSearch = this.props.jobs.map(job => {
//     return <SearchResults 
//       title={job.title}
//       description={job.description}
//       location={job.redirect_url}
//       />
//     })
//       return (
//         <div>
//           <h1>RESULTS</h1>
//           <ul>{jobSearch}</ul>
//         </div>
//       );
//     }
  
//   }
  
//   export default Results;
  
  
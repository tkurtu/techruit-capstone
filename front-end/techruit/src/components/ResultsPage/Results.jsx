import React from 'react';
import SearchResults from '../Homepage/Searchbar/SearchResults';


class Results extends React.Component {

  componentDidMount() {
    console.log(this.props.jobs)
  }

  render() {
  
    const jobSearch = this.props.jobs.map(job => {
    return <SearchResults 
      title={job.title}
      description={job.description}
      />
  });
    return (
      <div>
        <h1>RESULTS</h1>
        <ul>{jobSearch}</ul>
      </div>
    );
  }

}

export default Results;

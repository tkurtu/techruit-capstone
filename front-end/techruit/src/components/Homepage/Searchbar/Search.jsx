import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
render() {
  return (
    <div> 
    <h1>SEARCH JOB</h1>
    <form onSubmit={(e) => this.props.searchJob(e)}>
      <input name='searchTerm'/>
      {/* <Link to='/results'> */}
        <button type="submit">
          Search your career
        </button>
      {/* </Link> */}
    </form>
    </div>
  )
  }
}

export default Search


  
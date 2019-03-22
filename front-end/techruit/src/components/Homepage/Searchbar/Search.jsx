import React from 'react';

class Search extends React.Component {
render() {
  return (
    <div> 
    <h1>SEARCH JOB</h1>
    <form onSubmit={(e) => this.props.searchJob(e)}>
      <input name='searchTerm'/>
        <button type="submit">
          Search your career
        </button>
    </form>
    </div>
  )
  }
}

export default Search

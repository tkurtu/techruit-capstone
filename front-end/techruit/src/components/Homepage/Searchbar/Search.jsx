import React from 'react';
// import { Link } from 'react-router-dom';

class Search extends React.Component {
render() {
  const jobSearch = this.props.jobs.map(job => {
    return <div>
      <span>{job.title}</span>
    </div>
  }).filter


  return (
    <div> 
      <h1>SEARCH BAR?</h1>
    <form onSubmit={(e) => this.props.searchJob(e)}>
      <input name='searchTerm'/>
      <button type="submit">
        Search
      </button>
    </form>
    {jobSearch}

    </div>
  )
  }
}

export default Search


// {/* <input
//   type="text"
//   placeholder="search your job!" />
//   <button> Search</button>
//    */}
// onClick={this.search}

// searchJob = () => {
//   axios
//     .get(`/search?q=${this.q.value}`)
//     .then(response => {
//       this.setState({
//         job: response.data.jobs
//       }, () => {
//         console.log('searched')
//       })
//     })
// }

// <h1>SEARCH BAR?</h1>
//       <input
//       type="text"
//       className="search"
//       placeholder="search"
//       name="job" ref={self => this.q = self} />
//   <button onSubmit={this.props.searchJob}>
//     Search
//   </button>
//   <ul className="display-jobs">
//     {jobSearch}
//   </ul>

// render () {
//   const jobSearch = this.props.jobs.map((job, i) => {
//     return <div
//     key={i}>
//     <ul>{job.title} </ul>
//     </div>
//   })
//}


    // {/* <input
    //   type="text"
    //   className="search"
    //   placeholder="search"
    //   name="job" ref={self => this.q = self} 
    //   />
    //     <button onClick={this.props.searchJob}>
    //     Search
    //     </button> */}
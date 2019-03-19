import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   jobs: [],
    // }
}


  searchJob = (e) => {
    e.preventDefault()
    console.log(e.target.searchTerm)

    // axios
    // .get(`/search?title_only=${this.q}`)
    // .then(response => {
    //   console.log(response)
    //   this.setState({
    //     jobs: response.data.jobs
    //   }, () => {
    //     console.log('updated search')
    //   })
    // })
}

  render() {
    return (
      <div>
        <Navbar />
          <Switch>
          <Route
              path="/" exact
              render={() => (
                <Homepage
                  searchJob={this.searchJob}
                />
              )}
          />
          

            

          </Switch>
      </div>
    );
  }
}

export default App;


  // // /ALL JOBS
//  componentDidMount() { 
//     axios
//       .get('/alljobs')
//       .then(response => {
//         console.log(response.data.jobs)
//         this.setState({
//           jobs: response.data.jobs
//         })
//       })
//   }



import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    }
}

  searchJob = (e) => {
    e.preventDefault()
    const q = e.target.searchTerm.value
    axios
    .get(`/search?title_only=${q}`)
    .then(response => {
      // console.log(response.data.jobs.results)
      this.setState({
        jobs: response.data.jobs.results
      }, () => {
        console.log(this.state.jobs)
      })
    })
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
                  jobs={this.state.jobs}
                />
              )}
          />
          </Switch>
      </div>
    );
  }
}

export default App;

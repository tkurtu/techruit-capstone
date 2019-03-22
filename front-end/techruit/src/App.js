import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Results from './components/ResultsPage/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }

  searchJob = e => {
    e.preventDefault();
    const q = e.target.searchTerm.value;
    if (q.trim() === '' || q === null) {
      return alert('Please enter a career search');
    }
    axios.get(`/search?title_only=${q}`).then(response => {
      console.log(response.data.jobs.results);
      this.setState(
        {
          jobs: response.data.jobs.results
        },
        () => {
          this.props.history.push('/results');
        }
      );
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Homepage searchJob={this.searchJob} />} />
          <Route path="/results" render={() => <Results jobs={this.state.jobs} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

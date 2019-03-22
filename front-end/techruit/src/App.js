import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Results from './components/ResultsPage/Results';
import AllFreelancers from './components/Freelancers/AllFreelancers';
import AllRecruiters from './components/Recruiters/AllRecruiters';

const freelancersURL = 'http://localhost:8080/freelancers';
const recruitersURL = 'http://localhost:8080/recruiters'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      freelancers: [],
      recruiters: [],
    };
  }

  componentDidMount() {
    axios
      .get(freelancersURL)
      .then(({ data }) => {
        this.setState({
          freelancers: data
        });
      })
      .then(() => {
        axios.get(recruitersURL)
        .then(({ data }) => {
          this.setState({
            recruiters: data
          });
        });
      });
  }

  searchJob = e => {
    e.preventDefault();
    const q = e.target.searchTerm.value;
    if (q.trim() === '' || q === null) {
      return alert('Please enter a search');
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

          <Route path="/freelancers" 
          render={() => 
            <AllFreelancers 
            freelancers={this.state.freelancers} 
            />} 
          />

          <Route path="/recruiters" 
          render={() => 
            <AllRecruiters 
            recruiters={this.state.recruiters} 
            />} 
          />

        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Results from './components/ResultsPage/Results';
import AllFreelancers from './components/Freelancers/AllFreelancers';
import AllRecruiters from './components/Recruiters/AllRecruiters';
import FreelanceProfile from './components/Freelancers/FreelanceProfile';
import UserForm from './components/SignUpForm/UserForm';
import Swal from 'sweetalert2';
import ProfileModal from './components/Recruiters/ProfileModal/ProfileModal';
import MappingProfile from './components/Recruiters/ProfileModal/MappingProfile';

const freelancersURL = 'http://localhost:8080/freelancers';
const recruitersURL = 'http://localhost:8080/recruiters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      freelancers: [],
      recruiters: []
    };
  }

  componentDidMount() {
    axios
      .get(freelancersURL)
      .then(response => {
        this.setState({
          freelancers: response.data //FREELANCER SETSTATE
        });
      })
      .then(() => {
        axios.get(recruitersURL).then(response => {
          this.setState({
            recruiters: response.data //RECRUITER SETSTATE
          });
        });
      });
  }

  searchJob = e => {
    e.preventDefault();
    const q = e.target.searchTerm.value;
    if (q.trim() === '' || q === null) {
      return Swal.fire({
        type: 'warning',
        title: 'Please enter a search request'
      });
    }
    axios.get(`/search?title_only=${q}`).then(response => {
      console.log(response.data.jobs.results);
      let jobs = response.data.jobs.results;
      if (jobs.length === 0) {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'There are no jobs available that title, please try again!'
        });
      } else
        this.setState({ jobs }, () => {
          this.props.history.push('/results');
          console.log(response.data.jobs.results);
        });
    });
  };

  render() {
    if (this.state.recruiters.length === 0 || !this.state.freelancers.length === 0) {
      return <div className="loading" />;
    } else {
      return (
        <div>
          <Navbar />
          <MappingProfile recruiters={this.state.recruiters} />
          <Switch>
            <Route path="/" exact render={() => <Homepage searchJob={this.searchJob} />} />

            <Route path="/signup" component={UserForm} />

            <Route path="/results" render={() => <Results jobs={this.state.jobs} />} />

            <Route
              path="/freelancers/:id"
              render={routeProps => (
                <FreelanceProfile {...routeProps} freelancers={this.state.freelancers} />
              )}
            />

            <Route
              path="/freelancers"
              render={() => <AllFreelancers freelancers={this.state.freelancers} />}
            />

            {/* <Route 
            path="/recruiters/:id" 
            render={routeProps => (
              <ProfileModal 
              {...routeProps}
              recruiters={this.state.recruiters} 
              />
            )} 
            />  */}

            <Route
              path="/recruiters"
              render={routeProps => <AllRecruiters {...routeProps} recruiters={this.state.recruiters} />}
            />
          </Switch>
          <ProfileModal recruiters={this.state.recruiters} />
        </div>
      );
    }
  }
}

export default withRouter(App);

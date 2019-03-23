import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Results from './components/ResultsPage/Results';
import AllFreelancers from './components/Freelancers/AllFreelancers';
import AllRecruiters from './components/Recruiters/AllRecruiters';
import SignUpModal from './components/SignUp/SignUpModal';

const freelancersURL = 'http://localhost:8080/freelancers';
const recruitersURL = 'http://localhost:8080/recruiters'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      freelancers: [],
      recruiters: [],
      showModal: false,
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
      let jobs = response.data.jobs.results
      this.setState({ jobs },
        () => {
          this.props.history.push('/results');
          console.log(response.data.jobs.results);

        }
      );
    });
  };

  openModal = () => {
    this.setState({
        showModal: true
    });
  }
  closeModal = () => {
    this.setState({
        showModal: false
    });
  }


  render() {
    return (
      <div>
        <Navbar />

        { this.state.showModal ? <div onClick={this.closeModal} className="back-drop"></div> : null }

          <button className="open-modal-btn" onClick={this.openModal}>Open Modal</button>

          <SignUpModal
              className="modal"
              openModal={this.state.showModal}
              closeModal={this.state.closeModal}>
                  Maybe aircrafts fly very high because they don't want to be seen in plane sight?
          </SignUpModal>



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

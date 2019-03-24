import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Results from './components/ResultsPage/Results';
import AllFreelancers from './components/Freelancers/AllFreelancers';
import AllRecruiters from './components/Recruiters/AllRecruiters';
// import SignUpModal from './components/SignUp/SignUpModal';
import RecruiterProfile from './components/Recruiters/RecruiterProfile';
import FreelanceProfile from './components/Freelancers/FreelanceProfile';
import UserForm from './components/SignUpForm/UserForm';


const freelancersURL = 'http://localhost:8080/freelancers';
const recruitersURL = 'http://localhost:8080/recruiters'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      freelancers: [],
      recruiters: [],
      // showModal: false,
    };
  }

  componentDidMount() {
    axios
      .get(freelancersURL)
      .then(response => {
        this.setState ({
          freelancers: response.data //FREELANCER STATE
        })
      }).then(() => {
        axios.get(recruitersURL)
        .then(response => {
          this.setState ({
            recruiters: response.data //RECRUITERS STATE
          })
          console.log(this.state.recruiters)
        })
      })
  }

  // componentWillReceiveProps(nextProps) {
  //   if(this.props.match.params.id !== nextProps.match.params.id)
      //this.response.data(nextProps.match.params.id);
  //   axios
  //     .get(freelancersURL)
  //     .then(({ data }) => {
  //       this.setState({
  //         freelancers: data
  //       });
  //     })
  //     .then(() => {
  //       axios.get(recruitersURL)
  //       .then(({ data }) => {
  //         this.setState({
  //           recruiters: data
  //         });
  //       });
  //     });
  // }

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


  render() {
    if (this.state.recruiters.length === 0 ||
      !this.state.freelancers.length === 0
    ) {
      return <h1>Loading</h1>;
    } else {
    return (
      <div>
        <Navbar />
        <UserForm />
        {/* <Switch>
          <Route path="/" exact render={() => <Homepage searchJob={this.searchJob} />} />
          
          <Route path="/results" render={() => <Results jobs={this.state.jobs} />} />

          <Route path="/freelancers" 
          render={() => 
            <AllFreelancers 
            freelancers={this.state.freelancers} 
            />} 
          />
          
          <Route 
            path="/freelancers/:id" 
            render={routeProps => (
              <FreelanceProfile 
              {...routeProps}
              freelancers={this.state.freelancers} 
              />
            )} 
            /> 

            <Route 
            path="/recruiters" 
            render={routeProps => (
              <AllRecruiters 
              {...routeProps}
              recruiters={this.state.recruiters} 
              />
            )} 
            /> 

            <Route 
            path="/recruiters/:id" 
            render={routeProps => (
              <RecruiterProfile 
              {...routeProps}
              recruiters={this.state.recruiters} 
              />
            )} 
            /> 
        </Switch> */}
      </div>
    );
  }
}
}


export default withRouter(App);


  {/* <SignUpModal
              openModal={this.state.showModal}
              closeModal={this.state.closeModal}>
          </SignUpModal>  */}

                 {/* <Route path="/recruiters" 
          render={() => 
            <AllRecruiters 
            recruiters={this.state.recruiters} 
            />} 
          /> */}


          // <Route 
          //   path="/recruiters" 
          //   render={routeProps => (
          //     <AllRecruiters 
          //     {...routeProps}
          //     recruiters={this.state.recruiters} 
          //     />
          //   )} 
          //   /> 


              // .then(() => {
      //   axios.get(recruitersURL)
      //   .then(({ data }) => {
      //     this.setState({
      //       recruiters: data
      //     });
      //   });
      // });
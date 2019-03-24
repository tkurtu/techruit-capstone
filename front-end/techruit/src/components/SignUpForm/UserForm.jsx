import React, {Component} from 'react';
import FormDetails from './FormDetails';
import FormMiscDetails from './FormMiscDetails';
import Confirm from './Confirm';
import Success from './Success';

class Userform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: '',
      email: '',
      company: '',
      occupation: '',
      location: '',
    };
  }
  // state = {
  //   step: 1,
  //   name: '',
  //   email: '',
  //   company: '',
  //   occupation: '',
  //   location: '',
  // }

  //proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  //proceed to previous step 
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  //handle input change 
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }
  
  render () {
    const { step } = this.state;
    const {name, email, company, occupation, location } = this.state;
    const values = {name, email, company, occupation, location }
    
  switch(step) {
      case 1: 
      return (
        <FormDetails 
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
        />
      )
      case 2: 
      return (
        <FormMiscDetails
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        handleChange={this.handleChange}
        values={values}
        />
      )

      case 3:
      return (
        <Confirm
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        values={values}
        />
      )

      case 4:
      return(
        <Success />
      )
    }
  }

}

export default Userform
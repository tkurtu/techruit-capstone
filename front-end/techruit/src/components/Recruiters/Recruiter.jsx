import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Recruiter = (props) => {
  return (
    <section> 
        <h2>{props.companyName}</h2>
          <span>{props.email}</span>
        <div>
          <p>Searching for: {props.lookingFor}</p>
          <p>{props.description}</p>
        </div>
        <Link to={`/recruiters/${props.id}`}>
          <button>Check us out!</button>
        </Link>
    </section>
  )
}

const styles = themes => ({

});

export default withStyles(styles)(Recruiter);

//apply here, link to website , link to profile
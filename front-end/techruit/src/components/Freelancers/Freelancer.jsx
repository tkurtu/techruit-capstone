import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import avatarImage from '../Recruiters/ProfileModal/grey-image.jpg';
//DISPLAY FLEX

const Freelancer = (props) => {
  const {classes} = props
  return (
    <section className={classes.root}> 
         <Avatar 
          className={classes.avatar}
          alt="avatar goes here" 
          src={avatarImage}
          className={classes.avatar} />
        <Typography variant="h4"
        className={classes.title}
        >
        
        {props.name}</Typography>
          <span>{props.occupation}</span>
        <div>
          <p>{props.description}</p>
        </div>
        <Link to={`/freelancers/${props.id}`}>
          <button>find out more about!</button>
        </Link>

    </section>
  )
}

const styles = themes => ({
  root: {
    width: 500,
    margin: '20px 0'
  },

  title: {
    color: themes.palette.secondary.dark,
    fontWeight: 600,
  },

  avatar: {
    margin: '0px auto',
    height: 150,
    width: 150,
  },

  // cardWidth: {
  //   paddingTop: '25%',
  //   height: 200
  // },

  // searchingFor: {
  //   color: themes.palette.primary.light,
  //   width: 200
  // },

  // button: {
  //   backgroundColor: themes.palette.secondary.light,
  //   color: 'white',
  //   marginTop: 50,
  // }
});

export default withStyles(styles)(Freelancer);

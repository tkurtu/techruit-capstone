import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import avatarImage from '../Recruiters/ProfileModal/grey-image.jpg';

const Freelancer = (props) => {
  const { classes } = props
  return (
    <section className={classes.root}>
      <div>
        <Avatar
          className={classes.avatar}
          alt="avatar goes here"
          src={props.image}
          className={classes.avatar} />
      </div>
      <div className={classes.width}>
        <Typography variant="h4" className={classes.title}>{props.name}</Typography>
        <span>{props.occupation}</span>
        <p>{props.skills}</p>
        <Link className={classes.link} to={`/freelancers/${props.id}`}>
          <Button className={classes.button}>more </Button>
        </Link>
      </div>



    </section>
  )
}

const styles = themes => ({
  root: {
    display: 'flex',
    marginBottom: "50px",
    width: "50%",
    [themes.breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '100%'
    },
  },

  title: {
    color: themes.palette.secondary.dark,
    fontWeight: 600,
  },

  avatar: {
    margin: '0px auto',
    marginTop: 10,
    height: 150,
    width: 150,
  },

  width: {
    marginLeft: '5%',
    [themes.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },

  link: {
    textDecoration: 'none',
    color: themes.palette.secondary.dark,
    fontWeight: 600,
  },

  button: {
    backgroundColor: themes.palette.primary.main,
    color: 'white',
  }
});

export default withStyles(styles)(Freelancer);

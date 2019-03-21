import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';


const Navbar = props => {
  const { classes } = props;
  return (
   <div className={classes.root}>
     <AppBar position="static" className={classes.appbar}>
     <Toolbar>
     <Typography className={classes.grow} variant="display1">
     <Link to='/'className={classes.link} color="inherit" >
       TECHruit
      </Link>
     </Typography>
     <Typography variant="h6" className={classes.profile}>
       myProfile
     </Typography>
        <Button className={classes.button1}>LOGIN</Button>
        <Button className={classes.button2} variant="outlined">SIGN UP</Button>
      </Toolbar>
    </AppBar>
  </div>
  );
}

const styles = themes => ({ 
  root: {
    flexGrow: 1,
    width: 'auto',
    marginTop: 30,
    marginBottom: 30,
    height: 50,
    // marginLeft: themes.spacing.unit * 3,
    // marginRight: themes.spacing.unit * 3,
    // [themes.breakpoints.up(1200 + themes.spacing.unit * 3 * 2)]: {
		// 	width: 1100,
    //   // marginLeft: 'auto',
    //   // marginRight: 'auto',
    // },
  },
  
  link: {
    textDecoration: 'none',
    color: themes.palette.primary.main,
    fontWeight: 600,
  },
  appbar: {
    backgroundColor: themes.palette.primary.contrastText,
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1,
  },
  profile: {
    color: themes.palette.secondary.dark,
    marginRight: '30px',
  },
   button1: {
    backgroundColor: themes.palette.primary.dark,
    color: 'white',
    margin: '0 10px',
    width: 100,
  },
  button2: {
    backgroundColor: themes.palette.secondary.contrastText,
    color: themes.palette.primary.dark,
    margin: '0 10px',
    width: 100,
  }
})

export default withStyles(styles)(Navbar);


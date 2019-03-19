import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
// import {Link} from 'react-router-dom';


const Navbar = props => {
  const { classes } = props;
  return (
   <div className={classes.root}>
     <AppBar position="static" className={classes.appbar}>
     <Toolbar>
     <Typography className={classes.grow} variant="display1">
       TECHruit
     </Typography>
     <Typography variant="h6" className={classes.profile}>
       myProfile
     </Typography>
        <Button className={classes.button}>LOGIN</Button>
        <Button className={classes.button}>SIGN UP</Button>
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
    marginLeft: themes.spacing.unit * 3,
    marginRight: themes.spacing.unit * 3,
    [themes.breakpoints.up(1200 + themes.spacing.unit * 3 * 2)]: {
			width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  appbar: {
    backgroundColor: themes.palette.primary.contrastText,
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1,
    color: themes.palette.primary.dark,
    fontWeight: 600,
  },
  profile: {
    color: themes.palette.secondary.dark,
    marginRight: '30px',
  },
  button: {
    backgroundColor: themes.palette.primary.main,
    color: 'white',
    margin: '0 10px',
    width: 100,
    
  }
})

export default withStyles(styles)(Navbar);


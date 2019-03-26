import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null
    };
  }

  handleClick = e => {
    console.log(e.currentTarget);
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div id="rootNav" className={classes.root}>
        <AppBar color="secondary.constrastText" className={classes.appbar}>
          <Toolbar>
            <Typography component={Link} to="/" className={classes.link} variant="h3">
              TECHruit
            </Typography>
            <div className={classes.fullNavButtons}>
              <Button className={classes.button1}>LOGIN</Button>
                <Link to='/signup' className={classes.link}>
                  <Button className={classes.button2} variant="raised">SIGN UP
                  </Button>
               </Link>
            </div>

            <IconButton onClick={this.handleClick} size="medium" className={classes.mobileNavButtons}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" 
            anchorEl={anchorEl} 
            open={Boolean(anchorEl)} 
            onClose={this.handleClose}>
              <div className={classes.anchor} tabIndex={0} role="button" onClick={this.toggleDrawer}>
                <Typography>
                  <Link to="/" className={classes.link}>
                  <Button className={classes.buttonMobile}>HOME</Button>
                  </Link>
                  <Button className={classes.buttonMobile}>LOGIN</Button>
                  <Link to="/signup" className={classes.link}>
                  <Button className={classes.buttonMobile}>SIGN UP</Button>
                  </Link>
                </Typography>
              </div>
            </Drawer>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = themes => ({
  root: {
    flexGrow: 1,
    width: 'auto',
    marginTop: 30,
    marginBottom: 30,
    height: 50
  },

  link: {
    textDecoration: 'none',
    color: themes.palette.secondary.main,
    fontWeight: 600,
    flexGrow: 1
  },
  appbar: {
    boxShadow: 'none',
    position: 'static',
  },

  fullNavButtons: {
    [themes.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  mobileNavButtons: {
    transform: 'scale(1.5)',
    color: themes.palette.secondary.dark,
    [themes.breakpoints.up('md')]: {
      display: 'none'
    }
  },

  buttonMobile: {
    width: '100%',
    height: 100,
    color: themes.palette.primary.dark,
    marginTop: 40,
    textDecoration: 'none',
  },

  anchor: {
    width: 200,
  },

  profile: {
    color: themes.palette.secondary.dark,
    marginRight: '30px'
  },
  button1: {
    backgroundColor: themes.palette.primary.dark,
    color: 'white',
    margin: '0 10px',
    width: 100
  },
  button2: {
    backgroundColor: themes.palette.secondary.contrastText,
    color: themes.palette.primary.dark,
    margin: '0 10px',
    width: 100
  }
});

export default withStyles(styles)(Navbar);

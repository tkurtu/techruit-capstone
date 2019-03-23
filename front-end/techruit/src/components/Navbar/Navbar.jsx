import React, { Component } from 'react';
import '../SignUp/SignUpModal.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
// import SignUpModal from '../SignUp/SignUpModal';

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
       {/* { this.props.showModal ? 
       <div onClick={this.props.closeModal} className="back-drop">
       </div> : null } */}
      
        <AppBar color="secondary.constrastText" className={classes.appbar}>
          <Toolbar>
            <Typography component={Link} to="/" className={classes.link} variant="h3">
              TECHruit
            </Typography>
            <div className={classes.fullNavButtons}>
              
              {/* <SignUpModal /> */}

              <Button className={classes.button1} onClick={this.props.openModal}>LOGIN</Button>
              <Button className={classes.button2} variant="raised">
                SIGN UP
              </Button>
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
                  <Button className={classes.buttonMobile} onClick={this.props.openModal}>LOGIN</Button>
                  <Button className={classes.buttonMobile}>SIGN UP</Button>
                  <Button className={classes.buttonMobile} onClick={this.props.openModal}>About</Button>
                  <Button className={classes.buttonMobile} onClick={this.props.openModal}>Contact</Button>
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

// marginLeft: themes.spacing.unit * 3,
// marginRight: themes.spacing.unit * 3,
// [themes.breakpoints.up(1200 + themes.spacing.unit * 3 * 2)]: {
// 	width: 1100,
//   // marginLeft: 'auto',
//   // marginRight: 'auto',
// },

import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';

class Navbar extends Component {
  constructor() {

    super();
    this.state = {
      anchorEl: null,  
    };
  }

  handleClick = e => {
    console.log(e.currentTarget)
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
        <AppBar positionStatic color="secondary.constrastText" className={classes.appbar}>
          <Toolbar>
            <Typography component={Link} to="/" className={classes.link} variant="display1">
              TECHruit
            </Typography>

            <div className={classes.fullNavButtons}>
              <Button className={classes.button1}>LOGIN</Button>
              <Button className={classes.button2} variant="outlined">
                SIGN UP
              </Button>
            </div>

            <MenuIcon onClick={this.handleClick} className={classes.mobileNavButtons}>
              testing
            </MenuIcon>

            <Drawer anchor="right" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
              <div tabIndex={0} role="button" onClick={this.toggleDrawer}>
                <ul>
                  <br /><br /><br /><br /><br />
                  <li>hodsfklj</li>
                  <li>sadfsadf</li>
                  <li>hodsfklj</li>
                  <li>sadfsadf</li>
                </ul>
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
    // marginTop: 30,
    // marginBottom: 30,
    height: 50
  },

  link: {
    textDecoration: 'none',
    color: themes.palette.primary.main,
    fontWeight: 600,
    flexGrow: 1
  },
  appbar: {
    // backgroundColor: themes.palette.primary.contrastText,
    boxShadow: 'none'
  },

  fullNavButtons: {
    [themes.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  mobileNavButtons: {
    [themes.breakpoints.up('md')]: {
      display: 'none'
    }
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

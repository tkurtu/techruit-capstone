import React from 'react';
// import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from './Grid/Grid';

const Main = props => {
  const { classes } = props;
  return (
    <div>
    <Typography className={classes.grow} variant="h3">
        Build your Team
     </Typography>
     <Grid />
    </div>
  )
}

const styles = themes => ({ 
  grow: {
    flexGrow: 1,
    color: themes.palette.secondary.main,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '50px'
  },
})


export default withStyles(styles)(Main);

//two cards with links one to users and one to employeers
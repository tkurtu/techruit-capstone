import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from './Grid/Grid';

const Main = props => {
  const { classes } = props;
  return (
    <div>
    <Typography className={classes.grow} variant="h2">
        build your team
     </Typography>
     <Grid />
    </div>
  )
}

const styles = themes => ({ 
  grow: {
    flexGrow: 1,
    color: themes.palette.primary.main,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '50px',
    [themes.breakpoints.down('xs')]: {
      fontSize: '3rem'
    }
  },
})


export default withStyles(styles)(Main);

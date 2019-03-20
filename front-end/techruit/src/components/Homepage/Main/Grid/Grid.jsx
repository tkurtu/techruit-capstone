import React from 'react';
// import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const Grid = props => {
  const { classes } = props;
  return (
    <div>
      {/* <Grid>

      </Grid> */}

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
  },
})


export default withStyles(styles)(Grid);
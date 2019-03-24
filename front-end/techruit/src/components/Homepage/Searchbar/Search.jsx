import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { typography } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';



class Search extends React.Component {
render() {
  const { classes } = this.props;
  return (
    <div> 
    <Typography className={classes.title} variant="h4">SEARCH JOB</Typography>
    <form onSubmit={(e) => this.props.searchJob(e)}>
      <InputBase 
      className={classes.input}
      placeholder="search..."
      name='searchTerm'/>
        <Button variant="raised" type="submit" className={classes.button}>
          Discover 
        </Button>
    </form>
    </div>
  )
  }
}

const styles = themes => ({

  title: {
    color: themes.palette.secondary.contrastText,
    paddingTop: 50,
  },

  button: {
    backgroundColor: themes.palette.secondary.contrastText,
    color: themes.palette.primary.dark,
    marginLeft: 20,
  },

  input: {
    width: '50%',
    borderRadius: 10,
    backgroundColor: themes.palette.secondary.contrastText,
    [themes.breakpoints.down('sm')]: {
      width: 200,
      // '&:focus': {
      //   width: 200,
      // },
    },
  }
  
})


export default withStyles(styles)(Search);

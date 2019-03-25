import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { typography } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
// import TextField from '@material-ui/core/TextField';


class Search extends React.Component {
render() {
  const { classes } = this.props;
  return (
    <div className={classes.wrapper} > 
    <Typography className={classes.title} variant="h2">search your job</Typography>
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
    color: themes.palette.primary.main,
    fontWeight: 600,
    textAlign: 'center',
    paddingBottom: '30px',
    [themes.breakpoints.down('xs')]: {
      fontSize: '3rem'
    }
  },

  button: {
    backgroundColor: themes.palette.secondary.dark,
    color: themes.palette.secondary.contrastText,
    textAlign: 'center',
  },

  wrapper: {
    textAlign: 'center',
    backgroundColor: themes.palette.secondary.contrastText,
    paddingBottom: '15%',
    paddingTop: '15%',
  },

  input: {
    borderRadius: 10,
    width: '50%',
    marginRight: 20,
    backgroundColor: 'white',
    [themes.breakpoints.down('sm')]: {
      width: 200,
    },
  }
})


export default withStyles(styles)(Search);

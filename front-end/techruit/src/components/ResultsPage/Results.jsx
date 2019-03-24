import React, { Component } from 'react';
import SearchResults from '../Homepage/Searchbar/SearchResults';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



class Results extends React.Component {
render() {
  const { classes } = this.props;
  const jobSearch = this.props.jobs.map(job => {
  return (
    <SearchResults 
      title={job.title}
      description={job.description} 
      location={job.redirect_url}
    />
  )
  })
    return (
      <div>
        <Typography variant="h4" className={classes.title}>
            RESULTS
        </Typography>
        <Grid item xs={12}>
        {/* <Grid
         container
         direction="row"
         justify="space-evenly"
         alignItems="center"
        > */}
          {jobSearch}
        </Grid>
        {/* </Grid> */}
        {/* <ul>{jobSearch}</ul> */}
      </div>
    );
  }
}

const styles = themes => ({ 
  title: {
    color: themes.palette.primary.main,
    marginLeft: 40,
    padding: 30,
  },
})

export default withStyles(styles)(Results);





// class Results extends React.Component {
//   render() {
//     const jobSearch = this.props.jobs.map(job => {
//     return <SearchResults 
//       title={job.title}
//       description={job.description}
//       location={job.redirect_url}
//       />
//     })
//       return (
//         <div>
//           <h1>RESULTS</h1>
//           <ul>{jobSearch}</ul>
//         </div>
//       );
//     }
  
//   }
  
//   export default Results;
  
  
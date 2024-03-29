import React from 'react';
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
          redirect_url={job.redirect_url}
          company={job.company.display_name}
          location={job.location.display_name}
        />
      )
    })


    return (
      <div>
        <Typography variant="h3" className={classes.title}>
          results
        </Typography>
        <Grid item xs={12} padding={30}>
          {jobSearch}
        </Grid>
      </div>
    );
  }
}

const styles = themes => ({
  title: {
    color: themes.palette.primary.main,
    padding: 30,
  },
})

export default withStyles(styles)(Results);

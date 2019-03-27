import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

class Recruiter extends React.Component {
  render() {
    const { classes,recruiter, handleOpen } = this.props;
    const { companyName, type } = recruiter
  
    return (
      <section className={classes.root}>
  
        <Grid item xs={12}>
          <Grid 
          container direction="row"
           justify="space-between"
            alignItems="center"
            flexwr>
            <Card>
              <CardContent boxShadow={3} className={classes.cardWidth}>
                <Typography variant="h5">{companyName}</Typography>
                <div>
                  <Typography className={classes.searchingFor}>
                    {type}
                  </Typography>
                  <Button
                    onClick={() => handleOpen(recruiter)}
                    className={classes.button}
                    >
                    open profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
    );
  }
}

const styles = themes => ({
  root: {
    flexGrow: 1,
    width: 300,
    margin: '10px 0'
  },

  link: {
    textDecoration: 'none',
    color: themes.palette.primary.dark
  },

  cardWidth: {
    paddingTop: '25%',
    height: 200
  },

  searchingFor: {
    color: themes.palette.primary.light,
    width: 200
  },

  button: {
    backgroundColor: themes.palette.secondary.light,
    color: 'white',
    marginTop: 50,
  }
});

export default withStyles(styles)(Recruiter);


// description, lookingFor, id,, email
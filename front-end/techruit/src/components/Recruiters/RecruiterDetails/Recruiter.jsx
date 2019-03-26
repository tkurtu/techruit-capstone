import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

class Recruiter extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <Grid item xs={12}>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <Card>
              <CardContent boxShadow={3} className={classes.cardWidth}>
                <Typography variant="h5">{this.props.companyName}</Typography>
                <div>
                  <Typography className={classes.searchingFor}>
                    Searching for: {this.props.lookingFor}
                  </Typography>
                  <p>{this.props.type}</p>

                  {/* <Link className={classes.link} to={`/recruiters/${this.props.id}`}> */}
                  <Button 
                  onClick={() => {
                    this.props.handleOpen();
                  }}
                  className={classes.button}
                  >
                  open profile
                  </Button>
                  {/* </Link> */}
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
    // margin: '2%'
  },

  link: {
    textDecoration: 'none',
    color: themes.palette.primary.dark
  },

  cardWidth: {
    // textAlign: "center",
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
    width: 100
  }
});

export default withStyles(styles)(Recruiter);

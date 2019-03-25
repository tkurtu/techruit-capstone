import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { shadows } from '@material-ui/system';


const Recruiter = props => {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Link className={classes.link} to={`/recruiters/${props.id}`}>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
          <Card>
            <CardContent boxShadow={3} className={classes.cardWidth}>
              <Typography variant="h5">{props.companyName}</Typography>
              <div>
                <Typography className={classes.searchingFor}>Searching for: {props.lookingFor}</Typography>
                <p>{props.type}</p>
              </div>
            </CardContent>
            </Card>
            {/* <Button className={classes.button}>view</Button> */}
          </Grid>
        </Grid>
      </Link>
    </section>
  );
};

const styles = themes => ({
  root: {
    flexGrow: 1,
    width: 300,
    margin:'10px 0',
    // margin: '2%'
  },

  link: {
    textDecoration: 'none',
    color: themes.palette.primary.dark
  },

  cardWidth: {
    // textAlign: "center",
    paddingTop: "25%",
    height: 200,
  },

  searchingFor: {
    color: themes.palette.primary.light,
    width: 200
  }

  // button: {
  //   backgroundColor: themes.palette.secondary.dark,
  //   color: 'white',
  //   width: 100
  // },
});

export default withStyles(styles)(Recruiter);

//apply here, link to website , link to profile

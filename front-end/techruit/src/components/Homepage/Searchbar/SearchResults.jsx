import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const SearchResults = props => {
  const { classes } = props;
  return (
      <Card className={classes.containerFlex}>
        <Typography
          variant="h5"
          className={classes.jobtitle}
          boxShadow="none"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <div className={classes.description}>
          <CardContent>
            {props.description}
            <Typography>
              <a className={classes.link} href={props.redirect_url}>
                Apply here
              </a>
            </Typography>
          </CardContent>
        </div>
      </Card>
  );
};

const styles = themes => ({
  containerFlex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: '2%',
    margin: '0 50px',
    marginBottom: '10%',
    borderColor: themes.palette.secondary.constrastText,
    [themes.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginLeft: 0,
      marginRight: 0
    }
  },

  jobtitle: {
    color: themes.palette.secondary.dark,
    fontWeight: 600,
    width: '25%',
    [themes.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center'
    }
  },

  description: {
    width: '50%',
    color: themes.palette.primary.dark,
    [themes.breakpoints.down('sm')]: {
      width: '100%'
    }
  },

  link: {
    textDecoration: 'none',
    color: themes.palette.secondary.main,
    fontWeight: 600,
    textAlign: 'center'
  }
});

export default withStyles(styles)(SearchResults);

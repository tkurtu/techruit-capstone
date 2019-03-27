import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import recruiters from './images/hire.svg';
import freelancers from './images/wireframe.svg';


const Grid = props => {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="wireframing png"
          className={classes.media}
          width="200"
          height="200"
          image={recruiters}
          title="wireframing png"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          <Link to="/freelancers" className={classes.link} >
            Tech Freelancers.
          </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="woman looking at computer"
          className={classes.media}
          width="200"
          height="200"
          image={freelancers}
          title="woman looking at computer"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          <Link to="/recruiters" className={classes.link}>
            Recruiters.
          </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}
const styles = themes => ({ 
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    [themes.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },

  link: {
    textDecoration: 'none',
    color: themes.palette.secondary.dark,
    fontWeight: 600,
  },

  root: {
    flexGrow: 1,
    marginTop: 30,
    maxWidth: 345,
    fontSize: 10,
    textAlign: 'center',
    boxShadow: "none",
  },

})


export default withStyles(styles)(Grid);
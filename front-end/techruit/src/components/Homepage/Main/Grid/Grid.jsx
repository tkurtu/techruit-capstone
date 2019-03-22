import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import search from './search.svg';
import computer from './computer.svg';


const Grid = props => {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Person typing"
          className={classes.media}
          height="140"
          image={computer}
          title="Person typing"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          <Link to="/freelancers" className={classes.link} >
            Tech Freelancers.
          </Link>
          </Typography>
          {/* <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>

      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Person typing"
          className={classes.media}
          height="140"
          image={search}
          title="Person typing"
          backgroundColor='orange'
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
    justifyContent: 'space-around'
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
    // minWidth: 275,
    fontSize: 10,
    backgroundColor:  themes.palette.secondary.contrastText,
    textAlign: 'center',
    // marginLeft: themes.spacing.unit * 3,
    // marginRight: themes.spacing.unit * 3,
    // [themes.breakpoints.up(1200 + themes.spacing.unit * 3 * 2)]: {
		// 	width: 1100,
    //   // marginLeft: 'auto',
    //   // marginRight: 'auto',
    // },
  },
})


export default withStyles(styles)(Grid);
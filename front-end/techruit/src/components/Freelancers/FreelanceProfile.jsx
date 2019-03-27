import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

class FreelanceProfile extends React.Component {
  render() {
    const { classes } = this.props;
    // console.log(this.props.freelancers)
    const currentFreelancer = this.props.freelancers.filter(freelancer => {
      return freelancer.id === this.props.match.params.id
    });
    // console.log(currentFreelancer[0]);
    const freelancer = currentFreelancer[0];

    return (
      <div className={classes.wrapper}>
        <div>
          <Avatar
            alt="avatar goes here"
            src={freelancer.image}
            className={classes.avatar} />
        </div>
        <div className={classes.width}>
          <Typography className={classes.title} variant="h3">{freelancer.name}</Typography>
          <Typography className={classes.subtitle} variant="h4">{freelancer.skills}</Typography>

          <Card className={classes.card}>
            <Typography variant="h5" className={classes.cardinfo}>
              contact:
            </Typography>
            {freelancer.email}
            <Typography variant="h5" className={classes.cardinfo}>
              about me:
            </Typography>
            {freelancer.description}
          </Card>
          <Button className={classes.button}>
            reach out to {freelancer.name}
          </Button>
        </div>
      </div>
    );
  }
}

const styles = themes => ({
  title: {
    color: themes.palette.secondary.dark,
    padding: "10px 30px",
  },

  subtitle: {
    color: themes.palette.primary.dark,
    fontWeight: 200,
    paddingLeft: 30,
  },

  cardinfo: {
    fontWeight: 400,
    color: themes.palette.primary.main,
  },

  button: {
    backgroundColor: themes.palette.primary.main,
    color: 'white',
    width: 300,
    margin: 30,
  },

  card: {
    padding: "20px 20px",
    margin: "20px 50px",
  },

  avatar: {
    margin: '0px auto',
    height: 250,
    width: 250,
  },

})


export default withStyles(styles)(FreelanceProfile);

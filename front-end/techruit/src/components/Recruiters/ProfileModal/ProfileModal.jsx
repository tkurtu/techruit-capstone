import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

class ProfileModal extends React.Component {
  render() {
    const { classes, selectedRecruiter: recruiter, handleClose, open } = this.props;

    return (
      <>
        {recruiter &&

          <section className={classes.root} >
            <Modal
              onClose={handleClose}
              open={open}
              className={classes.modal}>
              <Card className={classes.paper}>
                <Typography className={classes.name} variant="h3" id="modal-title">
                  {recruiter.companyName}
                </Typography>
                <Avatar 
                alt="avatar goes here" 
                src={recruiter.image}
                className={classes.avatar} />

                <div className={classes.textWrapper} >
                  <Typography 
                  variant="h5" 
                  id="simple-modal-description"
                  className={classes.subtitle}
                  >
                  searching for: <br></br> {recruiter.lookingFor}
                  </Typography>
                  <p>{recruiter.description}</p>
                  <Button className={classes.button}>
                  email us at {recruiter.email}
                  </Button>
                </div>
              </Card>
            </Modal>
          </section>
        }
      </>
    );
  }
}

const styles = themes => ({
  root: {
    flexGrow: 1,
    width: 300,
    margin: '10px 0'
  },

  name: {
    color: themes.palette.primary.dark,
    paddingBottom: 30,
  },

  modal: {
    position: 'absolute',
    width: 450,
    textAlign: 'center',
    margin: '0 auto',
    top: '30%',
    [themes.breakpoints.down('sm')]: {
      width: '75%'
    }
  },

  subtitle: {
    color: themes.palette.secondary.dark,
  },

  textWrapper: {
    textAlign: 'left',
  },

  avatar: {
    margin: '0px auto',
    height: 150,
    width: 150,
  },
  paper: {
    height: 500,
    padding: 40,
  },

  button: {
    backgroundColor: themes.palette.primary.main,
    color: themes.palette.secondary.contrastText,
    marginTop: 50,
  }
});

export default withStyles(styles)(ProfileModal);

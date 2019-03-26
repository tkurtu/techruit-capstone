import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class ProfileModal extends React.Component {
  render() {
    console.log(this.props)

    const { classes } = this.props;
    return (
      <section className={classes.root}>
        <Modal
          onClose={this.props.handleClose}
          open={this.props.open}
          className={classes.modal}>
          <Card className={classes.paper}>
            <Typography className={classes.name} variant="h3" id="modal-title">
              {/* PASS COMPANYNAME */}
              NAME
            </Typography>
            <div className={classes.textWrapper} >
              <Typography variant="subtitle1" id="simple-modal-description">
                {/* PASS DESCRIPTION */}
                description section: We're looking for top Data Scientists and gurus to join our field. If you're right for the job, please call or send us an email
            </Typography>
            <Button>
              email
            </Button>
            </div>
          </Card>
        </Modal>
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

  textWrapper: {
    textAlign: 'left',
  },

  paper: {
    height: 500,
    padding: 40,
  }
});

export default withStyles(styles)(ProfileModal);

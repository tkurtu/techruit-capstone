import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

class ProfileModal extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <section className={classes.root}>
        <Modal 
        onClose={this.props.handleClose}
        open={this.props.open}
        >
          <div className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              THIS IS MY MODAL
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              text inside the modal.
            </Typography>
          </div>
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
    // margin: '2%'
  }
});

export default withStyles(styles)(ProfileModal);
